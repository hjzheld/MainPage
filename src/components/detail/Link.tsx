import styled from "styled-components";

const MainTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1rem;
`;

const LinkText = styled.p`
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
        <LinkText onClick={() => window.open(links, "_blank")}>
          ▶️ {links}
        </LinkText>
      );
    }

    return links.map((link, idx) => (
      <LinkText key={idx} onClick={() => window.open(link, "_blank")}>
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
