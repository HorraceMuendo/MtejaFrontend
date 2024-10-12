import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../../styles/Customer.css";

const Complains = () => {
  const [complains, setComplains] = useState([]);

  useEffect(() => {
    const fetchComplains = async () => {
      try {
        const response = await axios.get('http://localhost:6969/customers/complains/list');
        setComplains(response.data);
      } catch (error) {
        console.error('There was an error fetching the complains list!', error);
      }
    };

    fetchComplains();
  }, []);

  return (
    <div className="customer-list">
      <h1>Complains</h1>
      <ul>
        {complains.map(complain => (
          <li key={complain.id}>
            {complain.name} - {complain.email} - {complain.complain}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Complains;
