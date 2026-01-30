// === Dependences ===
import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// === Components ===
import BGParallaxElement from '../components/BGParallaxElement';
import FeatureCarousel from '../components/FeatureCarousel';
import Header from '../components/Header';
// === Style ===
import './styles/Common.css';
import './styles/WelcomePage.css';

function WelcomePage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  return (
    <div>
        <Header/>
        <div id="main-container">
          <BGParallaxElement> <p id='motto'>Our incredible, marvellous motto</p> </BGParallaxElement>
          <p className='text-primary-dark' id='intro'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus elit ac diam commodo cursus. Nam ac vulputate ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus elit ac diam commodo cursus. Nam ac vulputate ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat. </p>
          <div className='qa-box'>
            <p className='text-primary-dark heading left-text'>Who are We?</p>
            <p className='text-primary-dark left-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus elit ac diam commodo cursus. Nam ac vulputate ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus elit ac diam commodo cursus. Nam ac vulputate ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat. </p>
          </div>
          <BGParallaxElement>
          <div className='qa-box'>
            <p className='text-primary-light heading right-text'>Our Mission</p>
            <p className='text-primary-light right-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus elit ac diam commodo cursus. Nam ac vulputate ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus elit ac diam commodo cursus. Nam ac vulputate ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat. </p>
          </div>
          </BGParallaxElement>
          <p className='text-primary-dark heading'>What do we have</p>
          <FeatureCarousel></FeatureCarousel>
        </div>
    </div>
  );
}

export default WelcomePage