import "./hero.scss"
import {motion} from 'framer-motion'

const textVariants= {
    initial: {
        x: -500,
        opacity: 0
    },
    animate:{
        x: 0,
        opacity: 1,
        transition:{
            duration: 1,
            staggerChildren: 0.1
        }
    },
    scrollButton:{
        opacity: 0,
        y:10,
        transition:{
            duration: 2,
            repeat: Infinity
        }
    }
}
const slidingVariants= {
    initial: {
        x: 0,
    },
    animate:{
        x: "-220%",
        transition:{
            repeat: Infinity,
            repeatType: "mirror",
            duration: 20
        }
    }
}
const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div className="contentContainer" 
            variants={textVariants} 
            initial="initial" 
            animate="animate">
                <motion.h2 variants={textVariants}>Lương Chính Quốc</motion.h2>
                <motion.h1 variants={textVariants}>Front end developer and UI designer</motion.h1>
                <motion.div variants={textVariants} className="action">
                    <motion.button variants={textVariants}>Xem dự án</motion.button>
                    <motion.button variants={textVariants}>Liên hệ</motion.button>
                </motion.div>
                <motion.img variants={textVariants} animate="scrollButton" src="./scroll.png" alt="" />
            </motion.div>
        </div>
        <motion.div className="sliding" variants={slidingVariants} initial="initial" animate="animate">
This website is using React
        </motion.div>
        <div className="imgContainer">
            <img src="./public/hero.jfif" width={480}  alt="" />
        </div>
    </div>
  )
}

export default Hero
