import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SalesReport = () => {
  const [salesData, setSalesData] = useState([]);
  const [dateRange, setDateRange] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateReport = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:6969/report/sales?dateRange=${dateRange}`);
      setSalesData(response.data);
    } catch (error) {
      console.error('Error fetching sales report:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Sales Report</h1>
      <input 
        type="text" 
        placeholder="Enter date range (e.g., 2023-01-01 to 2023-12-31)"
        value={dateRange}
        onChange={(e) => setDateRange(e.target.value)}
      />
      <button onClick={handleGenerateReport} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Report'}
      </button>

      {salesData.length > 0 && (
        <div>
          <h2>Report Results</h2>
          <ul>
            {salesData.map(sale => (
              <li key={sale.id}>{sale.productName}: {sale.amount}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SalesReport;
