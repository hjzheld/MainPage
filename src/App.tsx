import '@/assets/scss/index.scss';
import Main from "@/pages/MainPage"
import Detail from "@/pages/DetailPage"
import AOS from 'aos';
import 'aos/dist/aos.css';

import { useEffect } from 'react';
// import { useEffect, createContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// interface ThemeTpe {
//     theme: string,
//     setTheme: () => void
// }

// export const ThemeContext = createContext<ThemeTpe>({
//     theme: 'dark',
//     setTheme: () => {}
//   })

function App() {
    useEffect(() => {
        AOS.init({
          duration: 1000,
          once: true,
        });
      }, []);

//     const [isDarkMode, setIsDarkMode] = useState('dark')

//   const setTheme = () => {
//     setIsDarkMode(!isDarkMode)
//   }

    // useEffect(() => {
    //     document.documentElement.lang = 'ko'
    // })

    return (
        <Router basename="/MainPage">
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/project/:id" element={<Detail />} />
            </Routes>
        </Router>
    )
}

export default App