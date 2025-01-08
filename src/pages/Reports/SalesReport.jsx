import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../../styles/leads.css"

const SalesReport = () => {
  const [salesData, setSalesData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch sales data from the backend
  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await axios.get('http://localhost:6969/sales/list'); // API to get sales data
        setSalesData(response.data);
      } catch (error) {
        console.error('Error fetching sales data', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSalesData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className='sales-report'>
      <h2>Sales Data Report</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {salesData.length > 0 ? (
            salesData.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.amount}</td>
                <td>{item.category}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No sales data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SalesReport;
