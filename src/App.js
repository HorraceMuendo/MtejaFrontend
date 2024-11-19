import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import User from './pages/UserProfile';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';  
import Reports from './pages/Reports/Reports';
import ProductList from './pages/Products/ProductList';
import AddProduct from './pages/Products/AddProduct';
import Dashboard from './pages/Dashboard';
import ReportForm from './pages/Reports/ReportsForm';
import Enquiries from './pages/Customers/Enquiries';
import Compliments from './pages/Customers/Compliments';
import Complains from './pages/Customers/Complains';
import Contact from './pages/Customers/Contact';
import TaskManagement from './pages/TaskManagement';
import Employees from './pages/Employees/Employees';
import AddEmployee from './pages/Employees/AddEmployees';
import AnalyticsDashboard from './pages/Analytics';
import CampaignForm from './pages/Marketing/CampaignForm';
import CampaignList from './pages/Marketing/CampaignList';

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <div className='grid-container'>
              <Header/>
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/products/list" element={<ProductList/>} />
                <Route path="/products/add" element={<AddProduct/>} />
                <Route path="/employee/list" element={<Employees/>} />
                <Route path="/employee/add" element={<AddEmployee/>} />
                <Route path="/tasks" element={<TaskManagement />} />
                <Route path="/enquiries" element={<Enquiries />} />
                <Route path="/complains" element={<Complains />} />
                <Route path="/compliments" element={<Compliments />} />
                <Route path="/contact" element={<Contact />} />

                <Route path="/user" element={<User />} />
                <Route path="/report" element={<Reports/>} />  
                <Route path="/report/add" element={<ReportForm/>} />  
                <Route path="/analytics" element={<AnalyticsDashboard />} />
                <Route path="/contact" element={<CampaignForm />} />
                <Route path="/contact" element={<CampaignList/>} />




              </Routes>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
