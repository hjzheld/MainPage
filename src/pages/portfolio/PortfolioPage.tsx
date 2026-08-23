import styled from "styled-components";

import {
  AnimatePresence,
  motion,
} from "framer-motion";

import {
  useRef,
  useState,
} from "react";

import {
  useNavigate,
} from "react-router-dom";

import gsap from "gsap";

import {
  useGSAP,
} from "@gsap/react";

import Container from "@/components/common/Container";

import {
  Title,
} from "@/components/common/Title";

import Card from "@/components/detail/Card";

import Btn from "@/components/common/Btn";

import projects from "@/data/project";

import categories from "@/data/categry";

import useProjectNavigation from "@/hooks/useProjectNavigation";

import type {
  SubCategory,
} from "@/types/category";

gsap.registerPlugin(
  useGSAP,
);

/* =========================================================
   PAGE
========================================================= */

const Page = styled.div`
  position: relative;

  width: 100%;

  overflow-x: hidden;
`;

/* =========================================================
   ACTUAL PAGE CONTENT
========================================================= */

const ProjectContent =
  styled.div`
    position: relative;

    width: 100%;

    /*
     * 프로젝트 화면이
     * transition보다 먼저 보이는 것 방지
     */
    visibility: hidden;

    clip-path:
      circle(
        0%
        at
        50%
        50%
      );

    will-change:
      clip-path;
  `;

const PageIntro =
  styled.div`
    width: 100%;
  `;

/* =========================================================
   PAGE TRANSITION
========================================================= */

const PageTransition =
  styled.div`
    position: fixed;

    inset: 0;

    z-index: 5000;

    overflow: hidden;

    pointer-events: none;
  `;

/* =========================================================
   TRANSITION PANEL
========================================================= */

const TransitionPanel =
  styled.div`
    position: absolute;

    inset: 0;

    width: 100%;
    height: 100%;

    will-change:
      transform;
  `;

const BluePanel = styled(
  TransitionPanel,
)`
  z-index: 1;

  background:
    var(
      --project-transition-blue
    );
`;

const LavenderPanel = styled(
  TransitionPanel,
)`
  z-index: 2;

  background:
    var(
      --project-transition-lavender
    );
`;

const MistPanel = styled(
  TransitionPanel,
)`
  z-index: 3;

  background:
    var(
      --project-transition-mist
    );
`;

/* =========================================================
   TRANSITION DECORATION
========================================================= */

const TransitionDecoration =
  styled.div`
    position: absolute;

    inset: 0;

    z-index: 4;

    pointer-events: none;
  `;

const TransitionCircle =
  styled.div`
    position: absolute;

    left: 50%;
    top: 50%;

    width: min(
      44vw,
      520px
    );

    aspect-ratio: 1;

    transform:
      translate(
        -50%,
        -50%
      );

    border:
      1px solid
      var(
        --project-transition-line
      );

    border-radius: 50%;

    opacity: 0.75;

    box-shadow:
      0
      20px
      60px
      var(
        --project-transition-shadow
      );

    &::before {
      content: "";

      position: absolute;

      inset: 12%;

      border:
        1px solid
        var(
          --project-transition-line
        );

      border-radius:
        inherit;

      opacity: 0.7;
    }

    &::after {
      content: "";

      position: absolute;

      inset: 27%;

      border:
        1px solid
        var(
          --project-transition-line
        );

      border-radius:
        inherit;

      opacity: 0.5;
    }

    @media (
      max-width:
      768px
    ) {
      width: 72vw;
    }

    @media (
      max-width:
      480px
    ) {
      width: 86vw;
    }
  `;

/* =========================================================
   TRANSITION TEXT
========================================================= */

const TransitionContent =
  styled.div`
    position: absolute;

    left: 50%;
    top: 50%;

    z-index: 5;

    transform:
      translate(
        -50%,
        -50%
      );

    display: flex;

    flex-direction: column;

    align-items:
      center;

    text-align:
      center;

    pointer-events:
      none;
  `;

const TransitionLabel =
  styled.span`
    margin-bottom:
      0.75rem;

    color:
      var(
        --project-transition-text
      );

    font-family:
      var(--font-en);

    font-size:
      0.67rem;

    font-weight:
      500;

    letter-spacing:
      0.2em;
  `;

