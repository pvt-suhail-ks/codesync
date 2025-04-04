// client/src/components/navbar/NavBar.jsx
import React, { useState, useEffect } from 'react';
import './Navbar.css';
import miniLogo from '../../asstes/mini-logo.png';

function NavBar({ token, setToken }) {
  const [activeLink, setActiveLink] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActiveLink(window.location.pathname);
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    setToken('');
    window.location.href = '/'; // Redirect to home after logout
  };

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <img className="minilogo" src={miniLogo} alt="Mini Logo" />
      <div className="rightSec">
        <ul>
          <li>
            <a href="/" className={activeLink === '/' ? 'active-link' : ''} onClick={() => setActiveLink('/')}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={activeLink === '#about' ? 'active-link' : ''} onClick={() => setActiveLink('#about')}>
              About us
            </a>
          </li>
          <li>
            <a href="#services" className={activeLink === '#services' ? 'active-link' : ''} onClick={() => setActiveLink('#services')}>
              Services
            </a>
          </li>
          <li>
            <a href="#contact" className={activeLink === '#contact' ? 'active-link' : ''} onClick={() => setActiveLink('#contact')}>
              Contact Us
            </a>
          </li>
          {token ? (
            <>
              <li>
                <a href="/admin" className={activeLink === '/admin' ? 'active-link' : ''} onClick={() => setActiveLink('/admin')}>
                  Admin
                </a>
              </li>
              <li>
                <button onClick={handleLogout} className="logout-btn">Logout</button>
              </li>
            </>
          ) : (
            <>
              <li>
                <a href="/login" className={activeLink === '/login' ? 'active-link' : ''} onClick={() => setActiveLink('/login')}>
                  Login
                </a>
              </li>
              <li>
                <a href="/register" className={activeLink === '/register' ? 'active-link' : ''} onClick={() => setActiveLink('/register')}>
                  Register
                </a>
              </li>
            </>
          )}
        </ul>
      </div>
    </div>
  );
}

export default NavBar;