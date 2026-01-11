import styled from "styled-components";
import { motion } from 'framer-motion';
import { SubTitle } from '@/components/common/Title';

const CardsGrid = styled(motion.div)`
    display: flex;
    gap: 3rem;
    width: 100%;
    max-width: 1000px;
    margin: 3rem 0;
    padding: 0 2rem;
    
    @media (max-width: 768px) {
        padding: 0 1rem;
        gap: 1rem;
        flex-direction: column;
    }
`;

const EducationCard = styled(motion.div)`
    padding: 2.5rem;
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    color: var(--gray-100);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    position: relative;
    overflow: hidden;
`;

const CardHeader = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    border-bottom: 2px solid rgba(118, 164, 218, 0.3);
    padding-bottom: 1rem;
`;

const SchoolTitle = styled(motion.h3)`
    font-size: 1.8rem;
    font-weight: 700;
    margin: 0;
    color: var(--gray-100);
`;

const DateText = styled(motion.h4)`
    font-size: 1rem;
    font-weight: 500;
    margin: 0;
    color: var(--gray-400);
`;

const MajorText = styled(motion.p)`
    font-size: 1.1rem;
    font-weight: 500;
    margin: 0;
    color: var(--gray-100);
    padding-top: 0.5rem;
`;

export const EducationPart = () => {
    const personal = [
        {
            id: 1,
            title: '경동대학교',
            date: '2016 ~ 2020',
            content: '치기공학과'
        },
        {
            id: 2,
            title: '호서고등학교',
            date: '2013 ~ 2016',
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { 
            opacity: 0, 
            y: 50,
            scale: 0.95
        },
        visible: { 
            opacity: 1, 
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: -10 },
        visible: { 
            opacity: 1, 
            y: 0,
            transition: {
                duration: 0.3,
                delay: 0.2
            }
        }
    };

    return (
        <div>
            <SubTitle title="학력"/>
            <CardsGrid
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                {personal.map((pers) =>
                    <EducationCard 
                        key={pers.id}
                        variants={cardVariants}
                    >
                        <CardHeader variants={itemVariants}>
                            <SchoolTitle>{pers.title}</SchoolTitle>
                            <DateText>{pers.date}</DateText>
                        </CardHeader>
                        {pers.content && (
                            <MajorText variants={itemVariants}>
                                {pers.content}
                            </MajorText>
                        )}
                    </EducationCard>
                )}
            </CardsGrid>
        </div>
    )
}