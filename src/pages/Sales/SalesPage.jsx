import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table, Button, Form } from 'react-bootstrap';
import '../styles/SalesReportPage.css'; // Add CSS file for styling

const SalesReportPage = () => {
  const [salesData, setSalesData] = useState([]);
  const [dateRange, setDateRange] = useState('');
  const [productType, setProductType] = useState('');
  const [salesRep, setSalesRep] = useState('');
  const [loading, setLoading] = useState(false);
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    // Fetch initial sales data and employees
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get('http://localhost:6969/employee/list');
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleGenerateReport = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`http://localhost:6969/report/sales`, {
        params: {
          dateRange,
          productType,
          salesRep,
        },
      });
      setSalesData(response.data);
    } catch (error) {
      console.error('Error fetching sales report:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleExport = () => {
    // Implement CSV export logic here
    const csvData = salesData.map(row => ({
      Product: row.productName,
      Amount: row.amount,
      Date: row.date,
      SalesRep: row.salesRep,
    }));

    const csvContent = [
      ["Product", "Amount", "Date", "SalesRep"],
      ...csvData.map(e => [e.Product, e.Amount, e.Date, e.SalesRep])
    ].map(e => e.join(",")).join("\n");

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.setAttribute("download", "sales_report.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="sales-report-page">
      <h1>Sales Report</h1>
      <Form inline className="mb-3">
        <Form.Group controlId="dateRange">
          <Form.Label className="mr-2">Date Range</Form.Label>
          <Form.Control
            type="text"
            placeholder="YYYY-MM-DD to YYYY-MM-DD"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="productType" className="ml-2">
          <Form.Label className="mr-2">Product Type</Form.Label>
          <Form.Control
            as="select"
            value={productType}
            onChange={(e) => setProductType(e.target.value)}
          >
            <option value="">All Products</option>
            <option value="product1">Product 1</option>
            <option value="product2">Product 2</option>
            {/* Add more product types as needed */}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="salesRep" className="ml-2">
          <Form.Label className="mr-2">Sales Representative</Form.Label>
          <Form.Control
            as="select"
            value={salesRep}
            onChange={(e) => setSalesRep(e.target.value)}
          >
            <option value="">All Representatives</option>
            {employees.map(emp => (
              <option key={emp.id} value={emp.name}>{emp.name}</option>
            ))}
          </Form.Control>
        </Form.Group>

        <Button variant="primary" className="ml-2" onClick={handleGenerateReport} disabled={loading}>
          {loading ? 'Generating...' : 'Generate Report'}
        </Button>
      </Form>

      {salesData.length > 0 && (
        <div>
          <h2>Report Results</h2>
          <Button variant="success" onClick={handleExport}>Export as CSV</Button>
          <Table striped bordered hover className="mt-3">
            <thead>
              <tr>
                <th>Product</th>
                <th>Amount</th>
                <th>Date</th>
                <th>Sales Representative</th>
              </tr>
            </thead>
            <tbody>
              {salesData.map(sale => (
                <tr key={sale.id}>
                  <td>{sale.productName}</td>
                  <td>{sale.amount}</td>
                  <td>{sale.date}</td>
                  <td>{sale.salesRep}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      )}
    </div>
  );
};

export default SalesReportPage;
