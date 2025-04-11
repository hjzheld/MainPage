// 프로젝트 이미지
import yamiyagi from '@/assets/images/detail/yamiyagi.png';
import hojinMain from '@/assets/images/detail/hojin_main.png';
import hojinDetail from '@/assets/images/detail/hojin_detail.png';
import hojinVideo from '/public/hojin_video.mp4';


import { Projects } from '@/types/project';

const projects: Projects[] = [
    {
        id: 1,
        title: '야미야기',
        content: '아이들의 상상력으로 만들어지는 동화 웹사이트',
        mainTab: 'back',
        subTab: 'django',
        tags: ['Python', 'Django', 'PostgreSQL'],
        detail: {
            notion: 'https://www.notion.so/teamsparta/IAM-8ad9729b3dfb42e3a25c72c22106a72a',
            notion_vedio: 'https://teamsparta.notion.site/7a49bd323df7456ebd58e9bb32360a8d',
            blog: [],
            content: `
            아이들이 원하는 주제로 동화를 만들 수 있는 웹페이지입니다. 
            <br /> ChapGPT 로 주제에 기반한 동화를 생성하고,  
            <br /> Perspective API 로 사용자가 입력한 주제 및 생성된 동화의 폭력성을 검증합니다. 
            <br /> Deepl API 사용하여 생성된 동화를 번역하며, DALL-E API 로 동화 내용의 그림을 생성합니다.`,
            image: [{ type:'image', src: yamiyagi }],
            stack: {
                back: ['Python', 'Django', 'DRF(Django REST Framework)', 'Oauth 2.0'],
                front: ['DTL(Django Template Language)', 'JavaScript', 'CSS3'],
                database: ['PostgreSQL'],
                ai: ['ChatGPT API', 'DALL-E API', 'DeePL API', 'Perspective API']
            }
        }
    },
    {
        id: 2,
        title: '펫뭉',
        content: '애완동물 쇼핑몰 RESTful API 서버',
        mainTab: 'back',
        subTab: 'fastapi',
        tags: ['Python', 'FastAPI', 'MySQL'],
        detail: {
            github: 'https://github.com/Pet-Mung/Back',
            blog: [],
            content: '애완동물 쇼핑몰 API 서버입니다. ',
            image: [{ type:'image', src: yamiyagi }],
            stack: {
                back: ['Python', 'FastAPI', 'Oauth 2.0'],
                database: ['MySQL']
            }
        }
    },
    {
        id: 3,
        title: '호진일보',
        content: '네이버 연애뉴스 모아보기 웹 사이트',
        mainTab: 'front',
        subTab: 'vue',
        tags: ['Vue', 'Vite', 'JavaScript'],
        detail: {
            github: 'https://github.com/HoJin-s/selenium_practice',
            blog: [],
            content: `
            매일 네이버 뉴스 연애 기사 랭킹 4위까지 가져오는 크롤링 프로젝트입니다. 
            <br/> 이 프로젝트에서 저는 프론트엔드 개발을 맡았으며, 백엔드는 Django로 구현했습니다. 
            <br/> Django 템플릿을 Vue로 빌드한 페이지로 연동하여 프론트와 백엔드를 효과적으로 연결했습니다.
            `,
            video: hojinVideo ,
            image: [
                { type:'image', src: hojinMain },
                { type:'image', src: hojinDetail }
             ],
            stack: {
                back: ['Python', 'Django', 'DRF(Django REST Framework)', 'Selenium'],
                front: ['Vue', 'Vite', 'JavaScript', 'CSS3'],
                database: ['MySQL']
            }
        }
    },
    {
        id: 4,
        title: 'test title',
        content: 'test content',
        mainTab: 'front',
        subTab: 'react',
        tags: ['React', 'Vite', 'TypeScript'],
        detail: {
            github: '',
            blog: [],
            content: '아이들이 원하는 주제로 동화를 만들 수 있는 웹페이지입니다. <br /> ChapGPT 로 주제에 기반한 동화를 생성하고, Perspective API 로 사용자가 입력한 주제 및 생성된 동화의 폭력성을 검증합니다. <br /> Deepl API 사용하여 생성된 동화를 번역하며, DALL-E API 로 동화 내용의 그림을 생성합니다.',
            image: [{ type:'image', src: yamiyagi }],
            stack: {
                back: ['Python', 'Django', 'Oauth 2.0'],
                front: ['DTL(Django Template Language)', 'JavaScript', 'CSS3'],
                database: ['PostgreSQL'],
                ai: ['ChatGPT API', 'DALL-E API', 'DeePL API', 'Perspective API']
            }
        }
    }
]

export default projects;