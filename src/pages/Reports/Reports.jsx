// src/components/Reports.js
//To fetch data and display
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

function Reports() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchReports = async () => {
      const response = await axios.get('http://localhost:5000/api/reports');
      setReports(response.data);
    };
    fetchReports();
  }, []);

  const data = {
    labels: reports.map(report => report.month),
    datasets: [
      {
        label: 'Sales ($)',
        data: reports.map(report => report.sales),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  return (
    <Container className="reports">
      <Row className="mt-4">
        <Col md={8}>
          <Card>
            <Card.Header>Sales Overview</Card.Header>
            <Card.Body>
              <Bar data={data} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Reports;




// updated report 

// import React, { useState, useEffect } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import axios from 'axios';
// import '../styles/ReportPage.css';

// const ReportPage = () => {
//   const [reportType, setReportType] = useState('');
//   const [dateRange, setDateRange] = useState('');
//   const [employee, setEmployee] = useState('');
//   const [employees, setEmployees] = useState([]);

//   useEffect(() => {
//     // Fetch employees for the dropdown
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get('http://localhost:6969/employee/list'); // Update the endpoint as needed
//         setEmployees(response.data);
//       } catch (error) {
//         console.error('Error fetching employees:', error);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle report generation logic here
//     console.log('Generating report:', { reportType, dateRange, employee });
//   };

//   return (
//     <div className="report-page">
//       <h1>Generate Report</h1>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="reportType">
//           <Form.Label>Report Type</Form.Label>
//           <Form.Control
//             as="select"
//             value={reportType}
//             onChange={(e) => setReportType(e.target.value)}
//             required
//           >
//             <option value="">Select Report Type</option>
//             <option value="sales">Sales Report</option>
//             <option value="tasks">Task Report</option>
//             <option value="customer">Customer Report</option>
//             <option value="employee">Employee Report</option>
//           </Form.Control>
//         </Form.Group>

//         <Form.Group controlId="dateRange">
//           <Form.Label>Date Range</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="e.g., 2023-01-01 to 2023-12-31"
//             value={dateRange}
//             onChange={(e) => setDateRange(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="employee">
//           <Form.Label>Employee</Form.Label>
//           <Form.Control
//             as="select"
//             value={employee}
//             onChange={(e) => setEmployee(e.target.value)}
//           >
//             <option value="">Select Employee (Optional)</option>
//             {employees.map(emp => (
//               <option key={emp.id} value={emp.name}>{emp.name}</option>
//             ))}
//           </Form.Control>
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Generate Report
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default ReportPage;


// another one 

// import React, { useState, useEffect } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import '../styles/ReportPage.css';

// const ReportPage = () => {
//   const [reportType, setReportType] = useState('');
//   const [dateRange, setDateRange] = useState('');
//   const [employee, setEmployee] = useState('');
//   const [employees, setEmployees] = useState([]);
//   const history = useHistory();

//   useEffect(() => {
//     const fetchEmployees = async () => {
//       try {
//         const response = await axios.get('http://localhost:6969/employee/list');
//         setEmployees(response.data);
//       } catch (error) {
//         console.error('Error fetching employees:', error);
//       }
//     };

//     fetchEmployees();
//   }, []);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Navigate to the selected report page
//     if (reportType) {
//       history.push(`/${reportType}-report`); // Adjust path as needed
//     }
//   };

//   return (
//     <div className="report-page">
//       <h1>Generate Report</h1>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="reportType">
//           <Form.Label>Report Type</Form.Label>
//           <Form.Control
//             as="select"
//             value={reportType}
//             onChange={(e) => setReportType(e.target.value)}
//             required
//           >
//             <option value="">Select Report Type</option>
//             <option value="sales">Sales Report</option>
//             <option value="tasks">Task Report</option>
//             <option value="customer">Customer Report</option>
//             <option value="employee">Employee Report</option>
//           </Form.Control>
//         </Form.Group>

//         <Form.Group controlId="dateRange">
//           <Form.Label>Date Range</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="e.g., 2023-01-01 to 2023-12-31"
//             value={dateRange}
//             onChange={(e) => setDateRange(e.target.value)}
//             required
//           />
//         </Form.Group>

//         <Form.Group controlId="employee">
//           <Form.Label>Employee</Form.Label>
//           <Form.Control
//             as="select"
//             value={employee}
//             onChange={(e) => setEmployee(e.target.value)}
//           >
//             <option value="">Select Employee (Optional)</option>
//             {employees.map(emp => (
//               <option key={emp.id} value={emp.name}>{emp.name}</option>
//             ))}
//           </Form.Control>
//         </Form.Group>

//         <Button variant="primary" type="submit">
//           Generate Report
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default ReportPage;
