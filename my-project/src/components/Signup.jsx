import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './Signup.css';
import axios from 'axios';

const Signup = () => {
  const navigate = useNavigate(); 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/signup/', {
        username,
        email,
        password,
      });
      setSuccess(response.data.success);
      setError(null);

      // Optionally store the access token if provided on signup success
      // Example: localStorage.setItem('accessToken', response.data.token);

      navigate('/home'); // Redirect to home on successful signup
    } catch (err) {
      setError(err.response?.data?.error || 'Error creating account. Please try again.');
      setSuccess(null);
    }
  };

  return (
    <div className="signup-container">
      <h3><b>Create Your Account</b></h3>
      <p className="welcome-text">Join us to explore the latest in fashion!</p>
      <p className="sub-text">Get exclusive access to new arrivals and promotions.</p>
      {error && <p className="error-message">{error}</p>}
      {success && <p className="success-message">{success}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-signup"><b>Sign Up</b></button>
      </form>

      <div className="social-signup">
        <p>Or sign up with:</p>
        <div className="social-buttons">
          <button className="btn-social btn-facebook">Facebook</button>
          <button className="btn-social btn-google">Google</button>
        </div>
      </div>

      <p className="text-center mt-3">Already have an account? <a href="/">Login</a></p>
    </div>
  );
};

export default Signup;
