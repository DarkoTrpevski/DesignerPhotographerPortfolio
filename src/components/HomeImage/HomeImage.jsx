import React from 'react';
import { motion } from "framer-motion";
import './HomeImage.scss';


const HomeImage = ({ loading }) => {
  return (
    <div className="HomeImage">
      {!loading && (
        <div className='transition-image final'>
          <motion.img
            transition={{ ease: [0.6, 0.01, -0.05, 0.9], duration: 1.6 }}
            src="/images/chanel.jpg"
            layoutId='main-image-1'
          />
        </div>
      )}
    </div>
  )
}

export default HomeImage