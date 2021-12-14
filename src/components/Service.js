import React from 'react'

export default function Service() {

    const box = [{
        title: 'user Interface Design',
        tagline: '100 projects',    
    },
    {
        title: 'Website Design',
        tagline: '100 projects',
    },
    {
        title: 'Marketing',
        tagline: '100 projects',
    }
]

  const dobox =  box.map(boxes => 
  <div className="box"><p>{boxes.title}</p> 
  <p>{boxes.tagline}</p>
   </div>)

    return (
        <div className="container-service">

<div className="sect1">
                <h2 className="servive-title">What do i help</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi fugiat inventore dicta rerum atque sit. Nulla impedit atque quaerat, inventore officiis, ad totam quod excepturi possimus ea sunt. Sapiente, saepe.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi fugiat inventore dicta rerum atque sit. Nulla impedit atque quaerat, inventore officiis, ad totam quod excepturi possimus ea sunt. Sapiente, saepe.</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi fugiat inventore dicta rerum atque sit. Nulla impedit atque quaerat, inventore officiis, ad totam quod excepturi possimus ea sunt. Sapiente, saepe.</p>
            </div>

            <div className="sect 2">
                {dobox}
            </div>

        
            
        </div>
    )
}
