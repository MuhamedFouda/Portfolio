import React from 'react'
import "./Navbar.scss"
import { motion } from 'motion/react';
import Sidebar from './../Sidebar/Sidebar';
export default function Navbar() {

  const phoneNumber = "+201552065122"; // Replace with your phone number
  const message = "Hello, I am interested in your services"; // Replace with your custom message

  return (
    <div className='navbar'>
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
        >Fouda Dev</motion.span>
        <div className="social">
          <a href='https://www.facebook.com/memo.fouda59' target='_blank'><img src='../../../public/facebook.png' alt='Facebook Image' /></a>
          <a href='https://www.instagram.com/muhamad_fouda/' target='_blank'><img src='../../../public/instagram.png' alt='Instgram Image' /></a>
          <a href='https://github.com/MuhamedFouda?tab=repositories' target='_blank'><img src='../../../public/Github.png' alt='Github Image' /></a>
          <a href='https://www.linkedin.com/in/muhamedfouda/' target='_blank'><img src='../../../public/linked.png' alt='Linkedin Image' /></a>
          <a href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`} target="_blank" style={{ textDecoration: "none" }}>
          <img src='../../../public/w.png' alt='Whatsapp Image' />
          </a>
        </div>
      </div>
    </div>
  )
}
