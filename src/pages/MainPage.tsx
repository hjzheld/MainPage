import styled from "styled-components";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import Btn from "@/components/common/Btn";
import Container from "@/components/common/Container";

import { StackCard } from "@/components/main/StackPart";
import { EducationPart } from "@/components/main/EducationPart";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* =========================================================
   MAIN
========================================================= */

const MainContainer = styled(Container)`
  width: 100%;

  padding: 0 1.5rem 6rem;

  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 0 1rem 4rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.875rem 3rem;
  }
`;

const MainInner = styled.div`
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

/* =========================================================
   HERO
========================================================= */

const HeroSection = styled.section`
  position: relative;

  width: 100%;

  min-height: calc(100vh - 100px);

  display: flex;
  align-items: center;

  padding: 5rem 0 6rem;

  @media (max-width: 1024px) {
    min-height: auto;

    padding: 4.5rem 0 5rem;
  }

  @media (max-width: 768px) {
    padding: 3.5rem 0 4rem;
  }

  @media (max-width: 480px) {
    padding: 2.5rem 0 3rem;
  }
`;

const HeroGrid = styled.div`
  position: relative;
  z-index: 2;

  width: 100%;

  display: grid;

  grid-template-columns:
    minmax(0, 1.15fr)
    minmax(320px, 0.85fr);

  align-items: center;

  gap: clamp(2rem, 5vw, 5rem);

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;

    gap: 3.5rem;
  }

  @media (max-width: 768px) {
    gap: 3rem;
  }

  @media (max-width: 480px) {
    gap: 2.5rem;
  }
`;

const HeroContent = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;

  align-items: flex-start;

  gap: 1.4rem;

  min-width: 0;

  @media (max-width: 768px) {
    gap: 1.25rem;
  }
`;

/* =========================================================
   HERO BADGE
========================================================= */

const HeroBadge = styled.div`
  display: inline-flex;
  align-items: center;

  width: fit-content;

  gap: 0.55rem;

  padding: 0.5rem 0.9rem;

  border-radius: 999px;

  background: var(--sky-100);

  color: var(--gray-400);

  font-family: var(--font-en);

  font-size: 0.78rem;
  font-weight: 500;

  box-shadow: var(--box-shadow);

  &::before {
    content: "";

    width: 7px;
    height: 7px;

    flex-shrink: 0;

    border-radius: 50%;

    background: var(--primary-color);
  }

  @media (max-width: 480px) {
    padding: 0.45rem 0.75rem;

    font-size: 0.7rem;
  }
`;

/* =========================================================
   HERO TITLE
========================================================= */

const HeroVisualArea = styled.div`
  position: relative;

  width: 100%;
`;

const HeroTitle = styled.h1`
  width: 100%;

  color: var(--gray-100);

  font-size: clamp(3rem, 5.25vw, 5rem);

  line-height: 1.12;

  letter-spacing: -0.055em;

  font-weight: 700;

  word-break: keep-all;

  @media (max-width: 1024px) {
    max-width: 850px;

    font-size: clamp(
      3.1rem,
      7vw,
      5rem
    );
  }

  @media (max-width: 768px) {
    font-size: clamp(
      2.6rem,
      9vw,
      4.2rem
    );

    line-height: 1.15;
  }

  @media (max-width: 480px) {
    font-size: clamp(
      2.15rem,
      10vw,
      3.2rem
    );

    line-height: 1.18;

    letter-spacing: -0.045em;
  }
`;

const PopLine = styled.span`
  display: block;

  overflow: hidden;

  /*
   * GSAP으로 위아래 움직일 때
   * 글자가 잘리지 않도록 여유
   */
  padding-top: 0.13em;
  padding-bottom: 0.13em;

  margin-top: -0.13em;
  margin-bottom: -0.13em;

  .hero-char {
    position: relative;

    display: inline-block;

    transform-origin: 50% 100%;

    will-change:
      transform,
      opacity;
  }

  .accent-char {
    color: var(--primary-color);
  }
`;

interface PopTextProps {
  text: string;

  floatIndexes?: number[];

  accentIndexes?: number[];
}

const PopText = ({
  text,
  floatIndexes = [],
  accentIndexes = [],
}: PopTextProps) => {
  return (
    <PopLine>
      {[...text].map(
        (char, index) => {
          const isFloat =
            floatIndexes.includes(
              index,
            );

          const isAccent =
            accentIndexes.includes(
              index,
            );

          return (
            <span
              key={`${char}-${index}`}
              className={[
                "hero-char",

                isFloat
                  ? "idle-char"
                  : "",

                isAccent
                  ? "accent-char"
                  : "",
              ]
                .filter(Boolean)
                .join(" ")}
            >
              {char === " "
                ? "\u00A0"
                : char}
            </span>
          );
        },
      )}
    </PopLine>
  );
};

