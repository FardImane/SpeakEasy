import React, { useEffect, useRef } from 'react';
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  const scrollRef = useRef(null);
  const directionRef = useRef('right'); // pour alterner gauche ↔ droite

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      current.scrollLeft += direction === 'right' ? 300 : -300;
    }
  };

  // ⏱️ Défilement automatique
  useEffect(() => {
    const interval = setInterval(() => {
      const current = scrollRef.current;
      if (!current) return;

      const maxScroll = current.scrollWidth - current.clientWidth;
      if (current.scrollLeft >= maxScroll) {
        directionRef.current = 'left';
      } else if (current.scrollLeft <= 0) {
        directionRef.current = 'right';
      }

      scroll(directionRef.current);
    }, 800); // toutes les 3 secondes

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app__gallery column-layout">
      <div className="app__gallery-title">
        <SubHeading title="Une vitrine de nos avancées" />
        <h1 className="headtext__cormorant">Accomplissement</h1>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05].map((image, index) => (
            <div className="app__gallery-images_card" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
            </div>
          ))}
        </div>

        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
