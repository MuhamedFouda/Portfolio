import React from 'react'
import { motion } from 'motion/react';
export default function Links() {
  const variants={
    open:{
      transtion:{staggerChildren:0.1 ,when:'afterChildren'},
    },
    closed:{
      transtion:{staggerChildren:0.05},
      staggerDirection:-1,
    }
  }
  const itemVariants={
    open:{
      y:0,
      opaccity:1,
      transition:{duration:1,delay:0.3},
    },
    closed:{
      y:50,
      opacity:0,
    }
  }
  const items=["Home","Services","Portfolio","Contact","About"]
  return (
    <motion.div className='links' variants={variants}>
      {items.map((item,i)=>{
        return <motion.a href={`#${item}`} key={item+i} variants={itemVariants} whileHover={{scale:1.2}} whileTap={{scale:0.95}}>{item}</motion.a>
      })}
    </motion.div>
  )
}
