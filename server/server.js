// server/server.js
import express from 'express';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import mdRoutes from './routes/mdRoutes.js';
import pdfRouter from './routes/pdfRouter.js';
import csvRouter from './routes/csvRoutes.js';
import imagesRouter from './routes/imagesRoutes.js';

dotenv.config({ path: '.env' }); // 加载 .env 文件

const app = express();

// 静态文件目录
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// 允许跨域【 重点在于 resume 的downlaod 不要把 localhost:5000 写进去 】
// 本地开发：Vite proxy 转发 → 不需要 CORS
// 生产环境：同源 → 不需要 CORS
// app.use(
//     cors({
//         origin: 'http://localhost:3000', // 或 '*' 允许所有
//         methods: ['GET', 'POST']
//     })
// );

// 1. API 路由
app.use('/api/data/md', mdRoutes);
app.use('/api/data/csv', csvRouter);
app.use('/api/data/pdf', pdfRouter);
app.use('/api/data/images', imagesRouter);

// 2. 托管前端打包出来的静态文件
const clientDistPath = path.join(__dirname, '../client/dist');
app.use(
    express.static(clientDistPath, {
        maxAge: '1d',
        fallthrough: true,
        setHeaders: (res, filePath) => {
            // index.html 不缓存，保证每次都拿最新的
            if (filePath.endsWith('index.html')) {
                res.setHeader(
                    'Cache-Control',
                    'no-cache, no-store, must-revalidate'
                );
            }
        }
    })
);

// 4. SPA路由回退（处理所有非API/非静态资源的请求）
app.all('{*splat}', (req, res) => {
    // 验证路径是否正确：打印路径排查问题
    console.log('SPA fallback:', req.originalUrl);
    res.sendFile(path.join(clientDistPath, 'index.html'));
});

const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, '0.0.0.0', () => {
    console.log(`服务器运行在 http://localhost:${PORT}`);
});
