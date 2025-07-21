import "./Hero.scss";
import { motion } from "framer-motion";

export default function Hero() {
    const textVariants = {
        initial: {
            x: -500,
            opacity: 0
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 2,
                staggleChildren: 0.1,
                delay: 1,
            }
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 3,
                repeat: Infinity,
            }
        }
    };
    const slidingVariants = {
        initial: {
            x: 0,
        },
        animate: {
            x: "-220%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 20,
            },
        },
    };

    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
                    <motion.h2 variants={textVariants}>Muhammed Fouda</motion.h2>
                    <motion.h1 variants={textVariants}>Front-end Developer React.js</motion.h1>
                    <motion.h3  variants={textVariants} initial="initial" animate="animate">
                        Front-end Developer and Mentor at EraaSoft
                    </motion.h3>
                    <motion.h3 variants={textVariants} initial="initial" animate="animate">
                        Front-end Developer at Addicta Software Company
                    </motion.h3>
                    <motion.div className="buttons" variants={textVariants}>
                        <motion.button > <a href="#Portfolio">See the latest Works</a></motion.button>
                        <motion.button ><a href="#Contact">Contact Me</a></motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="scroll_img" />
                </motion.div>
            </div>
            <motion.div className="slidingtext" variants={slidingVariants} initial="initial" animate="animate">
                Front-end Developer React.js
            </motion.div>
            <div className="imageContainer">
                <img src="/4.png" loading="lazy" alt='Developer Img' />
            </div>
        </div>
    )
}
