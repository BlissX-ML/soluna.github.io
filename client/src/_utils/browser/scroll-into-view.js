// 跳转到对应章节
export default function scrollToItem(id) {
    const element = document.getElementById(id);

    const firstArticle = document.getElementById("plus-issue");
    console.log(getComputedStyle(firstArticle).scrollMarginTop);

    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    }
}
