import React from 'react';
import './ProductGrid.css';

const products = [
  { id: 1, name: 'Product 1', shop: 'Shop A', price: 10.99, sales: 50, rating: 4.5, image: 'https://placehold.jp/10x10.png' },
  { id: 2, name: 'Product 2', shop: 'Shop B', price: 15.99, sales: 30, rating: 4.0, image: 'https://placehold.jp/10x10.png' },
  { id: 3, name: 'Product 3', shop: 'Shop A', price: 12.99, sales: 20, rating: 4.2, image: 'https://placehold.jp/10x10.png' },
  // Add more products as needed
];

const ProductGrid = () => {
  return (
    
    <div className="product-grid">
      {products.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h2>{product.name}</h2>
          <p className="product-price">Price: ${product.price}</p>
          <p className="product-shop">Shop: {product.shop}</p>
          <p className="product-sales">Sales: {product.sales}</p>
          <div className="product-rating">
            Rating: {renderRatingStars(product.rating)}
          </div>
        </div>
      ))}
    </div>
  );
};

// Helper function to render rating stars
const renderRatingStars = (rating) => {
  const stars = [];
  const roundedRating = Math.round(rating);

  for (let i = 0; i < 5; i++) {
    if (i < roundedRating) {
      stars.push(<span key={i} className="star-filled"></span>);
    } else {
      stars.push(<span key={i} className="star"></span>);
    }
  }

  return stars;
};

export default ProductGrid;
