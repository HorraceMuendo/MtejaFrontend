// src/components/CommunicationLogs/CommunicationLogs.js

import React, { useState } from 'react';

const CommunicationLogs = () => {
  const [logs, setLogs] = useState([]);
  const [newLog, setNewLog] = useState('');

  const addLog = () => {
    setLogs([...logs, newLog]);
    setNewLog('');
  };

  return (
    <div className="communication-logs">
      <h2>Communication Logs</h2>
      <input
        type="text"
        value={newLog}
        onChange={(e) => setNewLog(e.target.value)}
        placeholder="Add new log"
      />
      <button onClick={addLog}>Add</button>

      <ul>
        {logs.map((log, index) => (
          <li key={index}>{log}</li>
        ))}
      </ul>
    </div>
  );
};

export default CommunicationLogs;
