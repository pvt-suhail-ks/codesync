// Contact.jsx
import React from 'react';
import './Contact.css';
import ContactForm from './Contactform';
import email from '../../asstes/icons/Email.png';
import discord from '../../asstes/icons/Discord.png';
import instagram from '../../asstes/icons/Instagram.png';
import phone from '../../asstes/icons/Phone.png';

function Contact() {
  return (
    <div id='contact' className="contact-container">
      <div className="left-sec">
        <h1 className='contact-us'>Contact us</h1>
        <ContactForm />
      </div>
      <div className="right-sec">
        <h1 className='lets-talk'>Lets talk and build</h1>
        <p>
          I'm here to help if you're searching for a Web Designer <br className="desktop-br" />
          to bring your idea to life or a design partner to help take your <br className="desktop-br" />
          business to the next level.
        </p>
        <ul className="contact-list">
          <li>
            <img src={email} alt="Email" />
            <span>Email: <strong>Codesync@Gmail.Com</strong></span>
          </li>
          <li>
            <img src={phone} alt="Phone" />
            <span>Phone: <strong>123-456-789-0</strong></span>
          </li>
          <li>
            <img src={instagram} alt="Instagram" />
            <span>Instagram: <strong>@CodesyncDev</strong></span>
          </li>
          <li>
            <img src={discord} alt="Discord" />
            <span>Discord: <strong>Codesync.GG</strong></span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Contact;