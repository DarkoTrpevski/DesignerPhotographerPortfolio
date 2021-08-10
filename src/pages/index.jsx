import React from "react";
import { graphql } from "gatsby"
import { AnimatePresence } from 'framer-motion';
// Components
// import Header from "../components/Header/Header";
import Layout from "../layouts/Layout";
import "../sass/main.scss";
import HeroSection from "../components/HeroSection/HeroSection";
import img1 from '../images/1.jpg'
import img2 from '../images/2.jpg'
import img3 from '../images/3.jpg'
import img4 from '../images/4.jpg'
import { StaticImage } from "gatsby-plugin-image";
import CardList from "../components/CardList";
import Hero from "../components/Hero/Hero";

const cardItems = [
  {
    id: 1,
    imgSrc: img1,
    title: "Hypercritical",
    altTitle: "mass",
    para: "Sometimes five Imprimaturs are seen together dialogue-wise in the piazza of one title-page, complimenting and ducking each to other with their shaven reverences, whether the author, who stands by in perplexity at the foot of his epistle, shall to the press or to the sponge.",
    author: "CAROLINE BALLISTE",
    date: "APRIL — 2023"
  },
  {
    id: 2,
    imgSrc: img2,
    title: "Proselyte",
    altTitle: "times",
    para: "Sometimes five Imprimaturs are seen together dialogue-wise in the piazza of one title-page, complimenting and ducking each to other with their shaven reverences, whether the author, who stands by in perplexity at the foot of his epistle, shall to the press or to the sponge.",
    author: "CAROLINE BALLISTE",
    date: "APRIL — 2023"
  },
  {
    id: 3,
    imgSrc: img3,
    title: "Arcadias",
    altTitle: "future",
    para: "Sometimes five Imprimaturs are seen together dialogue-wise in the piazza of one title-page, complimenting and ducking each to other with their shaven reverences, whether the author, who stands by in perplexity at the foot of his epistle, shall to the press or to the sponge.",
    author: "CAROLINE BALLISTE",
    date: "APRIL — 2023"
  },
  {
    id: 4,
    imgSrc: img4,
    title: "Epistletic",
    altTitle: "crave",
    para: "Sometimes five Imprimaturs are seen together dialogue-wise in the piazza of one title-page, complimenting and ducking each to other with their shaven reverences, whether the author, who stands by in perplexity at the foot of his epistle, shall to the press or to the sponge.",
    author: "CAROLINE BALLISTE",
    date: "APRIL — 2023"
  }
]

const IndexPage = ({ data }) => {

  console.log('Inside IndexPage, data is: ', data);

  return (
    <div className="App">
      <AnimatePresence>
        <Layout>
          <HeroSection data={data}/>
        </Layout>
      </AnimatePresence>


    </div >
  );
}

export default IndexPage;
export const pageQuery = graphql`
  query {
    famousPeopleInformation: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            image1alt
            title
            Image01 {
              childImageSharp {
                gatsbyImageData(
                  width: 1000
                  placeholder: BLURRED
                  transformOptions: {cropFocus: CENTER}
                  aspectRatio: 0.7
                )
              }
            }
          }
        }
      }
    }
  }
`