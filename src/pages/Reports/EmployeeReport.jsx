import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EmployeeReport = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGenerateReport = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:6969/report/employees'); // Adjust endpoint if needed
      setEmployeeData(response.data);
    } catch (error) {
      console.error('Error fetching employee report:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Employee Report</h1>
      <button onClick={handleGenerateReport} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Report'}
      </button>

      {employeeData.length > 0 && (
        <div>
          <h2>Report Results</h2>
          <ul>
            {employeeData.map(employee => (
              <li key={employee.id}>{employee.name}: {employee.role}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EmployeeReport;
