import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import axios from 'axios';
import '../styles/Dashboard.css';

function Dashboard() {
  const [totalSales, setTotalSales] = useState(0);
  const [newCustomers, setNewCustomers] = useState(0);
  const [feedbackRate, setFeedbackRate] = useState(0);

  useEffect(() => {
    const fetchDashboardData = async () => {
      const response = await axios.get('http://localhost:5000/api/reports');
      const salesData = response.data.map(report => report.sales);
      
      // Calculate total sales
      setTotalSales(salesData.reduce((acc, sale) => acc + sale, 0));
      
      // Example logic for new customers and feedback rate
      // This is placeholder logic; replace it with your actual data source
      setNewCustomers(150); // Replace with actual data if available
      setFeedbackRate(85);  // Replace with actual calculation if available
    };
    fetchDashboardData();
  }, []);

  return (
    <Container className="dashboard">
      <Row className="mt-4">
        <Col md={4}>
          <Card className="text-center">
            <Card.Header>Sales</Card.Header>
            <Card.Body>
              <Card.Title>${totalSales}</Card.Title>
              <Card.Text>
                Total Sales This Month
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Header>New Customers</Card.Header>
            <Card.Body>
              <Card.Title>{newCustomers}</Card.Title>
              <Card.Text>
                New Customers This Month
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="text-center">
            <Card.Header>Feedback</Card.Header>
            <Card.Body>
              <Card.Title>{feedbackRate}%</Card.Title>
              <Card.Text>
                Positive Feedback Rate
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Dashboard;
