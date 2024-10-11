import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'; // Adjust the path based on where Navbar is located
import CollectionPage from './components/Home'; // Ensure this file exists
import About from './components/About'; // Ensure this file exists
import Footer from './components/Footer'; // Ensure this file exists
import Contact from './components/Contact'; // Ensure this file exists
import Blog from './components/Blog'; // Ensure this file exists
import ProductsList from './components/Product_collection'; // Ensure this matches your folder structure
import ProductDetail from './components/View_more'; // Corrected the name to match ProductDetail component
import Log from './components/Login';
import Signup from './components/signup';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with Navbar and Footer */}
        <Route path="/home" element={<><Navbar /><CollectionPage /><Footer /></>} />
        <Route path="/about" element={<><Navbar /><About /><Footer /></>} />
        <Route path="/contact" element={<><Navbar /><Contact /><Footer /></>} />
        <Route path="/blog" element={<><Navbar /><Blog /><Footer /></>} />
        <Route path="/products" element={<><Navbar /><ProductsList /><Footer /></>} />
        <Route path="/product/:id" element={<><Navbar /><ProductDetail /><Footer /></>} />

        {/* Routes without Navbar and Footer */}
        <Route path="/" element={<Log />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App; 