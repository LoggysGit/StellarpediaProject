import { useRef } from 'react';
import './styles/BGParallaxElement.css';

const BGParallaxElement = ({ children }) => {
  return (
    <div id='content-holder'>
      <div id='back'>
        <div id='content'>
          {children}
        </div>
      </div>
    </div>
  );
};


export default BGParallaxElement;
