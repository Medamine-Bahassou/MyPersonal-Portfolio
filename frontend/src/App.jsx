import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import NavBar from './components/common/navbar/NavBar'
import { motion, useScroll, useSpring } from "framer-motion"
import Footer from "./components/common/footer/Footer"
import { Toaster } from 'react-hot-toast';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className=' bg-base-100 min-h-screen w-full '>
      <Toaster />
      <NavBar />
      <motion.div className="fixed top-0 left-0 right-0 z-50 h-[5px] bg-slate-700 origin-top-left	 " style={{ scaleX }}  />  
      <div className='max-w-4xl mx-auto w-full'>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </div>
      <Footer />
    </div>

  )
}

export default App
