import styled from "styled-components";

import GraLine from "@/components/common/GradationLine";

import {
  useEffect,
  useState,
} from "react";

import {
  motion,
} from "framer-motion";

import {
  useLocation,
  useNavigate,
} from "react-router-dom";

import Logo from "./Logo";

/* =========================================================
   HEADER
========================================================= */

const HeaderWrapper = styled.header`
  position: relative;

  width: 100%;

  z-index: 1000;

  background-color: transparent;

  padding:
    1rem
    2rem;

  @media (max-width: 768px) {
    padding:
      0.75rem
      1rem;
  }
`;

/* =========================================================
   HEADER CONTAINER
========================================================= */

const HeaderContainer = styled.div`
  position: relative;

  width: 100%;
  max-width: 1200px;

  margin: 0 auto;

  display: flex;

  justify-content:
    space-between;

  align-items:
    center;
`;

/* =========================================================
   NAV
========================================================= */

const Nav = styled.nav<{
  $open: boolean;
}>`
  display: flex;

  align-items:
    center;

  gap: 2rem;

  /* =====================================================
     MOBILE
  ===================================================== */

  @media (max-width: 768px) {
    position: absolute;

    /*
     * HeaderContainer 바로 아래
     */
    top: calc(100% + 0.75rem);

    left: 0;
    right: 0;

    z-index: 1001;

    width: 100%;

    padding:
      0.75rem;

    display: flex;

    flex-direction: column;

    align-items:
      stretch;

    gap: 0.35rem;

    border:
      1px solid
      rgba(
        118,
        164,
        218,
        0.16
      );

    border-radius:
      16px;

    background:
      rgba(
        241,
        248,
        255,
        0.96
      );

    box-shadow:
      0
      14px
      35px
      rgba(
        118,
        164,
        218,
        0.16
      );

    backdrop-filter:
      blur(18px);

    -webkit-backdrop-filter:
      blur(18px);

    /*
     * 닫힘
     */
    opacity:
      ${({ $open }) =>
        $open ? 1 : 0};

    visibility:
      ${({ $open }) =>
        $open
          ? "visible"
          : "hidden"};

    transform:
      translateY(
        ${({ $open }) =>
          $open
            ? "0"
            : "-12px"}
      )
      scale(
        ${({ $open }) =>
          $open
            ? "1"
            : "0.98"}
      );

    transform-origin:
      top center;

    pointer-events:
      ${({ $open }) =>
        $open
          ? "auto"
          : "none"};

    transition:
      opacity
        0.24s
        ease,
      transform
        0.24s
        ease,
      visibility
        0.24s
        ease;
  }
`;

/* =========================================================
   NAV ITEM
========================================================= */

const NavItem = styled(
  motion.button,
)<{
  $active: boolean;
}>`
  position: relative;

  padding:
    0.5rem
    1rem;

  border: none;

  background: none;

  color:
    ${({ $active }) =>
      $active
        ? "var(--primary-color)"
        : "var(--gray-100)"};

  font-size: 1rem;

  font-weight:
    ${({ $active }) =>
      $active
        ? "600"
        : "400"};

  cursor: pointer;

  &::after {
    content: "";

    position: absolute;

    left: 50%;
    bottom: 0;

    width:
      ${({ $active }) =>
        $active
          ? "80%"
          : "0%"};

    height: 2px;

    transform:
      translateX(-50%);

    background:
      var(--primary-color);

    border-radius:
      999px;

    transition:
      width
      0.3s
      ease;
  }

  &:hover::after {
    width: 80%;
  }

  /* =====================================================
     MOBILE
  ===================================================== */

  @media (max-width: 768px) {
    width: 100%;

    padding:
      0.85rem
      1rem;

    border-radius:
      11px;

    font-size:
      1rem;

    text-align:
      center;

    transition:
      background
        0.2s
        ease,
      color
        0.2s
        ease;

    background:
      ${({ $active }) =>
        $active
          ? "rgba(118, 164, 218, 0.08)"
          : "transparent"};

    &:hover {
      background:
        rgba(
          118,
          164,
          218,
          0.08
        );
    }

    &::after {
      bottom: 5px;

      width:
        ${({ $active }) =>
          $active
            ? "32px"
            : "0"};
    }

    &:hover::after {
      width: 32px;
    }
  }
`;

/* =========================================================
   MOBILE MENU BUTTON
========================================================= */

