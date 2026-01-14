---
titleEn: "Does event bubbling impact performance?"
titleCh: "事件冒泡是否影响性能"
tags: ["JavaScript"]
---


1. 不会明显影响性能，事件冒泡是**轻量级操作**。
2. 若 **给很多子元素都绑定监听器** 那就会影响性能
    - **差的写法**：1000 个子元素都各绑一个 `onclick`。
    - **好的写法**（事件委托）：只在父元素绑一个 `onclick`，通过 `event.target` 判断点到的子元素是谁。
3. 冒泡其实是性能优化的帮手，而不是性能负担。

```html
<ul id="list">
  <li data-id="1">苹果</li>
  <li data-id="2">香蕉</li>
</ul>

<script>
  const list = document.getElementById("list");

  **// 只在父元素上绑定一次监听器**
  list.addEventListener("click", function (e) {
    if (e.target.tagName.toLowerCase() === "li") {
      console.log("你点到了 id =", e.target.dataset.id, "的元素");
    }
  });
</script>
```

```jsx
function FruitList() {
  const handleClick = (e) => {
    if (e.target.tagName.toLowerCase() === "li") {
      console.log("你点到了：", e.target.innerText);
    }
  };

  return (
    <ul onClick={handleClick}>
      <li data-id="1">苹果</li>
      <li data-id="2">香蕉</li>
    </ul>
  );
}
```