import * as React from "react";
import { Link } from "gatsby";
import Layout from "../layouts/Layout";
import styled from 'styled-components';
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';
import img2 from '../images/img2.jpg'
import { StaticImage } from "gatsby-plugin-image";


const Wrapper = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  background: #fff;
  @media (max-width: 1300px) {
    padding: 2rem;
    font-size: 1rem;
  }
`
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1300px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Social = styled(motion.div)`
  display: flex;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

const Circle = styled.div`
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  background: #353535;
`;

export const pageAnimation = {
  hidden: {
    opacity: 0,
    y: "100%",
    // x: "-100%",
  },
  show: {
    opacity: 1,
    y: 0,
    // x: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.25,
    },
  },
  exit: {
    opacity: 0,
    y: "100%",
    // x: "100%",
    transition: {
      duration: 0.5,
    },
  },
};

export const titleAnimation = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const AboutPage = () => {


  return (
    <AnimatePresence>

      <Layout>
        <Wrapper variants={pageAnimation} initial="hidden" animate="show" exit="exit">
          <Title>
            <Hide>
              <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
            </Hide>
          </Title>


          <div>
            <Hide>
              <Social variants={titleAnimation}>
                <Circle />
                <h2>Send Us A Message</h2>
              </Social>
            </Hide>
            <Hide>
              <Social variants={titleAnimation}>
                <Circle />
                <h2>Send An E-Mail</h2>
              </Social>
            </Hide>
            <Hide>
              <Social variants={titleAnimation}>
                <Circle />
                <h2>Social Media</h2>
              </Social>
            </Hide>
          </div>
          <p>Welcome to your new Gatsby site.</p>
          <p>Now go build something great.</p>
          <Link to="/" style={{ color: "#000" }}>To Home Page</Link>
        </Wrapper>
      </Layout>
    </AnimatePresence>

  )
}
export default AboutPage;