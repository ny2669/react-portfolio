import React, {useState} from 'react'
import {Link} from "react-router-dom"

import logo from '../images/logo.png'
import Aos from 'aos'





export default function Header() {
const navList = ['About','projects', 'Services']
const lang = ['HTML','CSS','JAVASCRIPT','REACT','PHP']
const [bars,setBars] = useState(true)


// 

function handleClick(){

    setBars(!bars)
  

}


    return (
        <div className="container-header">
            
              <nav>
                  <div className="burger-menu">
                      <Link exact to="/">
 <span class=""><img src={logo} alt="" className="logo"/></span>
 </Link>

{!bars ? <i className={'fas fa-times'} onClick={handleClick}></i> : <i className={'fas fa-bars'} onClick={handleClick}></i>} 
                  </div>

                <ul className={!bars ? 'navList active' : 'navList'}>

                <Link to="/" className="list-link"><li>Home</li></Link>
                <Link to="/home" className="list-link"><li>Home2</li></Link>
                <Link to="/about" className="list-link"><li>WHAT I DO</li></Link>
                <Link to="/experience" className="list-link"><li>Experience</li></Link>
                <Link to="/projects" className="list-link"><li>Projects</li></Link>

                <li className=""><button className="lists">Hire me</button> </li>
                
                </ul>

               
            </nav>


            </div>
       
    )
}
