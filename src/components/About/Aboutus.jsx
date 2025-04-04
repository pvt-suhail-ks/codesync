// Aboutus.jsx
import React from 'react';
import './Aboutus.css';

function Aboutus() {
  return (
    <div id='about' className='about-container'>
        <h1 className='title'>About us</h1>
        <div className="content-wrapper">
            <h1 className="heading">
                Transforming Ideas into Scalable, <br />
                Affordable Solutions.
            </h1>
            <p className="desc">
                At CodeSync, we empower businesses and individuals by transforming ideas into high-quality, cost-effective technology solutions. <br />
                Our expertise spans UI/UX design, full-stack development, React applications, mobile app development, and academic projects. Whether you're <br />
                a startup building your first product, a business seeking digital transformation, or a student working on an academic project, our team delivers expert solutions tailored to your needs—efficiently and affordably.
            </p>
        </div>
    </div>
  );
}

export default Aboutus;