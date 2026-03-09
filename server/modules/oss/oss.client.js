import { getOssClient } from './oss.service.js';

// PUT上传文件
async function putOssFile(url, content) {
    const client = await getOssClient();
    try {
        const result = await client.put(url, Buffer.from(content));
        console.log('PUT文件成功：', result.url);
        return result;
    } catch (err) {
        console.error('PUT文件失败：', err);
        throw err;
    }
}

// POST表单上传（适合前端上传场景，后端生成签名）
async function getPostUploadSignature(url) {
    const client = await getOssClient();
    try {
        // 生成POST上传的签名（给前端用）
        const policy = client.postPolicy({
            expiration: new Date(Date.now() + 10 * 60 * 1000), // 签名有效期10分钟
            conditions: [
                ['content-length-range', 0, 1024 * 1024 * 5], // 限制文件大小5MB
                ['eq', '$key', url] // 固定上传路径
            ]
        });
        return {
            policy: policy.policy,
            signature: policy.signature,
            accessKeyId: client.options.accessKeyId,
            key: url
        };
    } catch (err) {
        console.error('生成POST签名失败：', err);
        throw err;
    }
}

export { putOssFile, getPostUploadSignature };
