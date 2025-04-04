// Services.jsx
import React from 'react';
import './Services.css';
import Servicecard from './Servicecard.jsx';

function Services() {
  return (
    <div className='main-services' id='services'>
        <h1 className='title'>Services</h1>
        <Servicecard />
    </div>
  );
}

export default Services;