import styled from "styled-components";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

type TitleProps = {
    title: string,
    page: string
}

const BackButton = styled(motion.button)`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    background: transparent;
    border: 2px solid rgba(118, 164, 218, 0.3);
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    margin-right: 1rem;
    flex-shrink: 0;
    
    &::before {
        content: '';
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        width: 10px;
        height: 10px;
        border-left: 2.5px solid var(--primary-color);
        border-bottom: 2.5px solid var(--primary-color);
        transition: all 0.3s ease;
    }
    
    &:hover {
        background: rgba(118, 164, 218, 0.1);
        border-color: var(--primary-color);
        transform: translateX(-4px);
        
        &::before {
            transform: translate(-60%, -50%) rotate(45deg);
        }
    }
    
    &:active {
        scale: 0.95;
    }
    
    @media (max-width: 768px) {
        width: 36px;
        height: 36px;
        margin-right: 0.75rem;
        border-radius: 10px;
        border-width: 1.5px;
        
        &::before {
            width: 8px;
            height: 8px;
            border-width: 2px;
        }
    }
    
    @media (max-width: 480px) {
        width: 32px;
        height: 32px;
        margin-right: 0.5rem;
        border-radius: 8px;
        border-width: 1.5px;
        
        &::before {
            width: 7px;
            height: 7px;
            border-width: 2px;
        }
    }
`;

const DetailTitle = styled.h1`
    font-size: 2rem;
    font-weight: 600;
    margin: 0;
    color: var(--gray-100);
    line-height: 1.4;
    
    @media (max-width: 1200px) {
        font-size: 1.75rem;
    }
    
    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
    
    @media (max-width: 480px) {
        font-size: 1.25rem;
    }
`;

const TitleStyle = styled.div<{ page?: string }>`
    width: 100%;
    padding-top: ${({ page }) => page == 'main' ? '5rem' : '0px'};
    padding-bottom: ${({ page }) => page == 'main' ? '0px' : '2rem'};
    font-size: ${({ page }) => page == 'main' ? '3rem' : '2rem'};
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: ${({ page }) => page == 'main' ? 'center' : 'start'};
    padding-left: ${({ page }) => page == 'main' ? '0px' : '5rem'};
    box-sizing: border-box;
    
    @media (max-width: 1200px) {
        padding-top: ${({ page }) => page == 'main' ? '4rem' : '0px'};
        padding-bottom: ${({ page }) => page == 'main' ? '0px' : '1.75rem'};
        font-size: ${({ page }) => page == 'main' ? '2.5rem' : '1.75rem'};
        padding-left: ${({ page }) => page == 'main' ? '0px' : '4rem'};
    }
    
    @media (max-width: 768px) {
        padding-top: ${({ page }) => page == 'main' ? '3rem' : '0px'};
        padding-bottom: ${({ page }) => page == 'main' ? '0px' : '1.5rem'};
        font-size: ${({ page }) => page == 'main' ? '2rem' : '1.5rem'};
        padding-left: ${({ page }) => page == 'main' ? '0px' : '2rem'};
    }
    
    @media (max-width: 480px) {
        padding-top: ${({ page }) => page == 'main' ? '2.5rem' : '0px'};
        padding-bottom: ${({ page }) => page == 'main' ? '0px' : '1.25rem'};
        font-size: ${({ page }) => page == 'main' ? '1.75rem' : '1.25rem'};
        padding-left: ${({ page }) => page == 'main' ? '0px' : '1rem'};
    }
    
    @media (max-width: 360px) {
        font-size: ${({ page }) => page == 'main' ? '1.5rem' : '1.1rem'};
        padding-left: ${({ page }) => page == 'main' ? '0px' : '0.75rem'};
    }
`

export const Title = ( {title, page }: TitleProps) => {
    const navigate = useNavigate();

    return (
        <TitleStyle page={page}>
            {page === 'detail' ? (
                <>
                    <BackButton
                        onClick={() => navigate(-1)}
                        whileTap={{ scale: 0.95 }}
                        aria-label="뒤로가기"
                    />
                    <DetailTitle>{title}</DetailTitle>
                </>
                ) : (
                    title
                )}
        </TitleStyle>
    )
}


type SubTitleProps = {
    title: string
}


const SubTitleStyle = styled.div<{ page?: string }>`
    width: 100%;
    font-size: ${({ page }) => page == 'main' ? '3rem' : '2rem'};
    font-weight: 600;
    display: flex;
    margin-top: 1em;
    justify-content: center;
    box-sizing: border-box;
    
    @media (max-width: 1200px) {
        font-size: ${({ page }) => page == 'main' ? '2.5rem' : '1.75rem'};
        margin-top: 0.875em;
    }
    
    @media (max-width: 768px) {
        font-size: ${({ page }) => page == 'main' ? '2rem' : '1.5rem'};
        margin-top: 0.75em;
    }
    
    @media (max-width: 480px) {
        font-size: ${({ page }) => page == 'main' ? '1.75rem' : '1.25rem'};
        margin-top: 0.625em;
    }
    
    @media (max-width: 360px) {
        font-size: ${({ page }) => page == 'main' ? '1.5rem' : '1.1rem'};
    }
`


export const SubTitle = ( {title}: SubTitleProps) => {
    return (
        <SubTitleStyle>
            {title}
        </SubTitleStyle>
    )
}


