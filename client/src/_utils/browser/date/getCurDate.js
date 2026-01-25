// export function getLocaleDate(d) {
//     const date = d
//         .toLocaleString('zh-CH', {
//             year: 'numeric',
//             month: '2-digit',
//             day: '2-digit',
//             weekday: 'long',
//             hour: '2-digit',
//             minute: '2-digit',
//             second: '2-digit',
//             hour12: false
//         })
//         .replace(/\//g, '-');

//     return date;
// }

export function getCurDate(d) {
    const year = d.getFullYear();
    const month = (d.getMonth() + 1).toString().padStart(2, 0);
    const date = (d.getDate() + 1).toString().padStart(2, 0);
    const day = d.toLocaleDateString('zh-CN', { weekday: 'long' });

    const hour = d.getHours().toString().padStart(2, 0);
    const minute = d.getMinutes().toString().padStart(2, 0);
    const second = d.getSeconds().toString().padStart(2, 0);

    return `${year}-${month}-${date} (${day}) ${hour}:${minute}:${second}`;
}

export function getLocaleDate(d) {
    const year = d.getFullYear();
    const month = d.getMonth();
    const date = d.getDate();

    return `${year}}, ${month}, ${date}`;
}
