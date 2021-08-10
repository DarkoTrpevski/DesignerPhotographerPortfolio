import React from "react";
import { motion } from "framer-motion";

const variants = {
  hover: {
    x: 50,
    scale: [1.1, 1],
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
  },
  initial: {
    x: 0,
    scale: 1,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
  }
};

// Word wrapper
const Wrapper = props => {
  // We'll do this to prevent wrapping of words using CSS
  return <span className="word-wrapper">{props.children}</span>;
};

// Map API "type" vaules to JSX tag names
const tagMap = {
  paragraph: "p",
  heading1: "h1",
  heading2: "h2"
};

// AnimatedCharacters
// Handles the deconstruction of each word and character to setup for the
// individual character animations
const AnimatedCharacters = props => {

  const { isHovered } = props;

  // Framer Motion variant object, for controlling animation
  const item = {
    hover: {
      x: 50,
      delay: 0.2,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    },
    initial: {
      x: 0,
      delay: 0.2,
      transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
    }
  };

  //  Split each word of props.text into an array
  const splitWords = props.text.split(" ");

  // Create storage array
  const words = [];

  // Push each word into words array
  for (const [index, item] of splitWords.entries()) {
    words.push(item.split(""));
  }

  // Add a space ("\u00A0") to the end of each word
  words.map(word => {
    return word.push("\u00A0");
  });

  // Get the tag name from tagMap
  const Tag = tagMap[props.type];

  return (
    <Tag>
      {words.map((word, index) => {
        return (
          <Wrapper key={index} isHovered={isHovered}>
            {words[index].flat().map((element, index) => {
              return (
                <span style={{ overflow: "hidden", display: "inline-block" }} key={index}>
                  <motion.span animate={isHovered ? "hover" : "initial"} style={{ display: "inline-block" }} variants={item} transition={{ delay: 0.2 }}>
                    {element}
                  </motion.span>
                </span>
              );
            })}
          </Wrapper>
        );
      })}
    </Tag>
  );
};

export default AnimatedCharacters;