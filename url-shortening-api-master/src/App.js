import React,{useState} from 'react'
import './App.scss'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Shorten from './components/Shorten'
import Features from './components/Features'
import Banner from './components/Banner'
import Footer from './components/Footer'
import MobileMenu from './components/MobileMenu'

function App() {
  const [isMenuToggled,setIsMenuToggled] = useState(false);
  return (
    <div className="app">
      <MobileMenu isMenuToggled={isMenuToggled} setIsMenuToggled={setIsMenuToggled}/>
      <div className="container">
        <Navbar isMenuToggled={isMenuToggled} setIsMenuToggled={setIsMenuToggled} />
        <Hero />
        <Shorten />
      </div>
      <Features />
      <Banner />
      <Footer />
    </div>
  )
}

export default App
