import styled from "styled-components";
import { motion } from 'framer-motion';

const LinkSection = styled.div`
  margin: 2rem 0;
`;

const LinkTitle = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: var(--gray-100);
  line-height: 1.4;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 0.875rem;
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 0.75rem;
  }
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  
  @media (max-width: 480px) {
    gap: 0.625rem;
  }
`;

const LinkButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.875rem 1.25rem;
  background: rgba(118, 164, 218, 0.1);
  border: 1.5px solid rgba(118, 164, 218, 0.3);
  border-radius: 12px;
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--gray-100);
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
  word-break: break-all;
  overflow-wrap: break-word;
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '→';
    margin-left: 0.5rem;
    opacity: 0.6;
    transition: all 0.3s ease;
  }
  
  &:hover {
    background: rgba(118, 164, 218, 0.2);
    border-color: var(--primary-color);
    transform: translateX(4px);
    
    &::after {
      opacity: 1;
      transform: translateX(4px);
    }
  }
  
  @media (max-width: 768px) {
    padding: 0.75rem 1rem;
    font-size: 0.9rem;
    border-radius: 10px;
  }
  
  @media (max-width: 480px) {
    padding: 0.625rem 0.875rem;
    font-size: 0.85rem;
    border-radius: 8px;
  }
`;

interface LinkProps {
  title: string;
  links: string | string[];
}

const Link = ({ title, links }: LinkProps) => {
  const renderLinks = () => {
    if (typeof links === "string") {
      return (
        <LinkButton 
          href={links}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3 }}
        >
          {links}
        </LinkButton>
      );
    }

    return links.map((link, idx) => (
      <LinkButton 
        key={idx}
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.3, delay: idx * 0.1 }}
      >
        {link}
      </LinkButton>
    ));
  };

  return (
    <LinkSection>
      <LinkTitle>{title}</LinkTitle>
      <LinkContainer>
        {renderLinks()}
      </LinkContainer>
    </LinkSection>
  );
};

export default Link;
