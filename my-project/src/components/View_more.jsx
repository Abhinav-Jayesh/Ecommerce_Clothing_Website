import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './View_more.css';  // Ensure the CSS file is in the correct location

const ProductDetail = () => {
    const { id } = useParams();  // Extract the product ID from URL params
    const [product, setProduct] = useState(null);  // Store the product data
    const [loading, setLoading] = useState(true);  // Loading state for fetching data
    const [error, setError] = useState(null);  // Error state for handling API issues
    const [selectedSize, setSelectedSize] = useState('L');  // Default selected size

    useEffect(() => {
        axios.get(`http://127.0.0.1:8000/get_Product/${id}/`)
            .then(response => {
                setProduct(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching product:', error);
                setError(error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="loading">Loading product...</div>;
    }

    if (error) {
        return <div className="error">Error fetching product: {error.message}</div>;
    }

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    return (
        <div className="container product-detail-container mt-5">
            <div className="row">
                {/* Product Images */}
                <div className="col-md-6">
                    <div className="product-image">
                        {product && product.images.length > 0 ? (
                            <img src={`http://127.0.0.1:8000/${product.images[0].image}`} alt={product.name} className="img-fluid" />
                        ) : (
                            <img src="https://via.placeholder.com/300" alt={product.name} className="img-fluid" />
                        )}
                    </div>
                    {product && product.images.length > 1 && (
                        <div className="product-image mt-3">
                            <img src={`http://127.0.0.1:8000/${product.images[1].image}`} alt={product.name} className="img-fluid" />
                        </div>
                    )}
                </div>

                {/* Product Details */}
                <div className="col-md-6">
                    <h2 className="product-title">{product.name}</h2>
                    <p className="product-description">{product.description}</p>

                    {/* Price Display */}
                    <h4 className="product-price">
                        <span className="price-gold">₹{product.price.toFixed(2)}</span>
                        <small className="price-white">
                            <del>₹{(product.price * 1.3).toFixed(2)}</del>
                        </small>
                        <span className="price-red text-danger">(28% OFF)</span>
                    </h4>
                    <p>Inclusive of all taxes</p>

                    {/* Size Selection */}
                    <h5>Select Size</h5>
                    <div className="size-selector mb-3">
                        {['XS', 'S', 'M', 'L'].map(size => (
                            <button
                                key={size}
                                className={`btn size-btn ${selectedSize === size ? 'active' : ''}`}
                                onClick={() => handleSizeClick(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="d-flex gap-3 action-buttons">
                        <button className="btn btn-danger">Add to Cart</button>
                        <button className="btn btn-outline-secondary">Wishlist</button>
                    </div>

                    {/* Delivery Options */}
                    <div className="delivery-options mt-4">
                        <h5>Delivery Options</h5>
                        <input type="text" className="form-control" placeholder="Enter pincode" />
                        <button className="btn btn-primary mt-2">Check</button>
                        <ul className="mt-3 delivery-info">
                            <li>100% Original Products</li>
                            <li>Pay on Delivery might be available</li>
                            <li>Easy 14 days return and exchange</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetail;
