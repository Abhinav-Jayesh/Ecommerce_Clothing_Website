import React from 'react';
import './Blog.css'; // Import your CSS here

// Updated image imports
import blog1Img from '../assets/image/blog1.jpg';
import blog2Img from '../assets/image/blog2.jpg';
import blog3Img from '../assets/image/blog3.jpg';
import blog4Img from '../assets/image/blog4.jpg';
import blog5Img from '../assets/image/blog5.jpg';
import img310 from '../assets/image/310.jpg';

const blogPosts = [
  {
    id: 1,
    date: "12 February 2030",
    title: "Top 10 Trendy Summer Dresses of 2030",
    imgSrc: blog1Img, // Use the imported image
  },
  {
    id: 2,
    date: "12 February 2030",
    title: "How to Style Your Winter Wardrobe",
    imgSrc: blog2Img,
  },
  {
    id: 3,
    date: "12 February 2030",
    title: "The Best Fabrics for Evening Gowns",
    imgSrc: blog3Img,
  },
  {
    id: 4,
    date: "12 February 2030",
    title: "Sustainable Fashion: Eco-Friendly Dress Materials",
    imgSrc: blog4Img,
  },
  {
    id: 5,
    date: "12 February 2030",
    title: "Wedding Dresses: Trends for the Modern Bride",
    imgSrc: blog5Img,
  },
  {
    id: 6,
    date: "12 February 2030",
    title: "How to Choose the Perfect Little Black Dress",
    imgSrc: img310,
  },
];

const BlogPage = () => {
  return (
    <div className="blog-background"> {/* Apply the background only to the blog page */}
      <div className="container">
        <div className="text-center mb-5">
          <h1>Our Blog</h1>
        </div>
        
        <div className="row">
          {blogPosts.map((post) => (
            <div className="col-lg-4 col-md-6 mb-4" key={post.id}>
              <div className="card h-100">
                <img className="card-img-top" src={post.imgSrc} alt={`Blog Post ${post.id}`} />
                <div className="card-body">
                  <p className="card-text small text-muted">{post.date}</p>
                  <h5 className="card-title">{post.title}</h5>
                  <a href="#" className="btn btn-link p-0">Read More</a>
                  <div className="social-icons">
                    <a href="#" title="Share on Facebook"><i className="fab fa-facebook"></i></a>
                    <a href="#" title="Share on Twitter"><i className="fab fa-twitter"></i></a>
                    <a href="#" title="Share on Instagram"><i className="fab fa-instagram"></i></a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogPage;
