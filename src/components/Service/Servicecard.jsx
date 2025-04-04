// Servicecard.jsx
import React from 'react';
import './Servicecard.css';

import figma from '../../asstes/Figma.png';
import lua from '../../asstes/Lua.png';
import reactLogo from '../../asstes/React.png';
import webDev from '../../asstes/WebDev.png';
import project from '../../asstes/Project.png';
import discord from '../../asstes/Discord.png';
import java from '../../asstes/Java.png';
import android from '../../asstes/Android.png';

const services = [
    { img: figma, title: "FIGMA", desc: "We provide UI/UX design at an affordable price." },
    { img: reactLogo, title: "REACT", desc: "Build fast and scalable front-end applications with React." },
    { img: webDev, title: "WEB DEV", desc: "Full-stack web development services for modern applications." },
    { img: project, title: "PROJECT", desc: "Help to build your university/school projects." },
    { img: lua, title: "LUA", desc: "Build game scripts in Lua? We're here!" },
    { img: discord, title: "DISCORD", desc: "Need Discord bots? Let us know!" },
    { img: java, title: "JAVA", desc: "Make Java apps for your back-end team." },
    { img: android, title: "ANDROID", desc: "Need Android apps? Let's get started!" }
];

function Servicecard() {
  return (
    <div className='services-container'>
        <div className='servicecards'>
            {services.map((service, index) => (
                <div key={index} className="service-card">
                    <img src={service.img} alt={service.title} />
                    <h2>{service.title}</h2>
                    <p>{service.desc}</p>
                </div>
            ))}
        </div>
    </div>    
  );
}

export default Servicecard;