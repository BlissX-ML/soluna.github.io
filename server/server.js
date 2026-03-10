// server/server.js
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';
import mdRoutes from './routes/mdRoutes.js';
import pdfRouter from './routes/pdfRouter.js';
import csvRouter from './routes/csvRoutes.js';

dotenv.config({ path: '.env' }); // 加载 .env 文件

const app = express();

// 静态文件目录
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 允许跨域
app.use(
    cors({
        origin: 'http://localhost:3000', // 或 '*' 允许所有
        methods: ['GET', 'POST']
    })
);

// 1. API 路由
app.use('/api/data/md', mdRoutes);
app.use('/api/data/csv', csvRouter);
app.use('/api/data/pdf', pdfRouter);

// 2. 托管前端打包出来的静态文件
app.use(express.static(path.join(__dirname, '../client/dist')));

// 3. 其他所有路径，都返回 index.html（交给 React 路由处理）
app.get('/*splat', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/dist', 'index.html'));
});

const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});
