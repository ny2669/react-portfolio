import React, {useEffect} from 'react'

import welcome from '../images/welcome.png'





export default function About() {

   
    return (
        <div className="container-about" data-aos="fade-up">
<div class="about-wrap">
    

            <div className="about">

                <h2 className='about-1'>What I do</h2>
                <p className='about-2'>Self motivated FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
                </div>
        

            <div className="section1">

                <img src={welcome} alt="" className="skills"/>
                
            </div>
           
                
            </div>

            <div className="section2">

                <div>
                <i class="fab fa-3x fa-html5"></i>
                <i class="fab fa-3x fa-css3-alt"></i>
                <i class="fab fa-3x fa-npm"></i>
                <i class="fab fa-3x fa-react"></i>
                <i class="fab fa-3x fa-js-square"></i>
                <i class="fab fa-3x fa-python"></i>
                <i class="fab fa-3x fa-php"></i>
                <i class="fab fa-3x fa-node-js"></i>


                

                
                </div>

                <div >
                <i class="fab fa-3x fa-bootstrap"></i>
                
               

                <i class="fab fa-3x fa-github-alt"></i>
                <i class="fab fa-3x fa-shopify"></i>
                <i class="fab fa-3x fa-wordpress"></i>
                <i class="fab fa-3x fa-figma"></i>
                    
                </div>

                <div>
                    <ul className="highlight">
                     <li class=""> <i class="fas  fa-code"></i>Develop highly interactive Front end / User Interfaces for your web applications</li>
                   
                    <li class="">  <i class="fas  fa-code"></i>Progressive Web Applications ( PWA ) in normal and SPA Stacks</li>
                    <li class=""> <i class="fas  fa-code"></i> Integration of third party services such as Firebase/ Rest API / </li>


                        
                    </ul>

                </div>
                
                </div>
           

           </div>

    )
}


{/* <div className="about-content">
   <h2 class="">Web Developer currently based in Reading</h2>
   <p>I have recently completed IT career switch Full stack Web Development course, and looking now looking for a role in Frontend web development.
     
       
    </p>
    <br/>
    <p>I Have 5 years previous experience in web development in which i started my own business built the from the ground up.</p>
</div> */}


  {/* <img src={welcome} alt="" className=""/> */}