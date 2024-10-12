// ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../styles/Products.css";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:6969/employee/list');
        setEmployees(response.data);
      } catch (error) {
        console.error('There was an error fetching the product list!', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="product-list">
      <h1>Employees List</h1>
      <ul>
        {employees.map(employee => (
          <li key={employee.id}>
            {employee.name} - {employee.email} 
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Employees;
