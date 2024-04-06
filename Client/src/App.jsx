import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Appointments from './Pages/Appointments';
import Profile from './Pages/Profile';
import SignIn from './Pages/SignIn';
import SymptomsChecker from './Pages/SymptomsChecker';
import Consultation from './Pages/Consultation';
import Register from './Pages/Register';
import Logout from './Pages/Logout';
import DoctorRegister from './Pages/DoctorRegister';
import DoctorSignIn from './Pages/DoctorSignIn';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/home" element={<Home />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="/symptomschecker" element={<SymptomsChecker />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/register" element={<Register />} />
            <Route path="/doctorRegister" element={<DoctorRegister />} />
            <Route path="/doctorSignIn" element={<DoctorSignIn />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
