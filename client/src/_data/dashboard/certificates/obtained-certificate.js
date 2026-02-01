import { AWARDS_IMAGES } from './certificate-images-urls';

const awards = new Map(AWARDS_IMAGES.map(els => [els?.key, els?.detail]));

export const OBTAINED_CERTIFICATE = [
    {
        category: 'language-certificate',
        key: 'language-certificate',
        title: '语言类证书',
        details: [
            {
                category: 'english',
                key: 'english',
                title: '英语相关证书',
                details: awards.get('english')
            },
            {
                category: 'japanese',
                key: 'japanese',
                title: '日语相关证书',
                details: awards.get('japanese')
            }
        ]
    },
    {
        category: 'online-course-certificate',
        key: 'online-course-certificate',
        title: '线上网课证书',
        details: [
            {
                category: 'coursera-meta-front-end',
                key: 'coursera-meta-front-end',
                title: '<Coursera> meta Front-end Developer 系列课程',
                details: awards.get('coursera-meta-front-end')
            }
        ]
    }
];
