import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Line } from 'react-chartjs-2';
import '../../styles/leads.css'

const SalesChart = () => {
  const [salesData, setSalesData] = useState([]);

  // Fetch sales data from the backend
  useEffect(() => {
    const fetchSalesData = async () => {
      try {
        const response = await axios.get('http://localhost:6969/sales/list');
        setSalesData(response.data);
      } catch (error) {
        console.error('Error fetching sales data', error);
      }
    };

    fetchSalesData();
  }, []);

  // Group sales data by category
  const groupByCategory = (data) => {
    return data.reduce((acc, sale) => {
      if (!acc[sale.category]) {
        acc[sale.category] = [];
      }
      acc[sale.category].push(sale);
      return acc;
    }, {});
  };

  // Generate chart data
  const groupedData = groupByCategory(salesData);

  const chartData = {
    labels: salesData.map((sale) => sale.date.split('T')[0]), // Format date as YYYY-MM-DD
    datasets: Object.keys(groupedData).map((category) => ({
      label: category,
      data: groupedData[category].map((sale) => sale.amount),
      fill: false,
      borderColor: 'rgba(75, 192, 192, 1)', // Different color for each category
      tension: 0.1,
    })),
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className='leads'>
      <h2>Sales by Category</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default SalesChart;
