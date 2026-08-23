import styled from "styled-components";
import {
  motion,
  type Variants,
} from "framer-motion";

import { useRef } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

/* =========================================================
   INTRO OVERLAY
========================================================= */

const ShapeOverlay = styled.svg`
  position: fixed;
  inset: 0;
  z-index: 9998;

  width: 100%;
  height: 100%;

  pointer-events: none;

  .shape-overlays__path {
    will-change: d;
  }
`;

const IntroMark = styled.div`
  position: fixed;
  inset: 0;
  z-index: 9999;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.65rem;

  color: rgba(255, 255, 255, 0.95);

  font-family: var(--font-en);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.16em;

  pointer-events: none;

  span {
    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: rgba(255, 255, 255, 0.95);
  }

  @media (max-width: 480px) {
    font-size: 0.64rem;
  }
`;

/* =========================================================
   PAGE
========================================================= */

const Page = styled.div`
  position: relative;

  width: 100%;

  padding: 1.5rem 0 7rem;

  overflow: hidden;


  @media (max-width: 768px) {
    padding: 0.75rem 0 4rem;
  }
`;

const Inner = styled.div`
  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  padding: 0 1.5rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }

  @media (max-width: 480px) {
    padding: 0 0.875rem;
  }
`;

/* =========================================================
   HERO
========================================================= */

const Hero = styled.section`
  position: relative;

  width: 100%;

  margin-top: 1.5rem;
  padding: clamp(2rem, 5vw, 4.8rem);

  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 34px;

  background:
    linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.7),
      rgba(241, 248, 255, 0.58)
    );

  box-shadow:
    0 24px 60px rgba(99, 99, 99, 0.08),
    0 8px 24px rgba(118, 164, 218, 0.12);

  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  &::before {
    content: "";

    position: absolute;

    width: 320px;
    height: 320px;

    right: -110px;
    top: -130px;

    border-radius: 50%;

    background: rgba(118, 164, 218, 0.13);

    pointer-events: none;
  }

  &::after {
    content: "";

    position: absolute;

    width: 220px;
    height: 220px;

    left: -90px;
    bottom: -120px;

    border-radius: 50%;

    background: rgba(190, 188, 216, 0.16);

    pointer-events: none;
  }

  @media (max-width: 768px) {
    margin-top: 0.75rem;

    padding: 2.3rem 1.5rem;

    border-radius: 26px;
  }

  @media (max-width: 480px) {
    padding: 1.8rem 1.2rem;

    border-radius: 22px;
  }
`;

const HeroBadge = styled.div`
  position: relative;
  z-index: 2;

  display: inline-flex;
  align-items: center;

  width: fit-content;

  gap: 0.55rem;

  margin-bottom: 1.35rem;

  padding: 0.48rem 0.82rem;

  border: 1px solid rgba(118, 164, 218, 0.16);
  border-radius: 999px;

  background: rgba(255, 255, 255, 0.48);

  color: var(--gray-400);

  font-family: var(--font-en);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.04em;

  &::before {
    content: "";

    width: 7px;
    height: 7px;

    border-radius: 50%;

    background: var(--primary-color);

    box-shadow: 0 0 0 5px rgba(118, 164, 218, 0.1);
  }
`;

const HeroTitle = styled.h1`
  position: relative;
  z-index: 2;

  max-width: 820px;

  color: var(--gray-100);

  font-size: clamp(2.7rem, 5.6vw, 5rem);

  line-height: 1.08;

  letter-spacing: -0.06em;

  word-break: keep-all;

  strong {
    color: var(--primary-color);
    font-weight: 700;
  }

  @media (max-width: 768px) {
    font-size: clamp(2.35rem, 8.5vw, 4rem);
  }

  @media (max-width: 480px) {
    font-size: clamp(2.05rem, 10vw, 3rem);

    line-height: 1.13;
  }
`;

const HeroDescription = styled.p`
  position: relative;
  z-index: 2;

  max-width: 690px;

  margin-top: 1.6rem;

  color: var(--gray-400);

  font-size: 1rem;

  line-height: 1.9;

  word-break: keep-all;

  strong {
    color: var(--gray-100);
    font-weight: 500;
  }

  @media (max-width: 768px) {
    font-size: 0.94rem;
  }

  @media (max-width: 480px) {
    margin-top: 1.25rem;

    font-size: 0.88rem;
    line-height: 1.8;
  }
`;

/* =========================================================
   SUMMARY
========================================================= */

const SummaryGrid = styled.div`
  position: relative;
  z-index: 2;

  width: 100%;

  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));

  gap: 0.75rem;

  margin-top: 3rem;

  @media (max-width: 850px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;

    margin-top: 2.2rem;
  }
`;

const SummaryItem = styled.div`
  min-height: 118px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  gap: 1.5rem;

  padding: 1.2rem 1.25rem;

  border: 1px solid rgba(118, 164, 218, 0.14);
  border-radius: 18px;

  background: rgba(255, 255, 255, 0.46);

  box-shadow: 0 8px 24px rgba(118, 164, 218, 0.08);

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    background 0.25s ease;

  &:hover {
    transform: translateY(-4px);

    border-color: rgba(118, 164, 218, 0.28);

    background: rgba(255, 255, 255, 0.68);
  }

  @media (max-width: 480px) {
    min-height: 96px;

    gap: 1rem;
  }
`;

const SummaryLabel = styled.span`
  color: var(--gray-400);

  font-family: var(--font-en);

  font-size: 0.64rem;
  letter-spacing: 0.11em;
`;

const SummaryValue = styled.strong`
  color: var(--gray-100);

  font-size: 1.16rem;
  font-weight: 600;

  letter-spacing: -0.02em;
`;

/* =========================================================
   KEYWORDS
========================================================= */

const KeywordSection = styled.section`
  padding: 4.5rem 0 5.5rem;

  @media (max-width: 768px) {
    padding: 3.5rem 0 4rem;
  }
`;

