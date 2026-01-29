// === Dependences ===
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// === Pages ===
import WelcomePage from './pages/WelcomePage'
import AboutUs from './pages/AboutUs'
import Archive from './pages/Archive'
// === Styles ===
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/archive" element={<Archive />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
