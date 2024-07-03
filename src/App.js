import 'bootstrap-icons/font/bootstrap-icons.css'
// import 'remixicons/fonts/remixicon.css'
// Enabling bootstrap js and css
import 'bootstrap/dist/css/bootstrap.min.css';




import './App.css';
import Header from './components/Header';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <div className="App">
      <Header />
      <Dashboard />
      
    </div>
  );
}

export default App;
