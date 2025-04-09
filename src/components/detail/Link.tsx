import styled from "styled-components";
import { motion } from 'framer-motion';

const MainTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1rem;
`;

const LinkText = styled(motion.p)`
  font-size: 1rem;
  margin-top: 0.6rem;
  cursor: pointer;
`;

interface LinkProps {
  title: string;
  links: string | string[];
}

const Link = ({ title, links }: LinkProps) => {
  const renderLinks = () => {
    if (typeof links === "string") {
      return (
        <LinkText 
        onClick={() => window.open(links, "_blank")}
        whileHover={{
            color: 'var(--primary-color)',
            transition: { duration: 0.3 }
        }}>
          ▶️ {links}
        </LinkText>
      );
    }

    return links.map((link, idx) => (
      <LinkText 
      key={idx} 
      onClick={() => window.open(link, "_blank")}
      whileHover={{
        color: 'var(--primary-color)',
        transition: { duration: 0.3 }
      }}
      >
        ▶️ {link}
      </LinkText>
    ));
  };

  return (
    <>
      <MainTitle>☑️ {title}</MainTitle>
      {renderLinks()}
    </>
  );
};

export default Link;
