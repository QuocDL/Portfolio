import { useRef } from 'react'
import './portfolio.scss'
import {motion, useScroll, useSpring, useTransform} from "framer-motion"

const items= [
    {
        id: 1,
        title: "ANGULAR WEB GAME",
        img: "https://www.tangolearn.com/wp-content/uploads/2021/05/best-angular-training-courses-online-1.jpg",
        desc: "Đây một dự án cá nhân. Sử dụng công nghệ: Angular, json-server, tailwindcss. Chức năng có trong trang web: CRUD, hiển thị sản phẩm, chi tiết sản phẩm",
    },
      {
        id: 2,
        title: "HTML CSS ADMIN DASHBOARD",
        img: "https://themewagon.com/wp-content/uploads/2021/11/celestial-1.png",
        desc: "Đây một dự án cá nhân. Sử dụng công nghệ: HTML/CSS/JS. Chức năng: Chế độ tối và sáng, Có responsive",
    },
      {
        id: 3,
        title: "GIAO DIỆN CLASH OF CLANS GOLBINS",
        img: "https://s3-alpha.figma.com/hub/file/3879213960/195d680c-82f7-4efe-9002-1c56dbe942b5-cover.png",
        desc: "Đây là một dự án dựa theo dự án có sẵn. Công nghệ sử dụng: HTML / CSS. Có responsive",
    },
]

const Single = ({item}) =>{
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target: ref,
        // offset: ["start start", ["end start"]]
    })
    const y = useTransform(scrollYProgress, [0, 1], [-300, 300])
    return(
        <section>
            <div className='container'>
                <div className="wrapper">
                    <div className="mediaWork" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="contentWork" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>Xem Github</button>
                </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {
    const ref = useRef()
    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    })
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

  return (
    <div className='portfolio'
    ref={ref}
    >
        <div className="progress">
            <h1>Dự án nổi bật</h1>
            <motion.div style={{scaleX}} className="progessBar"></motion.div>
        </div>
        {items.map(item=>(
            <Single item ={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio
