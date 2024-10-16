import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TaskReport = () => {
  const [taskData, setTaskData] = useState([]);
  const [dateRange, setDateRange] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGenerateReport = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:6969/report/tasks?dateRange=${dateRange}`);
      setTaskData(response.data);
    } catch (error) {
      console.error('Error fetching task report:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Task Report</h1>
      <input 
        type="text" 
        placeholder="Enter date range (e.g., 2023-01-01 to 2023-12-31)"
        value={dateRange}
        onChange={(e) => setDateRange(e.target.value)}
      />
      <button onClick={handleGenerateReport} disabled={loading}>
        {loading ? 'Generating...' : 'Generate Report'}
      </button>

      {taskData.length > 0 && (
        <div>
          <h2>Report Results</h2>
          <ul>
            {taskData.map(task => (
              <li key={task.id}>{task.name}: {task.status}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default TaskReport;
