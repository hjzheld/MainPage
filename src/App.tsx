import '@/assets/scss/index.scss';
import MainPage from "@/pages/MainPage"
import Detail from "@/pages/portfolio/DetailPage"
import PortfolioPage from "@/pages/portfolio/PortfolioPage"
import Header from "@/components/header/Header"
import Footer from "@/components/footer/Footer"

import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation  } from "react-router-dom";

// interface ThemeTpe {
//     theme: string,
//     setTheme: () => void
// }

// export const ThemeContext = createContext<ThemeTpe>({
//     theme: 'dark',
//     setTheme: () => {}
//   })

// 페이지 이동 시 스크롤을 맨 위로 부드럽게 이동 (뒤로가기 포함)
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // 브라우저의 기본 스크롤 복원 동작 방지
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    
    // 스크롤을 맨 위로 부드럽게 이동
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
}

function AppContent() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/MainPage/" element={<Navigate to="/MainPage/home" replace />} />
          <Route path="/MainPage/home" element={<MainPage />} />
          <Route path="/MainPage/project" element={<PortfolioPage />} />
          <Route path="/MainPage/project/:id" element={<Detail />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

function App() {
//     const [isDarkMode, setIsDarkMode] = useState('dark')

//   const setTheme = () => {
//     setIsDarkMode(!isDarkMode)
//   }

    // useEffect(() => {
    //     document.documentElement.lang = 'ko'
    // })

    return (
        <Router>
            <AppContent />
        </Router>
    )
}

export default App