import { useEffect, useState } from "react";
import styled from "styled-components";

const MouseGlow = styled.div`
  position: fixed;
  inset: 0;

  pointer-events: none;
  z-index: 0;

  background: radial-gradient(
    500px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(118, 164, 218, 0.12),
    transparent 65%
  );
`;

const MouseBackground = () => {
  const [isMouseDevice, setIsMouseDevice] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      "(hover: hover) and (pointer: fine)"
    );

    const handleChange = () => {
      setIsMouseDevice(mediaQuery.matches);
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  useEffect(() => {
    if (!isMouseDevice) return;

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
  }, [isMouseDevice]);

  if (!isMouseDevice) {
    return null;
  }

  return <MouseGlow />;
};

export default MouseBackground;