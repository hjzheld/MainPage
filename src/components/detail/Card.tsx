import styled from "styled-components";
import { motion } from 'framer-motion';

interface Project {
  title: string;
  content: string;
  tags: string[]
}

interface CardProps {
  project: Project;
  onClick?: () => void;
}

const CardStyle = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 2rem;
  margin-bottom: 0;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 200px;
  
  color: var(--white-100);
  background: linear-gradient(135deg, var(--primary-color), var(--primary-light));

  border-radius: 10px;
  box-shadow: var(--box-shadow);
  cursor: pointer;
  transition: all 0.3s ease;

  h3 {
    font-size: 1.5rem;
    font-weight: 700;
    margin: 0 0 0.5rem 0;
    line-height: 1.4;
    
    @media (max-width: 768px) {
      font-size: 1.3rem;
    }
    
    @media (max-width: 480px) {
      font-size: 1.2rem;
    }
  }

  p {
    margin-top: 1rem;
    font-size: 0.95rem;
    line-height: 1.6;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
      margin-top: 0.875rem;
    }
    
    @media (max-width: 480px) {
      font-size: 0.85rem;
      margin-top: 0.75rem;
    }
  }

  .content-wrapper {
    flex: 1 1 auto;
  }
  
  .tag-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    gap: 0.75rem;
    flex-shrink: 0;
    
    @media (max-width: 768px) {
      gap: 0.625rem;
      margin-top: 0.875rem;
    }
    
    @media (max-width: 480px) {
      gap: 0.5rem;
      margin-top: 0.75rem;
    }
  }
  
  @media (max-width: 1200px) {
    padding: 1.75rem;
    min-height: 180px;
  }
  
  @media (max-width: 768px) {
    padding: 1.5rem;
    min-height: 160px;
    border-radius: 8px;
  }
  
  @media (max-width: 480px) {
    padding: 1.25rem;
    min-height: 140px;
    border-radius: 6px;
  }
  
  @media (max-width: 360px) {
    padding: 1rem;
    min-height: 120px;
  }
`

const TagStyle = styled.div`
  width: fit-content;
  padding: 5px 15px;
  border-radius: 50px;
  background: var(--gray-300);
  color: var(--gray-100);
  font-size: 0.85rem;
  white-space: nowrap;
  
  @media (max-width: 768px) {
    padding: 4px 12px;
    font-size: 0.8rem;
  }
  
  @media (max-width: 480px) {
    padding: 3px 10px;
    font-size: 0.75rem;
  }
`

const Card = ({ project, onClick }: CardProps) => {
  return (
    <CardStyle
      onClick = { onClick }
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="content-wrapper">
        <h3>{ project.title }</h3>
        <p>{ project.content }</p>
      </div>
      <div className="tag-container">
        {project.tags.map((tag, index) => (
          <TagStyle key={index}>
            {tag}
          </TagStyle>
        ))}
      </div>

    </CardStyle>
  )
}

export default Card;