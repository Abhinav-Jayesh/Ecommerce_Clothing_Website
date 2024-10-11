import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Home.css'; // For custom styles
import firstPic from '../assets/image/firstpic.jpg'; // Import the image

// Import product images
import tshirtImg from '../assets/image/tshirt.jpg';
import jeansImg from '../assets/image/jeans.jpg';
import jacketImg from '../assets/image/jacket.jpg';
import hoodieImg from '../assets/image/hoodie.jpeg';
import skirtImg from '../assets/image/skirt.jpg';
import shortsImg from '../assets/image/shorts.jpg';
import blazerImg from '../assets/image/blazer.jpg';

// Import collection images
import tshirt2Img from '../assets/image/tshirt2.jpg';
import womendressImg from '../assets/image/womendress.jpg';
import kids2Img from '../assets/image/kids2.jpg';
import jacket2Img from '../assets/image/jacket2.jpg';
import casualshirtImg from '../assets/image/causalshirt.jpg'; 
import formalpantImg from '../assets/image/formalpant.jpg';

// Import the deal image
import kidImg from '../assets/image/kids.jpg';

// Import Instagram images
import instaImg1 from '../assets/image/insta1.jpg';
import instaImg2 from '../assets/image/insta2.jpg';
import instaImg3 from '../assets/image/insta3.jpg';
import instaImg4 from '../assets/image/insta4.jpg';
import instaImg5 from '../assets/image/insta5.jpg';
import instaImg6 from '../assets/image/insta6.jpg';

// Import new images
import fallCollectionImg from '../assets/image/fallcollection.jpg'; // New fall collection image
import discountImg from '../assets/image/discoun.jpg'; // New discount image
import newsImg from '../assets/image/news.jpg'; // New news image

