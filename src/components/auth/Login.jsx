// client/src/components/auth/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';

function Login({ setToken }) {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', formData);
      setToken(res.data.token);
      localStorage.setItem('token', res.data.token); // Store token
      setMessage('Login successful');
      setFormData({ email: '', password: '' });
    } catch (error) {
      setMessage(error.response?.data.message || 'Error logging in');
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Login</button>
      </form>
      {message && <p className="message">{message}</p>}
      <p>Don't have an account? <a href="/register">Register here</a></p>
    </div>
  );
}

export default Login;