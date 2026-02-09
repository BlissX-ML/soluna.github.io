// server/server.js
const express = require('express');
const path = require('path');

const app = express();

// 静态文件目录
const distPath = path.join(__dirname, '../client/dist');

// 托管前端静态文件
app.use(express.static(distPath));

// 所有请求都返回 index.html
app.get('*', (req, res) => {
    res.sendFile(path.resolve(distPath, 'index.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});
