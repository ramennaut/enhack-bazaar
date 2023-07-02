import React, { useState } from 'react';
import './ProductGrid.css';

 function ProductGrid() {
  const products = [
    {
      category: "toy",
      imageSrc: "https://source.unsplash.com/300x300/?toy",
      title: "Alpha Toy",
      price: "$29.99",
      rating: 4.5,
    },
    {
      category: "toy",
      imageSrc: "https://source.unsplash.com/300x300/?action-figure",
      title: "Beta Action Figure",
      price: "$39.99",
      rating: 3.8,
    },
    {
      category: "toy",
      imageSrc: "https://source.unsplash.com/300x300/?lego",
      title: "Charlie Lego Set",
      price: "$34.99",
      rating: 4.2,
    },
    {
      category: "shirt",
      imageSrc: "https://source.unsplash.com/300x300/?toy-shirt",
      title: "Delta Toy Shirt",
      price: "$19.99",
      rating: 4.1,
    },
    {
      category: "shirt",
      imageSrc: "https://source.unsplash.com/300x300/?superhero-shirt",
      title: "Echo Superhero Shirt",
      price: "$24.99",
      rating: 3.9,
    },
    {
      category: "shirt",
      imageSrc: "https://source.unsplash.com/300x300/?toy-clothing",
      title: "Foxtrot Toy Clothing",
      price: "$29.99",
      rating: 4.3,
    },
    {
      category: "gown",
      imageSrc: "https://source.unsplash.com/300x300/?princess-gown",
      title: "Golf Princess Gown",
      price: "$49.99",
      rating: 4.7,
    },
    {
      category: "shirt",
      imageSrc: "https://source.unsplash.com/300x300/?toy-polo",
      title: "Hotel Toy Polo Shirt",
      price: "$39.99",
      rating: 4.0,
    },
    {
      category: "shirt",
      imageSrc: "https://source.unsplash.com/300x300/?toy-mens-shirt",
      title: "India Toy Men's Shirt",
      price: "$34.99",
      rating: 4.4,
    },
    {
      category: "jewelry",
      imageSrc: "https://source.unsplash.com/300x300/?toy-jewelry",
      title: "Juliet Toy Jewelry",
      price: "$59.99",
      rating: 4.9,
    },
    {
      category: "jewelry",
      imageSrc: "https://source.unsplash.com/300x300/?necklace-toy",
      title: "Kilo Toy Necklace",
      price: "$44.99",
      rating: 4.6,
    },
    {
      category: "jewelry",
      imageSrc: "https://source.unsplash.com/300x300/?ring-toy",
      title: "Lima Toy Ring",
      price: "$39.99",
      rating: 4.2,
    },
  ];

  const [filter, setFilter] = useState('all');
  const [searchText, setSearchText] = useState('');
  const [sortSelect, setSortSelect] = useState('price-low');


  const handleFilterChange = (filter) => {
    setFilter(filter);
  };

  const handleSearchChange = (e) => {
    setSearchText(e.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) => {
    if (filter === 'all' || product.category === filter) {
      return product.title.toLowerCase().includes(searchText);
    }
    return false;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortSelect === 'price-low') {
      return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
    } else if (sortSelect === 'price-high') {
      return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
    } else if (sortSelect === 'rating') {
      return b.rating - a.rating;
    } else if (sortSelect === 'alphabetical') {
      return a.title.localeCompare(b.title);
    }
    return 0;
  });

  return (
    <div>
      <div>
        <div className="container">
          <h1>Your next find.</h1>
          <div className="search-box">
            <input type="text" id="search" placeholder="Search Products" onChange={handleSearchChange} />
          </div>
          {/* <div className="filter-box">
            <a href="#" className={`btn ${filter === 'all' ? 'active' : ''}`} onClick={() => handleFilterChange('all')}>
              All
            </a>
            <a href="#" className={`btn ${filter === 'watch' ? 'active' : ''}`} onClick={() => handleFilterChange('watch')}>
              Watch
            </a>
            <a href="#" className={`btn ${filter === 'shirt' ? 'active' : ''}`} onClick={() => handleFilterChange('shirt')}>
              Shirt
            </a>
            <a href="#" className={`btn ${filter === 'gown' ? 'active' : ''}`} onClick={() => handleFilterChange('gown')}>
              Gown
            </a>
            <a href="#" className={`btn ${filter === 'jewelry' ? 'active' : ''}`} onClick={() => handleFilterChange('jewelry')}>
              Jewelry
            </a>
          </div> */}
          <div className="sort-box">
            <label htmlFor="sort-select">Sort By:</label>
            <select id="sort-select" onChange={(e) => setSortSelect(e.target.value)}>
              <option value="price-low">Lowest Price</option>
              <option value="price-high">Highest Price</option>
              <option value="rating">Rating</option>
              <option value="alphabetical">Alphabetical</option>
            </select>
          </div>
        </div>
      </div>
      <main>
        <div className="main-container">
          <section className="container" id="store-products">
            {sortedProducts.map((product, index) => (
              <div className={`store-product ${product.category}`} key={index} data-price={product.price.replace('$', '')} data-rating={product.rating}>
                <img src={product.imageSrc} alt="" />
                <div className="product-details">
                  
                  <h2 className="product-item">{product.title}</h2>
                  <p className="product-shop">Shop: {product.shop}</p>
                  <p className='product-rating'>Rating: {product.rating}</p>
                  <p className='product-price'>{product.price}</p>
                  <button><a href="#">Add to Cart</a></button>
                </div>
              </div>
            ))}
          </section>
          <div className="container no-result" style={{ display: sortedProducts.length === 0 ? 'block' : 'none' }}>
            <p>No more products found.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ProductGrid

// const products = [
//   { id: 1, name: 'Product 1', shop: 'Shop A', price: 10.99, sales: 50, rating: 4.5, image: 'https://placehold.jp/10x10.png' },
//   { id: 2, name: 'Product 2', shop: 'Shop B', price: 15.99, sales: 30, rating: 4.0, image: 'https://placehold.jp/10x10.png' },
//   { id: 3, name: 'Product 3', shop: 'Shop A', price: 12.99, sales: 20, rating: 4.2, image: 'https://placehold.jp/10x10.png' },
//   // Add more products as needed
// ];

// const ProductGrid = () => {
//   return (
//     <div className="product-grid">
//       {products.map((product) => (
//         <div key={product.id} className="product-card">
//           <img src={product.image} alt={product.name} className="product-image" />
//           <h2>{product.name}</h2>
//           <p className="product-price">Price: ${product.price}</p>
//           <p className="product-shop">Shop: {product.shop}</p>
//           <p className="product-sales">Sales: {product.sales}</p>
//           <div className="product-rating">
//             Rating: {renderRatingStars(product.rating)}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// // Helper function to render rating stars
// const renderRatingStars = (rating) => {
//   const stars = [];
//   const roundedRating = Math.round(rating);

//   for (let i = 0; i < 5; i++) {
//     if (i < roundedRating) {
//       stars.push(<span key={i} className="star-filled"></span>);
//     } else {
//       stars.push(<span key={i} className="star"></span>);
//     }
//   }

//   return stars;
// };

// export default ProductGrid;

