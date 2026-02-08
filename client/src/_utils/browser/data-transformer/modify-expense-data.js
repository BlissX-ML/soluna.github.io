export function changeExpenseData(data) {
    // 1. 解析 CSV，去掉表头和空行
    const rows = data
        .split('\n')
        .slice(1)
        .filter(line => line.trim())
        .map(line => {
            const [date, category, subCategory, amount] = line.split(',');

            const [year, month, day] = date.split('-');

            return {
                year,
                month,
                day,
                category: category.trim(),
                subCategory: subCategory.trim(),
                amount: Number(amount)
            };
        });

    // 2. 按月份分组
    const monthlyMap = {};

    rows.forEach(row => {
        const { month, category, subCategory, amount } = row;

        // 初始化月份
        if (!monthlyMap[month]) {
            monthlyMap[month] = { total: 0, categories: {} };
        }

        // 累加月总额
        monthlyMap[month].total += amount;

        // 初始化大类
        if (!monthlyMap[month].categories[category]) {
            monthlyMap[month].categories[category] = { total: 0, subs: {} };
        }

        // 累加大类总额
        monthlyMap[month].categories[category].total += amount;

        // 累加小类金额
        monthlyMap[month].categories[category].subs[subCategory] =
            (monthlyMap[month].categories[category].subs[subCategory] || 0) +
            amount;
    });

    // 3. 转换为数组格式
    return Object.keys(monthlyMap).map(month => ({
        month,
        total: +monthlyMap[month].total.toFixed(2), //  月总额
        detail: Object.keys(monthlyMap[month].categories).map(category => ({
            title: category,
            total: +monthlyMap[month].categories[category].total.toFixed(2), //  大类总额
            subs: Object.keys(monthlyMap[month].categories[category].subs).map(
                sub => ({
                    title: sub,
                    total: monthlyMap[month].categories[category].subs[sub] //  小类总额
                })
            )
        }))
    }));
}
