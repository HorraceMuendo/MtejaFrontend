import React, { useState, useEffect } from "react";
import axios from "axios";
import "../../styles/leads.css"

const LeadsList = () => {
  const [leads, setLeads] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:6969/sales/leads")
      .then((response) => setLeads(response.data))
      .catch((error) => console.error("Error fetching leads", error));
  }, []);

  // const deleteLead = (id) => {
  //   axios
  //     .delete(`http://localhost:6969/sales/delete/${id}`)
  //     .then(() => {
  //       setLeads(leads.filter((lead) => lead._id !== id));
  //     })
  //     .catch((error) => console.error("Error deleting lead", error));
  // };

  // Delete a task
  const deleteLead = async (id) => {
    try {
      await axios.delete(`http://localhost:6969/sales/delete/${id}`); // Add your endpoint to delete tasks
      const filteredLeads = leads.filter(lead => lead.id !== id);
      setLeads(filteredLeads);
    } catch (error) {
      console.error('Error deleting the task:', error);
    }
  };


  return (
    <div className="leads">
      <h2>Leads List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
            {/* <th>Action</th> */}
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead._id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.status}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadsList;


