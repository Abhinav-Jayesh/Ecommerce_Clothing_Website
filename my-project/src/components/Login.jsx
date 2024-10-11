import React, { useState } from 'react';
import './Login.css';
import axios from 'axios';

const Log = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        email,
        password,
      });

      localStorage.setItem('token', response.data.token);
      window.location.href = '/home';
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <div className="promo-banner">
        <h2>Welcome to ZALORA</h2>
        <p>Explore the latest fashion trends. Sign in to unlock exclusive offers!</p>
      </div>
      <div className="login-box">
        <h3><b>Login to Your Account</b></h3>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit}>
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
          <button type="submit" className="btn btn-login"><b>Login</b></button>
        </form>

        <div className="social-login">
          <p>Or sign in with:</p>
          <div className="social-buttons">
            <button className="btn-social btn-facebook">Facebook</button>
            <button className="btn-social btn-google">Google</button>
          </div>
        </div>
        
        <p className="text-center mt-3">Don't have an account? <a href="/signup">Sign up</a></p>
      </div>
    </div>
  );
};

export default Log;