/* =========================================================
   HERO DESCRIPTION
========================================================= */

const HeroDescription = styled.p`
  width: 100%;
  max-width: 590px;

  color: var(--gray-400);

  font-size: 1rem;

  line-height: 1.85;

  word-break: keep-all;

  strong {
    color: var(--gray-100);

    font-weight: 500;
  }

  @media (max-width: 1024px) {
    max-width: 700px;
  }

  @media (max-width: 768px) {
    max-width: 620px;

    font-size: 0.95rem;

    line-height: 1.8;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;

    line-height: 1.75;

    br {
      display: none;
    }
  }
`;

/* =========================================================
   HERO INFO
========================================================= */

const HeroInfo = styled.div`
  display: flex;
  align-items: center;

  flex-wrap: wrap;

  gap: 0.65rem 1rem;

  width: 100%;
`;

const HeroInfoItem = styled.div`
  display: flex;
  align-items: center;

  gap: 0.45rem;

  color: var(--gray-400);

  font-family: var(--font-en);

  font-size: 0.75rem;

  white-space: nowrap;

  &::before {
    content: "";

    width: 5px;
    height: 5px;

    flex-shrink: 0;

    border-radius: 50%;

    background: var(--primary-color);
  }

  @media (max-width: 480px) {
    font-size: 0.68rem;

    gap: 0.35rem;
  }
`;

/* =========================================================
   MAGNETIC BUTTON
========================================================= */

const HeroActions = styled.div`
  display: flex;
  align-items: center;

  flex-wrap: wrap;

  gap: 1rem;

  margin-top: 0.35rem;

  @media (max-width: 480px) {
    width: 100%;

    flex-direction: column;

    align-items: stretch;

    gap: 0.75rem;
  }
`;

const MagneticZone = styled.div`
  display: inline-flex;

  align-items: center;
  justify-content: center;

  padding: 1.4rem;

  margin: -1.4rem;

  @media (max-width: 480px) {
    width: 100%;

    padding: 0;
    margin: 0;
  }
`;

const MagneticTarget = styled.div`
  display: inline-flex;

  align-items: center;
  justify-content: center;

  will-change: transform;

  @media (max-width: 480px) {
    width: 100%;

    button {
      width: 100%;
    }
  }
`;

const MagneticLabel = styled.span`
  display: inline-block;

  pointer-events: none;

  will-change: transform;
`;

/* =========================================================
   PREVIEW
========================================================= */

const PreviewArea = styled.div`
  position: relative;

  width: 100%;
  max-width: 430px;

  margin-left: auto;

  @media (max-width: 1024px) {
    max-width: 720px;

    margin: 0;
  }

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const PreviewGlow = styled.div`
  position: absolute;

  width: 250px;
  height: 250px;

  right: -60px;
  top: -60px;

  border-radius: 50%;

  background:
    rgba(
      118,
      164,
      218,
      0.18
    );

  filter: blur(10px);

  pointer-events: none;

  @media (max-width: 480px) {
    width: 160px;
    height: 160px;

    right: -50px;
  }
`;

const PreviewCard = styled.div`
  position: relative;
  z-index: 2;

  width: 100%;

  padding: 0.9rem;

  border-radius: 26px;

  background: var(--sky-200);

  border:
    1px solid
    rgba(
      118,
      164,
      218,
      0.18
    );

  box-shadow:
    0 10px 35px
      rgba(
        118,
        164,
        218,
        0.16
      ),
    var(--box-shadow);

  will-change: transform;

  @media (max-width: 480px) {
    padding: 0.7rem;

    border-radius: 20px;
  }
`;

const PreviewHeader = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding:
    0.15rem
    0.15rem
    0.9rem;
`;

const WindowDots = styled.div`
  display: flex;

  gap: 0.35rem;

  span {
    width: 8px;
    height: 8px;

    border-radius: 50%;

    background: var(
      --primary-gray
    );
  }

  span:first-child {
    background:
      var(--primary-color);
  }

  span:nth-child(2) {
    background:
      var(--primary-light);
  }

  span:last-child {
    opacity: 0.55;
  }
`;

const PreviewFileName = styled.span`
  color: var(--gray-400);

  font-family: var(--font-en);

  font-size: 0.68rem;
`;

