import { useRef } from 'react'
import './services.scss'
import {motion, useInView} from 'framer-motion'

const variants = {
    initial:{
        x: -500,
        y: 100,
        opacity: 0
    },
    animate:{
        x: 0,
        opacity: 1,
        y: 0,
        transition:{
            duration: 1,
            staggerChildren: 0.1,
        }
    }
}


const Services = () => {
    const ref = useRef()
    const inView = useInView(ref, {margin: "-100px"})
  return (
    <motion.div className='services' 
    variants={variants} 
    initial="initial"  
    animate={"animate"}
    ref={ref}
    >
      <motion.div className="text">
        <p>Tôi tập trung vào việc giúp thương hiệu của bạn phát triển
            <br /> và tiến về phía trước</p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer">
            <div className="title">
                <img src="./people.webp" alt="" />
                <h1>Ý Tưởng <motion.b whileHover={{color: "white"}}>Độc Đáo</motion.b></h1>
            </div>
            <div className="title">
                <h1>
                    Cho <motion.b whileHover={{color: "white"}}>Doanh Nghiệp</motion.b> Của Bạn.
                </h1>
                <button>Tôi có thể làm gì?</button>
            </div>
      </motion.div>
      <motion.div className='list'>
            <motion.div className="box" whileHover={{background:"lightgray", color: "black"}}>
                <h2>Thương hiệu</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button>Đi tới</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color: "black"}}>
                <h2>Thương hiệu</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <button>Đi tới</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color: "black"}}>
                <h2>Thương hiệu</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button>Đi tới</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray", color: "black"}}>
                <h2>Thương hiệu</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <button>Đi tới</button>
            </motion.div>
            
      </motion.div>
    </motion.div>
  )
}

export default Services