const TransitionTitle =
  styled.strong`
    color:
      var(--gray-100);

    font-family:
      var(--font-en);

    font-size:
      clamp(
        2.8rem,
        7vw,
        6rem
      );

    font-weight:
      600;

    line-height:
      0.95;

    letter-spacing:
      -0.06em;

    white-space:
      nowrap;

    @media (
      max-width:
      480px
    ) {
      font-size:
        clamp(
          2.3rem,
          15vw,
          4rem
        );
    }
  `;

const TransitionLine =
  styled.div`
    width: 52px;
    height: 1px;

    margin-top:
      1.2rem;

    background:
      var(
        --primary-color
      );

    transform-origin:
      center;
  `;

/* =========================================================
   CATEGORY
========================================================= */

const Category =
  styled.div`
    width: 100%;

    max-width: 800px;

    margin: 0 auto;

    padding:
      2rem
      2rem
      1rem;

    min-height: 50px;

    display: flex;

    justify-content:
      center;

    align-items:
      center;

    gap: 2rem;

    flex-wrap:
      wrap;

    @media (
      max-width:
      1200px
    ) {
      padding:
        1.75rem
        1.5rem
        0.75rem;

      gap: 1.5rem;
    }

    @media (
      max-width:
      768px
    ) {
      padding:
        1.5rem
        1rem
        0.5rem;

      gap: 1rem;
    }

    @media (
      max-width:
      480px
    ) {
      padding:
        1rem
        0.5rem
        0.5rem;

      gap:
        0.75rem;
    }

    @media (
      max-width:
      360px
    ) {
      padding:
        0.75rem
        0.25rem
        0.5rem;

      gap:
        0.5rem;
    }
  `;

/* =========================================================
   SUB CATEGORY
========================================================= */

const SubCategoryWrapper =
  styled(motion.div)`
    min-height: 30px;

    margin-top:
      1.5rem;

    margin-bottom:
      1rem;

    padding:
      0
      2rem;

    display: flex;

    justify-content:
      center;

    align-items:
      center;

    flex-wrap:
      wrap;

    gap: 1rem;

    @media (
      max-width:
      1200px
    ) {
      padding:
        0
        1.5rem;

      gap:
        0.875rem;
    }

    @media (
      max-width:
      768px
    ) {
      padding:
        0
        1rem;

      gap:
        0.75rem;

      margin-top:
        1rem;

      margin-bottom:
        0.75rem;
    }

    @media (
      max-width:
      480px
    ) {
      padding:
        0
        0.5rem;

      gap:
        0.5rem;

      margin-top:
        0.75rem;

      margin-bottom:
        0.5rem;
    }

    @media (
      max-width:
      360px
    ) {
      padding:
        0
        0.25rem;

      gap:
        0.375rem;
    }
  `;

/* =========================================================
   CARD CONTAINER
========================================================= */

const CardContainer =
  styled.div`
    width: 100%;

    max-width: 1200px;

    margin: 0 auto;

    padding:
      2rem
      1.5rem;

    display: grid;

    grid-template-columns:
      repeat(
        auto-fill,
        minmax(
          300px,
          1fr
        )
      );

    gap: 2rem;

    align-items:
      stretch;

    @media (
      max-width:
      1200px
    ) {
      grid-template-columns:
        repeat(
          auto-fill,
          minmax(
            280px,
            1fr
          )
        );

      gap:
        1.5rem;

      padding:
        1.5rem
        1.25rem;
    }

    @media (
      max-width:
      992px
    ) {
      grid-template-columns:
        repeat(
          auto-fill,
          minmax(
            260px,
            1fr
          )
        );

      gap:
        1.25rem;

      padding:
        1.25rem
        1rem;
    }

    @media (
      max-width:
      768px
    ) {
      grid-template-columns:
        repeat(
          auto-fill,
          minmax(
            240px,
            1fr
          )
        );

      gap: 1rem;

      padding:
        1rem;
    }

    @media (
      max-width:
      640px
    ) {
      grid-template-columns:
        1fr;

      gap: 1rem;

      padding:
        1rem;
    }

    @media (
      max-width:
      480px
    ) {
      gap:
        0.875rem;

      padding:
        0.75rem;
    }

    @media (
      max-width:
      360px
    ) {
      gap:
        0.75rem;

      padding:
        0.5rem;
    }
  `;

/* =========================================================
   CARD

   OUTER
   = Framer Motion
     layout / exit / hover

   INNER
   = GSAP
     enter animation
========================================================= */

const CardLayoutWrapper =
  styled(motion.div)`
    display: flex;

    height: 100%;
  `;