const KeywordTitle = styled.div`
  margin-bottom: 1.2rem;

  color: var(--gray-400);

  font-family: var(--font-en);
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.13em;
`;

const KeywordList = styled.div`
  display: flex;
  flex-wrap: wrap;

  gap: 0.6rem;
`;

const Keyword = styled.span`
  padding: 0.58rem 0.9rem;

  border: 1px solid rgba(118, 164, 218, 0.12);
  border-radius: 999px;

  background: rgba(255, 255, 255, 0.38);

  color: var(--gray-400);

  font-size: 0.78rem;

  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);

  transition:
    transform 0.2s ease,
    color 0.2s ease,
    border-color 0.2s ease,
    background 0.2s ease;

  &:hover {
    transform: translateY(-2px);

    color: var(--gray-100);

    border-color: rgba(118, 164, 218, 0.3);

    background: rgba(241, 248, 255, 0.75);
  }

  @media (max-width: 480px) {
    padding: 0.52rem 0.76rem;

    font-size: 0.72rem;
  }
`;

/* =========================================================
   SECTION HEADER
========================================================= */

const SectionLine = styled.div`
  width: 100%;
  height: 1px;

  margin-bottom: 3.5rem;

  background: linear-gradient(
    90deg,
    rgba(118, 164, 218, 0),
    rgba(118, 164, 218, 0.36),
    rgba(118, 164, 218, 0)
  );

  transform-origin: left;

  @media (max-width: 768px) {
    margin-bottom: 2.5rem;
  }
`;

const SectionHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(280px, 430px);

  align-items: end;

  gap: 3rem;

  margin-bottom: 3.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;

    gap: 1rem;

    margin-bottom: 2.5rem;
  }
`;

const SectionHeaderLeft = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;

const SectionLabel = styled.span`
  color: var(--primary-color);

  font-family: var(--font-en);

  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.12em;
`;

const SectionTitle = styled.h2`
  color: var(--gray-100);

  font-size: clamp(2rem, 4vw, 3rem);

  line-height: 1.2;

  letter-spacing: -0.045em;
`;

const SectionDescription = styled.p`
  max-width: 430px;

  color: var(--gray-400);

  font-size: 0.9rem;

  line-height: 1.8;

  word-break: keep-all;

  @media (max-width: 480px) {
    font-size: 0.84rem;
  }
`;

/* =========================================================
   CAREER TIMELINE
========================================================= */

const CareerArea = styled.section`
  position: relative;
`;

const Timeline = styled.div`
  position: relative;

  width: 100%;

  display: flex;
  flex-direction: column;

  gap: 2.5rem;

  padding-left: 42px;

  @media (max-width: 768px) {
    gap: 1.7rem;

    padding-left: 24px;
  }

  @media (max-width: 480px) {
    padding-left: 14px;
  }
`;

const TimelineBackground = styled.div`
  position: absolute;

  left: 11px;
  top: 0;
  bottom: 0;

  width: 1px;

  background: rgba(118, 164, 218, 0.15);

  @media (max-width: 768px) {
    left: 5px;
  }

  @media (max-width: 480px) {
    left: 2px;
  }
`;

const TimelineProgress = styled.div`
  position: absolute;

  left: 11px;
  top: 0;

  width: 2px;
  height: 100%;

  border-radius: 999px;

  background: linear-gradient(
    180deg,
    var(--primary-color),
    var(--primary-light)
  );

  transform: scaleY(0);
  transform-origin: top;

  @media (max-width: 768px) {
    left: 4.5px;
  }

  @media (max-width: 480px) {
    left: 1.5px;
  }
`;

/* =========================================================
   HISTORY CARD
========================================================= */

const HistoryCard = styled(motion.article)`
  position: relative;

  width: 100%;

  padding: 2.35rem;

  overflow: visible;

  border: 1px solid rgba(255, 255, 255, 0.72);
  border-radius: 26px;

  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.66),
    rgba(241, 248, 255, 0.46)
  );

  box-shadow:
    0 16px 40px rgba(99, 99, 99, 0.07),
    0 4px 14px rgba(118, 164, 218, 0.08);

  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);

  color: var(--gray-100);

  transition:
    transform 0.25s ease,
    border-color 0.25s ease,
    box-shadow 0.25s ease;

  &::before {
    content: "";

    position: absolute;

    left: -37px;
    top: 42px;

    width: 10px;
    height: 10px;

    border-radius: 50%;

    background: var(--main-background);

    border: 2px solid var(--primary-color);

    box-shadow: 0 0 0 5px rgba(118, 164, 218, 0.1);

    @media (max-width: 768px) {
      left: -23px;
    }

    @media (max-width: 480px) {
      left: -17px;

      width: 8px;
      height: 8px;
    }
  }

 
  &:hover {
    transform: translateY(-3px);

    border-color: rgba(118, 164, 218, 0.24);

    box-shadow:
      0 22px 48px rgba(99, 99, 99, 0.08),
      0 8px 24px rgba(118, 164, 218, 0.13);
  }

  @media (max-width: 768px) {
    padding: 1.8rem;

    border-radius: 22px;

    &::after {
      left: 1.8rem;
      right: 1.8rem;
    }
  }

  @media (max-width: 480px) {
    padding: 1.35rem;

    border-radius: 18px;

    &::after {
      left: 1.35rem;
      right: 1.35rem;
    }
  }
`;

/* =========================================================
   CARD HEADER
========================================================= */

const CardHeader = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) auto;

  align-items: start;

  gap: 2rem;

  padding-bottom: 1.5rem;

  border-bottom: 1px solid rgba(118, 164, 218, 0.16);

  @media (max-width: 650px) {
    grid-template-columns: 1fr;

    gap: 1rem;
  }
`;

const CardTitleArea = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.48rem;
`;

const CardIndex = styled.span`
  color: var(--primary-color);

  font-family: var(--font-en);

  font-size: 0.64rem;
  font-weight: 500;
  letter-spacing: 0.12em;
