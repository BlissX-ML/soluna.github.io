const getZeroTime = d => new Date(d.getFullYear(), d.getMonth(), d.getDate());

const segementDiff = d => {
    const days = Math.floor(d / (1000 * 60 * 60 * 24));
    const hours = Math.floor((d % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((d % (1000 * 60 * 60)) / (1000 * 60));

    // return `${days}-${hours}-${minutes}`;
    return { days, hours, minutes };
};

const integerDiff = d => {
    const days = d / (1000 * 60 * 60 * 24);
    // return `${days}`;
    return { days };
};

// 返回的是对象，包含天数、小时数、分钟数
function diffDecimal(date1, date2) {
    const d = date2.getTime() - date1.getTime();

    if (!d || d < 0) {
        return '请更新日期';
    } else {
        return segementDiff(d); // 返回时间差值
    }
}

// date1是当前时间，date2是未来时间
// 返回的是对象，只包含天数
function diffInteger(date1, date2) {
    const d1 = getZeroTime(date1);
    const d2 = getZeroTime(date2);

    // 天数的差异，getTime 换成时间戳
    const d = d2.getTime() - d1.getTime();

    if (!d || d < 0) {
        return '请更新日期';
    } else {
        return integerDiff(d); // 返回时间差值
    }
}

export function diff(date1, date2) {
    const integer = diffInteger(date1, date2);
    const decimal = diffDecimal(date1, date2);
    return [integer, decimal];
}
