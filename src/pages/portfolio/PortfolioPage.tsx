import styled from "styled-components";
import { motion } from 'framer-motion';
import Container from '@/components/common/Container';
import { Title } from '@/components/common/Title';
import Card from '@/components/detail/Card';
import Btn from '@/components/common/Btn';
import projects from '@/data/project';
import categories from '@/data/categry';

import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { SubCategory } from '@/types/category';

const Category = styled.div`
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 2rem 1rem 2rem;
    min-height: 50px; 
    
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
    
    @media (max-width: 1200px) {
        padding: 1.75rem 1.5rem 0.75rem 1.5rem;
        gap: 1.5rem;
    }
    
    @media (max-width: 768px) {
        padding: 1.5rem 1rem 0.5rem 1rem;
        gap: 1rem;
    }
    
    @media (max-width: 480px) {
        padding: 1rem 0.5rem 0.5rem 0.5rem;
        gap: 0.75rem;
    }
    
    @media (max-width: 360px) {
        padding: 0.75rem 0.25rem 0.5rem 0.25rem;
        gap: 0.5rem;
    }
`;

const SubCategoryWrapper = styled.div`
    min-height: 30px; 
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    padding: 0 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    transition: all 0.3s ease;
    
    @media (max-width: 1200px) {
        padding: 0 1.5rem;
        gap: 0.875rem;
    }
    
    @media (max-width: 768px) {
        padding: 0 1rem;
        gap: 0.75rem;
        margin-top: 1rem;
        margin-bottom: 0.75rem;
    }
    
    @media (max-width: 480px) {
        padding: 0 0.5rem;
        gap: 0.5rem;
        margin-top: 0.75rem;
        margin-bottom: 0.5rem;
    }
    
    @media (max-width: 360px) {
        padding: 0 0.25rem;
        gap: 0.375rem;
    }
`;

const CardContainer = styled(motion.div)`
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
    align-items: stretch;
    
    @media (max-width: 1400px) {
        padding: 1.75rem;
        gap: 1.75rem;
    }
    
    @media (max-width: 1200px) {
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1.5rem;
        padding: 1.5rem;
    }
    
    @media (max-width: 992px) {
        grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        gap: 1.25rem;
        padding: 1.25rem;
    }
    
    @media (max-width: 768px) {
        grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
        gap: 1rem;
        padding: 1rem;
    }
    
    @media (max-width: 640px) {
        grid-template-columns: 1fr;
        gap: 1rem;
        padding: 1rem;
    }
    
    @media (max-width: 480px) {
        gap: 0.875rem;
        padding: 0.75rem;
    }
    
    @media (max-width: 360px) {
        gap: 0.75rem;
        padding: 0.5rem;
    }
`;

const CardWrapper = styled(motion.div)`
    display: flex;
    height: 100%;
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
        <CardContainer
            initial={{ opacity: 0, scale: 0.95, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, ease: "easeOut" }}
        >
            {filteredList.map((project, index) => (
                <CardWrapper
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                    <Card 
                        project={project} 
                        onClick={() => {
                            localStorage.setItem('project', JSON.stringify(project));
                            navigate(`/MainPage/project/${project.id}`);
                        }}
                    />
                </CardWrapper>
            ))}
        </CardContainer>
    </Container>
    )
}

export default MainPage 
