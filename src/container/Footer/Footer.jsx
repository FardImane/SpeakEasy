import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';

import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding" id="contact">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      {/* Contact */}
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Nous contacter</h1>
        <p className="p__opensans">Paris, France</p>
        <p className="p__opensans">contact@speakeasy.fr</p>
        <p className="p__opensans">+33 1 23 45 67 89</p>
      </div>

      {/* Logo + citation + réseaux sociaux */}
      <div className="app__footer-links_logo">
        <img src={images.SpeakEasy} alt="logo_footer" />
        <p className="p__opensans">
          "La meilleure façon de se comprendre est de tendre la main à ceux qu’on n’entend pas toujours."
        </p>
        <img src={images.spoon} className="spoon__img" style={{ marginTop: 15 }} />
        <div className="app__footer-links_icons">
          <a href="https://www.facebook.com/SpeakEasy" target="_blank" rel="noopener noreferrer"><FiFacebook /></a>
          <a href="https://twitter.com/SpeakEasy" target="_blank" rel="noopener noreferrer"><FiTwitter /></a>
          <a href="https://instagram.com/SpeakEasy" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
        </div>
      </div>

      {/* Équipe */}
      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Équipe SpeakEasy</h1>

        <p className="p__opensans">
          <a href="https://www.linkedin.com/in/imane-fard-a45961218/" target="_blank" rel="noopener noreferrer">
            Imane FARD  <FaLinkedin style={{ marginLeft: 8 }} />
          </a>
        </p>
        <p className="p__opensans">
          <a href="https://www.linkedin.com/in/kaoutar-belahsen/" target="_blank" rel="noopener noreferrer">
            Kaoutar BELAHSEN  <FaLinkedin style={{ marginLeft: 8 }} />
          </a>
        </p>
        <p className="p__opensans">
          <a href="https://www.linkedin.com/in/anissa-rasoanirina-6b5198246/" target="_blank" rel="noopener noreferrer">
            RASOANIRINA Anissa <FaLinkedin style={{ marginLeft: 8 }} />
          </a>
        </p>
        <p className="p__opensans">
          <a href="https://www.linkedin.com/in/sarah-mesroua/" target="_blank" rel="noopener noreferrer">
            Sarah MESROUA  <FaLinkedin style={{ marginLeft: 8 }} />
          </a>
        </p>
        <p className="p__opensans">
          <a href="https://www.linkedin.com/in/belmadi-ghizlane-256aa11a3/" target="_blank" rel="noopener noreferrer">
            Ghizlane BELMADI  <FaLinkedin style={{ marginLeft: 8 }} />
          </a>
        </p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">© 2025 SpeakEasy. Tous droits réservés.</p>
    </div>
  </div>
);

export default Footer;
