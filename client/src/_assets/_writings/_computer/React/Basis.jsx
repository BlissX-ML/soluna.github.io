import Markdown from 'react-markdown'

const markdown = `
### 1      What is React?

- What is React?
    - React is a **JavaScript library** for building user interfaces.
    - React is based on JavaScript but provides a more efficient and scalable development experience.
- While JavaScript is the foundation of React, using **plain JavaScript alone** to build complex UIs has several drawbacks:
    - ✅ Powerful enough to update content without full page reloads
    - ❌ Code can quickly become **cumbersome (臃肿)**
    - ❌ Easy to become **error-prone (出错)**
    - ❌ Difficult to **maintain or edit (维护和编辑困难)**`


export default function Basis() {
    return <Markdown>{markdown}</Markdown>

}