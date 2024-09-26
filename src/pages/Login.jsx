// src/Login.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../styles/Login.css';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    axios.post('http://localhost:6969/users/login', { email, password })
      .then(response => {
        const data = response.data;
        if (data.error) {
          setMessage(data.error);
          setIsError(true);
        } else {
          setMessage('Login successful');
          setIsError(false);
          // Handle successful login, e.g., redirect to a dashboard
          navigate('/dashboard')
        }
      })
      .catch(error => {
        console.error('Error:', error);
        setMessage('Incorrect Email or Password. Please try again.');
        setIsError(true);
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {/* {message && <p>{message}</p>} */}
      {message && (
        <p className={isError ? 'error-message' : 'success-message'}>{message}</p>
      )}
    </div>
  );
};

export default Login;
