import React from 'react';
import '../styles/LandingPage.css';  // Import the CSS for LandingPage

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-page-content">
        <h1>Naivas CRM</h1>
        <h2>Welcome to Our System</h2>
        <p>This is the landing page. Please sign up or log in to continue.</p>
        <a href="/signup" className="btn">Sign Up</a>
        <a href="/login" className="btn">Login</a>
      </div>
    </div>
  );
}

export default LandingPage;



