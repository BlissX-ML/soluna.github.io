const getRandom = () => {
    return (Math.random() * 2 - 1).toFixed(2);
};

// Repository's category
export const Repository_Navigate = [
    {
        key: "Computer",
        title: "计算机相关",
        level: 1,
        delayTime: getRandom(),
        detail: {
            level: 2,
            data: [
                { key: "computer_html", title: "HTML", src: "" },
                { key: "computer_css", title: "CSS", src: "" },
                { key: "computer_js", title: "JavaScript", src: "" },
                { key: "computer_react", title: "React", src: "" },
                { key: "computer_408", title: "考研 408 知识点", src: "" },
            ],
        },
    },

    {
        key: "Chemistry",
        title: "化学相关",
        level: 1,
        delayTime: getRandom(),
        detail: {
            level: 2,
            data: [
                { key: "inorganic-chemistry", title: "无机化学", src: "" },
                { key: "organic-chemistry", title: "有机化学", src: "" },
                { key: "physical-chemistry", title: "物理化学", src: "" },
                { key: "analytical-chemistry", title: "分析化学", src: "" },
                { key: "gaussian", title: "Gaussain计算", src: "" },
            ],
        },
    },

    {
        key: "Language",
        title: "语言相关",
        level: 1,
        delayTime: getRandom(),
        detail: {
            level: 2,
            data: [
                { key: "english-language", title: "英语 English", src: "" },
                { key: "japanese-language", title: "日語 にほんご", src: "" },
                { key: "korean-language", title: "韩语 한국어", src: "" },
            ],
        },
    },

    {
        key: "Animal",
        title: "动物学相关",
        level: 1,
        delayTime: getRandom(),
        detail: { level: 2, data: [{ key: "", title: "", src: "" }] },
    },
];

export const RECAP_MAIN_KEYS = [...Repository_Navigate].map((el) => el.key);

// export const SUB_TO_MAIN = Object.fromEntries(
//     RECAP_Detailed_Nav.flatMap(group =>
//         group.content.map(item => [item.key, group.key])
//     )
// );
