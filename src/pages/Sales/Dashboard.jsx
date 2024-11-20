import React, { useState, useEffect } from "react";
import axios from "axios";

const Dashboard = () => {
  const [performance, setPerformance] = useState({ totalLeads: 0, closedWon: 0, winRate: 0 });

  useEffect(() => {
    axios
      .get("http://localhost:6969/sales/performance")
      .then((response) => setPerformance(response.data))
      .catch((error) => console.error("Front: Error fetching performance data", error));
  }, []);

  return (
    <div>
      <h2>Sales Dashboard</h2>
      <div>
        <p>Total Leads: {performance.totalLeads}</p>
        <p>Closed Won: {performance.closedWon}</p>
        <p>Win Rate: {performance.winRate.toFixed(2)}%</p>
      </div>
    </div>
  );
};

export default Dashboard;
