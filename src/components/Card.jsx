import React, { useEffect, useRef, useState } from "react"
import './Card.css';
import styled from "styled-components";
import { motion } from "framer-motion";
import AnimatedCharacters from "./AnimatedCharacters/AnimatedCharacters";

const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  user-select: none;
  cursor: pointer;
  margin: 4rem;
  z-index: 10;
  span {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #000;
    border-radius: 50%;
    transition: transform 0.4s linear;
  }
`
const TitleWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 50%;
  z-index: 10;
`


const Card = ({ item }) => {


  const imgRef = useRef(null);
  const btnRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (btnRef && btnRef.current) {
      const btn = btnRef.current;
      btn.addEventListener('mousemove', onMouseMove);
      btn.addEventListener('mouseout', onMouseOut);
      return () => {
        btn.removeEventListener('mousemove', onMouseMove);
        btn.removeEventListener('mouseout', onMouseOut);
      }
    }
  }, [])

  const onMouseMove = (e) => {
    const img = imgRef.current;
    const btn = btnRef.current;
    const bounds = btn.getBoundingClientRect();
    const x = e.pageX - bounds.left - bounds.width / 2;
    const y = e.pageY - bounds.top - bounds.height / 2;
    img.style.transform = "scale(0.9)"
    btn.children[0].style.transform = "translate(" + x * 0.3 + "px, " + y * 0.5 + "px)"
    setIsHovered(true)
  }

  const onMouseOut = (e) => {
    const img = imgRef.current;
    const btn = btnRef.current;
    img.style.transform = "scale(1)"
    btn.children[0].style.transform = "translate(0px, 0px)"
    setIsHovered(false);
  }

  const sentence = { hidden: { opacity: 1 }, visible: { opacity: 1, transition: { delay: 0.5, staggerChildren: 0.08 } } }
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025
      }
    }
  };


  return (
    <article className="item">

      <div className="item__imgwrap">
        <div ref={imgRef} className="item__img" style={{ background: `url("${item.imgSrc}") no-repeat center` }}></div>
      </div>
      <Button href="#!" ref={btnRef} className="MagneticButton">
        <span></span>
      </Button>
      <TitleWrapper initial="hidden" animate="visible" variants={container} className="TitleWrapper">
        <div className="container">
          <AnimatedCharacters isHovered={isHovered} type="heading1" text={item.title} />
        </div>
      </TitleWrapper>
      <div className="item__meta">
        <span className="item__meta-row"><span>By {item.author}</span></span>
        <span className="item__meta-row">{item.date}</span>
      </div>
      <div className="item__excerpt">
        <p>{item.para}</p>
        <a className="item__excerpt-link" href="#content-1"><span>Read more</span></a>
      </div>
    </article>
  )
}

// const Card = ({ item }) => {
//   return (
//     <motion.div layoutId={`item-${item}`} style={{
//         width: "600px",
//         height: "500px",
//         margin: "5rem 2.5rem",
//         borderRadius: "5px",
//         backgroundColor: "darkseagreen",
//         listStyle: "none",
//         textAlign: "center"
//       }}
//     >
//       <Link to={`/page-${item}/`} style={{ display: "block", height: "100%" }}>
//         <StaticImage src="../images/img2.jpg" alt="image1" />
//         <p>Item #{item}</p>
//       </Link>
//     </motion.div>
//   )
// }

export default Card;