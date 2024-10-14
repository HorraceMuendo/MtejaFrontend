
import React, { useState } from 'react';
import '../styles/TaskManagement.css'; 
import axios from 'axios';

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]);
  const [taskname, setTaskname] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState('Pending');

  // Add a new task
  const addTask = async (e) => {
    e.preventDefault();
      try {
        if (!taskname) {
          alert('Please fill in all fields')
        }
        const response = await axios.post('http//localhost/6969/task/add', {
          taskName:taskname,

        });
        console.log("Task added :", response.data);
        setTaskname('');

      } catch (error) {
        console.log('Error creating the Task:', error)
      }


    // if (!taskName || !assignedTo) {
    //   alert('Please fill in all fields');
    //   return;
    // }
    
    const newTask = {
      id: Date.now(),
      name: taskname,
      assignedTo,
      status,
    };

    setTasks([...tasks, newTask]);
    setTaskname('');
    setAssignedTo('');
    // setStatus('Pending');
  };

  // Update task status
  const updateStatus = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' } : task
    );
    setTasks(updatedTasks);
  };

  // Delete a task
  const deleteTask = (id) => {
    const filteredTasks = tasks.filter(task => task.id !== id);
    setTasks(filteredTasks);
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
          type="text" 
          placeholder="Assigned To" 
          value={assignedTo} 
          onChange={(e) => setAssignedTo(e.target.value)} 
        />
        {/* <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select> */}
        <button onClick={addTask}>Add Task</button>
      </div>

      <h2>Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <span>{task.name} (Assigned to: {task.assignedTo}) - Status: {task.status}</span>
              <div>
                <button onClick={() => updateStatus(task.id)}>
                  {task.status === 'Pending' ? 'Complete' : 'Undo'}
                </button>
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TaskManagement;
