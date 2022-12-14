import "./Projectcard.css"
import Timg from "../assets/TExter.png"
import Dimg from "../assets/drum.png"
import { NavLink } from "react-router-dom"
import React from 'react'

const Projectcard = () => {
  return (
    <div className="projectcard">
      <div className="heading">
        Projects
      </div>
      <div className="pcard-container">
        <div className="pcard">
           <img className="T-img" src={Timg} alt="Timg"></img>
           <div className="pro-name">Enter project name</div>
            <p>About Project </p>
            <NavLink to="/"
                className="btn pbtn">Source Code</NavLink>
          </div>

        <div className="pcard">
            <img className="D-img" src={Dimg} alt="Dimg"></img>
            <div className="pro-name">Enter project name</div>
            <p>About Project</p>
            <NavLink to="/"
                className="btn pbtn">Source code</NavLink>
          </div>
      </div>
    </div>
  )
}

export default Projectcard
