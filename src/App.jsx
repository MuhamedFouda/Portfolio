import React from 'react'
import "./App.scss"
import Navbar from './Components/Navbar/Navbar'
import Test from './Test'
import Hero from './Components/Hero/Hero'
import Parallax from './Components/Parallax/Parallax'
import Services from './Components/Services/Services'
import Portfolio from './Components/Portfolio/Portfolio'
import Contact from './Components/Contact/Contact'
import PhoneIcon from './Components/Contact/gpt'
import Cursor from './Components/Cursor/Cursor'
export default function App() {
  return (
    <div>
        <Cursor />
      <section id='HomePage'>
        <Navbar />
        <Hero />
      </section>
      <section id='Services'><Parallax type="services" /></section>
      <section><Services /></section>
      <section id='Portfolio'><Parallax type="portfolio" /></section>
      <Portfolio />
      <section id='Contact'>
        <Contact />
        {/* <PhoneIcon/> */}
      </section>
      {/* <Test/>
      <Test/>
      <Test/> */}
    </div>
  )
}

