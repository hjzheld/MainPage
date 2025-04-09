import '@/assets/scss/index.scss';
import Main from "@/pages/MainPage"
import Detail from "@/pages/DetailPage"

import { useEffect } from 'react'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

    useEffect(() => {
        document.documentElement.lang = 'ko'
    })

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/project/:id" element={<Detail />} />
            </Routes>
        </Router>
    )
}

export default App