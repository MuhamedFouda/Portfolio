// import React, { useRef } from 'react'
import { useRef, useState } from "react"
import "./Services.scss"
import { motion, useInView } from 'framer-motion'
export default function Services() {

    // const ref=useRef()
    // const{scrollYProgress}=useScroll({
    //     target:ref,
    //     offset:["start start","start end"],
    //     type: "continuous",
    //     scrollBehavior: "smooth",
    //     threshold: 5,
    // })
    // const transform=useTransform(scrollYProgress,[0,1],["0","100%"])


    // var variants=()=>{
    //     if ($(window).width() >= 768) {
    //          return {
    //             initial: { x: -500, y: 100, opacity: 0 },
    //             animate: { x: 0, y: 0, opacity: 1, transition: { duration: 2, staggerChildren: 0.1 } },
    //         }
    //     } else {
    //          return {
    //             initial: { x: -500, y: 100, opacity: 0 },
    //             animate: { x: 0, y: 0, opacity: 1, transition: { duration: 2, staggerChildren: 0.1 } },
    //         }
    //     }
    // }

    const variants={
        initial: {x:-100 ,y:100 ,opacity: 0},
        animate: {x: 0 ,y:0 ,opacity: 1, transition:{duration:2,staggerChildren:0.1}},
    }

    const ref = useRef()
    const isInVeiw = useInView(ref, { margin: "-100px" })
    return (
        <motion.div className='services' ref={ref} variants={variants} initial="initial" animate={isInVeiw && "animate"}>
            <motion.div className="textContainer" variants={variants}>
                <p>I Focus on helping your brand grow <br /> and move forward</p>
                <hr />
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src='/people.webp' alt='title picture' loading="lazy" />
                    <h1> <motion.b whileHover={{ color: 'orange' }}>Unique</motion.b> Ideas </h1>
                </div>
                <div className="title">
                    <h1> <motion.b whileHover={{ color: 'orange' }}>For Your</motion.b> Business </h1>
                    <button> WHAT I DO </button>
                </div>
            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{ background: "lightgray", color: 'black' }}>
                    <h2>Responsive Web Development </h2>
                    <p>Seamlessly adapting websites for all screen sizes, from desktops to mobile devices, ensuring a consistent and engaging user experience.</p>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: 'black' }}>
                    <h2>Dynamic Web Applications</h2>
                    <p>Building interactive, scalable, and fast single-page applications (SPAs) using framework React.js,</p>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: 'black' }}>
                    <h2>Performance Optimization</h2>
                    <p>Enhancing website speed and accessibility by applying advanced optimization techniques for better user engagement and search engine visibility.</p>
                </motion.div>
                <motion.div className="box" whileHover={{ background: "lightgray", color: 'black' }}>
                    <h2>Interactive Elements</h2>
                    <p>Creating engaging user experiences using animations, transitions, or libraries like GSAP or Framer Motion.</p>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}
