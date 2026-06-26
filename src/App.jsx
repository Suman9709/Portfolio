import React from 'react'
import Navbar from './Components/Navbar'
import background from '/Image/background.jpg'
import HeroPage from './Pages/HeroPage'
import Skill from './Pages/Skill'
import About from './Pages/About'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
import Freelance from './Pages/Freelance'

const App = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-fixed bg-center overflow-x-hidden text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="min-h-screen bg-[#05070d]/90">
        <Navbar />
        <main>
          <HeroPage />
          <About />
          <Skill />
          <Project />
          <Freelance />
          <Contact />
        </main>
      </div>
    </div>

  )
}

export default App
