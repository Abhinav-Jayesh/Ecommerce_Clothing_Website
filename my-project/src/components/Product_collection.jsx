import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Importing Link for navigation
import axios from 'axios';
import './Product_collectiion.css'; // CSS file for styling

const ProductsList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/get_Products/')
      .then(response => {
        console.log(response.data); // Log the response for debugging
        setProducts(response.data);
      })
      .catch(error => {
        setError('Error fetching products');
      });
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Our Products</h1>
      {error && <p className="text-danger text-center">{error}</p>}
      <div className="row">
        {products.map(product => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
            <div className="card product-card">
              {product.images.length > 0 ? (
                <img 
                  src={`http://127.0.0.1:8000${product.images[0].image}`} 
                  alt={product.name} 
                  className="card-img-top" 
                />
              ) : (
                <img 
                  src="https://via.placeholder.com/300" 
                  alt={product.name} 
                  className="card-img-top" 
                />
              )}
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">Price: ₹{product.price.toFixed(2)}</p>
                <p className="card-text">{product.description.slice(0, 50)}...</p> {/* Short description */}
                <div className="product-rating">
                  {Array.from({ length: 5 }, (_, index) => (
                    <span key={index} className={`star ${index < product.rating ? 'filled' : ''}`}>★</span>
                  ))}
                </div>
                <Link to={`/product/${product.id}`} className="btn btn-primary btn-product">VIEW MORE</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsList;
