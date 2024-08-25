// src/components/Dashboard/Dashboard.js

import React from 'react';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div>
        {/* Summary Cards */}
        <div className="summary-cards">
          <div className="card">Total Contacts: 150</div>
          <div className="card">Total Tasks: 10</div>
          <div className="card">Sales: $5,000</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
