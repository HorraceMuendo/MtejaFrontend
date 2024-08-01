

import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
 import '../styles/Signup.css';
import axios from 'axios';

function Signup () {
  const [values, setValues] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password:'',
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:6969/users/signup', values)
      .then(res => {
        console.log("Successfully Registered")
        navigate('/login'); // Redirect to login page after successful signup
      } )
      .catch(err => console.log(err));
  };

  return (
    <Container className="signup-container">
      <h2 className="signup-title">Sign Up</h2>
      <Form className="signup-form" onSubmit={handleSubmit}>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control name='firstname' type="text" placeholder="Enter your first name" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control name='lastname' type="text" placeholder="Enter your last name" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name='email' type="email" placeholder="Enter your email" onChange={handleChange} />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name='password' type="password" placeholder="Enter your password" onChange={handleChange} />
        </Form.Group>
        <Button variant="primary" type="submit" className="signup-button">
          Submit
        </Button>
      </Form>
    </Container>
  );
}

export default Signup;
