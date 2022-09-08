import React from 'react'
import "./Heroimagec.css"
import ConImg from "../assets/webdevc.jpg"

const Heroimagec = () => {
  return (
    <div className="hero">
    <div className="mask">
        <img className="Con-img" src={ConImg} alt="ConImg"/>
    </div>
    <div className="content">
        <h1>Contact ME</h1>
        <p>You can Contact me from the following ways</p>
        </div>
</div>
   
  )
}

export default Heroimagec
