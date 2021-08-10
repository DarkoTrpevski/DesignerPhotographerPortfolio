import React from "react";
import { Link } from "gatsby";
import { motion, AnimatePresence } from "framer-motion";
import { Container, Flex } from "../../styles/globalStyles";
import { Nav, NavBefore, NavWrapper, NavList, NavFooter, FooterContent, FooterSocial } from "../../styles/navigationStyles";
// import { FooterContent, FooterSocial } from "../../styles/footerStyles";
import { Instagram, Facebook, Vimeo } from "../../assets/social-icons";

const navRoutes = [
  { id: 0, title: "Home", path: "/" },
  { id: 1, title: "About", path: "/about" },
  { id: 1, title: "Projects", path: "/projects" },
  { id: 1, title: "Contact", path: "/contact" }
]

const Navigation = ({ navState }) => {


  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
        when: "beforeChildren"
      },
    },
  };
  
  const item = {
    hidden: { x: "-100%" },
    show: {
      opacity: 1,
      x: navState.clicked ? 0 : "-100%",
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1
      },
    },
    exit: {
      x: "-100%",
      transition: {
        ease: "easeInOut",
        duration: 0.8,
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        {navState.clicked && (
          <Nav variants={container} initial="hidden" animate="show" exit="exit" className="Navigation">
            <NavBefore variants={item} className="NavBefore" />
            <NavWrapper variants={item} exit={{ transition: { delay: 0.5 } }} className="NavWrapper">
              <Container className="Container">
                <NavList className="NavList">
                  <motion.div className="nav-wrapper">
                    {navRoutes.map((route, idx) => (
                      <motion.li key={idx}>
                        <Link to={route.path}>
                          <motion.div className="link">
                            {route.title}
                          </motion.div>
                        </Link>
                      </motion.li>
                    ))}
                  </motion.div>
                </NavList>
                <NavFooter>
                  <Container>
                    <Flex spaceBetween>
                      <FooterContent>
                        <p>rramos@gmail.com</p>
                      </FooterContent>
                      <FooterContent wider>
                      </FooterContent>
                      <FooterSocial>
                        <a href="https://www.instagram.com/rociorramos/" target="_blank">
                          {/* <a onMouseEnter={() => onCursor("pointer")} onMouseLeave={onCursor} href="/" target="_blank"> */}
                          <Instagram />
                        </a>
                        <a href="https://www.facebook.com/RocioRamosPhotographer" target="_blank">
                          {/* <a onMouseEnter={() => onCursor("pointer")} onMouseLeave={onCursor} href="/" target="_blank"> */}
                          <Facebook />
                        </a>
                        <a href="/" target="_blank">
                          {/* <a onMouseEnter={() => onCursor("pointer")} onMouseLeave={onCursor} href="/" target="_blank"> */}
                          <Vimeo />
                        </a>
                      </FooterSocial>
                    </Flex>
                  </Container>
                </NavFooter>
              </Container>
            </NavWrapper>
          </Nav>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navigation;