import { useEffect, useState } from "react";
import styled from "styled-components";

const CursorCircle = styled.div<{ $hover: boolean }>`
  position: fixed;
  top: 0;
  left: 0;

  width: ${({ $hover }) => ($hover ? "52px" : "32px")};
  height: ${({ $hover }) => ($hover ? "52px" : "32px")};

  border-radius: 50%;

  border: 1px solid rgba(118, 164, 218, 0.7);
  background: rgba(118, 164, 218, 0.08);

  pointer-events: none;
  z-index: 99998;

  transform: translate(-50%, -50%);

  transition:
    width 0.2s ease,
    height 0.2s ease,
    background 0.2s ease;
`;

const CustomCursor = () => {
  const [isMouseDevice, setIsMouseDevice] = useState(false);

  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const [circle, setCircle] = useState({
    x: 0,
    y: 0,
  });

  const [isHover, setIsHover] = useState(false);

  // ==========================================
  // 마우스 / 트랙패드 환경인지 확인
  // ==========================================
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
      mediaQuery.removeEventListener(
        "change",
        handleChange
      );
    };
  }, []);

  // ==========================================
  // 마우스 위치
  // ==========================================
  useEffect(() => {
    if (!isMouseDevice) return;

    const moveMouse = (e: MouseEvent) => {
      setMouse({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveMouse);

    return () => {
      window.removeEventListener(
        "mousemove",
        moveMouse
      );
    };
  }, [isMouseDevice]);

  // ==========================================
  // 원이 마우스를 부드럽게 따라오게
  // ==========================================
  useEffect(() => {
    if (!isMouseDevice) return;

    let animationFrame: number;

    const animate = () => {
      setCircle((prev) => ({
        x:
          prev.x +
          (mouse.x - prev.x) * 0.15,

        y:
          prev.y +
          (mouse.y - prev.y) * 0.15,
      }));

      animationFrame =
        requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [mouse, isMouseDevice]);

  // ==========================================
  // 버튼 / 링크 hover
  // ==========================================
  useEffect(() => {
    if (!isMouseDevice) return;

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      if (
        target.closest(
          "a, button, [role='button'], input, textarea, select"
        )
      ) {
        setIsHover(true);
      } else {
        setIsHover(false);
      }
    };

    document.addEventListener(
      "mouseover",
      handleOver
    );

    return () => {
      document.removeEventListener(
        "mouseover",
        handleOver
      );
    };
  }, [isMouseDevice]);

  // ==========================================
  // 모바일 / 터치 환경이면 아예 렌더링 X
  // ==========================================
  if (!isMouseDevice) {
    return null;
  }

  return (
    <CursorCircle
      $hover={isHover}
      style={{
        left: circle.x,
        top: circle.y,
      }}
    />
  );
};

export default CustomCursor;