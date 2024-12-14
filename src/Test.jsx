import React, { useState } from 'react'
import { motion } from "motion/react"
export default function Test() {
  const [open, setOpen] = useState(false)
  const variants = {
    visible: { opacity: 0.2, x: 500, transition: { type: "spring", stiffness: 100, damping: 100 } },
    hidden: { opacity: 0 },
  }

  const items = ["item1", "item2", "item3", "item4"]
  const variants2 = {
    visible: (i) => ({
      opacity: 1,
      transition: { delay: i * 1 }

    }),
    // {opacity:1,x:100,transition:{staggerChildren:2}},
    hidden: { opacity: 0 },
  };

  const variants3 = {
    visible: { opacity: 1, x: 100, transition: { staggerChildren: 2 } },
    hidden: { opacity: 0 },
  };

  return (
    <div className='motion'>
      {/* <motion.div className="box"
        variants={variants}
        animate={open?"visible":"hidden"}
        // transition={{ duration: 2 }}
        // initial={{opacity:0.5,scale:0.5}}
        // animate={{opacity:1,scale:1 , x:200, y:500}}
        // whileInView={{opacity:1,scale:2}}
        // drag
        >
        </motion.div>
        <button onClick={()=>{setOpen(prev=>!prev)}}>Click</button> */}

      <motion.ul initial="hidden" animate="visible" variants={variants2}>
        {items.map((item, i) => {
          return <motion.li variants={variants2} key={item + i} custom={i}>
            {item}
          </motion.li>
        })}
      </motion.ul>
    </div>
  )
}
