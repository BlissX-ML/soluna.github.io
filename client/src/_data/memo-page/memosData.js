import { MEMOS, MEMOS_TYPES } from "./memo";

export const MEMOS_DATA = MEMOS_TYPES.map((memo) => {
    const key = memo.key; // 当前的 tag

    const fileNames = memo?.detail?.data.map((file) => file.fileName); // 所有匹配当前 type 的文件名

    const data = [];

    MEMOS.forEach((memo) => {
        if (fileNames.includes(memo?.fileName)) data.push(memo);
    });

    return { key: key, data: data };
});
