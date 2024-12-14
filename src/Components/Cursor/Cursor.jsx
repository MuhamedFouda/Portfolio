import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import "./Cursor.scss"
export default function Cursor() {
    const[postition, setPosition]=useState({x:0,y:0})
    useEffect(()=>{
        const onMouseMove=(e)=>setPosition({x:e.clientX, y:e.clientY})
        window.addEventListener("mousemove",onMouseMove)
        return ()=>window.removeEventListener("mousemove",onMouseMove)
    },[])
  return (
    <motion.div className="cursor" animate={{x:postition.x+30,y:postition.y-30}}>
      
    </motion.div>
  )
}
