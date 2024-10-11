import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faShoppingCart, faHeart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Ensure this file exists

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  // Function to handle logout
  const handleLogout = () => {
    logoutUser(); // Call the logoutUser function when the button is clicked
  };

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm">
      <Link className="navbar-brand" to="/">
        <span className="brand-text"><strong>ZALORA  FASHION.</strong></span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded={!isNavCollapsed}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="navbarNav">
        <ul className="navbar-nav mx-auto">
          <li className="nav-item active">
            <Link className="nav-link" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/products">Shop</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/blog">Blog</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contact">Contacts</Link>
          </li>
        </ul>
        <ul className="navbar-nav icons">
          <li className="nav-item">
            <a className="nav-link" href="#"><FontAwesomeIcon icon={faSearch} /></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#"><FontAwesomeIcon icon={faHeart} /></a>
          </li>
          <li className="nav-item">
            <Link className="nav-link cart-link" to="#">
              <FontAwesomeIcon icon={faShoppingCart} /> $0.00
            </Link>
          </li>
        </ul>
        <form className="form-inline ml-3 d-flex align-items-center">
          <input
            className="form-control mr-sm-2 search-box"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="search-btn" type="submit">Search</button>
        </form>

        {/* Conditionally render login/logout buttons */}
        {localStorage.getItem('accessToken') ? (
          <button className="login-btn ml-2" onClick={handleLogout}>
            LogOut
          </button>
        ) : (
          <Link to="/" className="login-btn ml-2">Logout</Link>
        )}
      </div>
    </nav>
  );
};

// Function to call the API and handle the logout
function logoutUser() {
  fetch('/api/logout/', {
    method: 'POST',
    headers: {
      'Authorization': 'Bearer ' + localStorage.getItem('accessToken'), // If using JWT for authentication
      'Content-Type': 'application/json'
    }
  })
    .then(response => response.json())
    .then(data => {
      if (data.message) {
        // Clear the token from localStorage and redirect the user
        localStorage.removeItem('accessToken');
        alert(data.message);
        window.location.href = '/login'; // Redirect to the login page
      }
    })
    .catch(error => console.error('Error logging out:', error));
}

export default Navbar;
