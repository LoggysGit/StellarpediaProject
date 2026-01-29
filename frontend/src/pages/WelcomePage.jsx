// === Dependences ===
import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// === Components ===
import BGParallaxElement from '../components/BGParallaxElement';
import Header from '../components/Header';
// === Style ===
import './styles/WelcomePage.css';

function WelcomePage() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  return (
    <div>
        <Header/>
        <div id="main-container">
          <BGParallaxElement>
            <p>Our incredible motto</p>
          </BGParallaxElement>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus elit ac diam commodo cursus. Nam ac vulputate ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur rhoncus elit ac diam commodo cursus. Nam ac vulputate ex. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer placerat. </p>
        </div>
    </div>
  );
}

export default WelcomePage