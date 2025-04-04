// Hero.jsx
import React from 'react';
import './Hero.css';
import logo from '../../asstes/logo.png';

function Hero() {
  return (
    <div id="mainSec" className="hero-container">
        <img className="mainlogo" src={logo} alt="Main Logo" />
        <p className="para">Transforming Ideas into Scalable,<br className="desktop-br" /> Affordable Solutions.</p>
        <button className='button-dis'>Discover More</button>
    </div>
  );
}

export default Hero;