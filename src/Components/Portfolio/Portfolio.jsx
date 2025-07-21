import { useRef } from "react"
import "./Portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from "framer-motion"
import { projects } from "../../data"

// const items = [
//     {
//         id: 1,
//         name: "Project 1",
//         description: "Dedicate a page on your front end developer website portfolio to describe what kind of services you provide and the work you specialize in. Be concise because your specialties are the things that distinguish you from your competitors.",
//         img: "../../../public/4.png",
//         link: "https://example1.com"
//     },
//     {
//         id: 2,
//         name: "Project 2",
//         description: "Dedicate a page on your front end developer website portfolio to describe what kind of services you provide and the work you specialize in. Be concise because your specialties are the things that distinguish you from yourDedicate a page on your front end developer website portfolio to describe what kind of services you provide and the work you specialize in. ",
//         img: "../../../public/4.png",
//         link: "https://example2.com"
//     },
//     {
//         id: 3,
//         name: "Project 3",
//         description: "Dedicate a page on your front end developer website portfolio to describe what kind of services you provide and the work you specialize in. Be concise because your specialties are the things that distinguish you from your competitors.",
//         img: "../../../public/4.png",
//         link: "https://example2.com"
//     },
//     {
//         id: 4,
//         name: "Project 4",
//         description: "Dedicate a page on your front end developer website portfolio to describe what kind of services you provide and the work you specialize in. Be concise because your specialties are the things that distinguish you from your competitors.",
//         img: "../../../public/4.png",
//         link: "https://example2.com"
//     },
//     // Add more projects here...
// ]

const Single = ({ item }) => {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useTransform(scrollYProgress, [0, 1], [-100, 0])
    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imgContainer" ref={ref}>
                        <img src={item.img} loading="lazy" alt="Image" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h3 >{item.name}</h3>
                        <p>{item.description}</p>
                        <button><a href={item.link} target="_blank">See Demo</a></button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}


export default function Portfolio() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({ target: 0, offset: ["end end", "start start"] });
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{ scaleX }} className="progressBar"></motion.div>
            </div>
            {projects.map((item) => (<Single item={item} key={item.id} />))}
        </div>
    )
}