const CardGsapItem =
  styled.div`
    display: flex;

    width: 100%;
    height: 100%;

    transform-origin:
      50%
      100%;

    will-change:
      transform,
      opacity;
  `;

/* =========================================================
   COMPONENT
========================================================= */

const PortfolioPage =
  () => {
    const navigate =
      useNavigate();

    const pageRef =
      useRef<HTMLDivElement>(
        null,
      );

    /* =====================================================
       PROJECT NAVIGATION HOOK
    ===================================================== */

    const {
      markProjectDetailOpen,

      isReturningFromProjectDetail,

      clearProjectReturn,
    } =
      useProjectNavigation();

    /*
     * 렌더 순간의 값을 고정.
     *
     * React StrictMode에서
     * GSAP effect가 다시 실행돼도
     * 뒤로가기 판정이 변경되지 않음.
     */
    const shouldSkipIntroRef =
      useRef(
        isReturningFromProjectDetail,
      );

    /* =====================================================
       INTRO 완료
    ===================================================== */

    const introDoneRef =
      useRef(false);

    /* =====================================================
       FILTER

       실제 사용자가 필터를 클릭했을 때만
       GSAP filter animation을 실행하기 위한 값.

       이렇게 하면 뒤로가기 직후
       StrictMode 때문에 필터 animation이
       갑자기 실행되는 문제도 방지.
    ===================================================== */

    const filterInteractionRef =
      useRef(false);

    const [
      selectedTab,
      setTab,
    ] =
      useState<
        | "all"
        | "front"
        | "back"
      >("all");

    const [
      selectedSub,
      setSub,
    ] =
      useState<
        string | null
      >(null);

    /* =====================================================
       PAGE INTRO GSAP
    ===================================================== */

    useGSAP(
      () => {
        const content =
          pageRef.current
            ?.querySelector<HTMLElement>(
              ".project-content",
            );

        const overlay =
          pageRef.current
            ?.querySelector<HTMLElement>(
              ".project-transition",
            );

        if (
          !content ||
          !overlay
        ) {
          return;
        }

        const reducedMotion =
          window.matchMedia(
            "(prefers-reduced-motion: reduce)",
          ).matches;

        const skipIntro =
          shouldSkipIntroRef.current;

        /* =================================================
           상세 → 뒤로가기
        ================================================= */

        if (
          skipIntro ||
          reducedMotion
        ) {
          /*
           * 다음 프로젝트 방문에는
           * 영향을 주지 않도록 초기화.
           *
           * shouldSkipIntroRef는 이미 true로
           * 고정되어 있으므로 StrictMode에서
           * effect가 다시 돌아도 안전.
           */
          if (
            skipIntro
          ) {
            clearProjectReturn();
          }

          /* ===============================
             PAGE TRANSITION 제거
          =============================== */

          gsap.set(
            overlay,
            {
              display:
                "none",
            },
          );

          /* ===============================
             실제 페이지 즉시 표시
          =============================== */

          gsap.set(
            content,
            {
              visibility:
                "visible",

              clipPath:
                "none",

              zIndex:
                "auto",
            },
          );

          /* ===============================
             혹시 남은 inline animation 제거
          =============================== */

          gsap.set(
            [
              ".project-page-intro",
              ".project-category",
              ".project-card",
            ],
            {
              clearProps:
                "opacity,transform",
            },
          );

          introDoneRef.current =
            true;

          return;
        }

        /* =================================================
           NORMAL PAGE ENTER
        ================================================= */

        introDoneRef.current =
          false;

        /* =================================================
           ACTUAL CONTENT INITIAL
        ================================================= */

        gsap.set(
          content,
          {
            visibility:
              "hidden",

            clipPath:
              "circle(0% at 50% 50%)",

            zIndex:
              "auto",
          },
        );

        /* ===============================
           PAGE TITLE
        =============================== */

        gsap.set(
          ".project-page-intro",
          {
            opacity:
              0,

            y:
              22,
          },
        );

        /* ===============================
           CATEGORY
        =============================== */

        gsap.set(
          ".project-category",
          {
            opacity:
              0,

            y:
              16,
          },
        );

        /* ===============================
           CARD INITIAL

           홀수 / 짝수마다
           회전 방향 변경
        =============================== */

        gsap.set(
          ".project-card",
          {
            opacity:
              0,

            y:
              58,

            scale:
              0.94,

            rotation: (
              index: number,
            ) =>
              index %
                  2 ===
                0
                ? -3.2
                : 3.2,

            transformOrigin:
              "50% 100%",
          },
        );

        /* =================================================
           PAGE TRANSITION INITIAL
        ================================================= */

        gsap.set(
          overlay,
          {
            display:
              "block",

            visibility:
              "visible",

            opacity:
              1,
          },
        );

        gsap.set(
          ".transition-blue",
          {
            xPercent:
              0,
          },
        );

        gsap.set(
          ".transition-lavender",
          {
            xPercent:
              0,
          },
        );

        gsap.set(
          ".transition-mist",
          {
            xPercent:
              0,
          },
        );

        gsap.set(
          ".transition-circle",
          {
            opacity:
              1,

            scale:
              1,
          },
        );

        gsap.set(
          ".transition-content",
          {
            opacity:
              1,

            scale:
              1,
          },
        );

        /* =================================================
           TIMELINE
        ================================================= */

        const tl =
          gsap.timeline({
            defaults: {
              overwrite:
                "auto",
            },
          });

        /* =================================================
           CIRCLE
        ================================================= */

        tl.from(
          ".transition-circle",
          {
            opacity:
              0,

            scale:
              0.8,

            duration:
              0.65,

            ease:
              "power3.out",
          },
        );

        /* =================================================
           LABEL
        ================================================= */

        tl.from(
          ".transition-label",
          {
            opacity:
              0,

            y:
              8,

            duration:
              0.3,

            ease:
              "power2.out",
          },

          "-=0.38",
        );

        /* =================================================
           PROJECTS
        ================================================= */

        tl.from(
          ".transition-title",
          {
            opacity:
              0,

            y:
              20,

            scale:
              0.96,

            duration:
              0.55,

            ease:
              "power3.out",
          },

          "-=0.25",
        );

        /* =================================================
           LINE
        ================================================= */

        tl.from(
          ".transition-line",
          {
            scaleX:
              0,

            duration:
              0.38,

            ease:
              "power2.out",
          },

          "-=0.25",
        );

        /* =================================================
           PANEL 1
        ================================================= */

        tl.to(
          ".transition-mist",
          {
            xPercent:
              100,

            duration:
              0.58,

            ease:
              "power3.inOut",
          },

          "+=0.08",
        );

        /* =================================================
           PANEL 2
        ================================================= */

        tl.to(
          ".transition-lavender",
          {
            xPercent:
              -100,

            duration:
              0.62,

            ease:
              "power3.inOut",
          },

          "-=0.34",
        );

        /* =================================================
           PANEL 3
        ================================================= */

        tl.to(
          ".transition-blue",
          {
            xPercent:
              100,

            duration:
              0.68,

            ease:
              "power4.inOut",
          },

          "-=0.35",
        );

        /* =================================================
           TEXT OUT
        ================================================= */

        tl.to(
          ".transition-content",
          {
            opacity:
              0,

            scale:
              0.95,

            duration:
              0.3,

            ease:
              "power2.in",
          },

          "-=0.42",
        );

        tl.to(
          ".transition-circle",
          {
            opacity:
              0,

            scale:
              1.15,

            duration:
              0.35,

            ease:
              "power2.in",
          },

          "<",
        );

        /* =================================================
           ACTUAL PAGE 준비
        ================================================= */

        tl.set(
          content,
          {
            visibility:
              "visible",

            zIndex:
              5001,
          },
        );

        /* =================================================
           CIRCLE PAGE REVEAL
        ================================================= */

        tl.to(
          content,
          {
            clipPath:
              "circle(150% at 50% 50%)",

            duration:
              1.05,

            ease:
              "power4.inOut",
          },
        );

        /* =================================================
           TRANSITION 제거
        ================================================= */

        tl.set(
          overlay,
          {
            visibility:
              "hidden",
          },
        );

        tl.set(
          content,
          {
            clipPath:
              "none",

            zIndex:
              "auto",

            visibility:
              "visible",
          },
        );

        /* =================================================
           PROJECT TITLE
        ================================================= */

        tl.to(
          ".project-page-intro",
          {
            opacity:
              1,

            y:
              0,

            duration:
              0.48,

            ease:
              "power3.out",

            clearProps:
              "transform,opacity",
          },
        );

        /* =================================================
           CATEGORY
        ================================================= */

        tl.to(
          ".project-category",
          {
            opacity:
              1,

            y:
              0,

            duration:
              0.4,

            ease:
              "power2.out",

            clearProps:
              "transform,opacity",
          },

          "-=0.25",
        );

        /* =================================================
           PROJECT CARD

           Rotation
           +
           Back Ease
        ================================================= */

        tl.to(
          ".project-card",
          {
            opacity:
              1,

            y:
              0,

            scale:
              1,

            rotation:
              0,

            duration:
              0.72,

            stagger: {
              each:
                0.075,

              from:
                "start",
            },

            ease:
              "back.out(1.55)",

            clearProps:
              "transform,opacity",
          },

          "-=0.12",
        );

        /* =================================================
           DONE
        ================================================= */

        tl.call(
          () => {
            introDoneRef.current =
              true;
          },
        );

        return () => {
          tl.kill();
        };
      },

      {
        scope:
          pageRef,
      },
    );

    /* =====================================================
       FILTER CHANGE GSAP

       반드시 사용자가 필터를 클릭했을 때만 실행.

       그래서:
       - 최초 페이지 로드 X
       - 뒤로가기 X
       - StrictMode 재실행 X
    ===================================================== */

    useGSAP(
      () => {
        if (
          !introDoneRef.current
        ) {
          return;
        }

        /*
         * 실제 필터 클릭이 아니라면
         * 실행하지 않음.
         */
        if (
          !filterInteractionRef.current
        ) {
          return;
        }

        /*
         * 한 번 소비
         */
        filterInteractionRef.current =
          false;

        const cards =
          gsap.utils
            .toArray<HTMLElement>(
              ".project-card",
            );

        if (
          !cards.length
        ) {
          return;
        }

        gsap.killTweensOf(
          cards,
        );

        /* =================================================
           FILTER 카드 등장

           최초 진입보다는
           조금 약한 효과
        ================================================= */

        gsap.fromTo(
          cards,

          {
            opacity:
              0,

            y:
              32,

            scale:
              0.965,

            rotation: (
              index: number,
            ) =>
              index %
                  2 ===
                0
                ? -2.2
                : 2.2,

            transformOrigin:
              "50% 100%",
          },

          {
            opacity:
              1,

            y:
              0,

            scale:
              1,

            rotation:
              0,

            duration:
              0.56,

            stagger: {
              each:
                0.055,

              from:
                "start",
            },

            ease:
              "back.out(1.4)",

            clearProps:
              "transform,opacity",

            overwrite:
              "auto",
          },
        );
      },

      {
        scope:
          pageRef,

        dependencies: [
          selectedTab,
          selectedSub,
        ],
      },
    );

    /* =====================================================
       PROJECT FILTER
    ===================================================== */

    const filteredList = [
      ...projects,
    ]
      .sort(
        (
          a,
          b,
        ) =>
          b.id -
          a.id,
      )
      .filter(
        (
          project,
        ) => {
          /* =========================
             ALL
          ========================= */

          if (
            selectedTab ===
            "all"
          ) {
            return true;
          }

          /* =========================
             FRONT / BACK
          ========================= */

          if (
            selectedTab !==
            project.mainTab
          ) {
            return false;
          }

          /* =========================
             SUB CATEGORY
          ========================= */

          if (
            selectedSub &&
            selectedSub !==
              project.subTab
          ) {
            return false;
          }

          return true;
        },
      );

    const selectedCategory =
      categories.find(
        (
          category,
        ) =>
          category.type ===
          selectedTab,
      );

    /* =====================================================
       RENDER
    ===================================================== */

    return (
      <Page
        ref={pageRef}
      >
        {/* =================================================
            PAGE TRANSITION
        ================================================= */}

        <PageTransition className="project-transition">
          {/* BASE */}

          <BluePanel className="transition-blue" />

          {/* MIDDLE */}

          <LavenderPanel className="transition-lavender" />

          {/* FRONT */}

          <MistPanel className="transition-mist" />

          {/* CIRCLE */}

          <TransitionDecoration>
            <TransitionCircle className="transition-circle" />
          </TransitionDecoration>

          {/* TEXT */}

          <TransitionContent className="transition-content">
            <TransitionLabel className="transition-label">
              02 / PROJECT
            </TransitionLabel>

            <TransitionTitle className="transition-title">
              PROJECTS
            </TransitionTitle>

            <TransitionLine className="transition-line" />
          </TransitionContent>
        </PageTransition>

        {/* =================================================
            ACTUAL PROJECT PAGE
        ================================================= */}

        <ProjectContent className="project-content">
          <Container>
            {/* =============================================
                TITLE
            ============================================= */}

            <PageIntro className="project-page-intro">
              <Title
                page="main"
                title="포트폴리오"
              />
            </PageIntro>

            {/* =============================================
                MAIN CATEGORY
            ============================================= */}

            <Category className="project-category">
              {categories.map(
                (
                  tab,
                ) => (
                  <motion.div
                    key={
                      tab.type
                    }

                    whileHover={{
                      scale:
                        1.06,

                      y:
                        -3,
                    }}

                    whileTap={{
                      scale:
                        0.95,
                    }}

                    transition={{
                      type:
                        "spring",

                      stiffness:
                        300,

                      damping:
                        18,
                    }}
                  >
                    <Btn.CategoryBtn
                      tab={
                        tab
                      }

                      active={
                        selectedTab ===
                        tab.type
                      }

                      onClick={() => {
                        /*
                         * ★ 사용자가 직접 필터 클릭함
                         */
                        filterInteractionRef.current =
                          true;

                        setTab(
                          tab.type as
                            | "all"
                            | "front"
                            | "back",
                        );

                        setSub(
                          null,
                        );
                      }}
                    />
                  </motion.div>
                ),
              )}
            </Category>

            {/* =============================================
                SUB CATEGORY
            ============================================= */}

            <AnimatePresence mode="wait">
              {selectedCategory?.subTitle && (
                <SubCategoryWrapper
                  key={
                    selectedCategory.type
                  }

                  initial={{
                    opacity:
                      0,

                    scale:
                      0.95,

                    y:
                      -8,
                  }}

                  animate={{
                    opacity:
                      1,

                    scale:
                      1,

                    y:
                      0,
                  }}

                  exit={{
                    opacity:
                      0,

                    scale:
                      0.95,

                    y:
                      -8,
                  }}

                  transition={{
                    duration:
                      0.25,

                    ease:
                      "easeOut",
                  }}
                >
                  <Btn.SubCategory
                    tab={
                      selectedCategory
                    }

                    active={
                      true
                    }

                    selectedSub={
                      selectedSub ??
                      undefined
                    }

                    onClick={(
                      subTitle?: SubCategory,
                    ) => {
                      if (
                        !subTitle
                      ) {
                        return;
                      }

                      /*
                       * ★ 사용자가 직접
                       * SubCategory 클릭
                       */
                      filterInteractionRef.current =
                        true;

                      setSub(
                        subTitle.type,
                      );
                    }}
                  />
                </SubCategoryWrapper>
              )}
            </AnimatePresence>

            {/* =============================================
                PROJECT CARD LIST
            ============================================= */}

            <CardContainer>
              <AnimatePresence mode="popLayout">
                {filteredList.map(
                  (
                    project,
                  ) => (
                    <CardLayoutWrapper
                      key={
                        project.id
                      }

                      /* ===============================
                         FRAMER
                         카드 재배치
                      =============================== */

                      layout

                      /*
                       * 최초 진입은
                       * GSAP이 담당
                       */
                      initial={
                        false
                      }

                      /* ===============================
                         FILTER EXIT
                      =============================== */

                      exit={{
                        opacity:
                          0,

                        scale:
                          0.94,

                        y:
                          18,
                      }}

                      transition={{
                        layout: {
                          type:
                            "spring",

                          stiffness:
                            280,

                          damping:
                            26,
                        },

                        opacity: {
                          duration:
                            0.2,
                        },

                        scale: {
                          duration:
                            0.22,
                        },
                      }}

                      /* ===============================
                         HOVER
                      =============================== */

                      whileHover={{
                        y:
                          -7,

                        scale:
                          1.015,
                      }}

                      whileTap={{
                        scale:
                          0.98,
                      }}
                    >
                      {/* =================================
                          INNER GSAP
                      ================================= */}

                      <CardGsapItem className="project-card">
                        <Card
                          project={
                            project
                          }

                          onClick={() => {
                            /*
                             * 프로젝트 상세 데이터는
                             * 기존 방식 그대로 유지
                             */
                            localStorage.setItem(
                              "project",

                              JSON.stringify(
                                project,
                              ),
                            );

                            /*
                             * ★ 현재 Portfolio history key
                             * 기억
                             *
                             * sessionStorage 사용 X
                             */
                            markProjectDetailOpen();

                            navigate(
                              `/project/${project.id}`,
                            );
                          }}
                        />
                      </CardGsapItem>
                    </CardLayoutWrapper>
                  ),
                )}
              </AnimatePresence>
            </CardContainer>
          </Container>
        </ProjectContent>
      </Page>
    );
  };

export default PortfolioPage;