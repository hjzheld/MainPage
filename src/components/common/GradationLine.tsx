import styled from "styled-components";

const GradientLine = styled.div<{ color?: 'primary' | 'gray' }>`
  width: 80%;
  height: 2px;
  margin: 10px auto 0;

  background: linear-gradient(
    90deg,
    transparent,
    ${({ color }) =>
      color === 'gray'
        ? 'var(--primary-gray)'
        : 'var(--primary-color)'},
    transparent
  );
`;

interface GradientLineProps {
  color?: 'primary' | 'gray';
}

const GradLine = ({ color = 'primary' }: GradientLineProps) => {
  return <GradientLine color={color} />;
};

export default GradLine;
