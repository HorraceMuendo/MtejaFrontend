// import React from 'react';
// import { Link } from 'react-router-dom';
// import '../styles/LandingPage.css';

// function LandingPage() {
//   return (
//     <div className="landing-page">
//       <h1>Welcome to Our System</h1>
//       <p>Experience the best e-commerce solutions with us.</p>
//       <div className="landing-page-buttons">
//         <Link to="/signup" className="btn">Sign Up</Link>
//         <Link to="/login" className="btn">Login</Link>
//       </div>
//     </div>
//   );
// }

// export default LandingPage;

// import React from 'react';
// import '../styles/LandingPage.css';  // Import the CSS for LandingPage

// function LandingPage() {
//   return (
//     <div className="landing-page">
//       <h1>Welcome to Our System</h1>
//       <p>This is the landing page. Please sign up or log in to continue.</p>
//       <a href="/signup" className="btn">Sign Up</a>
//       <a href="/login" className="btn">Login</a>
//     </div>
//   );
// }

// export default LandingPage;


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



