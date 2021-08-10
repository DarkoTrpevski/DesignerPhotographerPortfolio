import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types";
import Header from "../components/Header/Header";
import Navigation from "../components/Navigation/Navigation";
import '../sass/main.scss';
import Footer from "../components/Footer/Footer";


const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  const [navState, setNavState] = useState({ clicked: false });

  const handleMenu = () => {
    if (navState.clicked === true) setNavState({ clicked: !navState.clicked })
    if (navState.clicked === false) setNavState({ clicked: !navState.clicked })
  }

  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="Layout">
      <div className="frame frame-top"></div>
      <div className="frame frame-right"></div>
      <div className="frame frame-bottom"></div>
      <div className="frame frame-left"></div>

      <Header navState={navState} setNavState={setNavState} onClick={handleMenu} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} siteTitle={data.site.siteMetadata.title} />
      <Navigation navState={navState} />
      <div>
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout;