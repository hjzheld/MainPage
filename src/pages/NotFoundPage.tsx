import styled from "styled-components";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

import Btn from '@/components/common/Btn';

import notFoundImg from "@/assets/images/common/404.png"

const NotFoundPageWrap = styled(motion.button)`
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
    const navigate = useNavigate()

    return (
        <NotFoundPageWrap>
            <img src={notFoundImg} alt="404 Icon" loading="lazy" />
            <Btn.GradientBtn onClick={() => navigate(`/home`)}>
                메인 페이지 ▶
            </Btn.GradientBtn> 
        </NotFoundPageWrap>
    )
}

export default NotFound;