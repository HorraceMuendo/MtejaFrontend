// src/components/Dashboard.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../styles/Dashboard.css';

function Dashboard() {
  return (
    <Container className="dashboard">
      <Row className="mt-4">
        <Col md={4}>
          <Card className="text-center">
            <Card.Header>Sales</Card.Header>
            <Card.Body>
              <Card.Title>$20,000</Card.Title>
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
              <Card.Title>150</Card.Title>
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
              <Card.Title>85%</Card.Title>
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
