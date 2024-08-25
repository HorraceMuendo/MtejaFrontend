// // import React from "react";

// // // react-bootstrap components
// // import {
// //   Badge,
// //   Button,
// //   Card,
// //   Form,
// //   Navbar,
// //   Nav,
// //   Container,
// //   Row,
// //   Col
// // } from "react-bootstrap";

// // function User() {
// //   return (
// //     <>
// //       <Container fluid>
// //         <Row>
// //           <Col md="8">
// //             <Card>
// //               <Card.Header>
// //                 <Card.Title as="h4">Edit Profile</Card.Title>
// //               </Card.Header>
// //               <Card.Body>
// //                 <Form>
// //                   <Row>
// //                     <Col className="pr-1" md="5">
// //                       <Form.Group>
// //                         <label>Company (disabled)</label>
// //                         <Form.Control
// //                           defaultValue=""
// //                           disabled
// //                           placeholder="Company"
// //                           type="text"
// //                         ></Form.Control>
// //                       </Form.Group>
// //                     </Col>
// //                     <Col className="px-1" md="3">
// //                       <Form.Group>
// //                         <label>Username</label>
// //                         <Form.Control
// //                           defaultValue=""
// //                           placeholder="Username"
// //                           type="text"
// //                         ></Form.Control>
// //                       </Form.Group>
// //                     </Col>
// //                     <Col className="pl-1" md="4">
// //                       <Form.Group>
// //                         <label htmlFor="exampleInputEmail1">
// //                           Email address
// //                         </label>
// //                         <Form.Control
// //                           placeholder="Email"
// //                           type="email"
// //                         ></Form.Control>
// //                       </Form.Group>
// //                     </Col>
// //                   </Row>
// //                   <Row>
// //                     <Col className="pr-1" md="6">
// //                       <Form.Group>
// //                         <label>First Name</label>
// //                         <Form.Control
// //                           defaultValue=""
// //                           placeholder="Company"
// //                           type="text"
// //                         ></Form.Control>
// //                       </Form.Group>
// //                     </Col>
// //                     <Col className="pl-1" md="6">
// //                       <Form.Group>
// //                         <label>Last Name</label>
// //                         <Form.Control
// //                           defaultValue=""
// //                           placeholder="Last Name"
// //                           type="text"
// //                         ></Form.Control>
// //                       </Form.Group>
// //                     </Col>
// //                   </Row>
// //                   <Row>
// //                     <Col md="12">
// //                       <Form.Group>
// //                         <label>Address</label>
// //                         <Form.Control
// //                           defaultValue=""
// //                           placeholder="Home Address"
// //                           type="text"
// //                         ></Form.Control>
// //                       </Form.Group>
// //                     </Col>
// //                   </Row>
// //                   <Row>
// //                     <Col className="pr-1" md="4">
// //                       <Form.Group>
// //                         <label>City</label>
// //                         <Form.Control
// //                           defaultValue=""
// //                           placeholder="City"
// //                           type="text"
// //                         ></Form.Control>
// //                       </Form.Group>
// //                     </Col>
// //                     <Col className="px-1" md="4">
// //                       <Form.Group>
// //                         <label>Country</label>
// //                         <Form.Control
// //                           defaultValue=""
// //                           placeholder="Country"
// //                           type="text"
// //                         ></Form.Control>
// //                       </Form.Group>
// //                     </Col>
// //                     <Col className="pl-1" md="4">
// //                       <Form.Group>
// //                         <label>Postal Code</label>
// //                         <Form.Control
// //                           placeholder="ZIP Code"
// //                           type="number"
// //                         ></Form.Control>
// //                       </Form.Group>
// //                     </Col>
// //                   </Row>
// //                   <Row>
// //                     <Col md="12">
// //                       <Form.Group>
// //                         <label>About Me</label>
// //                         <Form.Control
// //                           cols="80"
// //                           defaultValue=""
// //                           placeholder="Here can be your description"
// //                           rows="4"
// //                           as="textarea"
// //                         ></Form.Control>
// //                       </Form.Group>
// //                     </Col>
// //                   </Row>
// //                   <Button
// //                     className="btn-fill pull-right"
// //                     type="submit"
// //                     variant="info"
// //                   >
// //                     Update Profile
// //                   </Button>
// //                   <div className="clearfix"></div>
// //                 </Form>
// //               </Card.Body>
// //             </Card>
// //           </Col>
       
// //         </Row>
// //       </Container>
// //     </>
// //   );
// // }

// // export default User;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

// function User() {
//   const [userData, setUserData] = useState({
//     company: '',
//     email: '',
//     firstName: '',
//     lastName: '',
   
