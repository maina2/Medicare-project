import './register.css';

function Register() {
  return (
    <div className="registerContainer">
      <div className="registerForm">
      <h2>Register</h2>
      <form>
        <div className="inputContainer">
          <label htmlFor="firstName">First Name:</label>
          <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" />
        </div>
        <div className="inputContainer">
          <label htmlFor="surname">Surname:</label>
          <input type="text" id="surname" name="surname" placeholder="Enter your surname" />
        </div>
        <div className="inputContainer">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="inputContainer">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Register</button>
      </form>
      <p>Already have an account? <a href="/signin">Sign in here</a></p>
      </div>
      
    </div>
  );
}

export default Register;
