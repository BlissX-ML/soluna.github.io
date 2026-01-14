---
titleEn: "Differences Between `call`, `apply`, and `bind`"
titleCh: "`call` / `apply` / `bind` 区别总结"
tags: ["JavaScript"]
---


1. 相同点
    - 都能修改 this 指向
    - 第一个参数都是要绑定的对象
    - 都支持传参（bind 可以预置参数）
2. 区别
    - call：立即调用，参数依次传入
    - apply：立即调用，参数以数组形式传入
    - bind：不立即调用，返回一个绑定 this 的新函数
3. 示例代码
    
    ```jsx
    function greet(city) {
      console.log(`我叫 ${this.name}，来自 ${city}`);
    }
    
    const person = { name: "小刘" };
    
    // call：立即执行
    greet.call(person, "上海");
    
    // apply：立即执行（数组参数）
    greet.apply(person, ["北京"]);
    
    // bind：返回新函数，不立即执行
    const fn = greet.bind(person, "深圳");
    fn();
    ```