import React, {useState} from 'react'
import {Link} from "react-router-dom"
import me from '../images/me profile.jpg'
import logo from '../images/logo.png'
import web from '../images/web.png'



export default function Header() {
const navList = ['About','projects', 'Services']
const lang = ['HTML','CSS','JAVASCRIPT','REACT','PHP']
const [bars,setBars] = useState(true)


const list = navList.map(item => <li className="lists">{item}</li>)

// languages bar 
const langlist = lang.map(data => <p>{data}</p>)

function handleClick(){

    setBars(!bars)
  

}


    return (
        <div className="container-header">
            
              <nav>
                  <div className="burger-menu">
 <span class=""><img src={logo} alt="" className="logo"/></span>
 
{!bars ? <i className={'fas fa-times'} onClick={handleClick}></i> : <i className={'fas fa-bars'} onClick={handleClick}></i>}

                      
                  </div>
               {!bars?  <ul className="NavList">

                {list}
                <li className=""><button className="lists">Hire me</button> </li>
                
                </ul> : bars}

               
            </nav>

       
              
          
<div className="header-txt">
    


            <h2 className="intro-text head">I'm Nyala Jones</h2>
            <p className="intro-text">UI / UX Web Designer &amp; Web developer</p>
            </div>

             <img src={web} alt="" className="web" />
           

           <Link exact to="/">Home</Link>
           <Link to="/about">About</Link>

            </div>
       
    )
}
