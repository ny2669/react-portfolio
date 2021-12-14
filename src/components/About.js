import React from 'react'


import Button from '../components/Button'
import welcome from '../images/welcome.png'

export default function About() {

  

    return (
        <div className="container-about">
            <div class="custom-shape-divider-bottom-1638973581">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
</div>

            <div class="section">

                <h2 className="about-title">About</h2>

                <div className="">

                    <img src={welcome} alt="" className=""/>
                    
                </div>

            

<div className="about-content">
   {/* <h2 class="">Web Developer currently based in Reading</h2> */}
   <p>I have recently completed IT career switch Full stack Web Development course, and looking now looking for a role in Frontend web development.
     
       
    </p>
    <br/>
    <p>I Have 5 years previous experience in web development in which i started my own business built the from the ground up.</p>
</div>
            </div>

            <button>Resume</button>

         
        </div>


    )
}
