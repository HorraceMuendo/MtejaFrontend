// import { useState } from 'react'
// import './App.css'
// import Header from './Components/Header'
// import Sidebar from './Components/Sidebar'
// import Home from './Components/Home'
// import User from './pages/UserProfile'
// import Signup from './pages/SignUp'
// import Login from './pages/Login'

// function App() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle)
//   }

//   return (
//     <div className='grid-container'>
//       <Header OpenSidebar={OpenSidebar}/>
//       <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
//       <Home />
//       <User />
//       <Signup />
//       <Login/>
//     </div>
//   )
// }

// export default App




// import React, { useState } from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import './App.css';
// import Header from './Components/Header';
// import Sidebar from './Components/Sidebar';
// import Home from './Components/Home';
// import User from './pages/UserProfile';
// import Signup from './pages/SignUp';
// import Login from './pages/Login';
// import LandingPage from './pages/LandingPage';

// function App() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle);
//   }

//   return (
//     <Router>
//       <div className='grid-container'>
//         <Header OpenSidebar={OpenSidebar} />
//         <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
//         <div className='main-content'>
//           <Routes>
//             <Route path="/signup" element={<Signup />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/home" element={<Home />} />
//             <Route path="/user" element={<User />} />
//             <Route path="/" element={<LandingPage />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// }

// export default App;




import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import Home from './Components/Home';
import User from './pages/UserProfile';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import LandingPage from './pages/LandingPage';  // Import LandingPage

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />  {/* Landing Page Route */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="*"
          element={
            <div className='grid-container'>
              <Header OpenSidebar={OpenSidebar} />
              <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
              <Routes>
                <Route path="/home" element={<Home />} />
                <Route path="/user" element={<User />} />
                {/* Add other routes as needed */}
              </Routes>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
