import React from 'react';
import './Contact.css';

function ContactUs() {
  return (
    <div className="container">
      {/* Contact Section */}
      <div className="contact-section">
        <div className="contact-title">
          <h2>Contact Us</h2>
        </div>

        <div className="row">
          <div className="col-md-4 contact-info">
            <div className="icon">
              <i className="bi bi-geo-alt-fill"></i>
            </div>
            <h5>Kerala, India</h5>
            <p>1234 Fashion St, Kottayam, Kerala 686502</p>
          </div>

          <div className="col-md-4 contact-info">
            <div className="icon">
              <i className="bi bi-telephone-fill"></i>
            </div>
            <h5>Call Us</h5>
            <p>+91 94955 96443</p>
          </div>

          <div className="col-md-4 contact-info">
            <div className="icon">
              <i className="bi bi-envelope-fill"></i>
            </div>
            <h5>Email Us</h5>
            <p>info@example.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea rows="4" placeholder="Your Message" required></textarea>
            <button type="submit" className="send-button">
              Send Message
            </button>
          </form>
        </div>

        {/* Map Section */}
        <div className="map-container">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5036110041807!2d76.63747691533782!3d9.598491693511095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b08557ff3c1c91b%3A0xf6c1d7b021e86c8c!2sKottayam%2C%20Kerala!5e0!3m2!1sen!2sin!4v1634653648641!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
