import styled from "styled-components";
import {
  useLocation,
  useNavigate,
} from "react-router-dom";
import {
  useRef,
  useState,
} from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

/* =========================================================
   WRAPPER
========================================================= */

const FloatingWrap = styled.div`
  position: fixed;

  right: 2rem;
  bottom: 2rem;

  z-index: 1200;

  width: 60px;
  height: 60px;

  @media (max-width: 768px) {
    right: 1.25rem;

    bottom: calc(
      1.25rem +
      env(safe-area-inset-bottom)
    );

    width: 56px;
    height: 56px;
  }

  @media (max-width: 480px) {
    right: 1rem;

    bottom: calc(
      1rem +
      env(safe-area-inset-bottom)
    );
  }
`;

/* =========================================================
   RADIAL ITEM
========================================================= */

const RadialItem = styled.button<{
  $active: boolean;
}>`
  position: absolute;

  left: 5px;
  top: 5px;

  width: 50px;
  height: 50px;

  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid
    ${({ $active }) =>
      $active
        ? "rgba(118, 164, 218, .65)"
        : "rgba(255, 255, 255, .7)"};

  border-radius: 50%;

  background: ${({ $active }) =>
    $active
      ? `
        linear-gradient(
          145deg,
          var(--primary-color),
          #8eb5e1
        )
      `
      : `
        rgba(
          241,
          248,
          255,
          .92
        )
      `};

  color: ${({ $active }) =>
    $active
      ? "var(--white-100)"
      : "var(--gray-400)"};

  box-shadow: ${({ $active }) =>
    $active
      ? `
        0 8px 22px
        rgba(
          118,
          164,
          218,
          .32
        )
      `
      : `
        0 8px 24px
        rgba(
          118,
          164,
          218,
          .16
        ),
        0 2px 5px
        rgba(
          99,
          99,
          99,
          .05
        )
      `};

  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  cursor: pointer;

  opacity: 0;

  transform: scale(0);

  will-change:
    transform,
    opacity;

  transition:
    background 0.25s ease,
    color 0.25s ease,
    border 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    color: var(--white-100);

    background:
      var(--primary-color);

    border-color:
      var(--primary-color);

    box-shadow:
      0 10px 27px
      rgba(
        118,
        164,
        218,
        .34
      );
  }

  &:focus-visible {
    outline:
      2px solid
      var(--primary-color);

    outline-offset: 4px;
  }

  svg {
    width: 20px;
    height: 20px;

    fill: none;

    stroke:
      currentColor;

    stroke-width: 1.8;

    stroke-linecap: round;
    stroke-linejoin: round;

    transition:
      transform 0.25s ease;
  }

  &:hover svg {
    transform: scale(1.08);
  }

  @media (max-width: 768px) {
    left: 5px;
    top: 5px;

    width: 46px;
    height: 46px;

    svg {
      width: 18px;
      height: 18px;
    }
  }
`;

/* =========================================================
   LABEL
========================================================= */

const ItemLabel = styled.span`
  position: absolute;

  /*
   * 아이콘 정중앙 기준
   */
  left: 50%;
  bottom: calc(100% + 10px);

  /*
   * 기본 상태는 살짝 아래
   */
  transform:
    translateX(-50%)
    translateY(5px);

  padding:
    0.4rem
    0.7rem;

  border:
    1px solid
    rgba(
      255,
      255,
      255,
      0.75
    );

  border-radius: 10px;

  background:
    rgba(
      241,
      248,
      255,
      0.95
    );

  color:
    var(--gray-400);

  box-shadow:
    0 6px 18px
    rgba(
      118,
      164,
      218,
      0.15
    );

  backdrop-filter:
    blur(12px);

  -webkit-backdrop-filter:
    blur(12px);

  font-size: 0.7rem;
  font-weight: 500;

  white-space: nowrap;

  opacity: 0;

  pointer-events: none;

  transition:
    opacity 0.2s ease,
    transform 0.2s ease;

  /*
   * 작은 꼬리
   */
  &::after {
    content: "";

    position: absolute;

    left: 50%;
    top: 100%;

    width: 7px;
    height: 7px;

    background:
      rgba(
        241,
        248,
        255,
        0.95
      );

    border-right:
      1px solid
      rgba(
        255,
        255,
        255,
        0.75
      );

    border-bottom:
      1px solid
      rgba(
        255,
        255,
        255,
        0.75
      );

    transform:
      translate(-50%, -50%)
      rotate(45deg);
  }

  ${RadialItem}:hover &,
  ${RadialItem}:focus-visible & {
    opacity: 1;

    transform:
      translateX(-50%)
      translateY(0);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const ActiveIndicator = styled.span`
  position: absolute;

  right: 2px;
  top: 2px;

  width: 7px;
  height: 7px;

  border-radius: 50%;

  background:
    var(--white-100);

  box-shadow:
    0 0 0 2px
    var(--primary-color);
