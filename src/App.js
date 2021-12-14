import React, {useState} from 'react'
import {Link, Routes, Route} from "react-router-dom"

import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Service from './components/Service'
import Skills from './components/Skills'





export default function App() {
 
 
 
  return (
    <>
    <Header />
    <div className="conainer-main">







 
  <About />

     <Skills/>
     <Service/>

    
      <Footer/> 
    
    </div>
</>
  )
}
