import { pdfjs } from 'react-pdf';


// ① 让 Vite 把 worker 当作静态资源处理，并返回真实 URL
// ② 告诉 pdf.js 使用上面的 worker
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    'pdfjs-dist/build/pdf.worker.min.mjs',
    import.meta.url
).toString();

// import workerSrc from 'pdfjs-dist/build/pdf.worker.min.mjs?url';
// pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;