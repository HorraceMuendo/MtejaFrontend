// ProductList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../styles/Customer.css";

const Compliments = () => {
  const [compliments, setCompliments] = useState([]);

  useEffect(() => {
    const fetchCompliments = async () => {
      try {
        const response = await axios.get('http://localhost:6969/customers/compliments/list');
        setCompliments(response.data);
      } catch (error) {
        console.error('There was an error fetching the compliments list!', error);
      }
    };

    fetchCompliments();
  }, []);

  return (
    <div className="customer-list">
      <h1>Compliments</h1>
      <ul>
        {compliments.map(compliment => (
          <li key={compliment.id}>
            {compliment.name} - {compliment.category} - {compliment.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Compliments;