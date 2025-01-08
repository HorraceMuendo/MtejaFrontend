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
import Enquiries from './pages/Customers/Enquiries';
import Compliments from './pages/Customers/Compliments';
import Complains from './pages/Customers/Complains';
import Contact from './pages/Customers/Contact';
import TaskManagement from './pages/Tasks/TaskManagement';
import Dash from './pages/Sales/Dashboard';
import LeadForm from './pages/Sales/LeadForm';
import LeadsList from './pages/Reports/LeadList';
import SalesInputForm from './pages/Sales/SaleInputForm';
import Tasks from './pages/Tasks/Tasks';
import SalesReport from './pages/Reports/SalesReport';
import LogoutPage from './pages/LogOut';
import EmailPage from './pages/Marketing/Email';



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
                <Route path="/tasks" element={<TaskManagement />} />
                <Route path="/tasks/list" element={<Tasks />} />
                <Route path="/enquiries" element={<Enquiries />} />
                <Route path="/complains" element={<Complains />} />
                <Route path="/compliments" element={<Compliments />} />
                <Route path="/contact" element={<Contact />} />
                
                <Route path="/user" element={<User />} />
                <Route path="/report" element={<Reports/>} />  
                <Route path="/sales/report" element={<SalesReport />} />

                <Route path="/sales/dashboard" element={<Dash />} />
                <Route path="/sales/leadform" element={<LeadForm />} />
                <Route path="/sales/leadlist" element={<LeadsList />} />
                <Route path="/sales/saleinputform" element={<SalesInputForm />} />
                <Route path="/email" element={<EmailPage/>} />
                <Route path="/logout" element={<LogoutPage/>} />






              </Routes>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
