// src/components/ReportForm.js
import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

function ReportForm() {
  const [month, setMonth] = useState('');
  const [sales, setSales] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/reports', { month, sales: Number(sales) });
    setMonth('');
    setSales('');
    alert('Report submitted!');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formMonth">
        <Form.Label>Month</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter month"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formSales">
        <Form.Label>Sales</Form.Label>
        <Form.Control
          type="number"
          placeholder="Enter sales amount"
          value={sales}
          onChange={(e) => setSales(e.target.value)}
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default ReportForm;
