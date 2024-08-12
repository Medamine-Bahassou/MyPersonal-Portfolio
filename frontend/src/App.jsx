import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NavBar from './components/common/navbar/NavBar'
import { motion, useScroll, useSpring } from "framer-motion"
import Footer from "./components/common/footer/Footer"

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className=' bg-base-200 min-h-screen w-full'>
      <NavBar />
      <motion.div className="fixed top-0 left-0 right-0 z-50 h-[10px] bg-slate-700 origin-top-left	 " style={{ scaleX }}  />  
      <div className='max-w-6xl mx-auto w-full'>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </div>

  )
}

export default App
