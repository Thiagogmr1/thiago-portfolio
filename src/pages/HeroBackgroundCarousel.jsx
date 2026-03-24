import { useEffect, useState } from 'react';
import '../styles/heroCarousel.css';

import img1 from '../assets/images/carousel/carousel-1.jpg';
import img2 from '../assets/images/carousel/carousel-2.jpg';
import img3 from '../assets/images/carousel/carousel-3.jpg';
import img4 from '../assets/images/carousel/carousel-4.jpg';
import img5 from '../assets/images/carousel/carousel-5.jpg';

const images = [img1, img2, img3, img4, img5];

export default function HeroBackgroundCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
    setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000); // tempo REAL entre trocas

    return () => clearTimeout(timeout);
  }, [activeIndex]);


  return (
    <div className="carousel-container">
      <div className="hero-carousel">
        {images.map((img, index) => (
          <div
            key={index}
            className={`carousel-fade-slide ${
              index === activeIndex ? 'active' : ''
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        <div className="carousel-gradient" />
      </div>
    </div>
  );
}