const MenuButton = styled.button<{
  $open: boolean;
}>`
  display: none;

  position: relative;

  width: 42px;
  height: 42px;

  padding: 0;

  flex-shrink: 0;

  border:
    1px solid
    ${({ $open }) =>
      $open
        ? "rgba(118, 164, 218, 0.22)"
        : "transparent"};

  border-radius:
    12px;

  background:
    ${({ $open }) =>
      $open
        ? "rgba(118, 164, 218, 0.08)"
        : "transparent"};

  color:
    ${({ $open }) =>
      $open
        ? "var(--primary-color)"
        : "var(--gray-100)"};

  cursor: pointer;

  transition:
    background
      0.2s
      ease,
    color
      0.2s
      ease,
    border
      0.2s
      ease;

  &:hover {
    color:
      var(--primary-color);

    background:
      rgba(
        118,
        164,
        218,
        0.08
      );
  }

  &:focus-visible {
    outline:
      2px solid
      var(--primary-color);

    outline-offset:
      3px;
  }

  @media (max-width: 768px) {
    display: flex;

    align-items:
      center;

    justify-content:
      center;
  }

  svg {
    width: 24px;
    height: 24px;

    transition:
      transform
      0.25s
      ease;
  }
`;

/* =========================================================
   MENU ICON
========================================================= */

const MenuIcon = ({
  open,
}: {
  open: boolean;
}) => {
  if (open) {
    return (
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M6 6L18 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M18 6L6 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M4 6H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M4 12H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M4 18H20"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

/* =========================================================
   TYPE
========================================================= */

interface HeaderProps {
  PageName?: string;

  menuName?:
    | string
    | string[];
}

/* =========================================================
   COMPONENT
========================================================= */

const Header = (
  {}: HeaderProps = {},
) => {
  const navigate =
    useNavigate();

  const location =
    useLocation();

  const [
    open,
    setOpen,
  ] =
    useState(false);

  /* =====================================================
     MENU
  ===================================================== */

  const menuItems = [
    {
      path: "/",
      label: "홈",
    },

    {
      path: "/personal",
      label: "경력",
    },

    {
      path: "/project",
      label: "프로젝트",
    },
  ];

  /* =====================================================
     ACTIVE CHECK
  ===================================================== */

  const isActive = (
    path: string,
  ) => {
    /*
     * HOME은 정확히 /
     */
    if (
      path === "/"
    ) {
      return (
        location.pathname ===
        "/"
      );
    }

    /*
     * /project
     * /project/5
     *
     * 둘 다 프로젝트 active
     */
    return (
      location.pathname.startsWith(
        path,
      )
    );
  };

  /* =====================================================
     페이지 이동하면 메뉴 닫기
  ===================================================== */

  useEffect(
    () => {
      setOpen(
        false,
      );
    },
    [
      location.pathname,
    ],
  );

  /* =====================================================
     ESC 메뉴 닫기
  ===================================================== */

  useEffect(
    () => {
      if (
        !open
      ) {
        return;
      }

      const handleKeyDown = (
        event: KeyboardEvent,
      ) => {
        if (
          event.key ===
          "Escape"
        ) {
          setOpen(
            false,
          );
        }
      };

      window.addEventListener(
        "keydown",
        handleKeyDown,
      );

      return () => {
        window.removeEventListener(
          "keydown",
          handleKeyDown,
        );
      };
    },
    [
      open,
    ],
  );

  /* =====================================================
     화면이 PC 사이즈로 커지면 메뉴 닫기
  ===================================================== */

  useEffect(
    () => {
      const handleResize =
        () => {
          if (
            window.innerWidth >
            768
          ) {
            setOpen(
              false,
            );
          }
        };

      window.addEventListener(
        "resize",
        handleResize,
      );

      return () => {
        window.removeEventListener(
          "resize",
          handleResize,
        );
      };
    },
    [],
  );

  /* =====================================================
     RENDER
  ===================================================== */

  return (
    <HeaderWrapper>
      <HeaderContainer>
        {/* =========================================
            LOGO
        ========================================= */}

        <Logo
          onClick={() => {
            navigate(
              "/",
            );
          }}
        />

        {/* =========================================
            MOBILE MENU BUTTON
        ========================================= */}

        <MenuButton
          type="button"

          $open={
            open
          }

          aria-label={
            open
              ? "메뉴 닫기"
              : "메뉴 열기"
          }

          aria-expanded={
            open
          }

          onClick={() => {
            setOpen(
              (
                prev,
              ) =>
                !prev,
            );
          }}
        >
          <MenuIcon
            open={
              open
            }
          />
        </MenuButton>

        {/* =========================================
            NAVIGATION
        ========================================= */}

        <Nav
          $open={
            open
          }
        >
          {menuItems.map(
            (
              item,
            ) => (
              <NavItem
                key={
                  item.path
                }

                type="button"

                $active={
                  isActive(
                    item.path,
                  )
                }

                onClick={() => {
                  navigate(
                    item.path,
                  );

                  setOpen(
                    false,
                  );
                }}

                whileHover={{
                  scale:
                    1.06,

                  y:
                    -2,
                }}

                whileTap={{
                  scale:
                    0.95,
                }}

                transition={{
                  type:
                    "spring",

                  stiffness:
                    320,

                  damping:
                    20,
                }}
              >
                {
                  item.label
                }
              </NavItem>
            ),
          )}
        </Nav>
      </HeaderContainer>

      {/* =========================================
          HEADER LINE
      ========================================= */}

      <GraLine />
    </HeaderWrapper>
  );
};

export default Header;