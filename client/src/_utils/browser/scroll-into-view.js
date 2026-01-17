// 跳转到对应章节
export default function scrollToItem(id) {
    const element = document.getElementById(id);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth", // 平滑滚动
            block: "start", // 滚动到顶部
        });
    }
}
