import styled from "styled-components";

import Btn from "@/components/common/Btn";
import Container from "@/components/common/Container";
import GraLine from "@/components/common/GradationLine";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { StackCard } from "@/components/main/StackPart";
import { SlideInText } from "@/components/common/TextEffects";
import { EducationPart } from "@/components/main/EducationPart";

import {
  slideLeft,
  slideRight,
  springPop,
  staggerContainer,
  viewport,
} from "@/utils/animations";

const EffectContainer = styled(motion.div)`
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
`;

const SectionMotion = styled(motion.div)`
  width: 100%;
`;

const MainPage = () => {
  const navigate = useNavigate();

  const text1 = "안녕하세요";
  const text2 = "풀스택 개발자 공혜진입니다.";

  const text1Duration =
    (text1.length - 1) * 0.08 + 0.4 + 0.2;

  return (
    <Container>
      <EffectContainer
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <SlideInText text={text1} />

        <SlideInText
          text={text2}
          duration={1.2}
          delay={0.08}
          startDelay={text1Duration}
        />

        <br />

        <ButtonContainer variants={springPop}>
          <motion.div
            whileHover={{
              scale: 1.05,
              y: -4,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            <Btn.GradientBtn
              onClick={() => navigate("/project")}
            >
              프로젝트 페이지 ▶
            </Btn.GradientBtn>
          </motion.div>

          <motion.div
            whileHover={{
              scale: 1.05,
              y: -4,
            }}
            whileTap={{
              scale: 0.96,
            }}
          >
            <Btn.GradientBtn
              onClick={() =>
                window.open(
                  "https://github.com/hjzheld",
                  "_blank",
                )
              }
            >
              GitHub 페이지 ▶
            </Btn.GradientBtn>
          </motion.div>
        </ButtonContainer>

        <br />

        <GraLine color="gray" />

        <SectionMotion
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <StackCard />
        </SectionMotion>

        <GraLine color="gray" />

        <SectionMotion
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <EducationPart />
        </SectionMotion>
      </EffectContainer>
    </Container>
  );
};

export default MainPage;