`;

const CompanyTitle = styled.h3`
  color: var(--gray-100);

  font-size: clamp(1.45rem, 3vw, 1.95rem);

  line-height: 1.3;

  letter-spacing: -0.035em;
`;

const RoleText = styled.p`
  color: var(--gray-400);

  font-family: var(--font-en);

  font-size: 0.82rem;
  font-weight: 500;
`;

const DateArea = styled.div`
  display: flex;
  flex-direction: column;

  align-items: flex-end;

  gap: 0.6rem;

  flex-shrink: 0;

  @media (max-width: 650px) {
    align-items: flex-start;
  }
`;

const DateText = styled.span`
  color: var(--gray-400);

  font-family: var(--font-en);

  font-size: 0.8rem;
`;

const CurrentBadge = styled.span`
  display: inline-flex;
  align-items: center;

  gap: 0.42rem;

  padding: 0.36rem 0.68rem;

  border: 1px solid rgba(118, 164, 218, 0.18);
  border-radius: 999px;

  background: rgba(118, 164, 218, 0.09);

  color: var(--primary-color);

  font-family: var(--font-en);

  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.04em;

  &::before {
    content: "";

    width: 6px;
    height: 6px;

    border-radius: 50%;

    background: var(--primary-color);

    box-shadow: 0 0 0 4px rgba(118, 164, 218, 0.1);
  }
`;

/* =========================================================
   CONTENT
========================================================= */

const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.85rem;

  margin-top: 1.8rem;
`;

const ProjectBlock = styled(motion.div)`
  position: relative;

  padding: 1.25rem 1.35rem;

  border: 1px solid rgba(118, 164, 218, 0.1);
  border-radius: 16px;

  background: rgba(255, 255, 255, 0.4);

  transition:
    transform 0.22s ease,
    border-color 0.22s ease,
    background 0.22s ease;

  &::before {
    content: "";

    position: absolute;

    left: 0;
    top: 1.2rem;
    bottom: 1.2rem;

    width: 2px;

    border-radius: 999px;

    background: rgba(118, 164, 218, 0.65);
  }

  &:hover {
    transform: translateX(3px);

    border-color: rgba(118, 164, 218, 0.2);

    background: rgba(241, 248, 255, 0.64);
  }

  @media (max-width: 480px) {
    padding: 1.05rem 1rem 1.05rem 1.15rem;
  }
`;

const ProjectLabel = styled.div`
  margin-bottom: 0.68rem;

  color: var(--primary-color);

  font-family: var(--font-en);

  font-size: 0.62rem;
  font-weight: 600;
  letter-spacing: 0.1em;
`;

const ProjectTextWrap = styled(motion.div)`
  display: flex;
  flex-direction: column;

  gap: 0.4rem;
`;

const ProjectText = styled(motion.p)`
  position: relative;

  padding-left: 0.95rem;

  color: var(--gray-100);

  font-size: 0.9rem;

  line-height: 1.75;

  word-break: keep-all;

  &::before {
    content: "";

    position: absolute;

    left: 0;
    top: 0.75rem;

    width: 3px;
    height: 3px;

    border-radius: 50%;

    background: var(--primary-color);
  }

  @media (max-width: 480px) {
    font-size: 0.84rem;
  }
`;

/* =========================================================
   SKILLS
========================================================= */

const SkillArea = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));

  gap: 1rem;

  margin-top: 1.7rem;

  @media (max-width: 850px) {
    grid-template-columns: 1fr;
  }
`;

const SkillSection = styled(motion.div)`
  padding: 1.3rem;

  border: 1px solid rgba(118, 164, 218, 0.11);
  border-radius: 16px;

  background: linear-gradient(
    145deg,
    rgba(241, 248, 255, 0.6),
    rgba(255, 255, 255, 0.34)
  );
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 1rem;

  padding-bottom: 0.8rem;

  border-bottom: 1px solid rgba(118, 164, 218, 0.13);
`;

const SkillTitle = styled.h4`
  color: var(--gray-100);

  font-family: var(--font-en);

  font-size: 0.95rem;
  font-weight: 600;
`;

const SkillCount = styled.span`
  color: var(--gray-400);

  font-family: var(--font-en);

  font-size: 0.62rem;
  letter-spacing: 0.04em;
`;

const SkillList = styled(motion.ul)`
  display: flex;
  flex-direction: column;

  gap: 0.58rem;

  margin-top: 0.9rem;
`;

const SkillItem = styled(motion.li)`
  position: relative;

  padding-left: 1rem;

  color: var(--gray-100);

  font-size: 0.84rem;

  line-height: 1.65;

  word-break: keep-all;

  &::before {
    content: "";

    position: absolute;

    left: 0;
    top: 0.67rem;

    width: 4px;
    height: 4px;

    border-radius: 50%;

    background: rgba(118, 164, 218, 0.8);
  }
`;

/* =========================================================
   BOTTOM
========================================================= */

const BottomMessage = styled.div`
  position: relative;

  margin-top: 5rem;

  padding: 3rem;

  overflow: hidden;

  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 26px;

  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.54),
    rgba(216, 224, 230, 0.58)
  );

  box-shadow:
    0 16px 40px rgba(99, 99, 99, 0.06),
    0 5px 18px rgba(118, 164, 218, 0.09);

  &::after {
    content: "";

    position: absolute;

    width: 210px;
    height: 210px;

    right: -70px;
    top: -100px;

    border-radius: 50%;

    background: rgba(118, 164, 218, 0.12);
  }

  h2,
  p {
    position: relative;
    z-index: 2;
  }

  h2 {
    margin-bottom: 0.8rem;

    color: var(--gray-100);

    font-size: clamp(1.5rem, 3vw, 2.2rem);

    letter-spacing: -0.04em;
  }

  p {
    max-width: 760px;

    color: var(--gray-400);

    font-size: 0.9rem;
    line-height: 1.8;

    word-break: keep-all;
  }

  @media (max-width: 480px) {
    margin-top: 3.5rem;

    padding: 1.8rem 1.35rem;

    border-radius: 20px;

    p {
      font-size: 0.84rem;
    }
  }
