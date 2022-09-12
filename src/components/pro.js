import "./Projectcard.css"
import Timg from "../assets/TExter.png"
import Dimg from "../assets/drum.png"
import { NavLink } from "react-router-dom"
import React from 'react'

const Pro = () => {
  return (
    <div className="projectcard">
      <div className="heading">
        Projects
      </div>
      <div className="pcard-container">
        <div className="pcard">
           <img className="T-img" src={Timg} alt="Timg"></img>
           <div className="pro-name">TEXTER</div>
            <p>Its a online text editor or text analyzer(1st react project) </p>
            <NavLink to="/"
                className="btn pbtn">Source Code</NavLink>
          </div>

        <div className="pcard">
            <img className="D-img" src={Dimg} alt="Dimg"></img>
            <div className="pro-name">Drumkit</div>
            <p>Its a web application for playing Full set drum sounds (For Javascript practice) </p>
            <NavLink to="/"
                className="btn pbtn">Source code</NavLink>
          </div>
      </div>
    </div>
  )
}

export default Pro