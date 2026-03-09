// server/server.js
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import mdRoutes from './routes/mdRoutes.js';
import pdfRouter from './routes/pdfRouter.js';
import csvRouter from './routes/csvRoutes.js';

dotenv.config(); // 加载 .env 文件

const app = express();

// 静态文件目录
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 1. API 路由
app.use('/api/data/md', mdRoutes);
app.use('/api/data/csv', csvRouter);
app.use('/api/data/download', pdfRouter);

// 2. 托管前端打包出来的静态文件
app.use(express.static(path.join(__dirname, '../client/dist')));

// 3. 其他所有路径，都返回 index.html（交给 React 路由处理）
app.get('/*splat', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});
