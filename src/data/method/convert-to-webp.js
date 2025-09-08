// scripts/convert-to-webp.js
import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const inputDir = path.resolve('public/images/png');   // 输入目录
const outputDir = path.resolve('public/images/webp'); // 输出目录（放到 public 下）

// 确保输出目录存在
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
    const ext = path.extname(file).toLowerCase();
    const name = path.basename(file, ext);

    // 只处理 jpg/png
    if (ext === '.jpg' || ext === '.jpeg' || ext === '.png') {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, `${name}.webp`);

        sharp(inputPath)
            .webp({ quality: 75 })   // 设置质量 0-100
            .toFile(outputPath)
            .then(() => {
                console.log(`✅ Converted: ${file} → ${name}.webp`);
            })
            .catch(err => {
                console.error(`❌ Error converting ${file}:`, err);
            });
    }
});
