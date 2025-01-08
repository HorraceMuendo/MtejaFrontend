import React, { useState, useEffect } from 'react';
import '../../styles/TaskManagement.css'; 
import axios from 'axios';

const Tasks = () => {
  const [tasks, setTasks] = useState([]); // Initialize tasks state


  useEffect(() => {
    // Fetch tasks from the database
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:6969/task/list'); // Add your endpoint to fetch tasks
        setTasks(response.data); // Assuming response.data is an array of task objects
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks(); // Fetch tasks when the component mounts
  }, []);
  

  // Delete a task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:6969/task/delete/${id}`); // Add your endpoint to delete tasks
      const filteredTasks = tasks.filter(task => task.id !== id);
      setTasks(filteredTasks);
    } catch (error) {
      console.error('Error deleting the task:', error);
    }
  };

  return (
    <div className="task-management">
     
      <h2>Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <span>{task.taskname} (Deadline: {new Date(task.deadline).toLocaleString()})</span>
              <div>
                
                <button onClick={() => deleteTask(task.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Tasks;
