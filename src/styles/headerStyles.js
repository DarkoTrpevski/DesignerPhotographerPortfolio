import styled from "styled-components"
import { motion } from "framer-motion"

export const HeaderNav = styled(motion.div)`
  width: 100%;
  position: fixed;
  top: 8rem;
  right: 0;
  left: 0;
  z-index: 101;
`
export const Logo = styled.div`
  user-select: none;
  a {
    font-size: 1.8rem;
    text-decoration: none;
    font-weight: 800;
    color: #000;
    color: #fff;
    user-select: none;
  }
  span {
    height: 16px;
    width: 16px;
    background: #ea291e;
    margin: 0 4px;
    border-radius: 100%;
    display: inline-block;
    position: relative;
    bottom: 2px;
    user-select: none;
  }
`