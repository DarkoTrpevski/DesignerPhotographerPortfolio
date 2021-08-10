import { motion } from "framer-motion"
import styled from "styled-components"

export const AppWrapper = styled.div`
  position: relative;
`
export const ContainerWrapper = styled.div``
export const HeroSectionWrapper = styled.section`
  position: relative;
  /* overflow: hidden; */
  width: 100%;
  height: 100vh;
  padding: 17vh 0;
  @media (min-width: 980px) {
    padding: 135px 0;
  }
`
export const Footer = styled.footer`
  display: block;
  font-size: 1.2rem;
  font-weight: 300;
  letter-spacing: 2px;
  opacity: .4;
  text-transform: uppercase;
  margin: 130px 5vw 80px 5vw;
`
export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
  margin: 0 auto;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  z-index: 22;
  @media (min-width: 980px) {
    padding: 4rem 8rem;
  }

  .Logo {
    width: 100px;
    padding: 1rem 0;
    display: block;
    font-size: 18px;
    line-height: 110%;
    opacity: .3;
    font-weight: 300;
    transition: opacity cubic-bezier(0.51, 0.07, 0.47, 0.91) 0.3s;
    cursor: none!important;
    transition: all cubic-bezier(0.51, 0.07, 0.47, 0.91) 0.3s;
    &:hover {
      opacity: 1;
    }

    @media (min-width: 480px) {
      width: auto;
    }
  }

  .nav-list {
    display: flex;
    align-items: center;
    /* position: fixed; */
    /* top: 27px; */
    /* right: 25px; */
    z-index: 10;
    margin: 0;

    @media (min-width: 980px) {
      top: 56px;
      right: 80px;
      font-size: 1.8rem;
    }    
    li {
      &:not(:last-child) {
        margin-right: 2rem;
      }
      a {
        display: block;
        font-size: 2rem;
        line-height: 1;
      }
    }
  }
`
export const ProfileNav = styled.div`
  width: 350px;
  display: none;
  align-items: center;
  overflow: hidden;
  color: #FFF;
  transform: translateX(19.5px);
  transition: transform cubic-bezier(0.51, 0.07, 0.47, 0.91) 0.5s, opacity cubic-bezier(0.51, 0.07, 0.47, 0.91) 0.3s, -webkit-transform cubic-bezier(0.51, 0.07, 0.47, 0.91) 0.5s;
  z-index: 9999;

  span {
    width: 54px;
    height: 1px;
    background-color: rgba(255,255,255,0.2);
    display: inline-block;
    vertical-align: middle;
    transition: transform cubic-bezier(0.51, 0.07, 0.47, 0.91) 0.4s, opacity cubic-bezier(0.51, 0.07, 0.47, 0.91) 0.4s, -webkit-transform cubic-bezier(0.51, 0.07, 0.47, 0.91) 0.4s;
  }
  a {
    display: inline-block;
    vertical-align: middle;
    padding: 10px;
    font-size: 18px;
    opacity: .4;
    font-weight: 300;
    cursor: none !important;
    transition: all cubic-bezier(0.51, 0.07, 0.47, 0.91) 0.3s;
    &:hover {
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    display: flex;
  }
  @media (min-width: 980px) {
    /* top: 35px; */
  }

`
export const HeroWrap = styled.div`
  z-index: 2;
  position: relative;
  /* max-width: 1380px; */
  width: calc(100% - 40px);
  margin: 0 auto;
  height: 100%;

  @media (min-width: 980px) {
    width: calc(100% - 300px);
  }
`
export const HeroContent = styled.div`
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  padding: 60px 0 30px 0;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;

  @media (min-width: 980px) {
    padding-top: 20px;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    height: 100%;
  }

  .left {
    -webkit-box-flex: 0;
    -ms-flex: 0 0 100%;
    flex: 0 0 100%;
    @media (min-width: 980px) {
      -webkit-box-flex: 0;
      -ms-flex: 0 0 64%;
      flex: 0 0 64%;
    }
  }
`
export const ContentProfileNav = styled.div`
    width: auto;
    display: block;
    position: relative;
    margin: 0 0 30px 0;
    margin-left: 6vw;
    padding-left: 0;
    -webkit-transform: none;
    transform: none;
    transition: transform cubic-bezier(0.51, 0.07, 0.47, 0.91) 0.5s, opacity cubic-bezier(0.51, 0.07, 0.47, 0.91) 0.3s, -webkit-transform cubic-bezier(0.51, 0.07, 0.47, 0.91) 0.5s;
  span {
    width: 54px;
    height: 1px;
    background-color: rgba(255,255,255,0.2);
    display: inline-block;
    vertical-align: middle;
    transition: transform cubic-bezier(0.51, 0.07, 0.47, 0.91) 0.4s, opacity cubic-bezier(0.51, 0.07, 0.47, 0.91) 0.4s, -webkit-transform cubic-bezier(0.51, 0.07, 0.47, 0.91) 0.4s;
  }
  a {
    display: inline-block;
    vertical-align: middle;
    padding: 10px;
    font-size: 18px;
    opacity: .4;
    font-weight: 300;
    cursor: none !important;
    transition: all cubic-bezier(0.51, 0.07, 0.47, 0.91) 0.3s;
    &:hover {
      opacity: 1;
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`
export const HeroHeadLine = styled.h2`
  margin-top: 0;
  margin-left: 6vw;
  font-size: calc(16px + 2.5vw);
  line-height: 150%;
  color: #FFF;
  font-weight: 300;
  letter-spacing: .5px;
  max-width: 1580px;
  width: 60vw;
  position: relative;
  z-index: 9999;

  span, em {
    font-size: 100%;
  }
`
export const HeroImage = styled.figure`
  width: 38%;
  bottom: 0;
  right: 170px;
  max-height: calc(100% - 150px);
  pointer-events: none;
  position: absolute;
  margin: auto;
  opacity: 1;
  transition: transform cubic-bezier(0.51, 0.07, 0.16, 0.96) 1s;
  overflow: hidden;

  @media (max-width: 720px) {
    width: 80%;
    right: 0;
    left: 0;
  }

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`
export const HeroImageReveal = styled(motion.div)`
  content: '';
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #181818;
  transition: width cubic-bezier(0.15, 0.3, 0.16, 0.96) 1.6s, transform cubic-bezier(0.15, 0.3, 0.16, 0.96) 2.4s;
`
export const RotateSuggestor = styled.div``

export const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

export const imageReveal = {
  default: {
    width: "100%"
  },
  revealed: {
    width: 0,
    transition: {
      delay: 1.5,
      ease: [0.15, 0.3, 0.16, 0.96]
    }
  }
}
 export const titleAnimation = {
  hidden: { filter: `blur(5px)`, opacity: 0 },
  show: {
    opacity: 1,
    filter: `blur(0px)`,
    transition: { duration: 2, delay: 0.5, ease: [0.15, 0.3, 0.16, 0.96] },
  },
};