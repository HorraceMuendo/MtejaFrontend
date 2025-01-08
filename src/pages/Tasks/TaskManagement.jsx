import React, { useState, useEffect } from 'react';
import '../../styles/TaskManagement.css';
import axios from 'axios';

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]); // Initialize tasks state
  const [taskname, setTaskname] = useState('');
  const [deadline, setDeadline] = useState('');

  // Add a new task
  const addTask = async (e) => {
    e.preventDefault();
    try {
      if (!taskname || !deadline) {
        alert('Please fill in the fields');
        return;
      }
      const response = await axios.post('http://localhost:6969/task/add', {
        taskname: taskname, // Update the field name to match your backend
        deadline,
      });
      console.log("Task added:", response.data);

      // Update tasks state to include the new task
      setTasks([...tasks, response.data.data]); // Add the newly created task

      // Reset input fields
      setTaskname('');
      setDeadline('');
    } catch (error) {
      console.log('Error creating the Task:', error);
    }
  };

  return (
    <div className="task-management">
      <h1>Task Management</h1>
      <div>
        <input 
          type="text" 
          placeholder="Task Name" 
          value={taskname} 
          onChange={(e) => setTaskname(e.target.value)} 
        />
        <input 
          type="datetime-local" // Use datetime-local for date and time selection
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
          required
        />
        <button onClick={addTask}>Add Task</button>
      </div>
    </div>
  );
};

export default TaskManagement;
