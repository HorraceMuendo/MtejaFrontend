// // src/components/ReportForm.js
// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import axios from 'axios';
// import '../../styles/Reports.css'

// function ReportForm() {
//   const [month, setMonth] = useState('');
//   const [sales, setSales] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.post('http://localhost:5000/api/reports', { month, sales: Number(sales) });
//     setMonth('');
//     setSales('');
//     alert('Report submitted!');
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group controlId="formMonth">
//         <Form.Label>Month</Form.Label>
//         <Form.Control
//           type="text"
//           placeholder="Enter month"
//           value={month}
//           onChange={(e) => setMonth(e.target.value)}
//           required
//         />
//       </Form.Group>

//       <Form.Group controlId="formSales">
//         <Form.Label>Sales</Form.Label>
//         <Form.Control
//           type="number"
//           placeholder="Enter sales amount"
//           value={sales}
//           onChange={(e) => setSales(e.target.value)}
//           required
//         />
//       </Form.Group>

//       <Button className='report-btn' variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default ReportForm;


// src/components/ReportForm.js
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import axios from 'axios';
import '../../styles/Reports.css'

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
    <Container className="reports">
      <h2>Submit Report</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formMonth" className="input-group">
          <Form.Label>Month</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
            required
          />
        </Form.Group>

        <Form.Group controlId="formSales" className="input-group">
          <Form.Label>Sales</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter sales amount"
            value={sales}
            onChange={(e) => setSales(e.target.value)}
            required
          />
        </Form.Group>

        <Button className='report-btn' variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    
    </Container>
  );
}

export default ReportForm;
