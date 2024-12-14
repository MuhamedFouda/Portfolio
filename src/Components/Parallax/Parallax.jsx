import React, { useRef } from 'react'
import "./Parallax.scss"
import { motion , useScroll ,useTransform} from 'framer-motion'
export default function Parallax({ type }) {
    const ref = useRef()
    const {scrollYProgress}=useScroll({
        target:ref,
        offset:["start start","end start"],
        // type: "continuous",
        // scrollBehavior: "smooth",
        // threshold: 1,
    })
    const yText= useTransform(scrollYProgress,[0,1],["0%","500%"])
    const yBg= useTransform(scrollYProgress,[0,1],["0%","100%"])
    return (
        <div className='parallax' 
        ref={ref}
        style={{ background: type === "services" ? "linear-gradient(180deg,#111132,#0c0c1d)" : "linear-gradient(180deg,#111132,#505064)" }}>
            <motion.h1 style={{y:yText}}>{type === "services" ? "what i do ?" : " what i did ?"}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div className="planets" style={{y:yBg,background:`url(${type==="services"?"../../../public/planets.png":"../../../public/sun.png"})`}}></motion.div>
            <motion.div className="stars" style={{x:yBg}}></motion.div>
        </div>
    )
}
