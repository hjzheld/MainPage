import styled from "styled-components";
import { motion } from 'framer-motion';
import { useMediaQuery } from '@/hooks/useMediaQuery'

const SlideChar = styled(motion.span)`
  display: inline-block;
`;

interface SlideInTextProps {
  text: string;
  duration?: number;
  delay?: number;
  startDelay?: number;
}

export const SlideInText = ({
  text,
  duration = 0.4,
  delay = 0.08,
  startDelay = 0
}: SlideInTextProps) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isSmallMobile = useMediaQuery('(max-width: 480px)');

  const fontSize = isSmallMobile
    ? '1.3rem'
    : isMobile
      ? '1.6rem'
      : '1.8rem';

  const chars = text.split('');

  return (
    <motion.div
      style={{
        fontSize,
        fontWeight: 600,
        color: 'var(--gray-100)'
      }}
    >
      {chars.map((char, index) => (
        <SlideChar
          key={index}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration,
            delay: startDelay + index * delay,
            ease: [0.22, 1, 0.36, 1]
          }}
        >
          {char === ' ' ? '\u00A0' : char}
        </SlideChar>
      ))}
    </motion.div>
  );
};




