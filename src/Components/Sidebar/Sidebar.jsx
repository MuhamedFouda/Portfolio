import React, { useEffect, useState } from 'react'
import "./Sidebar.scss"
import Links from './Links/Links'
import ToggleButton from './ToggleButton/ToggleButton';
import { motion } from 'motion/react';
import useResponsiveSize from './SidebarMobileHook';
export default function Sidebar() {

  const [open, setOpen] = useState(false);
  const size =useResponsiveSize()

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: { type: "spring", stiffness: 20 }  // smooth animation when sidebar opens or closes
    },
    closed: {
      clipPath: `circle(25px at ${size} 50px)`,
      transition: { delay: 0.3, type: "spring", stiffness: 400, damping: 40 }  // smooth animation when sidebar opens or closes
    },
  }
  return (
    <motion.div className='sideBar' animate={open ? "open" : "closed"} >
      <motion.div className="bg" variants={variants} initial={false}>
        <Links className="links" />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  )
}
