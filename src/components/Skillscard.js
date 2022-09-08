import "./Skillscardstyles.css"
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import React from 'react'

const Skillscard = () => {
  return (
    <div className="skills">
      <h1 className="skillheading">Skills</h1>
        <div className="card-container">
            <div className="card">
            
                <h3>HTML</h3>
                <span className="bar"></span>
                <i class="fa-brands fa-html5 fa-4x"></i>
             </div>

             <div className="card">
                <h3>CSS</h3>
                <span className="bar"></span>
                <i class="fa-brands fa-css3-alt fa-4x"></i>
             </div>

             <div className="card">
                <h3>Javascript</h3>
                <span className="bar"></span>
                <i class="fa-brands fa-js fa-4x"></i>
             </div>

             <div className="card">
                <h3>Bootstrap</h3>
                <span className="bar"></span>
                <i class="fa-brands fa-bootstrap fa-4x"></i>
             </div>

             <div className="card">
                <h3>React</h3>
                <span className="bar"></span>
                <i class="fa-brands fa-react fa-4x"></i>
             </div>

        </div>
    </div>
  )
}

export default Skillscard

