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
