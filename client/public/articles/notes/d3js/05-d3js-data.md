---
titleEn: "D3.js Data Loading and Parsing"
titleCh: "D3.js 数据加载与解析"
tags: ["d3.js"]
---

1. **使用 D3 读取 CSV 数据**
    1. **`d3.csv(url, row)`**
        - **用途**：通过 **HTTP 请求**加载 CSV 文件并解析，返回一个 **Promise**
        - `url` → CSV 的 **URL / 相对路径**
        - `row` → 行转换函数（可选），处理每一行数据，若返回 `null / undefined` 可过滤该行
    2. **`d3.csvParse(string, row)`**
        - **用途**：解析一段 **CSV 内容字符串**，返回**对象数组**
        - `string` → CSV 原始文本
        - `row` → 行转换函数（可选），用于类型转换 / 重构字段
        - 默认将**首行作为表头**，列名作为对象 key，返回结果额外包含 `columns`（列名列表）
    3. **`d3.csvParseRows(string, row)`**
        - **用途**：解析 CSV 内容字符串，返回 **二维数组**
        - `row`：行处理函数（可选）
        - 每行数据为数组，不做列名映射，适用于**无表头或不需要列名**的场景
    4. **`d3.csvFormat(rows, columns)`**
        - **用途**：将 **对象数组** 格式化为 CSV 字符串（包含表头）， 属于 `csvParse` 的 **逆操作**
        - `rows` → 对象数组，如 `[{a:1, b:2}, {a:3, b:4}]`
        - `columns` → 指定输出的列，同时决定列的顺序（可选）
        - **示例**：`d3.csvFormat([{foo: "1", bar: "2"}], ["foo"])` → `"foo\\n1"`
    5. **`d3.csvFormatBody(rows[, columns])`**
        - **用途**：格式化对象数组为 CSV 字符串，但**不包含表头**
        - **作用定位**：等同于 `csvFormat`，只是省略第一行列名
    6. **`d3.csvFormatRows(rows)`**
        - 用途：将 **二维数组**格式化为 CSV 字符串， 属于 `csvParseRows` 的 **逆操作**
        - `rows`：数组的数组（每个子数组代表一行）
2. **使用 D3 读取 JSON 数据**
    1. **`d3.json(input, init)`**
        - 通过 URL 加载并解析 JSON 数据
        - `init` 会直接传递给底层 `fetch`，如 headers、method 等（可选）
        - 返回一个 **Promise**，解析结果为 JSON 对象