`;

/* =========================================================
   MAIN FAB
========================================================= */

const MainFab = styled.button`
  position: absolute;

  left: 0;
  top: 0;

  z-index: 5;

  width: 60px;
  height: 60px;

  padding: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  border:
    1px solid
    rgba(
      255,
      255,
      255,
      .75
    );

  border-radius: 50%;

  color:
    var(--white-100);

  background: linear-gradient(
    145deg,
    var(--primary-color),
    var(--primary-light)
  );

  box-shadow:
    0 12px 30px
    rgba(
      118,
      164,
      218,
      .32
    ),
    0 3px 8px
    rgba(
      99,
      99,
      99,
      .08
    );

  cursor: pointer;

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;

  /*
   * 바깥쪽 은은한 링
   */
  &::before {
    content: "";

    position: absolute;

    inset: -6px;

    border:
      1px solid
      rgba(
        118,
        164,
        218,
        .18
      );

    border-radius: inherit;

    pointer-events: none;

    transition:
      transform 0.3s ease,
      opacity 0.3s ease;
  }

  &:hover {
    transform: scale(1.06);

    box-shadow:
      0 15px 34px
      rgba(
        118,
        164,
        218,
        .38
      );
  }

  &:hover::before {
    transform: scale(1.08);

    opacity: 0.55;
  }

  &:focus-visible {
    outline:
      2px solid
      var(--primary-color);

    outline-offset: 6px;
  }

  svg {
    width: 23px;
    height: 23px;

    fill: none;

    stroke:
      currentColor;

    stroke-width: 2.2;

    stroke-linecap: round;

    will-change: transform;
  }

  @media (max-width: 768px) {
    width: 56px;
    height: 56px;

    svg {
      width: 21px;
      height: 21px;
    }
  }
