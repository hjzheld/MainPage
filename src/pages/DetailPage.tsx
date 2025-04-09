import styled from "styled-components";
import Btn from '@/components/common/Btn';
import Link from '@/components/detail/Link'
import Title from '@/components/common/Title'
import Container from '@/components/common/Container'

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

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
    image: any,
    stack: Stack
}
interface Stack {
    back?: string[],
    front?: string[],
    database?: string[],
    ai?: string[],
}

const MainTitle = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
    margin: 1rem 0;
`

const SubTitle = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    margin-top: 1rem;
`

const SubContent = styled.p`
    font-size: 1rem;
    margin-top: 0.6rem;
`

const StackName = {
    back: 'Back-end',
    front: 'Front-end',
    database: 'Database',
    ai: 'AI'
}

const DetailPage = () => {
    const [project, setProject] = useState<Projects | null>(null);
    const [isImageOpen, setIsImageOpen] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem('project');
        if (stored) {
        setProject(JSON.parse(stored));
        }
    }, []);

    return (
        <Container>
            {project ? (
                <>
                <div className="detail-container">
                    <Title page="detail" title={ project.title } />
                    <div className="detail-content-container">
                        <motion.img 
                        src={project.detail.image} 
                        alt="프로젝트 이미지"
                        onClick={() => setIsImageOpen(true)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        />
                        {isImageOpen && (
                            <div 
                                className="image-modal"
                                onClick={() => setIsImageOpen(false)}
                            >   
                                <img 
                                src={project.detail.image} 
                                alt="enlarged project"
                                style={{ maxWidth: '90%', maxHeight: '100%', borderRadius: '10px' }}
                                />
                                <Btn.CloseBtn onClick={ () => setIsImageOpen(false)}/>
                            </div>
                            )}
                        <div className="detail-content">
                            <h4>{ project.content }</h4>
                            <p className='detail-sub-content' dangerouslySetInnerHTML={{ __html: project.detail.content }} />

                            {project.detail.github && (
                            <Link title="GitHub" links={project.detail.github} />
                            )}
                            
                            {project.detail.notion && (
                            <Link title="Notion" links={project.detail.notion} />
                            )}
                            
                            {project.detail.blog && project.detail.blog.length > 0 && (
                            <Link title="Blog" links={project.detail.blog} />
                            )}

                            {/* 기술 스택 */}
                            <MainTitle>☑️ 기술 스택</MainTitle>
                            {project.detail.stack && 
                             Object.entries(project.detail.stack ?? {}).map(([key, stackList]) => {
                                const typedKey = key as keyof typeof StackName;
                                const list = stackList as string[];
                            
                                return list.length > 0 ? (
                                  <div key={typedKey}>
                                    <SubTitle>🔗 {StackName[typedKey]}</SubTitle>
                                    <div className="sub-content">
                                      {list.map((stack, idx) => (
                                        <SubContent key={idx}>✔️ {stack}</SubContent>
                                      ))}
                                    </div>
                                  </div>
                                ) : null;
                              })
                            }
                        </div>
                    </div>
                </div>
                </>
            ) : (
                <p>프로젝트 정보를 불러오는 중...</p>
            )
            }

          
        </Container>
    )
}

export default DetailPage 