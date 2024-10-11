import React from 'react';
import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faStar, faFolderOpen, faSmile } from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';

// Import the images
import tshirtImg from '../assets/image/jo.jpg';
import johnImg from '../assets/image/john.jpg';
import christineImg from '../assets/image/christine.jpg';
import seanImg from '../assets/image/sean.jpg';
import lucyImg from '../assets/image/lucy.jpg';

// Import client logos
import client1 from '../assets/image/client1.jpg';
import client2 from '../assets/image/client2.jpg';
import client3 from '../assets/image/client3.jpg';
import client4 from '../assets/image/client4.jpg';
import client5 from '../assets/image/client5.jpg';

const WhoWeAre = () => {
  return (
    <div className="container my-5">
      {/* About Section */}
      <div className="about-section mb-5">
        <div className="section-title">
          <h2>Who We Are?</h2>
        </div>
        <div className="about-content">
          <div className="mission">
            <h3>Our Mission</h3>
            <p>We are dedicated to providing the best fashion solutions that meet our customers' needs, ensuring quality and style.</p>
          </div>
          <div className="what-we-do">
            <h3>What We Do?</h3>
            <p>We offer a wide range of products, from clothing to accessories, ensuring you find exactly what you need.</p>
          </div>
          <div className="why-choose-us">
            <h3>Why Choose Us?</h3>
            <p>We prioritize customer satisfaction, and our unique designs set us apart in the fashion industry.</p>
          </div>
        </div>
      </div>

      {/* Quote Section */}
      <div className="quote-section">
        <p>"Going out and about? Take your fashion styling with you to the office, the gym, or just out for your hair. You have the time and you won't lose a minute in getting back home."</p>
        <p className="author">Augustus Schultz, Fashion Designer</p>
      </div>

      {/* Stats Section */}
      <div className="stats-section mb-5">
        <h3>Our Stats</h3>
        <div className="row text-center">
          <div className="col-md-3">
            <div className="stat">
              <FontAwesomeIcon icon={faUsers} />
              <span>102</span>
            </div>
            <p>Our Clients</p>
          </div>
          <div className="col-md-3">
            <div className="stat">
              <FontAwesomeIcon icon={faFolderOpen} />
              <span>30</span>
            </div>
            <p>Total Categories</p>
          </div>
          <div className="col-md-3">
            <div className="stat">
              <FontAwesomeIcon icon={faStar} />
              <span>102</span>
            </div>
            <p>In Country</p>
          </div>
          <div className="col-md-3">
            <div className="stat">
              <FontAwesomeIcon icon={faSmile} />
              <span>98%</span>
            </div>
            <p>Happy Customers</p>
          </div>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="timeline-section mb-5">
        <h3>Our Journey</h3>
        <div className="row">
          <div className="col-md-6">
            <div className="timeline">
              <div className="timeline-item">
                <span className="year">2010</span>
                <p>Founded with a vision to revolutionize fashion.</p>
              </div>
              <div className="timeline-item">
                <span className="year">2015</span>
                <p>Launched our first clothing line and gained popularity.</p>
              </div>
              <div className="timeline-item">
                <span className="year">2020</span>
                <p>Expanded our range to include accessories and home decor.</p>
              </div>
              <div className="timeline-item">
                <span className="year">2024</span>
                <p>Recognized as a leading brand in sustainable fashion.</p>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <img src={tshirtImg} alt="Our Journey" className="journey-image" />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section mb-5">
        <h3>Meet Our Team</h3>
        <div className="row">
          <div className="col-md-3 team-member">
            <img src={johnImg} alt="John Smith" />
            <h5>John Smith</h5>
            <p>Fashion Designer</p>
          </div>
          <div className="col-md-3 team-member">
            <img src={christineImg} alt="Christine Wise" />
            <h5>Christine Wise</h5>
            <p>CEO</p>
          </div>
          <div className="col-md-3 team-member">
            <img src={seanImg} alt="Sean Robbins" />
            <h5>Sean Robbins</h5>
            <p>Manager</p>
          </div>
          <div className="col-md-3 team-member">
            <img src={lucyImg} alt="Lucy Myers" />
            <h5>Lucy Myers</h5>
            <p>Delivery</p>
          </div>
        </div>
      </div>

      {/* Clients Section */}
      <div className="clients-section">
        <h3>Happy Clients</h3>
        <div className="clients-logos d-flex flex-wrap justify-content-center">
          <img src={client1} alt="Client Logo 1" />
          <img src={client2} alt="Client Logo 2" />
          <img src={client3} alt="Client Logo 3" />
          <img src={client4} alt="Client Logo 4" />
          <img src={client5} alt="Client Logo 5" />
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
