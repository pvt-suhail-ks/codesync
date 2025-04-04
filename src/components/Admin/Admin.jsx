// Admin.jsx
import React, { useState, useEffect } from 'react';
import './Admin.css';

function Admin() {
  const [submissions, setSubmissions] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // Load submissions from localStorage on mount
  useEffect(() => {
    const storedSubmissions = JSON.parse(localStorage.getItem('contactSubmissions')) || [];
    setSubmissions(storedSubmissions);
  }, []);

  // Simple password check (for demo purposes; use real auth in production)
  const handleLogin = (e) => {
    e.preventDefault();
    if (password === 'cooper123') { // Replace with secure auth in real app
      setIsAuthenticated(true);
    } else {
      alert('Incorrect password');
    }
  };

  // Clear all submissions (optional admin feature)
  const handleClearSubmissions = () => {
    if (window.confirm('Are you sure you want to clear all submissions?')) {
      localStorage.removeItem('contactSubmissions');
      setSubmissions([]);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="admin-login">
        <h2>Admin Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="admin-container">
      <h1>Admin Dashboard - Contact Form Submissions</h1>
      {submissions.length === 0 ? (
        <p>No submissions yet.</p>
      ) : (
        <>
          <button className="clear-btn" onClick={handleClearSubmissions}>
            Clear All Submissions
          </button>
          <table className="submissions-table">
            <thead>
              <tr>
                <th>First Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th>About</th>
                <th>Submitted At</th>
              </tr>
            </thead>
            <tbody>
              {submissions.map((submission, index) => (
                <tr key={index}>
                  <td>{submission.firstName}</td>
                  <td>{submission.phone}</td>
                  <td>{submission.email}</td>
                  <td>{submission.about}</td>
                  <td>{new Date(submission.submittedAt).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}

export default Admin;