import styled from "styled-components";
import { motion, AnimatePresence } from 'framer-motion';

interface SubCategory {
  title: string,
  type: string,
  active: boolean
}

interface BtnName {
  title: string,
  subTitle?: SubCategory[]
}

interface BtnNameProps {
  tab: BtnName;
  active?: boolean;
  onClick?: () => void;
}

const CategoryBtnStyle = styled(motion.button)<{ active?: boolean }>`
  padding: 10px 30px;
  border-radius: 50px;
  border: 3px solid;
  border-color: ${({ active }) => ( active ? 'var(--primary-color)' : 'var(--gray-200)')};
  background: ${({ active }) => ( active ? 'var(--primary-color)' : 'transparent')};
  color: ${({ active }) => ( active? 'var(--white-100)' : 'var(--gray-100)')};
  font-weight: 400;
  font-size: 1rem;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    padding: 8px 24px;
    font-size: 0.9rem;
    border-width: 2.5px;
  }
  
  @media (max-width: 480px) {
    padding: 6px 18px;
    font-size: 0.85rem;
    border-width: 2px;
  }
  
  @media (max-width: 360px) {
    padding: 5px 14px;
    font-size: 0.8rem;
  }
`

const CategoryBtn = ({ tab, active, onClick }: BtnNameProps) => {
  return (
    <CategoryBtnStyle
      onClick = { onClick }
      active = { active }
      initial={{ borderColor: active ? 'var(--primary-color)' : 'var(--gray-200)' }}
      animate={{ borderColor: active ? 'var(--primary-color)' : 'var(--gray-200)' }}
      whileHover={{
        borderColor: 'var(--primary-color)',
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      whileTap={{
          scale: 0.95
      }}
    >
      { tab.title }
    </CategoryBtnStyle>
  )
}

interface SubBtnProps {
  tab: BtnName;
  active?: boolean;
  selectedSub?: string;
  onClick?: (subTitle?: SubCategory) => void;
}

const SubBtnStyle = styled(motion.button)<{ active?: boolean }>`
  width: fit-content;
  cursor: pointer;
  margin-top: 1rem;
  padding: 0.25rem 0.5rem;
  border-bottom: ${({ active }) => ( active? '2px solid' : 'none')};
  color: ${({ active }) => ( active? 'var(--primary-color)' : 'var(--gray-100)')};
  border-color: var(--primary-color);
  font-weight: ${({ active }) => ( active ? '600' : '400')};
  font-size: 1rem;
  white-space: nowrap;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-top: 0.75rem;
    padding: 0.2rem 0.4rem;
    border-bottom-width: ${({ active }) => ( active? '1.5px' : 'none')};
  }
  
  @media (max-width: 480px) {
    font-size: 0.85rem;
    margin-top: 0.5rem;
    padding: 0.15rem 0.3rem;
    border-bottom-width: ${({ active }) => ( active? '1px' : 'none')};
  }
  
  @media (max-width: 360px) {
    font-size: 0.8rem;
  }
`

const SubCategory = ({ tab, active, selectedSub, onClick }: SubBtnProps) => {
  return (
    <div className="sub-category-container">
      <AnimatePresence>
        {tab.subTitle?.map((subTitle, i) =>
          active && onClick ? (
            <SubBtnStyle
              key={subTitle.title + i}
              onClick={() => onClick(subTitle)}
              active = { selectedSub == subTitle.type }
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              whileHover={{
                borderBottom: '2px solid',
                borderColor: 'var(--primary-color)',
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              whileTap={{
                scale: 0.95
            }}
            >
              {subTitle.title}
            </SubBtnStyle>
          ) : null
        )}
      </AnimatePresence>
    </div>
  );
};

interface CloseBtnProps {
  onClick: () => void;
}

const CloseBtnStyle = styled(motion.button)`
  margin: 1rem;
  padding: 10px 30px;
  border-radius: 50px;
  border: 3px solid;
  border-color: var(--gray-200);
  background: transparent;
  color: var(--gray-100);
  font-weight: 400;
  font-size: 1rem;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    margin: 0.75rem;
    padding: 8px 24px;
    font-size: 0.9rem;
    border-width: 2.5px;
  }
  
  @media (max-width: 480px) {
    margin: 0.5rem;
    padding: 6px 20px;
    font-size: 0.85rem;
    border-width: 2px;
  }
  
  @media (max-width: 360px) {
    margin: 0.5rem;
    padding: 5px 16px;
    font-size: 0.8rem;
  }
`;

const CloseBtn = ({ onClick }: CloseBtnProps) => {
  return (
    <CloseBtnStyle
      onClick={() => onClick()}
      whileHover={{
        borderColor: 'var(--primary-color)',
        background: 'var(--primary-color)',
        transition: { duration: 0.1 }
      }}
      whileTap={{
          scale: 0.95
      }}
    >
      Close
    </CloseBtnStyle>
  )
}

// 그라데이션 텍스트 버튼
interface GradientBtnProps {
  children: string;
  onClick?: () => void;
}

const GradientBtnWrapper = styled(motion.button)`
  padding: 10px 30px;
  border-radius: 15px;
  border: 3px solid transparent;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  background: linear-gradient(90deg, #76a4da, #bebcd8, #76a4da);
  background-size: 200% auto;
  box-shadow: 0 4px 6px rgba(118, 164, 218, 0.3);
  transition: all 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s ease;
  }
  
  &:hover {
    box-shadow: 0 8px 20px rgba(118, 164, 218, 0.6);
    
    &::before {
      left: 100%;
    }
  }
`;

const GradientBtnText = styled(motion.span)`
  font-size: 1rem;
  font-weight: 600;
  color: var(--white-100);
  display: inline-block;
  position: relative;
  z-index: 1;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const GradientBtn = ({ children, onClick }: GradientBtnProps) => {
  return (
    <GradientBtnWrapper
      onClick={onClick}
      animate={{
        backgroundPosition: ['0% 50%', '100% 50%', '0% 50%']
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "linear"
      }}
      style={{ backgroundPosition: '0% 50%' }}
      whileHover={{
        scale: 1.08,
        y: -2,
        boxShadow: "0 12px 24px rgba(118, 164, 218, 0.7)",
        transition: { 
          duration: 0.3,
          ease: "easeOut"
        }
      }}
      whileTap={{
        scale: 0.95,
        y: 0
      }}
    >
      <GradientBtnText
        whileHover={{
          scale: 1.05,
          textShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
          transition: { duration: 0.2 }
        }}
      >
        {children}
      </GradientBtnText>
    </GradientBtnWrapper>
  );
}

export default { CategoryBtn, SubCategory, CloseBtn, GradientBtn };