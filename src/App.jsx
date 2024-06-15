import React from "react"
import Navbar from "./assets/components/navbar/Navbar"
import Hero from "./assets/components/hero/Hero"
import About from "./assets/components/about/About"
import Skill from "./assets/components/skill/Skill"


function App() {


  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skill />
    </div> 
    
  )
}

export default App
