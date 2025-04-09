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
  cursor: pointer;
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
  border-bottom: ${({ active }) => ( active? '2px solid' : 'none')};
  color: ${({ active }) => ( active? 'var(--primary-color)' : 'var(--gray-100)')};
  border-color: var(--primary-color);
  font-weight: ${({ active }) => ( active ? '600' : '400')}
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
  background: 'transparent';
  color: var(--gray-100)');
  font-weight: 400;
  cursor: pointer;
`

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

export default { CategoryBtn, SubCategory, CloseBtn };