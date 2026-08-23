import {
  useLocation,
  useNavigationType,
} from "react-router-dom";

/* =========================================================
   PROJECT NAVIGATION MEMORY

   브라우저 메모리에만 유지.

   sessionStorage 사용 X
   localStorage 사용 X
   Zustand 등 Store 사용 X
========================================================= */

/*
 * 프로젝트 상세페이지로 이동하기 직전의
 * PortfolioPage location.key를 저장.
 *
 * React Router는 history entry마다
 * 고유한 location.key를 가지고 있음.
 */
let projectListLocationKey:
  | string
  | null = null;

/* =========================================================
   HOOK
========================================================= */

const useProjectNavigation =
  () => {
    const location =
      useLocation();

    const navigationType =
      useNavigationType();

    /* =====================================================
       프로젝트 상세페이지 이동 직전 호출
    ===================================================== */

    const markProjectDetailOpen =
      () => {
        /*
         * 현재 PortfolioPage의
         * history key 저장
         */
        projectListLocationKey =
          location.key;
      };

    /* =====================================================
       상세 → 목록 뒤로가기 여부
    ===================================================== */

    const isReturningFromProjectDetail =
      navigationType ===
        "POP" &&
      projectListLocationKey ===
        location.key;

    /* =====================================================
       사용 완료 후 초기화
    ===================================================== */

    const clearProjectReturn =
      () => {
        projectListLocationKey =
          null;
      };

    return {
      markProjectDetailOpen,

      isReturningFromProjectDetail,

      clearProjectReturn,
    };
  };

export default useProjectNavigation;