import React from 'react'
import Navbar from './Components/Navbar'
import background from '/Image/background.jpg'
import HeroPage from './Pages/HeroPage'
import SkillCard from './Components/SkillCard'

const App = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center overflow-x-hidden"
      style={{ backgroundImage: `url(${background})` }}
    >
      <Navbar />
      <HeroPage />
      <SkillCard/>
    </div>

  )
}

export default App