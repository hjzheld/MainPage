import styled from "styled-components";
import Container from '@/components/common/Container';
import Title from '@/components/common/Title';
import Card from '@/components/main/Card';
import Btn from '@/components/common/Btn';
import projects from '@/data/project';
import categories from '@/data/categry';

import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { SubCategory } from '@/types/category';

const Category = styled.div`
    width: 60%;
    margin: 0 auto;
    padding-top: 2%;
    min-height: 50px; 
    
    display: flex;
    justify-content: center;
    gap: 3rem;
`;

const SubCategoryWrapper = styled.div`
  min-height: 30px; 
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  transition: all 0.3s ease;
`;

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
        <Title page="main" title="포트폴리오" />
        <Category key={selectedTab} >
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
        <SubCategoryWrapper>
        {(() => {
        const selectedCategory = categories.find(c => c.type === selectedTab);
        return selectedCategory?.subTitle ? (
            <Btn.SubCategory
            key={selectedCategory.type}
            tab={selectedCategory}
            active={true}
            selectedSub={selectedSub ?? undefined}
            onClick={(subTitle?: SubCategory) => {
                if (subTitle) setSub(subTitle.type);
            }}
            />
        ) : null;
        })()}
        </SubCategoryWrapper>
        <div className="card-container" data-aos="zoom-in-up">
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
