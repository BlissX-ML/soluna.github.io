import { OBTAINED_CERTIFICATE } from './obtained-certificate';

export const CERTIFICATE_CHART = OBTAINED_CERTIFICATE.map(firstLevel => {
    const details = firstLevel?.details;

    const secondLevel = details.map(el => ({
        title: el?.title,
        number: +el?.details.length
    }));

    const total = secondLevel.reduce((acc, start) => acc + start?.number, 0);

    const secondWithPercent = secondLevel.map(item => ({
        ...item,
        percent: ((item.number / total) * 100).toFixed(1) // 保留1位小数
    }));

    return {
        title: firstLevel?.title,
        number: total,
        details: secondWithPercent
    };
});
