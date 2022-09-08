import "./Heroimagea.css"

import React from 'react'
import AboImg from "../assets/webdeva.jpg"

const Heroimagea = () => {
  return (
    <div className="hero">
    <div className="mask">
        <img className="About-img" src={AboImg} alt="AboImg"/>
    </div>
    <div className="content">
        <h1>About Us</h1>
        <p>Its about who i am </p>
        </div>
</div>
  )
}

export default Heroimagea
