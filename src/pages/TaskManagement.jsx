
// import React, { useState } from 'react';
// import '../styles/TaskManagement.css'; 
// import axios from 'axios';

// const TaskManagement = () => {
//   const [tasks, setTasks] = useState([]);
//   const [taskname, setTaskname] = useState('');
//   const [assignedTo, setAssignedTo] = useState('');
//   // const [status, setStatus] = useState('Pending');

//   // Add a new task
//   const addTask = async (e) => {
//     e.preventDefault();
//       try {
//         if (!taskname) {
//           alert('Please fill in the fields')
//         }
//         const response = await axios.post('http://localhost:6969/task/add', {
//           taskName:taskname,

//         });
//         console.log("Task added :", response.data);
//         setTaskname('');

//       } catch (error) {
//         console.log('Error creating the Task:', error)
//       }


//     // if (!taskName || !assignedTo) {
//     //   alert('Please fill in all fields');
//     //   return;
//     // }
    
//     const newTask = {
//       id: Date.now(),
//       name: taskname,
//       assignedTo,
//       // status,
//     };

//     setTasks([...tasks, newTask]);
//     setTaskname('');
//     setAssignedTo('');
//     // setStatus('Pending');
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
//           type="text" 
//           placeholder="Assigned To" 
//           value={assignedTo} 
//           onChange={(e) => setAssignedTo(e.target.value)} 
//         />
//         {/* <select value={status} onChange={(e) => setStatus(e.target.value)}>
//           <option value="Pending">Pending</option>
//           <option value="Completed">Completed</option>
//         </select> */}
//         <button onClick={addTask}>Add Task</button>
//       </div>

//       <h2>Tasks</h2>
//       {tasks.length === 0 ? (
//         <p>No tasks available</p>
//       ) : (
//         <ul>
//           {tasks.map(task => (
//             <li key={task.id}>
//               <span>{task.name} (Assigned to: {task.assignedTo}) - Status: {task.status}</span>
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
  const [tasks, setTasks] = useState([]);
  const [taskname, setTaskname] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch employees from the database
    const fetchEmployees = async () => {
      try {
        const response = await axios.get('http://localhost:6969/employee/list '); // Update the endpoint as needed
        setEmployees(response.data); // Assuming response.data is an array of employee objects
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  // Add a new task
  const addTask = async (e) => {
    e.preventDefault();
    try {
      if (!taskname || !assignedTo) {
        alert('Please fill in the fields');
        return;
      }
      const response = await axios.post('http://localhost:6969/task/add', {
        taskName: taskname,
        assignedTo,
      });
      console.log("Task added:", response.data);
      
      const newTask = {
        id: Date.now(),
        name: taskname,
        assignedTo,
      };

      setTasks([...tasks, newTask]);
      setTaskname('');
      setAssignedTo('');
    } catch (error) {
      console.log('Error creating the Task:', error);
    }
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
        <select 
          value={assignedTo} 
          onChange={(e) => setAssignedTo(e.target.value)} 
        >
          <option value="">Select an Employee</option>
          {employees.map(employee => (
            <option key={employee.id} value={employee.name}>{employee.name}</option> // Adjust based on your employee object structure
          ))}
        </select>
        <button onClick={addTask}>Add Task</button>
      </div>

      <h2>Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <span>{task.name} (Assigned to: {task.assignedTo})</span>
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













//update tasks





// import React, { useState, useEffect } from 'react';
// import '../styles/TaskManagement.css'; 
// import axios from 'axios';

// const TaskManagement = () => {
//   const [tasks, setTasks] = useState([]);
//   const [taskname, setTaskname] = useState('');
//   const [assignedTo, setAssignedTo] = useState('');
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     // Fetch employees and tasks from the database
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get('http://localhost:6969/employee/list');
//         setEmployees(response.data);
//       } catch (error) {
//         console.error('Error fetching employees:', error);
//       }
//     };

//     const fetchTasks = async () => {
//       try {
//         const response = await axios.get('http://localhost:6969/task/list'); // Adjust the endpoint as needed
//         setTasks(response.data);
//       } catch (error) {
//         console.error('Error fetching tasks:', error);
//       }
//     };

//     fetchEmployees();
//     fetchTasks();
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
      
//       setTasks([...tasks, response.data]); // Assuming response.data contains the newly created task
//       setTaskname('');
//       setAssignedTo('');
//     } catch (error) {
//       console.log('Error creating the Task:', error);
//     }
//   };

//   // Update task status
//   const updateStatus = async (id, currentStatus) => {
//     try {
//       const newStatus = currentStatus === 'Pending' ? 'Completed' : 'Pending';
//       const response = await axios.patch(`http://localhost:6969/task/update/${id}`, { status: newStatus });
//       console.log("Task updated:", response.data);

//       const updatedTasks = tasks.map(task => 
//         task.id === id ? { ...task, status: newStatus } : task
//       );
//       setTasks(updatedTasks);
//     } catch (error) {
//       console.log('Error updating task status:', error);
//     }
//   };

//   // Delete a task
//   const deleteTask = async (id) => {
//     try {
//       await axios.delete(`http://localhost:6969/task/delete/${id}`);
//       const filteredTasks = tasks.filter(task => task.id !== id);
//       setTasks(filteredTasks);
//     } catch (error) {
//       console.log('Error deleting task:', error);
//     }
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
//             <option key={employee.id} value={employee.name}>{employee.name}</option>
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
//               <span>{task.name} (Assigned to: {task.assignedTo}) - Status: {task.status}</span>
//               <div>
//                 <button onClick={() => updateStatus(task.id, task.status)}>
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
