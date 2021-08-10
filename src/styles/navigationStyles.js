import styled, { css } from "styled-components";
import { motion } from "framer-motion";

export const Nav = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  color: #000;
  z-index: 100;
  overflow: hidden;
`
export const NavBefore = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  background: #fff;
  color: #000;
  overflow: hidden;
`
export const NavWrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  display: block;
  background: var(--bg-clr);
  border-right: 2px solid var(--gold-clr);
  color: #000;
`

export const NavList = styled.ul`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0;
  .nav-wrapper {
    li {
      list-style: none;
      font-size: 3rem;
      text-transform: uppercase;
      text-align: start;

      margin-bottom: 1rem;
      :last-child {
        margin-bottom: 0;
      }
      .link {
        color: #fff;
        position: relative;
        display: flex;
        align-items: center;
      }
    }
  }


`
export const NavFooter = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 56px 0px;
  p {
    color: #fff;
  }
  svg path {
    fill: #fff;
  }
`

export const FooterContent = styled.div`
  flex: 1;
  color: #ea281e;
  font-size: 22px;
  font-weight: 600;
  line-height: 8px;
  user-select: none;
  ${props => props.wider && css` flex: 2; `}
`

export const FooterSocial = styled.div`
  display: flex;
  a {
    svg {
      width: 20px;
      height: 20px;
    }
  }
`