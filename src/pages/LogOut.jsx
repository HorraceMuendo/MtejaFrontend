import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

const LogoutPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      try {
        // Send POST request to logout the user from the server
        // await axios.post('http://localhost:6969/user/logout', {}, { withCredentials: true });
        // After logout, redirect to the login page
        navigate('/');
      } catch (error) {
        console.error("Error logging out", error);
      }
    };

    logout();
  }, [navigate]);

  return (
    <div className="logout-page">
      <h2>Logging out...</h2>
      <p>Please wait while we log you out.</p>
    </div>
  );
};

export default LogoutPage;
