// To follow product list theme

// src/components/Enquiries.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../styles/Enquiries.css";

const Enquiries = () => {
  const [enquiries, setEnquiries] = useState([]);

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const response = await axios.get('http://localhost:6969/enquiries/list');
        setEnquiries(response.data);
      } catch (error) {
        console.error('There was an error fetching the enquiries!', error);
      }
    };

    fetchEnquiries();
  }, []);

  return (
    <div className="enquiries">
      <h1>Enquiries</h1>
      <p>Here you can see the list of all enquiries.</p>
      <ul>
        {enquiries.map(enquiry => (
          <li key={enquiry.id}>
            <strong>Name:</strong> {enquiry.name} - 
            <strong> Email:</strong> {enquiry.email} - 
            <strong> Message:</strong> {enquiry.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Enquiries;
