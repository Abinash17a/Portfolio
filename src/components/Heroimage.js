import "./Heroimagestyle.css";
import React from 'react'
import IntroImg from "../assets/webdev.jpg";
import {Link} from "react-router-dom"
const heroimage = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="Intro-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p>Hi, I'm a Front-End Developer</p>
            <div>
                <Link to="/project"
                className="btn">Projects</Link>

                <Link to="/contact"
                className="btn btn-light">Contacts</Link>
            </div>
        </div>
    </div>
  )
}

export default heroimage

