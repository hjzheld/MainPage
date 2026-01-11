import { Categories } from '@/types/category';

const categories: Categories[] = [
    {
        title: '전체',
        type: 'all'
    },
    {
        title: '프론트엔드',
        subTitle: [
            { 
                title: 'Vue',
                type: 'vue',
                active: false
            },
            { 
                title: 'React',
                type: 'react',
                active: false
             },
            ],
        type: 'front'
    },
    {
        title: '백엔드',
        subTitle: [
            { 
                title: 'Django',
                type: 'django',
                active: false
            },  
            { 
                title: 'FastAPI',
                type: 'fastapi',
                active: false
            },
        ],
        type: 'back'
    }
]

export default categories;
