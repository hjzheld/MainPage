import { useEffect } from "react";
import styled from "styled-components";

const MouseGlow = styled.div`
  position: fixed;
  inset: 0;

  pointer-events: none;
  z-index: 0;

  background: radial-gradient(
    380px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(118, 164, 218, 0.13),
    rgba(118, 164, 218, 0.05) 35%,
    transparent 70%
  );
`;

const MouseBackground = () => {
  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      document.documentElement.style.setProperty(
        "--mouse-x",
        `${event.clientX}px`
      );

      document.documentElement.style.setProperty(
        "--mouse-y",
        `${event.clientY}px`
      );
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return <MouseGlow />;
};

export default MouseBackground;