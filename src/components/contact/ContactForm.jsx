// ContactForm.jsx
import React, { useState } from 'react';
import './ContactForm.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    phone: '',
    email: '',
    about: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add timestamp to submission
    const submission = {
      ...formData,
      submittedAt: new Date().toISOString()
    };
    
    // Get existing submissions from localStorage or initialize empty array
    const existingSubmissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
    // Add new submission
    existingSubmissions.push(submission);
    // Save back to localStorage
    localStorage.setItem('contactSubmissions', JSON.stringify(existingSubmissions));
    
    console.log('Form Data:', submission);
    // Reset form after submission
    setFormData({ firstName: '', phone: '', email: '', about: '' });
    alert('Message sent successfully!');
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="input-group">
            <label>First Name</label>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
          </div>
        </div>

        <div className="input-group">
          <label>Phone No:</label>
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>

        <div className="input-group">
          <label>About You</label>
          <textarea name="about" value={formData.about} onChange={handleChange} required></textarea>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;