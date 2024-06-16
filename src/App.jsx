import React from "react"
import Navbar from "./assets/components/navbar/Navbar"
import Hero from "./assets/components/hero/Hero"
import About from "./assets/components/about/About"
import Skill from "./assets/components/skill/Skill"
import Project from "./assets/components/project/Project"
import ContactMe from "./assets/components/contactMe/ContactMe"


function App() {


  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skill />
      <Project />
      <ContactMe />
    </div> 
    
  )
}

export default App
