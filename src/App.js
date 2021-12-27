import React, {useState, useEffect} from 'react'
import {Routes, Route} from "react-router-dom"

import Header from './components/NavBar'
import Footer from './components/Footer'
import About from './pages/About'
import Experience from './pages/Experience'
import Projects from './pages/Projects'
import Header2 from './pages/Header2'
import Home from './Home'
import Aos from 'aos'
import 'aos/dist/aos.css'




export default function App() {
 
  useEffect(()=>{

        Aos.init({duration: 2000})
      
       }, [])

 
  return (
    <>
    <Header />
    <div className="conainer-main">


<Routes>
<Route exact path="/" element={<Header2/>}></Route>
  <Route path="/about" element={<About/>}></Route>
  <Route path="/experience" element={<Experience/>}></Route>
  <Route path="/projects" element={<Projects/>}></Route>
  <Route path="/home" element={<Home/>}></Route>

</Routes>
<Footer/> 
    </div>
    
   

</>
  )
}
