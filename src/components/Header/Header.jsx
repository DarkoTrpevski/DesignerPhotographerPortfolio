import React, { useRef } from "react";
import { Link } from "gatsby";
import { Container, Flex } from "../../styles/globalStyles";
import { HeaderNav, Logo, Menu } from "../../styles/headerStyles";
import Bars from "./Bars/Bars";
import { ProfileNav } from "../../styles/heroSectionStyles";

const Header = ({ siteTitle, onClick, navState }) => {

  
  return (
    // <HeaderNav initial={{ y: -72, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, ease: [0.6, 0.05, -0.01, 0.9] }} className="Header">
    <HeaderNav className="Header">
      <Container>
        <Flex spaceBetween noHeight>
          <Logo>
            <Link to="/">{siteTitle}</Link>
          </Logo>
          <ProfileNav className="ProfileNav">
            <a href="#!">Designer</a>
            <span></span>
            <a href="#!">Photographer</a>
          </ProfileNav>
          <Bars onClick={onClick} navState={navState} />
        </Flex>
      </Container>
    </HeaderNav>
  )
}

export default Header;