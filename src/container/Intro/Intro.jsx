import React from 'react';
import { BsVolumeUpFill, BsVolumeMuteFill } from 'react-icons/bs';

import { SpeakEasy } from '../../constants';
import './Intro.css';

const Intro = () => {
  const [isMuted, setIsMuted] = React.useState(true);
  const vidRef = React.useRef();

  React.useEffect(() => {
    const video = vidRef.current;
    if (video) {
      video.play().catch((error) => {
        // parfois autoplay est bloqué tant qu’il n’y a pas d’interaction utilisateur
        console.warn('Autoplay bloqué:', error);
      });
    }
  }, []);

  const toggleMute = () => {
    const video = vidRef.current;
    if (video) {
      const newMutedState = !isMuted;
      video.muted = newMutedState;
      setIsMuted(newMutedState);
      if (!newMutedState) {
        // Force play dans le cas où un changement de mute est rejeté par le navigateur
        video.play().catch((e) => console.log('play error:', e));
      }
    }
  };

  return (
    <div className="app__video">
      <video
        ref={vidRef}
        src={SpeakEasy}
        type="video/mp4"
        loop
        autoPlay
        muted
        playsInline
      >
        <track kind="captions" srcLang="fr" label="Français" />
      </video>
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={toggleMute}
        >
          {isMuted ? (
            <BsVolumeMuteFill color="#fff" fontSize={30} />
          ) : (
            <BsVolumeUpFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
