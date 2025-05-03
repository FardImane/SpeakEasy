import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Brisons les barrières — chaque voix compte" />
      <h1 className="app__header-h1">SpeakEasy</h1>
      <p className="p__opensans" style={{ margin: '2rem 0', fontStyle: 'italic' }}>
        L’intelligence artificielle qui donne voix aux signes et sens aux mots.
      </p>
      <button type="button" className="custom__button">Let’s go!</button>
    </div>

    <div className="app__wrapper_img framed-corners">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