`;

const personal = [
  {
    id: 1,

    title: "블록스퀘어랩스",

    role:
      "Frontend Developer · Fullstack · Team Lead",

    type: "development",

    date: "2024-01-15 ~ 재직중",

    content: [
      [
        "백엔드 개발자로 입사한 후 프론트엔드 인력 부족으로 Vue.js를 학습해 프론트엔드 개발 업무를 함께 담당하게 되었습니다.",
        "이후 다양한 가상자산 서비스의 사용자·관리자 페이지 개발을 경험하며 프론트엔드를 주 업무로 담당하고, 필요에 따라 백엔드 개발도 병행했습니다.",
      ],

      [
        "첫 번째 프로젝트에서는 WebView 기반 가상자산 서비스의 알림 페이지 개발을 담당했습니다.",
        "알림 활성화 및 수신 항목 등록 기능을 구현하고, Vue I18n을 활용한 다국어 환경을 적용했습니다.",
        "또한 패키지 구매 권한에 따른 페이지 접근성 조정을 했습니다.",
        "사용자별 페이지 접근 권한과 권한 유효기간을 기준으로 접근 가능 여부를 처리하고, 사용 중인 구독권 및 권한 상태가 화면에 표시되도록 구현했습니다.",
        "권한 상태에 따라 사용할 수 있는 기능을 구분하고 모바일 앱과 웹 환경에서 동일한 정책으로 동작하도록 처리했습니다.",
        "모바일 앱과 웹의 동작 차이를 대응하며 WebView 환경과 Vue.js 기반 서비스 개발 경험을 쌓았습니다.",
      ],

      [
        "두 번째 프로젝트에서는 기존 서비스의 관리자 페이지 개발에 참여했습니다.",
        "프로젝트 초기 환경을 구성하고 로그인 페이지와 API 오류 확인 페이지를 개발했으며, 신입 개발자들과 업무를 나누어 진행했습니다.",
        "이때부터 개발 일정과 진행 상황을 함께 관리하며 프론트엔드 업무 조율 역할을 맡기 시작했습니다.",
      ],

      [
        "세 번째 프로젝트에서는 가상자산 데이터를 시각화하는 차트 및 데이터 리스트 화면을 개발했습니다.",
        "TradingView와 ZingChart를 활용해 총 8개의 차트와 2개의 데이터 리스트를 구현했습니다.",
        "PC와 모바일 환경을 모두 고려한 반응형 UI를 적용하며 데이터 시각화와 차트 라이브러리 활용 경험을 쌓았습니다.",
      ],

      [
        "네 번째 프로젝트에서는 외주 업체에서 개발하던 대규모 Nuxt 프로젝트를 인수하여 기존 코드 분석, 리팩토링 및 신규 기능 개발을 진행했습니다.",
        "Nuxt의 서버·클라이언트 실행 환경과 파일 기반 라우팅 구조를 이해하고, 기존 서비스에 필요한 기능을 안정적으로 추가할 수 있도록 구조를 개선했습니다.",
        "Access Token 만료 시 Refresh Token 을 이용해 토큰을 재발급한 뒤 기존 API 요청을 다시 처리하는 인증 흐름을 적용했습니다.",
        "서비스의 패키지 및 구독 페이지를 개발하고 결제 페이지와 연동했습니다.",
        "사용자 조건에 따라 적용되는 할인 정책을 화면에 표시하고 실제 결제 금액에 반영했으며, 결제 API 연동부터 결제 완료 이후의 상태 처리까지 구현했습니다.",
        "또한 사용자의 구독 패키지, 권한 유효기간 및 권한 상태에 따라 페이지 접근 여부를 판단하고, 접근이 제한된 경우 안내 모달을 노출하는 등 서비스 전반의 권한 및 접근 제어 로직을 개발했습니다.",
        "Docker와 Nginx 기반 배포 환경을 활용해 직접 빌드하고 버전을 관리하며 운영 환경에 대한 이해도를 높였습니다.",
      ],

      [
        "다섯 번째 프로젝트에서는 앞선 Nuxt 서비스의 관리자 페이지 유지보수 및 신규 기능 개발을 담당했습니다.",
        "회원 추천·조직 구조를 관리하는 조직도 기능을 개발하고, 상위 회원 변경 시 하위 회원이 함께 이동하도록 관련 로직을 적용했습니다.",
        "대규모 조직도에서도 원하는 회원을 빠르게 확인할 수 있도록 검색, 선택 노드 강조 및 자동 확대 기능 등을 추가해 관리자 사용성을 개선했습니다.",
      ],

      [
        "여섯 번째 프로젝트에서는 사용자 페이지와 관리자 페이지를 함께 개발하는 신규 서비스의 프론트엔드 초기 구조를 설계했습니다.",
        "라우터와 로그인 상태에 따른 페이지 접근 구조를 구성하고, 버튼·모달 등 반복적으로 사용하는 UI를 공통 컴포넌트로 분리했습니다.",
        "팀원들과 개발 기준과 역할을 정리하며 프로젝트 전반의 코드 재사용성과 유지보수성을 높이는 방향으로 개발했습니다.",
      ],

      [
        "일곱 번째 프로젝트에서는 기존 네번째 서비스를 기반으로 새로운 서비스를 구축하는 복제·컨버팅 작업을 진행했습니다.",
        "기존 Nuxt 프로젝트의 구조와 기능을 분석해 새로운 서비스 정책에 맞게 화면과 로직을 수정하고 신규 기능을 추가했습니다.",
        "기존 서비스의 패키지·결제·권한 시스템을 새로운 서비스 정책에 맞게 변환했습니다.",
        "패키지 페이지와 결제 흐름, 사용자 조건에 따른 할인 정책, 결제 API 처리 및 페이지별 접근 권한 로직을 서비스 정책에 맞게 수정했습니다.",
        "공통으로 사용할 수 있는 기능은 기존 코드를 재사용하면서 권한·결제·UI 등 서비스별로 달라지는 영역을 분리하여 이후 두 서비스를 각각 유지보수할 수 있도록 구성했습니다.",
        "기존 코드를 최대한 재사용하면서 서비스별 기능과 UI 차이를 분리하여 이후 유지보수가 가능하도록 구성했습니다.",
      ],

      [
        "여덟 번째 프로젝트에서는 첫 번째로 개발했던 서비스를 전반적으로 리뉴얼했습니다.",
        "운영 과정에서 확인된 중복 코드와 유지보수가 어려운 구조를 팀원들과 검토하여 리팩토링했습니다.",
        "기존 공통 컴포넌트 구조를 한 단계 더 세분화하고 재사용 범위를 넓혀 유지보수성과 개발 효율을 개선했습니다.",
      ],

      [
        "아홉 번째 프로젝트에서는 자격증 교육 과정의 수강신청 및 결제 서비스를 개발하고 프론트엔드 초기 구조를 설계했습니다.",
        "로그인·회원가입, 수강신청, 결제, 마이페이지 등 서비스 전반의 화면과 API 연동 구조를 구성했습니다.",
        "기존 프로젝트에서 부족했던 코드 작성 기준을 개선하기 위해 코드 컨벤션을 도입하고, Oxfmt 기반 포맷팅 환경을 적용해 코드 품질과 개발 생산성을 높였습니다.",
        "로그인 상태에 따른 라우터 접근 제어를 구성하고 Access Token 만료 시 Refresh Token을 이용해 토큰을 재발급한 뒤 기존 API 요청을 다시 처리하는 인증 흐름을 적용했습니다.",
      ],

      [
        "열 번째 프로젝트에서는 네 번째 프로젝트에서 인수·개발했던 Nuxt 기반 가상자산 서비스를 전면 리뉴얼했습니다.",
        "기존 서비스의 권한 및 결제 시스템을 다시 검토하고 변경된 서비스 정책에 맞춰 전체 로직을 수정했습니다.",
        "사용자 구독 상태와 권한 기한을 기준으로 처리되던 접근 제어 구조를 재정비하고, 패키지 및 결제 시스템의 데이터 흐름과 상태 관리 구조를 변경했습니다.",
        "기존 프로젝트에서 복잡하게 연결되어 있던 권한·결제 관련 로직과 컴포넌트 구조를 리팩토링하여 기능별 책임을 분리하고 이후 정책 변경과 유지보수에 대응하기 쉬운 구조로 개선했습니다.",
      ],

      [
        "프론트엔드 업무와 함께 서비스 운영에 필요한 일부 백엔드 기능도 개발했습니다.",
        "외부 업체에 전달할 DB 데이터를 조회·가공하여 필요한 정보만 구조화하고 암호화해 전송하는 기능을 구현했습니다.",
        "Crontab을 이용해 정해진 시간마다 데이터 전송 작업이 자동 실행되도록 구성하고 실행 결과를 로그로 관리했습니다.",
        "또한 외부 API에서 전달받은 암호화된 사용자 정보를 서버에서 복호화한 뒤 프론트엔드에서 사용할 수 있는 형태로 가공하여 전달하는 API 연동 로직을 개발했습니다.",
      ],
    ],

    front: [
      "Nuxt.js·Vue.js 기반 사용자 및 관리자 페이지 개발",
      "프로젝트 초기 구조 설계 및 로그인·라우터·공통 컴포넌트 구조화",
      "사용자 구독 상태·권한 유효기간에 따른 페이지 및 기능 접근 제어 구현",
      "패키지·구독 페이지 개발 및 결제 페이지·결제 API 연동",
      "사용자 조건에 따른 할인 정책 표기·적용 및 결제 완료 후 상태 처리",
      "권한 상태에 따른 접근 제한·안내 모달 및 서비스별 권한 로직 구현",
      "TradingView·ZingChart를 활용한 가상자산 데이터 시각화",
      "REST API 및 WebSocket 기반 실시간 데이터 연동",
      "PC·모바일·Android WebView 환경을 고려한 반응형 UI 개발",
      "Vue I18n 기반 다국어 지원 및 서비스별 테마 적용",
      "기존·외주 프로젝트 코드 분석, 리팩토링 및 신규 기능 개발",
      "기존 서비스 컨버팅 및 전면 리뉴얼 과정에서 권한·결제 시스템 구조 개선",
      "Docker·Nginx 기반 빌드 및 배포 버전 관리",
      "프로젝트 팀 리더로 업무 분배·일정 관리·지연 이슈 조율 및 자체 QA 진행",
    ],

    back: [
      "DB 데이터를 조회·가공하여 외부 업체에 필요한 데이터 구조로 변환하는 기능 개발",
      "민감한 사용자 정보를 암호화하여 외부 시스템으로 전달하는 데이터 연동 로직 구현",
      "Crontab을 활용한 정기 데이터 전송 작업 자동화 및 실행 로그 관리",
      "외부 API를 통해 수신한 암호화 데이터를 복호화하고 프론트엔드용 데이터로 가공하는 서버 로직 개발",
      "프론트엔드 API 연동 과정에서 필요한 백엔드 기능 수정 및 오류 분석",
    ],
  },

  {
    id: 2,

    title: "씨인스원보험컨설팅 주식회사",

    role: "Insurance Administration",

    content: [
      [
        "해지 환급 업무",
      ],
    ],

    date: "2022.01 ~ 2023.04",
  },

  {
    id: 3,

    title: "내일배움캠프",

    role: "Web Development Bootcamp",

    content: [
      [
        "내일배움캠프에 참여하여 Python과 Django를 중심으로 웹 개발을 학습했습니다.",
        "개인 및 팀 프로젝트를 진행하며 Figma를 활용한 화면 설계부터 ERD 및 API 설계, 백엔드·프론트엔드 개발까지 웹 서비스 개발 과정을 경험했습니다.",
        "최종 프로젝트로 AI 기반 동화 생성 서비스인 야미야기를 개발했으며, 현업 개발자가 참여한 프로젝트 평가에서 1위를 기록했습니다.",
        "프로젝트에서는 소셜 로그인 기능을 중심으로 담당했으며, 당시 사용하던 라이브러리에서 발생한 Google OAuth 오류를 직접 분석하여 별도 로직으로 구현했습니다.",
      ],
    ],

    date: "2023.08 ~ 2023.12",
  },
];

/* =========================================================
   FRAMER MOTION
========================================================= */

const cardVariants: Variants = {
  hidden: {
    opacity: 0,

    y: 50,

    scale: 0.97,
  },

  visible: {
    opacity: 1,

    y: 0,

    scale: 1,

    transition: {
      duration: 0.55,

      ease: "easeOut",
    },
  },
};

const blockVariants: Variants = {
  hidden: {
    opacity: 0,

    y: 25,
  },

  visible: {
    opacity: 1,

    y: 0,

    transition: {
      duration: 0.4,

      ease: "easeOut",
    },
  },
};

const textContainerVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.055,
    },
  },
};

const textVariants: Variants = {
  hidden: {
    opacity: 0,

    y: 8,
  },

  visible: {
    opacity: 1,

    y: 0,

    transition: {
      duration: 0.3,

      ease: "easeOut",
    },
  },
};

const skillListVariants: Variants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const skillItemVariants: Variants = {
  hidden: {
    opacity: 0,

    x: -12,
  },

  visible: {
    opacity: 1,

    x: 0,

    transition: {
      duration: 0.25,

      ease: "easeOut",
    },
  },
};

/* =========================================================
   KAKAO
========================================================= */

const isKakaoInApp =
  typeof navigator !== "undefined" &&
  /KAKAOTALK/i.test(
    navigator.userAgent,
  );

/* =========================================================
   COMPONENT
========================================================= */

export const PersonalHistory = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<SVGSVGElement>(null);
  const overlayPathRefs = useRef<Array<SVGPathElement | null>>([]);
  const introMarkRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;

      const overlay = overlayRef.current;
      const overlayPaths = overlayPathRefs.current.filter(
        (path): path is SVGPathElement => Boolean(path),
      );

      if (reducedMotion) {
        if (overlay) {
          gsap.set(overlay, {
            autoAlpha: 0,
          });
        }

        if (introMarkRef.current) {
          gsap.set(introMarkRef.current, {
            autoAlpha: 0,
          });
        }

        return;
      }

      /* =====================================================
         FIRST LOAD SVG WAVE
      ===================================================== */

      const originalBodyOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      const numPoints = 10;
      const numPaths = overlayPaths.length;
      const delayPointsMax = 0.18;
      const delayPerPath = 0.12;
      const waveDuration = 0.82;

      const allPoints = Array.from(
        {
          length: numPaths,
        },
        () =>
          Array.from(
            {
              length: numPoints,
            },
            () => ({
              value: 100,
            }),
          ),
      );

      const renderOverlay = () => {
        overlayPaths.forEach((path, pathIndex) => {
          const points = allPoints[pathIndex];

          let d = `M 0 ${points[0].value} C`;

          for (let index = 0; index < numPoints - 1; index += 1) {
            const percentage =
              ((index + 1) / (numPoints - 1)) * 100;

            const controlPoint =
              percentage -
              (100 / (numPoints - 1)) / 2;

            d += ` ${controlPoint} ${points[index].value}`;
            d += ` ${controlPoint} ${points[index + 1].value}`;
            d += ` ${percentage} ${points[index + 1].value}`;
          }

          d += " V 0 H 0";

          path.setAttribute("d", d);
        });
      };

      renderOverlay();

      if (overlay) {
        gsap.set(overlay, {
          autoAlpha: 1,
        });
      }

      if (introMarkRef.current) {
        gsap.set(introMarkRef.current, {
          autoAlpha: 1,
          y: 0,
        });
      }

      const pointsDelay = Array.from(
        {
          length: numPoints,
        },
        () => Math.random() * delayPointsMax,
      );

      const overlayTl = gsap.timeline({
        defaults: {
          ease: "power2.inOut",
        },
        onUpdate: renderOverlay,
        onComplete: () => {
          document.body.style.overflow = originalBodyOverflow;

          if (overlay) {
            gsap.set(overlay, {
              autoAlpha: 0,
            });
          }

          ScrollTrigger.refresh();
        },
      });

      if (introMarkRef.current) {
        overlayTl.to(
          introMarkRef.current,
          {
            opacity: 0,
            y: -8,
            duration: 0.28,
            ease: "power2.out",
          },
          0.18,
        );
      }

      allPoints.forEach((points, pathIndex) => {
        const pathDelay = delayPerPath * (numPaths - pathIndex - 1);

        points.forEach((point, pointIndex) => {
          overlayTl.to(
            point,
            {
              value: 0,
              duration: waveDuration,
              ease: "power2.inOut",
            },
            0.28 + pointsDelay[pointIndex] + pathDelay,
          );
        });
      });

      /* =====================================================
         HERO
      ===================================================== */

      const heroTl = gsap.timeline({
        delay: 0.82,
        defaults: {
          ease: "power3.out",
        },
      });

      heroTl
        .from(".career-badge", {
          opacity: 0,
          y: 12,
          duration: 0.45,
        })
        .from(
          ".career-title",
          {
            opacity: 0,
            y: 38,
            duration: 0.75,
          },
          "-=0.12",
        )
        .from(
          ".career-description",
          {
            opacity: 0,
            y: 18,
            duration: 0.55,
          },
          "-=0.38",
        )
        .from(
          ".summary-item",
          {
            opacity: 0,
            y: 18,
            scale: 0.98,
            stagger: 0.07,
            duration: 0.45,
          },
          "-=0.28",
        );

      /* Timeline line */

      gsap.to(".timeline-progress", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".career-timeline",
          start: "top 72%",
          end: "bottom 78%",
          scrub: 1,
        },
      });

      /* section line */

      gsap.from(".section-line", {
        scaleX: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section-line",
          start: "top 92%",
        },
      });

      return () => {
        document.body.style.overflow = originalBodyOverflow;
      };
    },
    {
      scope: pageRef,
    },
  );

  return (
    <Page ref={pageRef}>
      <IntroMark ref={introMarkRef} aria-hidden="true">
        <span />
        CAREER / EXPERIENCE
      </IntroMark>

      <ShapeOverlay
        ref={overlayRef}
        className="shape-overlays"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="careerOverlayBack"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#eef5fb" />
            <stop offset="100%" stopColor="#bebcd8" />
          </linearGradient>

          <linearGradient
            id="careerOverlayFront"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#76a4da" />
            <stop offset="100%" stopColor="#d8e0e6" />
          </linearGradient>
        </defs>

        <path
          ref={(element) => {
            overlayPathRefs.current[0] = element;
          }}
          className="shape-overlays__path"
          fill="url(#careerOverlayBack)"
        />

        <path
          ref={(element) => {
            overlayPathRefs.current[1] = element;
          }}
          className="shape-overlays__path"
          fill="url(#careerOverlayFront)"
        />
      </ShapeOverlay>
      <Inner>
        {/* =================================================
            HERO
        ================================================= */}

        <Hero>
          <HeroBadge className="career-badge">
            Career & Experience
          </HeroBadge>

          <HeroTitle className="career-title">
            서비스와 함께
            <br />
            <strong>
              성장해 온 경험
            </strong>
          </HeroTitle>

          <HeroDescription className="career-description">
            백엔드 개발자로 시작해
            프론트엔드 업무까지 영역을
            확장했습니다.
            현재는 프론트엔드를 중심으로
            서비스 구조와 API,
            운영 환경까지 함께 이해하며
            개발하고 있습니다.
            <strong>
              {" "}
              구현뿐 아니라 일정 조율,
              QA와 팀 협업까지
            </strong>
            경험했습니다.
          </HeroDescription>

          <SummaryGrid>
            <SummaryItem className="summary-item">
              <SummaryLabel>
                EXPERIENCE
              </SummaryLabel>

              <SummaryValue>
                2+ Years
              </SummaryValue>
            </SummaryItem>

            <SummaryItem className="summary-item">
              <SummaryLabel>
                MAIN ROLE
              </SummaryLabel>

              <SummaryValue>
                Frontend
              </SummaryValue>
            </SummaryItem>

            <SummaryItem className="summary-item">
              <SummaryLabel>
                EXPERIENCE
              </SummaryLabel>

              <SummaryValue>
                Fullstack
              </SummaryValue>
            </SummaryItem>

            <SummaryItem className="summary-item">
              <SummaryLabel>
                TEAM
              </SummaryLabel>

              <SummaryValue>
                Lead · QA
              </SummaryValue>
            </SummaryItem>
          </SummaryGrid>
        </Hero>

        {/* =================================================
            KEYWORDS
        ================================================= */}

        <KeywordSection>
          <KeywordTitle>
            KEY EXPERIENCE
          </KeywordTitle>

          <KeywordList>
            <Keyword>
              Vue.js
            </Keyword>

            <Keyword>
              Nuxt.js
            </Keyword>

            <Keyword>
              React
            </Keyword>

            <Keyword>
              TypeScript
            </Keyword>

            <Keyword>
              REST API
            </Keyword>

            <Keyword>
              WebSocket
            </Keyword>

            <Keyword>
              TradingView
            </Keyword>

            <Keyword>
              ZingChart
            </Keyword>

            <Keyword>
              Android WebView
            </Keyword>

            <Keyword>
              결제 / 구독
            </Keyword>

            <Keyword>
              권한 관리
            </Keyword>

            <Keyword>
              Docker
            </Keyword>

            <Keyword>
              Nginx
            </Keyword>

            <Keyword>
              Team Lead
            </Keyword>

            <Keyword>
              QA
            </Keyword>
          </KeywordList>
        </KeywordSection>

        {/* =================================================
            CAREER
        ================================================= */}

        <CareerArea>
          <SectionLine className="section-line" />

          <SectionHeader>
            <SectionHeaderLeft>
              <SectionLabel>
                01 / CAREER
              </SectionLabel>

              <SectionTitle>
                경력 및 경험
              </SectionTitle>
            </SectionHeaderLeft>

            <SectionDescription>
              회사와 프로젝트에서
              담당했던 역할을 단순 기술 목록이
              아니라 실제로 어떤 문제를 다뤘는지
              중심으로 정리했습니다.
            </SectionDescription>
          </SectionHeader>

          <Timeline className="career-timeline">
            <TimelineBackground />

            <TimelineProgress className="timeline-progress" />

            {personal.map(
              (pers, index) => {
                const isCurrent =
                  pers.date.includes(
                    "재직중",
                  );

                return (
                  <HistoryCard
                    key={pers.id}

                    className="career-card"

                    variants={
                      cardVariants
                    }

                    initial="hidden"

                    animate={
                      isKakaoInApp
                        ? "visible"
                        : undefined
                    }

                    whileInView={
                      !isKakaoInApp
                        ? "visible"
                        : undefined
                    }

                    viewport={{
                      once: true,

                      amount: 0.08,
                    }}
                  >
                    {/* =============================
                        HEADER
                    ============================= */}

                    <CardHeader>
                      <CardTitleArea>
                        <CardIndex>
                          EXPERIENCE_
                          {String(
                            index + 1,
                          ).padStart(
                            2,
                            "0",
                          )}
                        </CardIndex>

                        <CompanyTitle>
                          {
                            pers.title
                          }
                        </CompanyTitle>

                        <RoleText>
                          {
                            pers.role
                          }
                        </RoleText>
                      </CardTitleArea>

                      <DateArea>
                        <DateText>
                          {
                            pers.date
                          }
                        </DateText>

                        {isCurrent && (
                          <CurrentBadge>
                            CURRENT
                          </CurrentBadge>
                        )}
                      </DateArea>
                    </CardHeader>

                    {/* =============================
                        PROJECT / EXPERIENCE
                    ============================= */}

                    {pers.content && (
                      <ContentWrap>
                        {pers.content.map(
                          (
                            content,
                            idx,
                          ) => (
                            <ProjectBlock
                              key={idx}

                              variants={
                                blockVariants
                              }

                              initial="hidden"

                              whileInView="visible"

                              viewport={{
                                once: true,

                                amount:
                                  0.15,
                              }}
                            >
                              <ProjectLabel>
                                {pers.id ===
                                1
                                  ? idx ===
                                    0
                                    ? "ROLE / START"
                                    : idx ===
                                        pers
                                          .content
                                          .length -
                                          1
                                      ? "BACKEND EXPERIENCE"
                                      : `PROJECT ${String(
                                          idx,
                                        ).padStart(
                                          2,
                                          "0",
                                        )}`
                                  : `EXPERIENCE ${String(
                                      idx +
                                        1,
                                    ).padStart(
                                      2,
                                      "0",
                                    )}`}
                              </ProjectLabel>

                              <ProjectTextWrap
                                as={
                                  motion.div
                                }

                                variants={
                                  textContainerVariants
                                }

                                initial="hidden"

                                whileInView="visible"

                                viewport={{
                                  once: true,

                                  amount:
                                    0.2,
                                }}
                              >
                                {content.map(
                                  (
                                    cont,
                                    i,
                                  ) => (
                                    <ProjectText
                                      key={`${idx}-${i}`}

                                      variants={
                                        textVariants
                                      }
                                    >
                                      {
                                        cont
                                      }
                                    </ProjectText>
                                  ),
                                )}
                              </ProjectTextWrap>
                            </ProjectBlock>
                          ),
                        )}
                      </ContentWrap>
                    )}

                    {/* =============================
                        FRONT / BACK
                    ============================= */}

                    {(pers.front ||
                      pers.back) && (
                      <SkillArea>
                        {pers.front && (
                          <SkillSection
                            initial={{
                              opacity: 0,

                              y: 25,
                            }}

                            whileInView={{
                              opacity: 1,

                              y: 0,
                            }}

                            viewport={{
                              once: true,

                              amount:
                                0.1,
                            }}

                            transition={{
                              duration:
                                0.45,
                            }}
                          >
                            <SkillHeader>
                              <SkillTitle>
                                Front-end
                              </SkillTitle>

                              <SkillCount>
                                {
                                  pers
                                    .front
                                    .length
                                }{" "}
                                ITEMS
                              </SkillCount>
                            </SkillHeader>

                            <SkillList
                              variants={
                                skillListVariants
                              }

                              initial="hidden"

                              whileInView="visible"

                              viewport={{
                                once: true,

                                amount:
                                  0.1,
                              }}
                            >
                              {pers.front.map(
                                (
                                  front,
                                  idx,
                                ) => (
                                  <SkillItem
                                    key={
                                      idx
                                    }

                                    variants={
                                      skillItemVariants
                                    }

                                    whileHover={{
                                      x: 5,
                                    }}
                                  >
                                    {
                                      front
                                    }
                                  </SkillItem>
                                ),
                              )}
                            </SkillList>
                          </SkillSection>
                        )}

                        {pers.back && (
                          <SkillSection
                            initial={{
                              opacity: 0,

                              y: 25,
                            }}

                            whileInView={{
                              opacity: 1,

                              y: 0,
                            }}

                            viewport={{
                              once: true,

                              amount:
                                0.1,
                            }}

                            transition={{
                              duration:
                                0.45,

                              delay:
                                0.08,
                            }}
                          >
                            <SkillHeader>
                              <SkillTitle>
                                Back-end
                              </SkillTitle>

                              <SkillCount>
                                {
                                  pers
                                    .back
                                    .length
                                }{" "}
                                ITEMS
                              </SkillCount>
                            </SkillHeader>

                            <SkillList
                              variants={
                                skillListVariants
                              }

                              initial="hidden"

                              whileInView="visible"

                              viewport={{
                                once: true,

                                amount:
                                  0.1,
                              }}
                            >
                              {pers.back.map(
                                (
                                  back,
                                  idx,
                                ) => (
                                  <SkillItem
                                    key={
                                      idx
                                    }

                                    variants={
                                      skillItemVariants
                                    }

                                    whileHover={{
                                      x: 5,
                                    }}
                                  >
                                    {
                                      back
                                    }
                                  </SkillItem>
                                ),
                              )}
                            </SkillList>
                          </SkillSection>
                        )}
                      </SkillArea>
                    )}
                  </HistoryCard>
                );
              },
            )}
          </Timeline>
        </CareerArea>

        {/* =================================================
            BOTTOM
        ================================================= */}

        <BottomMessage>
          <h2>
            개발 영역을 하나로 한정하지 않습니다.
          </h2>

          <p>
            프론트엔드를 주 업무로 하고 있지만,
            화면 뒤에서 데이터가 어떻게 전달되고
            서비스 정책과 사용자 상태가 어떻게
            연결되는지까지 이해하며 개발하는 것을
            중요하게 생각합니다.
            새로운 프로젝트에서도 필요한 영역을
            빠르게 학습하고 실제 결과물로 연결하는
            개발자가 되고자 합니다.
          </p>
        </BottomMessage>
      </Inner>
    </Page>
  );
};