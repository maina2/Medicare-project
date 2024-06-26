import React, { useState } from "react";
import axios from "axios";
import './register.css'
import { Navigate } from 'react-router-dom';

function Register() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isRegistered, setIsRegistered] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      firstname,
      lastname,
      email,
      password,
    };

    try {
      const response = await axios.post(
        'http://localhost:3000/auth/signup',
        formData
      );
      // Handle the response from the backend if needed
      console.log(response.data);

      setIsRegistered(true);
    } catch (error) {
      // Handle errors if the request fails
      console.error('Error during registration:', error);
    }
  };

  if (isRegistered) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="registerContainer">
      <div className="registerForm">
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputContainer">
            <label htmlFor="firstname">First Name:</label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              placeholder="Enter your first name"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </div>
          
          <div className="inputContainer">
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              placeholder="Enter your last name"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
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

        <p>
          Already have an account? <a href="/signin">Sign in here</a>
        </p>

        <p>
          Are you a doctor? Register <a href="/doctorregister">here</a>
        </p>
      </div>
    </div>
  );
}

export default Register;