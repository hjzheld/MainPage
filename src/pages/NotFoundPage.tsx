import styled from "styled-components";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import Btn from "@/components/common/Btn";

import notFoundImg from "@/assets/images/common/404.png";

const NotFoundPageWrap = styled(motion.div)`
  width: 60%;

  margin: 5vh auto;

  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 2rem;

  img {
    width: 60%;
    height: auto;
  }
`;

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <NotFoundPageWrap
      initial={{
        opacity: 0,
        scale: 0.9,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.4,
      }}
    >
      <motion.img
        src={notFoundImg}
        alt="404 Icon"
        loading="lazy"
        initial={{
          y: 20,
          opacity: 0,
        }}
        animate={{
          y: [0, -12, 0],
          opacity: 1,
        }}
        transition={{
          opacity: {
            duration: 0.4,
          },

          y: {
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
        whileHover={{
          rotate: [-2, 2, -2, 0],
          scale: 1.04,
        }}
      />

      <motion.div
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 0.3,
        }}
        whileHover={{
          scale: 1.06,
        }}
        whileTap={{
          scale: 0.94,
        }}
      >
        <Btn.GradientBtn
          onClick={() => navigate("/")}
        >
          메인 페이지 ▶
        </Btn.GradientBtn>
      </motion.div>
    </NotFoundPageWrap>
  );
};

export default NotFound;