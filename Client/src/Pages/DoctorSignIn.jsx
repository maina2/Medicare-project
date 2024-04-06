import './doctorSignIn.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      email,
      password,
    };

    try {
      const response = await axios.post('http://localhost:3000/auth/loginDoctor', formData);
      // Handle the response from the backend if needed
      console.log(response.data);

      setIsLoggedIn(true);
    } catch (error) {
      // Handle errors if the request fails
      console.error('Error during login:', error);
    }
  };

  if (isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <div className="signInContainer">
      <div className="signInForm">
        <h2> Doctor Sign In</h2>
        <form onSubmit={handleSubmit}>
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
          <button type="submit">Sign In</button>
        </form>
        <p>
          Don't have an account? <a href="/doctorRegister">Register here</a>
        </p>
        

      </div>
    </div>
  );
}

export default SignIn;