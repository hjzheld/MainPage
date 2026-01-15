import styled from "styled-components";
import Btn from '@/components/common/Btn';
import Link from '@/components/detail/Link'
import { Title } from '@/components/common/Title'
import Container from '@/components/common/Container'
import SwiperImage from '@/components/detail/Swiper'
import Thumbnail from '@/assets/images/detail/video_thumb.png'

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Projects } from '@/types/project';

const SectionTitle = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    margin: 2.5rem 0 1.5rem 0;
    padding-bottom: 0.75rem;
    border-bottom: 3px solid var(--primary-color);
    color: var(--gray-100);
    line-height: 1.4;
    position: relative;
    
    &::before {
        content: '';
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 60px;
        height: 3px;
        background: var(--primary-light);
    }
    
    @media (max-width: 1200px) {
        font-size: 1.4rem;
        margin: 2rem 0 1.25rem 0;
    }
    
    @media (max-width: 768px) {
        font-size: 1.3rem;
        margin: 1.5rem 0 1rem 0;
        padding-bottom: 0.625rem;
    }
    
    @media (max-width: 480px) {
        font-size: 1.2rem;
        margin: 1.25rem 0 0.875rem 0;
        padding-bottom: 0.5rem;
    }
`

const StackCategoryTitle = styled.div`
    font-size: 1.2rem;
    font-weight: 600;
    margin: 1.5rem 0 1rem 0;
    color: var(--primary-color);
    line-height: 1.4;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    
    &::before {
        content: '';
        width: 4px;
        height: 1.2rem;
        background: var(--primary-color);
        border-radius: 2px;
    }
    
    @media (max-width: 768px) {
        font-size: 1.1rem;
        margin: 1.25rem 0 0.875rem 0;
    }
    
    @media (max-width: 480px) {
        font-size: 1rem;
        margin: 1rem 0 0.75rem 0;
    }
`

const ContentTitle = styled.h4`
    font-size: 1.8rem;
    font-weight: 600;
    line-height: 1.4;
    margin-bottom: 1rem;
    margin-top: 0;
    
    @media (max-width: 1200px) {
        font-size: 1.6rem;
        margin-bottom: 0.875rem;
    }
    
    @media (max-width: 768px) {
        font-size: 1.4rem;
        margin-bottom: 0.75rem;
    }
    
    @media (max-width: 480px) {
        font-size: 1.2rem;
        margin-bottom: 0.625rem;
    }
`

const StackTagContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-bottom: 0.5rem;
    
    @media (max-width: 768px) {
        gap: 0.625rem;
    }
    
    @media (max-width: 480px) {
        gap: 0.5rem;
    }
`

const StackTag = styled(motion.div)`
    display: inline-flex;
    align-items: center;
    padding: 0.5rem 1rem;
    background: rgba(118, 164, 218, 0.15);
    border: 1px solid rgba(118, 164, 218, 0.3);
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 500;
    color: var(--gray-100);
    transition: all 0.3s ease;
    
    @media (max-width: 768px) {
        padding: 0.4rem 0.875rem;
        font-size: 0.85rem;
        border-radius: 16px;
    }
    
    @media (max-width: 480px) {
        padding: 0.35rem 0.75rem;
        font-size: 0.8rem;
        border-radius: 14px;
    }
`

const StackName = {
    back: 'Back-end',
    front: 'Front-end',
    database: 'Database',
    ai: 'AI',
    build: 'Build 도구'
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
                <motion.div 
                className="detail-container"
                initial={{ opacity: 0, scale: 0.8, x: -50 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <Title page="detail" title={ project.title } />
                    <div className="detail-content-container">
                        <div className="detail-img-container">
                        {
                            project.detail.image.length == 1 ? 
                            <motion.img 
                            src={project.detail.image[0].src} 
                            loading="lazy"
                            alt="프로젝트 이미지"
                            onClick={() => setIsImageOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            />
                            : 
                            <SwiperImage images={ project.detail.image } onClick={() => setIsImageOpen(true)}/>   
                              
                        }
                        </div>
                        <div className="detail-content">
                            <ContentTitle>{ project.content }</ContentTitle>
                            <p className='detail-sub-content' dangerouslySetInnerHTML={{ __html: project.detail.content }} />
                            { project.detail.video? (
                                <div className="video-wrap">
                                    <video
                                    src={project.detail.video}
                                    poster={Thumbnail}
                                    autoPlay     
                                    playsInline               
                                    controls
                                    muted       
                                    aria-label="시연영상"               
                                    />
                                </div>
                                ) : null
                            }
                            

                            {project.detail.github && (
                            <Link title="GitHub" links={project.detail.github} />
                            )}
                            
                            {project.detail.notion && (
                            <Link title="Notion" links={project.detail.notion} />
                            )}

                            {project.detail.site && (
                            <Link title="URL" links={project.detail.site} />
                            )}

                            {project.detail.blog && project.detail.blog.length > 0 && (
                            <Link title="Blog" links={project.detail.blog} />
                            )}

                            {/* 기술 스택 */}
                            <SectionTitle>기술 스택</SectionTitle>
                            {project.detail.stack && 
                             Object.entries(project.detail.stack ?? {}).map(([key, stackList]) => {
                                const typedKey = key as keyof typeof StackName;
                                const list = stackList as string[];
                            
                                return list.length > 0 ? (
                                  <div key={typedKey}>
                                    <StackCategoryTitle>{StackName[typedKey]}</StackCategoryTitle>
                                    <StackTagContainer>
                                      {list.map((stack, idx) => (
                                        <StackTag 
                                          key={idx}
                                          initial={{ opacity: 0, scale: 0.8 }}
                                          whileInView={{ opacity: 1, scale: 1 }}
                                          viewport={{ once: true }}
                                          transition={{ duration: 0.3, delay: idx * 0.05 }}
                                          whileHover={{ 
                                            scale: 1.05,
                                            background: 'rgba(118, 164, 218, 0.25)',
                                            borderColor: 'var(--primary-color)'
                                          }}
                                        >
                                          {stack}
                                        </StackTag>
                                      ))}
                                    </StackTagContainer>
                                  </div>
                                ) : null;
                              })
                            }
                        </div>
                    </div>
                </motion.div>
                {isImageOpen && (
                <div 
                    className="image-modal"
                >   
                    <SwiperImage images={ project.detail.image }/>   
                    <Btn.CloseBtn onClick={ () => setIsImageOpen(false)}/>
                </div>
                )}
                </>
            ) : (
                <p>프로젝트 정보를 불러오는 중...</p>
            )
            }

          
        </Container>
    )
}

export default DetailPage 