import "./home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home-container">
      <section className="home-section" id="home-id">
        <div className="home-content">
          <p className="description">
            Your health, our priority. Access expert medical care anytime,
            anywhere with us online.
            <Link to="/about" className="link">
              Learn More
            </Link>
          </p>
        </div>
      </section>
      <section className="appointments-section">
        <div className="appointments-content">
          <h2 className="appointments-title">Appointments</h2>
          <p className="appointments-description">
            Schedule appointments with our healthcare providers at your
            convenience.
          </p>
          <Link to="/appointments" className="appointments-link">
            Make Appointment
          </Link>
        </div>
      </section>
      <section className="consultation-section">
        <div className="section-content">
          <h2>Consultation</h2>
          <p className="consultation-description">
            Consult with our medical experts for personalized advice and
            treatment.
          </p>
          <Link to="/consultation" className="link">
            Start Consultation
          </Link>
        </div>
      </section>
      <section className="symptomschecker-section">
        <div className="symptomschecker-content">
          <h2 className="symptomschecker-title">Symptoms Checker</h2>
          <p className="symptomschecker-description">
            Check your symptoms and receive recommendations for further action.
          </p>
          <Link to="/symptomschecker" className="symptomschecker-link">
            Check Symptoms
          </Link>
        </div>
      </section>
      <section className="about-section">
        <div className="section-content">
          <h2>About</h2>
          <p className="about-description">
            Learn more about our mission, values, and team.
          </p>
          <Link to="/about" className="link">
            Read More
          </Link>
        </div>
      </section>
      <section className="profile-section">
        <div className="section-content">
          <h2 className="profile-title">Profile</h2>
          <p className="profile-description">
            Manage your account settings and view your medical history. Stay in
            control of your healthcare journey.
          </p>
          <Link to="/profile" className="profile-link">
            View Profile
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
