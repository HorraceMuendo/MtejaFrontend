import React, { useState } from 'react';
import axios from 'axios';
import "../../styles/leads.css"

const SalesInputForm = () => {
  const [salesData, setSalesData] = useState({
    date: '',
    amount: 0,
    category: '', // New category field
  });

  const categories = ['Electronics', 'Cutlery', 'Furniture', 'Clothing']; // Example categories

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSalesData({
      ...salesData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/sales', salesData); // API to save sales data
      alert('Sales data saved successfully');
      setSalesData({ date: '', amount: 0, category: '' }); // Reset form
    } catch (error) {
      console.error('Error saving sales data', error);
    }
  };

  return (
    <div className='leads'>
      <h2>Enter Sales Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input
            type="date"
            name="date"
            value={salesData.date}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Sales Amount:</label>
          <input
            type="number"
            name="amount"
            value={salesData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Category:</label>
          <select
            name="category"
            value={salesData.category}
            onChange={handleChange}
            required
          >
            <option value="">Select Category</option>
            {categories.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default SalesInputForm;
