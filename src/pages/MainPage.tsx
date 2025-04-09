import styled from "styled-components";
import Container from '@/components/common/Container';
import Title from '@/components/common/Title';
import Card from '@/components/common/Card';
import Btn from '@/components/common/Btn';

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
    tags: string[]
}

const projects: Projects[] = [
    {
        id: 1,
        title: '야미야기',
        content: '아이들의 상상력으로 만들어지는 동화 웹사이트',
        mainTab: 'back',
        subTab: 'django',
        tags: ['Python', 'Django', 'PostgreSQL', 'DTL(Django Template Language)']
    },
    {
        id: 2,
        title: '펫뭉',
        content: '애견용품 쇼핑몰 RESTful API 서버',
        mainTab: 'back',
        subTab: 'fastapi',
        tags: ['Python', 'FastAPI', 'MySQL']
    },
    {
        id: 3,
        title: '호진일보',
        content: '네이버 연애뉴스 모아보기 웹 사이트',
        mainTab: 'front',
        subTab: 'vue',
        tags: ['Vue', 'Vite', 'JavaScript']
    },
    {
        id: 4,
        title: 'test title',
        content: 'test content',
        mainTab: 'front',
        subTab: 'react',
        tags: ['React', 'Vite', 'TypeScript']
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
        <Title page="main">
            포토폴리오
        </Title>
        <Category>
            {categories.map((tab) => (
                <Btn.CategoryBtn 
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
                <Card project={ project } onClick={() => navigate(`/project/${project.id}`)}/>
            ))}
        </div>
    </Container>
    )
}



export default MainPage 
