import React, { useState } from "react";
import axios from "axios";

const LeadForm = () => {
  const [lead, setLead] = useState({
    name: "",
    email: "",
    phone: "",
    status: "New",
    value: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLead((prevLead) => ({
      ...prevLead,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/leads", lead)
      .then((response) => {
        console.log("Lead added successfully", response.data);
        setLead({ name: "", email: "", phone: "", status: "New", value: 0 });
      })
      .catch((error) => console.error("Error adding lead", error));
  };

  return (
    <div>
      <h2>Add Lead</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={lead.name}
          onChange={handleChange}
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          value={lead.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          type="text"
          name="phone"
          value={lead.phone}
          onChange={handleChange}
          placeholder="Phone"
        />
        <select name="status" value={lead.status} onChange={handleChange}>
          <option value="New">New</option>
          <option value="Qualified">Qualified</option>
          <option value="Negotiation">Negotiation</option>
          <option value="Closed Won">Closed Won</option>
          <option value="Closed Lost">Closed Lost</option>
        </select>
        <input
          type="number"
          name="value"
          value={lead.value}
          onChange={handleChange}
          placeholder="Deal Value"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LeadForm;
