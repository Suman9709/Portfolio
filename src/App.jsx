import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import background from '/Image/background.jpg'
import HeroPage from './Pages/HeroPage'
import Skill from './Pages/Skill'
import About from './Pages/About'
import Project from './Pages/Project'
import Contact from './Pages/Contact'
import Freelance from './Pages/Freelance'
import Footer from './Components/Footer'
import DeveloperProfile from './Pages/DeveloperProfile'

const profileHash = '#developer-profile';

const App = () => {
  const [showProfile, setShowProfile] = useState(() => window.location.hash === profileHash);

  useEffect(() => {
    const syncProfileRoute = () => {
      setShowProfile(window.location.hash === profileHash);
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('hashchange', syncProfileRoute);
    return () => window.removeEventListener('hashchange', syncProfileRoute);
  }, []);

  const openProfile = () => { window.location.hash = 'developer-profile'; };
  const closeProfile = () => { window.location.hash = ''; };

  if (showProfile) return <DeveloperProfile onBack={closeProfile} />;

  return (
    <div
      className="site-shell min-h-screen w-full overflow-x-hidden bg-cover bg-fixed bg-center text-white"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="relative min-h-screen bg-[#060818]/[0.94]">
        <div className="site-noise" aria-hidden="true" />
        <Navbar />
        <main className="relative">
          <HeroPage />
          <About />
          <Skill onOpenProfile={openProfile} />
          <Project />
          <Freelance />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>

  )
}

export default App