//   });

//   const [userId, setUserId] = useState(''); // Example: set userId from authentication context or props

//   useEffect(() => {
//     // Fetch user data when component mounts
//     axios.get(`http://localhost:6969/users/${userId}`)
//       .then(response => setUserData(response.data))
//       .catch(error => console.error('Error fetching user data:', error));
//   }, [userId]);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     axios.put('http://localhost:6969/users/update-profile', { userId, ...userData })
//       .then(response => {
//         console.log('Profile updated successfully:', response.data);
//         // Optionally handle success (e.g., show a message or redirect)
//       })
//       .catch(error => {
//         console.error('Error updating profile:', error);
//         // Optionally handle error (e.g., show an error message)
//       });
//   };

//   return (
//     <Container fluid>
//       <Row>
//         <Col md="8">
//           <Card>
//             <Card.Header>
//               <Card.Title as="h4">Edit Profile</Card.Title>
//             </Card.Header>
//             <Card.Body>
//               <Form onSubmit={handleSubmit}>
//                 <Row>
//                   <Col className="pr-1" md="5">
//                     <Form.Group>
//                       <Form.Label>Company (disabled)</Form.Label>
//                       <Form.Control
//                         name="company"
//                         value={userData.company}
//                         disabled
//                         placeholder="Company"
//                         type="text"
//                       />
//                     </Form.Group>
//                   </Col>
                 
//                   <Col className="pl-1" md="4">
//                     <Form.Group>
//                       <Form.Label>Email address</Form.Label>
//                       <Form.Control
//                         name="email"
//                         value={userData.email}
//                         placeholder="Email"
//                         type="email"
//                         onChange={handleChange}
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>
//                 <Row>
//                   <Col className="pr-1" md="6">
//                     <Form.Group>
//                       <Form.Label>First Name</Form.Label>
//                       <Form.Control
//                         name="firstName"
//                         value={userData.firstName}
//                         placeholder="First Name"
//                         type="text"
//                         onChange={handleChange}
//                       />
//                     </Form.Group>
//                   </Col>
//                   <Col className="pl-1" md="6">
//                     <Form.Group>
//                       <Form.Label>Last Name</Form.Label>
//                       <Form.Control
//                         name="lastName"
//                         value={userData.lastName}
//                         placeholder="Last Name"
//                         type="text"
//                         onChange={handleChange}
//                       />
//                     </Form.Group>
//                   </Col>
//                 </Row>              
//                 <Button
//                   className="btn-fill pull-right"
//                   type="submit"
//                   variant="info"
//                 >
//                   Update Profile
//                 </Button>
//                 <div className="clearfix"></div>
//               </Form>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default User;

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
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
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
      </Modal.Body>
    </Modal>
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





// sample code

// import React, { useState, useEffect } from 'react';
// import { Modal, Button, Form } from 'react-bootstrap';
// import { BsPersonCircle } from 'react-icons/bs';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const UserModal = ({ show, handleClose, userDetails, handleUpdate }) => {
//   const [formData, setFormData] = useState(userDetails);

//   useEffect(() => {
//     setFormData(userDetails);
//   }, [userDetails]);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const response = await fetch('/api/user', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(formData),
//     });
//     const updatedUser = await response.json();
//     handleUpdate(updatedUser);
//     handleClose();
//   };

//   return (
//     <Modal show={show} onHide={handleClose}>
//       <Modal.Header closeButton>
//         <Modal.Title>User Details</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="formName">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <Form.Group controlId="formEmail">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//             />
//           </Form.Group>
//           <Button variant="primary" type="submit">
//             Save Changes
//           </Button>
//         </Form>
//       </Modal.Body>
//     </Modal>
//   );
// };

// const UserProfile = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [userDetails, setUserDetails] = useState({
//     name: '',
//     email: '',
//   });

//   const handleShow = () => setShowModal(true);
//   const handleClose = () => setShowModal(false);

//   const handleUpdate = (updatedDetails) => setUserDetails(updatedDetails);

//   useEffect(() => {
//     const fetchUserDetails = async () => {
//       const response = await fetch('/api/user');
//       const userDetails = await response.json();
//       setUserDetails(userDetails);
//     };

//     fetchUserDetails();
//   }, []);

//   return (
//     <div className="UserProfile">
//       <BsPersonCircle className="icon" size={40} onClick={handleShow} style={{ cursor: 'pointer' }} />
//       <UserModal show={showModal} handleClose={handleClose} userDetails={userDetails} handleUpdate={handleUpdate} />
//     </div>
//   );
// };

// export default UserProfile;