const CombinedPage = () => {
  const products = [
    { imageSrc: tshirtImg, label: 'New', name: 'T-Shirt', price: '$25.00' },
    { imageSrc: jeansImg, label: 'New', name: 'Jeans', price: '$40.00' },
    { imageSrc: jacketImg, label: 'Sale', name: 'Jacket', price: '$55.00', salePrice: '$70.00' },
    { imageSrc: hoodieImg, label: 'New', name: 'Hoodie', price: '$30.00' },
    { imageSrc: skirtImg, label: 'New', name: 'Skirt', price: '$20.00' },
    { imageSrc: shortsImg, label: 'New', name: 'Shorts', price: '$15.00' },
    { imageSrc: blazerImg, label: 'Sale', name: 'Blazer', price: '$75.00', salePrice: '$90.00' },
  ];

  const collections = [
    { imageSrc: tshirt2Img, title: 'Men\'s T-Shirt' },
    { imageSrc: womendressImg, title: 'Women\'s Dress' },
    { imageSrc: kids2Img, title: 'Kids\' Clothes' },
    { imageSrc: jacket2Img, title: 'Jackets' },
    { imageSrc: casualshirtImg, title: 'Casual Shirts' },
    { imageSrc: formalpantImg, title: 'Formal Pants' },
  ];

  const deal = {
    imageSrc: kidImg,
    label: 'Deal of the Week',
    name: 'KIDS WEAR',
    price: '$29.99',
  };

  const [countdown, setCountdown] = useState({
    days: 30,
    hours: 6,
    minutes: 42,
    seconds: 0,
  });

  // Use effect to handle countdown logic
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(prev => {
        const { days, hours, minutes, seconds } = prev;
        if (seconds > 0) {
          return { ...prev, seconds: seconds - 1 };
        } else if (minutes > 0) {
          return { days, hours, minutes: minutes - 1, seconds: 59 };
        } else if (hours > 0) {
          return { days, hours: hours - 1, minutes: 59, seconds: 59 };
        } else if (days > 0) {
          return { days: days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(interval); // Stop when countdown reaches zero
          return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
      });
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <div>
      {/* Collection Page Section */}
      <div className="container-fluid d-flex align-items-center bg-black text-gold">
        <div className="container">
          <div className="row">
            {/* Left Section */}
            <div className="col-lg-6 d-flex flex-column justify-content-center position-relative collection-info">
              <h6 className="text-gold text-uppercase">Summer Collection</h6>
              <h2>Fall - Winter Collections 2030</h2>
              <p>
                A specialist label creating luxury essentials. Ethically crafted with an unwavering commitment to exceptional quality.
              </p>
              <button className="btn-gold">Shop Now</button>
              <div className="social-icons">
                <a href="#" className="icon"><img src="https://img.icons8.com/material-outlined/24/ffd700/facebook-new.png" alt="Facebook" /></a>
                <a href="#" className="icon"><img src="https://img.icons8.com/material-outlined/24/ffd700/twitter.png" alt="Twitter" /></a>
                <a href="#" className="icon"><img src="https://img.icons8.com/material-outlined/24/ffd700/pinterest.png" alt="Pinterest" /></a>
                <a href="#" className="icon"><img src="https://img.icons8.com/material-outlined/24/ffd700/instagram-new.png" alt="Instagram" /></a>
              </div>
              <div className="left-arrow text-gold">
                <i className="bi bi-arrow-left-circle"></i>
              </div>
            </div>

            {/* Right Section (Image) */}
            <div className="col-lg-6 position-relative">
              <img src={firstPic} className="img-fluid" alt="Fall Winter Collection Model" />
              <div className="right-arrow text-gold">
                <i className="bi bi-arrow-right-circle"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Cards Section */}
      <div className="container mt-5">
        <h2 className="text-center mb-4 text-gold">Featured Products</h2>
        <div className="row">
          {products.map((product, index) => (
            <div className="col-lg-3 col-md-6" key={index}>
              <div className="product-card position-relative">
                <img src={product.imageSrc} alt={product.name} />
                <div className="product-label">{product.label}</div>
                <div className="product-info">
                  <h5>{product.name}</h5>
                  <p className="product-price">
                    {product.price}{' '}
                    {product.salePrice && <span className="sale-price">{product.salePrice}</span>}
                  </p>
                  <div className="product-icons">
                    <a href="#" className="bi bi-heart"></a>
                    <a href="#" className="bi bi-arrow-left-right"></a>
                    <a href="#" className="bi bi-search"></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Collection Items Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4 text-gold">Clothing Collections</h2>
        <div className="row">
          {collections.map((collection, index) => (
            <div key={index} className="col-lg-4 col-md-6 col-sm-12 mb-4">
              <div className="collection-item position-relative">
                <img src={collection.imageSrc} alt={collection.title} className="img-fluid rounded" />
                <div className="collection-text">
                  <h3 className="text-gold">{collection.title}</h3>
                  <button className="btn-gold">Shop Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deal of the Week Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4 text-gold">Deal of the Week</h2>
        <div className="deal-section bg-black text-white p-4 rounded shadow">
          <div className="row align-items-center">
            {/* Product Image */}
            <div className="col-md-6">
              <img src={deal.imageSrc} alt={deal.name} className="img-fluid rounded deal-image" />
            </div>

            {/* Deal Details */}
            <div className="col-md-6 text-center text-md-left">
              <h3 className="text-gold text-uppercase">{deal.label}</h3>
              <h2>{deal.name}</h2>
              <div className="price-display">
                <span className="current-price text-gold">{deal.price}</span>
              </div>
              <div className="countdown mt-3">
                <div className="time-block">
                  {countdown.days} <div className="time-label text-gold">Days</div>
                </div>
                <div className="time-block">
                  {countdown.hours} <div className="time-label text-gold">Hours</div>
                </div>
                <div className="time-block">
                  {countdown.minutes} <div className="time-label text-gold">Minutes</div>
                </div>
                <div className="time-block">
                  {countdown.seconds} <div className="time-label text-gold">Seconds</div>
                </div>
              </div>
              <button className="btn-gold mt-4">Shop Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* News Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4 text-gold">Latest News</h2>
        <div className="row">
          <div className="col-md-4 mb-4">
            <div className="news-card bg-black text-gold">
              <img src={fallCollectionImg} alt="Fall Collection" className="img-fluid rounded" />
              <h5 className="text-gold">New Fall Collection Released</h5>
              <p>Discover our new fall collection featuring trendy outfits for every occasion.</p>
              <p className="text-muted">October 1, 2024</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="news-card bg-black text-gold">
              <img src={discountImg} alt="Exclusive Discounts" className="img-fluid rounded" />
              <h5 className="text-gold">Exclusive Discounts Available</h5>
              <p>Shop now and take advantage of exclusive discounts on selected items.</p>
              <p className="text-muted">September 28, 2024</p>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="news-card bg-black text-gold">
              <img src={newsImg} alt="Join Our Newsletter" className="img-fluid rounded" />
              <h5 className="text-gold">Join Our Newsletter</h5>
              <p>Stay updated with our latest offers and collections by joining our newsletter.</p>
              <p className="text-muted">September 25, 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Instagram Section */}
      <div className="container my-5">
        <h2 className="text-center mb-4 text-gold">Follow Us on Instagram</h2>
        <div className="row">
          {[instaImg1, instaImg2, instaImg3, instaImg4, instaImg5, instaImg6].map((instaImg, index) => (
            <div className="col-lg-4 col-md-6 mb-4" key={index}>
              <div className="insta-card">
                <img src={instaImg} alt={`Instagram post ${index + 1}`} className="img-fluid rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CombinedPage;
