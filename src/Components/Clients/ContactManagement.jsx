// src/components/ContactManagement/ContactManagement.js

import React, { useState } from 'react';

const ContactManagement = () => {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState('');

  const addContact = () => {
    setContacts([...contacts, newContact]);
    setNewContact('');
  };

  return (
    <div className="contact-management">
      <h2>Contact Management</h2>
      <input
        type="text"
        value={newContact}
        onChange={(e) => setNewContact(e.target.value)}
        placeholder="Add new contact"
      />
      <button onClick={addContact}>Add</button>

      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>{contact}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContactManagement;
