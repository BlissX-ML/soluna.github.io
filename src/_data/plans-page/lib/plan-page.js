// 1) 格式化今天：显式指定 zh-CN，避免再用 slice
export function formatToday(locale = 'zh-CN', timeZone = 'Asia/Shanghai') {
    const s = new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        weekday: 'long',
        timeZone
    }).format(new Date());         // "2025年10月30日星期二"

    const reg = /星期[一二三四五六日]$/g
    const m = s.match(reg);

    return s.replace(m[0], `（${m[0]}）`);
}



// 2) 监听跨天更新：每分钟检查一次是否进入新的一天
// onChange: (str) => {...} 用来把新日期渲染到 UI,对应 useState 内的 setToday 
export function startDateWatcher(onChange) {
    let last = new Date().toDateString();   // 只用于比较是不是同一天
    onChange(formatToday());                // 先渲染一次

    const id = setInterval(() => {
        const cur = new Date().toDateString();
        if (cur !== last) {                   // 跨天
            last = cur;
            onChange(formatToday());
        }
    }, 60 * 1000);

    // 返回停止函数，组件卸载时调用以清理定时器
    return () => clearInterval(id);
}