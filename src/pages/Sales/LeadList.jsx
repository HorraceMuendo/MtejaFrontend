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

  const deleteLead = (id) => {
    axios
      .delete(`http://localhost:5000/api/leads/${id}`)
      .then(() => {
        setLeads(leads.filter((lead) => lead._id !== id));
      })
      .catch((error) => console.error("Error deleting lead", error));
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
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead) => (
            <tr key={lead._id}>
              <td>{lead.name}</td>
              <td>{lead.email}</td>
              <td>{lead.status}</td>
              <td>
                <button onClick={() => deleteLead(lead._id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LeadsList;
