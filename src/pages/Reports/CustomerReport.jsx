import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CustomerReport = () => {
  const [customerData, setCustomerData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerateReport = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:6969/report/customers'); // Adjust endpoint if needed
      setCustomerData(response.data);
    } catch (error) {
      console.error('Error fetching customer report:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Customer Report</h1>
      <button onClick={handleGenerateReport} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Report'}
      </button>

      {customerData.length > 0 && (
        <div>
          <h2>Report Results</h2>
          <ul>
            {customerData.map(customer => (
              <li key={customer.id}>{customer.name}: {customer.feedback}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default CustomerReport;
