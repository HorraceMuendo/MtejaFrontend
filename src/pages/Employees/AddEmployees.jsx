
// AddProduct.js
import React, { useState } from 'react';
import axios from 'axios';
import "../../styles/Products.css";

const AddEmployee = () => {
  const [employeeName, setEmployeeName] = useState('');
  const [employeeEmail, setEmployeeEmail] = useState('');
  

  const handleAddProduct = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:6969/employee/add', {
        employeeName: employeeName,
        employeeEmail: employeeEmail,
        
      });
      console.log('Product Added:', response.data);
      // Clear the form fields after successful submission
      employeeName('');
      employeeEmail('');
      
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
            value={employeeName}
            onChange={(e) => setEmployeeName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="productPrice">Employee Email:</label>
          <input
            type="text"
            id="productPrice"
            value={employeeEmail}
            onChange={(e) => setEmployeeEmail(e.target.value)}
          />
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;
