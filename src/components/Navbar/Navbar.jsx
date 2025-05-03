import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  const links = ['home', 'about', 'menu', 'awards', 'contact'];

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.SpeakEasy} alt="app__logo" />
        <div>
          <h5 className="app__navbar-logo-text">SpeakEasy</h5>
        </div>
      </div>

      <ul className="app__navbar-links">
        {links.map((link) => (
          <li className="p__opensans" key={link}>
            <a href={`#${link}`}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
          className="menu-icon"
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay animate-slideDown flex__center">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="#home" onClick={() => setToggleMenu(false)}>
                  <span>01.</span> Accueil
                </a>
              </li>
              <li>
                <a href="#about" onClick={() => setToggleMenu(false)}>
                  <span>02.</span> À propos
                </a>
              </li>
              <li>
                <a href="#menu" onClick={() => setToggleMenu(false)}>
                  <span>03.</span> Découvrir
                </a>
              </li>
              <li>
                <a href="#awards" onClick={() => setToggleMenu(false)}>
                  <span>04.</span> Récompenses
                </a>
              </li>
              <li>
                <a href="#contact" onClick={() => setToggleMenu(false)}>
                  <span>05.</span> Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
