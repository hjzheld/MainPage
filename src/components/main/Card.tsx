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
  width: 90%;
  padding: 2rem;
  margin-bottom: 8%;
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  color: var(--gray-100);
  background: var(--white-100);
  border-radius: 10px;
  box-shadow: var(--box-shadow);
  cursor: pointer; 
\
  p {
    margin-top: 1rem;
  }

  .tag-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    gap: 1rem;
  }
`

const TagStyle = styled.div`
  width: fit-content;
  padding: 5px 15px;
  border-radius: 50px;
  background: var(--gray-300);
  color: var(--gray-100);
`

const Card = ({ project, onClick }: CardProps) => {
  return (
    <CardStyle
      onClick = { onClick }
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div>
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