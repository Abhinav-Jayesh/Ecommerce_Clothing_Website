import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'; // Import the CSS file for custom styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    {/* Brand Info */}
                    <div className="col-md-3">
                        <h5>Male fashion<span style={{ color: 'red' }}>.</span></h5>
                        <p>The customer is at the heart of our unique business model, which includes design.</p>
                        <div className="social-icons">
                            <img src="https://via.placeholder.com/40x40?text=BC" alt="Bitcoin" />
                            <img src="https://via.placeholder.com/40x40?text=AE" alt="American Express" />
                            <img src="https://via.placeholder.com/40x40?text=PP" alt="PayPal" />
                            <img src="https://via.placeholder.com/40x40?text=MC" alt="MasterCard" />
                            <img src="https://via.placeholder.com/40x40?text=VI" alt="Visa" />
                        </div>
                    </div>

                    {/* Shopping Links */}
                    <div className="col-md-3">
                        <h5>Shopping</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Clothing Store</a></li>
                            <li><a href="#">Trending Shoes</a></li>
                            <li><a href="#">Accessories</a></li>
                            <li><a href="#">Sale</a></li>
                        </ul>
                    </div>

                    {/* Help Links */}
                    <div className="col-md-3">
                        <h5>Help</h5>
                        <ul className="list-unstyled">
                            <li><a href="#">Contact Us</a></li>
                            <li><a href="#">Payment Methods</a></li>
                            <li><a href="#">Delivery</a></li>
                            <li><a href="#">Return & Exchanges</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div className="col-md-3">
                        <h5>Newsletter</h5>
                        <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                        <div className="newsletter">
                            <input type="email" placeholder="Your email" />
                            <button type="submit"><i className="bi bi-envelope-fill"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
                <p>Copyright © 2024 All rights reserved | This template is made with <span className="love">♥</span> by <a href="#">Colorlib</a></p>
            </div>
        </footer>
    );
};

export default Footer;
