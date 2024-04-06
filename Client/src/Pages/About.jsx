import React from 'react';
import './about.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="about-container">
      <h1 className="about-heading">Welcome to MediCare</h1>
      <p className="about-description">
        MediCare is a cutting-edge telehealth platform that connects patients with qualified healthcare professionals from the comfort of their own homes. We strive to provide accessible and convenient healthcare services, ensuring individuals receive the medical attention they need without the hassle of traditional in-person visits.
      </p>
      <p className="about-description">
        Our mission is to revolutionize the way healthcare is delivered by leveraging technology to bridge the gap between patients and doctors. With MediCare, you can easily schedule virtual appointments, consult with experienced doctors, access medical records securely, and receive personalized care tailored to your needs.
      </p>
      <p className="about-description">
        Whether you need a routine check-up, have specific health concerns, or require expert medical advice, our dedicated team of healthcare professionals is here to provide you with comprehensive and compassionate care. Experience the convenience and efficiency of telehealth with MediCare.
      </p>
      <button className="signin-button">
        <Link to="/signIn">Sign In</Link>
      </button>
    </div>
  );
};

export default About;