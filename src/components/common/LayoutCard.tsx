import styled from "styled-components";
import { motion } from 'framer-motion';

const CardWrapper = styled(motion.div)`
    height: 100%;
    padding: 2rem;
    background: linear-gradient(
        160deg,
        rgba(175, 213, 255, 0.9),
        rgba(205, 205, 205, 0.9)
    );
    border-radius: 20px;
    backdrop-filter: blur(6px);      
    box-shadow: var(--box-shadow);
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;
`;



const CardTitle = styled.h3`
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0;
    z-index: 1;
    color: var(--gray-400);

    @media (max-width: 768px) {
        font-size: 1.4rem;
    } 

    @media (max-width: 480px) {
        font-size: 1.2rem;
    } 
`;


const StackList = styled.div`
    display: flex;
    justify-content: center;
    gap: 1rem;
    margin-top: auto;         
    padding-top: 1rem;
    z-index: 1;

    flex-wrap: wrap;
    align-items: start;
    min-height: 120px;      

    & > * {
        flex: 0 0 calc(33.333% - 0.67rem);
    }
`;


const StackIconWrapper = styled(motion.div)`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
    color: var(--gray-400);
`;



const StackIcon = styled(motion.img)`
    width: 36px;
    height: 36px;
    object-fit: contain;
`;

const StackName = styled.div`
    width: 100%;
    text-align: center;
`;

interface StackItem {
    name: string;
    logo: string;
}

interface LayoutCardProps {
    title: string;
    stack: StackItem[];
    layoutId: string;
}

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



export const LayoutCard = ({ title, stack, layoutId }: LayoutCardProps) => {
    return (
        <CardWrapper
            layoutId={layoutId}
            variants={cardVariants}
        >
            <CardTitle>{title}</CardTitle>
            
            <StackList>
            {stack.map((item) => (
                <StackIconWrapper
                    key={item.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.15 }}
                    transition={{ type: "spring", stiffness: 400 }}
                >
                    <StackIcon
                        src={item.logo}
                        alt={item.name}
                        whileHover={{ rotate: 5 }}
                    />
                    <StackName>{item.name}</StackName>
                </StackIconWrapper>
            ))}

            </StackList>
        </CardWrapper>
    );
};

