// import { transformToRouteData } from '../../_utils/browser/data-transformer/data-transformer';
// import { D3JS_NOTES } from './d3js-raw';
// import { ECHART_NOTES } from './echart-raw';

const getRandom = () => {
    return (Math.random() * 2 - 1).toFixed(2);
};

// Repository's category
export const REPOSITORY_SIDEBAR = [
    {
        key: 'computer-related',
        title: '计算机相关',
        level: 1,
        delayTime: getRandom(),
        detail: {
            level: 2,
            data: [
                { key: 'html', title: 'HTML', detail: [] },
                { key: 'css', title: 'CSS', detail: [] },
                { key: 'js', title: 'JavaScript', detail: [] },
                { key: 'react', title: 'React', detail: [] },
                {
                    key: 'echart',
                    title: 'Echart'
                    // detail: transformToRouteData(ECHART_NOTES)
                },
                {
                    key: 'd3js',
                    title: 'D3.js'
                    // detail: transformToRouteData(D3JS_NOTES)
                },

                { key: '408', title: '考研 408 知识点', detail: [] }
            ]
        }
    },
    {
        key: 'eight-part-essay',
        title: '八股文',
        level: 1,
        delayTime: getRandom(),
        detail: {
            level: 2,
            data: [
                { key: 'HTML', title: 'HTML', detail: [] },
                { key: 'CSS', title: 'CSS', detail: [] },
                { key: 'JavaScript', title: 'JavaScript', detail: [] },
                { key: 'Engineering', title: 'Engineering', detail: [] }
            ]
        }
    },
    {
        key: 'chemistry-related',
        title: '化学相关',
        level: 1,
        delayTime: getRandom(),
        detail: {
            level: 2,
            data: [
                { key: 'inorganic-chemistry', title: '无机化学', detail: [] },
                { key: 'organic-chemistry', title: '有机化学', detail: [] },
                { key: 'physical-chemistry', title: '物理化学', detail: [] },
                { key: 'analytical-chemistry', title: '分析化学', detail: [] },
                { key: 'gaussian', title: 'Gaussain计算', detail: [] }
            ]
        }
    },

    {
        key: 'language-related',
        title: '语言相关',
        level: 1,
        delayTime: getRandom(),
        detail: {
            level: 2,
            data: [
                { key: 'english-language', title: '英语 English', detail: [] },
                {
                    key: 'japanese-language',
                    title: '日語 にほんご',
                    detail: []
                },
                { key: 'korean-language', title: '韩语 한국어', detail: [] }
            ]
        }
    }
    // {
    //     key: 'animal',
    //     title: '动物学相关',
    //     level: 1,
    //     delayTime: getRandom(),
    //     detail: { level: 2, data: [{ key: '', title: '', detail: [] }] }
    // }
];
