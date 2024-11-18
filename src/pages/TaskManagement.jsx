
// import React, { useState, useEffect } from 'react';
// import '../styles/TaskManagement.css'; 
// import axios from 'axios';

// const TaskManagement = () => {
//   const [tasks, setTasks] = useState([]);
//   const [taskname, setTaskname] = useState('');
//   const [assignedTo, setAssignedTo] = useState('');
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     // Fetch employees from the database
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get('http://localhost:6969/employee/list '); // Update the endpoint as needed
//         setEmployees(response.data); // Assuming response.data is an array of employee objects
//       } catch (error) {
//         console.error('Error fetching employees:', error);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   // Add a new task
//   const addTask = async (e) => {
//     e.preventDefault();
//     try {
//       if (!taskname || !assignedTo) {
//         alert('Please fill in the fields');
//         return;
//       }
//       const response = await axios.post('http://localhost:6969/task/add', {
//         taskName: taskname,
//         assignedTo,
//       });
//       console.log("Task added:", response.data);
      
//       const newTask = {
//         id: Date.now(),
//         name: taskname,
//         assignedTo,
//       };

//       setTasks([...tasks, newTask]);
//       setTaskname('');
//       setAssignedTo('');
//     } catch (error) {
//       console.log('Error creating the Task:', error);
//     }
//   };

//   // Update task status
//   const updateStatus = (id) => {
//     const updatedTasks = tasks.map(task => 
//       task.id === id ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' } : task
//     );
//     setTasks(updatedTasks);
//   };

//   // Delete a task
//   const deleteTask = (id) => {
//     const filteredTasks = tasks.filter(task => task.id !== id);
//     setTasks(filteredTasks);
//   };

//   return (
//     <div className="task-management">
//       <h1>Task Management</h1>
//       <div>
//         <input 
//           type="text" 
//           placeholder="Task Name" 
//           value={taskname} 
//           onChange={(e) => setTaskname(e.target.value)} 
//         />
//         <select 
//           value={assignedTo} 
//           onChange={(e) => setAssignedTo(e.target.value)} 
//         >
//           <option value="">Select an Employee</option>
//           {employees.map(employee => (
//             <option key={employee.id} value={employee.name}>{employee.name}</option> // Adjust based on your employee object structure
//           ))}
//         </select>
//         <button onClick={addTask}>Add Task</button>
//       </div>

//       <h2>Tasks</h2>
//       {tasks.length === 0 ? (
//         <p>No tasks available</p>
//       ) : (
//         <ul>
//           {tasks.map(task => (
//             <li key={task.id}>
//               <span>{task.name} (Assigned to: {task.assignedTo})</span>
//               <div>
//                 <button onClick={() => updateStatus(task.id)}>
//                   {task.status === 'Pending' ? 'Complete' : 'Undo'}
//                 </button>
//                 <button onClick={() => deleteTask(task.id)}>Delete</button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TaskManagement;

// ************************************************************************************************************

// import React, { useState, useEffect } from 'react';
// import '../styles/TaskManagement.css'; 
// import axios from 'axios';

// const TaskManagement = () => {
//   const [tasks, setTasks] = useState([]);
//   const [taskname, setTaskname] = useState('');
//   const [deadline, setDeadline] = useState('');
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     // Fetch employees from the database
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get('http://localhost:6969/employee/list'); // Update the endpoint as needed
//         setEmployees(response.data); // Assuming response.data is an array of employee objects
//       } catch (error) {
//         console.error('Error fetching employees:', error);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   // Add a new task
//   const addTask = async (e) => {
//     e.preventDefault();
//     try {
//       if (!taskname || !deadline) {
//         alert('Please fill in the fields');
//         return;
//       }
//       const response = await axios.post('http://localhost:6969/task/add', {
//         taskName: taskname,
//         deadline,
//       });
//       console.log("Task added:", response.data);
      
//       const newTask = {
//         id: Date.now(),
//         name: taskname,
//         deadline,
//         status: 'Pending', // Initialize status
//       };

//       setTasks([...tasks, newTask]);
//       setTaskname('');
//       setDeadline('');
//     } catch (error) {
//       console.log('Error creating the Task:', error);
//     }
//   };

//   // Update task status
//   const updateStatus = (id) => {
//     const updatedTasks = tasks.map(task => 
//       task.id === id ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' } : task
//     );
//     setTasks(updatedTasks);
//   };

//   // Delete a task
//   const deleteTask = (id) => {
//     const filteredTasks = tasks.filter(task => task.id !== id);
//     setTasks(filteredTasks);
//   };

//   return (
//     <div className="task-management">
//       <h1>Task Management</h1>
//       <div>
//         <input 
//           type="text" 
//           placeholder="Task Name" 
//           value={taskname} 
//           onChange={(e) => setTaskname(e.target.value)} 
//         />
//         <input 
//           type="datetime-local" // Use datetime-local for date and time selection
//           value={deadline}
//           onChange={(e) => setDeadline(e.target.value)}
//           required
//         />
//         <button onClick={addTask}>Add Task</button>
//       </div>

//       <h2>Tasks</h2>
//       {tasks.length === 0 ? (
//         <p>No tasks available</p>
//       ) : (
//         <ul>
//           {tasks.map(task => (
//             <li key={task.id}>
//               <span>{task.name} (Deadline: {new Date(task.deadline).toLocaleString()})</span>
//               <div>
//                 <button onClick={() => updateStatus(task.id)}>
//                   {task.status === 'Pending' ? 'Complete' : 'Undo'}
//                 </button>
//                 <button onClick={() => deleteTask(task.id)}>Delete</button>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default TaskManagement;







import React, { useState, useEffect } from 'react';
import '../styles/TaskManagement.css'; 
import axios from 'axios';

const TaskManagement = () => {
  const [tasks, setTasks] = useState([]); // Initialize tasks state
  const [taskname, setTaskname] = useState('');
  const [deadline, setDeadline] = useState('');

  useEffect(() => {
    // Fetch tasks from the database
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:6969/task/list'); // Add your endpoint to fetch tasks
        setTasks(response.data); // Assuming response.data is an array of task objects
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks(); // Fetch tasks when the component mounts
  }, []);

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

  // Update task status
  const updateStatus = async (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, status: task.status === 'Pending' ? 'Completed' : 'Pending' } : task
    );
    setTasks(updatedTasks);

    // You might want to call an API to update the status in the database
    // await axios.put(`http://localhost:6969/task/update/${id}`, { status: task.status });
  };

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

      <h2>Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <span>{task.taskname} (Deadline: {new Date(task.deadline).toLocaleString()})</span>
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
