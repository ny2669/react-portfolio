import React from 'react'
import web from '../images/web.png'
import {Link} from "react-router-dom"


export default function Header2() {
    return (
        <div className="container-header2" data-aos="zoom-in-up">
            <div className="header-txt">
    


    <h2 className="intro-text ">I'm Nyala Jones</h2>
    <p className="intro-text">UI / UX Web Designer &amp; Web developer</p>

    <br/>
    <p className="welcome">A passionate Full Stack Web Developer, having an experience of building Web applications with JavaScript / Reactjs / Nodejs / PHP / Python and some other cool libraries and frameworks.

</p>

<div class="social">
<i class="fab fa-2x fa-linkedin"></i>
<i class="fab fa-2x fa-github-square"></i>
</div>

<Link to="/about">
    <button className="resume"><i class="fas fa-file"></i> SEE MY CV</button>
</Link>

<img src={web} alt="" className="web" />




    </div>

  

  

    
   
            
        </div>
    )
}
