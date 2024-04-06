import './doctorRegister.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function DoctorRegister() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      firstname: firstName,
      lastname: lastName,
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:3000/auth/registerDoctor', formData);
      // Handle the response from the backend if needed
      console.log(response.data);

      setIsRegistered(true);
    } catch (error) {
      // Handle errors if the request fails
      console.error('Error during doctor registration:', error);
    }
  };

  if (isRegistered) {
    return <Navigate to="/signIn" />;
  }

  return (
    <div className="doctorRegisterContainer">
      <div className="doctorRegisterForm">
        <h2>Doctor Registration</h2>
        <form onSubmit={handleSubmit}>
          {/* Add relevant input fields for doctor registration */}
          <div className="inputContainer">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              placeholder="Enter your first name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="lastName">Last Name:</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter your last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputContainer">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  );
}

export default DoctorRegister;