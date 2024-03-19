import './signIn.css';

function SignIn() {
  return (
    <div className="signInContainer">
      <div className="signInForm">
      <h2>Sign In</h2>
      <form>
        <div className="inputContainer">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" />
        </div>
        <div className="inputContainer">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" />
        </div>
        <button type="submit">Sign In</button>
      </form>
      <p>Don't have an account? <a href="/register">Register here</a></p>
      </div>
      
    </div>
  );
}

export default SignIn;
