---
titleEn: "Support large file uploads"
titleCh: "实现大文件上传"
tags: ["JavaScript"]
---

1. **核心思路**
    1. 大文件不能一次性上传，需**拆分为多个小块**
    2. 前端负责切片与并发上传
    3. 后端负责接收切片并按顺序合并
2. **基本实现流程**
    1. 读取文件（File 对象）
    2. 按固定大小进行文件切片（Blob.slice）
    3. 逐个或并发上传切片
    4. 后端校验并合并所有切片
3. **前端关键步骤**
    1. 读取文件：通过 `<input type="file">` 获取 File 对象
    2. 文件切片：
        - 使用 `file.slice(start, end)` 按大小切分
        - 常见切片大小：**1MB 左右**
    3. 上传切片：
        - 每个切片用 FormData 包装
        - 携带信息：file、fileName、chunkName、index
        - 使用 Promise.all 并发发送请求
4. 常见优化点（面试加分）
    - **并发控制**：限制同时上传的切片数量
    - **断点续传**：已上传的切片不再重复上传
    - **秒传**：通过文件 hash 判断服务器是否已有文件。
    - **Web Worker**：切片和 hash 计算放到子线程。
    - **进度展示**：根据已完成切片数量计算进度。

```jsx
/***********************
 * 1. 获取 DOM 元素
 ***********************/
const input = document.getElementById("input");
const upload = document.getElementById("upload");

let file = null;        // 当前选择的大文件
let chunkList = [];     // 文件切片列表

/***********************
 * 2. 读取文件
 * input 选择文件后触发
 ***********************/
input.addEventListener("change", (e) => {
  // File 对象，包含 name / size / type 等信息。`e.target.files` 当前 input 里用户选中的文件列表（FileList）
  file = e.target.files[0];

  // 根据文件大小生成切片
  chunkList = createChunks(file);

  console.log("切片数量：", chunkList.length);
});

/***********************
 * 3. 文件切片
 * size：每个切片大小（默认 1MB）
 ***********************/
function createChunks(file, size = 1 * 1024 * 1024) {
  const chunks = [];
  let cur = 0;
	
	// 因为 file 是一个 File 对象，而 File 对象天生就带有 size 属性。 
  while (cur < file.size) {
    chunks.push({
      file: file.slice(cur, cur + size)      // Blob.slice 用来截取文件的一部分
    });
    cur += size;
  }

  return chunks;
}

/***********************
 * 4. 上传切片
 * list：切片信息列表
 ***********************/
async function uploadFile(list) {
  // 将每个切片转成一个上传请求
  const requestList = list.map(({ file, index, chunkName, fileName }) => {
    const formData = new FormData();
    
    formData.append("file", file);           // 当前切片文件
    formData.append("fileName", fileName);   // 原始文件名（用于后端合并）
    formData.append("chunkName", chunkName); // 当前切片名（文件名 + 序号）

    // 返回一个 Promise（一次上传请求）
    return fetch("/upload", {
      method: "POST",
      body: formData
    });
  });

  await Promise.all(requestList);            // 等待所有切片上传完成

  console.log("所有切片上传完成");
}

/***********************
 * 5. 点击上传按钮
 ***********************/
upload.addEventListener("click", () => {
  if (!file) return;

  // 给每个切片补充必要的元信息
  const uploadList = chunkList.map(({ file }, index) => ({
    file,
    index,
    fileName: file.name,               // 原文件名
    chunkName: `${file.name}-${index}`  // 切片名（用于排序）
  }));

  uploadFile(uploadList);
});

```