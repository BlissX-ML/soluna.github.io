// `fs`只能用于 node 环境，不要放在这里面
export default async function fetchContent(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error("读取文件失败");
        const text = await res.text();
        // 必须 return，外部才能 await 拿到结果
        return text;
    } catch (err) {
        console.error(err);
        return null; // 出错时返回 null
    }
}
