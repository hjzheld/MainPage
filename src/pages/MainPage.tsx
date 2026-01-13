import styled from "styled-components";
import Btn from '@/components/common/Btn';
import Container from '@/components/common/Container'
import GraLine from "@/components/common/GradationLine"

import { motion } from 'framer-motion';
import { useNavigate } from "react-router-dom";
import { StackCard } from '@/components/main/StackPart';
import { SlideInText } from '@/components/common/TextEffects';
import { EducationPart } from "@/components/main/EducationPart"
import { PersonalHistory } from "@/components/main/PersonalHistory"

const EffectContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 50vh;
    gap: 1rem;
`;

const ButtonContainer = styled(motion.div)`
    display: flex;
    gap: 1.2rem;    

    @media (max-width: 768px) {
        flex-direction: column;
    } 
`


const MainPage = () => {
    const navigate = useNavigate()
    const text1 = "안녕하세요";
    const text2 = "풀스택 개발자 공혜진입니다.";
    
    const text1Duration = (text1.length - 1) * 0.08 + 0.4 + 0.2;

    return (
        <Container>
            <EffectContainer>
                <SlideInText text={text1} />
                <SlideInText text={text2} duration={1.2} delay={0.08} startDelay={text1Duration} />
                <br />
                <ButtonContainer
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: 1.2,
                    scale: { type: "spring", visualDuration: 0.8, bounce: 0.5 },
                }}>
                    <Btn.GradientBtn onClick={() => navigate(`/MainPage/project`)}>
                        프로젝트 페이지 ▶
                    </Btn.GradientBtn>
                    <Btn.GradientBtn onClick={() => window.open("https://github.com/hjzheld", "_blank")}>
                        GitHub 페이지 ▶
                    </Btn.GradientBtn>
                </ButtonContainer>
                <br />
                <GraLine color="gray" />
                <StackCard />
                <GraLine color="gray" />
                <PersonalHistory />
                <GraLine color="gray" />
                <EducationPart />   
            </EffectContainer>
        </Container>
    )
}

export default MainPage 