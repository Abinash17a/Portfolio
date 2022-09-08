import "./Skillscardstyles.css"
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"

import React from 'react'

const Skillscard = () => {
  return (
    <div className="skills">
        <div className="card-container">
            <div className="card">
            
                <h3>HTML</h3>
                <span className="bar"></span>
                <p className="about-skill">what in it</p>
             </div>

             <div className="card">
                <h3>CSS</h3>
                <span className="bar"></span>
                <p className="about-skill">what in it</p>
             </div>

             <div className="card">
                <h3>Javascript</h3>
                <span className="bar"></span>
                <p className="about-skill">what in it</p>
             </div>

             <div className="card">
                <h3>Bootstrap</h3>
                <span className="bar"></span>
                <p className="about-skill">what in it</p>
             </div>

             <div className="card">
                <h3>Library/Framework</h3>
                <span className="bar"></span>
                <p className="which">React</p>
                <p className="about-skill">what in it</p>
             </div>

        </div>
    </div>
  )
}

export default Skillscard