`;

/* =========================================================
   ICONS
========================================================= */

const HomeIcon = () => (
  <svg viewBox="0 0 24 24">
    <path d="M3 11.5 12 4l9 7.5" />

    <path d="M5.5 10v10h13V10" />

    <path d="M9.5 20v-6h5v6" />
  </svg>
);

const CareerIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect
      x="4"
      y="7"
      width="16"
      height="13"
      rx="2"
    />

    <path d="M9 7V5.5C9 4.7 9.7 4 10.5 4h3C14.3 4 15 4.7 15 5.5V7" />

    <path d="M4 12h16" />

    <path d="M10 12v2h4v-2" />
  </svg>
);

const ProjectIcon = () => (
  <svg viewBox="0 0 24 24">
    <rect
      x="3.5"
      y="4"
      width="17"
      height="16"
      rx="2"
    />

    <path d="M3.5 8.5h17" />

    <path d="m9.5 12-2 2 2 2" />

    <path d="m14.5 12 2 2-2 2" />
  </svg>
);

const PlusIcon = () => (
  <svg
    className="fab-plus"
    viewBox="0 0 24 24"
  >
    <line
      x1="12"
      y1="5"
      x2="12"
      y2="19"
    />

    <line
      x1="5"
      y1="12"
      x2="19"
      y2="12"
    />
  </svg>
);

/* =========================================================
   COMPONENT
========================================================= */

const FloatingNav = () => {
  const navigate =
    useNavigate();

  const location =
    useLocation();

  const wrapRef =
    useRef<HTMLDivElement>(
      null,
    );

  const timelineRef =
    useRef<
      gsap.core.Timeline | null
    >(null);

  /*
   * state:
   * 접근성 / tabIndex용
   */
  const [
    isOpen,
    setIsOpen,
  ] = useState(false);

  /*
   * GSAP 이벤트 내부에서
   * 최신 상태 참조
   */
  const isOpenRef =
    useRef(false);

  const pathname =
    location.pathname;

  const isHome =
    pathname === "/";

  const isCareer =
    pathname.startsWith(
      "/personal",
    );

  const isProject =
    pathname.startsWith(
      "/project",
    );

  /* =====================================================
     GSAP
  ===================================================== */

  useGSAP(
    () => {
      const items =
        gsap.utils.toArray<HTMLElement>(
          ".radial-item",
        );

      const plusIcon =
        wrapRef.current?.querySelector(
          ".fab-plus",
        );

      /*
       * resize 시에도
       * radial 위치 재계산
       */
      const buildTimeline =
        () => {
          if (
            timelineRef.current
          ) {
            timelineRef.current.kill();
          }

          const mobile =
            window.matchMedia(
              "(max-width: 768px)",
            ).matches;

          const reducedMotion =
            window.matchMedia(
              "(prefers-reduced-motion: reduce)",
            ).matches;

          /*
           * PC는 넓게,
           * 모바일은 조금 작게
           */
          const radius =
            mobile
              ? 92
              : 120;

          /*
           * 180° = 왼쪽
           * 270° = 위쪽
           *
           * 즉 오른쪽 아래 FAB에서
           * 왼쪽 → 좌상단 → 위쪽으로 펼쳐짐
           */
          const startAngle =
            180;

          const endAngle =
            270;

          const angleStep =
            items.length > 1
              ? (
                  endAngle -
                  startAngle
                ) /
                (
                  items.length -
                  1
                )
              : 0;

          gsap.set(
            items,
            {
              x: 0,

              y: 0,

              scale: 0,

              opacity: 0,

              pointerEvents:
                "none",
            },
          );

          if (plusIcon) {
            gsap.set(
              plusIcon,
              {
                rotation: 0,
              },
            );
          }

          const timeline =
            gsap.timeline({
              paused: true,

              defaults: {
                overwrite:
                  "auto",
              },

              onReverseComplete:
                () => {
                  gsap.set(
                    items,
                    {
                      pointerEvents:
                        "none",
                    },
                  );
                },
            });

          items.forEach(
            (
              item,
              index,
            ) => {
              const angle =
                (
                  startAngle +
                  angleStep *
                    index
                ) *
                (
                  Math.PI /
                  180
                );

              const targetX =
                Math.cos(
                  angle,
                ) *
                radius;

              const targetY =
                Math.sin(
                  angle,
                ) *
                radius;

              timeline.to(
                item,
                {
                  x: targetX,

                  y: targetY,

                  scale: 1,

                  opacity: 1,

                  pointerEvents:
                    "auto",

                  duration:
                    reducedMotion
                      ? 0
                      : 0.62,

                  /*
                   * 네가 가져온 예제 핵심
                   */
                  ease:
                    reducedMotion
                      ? "none"
                      : "elastic.out(1, 0.5)",
                },

                reducedMotion
                  ? 0
                  : index *
                      0.055,
              );
            },
          );

          /*
           * + 버튼이 X로 회전
           */
          if (plusIcon) {
            timeline.to(
              plusIcon,
              {
                rotation: 135,

                duration:
                  reducedMotion
                    ? 0
                    : 0.35,

                ease:
                  reducedMotion
                    ? "none"
                    : "back.out(1.7)",

                overwrite:
                  "auto",
              },

              0,
            );
          }

          timelineRef.current =
            timeline;

          /*
           * resize 당시 열려 있었다면
           * 열린 위치 유지
           */
          if (
            isOpenRef.current
          ) {
            timeline.progress(
              1,
            );
          } else {
            timeline.progress(
              0,
            );
          }
        };

      buildTimeline();

      /* ==========================
         FAB 첫 등장
      ========================== */

      gsap.from(
        wrapRef.current,
        {
          opacity: 0,

          y: 18,

          scale: 0.9,

          duration: 0.65,

          delay: 0.7,

          ease:
            "back.out(1.5)",

          overwrite:
            "auto",
        },
      );

      /* ==========================
         RESIZE
      ========================== */

      window.addEventListener(
        "resize",
        buildTimeline,
      );

      /* ==========================
         ESC → CLOSE
      ========================== */

      const handleKeyDown = (
        e: KeyboardEvent,
      ) => {
        if (
          e.key ===
            "Escape" &&
          isOpenRef.current
        ) {
          isOpenRef.current =
            false;

          setIsOpen(false);

          timelineRef.current?.reverse();
        }
      };

      window.addEventListener(
        "keydown",
        handleKeyDown,
      );

      return () => {
        window.removeEventListener(
          "resize",
          buildTimeline,
        );

        window.removeEventListener(
          "keydown",
          handleKeyDown,
        );

        timelineRef.current?.kill();
      };
    },

    {
      scope: wrapRef,
    },
  );

  /* =====================================================
     OPEN / CLOSE
  ===================================================== */

  const toggleMenu =
    () => {
      const timeline =
        timelineRef.current;

      if (!timeline) {
        return;
      }

      if (
        isOpenRef.current
      ) {
        isOpenRef.current =
          false;

        setIsOpen(false);

        /*
         * reverse
         */
        timeline.reverse();
      } else {
        isOpenRef.current =
          true;

        setIsOpen(true);

        /*
         * 중간에 reverse하다
         * 다시 눌러도 자연스럽게 play
         */
        timeline.play();
      }
    };

  /* =====================================================
     NAVIGATE
  ===================================================== */

  const movePage = (
    path: string,
  ) => {
    navigate(path);

    /*
     * 페이지 이동과 동시에
     * radial menu 닫기
     */
    if (
      isOpenRef.current
    ) {
      isOpenRef.current =
        false;

      setIsOpen(false);

      timelineRef.current?.reverse();
    }
  };

  return (
    <FloatingWrap
      ref={wrapRef}
      aria-label="빠른 페이지 이동"
    >
      {/* =============================================
          HOME
      ============================================= */}

      <RadialItem
        type="button"

        className="radial-item"

        $active={isHome}

        onClick={() =>
          movePage("/")
        }

        aria-label="홈으로 이동"

        tabIndex={
          isOpen
            ? 0
            : -1
        }
      >
        {isHome && (
          <ActiveIndicator />
        )}

        <HomeIcon />

        <ItemLabel>
          홈
        </ItemLabel>
      </RadialItem>

      {/* =============================================
          CAREER
      ============================================= */}

      <RadialItem
        type="button"

        className="radial-item"

        $active={isCareer}

        onClick={() =>
          movePage(
            "/personal",
          )
        }

        aria-label="경력 페이지로 이동"

        tabIndex={
          isOpen
            ? 0
            : -1
        }
      >
        {isCareer && (
          <ActiveIndicator />
        )}

        <CareerIcon />

        <ItemLabel>
          경력
        </ItemLabel>
      </RadialItem>

      {/* =============================================
          PROJECT
      ============================================= */}

      <RadialItem
        type="button"

        className="radial-item"

        $active={isProject}

        onClick={() =>
          movePage(
            "/project",
          )
        }

        aria-label="프로젝트 페이지로 이동"

        tabIndex={
          isOpen
            ? 0
            : -1
        }
      >
        {isProject && (
          <ActiveIndicator />
        )}

        <ProjectIcon />

        <ItemLabel>
          프로젝트
        </ItemLabel>
      </RadialItem>

      {/* =============================================
          MAIN +
      ============================================= */}

      <MainFab
        type="button"

        onClick={
          toggleMenu
        }

        aria-label={
          isOpen
            ? "빠른 메뉴 닫기"
            : "빠른 메뉴 열기"
        }

        aria-expanded={
          isOpen
        }
      >
        <PlusIcon />
      </MainFab>
    </FloatingWrap>
  );
};

export default FloatingNav;