const PreviewBody = styled.div`
  position: relative;

  min-height: 360px;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  padding: 2rem;

  overflow: hidden;

  border-radius: 19px;

  background: linear-gradient(
    145deg,
    rgba(
      175,
      213,
      255,
      0.8
    ),
    rgba(
      238,
      238,
      238,
      0.92
    )
  );

  @media (max-width: 1024px) {
    min-height: 320px;
  }

  @media (max-width: 768px) {
    min-height: 300px;

    padding: 1.6rem;
  }

  @media (max-width: 480px) {
    min-height: 270px;

    padding: 1.3rem;

    border-radius: 15px;
  }
`;

const PreviewDecoration = styled.div`
  position: absolute;

  width: 170px;
  height: 170px;

  right: -50px;
  top: 50%;

  border-radius:
    40%
    60%
    55%
    45%;

  background:
    rgba(
      255,
      255,
      255,
      0.25
    );

  transform:
    translateY(-50%)
    rotate(25deg);

  pointer-events: none;

  @media (max-width: 480px) {
    width: 130px;
    height: 130px;
  }
`;

const PreviewTop = styled.div`
  position: relative;
  z-index: 2;

  display: flex;

  justify-content: space-between;
  align-items: flex-start;
`;

const PreviewLabel = styled.span`
  color: var(--gray-400);

  font-family: var(--font-en);

  font-size: 0.68rem;

  font-weight: 500;

  letter-spacing: 0.08em;
`;

const PreviewStatus = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 0.35rem;

  color: var(--gray-400);

  font-family: var(--font-en);

  font-size: 0.62rem;

  &::before {
    content: "";

    width: 5px;
    height: 5px;

    border-radius: 50%;

    background:
      var(--primary-color);
  }
`;

const PreviewTitle = styled.div`
  position: relative;
  z-index: 2;

  h2 {
    margin-bottom: 0.7rem;

    color: var(--gray-100);

    font-family: var(--font-en);

    font-size: clamp(
      2.4rem,
      4vw,
      3.4rem
    );

    line-height: 1;

    letter-spacing: -0.05em;
  }

  p {
    max-width: 300px;

    color: var(--gray-400);

    font-size: 0.85rem;

    line-height: 1.7;

    word-break: keep-all;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 2.15rem;
    }

    p {
      font-size: 0.8rem;
    }
  }
`;

const PreviewStack = styled.div`
  position: relative;
  z-index: 2;

  display: flex;

  flex-wrap: wrap;

  gap: 0.5rem;
`;

const PreviewStackItem = styled.span`
  padding:
    0.42rem
    0.7rem;

  border-radius: 999px;

  background:
    rgba(
      255,
      255,
      255,
      0.62
    );

  color: var(--gray-400);

  font-family: var(--font-en);

  font-size: 0.67rem;

  box-shadow:
    0 2px 5px
    rgba(
      118,
      164,
      218,
      0.1
    );

  @media (max-width: 480px) {
    padding:
      0.38rem
      0.6rem;

    font-size: 0.62rem;
  }
`;

/* =========================================================
   SECTION
========================================================= */

const Section = styled.section`
  position: relative;

  width: 100%;

  padding: 6rem 0;

  @media (max-width: 1024px) {
    padding: 5rem 0;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
  }

  @media (max-width: 480px) {
    padding: 3rem 0 0;
  }
`;

const SectionLine = styled.div`
  width: 100%;
  height: 1px;

  margin-bottom: 4.5rem;

  background: linear-gradient(
    90deg,
    transparent,
    rgba(
      118,
      164,
      218,
      0.42
    ),
    transparent
  );

  transform-origin: left;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }

  @media (max-width: 480px) {
    margin-bottom: 2.5rem;
  }
`;

const SectionHeader = styled.div`
  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    minmax(280px, 430px);

  align-items: end;

  gap: 3rem;

  margin-bottom: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    gap: 1rem;

    margin-bottom: 2rem;
  }
`;

const SectionTitleWrap = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.6rem;
`;

const SectionLabel = styled.span`
  color: var(--primary-color);

  font-family: var(--font-en);

  font-size: 0.7rem;

  font-weight: 500;

  letter-spacing: 0.1em;
`;

const SectionTitle = styled.h2`
  color: var(--gray-100);

  font-size: clamp(
    2rem,
    4vw,
    3.1rem
  );

  line-height: 1.2;

  letter-spacing: -0.045em;

  word-break: keep-all;

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

const SectionDescription = styled.p`
  color: var(--gray-400);

  font-size: 0.93rem;

  line-height: 1.75;

  word-break: keep-all;

  @media (max-width: 480px) {
    font-size: 0.86rem;
  }
