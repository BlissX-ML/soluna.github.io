---
titleEn: ""
titleCh: "箭头函数的特点"
tags: ["JavaScript"]
---

1. **没有自己的 this**
    1. 原理：箭头函数的 this 只会从**定义位置的外层作用域**继承，不会因为谁调用它而改变。
    
    ```jsx
    const obj = { x: 1 };
    const fn = () => this;
    fn.call(obj);    // this 仍然是外层（非 obj）
    ```
    
2. **不能使用 call / apply / bind 改变 this**
    1. 原理：箭头函数没有 this，所以这些方法只能传参，不能绑定 this
    
    ```jsx
    const f = () => this.x;
    f.call({ x: 10 });    // this 无法变成 {x:10}
    ```
    
3. **没有 arguments（只能用剩余参数 `...args`）**
    1. 原理：箭头函数不会创建自己的 arguments
    
    ```jsx
    const fn = () => console.log(arguments); // 报错
    ```
    
4. **不能作为构造函数且没有 `prototype` （不能 `new`）**
    1. 原理：箭头函数没有内部 `[[Construct]]`，没有自己的 this，所以不能被 new 调用。
    
    ```jsx
    const Foo = () => {};
    new Foo();             // TypeError
    
    (() => {}).prototype;    // undefined
    ```
    
5. **与严格模式无关（严格模式不影响箭头函数的 this）**
    1. 原理：箭头函数的 this 是词法绑定，不受 "use strict" 影响。
6. **更适合作为匿名函数（语法短、无 this 干扰）**
    - 原理：简单表达式、回调、数组方法中非常常用。
    - 示例：`[1,2,3].map(x => x * 2);`

---

```jsx
var name = "window";

var person1 = {
	name: "person1",
	foo1: function () {
		console.log(this.name);
	},
	foo2: () => console.log(this.name),
	foo3: function () {
		return function () {
			console.log(this.name);
		};
	},
	foo4: function () {
		return () => {
			console.log(this.name);
		};
	}
};

var person2 = { name: "person2" };

person1.foo1();                  // "person1"
person1.foo1.call(person2);      // "person2"

person1.foo2();                  // "window"
person1.foo2.call(person2);      // "window"

person1.foo3()();                // "window" (返回的是一个普通函数，普通函数的 this 对应 window)
person1.foo3.call(person2)();    // "window" (返回的是一个普通函数，普通函数的 this 对应 window)
person1.foo3().call(person2);    // "person2"

person1.foo4()();                // "person1" (person1 是该嵌套箭头函数的外部作用域)
person1.foo4.call(person2)();    // "person2"
person1.foo4().call(person2);    // "person1"

// 箭头函数只看它外层的作用域
// 谁包裹了这个箭头函数，就从谁那里拿 this
// 如果外层也是箭头函数，就再往上找，直到找到普通函数或全局作用域
```