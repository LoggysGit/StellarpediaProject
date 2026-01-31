// === Dependences ===
import { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
// === Components ===
import BGParallaxElement from '../components/BGParallaxElement';
import FeatureCarousel from '../components/FeatureCarousel';
import Header from '../components/Header';
import Footer from '../components/Footer';
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
          <FeatureCarousel speed='3.0'></FeatureCarousel>
          <FeatureCarousel speed='-3.0'></FeatureCarousel>
          <BGParallaxElement>
          <div className='qa-box'>
            <p className='text-primary-light heading'>We open for everyone!</p>
            <p className='text-primary-light'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <button>Start Voyage!</button>
          </div>
          </BGParallaxElement>
          <p className='text-primary-dark heading'>Stellarpedia X</p>
          <div id='subscription-box'>
              <div className='subscription-offer'>
                <p id='sub-label'>Free</p>
                <p id='sub-price'>$0/Month</p>
                <ul>
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                </ul>
                <ul id='crossed-list'>
                  <li>Feature 4</li>
                  <li>Feature 5</li>
                </ul>
                <button id='selected-plan-btn'>Your Plan</button>
              </div>
              <div className='subscription-offer'>
                <p id='sub-label'>Montly</p>
                <p id='sub-price'>$5/Month</p>
                <ul>
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                  <li>Feature 4</li>
                  <li>Feature 5</li>
                </ul>
                <button>Details</button>
              </div>
              <div className='subscription-offer'>
                <p id='discount-badge'>-20%</p>
                <p id='sub-label'>Annual</p>
                <p id='sub-price'>$4/Month</p>
                <ul>
                  <li>Feature 1</li>
                  <li>Feature 2</li>
                  <li>Feature 3</li>
                  <li>Feature 4</li>
                  <li>Feature 5</li>
                </ul>
                <button>Details</button>
              </div>
          </div>
        </div>
        <Footer/>
    </div>
  );
}

export default WelcomePage