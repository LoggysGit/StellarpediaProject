import { useEffect, useRef, useState } from 'react'

import '../assets/variables.css'
import './styles/FeatureCarousel.css'

const carousel_cards = [
  { content: 'Lorem ipsum', icon: 'image1.svg' },
  { content: 'Lorem ipsum', icon: 'image2.svg' },
  { content: 'Lorem ipsum', icon: 'image3.svg' },
  { content: 'Lorem ipsum', icon: 'image4.svg' },
  { content: 'Lorem ipsum', icon: 'image5.svg' },
  { content: 'Lorem ipsum', icon: 'image6.svg' },
];

function FeatureCarousel() {
  // We double the array so the end matches the beginning visually
  const items = [...carousel_cards, ...carousel_cards];

  return (
    <div className="carousel-window">
      <div className="carousel-track">
        {items.map((c, i) => (
          <div className="carousel-card" key={i}>
            {c.content}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FeatureCarousel;
