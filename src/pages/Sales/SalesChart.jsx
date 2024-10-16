import React from 'react';
import { Line } from 'react-chartjs-2';

const SalesChart = ({ salesData }) => {
  const chartData = {
    labels: salesData.map(sale => sale.date), // Assuming date is in the salesData
    datasets: [
      {
        label: 'Sales Amount',
        data: salesData.map(sale => sale.amount),
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
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
    <div>
      <h2>Sales Over Time</h2>
      <Line data={chartData} options={options} />
    </div>
  );
};

export default SalesChart;
