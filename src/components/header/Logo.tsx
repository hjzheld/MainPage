import styled from "styled-components";
import { motion } from 'framer-motion';

const LogoContainer = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    cursor: pointer;
`;

const LogoSvg = styled.svg`
    width: 40px;
    height: 40px;
    flex-shrink: 0;
`;

const LogoText = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--primary-color);
    font-family: var(--font-en);
    letter-spacing: -0.5px;
`;

interface LogoProps {
    onClick?: () => void;
}

const Logo = ({ onClick }: LogoProps) => {
    return (
        <LogoContainer
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <LogoSvg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#76a4da" />
                        <stop offset="100%" stopColor="#bebcd8" />
                    </linearGradient>
                </defs>
                {/* 원형 파이 차트 - 완전한 원형, 4등분, 왼쪽 위만 채움 */}
                {/* 섹션 1: 오른쪽 위 (0도~90도) - 테두리만 */}
                <motion.path
                    d="M 20 20 L 35 20 A 15 15 0 0 1 20 5 L 20 20 Z"
                    fill="none"
                    stroke="url(#logoGradient)"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
                />
                {/* 섹션 2: 왼쪽 위 (90도~180도) - 채움 */}
                <motion.path
                    d="M 20 20 L 20 5 A 15 15 0 0 1 5 20 L 20 20 Z"
                    fill="url(#logoGradient)"
                    stroke="url(#logoGradient)"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
                />
                {/* 섹션 3: 왼쪽 아래 (180도~270도) - 테두리만 */}
                <motion.path
                    d="M 20 20 L 5 20 A 15 15 0 0 1 20 35 L 20 20 Z"
                    fill="none"
                    stroke="url(#logoGradient)"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
                />
                {/* 섹션 4: 오른쪽 아래 (270도~360도) - 테두리만 */}
                <motion.path
                    d="M 20 20 L 20 35 A 15 15 0 0 1 35 20 L 20 20 Z"
                    fill="none"
                    stroke="url(#logoGradient)"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
                />
            </LogoSvg>
            <LogoText>Portfolio</LogoText>
        </LogoContainer>
    );
};

export default Logo;


export const FooterLogo = ({ onClick }: LogoProps) => {
    return (
        <LogoContainer
            onClick={onClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
        >
            <LogoSvg
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#76a4da" />
                        <stop offset="100%" stopColor="#bebcd8" />
                    </linearGradient>
                </defs>
                {/* 원형 파이 차트 - 완전한 원형, 4등분, 왼쪽 위만 채움 */}
                {/* 섹션 1: 오른쪽 위 (0도~90도) - 테두리만 */}
                <motion.path
                    d="M 20 20 L 35 20 A 15 15 0 0 1 20 5 L 20 20 Z"
                    fill="none"
                    stroke="url(#footerLogoGradient)"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: "easeInOut" }}
                />
                {/* 섹션 2: 왼쪽 위 (90도~180도) - 채움 */}
                <motion.path
                    d="M 20 20 L 20 5 A 15 15 0 0 1 5 20 L 20 20 Z"
                    fill="url(#footerLogoGradient)"
                    stroke="url(#footerLogoGradient)"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeInOut" }}
                />
                {/* 섹션 3: 왼쪽 아래 (180도~270도) - 테두리만 */}
                <motion.path
                    d="M 20 20 L 5 20 A 15 15 0 0 1 20 35 L 20 20 Z"
                    fill="none"
                    stroke="url(#footerLogoGradient)"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3, ease: "easeInOut" }}
                />
                {/* 섹션 4: 오른쪽 아래 (270도~360도) - 테두리만 */}
                <motion.path
                    d="M 20 20 L 20 35 A 15 15 0 0 1 35 20 L 20 20 Z"
                    fill="none"
                    stroke="url(#footerLogoGradient)"
                    strokeWidth="2.5"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
                />
            </LogoSvg>
            <LogoText>INFO</LogoText>
        </LogoContainer>
    );
};

