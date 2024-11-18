import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../styles/CustomerSupport.css'; // Ensure you have a CSS file for styling

const CustomerSupport = () => {
  const [tickets, setTickets] = useState([]);
  const [description, setDescription] = useState('');
  const [status, setStatus] = useState('Open');

  useEffect(() => {
    fetchTickets();
  }, []);

  // Fetch tickets from the backend
  const fetchTickets = async () => {
    try {
      const response = await axios.get('http://localhost:6969/support/tickets'); // Adjust the endpoint as necessary
      setTickets(response.data);
    } catch (error) {
      console.error('Error fetching tickets:', error);
    }
  };

  // Add a new support ticket
  const addTicket = async (e) => {
    e.preventDefault();
    try {
      if (!description) {
        alert('Please provide a description for the ticket.');
        return;
      }
      const response = await axios.post('http://localhost:6969/support/tickets', {
        description,
        status,
      });
      setTickets([...tickets, response.data]);
      setDescription('');
      setStatus('Open');
    } catch (error) {
      console.error('Error creating ticket:', error);
    }
  };

  // Update ticket status
  const updateTicketStatus = async (id, newStatus) => {
    try {
      await axios.put(`http://localhost:6969/support/tickets/${id}`, { status: newStatus });
      const updatedTickets = tickets.map(ticket =>
        ticket.id === id ? { ...ticket, status: newStatus } : ticket
      );
      setTickets(updatedTickets);
    } catch (error) {
      console.error('Error updating ticket status:', error);
    }
  };

  // Delete a ticket
  const deleteTicket = async (id) => {
    try {
      await axios.delete(`http://localhost:6969/support/tickets/${id}`);
      setTickets(tickets.filter(ticket => ticket.id !== id));
    } catch (error) {
      console.error('Error deleting ticket:', error);
    }
  };

  return (
    <div className="customer-support">
      <h1>Customer Support</h1>
      <form onSubmit={addTicket}>
        <textarea
          placeholder="Describe your issue..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit">Submit Ticket</button>
      </form>

      <h2>Support Tickets</h2>
      {tickets.length === 0 ? (
        <p>No tickets available</p>
      ) : (
        <ul>
          {tickets.map(ticket => (
            <li key={ticket.id}>
              <p><strong>Description:</strong> {ticket.description}</p>
              <p><strong>Status:</strong> {ticket.status}</p>
              <div>
                {ticket.status === 'Open' ? (
                  <button onClick={() => updateTicketStatus(ticket.id, 'Closed')}>Close Ticket</button>
                ) : (
                  <button onClick={() => updateTicketStatus(ticket.id, 'Open')}>Reopen Ticket</button>
                )}
                <button onClick={() => deleteTicket(ticket.id)}>Delete Ticket</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomerSupport;
