// scripts/convert-to-webp.js
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

// 在 ES Module 中获取 __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.resolve(__dirname, '../../../public/images/png'); // 输入目录

const outputDir = path.resolve(__dirname, '../../../public/images/webp'); // 输出目录

console.log(outputDir);
// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

async function optimizeImages() {
    const files = fs.readdirSync(inputDir);

    for (const file of files) {
        const ext = path.extname(file).toLowerCase();
        const name = path.basename(file, ext);
        const inputPath = path.join(inputDir, file);

        try {
            // 处理 jpg/png - 生成三个版本
            if (['.jpg', '.jpeg', '.png'].includes(ext)) {
                // 低画质缩略图
                await sharp(inputPath)
                    .resize(50) // 超小尺寸
                    .webp({ quality: 20 })
                    .toFile(path.join(outputDir, `${name}-thumb.webp`));

                // 中等画质（快速加载）
                await sharp(inputPath)
                    .resize(800) // 适中尺寸
                    .webp({ quality: 60 })
                    .toFile(path.join(outputDir, `${name}-medium.webp`));

                // 高画质（最终版本）
                await sharp(inputPath)
                    .webp({ quality: 85 })
                    .toFile(path.join(outputDir, `${name}.webp`));

                console.log(`✓ ${file} converted to webp (3 versions)`);
            }
            // 处理已有的 webp - 只生成缩略图和中等版本
            else if (ext === '.webp') {
                // 低画质缩略图
                await sharp(inputPath)
                    .resize(50)
                    .webp({ quality: 20 })
                    .toFile(path.join(outputDir, `${name}-thumb.webp`));

                // 中等画质
                await sharp(inputPath)
                    .resize(800)
                    .webp({ quality: 60 })
                    .toFile(path.join(outputDir, `${name}-medium.webp`));

                // 复制原文件作为高画质版本
                await sharp(inputPath)
                    .webp({ quality: 85 })
                    .toFile(path.join(outputDir, `${name}.webp`));

                console.log(`✓ ${file} optimized (3 versions)`);
            }
        } catch (error) {
            console.error(`✗ Error processing ${file}:`, error.message);
        }
    }

    console.log('\n🎉 All images processed!');
}

optimizeImages().catch(console.error);
