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
import Enquiries from './pages/Enquiries';

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
                <Route path="/enquiries" element={<Enquiries />} />
                <Route path="/user" element={<User />} />
                <Route path="/report" element={<Reports/>} />  
                <Route path="/report/add" element={<ReportForm/>} />                          
              </Routes>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
