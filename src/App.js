import 'bootstrap-icons/font/bootstrap-icons.css'
// import 'remixicons/fonts/remixicon.css'
// Enabling bootstrap js and css
import 'bootstrap/dist/css/bootstrap.min.css';




import './App.css';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/sidebar/Sidebar';
import DashboardPages from './pages/dashboard/DashboardPages';
import PageNotFound from './pages/error/PageNotFound';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Sidebar />}>
            <Route path='/' element={<DashboardPages />} />
            <Route path='*' element={<PageNotFound/>} />
          </Route>
        </Routes>
      </Router>
  
    </>
  );
}

export default App;
