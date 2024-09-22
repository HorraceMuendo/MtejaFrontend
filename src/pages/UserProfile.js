import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';
import { BsPersonCircle } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserModal = ({ show, handleClose, userDetails, handleUpdate }) => {
  const [formData, setFormData] = useState(userDetails);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(formData);
    handleClose();
  };

  return (
        // <Modal.Title>User Details</Modal.Title>
      
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
    
  );
};

const UserProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
  });

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  const handleUpdate = (updatedDetails) => setUserDetails(updatedDetails);

  return (
    <div className="UserProfile">
      <BsPersonCircle className="icon" size={40} onClick={handleShow} style={{ cursor: 'pointer' }} />
      <UserModal show={showModal} handleClose={handleClose} userDetails={userDetails} handleUpdate={handleUpdate} />
    </div>
  );
};

export default UserProfile;


