
// import React, { useState } from 'react';
// import { Button, Container, Form } from 'react-bootstrap';
// // import { BsPersonCircle } from 'react-icons/bs';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../styles/UserProfile.css';
// import axios from 'axios';

// const UserModal = ({ show, handleClose, userDetails, handleUpdate }) => {
//   const [formData, setFormData] = useState(userDetails);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     handleUpdate(formData);  // Trigger the update function with new data
//     handleClose();  // Close the modal
//   };

//   return (
//     <Container className='profile-container'>
//       <h2 className="user-title">User Details</h2> 
//       <Form className='user-form' onSubmit={handleSubmit}>
//         <Form.Group controlId="formName">
//           <Form.Label>Username</Form.Label>
//           <Form.Control
//             type="text"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="formEmail">
//           <Form.Label>Email</Form.Label>
//           <Form.Control
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Form.Group controlId="formPassword">
//           <Form.Label>Password</Form.Label>
//           <Form.Control
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit" className='user-button'>
//           Save Changes
//         </Button>
//       </Form>
//     </Container>  
//   );
// };

// const UserProfile = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [userDetails, setUserDetails] = useState({
//     name: 'John Doe',
//     email: 'john.doe@example.com',
//     password: '',  // Password initially empty
//   });

//   const handleShow = () => setShowModal(true);
//   const handleClose = () => setShowModal(false);

//   const handleUpdate = (updatedDetails) => {
//     // API call to update the user details
//     axios.put('http://localhost:6969/users/updateProfile', updatedDetails)
//       .then((response) => {
//         console.log("Profile updated successfully:", response.data);
//         setUserDetails(updatedDetails);  // Update the local state with new details
//       })
//       .catch((error) => {
//         console.log("Error updating profile:", error);
//       });
//   };

//   return (
//     <div className="UserProfile">
//       {/* <BsPersonCircle className="icon" size={40} onClick={handleShow} style={{ cursor: 'pointer' }} /> */}
//       <UserModal 
//         show={showModal} 
//         handleClose={handleClose} 
//         userDetails={userDetails} 
//         handleUpdate={handleUpdate} 
//       />
//     </div>
//   );
// };

// export default UserProfile;





import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
// import { BsPersonCircle } from 'react-icons/bs';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/UserProfile.css';
import axios from 'axios';

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
    handleUpdate(formData);  // Trigger the update function with new data
    handleClose();  // Close the modal
  };

  return (
    <Container className='profile-container'>
      <h2 className="user-title">User Details</h2> 
      <Form className='user-form' onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Username</Form.Label>
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
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className='user-button'>
          Save Changes
        </Button>
      </Form>
    </Container>  
  );
};

const UserProfile = () => {
  const [showModal, setShowModal] = useState(false);
  const [userDetails, setUserDetails] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    password: '',  // Password initially empty
  });

  const handleShow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleUpdate = (updatedDetails) => {
    // API call to update the user details
    axios.put('http://localhost:6969/users/updateProfile', updatedDetails)
      .then((response) => {
        console.log("Profile updated successfully:", response.data);
        setUserDetails(updatedDetails);  // Update the local state with new details
      })
      .catch((error) => {
        console.log("Error updating profile:", error);
      });
  };

  return (
    <div className="UserProfile">
      {/* <BsPersonCircle className="icon" size={40} onClick={handleShow} style={{ cursor: 'pointer' }} /> */}
      <UserModal 
        show={showModal} 
        handleClose={handleClose} 
        userDetails={userDetails} 
        handleUpdate={handleUpdate} 
      />
    </div>
  );
};

export default UserProfile;







// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// // import "../styles/UserProfile.css";

// const UserProfile = () => {
//   const navigate = useNavigate();

//   // State for user profile data
//   const [user, setUser] = useState({
//     email: "",
//     password: "",
//   });

//   // State for form errors
//   const [error, setError] = useState("");

//   useEffect(() => {
//     // Fetch the current user's profile data from API when component mounts
//     axios
//       .get("http://localhost:6969/user/profile", { withCredentials: true })
//       .then((response) => {
//         setUser({
//           email: response.data.email,
//           password: "", // Do not expose password
//         });
//       })
//       .catch((error) => {
//         console.error("Error fetching profile", error);
//         setError("Error loading profile. Please try again.");
//       });
//   }, []);

//   // Handle form input change
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUser({
//       ...user,
//       [name]: value,
//     });
//   };

//   // Handle the form submission for updating the user profile
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const updatedData = {
//       email: user.email,
//       password: user.password,
//     };

//     try {
//       const response = await axios.put("http://localhost:6969/user/profile", updatedData, { withCredentials: true });
//       alert("Profile updated successfully!");
//       setUser({ ...user, password: "" }); // Reset password field
//     } catch (error) {
//       console.error("Error updating profile", error);
//       setError("Error updating profile. Please try again.");
//     }
//   };

//   // Handle the logout functionality
//   const handleLogout = () => {
//     axios
//       .post("http://localhost:6969/user/logout", {}, { withCredentials: true })
//       .then(() => {
//         // Redirect user to login page after successful logout
//         navigate("/login");
//       })
//       .catch((error) => {
//         console.error("Error logging out", error);
//       });
//   };

//   return (
//     <div className="user-profile">
//       <h2>User Profile</h2>

//       {error && <div className="error-message">{error}</div>}

//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Email:</label>
//           <input
//             type="email"
//             name="email"
//             value={user.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label>Password:</label>
//           <input
//             type="password"
//             name="password"
//             value={user.password}
//             onChange={handleChange}
//             placeholder="Leave empty to keep current password"
//           />
//         </div>

//         <button type="submit">Update Profile</button>
//       </form>

//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default UserProfile;
