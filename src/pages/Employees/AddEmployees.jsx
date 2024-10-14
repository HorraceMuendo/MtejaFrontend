
// AddProduct.js
import React, { useState } from 'react';
import axios from 'axios';
import "../../styles/Products.css";

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:6969/employee/add', {
        name: name,
        email: email,
        
      });
      console.log('Product Added:', response.data);
      // Clear the form fields after successful submission
      setName('');
      setEmail('');
      
    } catch (error) {
      console.error('There was an error adding the product!', error);
    }
  };

  return (
    <div className="add-product">
      <h1>Add Employee</h1>
      <form onSubmit={handleAddProduct}>
        <div>
          <label htmlFor="productName">Employee Name:</label>
          <input
            type="text"
            id="productName"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="productPrice">Employee Email:</label>
          <input
            type="text"
            id="productPrice"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
