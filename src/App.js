import react from "react";
import "./index.css";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import About from "./Routes/About";
import project from "./Routes/project";

import{Route,Routes} from "react-router-dom";


function App() {
  return (
    <>
    <Routes>
      
     <Route path="/" element={<Home/>} />
     <Route path="/project" element={<project/>} />
     <Route path="/about" element={<About/>} />
     <Route path="/contact" element={<Contact/>} />
    
    </Routes>
    </>
  );
}

export default App;
