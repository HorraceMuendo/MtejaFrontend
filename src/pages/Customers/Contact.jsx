// To follow product list theme

// src/components/Enquiries.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../styles/contacts.css";

const Contact = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContact = async () => {
      try {
        const response = await axios.get('http://localhost:6969/contact/list');
        setContacts(response.data);
      } catch (error) {
        console.error('There was an error fetching the contacts!', error);
      }
    };

    fetchContact();
  }, []);

  return (
    <div className="contacts">
      <h1>Contacts</h1>
      <ul>
        {contacts.map(Contact => (
          <li key={Contact.id}>
            <strong>Name:</strong> {Contact.name} - 
            <strong> Email:</strong> {Contact.email} - 
            <strong> Subject:</strong> {Contact.subject}-
            <strong> Message:</strong> {Contact.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contact;