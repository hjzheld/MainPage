import styled from "styled-components";
import { motion } from 'framer-motion';
import React from 'react';

// 1. 그라데이션 움직임 효과
const GradientTextWrapper = styled(motion.div)`
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(90deg, #76a4da, #bebcd8, #76a4da);
    background-size: 200% auto;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    display: inline-block;
`;

export const GradientText = ({ children }: { children: string }) => (
    <GradientTextWrapper
        animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
        }}
        transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
        }}
        style={{ backgroundPosition: '0% 50%' }}
    >
        {children}
    </GradientTextWrapper>
);

// 2. 타이핑 효과 (커서 포함)
const TypingWrapper = styled.div`
    font-size: 2rem;
    font-weight: 600;
    color: var(--gray-100);
    font-family: 'Courier New', monospace;
`;

const Cursor = styled(motion.span)`
    display: inline-block;
    width: 2px;
    height: 1.2em;
    background-color: var(--primary-color);
    margin-left: 2px;
    vertical-align: baseline;
`;

export const TypingText = ({ text }: { text: string }) => {
    const [displayedText, setDisplayedText] = React.useState('');
    
    React.useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < text.length) {
                setDisplayedText(text.slice(0, index + 1));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 150);
        
        return () => clearInterval(timer);
    }, [text]);
    
    return (
        <TypingWrapper>
            {displayedText}
            <Cursor
                animate={{ opacity: [1, 0] }}
                transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
            />
        </TypingWrapper>
    );
};

// 3. 파도 효과 (Wave)
const WaveChar = styled(motion.span)`
    display: inline-block;
`;

export const WaveText = ({ text }: { text: string }) => {
    const chars = text.split('');
    
    return (
        <motion.div style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--gray-100)' }}>
            {chars.map((char, index) => (
                <WaveChar
                    key={index}
                    animate={{
                        y: [0, -20, 0],
                    }}
                    transition={{
                        duration: 1.5,
                        delay: index * 0.1,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </WaveChar>
            ))}
        </motion.div>
    );
};

// 4. 스케일 페이드 효과
const ScaleChar = styled(motion.span)`
    display: inline-block;
`;

export const ScaleFadeText = ({ text }: { text: string }) => {
    const chars = text.split('');
    
    return (
        <motion.div style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--gray-100)' }}>
            {chars.map((char, index) => (
                <ScaleChar
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                        duration: 0.5,
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 200,
                        damping: 12
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </ScaleChar>
            ))}
        </motion.div>
    );
};

// 5. 로테이션 효과
const RotateChar = styled(motion.span)`
    display: inline-block;
    transform-origin: center;
`;

export const RotateText = ({ text }: { text: string }) => {
    const chars = text.split('');
    
    return (
        <motion.div style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--gray-100)' }}>
            {chars.map((char, index) => (
                <RotateChar
                    key={index}
                    initial={{ opacity: 0, rotate: -180, scale: 0 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    transition={{
                        duration: 0.6,
                        delay: index * 0.08,
                        type: "spring",
                        stiffness: 150
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </RotateChar>
            ))}
        </motion.div>
    );
};

// 6. 글리치 효과
const GlitchWrapper = styled(motion.div)`
    font-size: 2rem;
    font-weight: 700;
    color: var(--primary-color);
    position: relative;
    text-transform: uppercase;
`;

export const GlitchText = ({ text }: { text: string }) => {
    return (
        <GlitchWrapper
            animate={{
                x: [0, -2, 2, -2, 2, 0],
                textShadow: [
                    '0 0 0 var(--primary-color)',
                    '-2px 0 var(--primary-light), 2px 0 var(--primary-light)',
                    '0 0 0 var(--primary-color)'
                ]
            }}
            transition={{
                duration: 0.3,
                repeat: Infinity,
                repeatDelay: 3
            }}
        >
            {text}
        </GlitchWrapper>
    );
};

// 7. 슬라이드 인 효과
const SlideChar = styled(motion.span)`
    display: inline-block;
`;

interface SlideInTextProps {
    text: string;
    duration?: number;
    delay?: number;
    startDelay?: number;
}

export const SlideInText = ({ text, duration = 0.4, delay = 0.08, startDelay = 0 }: SlideInTextProps) => {
    const chars = text.split('');
    
    return (
        <motion.div style={{ fontSize: '1.8rem', fontWeight: 600, color: 'var(--gray-100)' }}>
            {chars.map((char, index) => (
                <SlideChar
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                        duration: duration,
                        delay: startDelay + (index * delay),
                        ease: [0.22, 1, 0.36, 1]
                    }}
                >
                    {char === ' ' ? '\u00A0' : char}
                </SlideChar>
            ))}
        </motion.div>
    );
};




