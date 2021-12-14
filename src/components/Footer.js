import React from 'react'

export default function Footer() {

    function handleclick(){

        return (

            console.log('clicked')
        )
    }
    return (
        <div className="container-footer">
            <h3 className="footer-title">Let's start by say Hi</h3>
            <button className="email-btn" onClick={handleclick}>Email me</button>
        </div>
    )
}
