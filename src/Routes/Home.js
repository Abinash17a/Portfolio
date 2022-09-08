import React from 'react'
import Navbar from "../components/Navbar"
import Heroimage from "../components/Heroimage";
import Footer from "../components/Footer";
import Skillscard from "../components/Skillscard"


const Home = () => {
  return (
    <div>
      <Navbar/>
      <Heroimage/>
      <Skillscard/>
      <Footer/>
    </div>
  )
}

export default Home
