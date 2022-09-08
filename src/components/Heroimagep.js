import "./Heroimagep.css"
import React from 'react'
import ProImg from "../assets/webdev1.jpg";

const Heroimagep = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="Pro-img" src={ProImg} alt="ProImg"/>
        </div>
        <div className="content">
            <h1>Project</h1>
            <p>These are Some of my recent project</p>
            </div>
    </div>
  )
}

export default Heroimagep
