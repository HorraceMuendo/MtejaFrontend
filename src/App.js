import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import User from './pages/UserProfile';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';  // Import LandingPage
import Reports from './pages/Reports';
import ProductList from './pages/Products/ProductList';
import AddProduct from './pages/Products/AddProduct';
import Dashboard from './pages/Dashboard';

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
                <Route path="/user" element={<User />} />
                <Route path="/reports" element={<Reports/>} />              
              </Routes>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
