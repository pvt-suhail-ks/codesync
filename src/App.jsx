// client/src/App.jsx
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/NavBar.jsx';
import Hero from './components/hero/Hero.jsx';
import bg from './asstes/bgimg.png';
import Aboutus from './components/About/Aboutus.jsx';
import Services from './components/Service/Services.jsx';
import Contact from './components/contact/contact.jsx';
import Admin from './components/Admin/Admin.jsx';
import Register from './components/auth/Register.jsx';
import Login from './components/auth/Login.jsx';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    const elements = document.querySelectorAll(".scroll-fade");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => {
      clearTimeout(timer);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const handleSetToken = (newToken) => {
    setToken(newToken);
    if (newToken) {
      localStorage.setItem('token', newToken);
    } else {
      localStorage.removeItem('token');
    }
  };

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="spinner"></div>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <Router>
      <div className="app-container">
        <img className="bgimg" src={bg} alt="Background" />
        <NavBar token={token} setToken={handleSetToken} />
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero className="scroll-fade" />
                  <Aboutus className="scroll-fade" />
                  <Services className="scroll-fade" />
                  <Contact className="scroll-fade" />
                </>
              }
            />
            <Route path="/admin" element={<Admin className="scroll-fade" token={token} />} />
            <Route path="/register" element={<Register className="scroll-fade" />} />
            <Route path="/login" element={<Login className="scroll-fade" setToken={handleSetToken} />} />
          </Routes>
        </main>
        <footer className="scroll-fade">
          <p>Copyright © 2025, All rights to <a href="#">codzSync</a></p>
        </footer>
      </div>
    </Router>
  );
}

export default App;