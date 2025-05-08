import React from 'react';

import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Rejoignez-nous" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Parlons inclusion</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Que vous soyez une organisation, un particulier ou simplement curieux, rejoignez notre mouvement. 
          SpeakEasy vous accueille pour construire ensemble un monde plus accessible, plus humain et plus connecté. 
        </p>
        <p className="p__opensans" style={{ marginTop: '1rem' }}>
          Contactez-nous pour collaborer, tester notre solution ou en savoir plus sur nos actions
        </p>
      </div>
      <a
        href="mailto:imanefard.2002@gmail.com"
        className="custom__button"
        style={{ marginTop: '2rem', display: 'inline-block', textDecoration: 'none' }}
      >
        Nous écrire
      </a>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="joinus_img" />
    </div>
  </div>
);

export default FindUs;
