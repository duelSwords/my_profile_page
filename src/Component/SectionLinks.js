import React from 'react'
import '../Component_css/SectionLinks.css'



function addResponse() {
    let x = document.querySelector(".topnav");
    x.classList.toggle("responsive")
  }


function SectionLinks () {
    return (
        <div id="SectionLinks"> 

            <div className="topnav">
                <a href="#" className="active">Home</a>
                <a href="#">Bio</a>
                <a href="#">Projects</a>
                <a href="#">Experiences</a>
                <a href="#">Education</a>
                <a className="icon" onClick={addResponse}>
                    <i className="fa fa-bars"></i>
                </a>
            </div>

        </div>
    )
}

export default SectionLinks