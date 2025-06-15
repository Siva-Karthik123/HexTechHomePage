import '../styles/Hero.css';
import { useState } from 'react';
import heroImage from '../assets/image.png'; // use a placeholder for now
import demoVideo from '../assets/homepage-looping-thumb-2025-compressed.mp4';

function Hero() {
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1 >
          Go deeper than<br />
          <span>dashboards</span>
        </h1>
        <p>
          Hex is the AI-powered analytics workspace built for teams driving faster answers and better decisions.
        </p>
        <div className="hero-buttons">
          <button className="btn-primary">
              <svg fill="none" height="16" viewBox="0 0 16 16" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 11.5L6.75 7L9 9.5L13 5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" opacity="1" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="1px 1px"></path><path d="M10.5 4.5H13.5V7.5" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" opacity="1"></path></svg>
              Get started
          </button>
          <button className="btn-outline">Request a demo</button>
        </div>
      </div>

      <div className="hero-right">
         <div className="hero-video">
            {!isPlaying ? (
              <>
                <img src={heroImage} alt="Demo Preview" />
                <div className="play-button" onClick={() => setIsPlaying(true)}>▶</div>
              </>
            ) : (
              <video controls autoPlay className="video-frame">
                <source src={demoVideo} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
      </div>
    </section>
  );
}

export default Hero;
