import React from 'react'
import me from '../images/me profile.jpg'
import {Link} from 'react-router-dom'
export default function Footer() {

    function handleclick(){

        return (

            console.log('clicked')
        )
    }
    return (
        <div className="container-footer">

<img src={me} alt="" className="profile"/>

            <div className="footer-content">
                <h2 className="">Reach out to me</h2>
                <p className="">DISCUSS A PROJECT OR JUST WANT TO SAY HI? MY INBOX IS OPEN FOR ALL
</p>
<p class="">
I'm a Full Stack Web Developer | Open Source Contributor</p>
           <a href="http:ny_8@hotmail.co.uk" className="email-btn">Email me</a>

           
            </div>
          
            {/* <h3 className="footer-title">Let's start by say Hi</h3> */}
          
        </div>
    )
}
