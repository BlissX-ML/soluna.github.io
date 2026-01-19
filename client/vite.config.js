import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr"; // 转换 SVG 格式图片为 React 组件
import { ViteImageOptimizer } from "vite-plugin-image-optimizer"; // 实现图片压缩，静态打包

// const repoName = 'soluna.github.io'

// https://vite.dev/config/
export default defineConfig(() => ({
    plugins: [
        react(),
        svgr(),
        ViteImageOptimizer({
            png: {
                quality: 80,
            },
            jpeg: {
                quality: 75,
            },
            webp: {
                lossless: false,
                quality: 75,
            },
        }),
    ],
    resolve: {
        alias: {
            "@": "/src/_assets",
            "#": "/public",
        },
    },
    base: "/",
    // base: mode === 'production' ? `/${repoName}/` : '/',
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: `
          @use "@/_scss/_variable.scss" as *; 
          @use "@/_scss/_layout.scss" as *; 
          @use "@/_scss/_functions.scss" as *;
          @use "@/_scss/_fonts.scss" as *;
        `,
                javascriptEnabled: true,
            },
        },
    },
    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/setupTests.js",
    },
}));