`;

/* =========================================================
   ABOUT
========================================================= */

const AboutGrid = styled.div`
  display: grid;

  grid-template-columns:
    repeat(
      3,
      minmax(0, 1fr)
    );

  gap: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns:
      repeat(
        2,
        minmax(0, 1fr)
      );

    /*
     * 세 번째 카드는
     * 태블릿에서 한 줄 전체 사용
     */
    & > :last-child {
      grid-column: 1 / -1;
    }
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;

    & > :last-child {
      grid-column: auto;
    }
  }
`;

const AboutCard = styled.div`
  position: relative;

  min-height: 250px;

  display: flex;
  flex-direction: column;

  justify-content: space-between;

  gap: 2rem;

  padding: 1.8rem;

  overflow: hidden;

  border-radius: 22px;

  border:
    1px solid
    rgba(
      118,
      164,
      218,
      0.13
    );

  background: linear-gradient(
    150deg,
    rgba(
      175,
      213,
      255,
      0.58
    ),
    rgba(
      238,
      238,
      238,
      0.9
    )
  );

  box-shadow:
    var(--box-shadow);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  &::after {
    content: "";

    position: absolute;

    width: 110px;
    height: 110px;

    right: -40px;
    top: -40px;

    border-radius: 50%;

    background:
      rgba(
        255,
        255,
        255,
        0.25
      );
  }

  &:hover {
    transform:
      translateY(-6px);

    box-shadow:
      0 10px 25px
      rgba(
        118,
        164,
        218,
        0.2
      );
  }

  @media (max-width: 768px) {
    min-height: 220px;

    padding: 1.6rem;
  }

  @media (max-width: 480px) {
    min-height: 200px;

    padding: 1.4rem;

    border-radius: 18px;
  }
`;

const AboutNumber = styled.span`
  position: relative;
  z-index: 2;

  color: var(--primary-color);

  font-family: var(--font-en);

  font-size: 0.7rem;

  letter-spacing: 0.08em;
`;

const AboutCardBottom = styled.div`
  position: relative;
  z-index: 2;

  h3 {
    margin-bottom: 0.65rem;

    color: var(--gray-100);

    font-size: 1.4rem;

    letter-spacing: -0.03em;
  }

  p {
    color: var(--gray-400);

    font-size: 0.88rem;

    line-height: 1.7;

    word-break: keep-all;
  }

  @media (max-width: 480px) {
    h3 {
      font-size: 1.25rem;
    }

    p {
      font-size: 0.84rem;
    }
  }
`;

/* =========================================================
   STACK / EDUCATION WRAPPER
========================================================= */

const ExistingContent = styled.div`
  width: 100%;

  padding: 1rem 0;

  overflow: hidden;

  border-radius: 26px;

  @media (max-width: 768px) {
    border-radius: 20px;
  }

  @media (max-width: 480px) {
    padding: 0;
  }
`;

/* =========================================================
   SMALL HEADER
========================================================= */

const CompactHeader = styled.div`
  display: flex;

  align-items: flex-end;
  justify-content: space-between;

  gap: 2rem;

  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;

    align-items: flex-start;

    gap: 0.7rem;
  }
`;

const CompactText = styled.p`
  max-width: 440px;

  color: var(--gray-400);

  font-size: 0.9rem;

  line-height: 1.7;

  word-break: keep-all;

  @media (max-width: 480px) {
    font-size: 0.84rem;
  }
`;

/* =========================================================
   CTA
========================================================= */

const BottomCard = styled.div`
  position: relative;

  width: 100%;

  display: grid;

  grid-template-columns:
    minmax(0, 1fr)
    auto;

  align-items: center;

  gap: 3rem;

  padding: 3.5rem;

  overflow: hidden;

  border-radius: 28px;

  background: linear-gradient(
    135deg,
    rgba(
      175,
      213,
      255,
      0.92
    ),
    rgba(
      205,
      205,
      205,
      0.86
    )
  );

  box-shadow: var(--box-shadow);

  &::after {
    content: "";

    position: absolute;

    width: 240px;
    height: 240px;

    right: -80px;
    top: -100px;

    border-radius: 50%;

    background:
      rgba(
        255,
        255,
        255,
        0.2
      );
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr;

    gap: 2rem;

    padding: 3rem 2.5rem;
  }

  @media (max-width: 600px) {
    padding: 2.2rem 1.6rem;

    border-radius: 22px;
  }

  @media (max-width: 480px) {
    padding: 1.8rem 1.3rem;

    border-radius: 18px;
  }
