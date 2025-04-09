import styled from "styled-components";
import Container from '@/components/common/Container';
import Title from '@/components/common/Title';
import Card from '@/components/main/Card';
import Btn from '@/components/common/Btn';
import yamiyagi from '@/assets/images/detail/yamiyagi.png';


import { useState } from 'react'
import { useNavigate } from "react-router-dom";

interface SubCategory {
    title: string,
    type: string
    active: boolean
}

interface Categories {
    title: string,
    subTitle?: SubCategory[],
    type: string
}

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

interface Projects {
    id: number,
    title: string,
    content: string,
    mainTab:  'front' | 'back',
    subTab: 'vue' | 'react' | 'fastapi' | 'django',
    tags: string[],
    detail: Detail
}

interface Detail {
    github?: string,
    notion?: string,
    blog?: string[],
    content: string,
    image: string,
    stack: Stack
}
interface Stack {
    back?: string[],
    front?: string[],
    database?: string[],
    ai?: string[],
}

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
            blog: [],
            content: '아이들이 원하는 주제로 동화를 만들 수 있는 웹페이지입니다. <br /> ChapGPT 로 주제에 기반한 동화를 생성하고,  <br /> Perspective API 로 사용자가 입력한 주제 및 생성된 동화의 폭력성을 검증합니다. <br /> Deepl API 사용하여 생성된 동화를 번역하며, DALL-E API 로 동화 내용의 그림을 생성합니다.',
            image: yamiyagi,
            stack: {
                back: ['Python', 'Django', 'DRF(Django REST Framework)','Oauth 2.0'],
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
            image: yamiyagi,
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
            github: '',
            notion: 'https://www.notion.so/teamsparta/IAM-8ad9729b3dfb42e3a25c72c22106a72a',
            blog: [],
            content: '아이들이 원하는 주제로 동화를 만들 수 있는 웹페이지입니다. <br /> ChapGPT 로 주제에 기반한 동화를 생성하고,  <br /> Perspective API 로 사용자가 입력한 주제 및 생성된 동화의 폭력성을 검증합니다. <br /> Deepl API 사용하여 생성된 동화를 번역하며, DALL-E API 로 동화 내용의 그림을 생성합니다.',
            image: yamiyagi,
            stack: {
                back: ['Python', 'Django', 'Oauth 2.0'],
                front: ['DTL(Django Template Language)', 'JavaScript', 'CSS3'],
                database: ['PostgreSQL'],
                ai: ['ChatGPT API', 'DALL-E API', 'DeePL API', 'Perspective API']
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
            notion: 'https://www.notion.so/teamsparta/IAM-8ad9729b3dfb42e3a25c72c22106a72a',
            blog: [],
            content: '아이들이 원하는 주제로 동화를 만들 수 있는 웹페이지입니다. <br /> ChapGPT 로 주제에 기반한 동화를 생성하고, Perspective API 로 사용자가 입력한 주제 및 생성된 동화의 폭력성을 검증합니다. <br /> Deepl API 사용하여 생성된 동화를 번역하며, DALL-E API 로 동화 내용의 그림을 생성합니다.',
            image: yamiyagi,
            stack: {
                back: ['Python', 'Django', 'Oauth 2.0'],
                front: ['DTL(Django Template Language)', 'JavaScript', 'CSS3'],
                database: ['PostgreSQL'],
                ai: ['ChatGPT API', 'DALL-E API', 'DeePL API', 'Perspective API']
            }
        }
    }
]

const Category = styled.div`
    width: 60%;
    margin: 0 auto;
    padding-top: 2%;
    
    display: flex;
    justify-content: center;
    gap: 3rem;
`


const MainPage = () => {
    const navigate = useNavigate()
    const [selectedTab, setTab] = useState<'all' | 'front' | 'back'>('all')
    const [selectedSub, setSub] = useState<string | null>(null)

    const filteredList = projects.filter(project => {
        if (selectedTab == 'all') return true
        if (selectedTab !== project.mainTab) return false
        if (selectedSub && selectedSub !== project.subTab) return false
        return true
    })

    return (
    <Container>
        <Title page="main" title="포토폴리오" />
        <Category key={selectedTab}>
            {categories.map((tab) => (
                <Btn.CategoryBtn 
                    key= { tab.type }
                    tab={ tab } 
                    active={ selectedTab == tab.type }
                    onClick={ () => {
                        setTab(tab.type as 'all' | 'front' | 'back');
                        setSub(null); 
                    }}
                />
            ))}
        </Category>
        {categories.map((tab) => (
            <Btn.SubCategory 
                key= { tab.type }
                tab = { tab } 
                active = { selectedTab == tab.type }
                selectedSub={selectedSub ?? undefined}
                onClick = {(subTitle?: SubCategory) => {
                    if (subTitle) {
                      setSub(subTitle.type);
                    }
                }}
            />
        ))}
        <div className="card-container">
            {filteredList.map((project) => (
                <Card 
                key = { project.id }
                project={ project } 
                onClick={() => {
                    localStorage.setItem('project', JSON.stringify(project));
                    navigate(`/project/${project.id}`);
                }}/>
            ))}
        </div>
    </Container>
    )
}



export default MainPage 
