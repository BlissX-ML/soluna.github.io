---
titleEn: "Determine data type"
titleCh: "判断数据类型"
tags: ["JavaScript"]
---

1. **`typeof`**
    - **特点**：适合判断 **基本数据类型**。
    - **优点**：快速区分 `number` / `string` / `boolean` / `undefined` / `symbol`。
    - **缺点**：**`null`**、Array、Object 都返回 "object"，无法细分。
    - **示例**：`typeof [] → "object"`；`typeof null → "object"`
2. **`instanceof`**
    - **特点**：检测某对象是否是**某构造函数的实例**。
    - **优点**：能区分 Array / Object / Function，自定义类实例判断也适用。
    - **缺点**：对基本数据类型（`number`、`string`、`boolean`）无效。
    - **示例**：`[] instanceof Array → true`；`1 instanceof Number → false`
3. **`Object.prototype.toString.call()`**
    - **特点**：最精准的判断方式。
    - **优点**：**能区分所有类型**（包括 `null`、`undefined`）
    - **缺点**：写法繁琐，通常会封装成工具函数。
    - **示例**：`toString.call(null) → "[object Null]"`
4. **`constructor`**
    - **原理**：`实例.constructor` 指向**创建它的构造函数**，可用来判断对象由哪个构造函数创建
	- **示例**：`[].constructor === Array → true`

5. **面试速答口诀**：
	- **typeof** → 基本类型；
	- **instanceof** → 引用类型、自定义类；
	- **constructor**  → 检验其构造函数
	- **toString.call** → 万能精确判断。