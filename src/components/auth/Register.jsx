// client/src/components/auth/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './Auth.css';

function Register() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/register', formData);
      setMessage(res.data.message);
      setFormData({ email: '', password: '' });
    } catch (error) {
      setMessage(error.response?.data.message || 'Error registering');
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} required />
        </div>
        <button type="submit">Register</button>
      </form>
      {message && <p className="message">{message}</p>}
      <p>Already have an account? <a href="/login">Login here</a></p>
    </div>
  );
}

export default Register;