`;

const BottomText = styled.div`
  position: relative;
  z-index: 2;

  h2 {
    max-width: 660px;

    margin-bottom: 0.8rem;

    color: var(--gray-100);

    font-size: clamp(
      1.8rem,
      4vw,
      3rem
    );

    line-height: 1.2;

    letter-spacing: -0.045em;

    word-break: keep-all;
  }

  p {
    max-width: 560px;

    color: var(--gray-400);

    font-size: 0.9rem;

    line-height: 1.75;

    word-break: keep-all;
  }

  @media (max-width: 480px) {
    h2 {
      font-size: 1.65rem;
    }

    p {
      font-size: 0.84rem;
    }
  }
`;

const BottomActions = styled.div`
  position: relative;
  z-index: 2;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  gap: 0.8rem;

  min-width: 170px;

  @media (max-width: 850px) {
    flex-direction: row;

    min-width: 0;
  }

  @media (max-width: 480px) {
    width: 100%;

    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;

/* =========================================================
   MAIN COMPONENT
========================================================= */

const MainPage = () => {
  const navigate =
    useNavigate();

  const mainRef =
    useRef<HTMLDivElement>(
      null,
    );

  useGSAP(
    () => {
      const reducedMotion =
        window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;

      if (reducedMotion) {
        return;
      }

      /* =====================================================
         HERO TEXT
      ===================================================== */

      gsap.set(
        ".hero-char",
        {
          transformOrigin:
            "50% 100%",
        },
      );

      const heroTl =
        gsap.timeline();

      heroTl.from(
        ".hero-badge",
        {
          opacity: 0,

          y: 14,

          duration: 0.4,

          ease:
            "power2.out",

          overwrite:
            "auto",
        },
      );

      heroTl.fromTo(
        ".hero-char",

        {
          opacity: 0,

          yPercent: 120,

          rotate: 5,

          scaleY: 0.9,
        },

        {
          opacity: 1,

          yPercent: 0,

          rotate: 0,

          scaleY: 1,

          duration: 0.7,

          stagger: {
            each: 0.04,

            from: "start",
          },

          ease:
            "back.out(1.25)",

          overwrite:
            "auto",
        },

        "-=0.15",
      );

      heroTl.to(
        ".hero-char",
        {
          y: (
            index: number,
          ) =>
            Math.sin(
              index * 0.9,
            ) * -4,

          duration: 0.2,

          stagger: {
            each: 0.022,

            from: "start",
          },

          ease: "sine.out",

          overwrite:
            "auto",
        },

        "-=0.18",
      );

      heroTl.to(
        ".hero-char",
        {
          y: 0,

          duration: 0.28,

          stagger: {
            each: 0.022,

            from: "start",
          },

          ease:
            "sine.inOut",

          overwrite:
            "auto",
        },

        "-=0.08",
      );

      heroTl.from(
        ".hero-description",
        {
          opacity: 0,

          y: 18,

          duration: 0.5,

          ease:
            "power2.out",

          overwrite:
            "auto",
        },

        "-=0.22",
      );

      heroTl.from(
        ".hero-info-item",
        {
          opacity: 0,

          y: 8,

          duration: 0.35,

          stagger: 0.06,

          ease:
            "power2.out",

          overwrite:
            "auto",
        },

        "-=0.25",
      );

      heroTl.from(
        ".hero-actions",
        {
          opacity: 0,

          y: 14,

          duration: 0.45,

          ease:
            "power2.out",

          overwrite:
            "auto",
        },

        "-=0.2",
      );

      heroTl.from(
        ".preview-card",
        {
          opacity: 0,

          x: 35,

          scale: 0.97,

          duration: 0.75,

          ease:
            "power3.out",

          overwrite:
            "auto",
        },

        "-=0.6",
      );

      const idleLetters =
        gsap.utils.toArray<HTMLElement>(
          ".idle-char",
        );

      const idleSettings = [
        {
          y: -3,
          rotation: -0.8,
          duration: 2.3,
        },

        {
          y: 3,
          rotation: 0.7,
          duration: 2.8,
        },

        {
          y: -4,
          rotation: 1,
          duration: 2.5,
        },
      ];

      idleLetters.forEach(
        (
          letter,
          index,
        ) => {
          const setting =
            idleSettings[
              index
            ] ??
            idleSettings[0];

          gsap.to(
            letter,
            {
              y:
                setting.y,

              rotate:
                setting.rotation,

              duration:
                setting.duration,

              repeat: -1,

              yoyo: true,

              ease:
                "sine.inOut",

              delay:
                2.5 +
                index *
                  0.2,

              overwrite:
                "auto",
            },
          );
        },
      );

      /* =====================================================
         PREVIEW IDLE
      ===================================================== */

      gsap.to(
        ".preview-card",
        {
          y: -6,

          duration: 3.2,

          repeat: -1,

          yoyo: true,

          ease:
            "sine.inOut",

          delay: 1.8,

          overwrite:
            "auto",
        },
      );

      /* =====================================================
         MAGNETIC BUTTON
      ===================================================== */

      const magneticCleanups:
        Array<
          () => void
        > = [];

      const finePointer =
        window.matchMedia(
          "(pointer: fine)",
        ).matches;

      if (finePointer) {
        const zones =
          gsap.utils.toArray<HTMLElement>(
            ".mag-zone",
          );

        zones.forEach(
          (zone) => {
            const target =
              zone.querySelector<HTMLElement>(
                ".mag-target",
              );

            const label =
              zone.querySelector<HTMLElement>(
                ".mag-label",
              );

            if (
              !target ||
              !label
            ) {
              return;
            }

            const strength =
              0.3;

            const labelStrength =
              0.13;

            const handleMove = (
              e: MouseEvent,
            ) => {
              const rect =
                zone.getBoundingClientRect();

              const x =
                gsap.utils.mapRange(
                  rect.left,
                  rect.right,

                  -rect.width /
                    2,

                  rect.width /
                    2,

                  e.clientX,
                );

              const y =
                gsap.utils.mapRange(
                  rect.top,
                  rect.bottom,

                  -rect.height /
                    2,

                  rect.height /
                    2,

                  e.clientY,
                );

              gsap.to(
                target,
                {
                  x:
                    x *
                    strength,

                  y:
                    y *
                    strength,

                  duration:
                    0.35,

                  ease:
                    "power2.out",

                  overwrite:
                    "auto",
                },
              );

              gsap.to(
                label,
                {
                  x:
                    x *
                    labelStrength,

                  y:
                    y *
                    labelStrength,

                  duration:
                    0.35,

                  ease:
                    "power2.out",

                  overwrite:
                    "auto",
                },
              );
            };

            const handleLeave =
              () => {
                gsap.to(
                  target,
                  {
                    x: 0,

                    y: 0,

                    duration:
                      0.7,

                    ease:
                      "elastic.out(1,0.4)",

                    overwrite:
                      "auto",
                  },
                );

                gsap.to(
                  label,
                  {
                    x: 0,

                    y: 0,

                    duration:
                      0.65,

                    ease:
                      "elastic.out(1,0.4)",

                    overwrite:
                      "auto",
                  },
                );
              };

            zone.addEventListener(
              "mousemove",
              handleMove,
            );

            zone.addEventListener(
              "mouseleave",
              handleLeave,
            );

            magneticCleanups.push(
              () => {
                zone.removeEventListener(
                  "mousemove",
                  handleMove,
                );

                zone.removeEventListener(
                  "mouseleave",
                  handleLeave,
                );
              },
            );
          },
        );
      }

      /* =====================================================
         SECTION REVEAL
      ===================================================== */

      const revealItems =
        gsap.utils.toArray<HTMLElement>(
          ".main-reveal",
        );

      revealItems.forEach(
        (item) => {
          gsap.from(
            item,
            {
              opacity: 0,

              y: 35,

              duration:
                0.7,

              ease:
                "power2.out",

              overwrite:
                "auto",

              scrollTrigger: {
                trigger:
                  item,

                start:
                  "top 88%",

                toggleActions:
                  "play none none none",
              },
            },
          );
        },
      );

      /* =====================================================
         ABOUT
      ===================================================== */

      gsap.from(
        ".about-card",
        {
          opacity: 0,

          y: 35,

          scale: 0.98,

          duration: 0.65,

          stagger: 0.1,

          ease:
            "power2.out",

          overwrite:
            "auto",

          scrollTrigger: {
            trigger:
              ".about-grid",

            start:
              "top 82%",
          },
        },
      );

      /* =====================================================
         SECTION LINE
      ===================================================== */

      const lines =
        gsap.utils.toArray<HTMLElement>(
          ".section-line",
        );

      lines.forEach(
        (line) => {
          gsap.from(
            line,
            {
              scaleX: 0,

              duration:
                0.8,

              ease:
                "power2.out",

              overwrite:
                "auto",

              scrollTrigger: {
                trigger:
                  line,

                start:
                  "top 92%",
              },
            },
          );
        },
      );

      return () => {
        magneticCleanups.forEach(
          (cleanup) =>
            cleanup(),
        );
      };
    },

    {
      scope: mainRef,
    },
  );

  return (
    <MainContainer>
      <MainInner ref={mainRef}>
        {/* =================================================
            HERO
        ================================================= */}

        <HeroSection className="hero-section">
          <HeroGrid>
            {/* LEFT */}

            <HeroContent>
              <HeroBadge className="hero-badge">
                Frontend Developer Portfolio
              </HeroBadge>

              <HeroVisualArea>
                <HeroTitle>
                  <PopText
                    text="안녕하세요"
                    floatIndexes={[
                      0,
                      4,
                    ]}
                  />

                  <PopText
                    text="개발자 공혜진입니다"
                    floatIndexes={[
                      6,
                    ]}
                    accentIndexes={[
                      4,
                      5,
                      6,
                    ]}
                  />
                </HeroTitle>
              </HeroVisualArea>

              <HeroDescription className="hero-description">
                새로운 기술을
                배우는 것뿐 아니라
                실제 서비스에서 사용할
                수 있는 결과물로 만드는
                것을 중요하게
                생각합니다.
              </HeroDescription>

              <HeroInfo>
                <HeroInfoItem className="hero-info-item">
                  React / Vue
                </HeroInfoItem>

                <HeroInfoItem className="hero-info-item">
                  Frontend
                </HeroInfoItem>

                <HeroInfoItem className="hero-info-item">
                  Fullstack Experience
                </HeroInfoItem>

                <HeroInfoItem className="hero-info-item">
                  Team Lead
                </HeroInfoItem>
              </HeroInfo>

              <HeroActions className="hero-actions">
                <MagneticZone className="mag-zone">
                  <MagneticTarget className="mag-target">
                    <Btn.GradientBtn
                      onClick={() =>
                        navigate(
                          "/project",
                        )
                      }
                    >
                      <MagneticLabel className="mag-label">
                        프로젝트 보러가기 ▶
                      </MagneticLabel>
                    </Btn.GradientBtn>
                  </MagneticTarget>
                </MagneticZone>

                {/* GITHUB */}

                <MagneticZone className="mag-zone">
                  <MagneticTarget className="mag-target">
                    <Btn.GradientBtn
                      onClick={() =>
                        window.open(
                          "https://github.com/hjzheld",

                          "_blank",

                          "noopener,noreferrer",
                        )
                      }
                    >
                      <MagneticLabel className="mag-label">
                        GitHub ▶
                      </MagneticLabel>
                    </Btn.GradientBtn>
                  </MagneticTarget>
                </MagneticZone>
              </HeroActions>
            </HeroContent>

            <PreviewArea>
              <PreviewGlow />

              <PreviewCard className="preview-card">
                <PreviewHeader>
                  <WindowDots>
                    <span />
                    <span />
                    <span />
                  </WindowDots>

                  <PreviewFileName>
                    portfolio.tsx
                  </PreviewFileName>
                </PreviewHeader>

                <PreviewBody>
                  <PreviewDecoration />

                  <PreviewTop>
                    <PreviewLabel>
                      ABOUT ME
                    </PreviewLabel>

                    <PreviewStatus>
                      AVAILABLE
                    </PreviewStatus>
                  </PreviewTop>

                  <PreviewTitle>
                    <h2>
                      Web
                      <br />
                      Developer
                    </h2>

                    <p>
                      화면 구현부터
                      API 연동, 데이터
                      처리와 서비스
                      구조까지 함께
                      고민합니다.
                    </p>
                  </PreviewTitle>

                  <PreviewStack>
                    <PreviewStackItem>
                      React
                    </PreviewStackItem>

                    <PreviewStackItem>
                      Vue
                    </PreviewStackItem>

                    <PreviewStackItem>
                      TypeScript
                    </PreviewStackItem>

                    <PreviewStackItem>
                      FastAPI
                    </PreviewStackItem>

                    <PreviewStackItem>
                      PostgreSQL
                    </PreviewStackItem>
                  </PreviewStack>
                </PreviewBody>
              </PreviewCard>
            </PreviewArea>
          </HeroGrid>
        </HeroSection>

        {/* =================================================
            ABOUT
        ================================================= */}

        <Section>
          <SectionLine className="section-line" />

          <SectionHeader className="main-reveal">
            <SectionTitleWrap>
              <SectionLabel>
                01 / ABOUT
              </SectionLabel>

              <SectionTitle>
                제가 개발할 때
                중요하게 보는 것
              </SectionTitle>
            </SectionTitleWrap>

            <SectionDescription>
              한 가지 영역만
              바라보기보다 실제
              서비스가 어떻게
              연결되고 운영되는지를
              이해하며 개발하려고
              합니다.
            </SectionDescription>
          </SectionHeader>

          <AboutGrid className="about-grid">
            <AboutCard className="about-card">
              <AboutNumber>
                01 / FRONTEND
              </AboutNumber>

              <AboutCardBottom>
                <h3>
                  사용자 화면
                </h3>

                <p>
                  React와 Vue를
                  활용해 사용자에게
                  직접 보이는 화면과
                  인터랙션을
                  구현합니다.
                </p>
              </AboutCardBottom>
            </AboutCard>

            <AboutCard className="about-card">
              <AboutNumber>
                02 / SERVICE
              </AboutNumber>

              <AboutCardBottom>
                <h3>
                  서비스 흐름
                </h3>

                <p>
                  API, 사용자 상태,
                  권한과 데이터 흐름을
                  이해하고 화면과
                  자연스럽게
                  연결합니다.
                </p>
              </AboutCardBottom>
            </AboutCard>

            <AboutCard className="about-card">
              <AboutNumber>
                03 / TEAM
              </AboutNumber>

              <AboutCardBottom>
                <h3>
                  협업과 결과
                </h3>

                <p>
                  일정과 QA,
                  유지보수성을 함께
                  고려하며 팀이 결과를
                  낼 수 있는 방향을
                  고민합니다.
                </p>
              </AboutCardBottom>
            </AboutCard>
          </AboutGrid>
        </Section>

        {/* =================================================
            STACK
        ================================================= */}

        <Section>
          <SectionLine className="section-line" />

          <CompactHeader className="main-reveal">
            <SectionTitleWrap>
              <SectionLabel>
                02 / STACK
              </SectionLabel>
            </SectionTitleWrap>

            <CompactText>
              실무와 개인
              프로젝트에서 직접
              사용한 기술을 중심으로
              정리했습니다.
            </CompactText>
          </CompactHeader>

          <ExistingContent className="main-reveal">
            <StackCard />
          </ExistingContent>
        </Section>

        {/* =================================================
            EDUCATION
        ================================================= */}

        <Section>
          <SectionLine className="section-line" />

          <CompactHeader className="main-reveal">
            <SectionTitleWrap>
              <SectionLabel>
                03 / EDUCATION
              </SectionLabel>
            </SectionTitleWrap>

            <CompactText>
              현재까지의 학력입니다.
            </CompactText>
          </CompactHeader>

          <ExistingContent className="main-reveal">
            <EducationPart />
          </ExistingContent>
        </Section>

        {/* =================================================
            CTA
        ================================================= */}

        <Section>
          <SectionLine className="section-line" />

          <BottomCard className="main-reveal">
            <BottomText>
              <h2>
                프로젝트에서
                더 자세히
                보여드릴게요.
              </h2>

              <p>
                개인 프로젝트와
                실제 구현 경험,
                사용 기술과 문제
                해결 과정을 프로젝트
                페이지에
                정리해두었습니다.
              </p>
            </BottomText>

            <BottomActions>
              <MagneticZone className="mag-zone">
                  <MagneticTarget className="mag-target">
                    <Btn.GradientBtn
                      onClick={() =>
                        navigate(
                          "/project",
                        )
                      }
                    >
                      <MagneticLabel className="mag-label">
                        프로젝트 보러가기 ▶
                      </MagneticLabel>
                    </Btn.GradientBtn>
                  </MagneticTarget>
                </MagneticZone>

                <MagneticZone className="mag-zone">
                  <MagneticTarget className="mag-target">
                    <Btn.GradientBtn
                      onClick={() =>
                        navigate(
                        "/personal",
                        )
                      }
                    >
                      <MagneticLabel className="mag-label">
                        경력 보기 ▶
                      </MagneticLabel>
                    </Btn.GradientBtn>
                  </MagneticTarget>
                </MagneticZone>
            </BottomActions>
          </BottomCard>
        </Section>
      </MainInner>
    </MainContainer>
  );
};

export default MainPage;