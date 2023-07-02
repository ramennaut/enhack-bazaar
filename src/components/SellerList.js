import React from 'react';
import './SellerList.css';

const sellers = [
  { id: 1, logo: 'https://placehold.jp/100x50.png', name: 'Store 1' },
  { id: 2, logo: 'https://placehold.jp/100x50.png', name: 'Store 2' },
  { id: 3, logo: 'https://placehold.jp/100x50.png', name: 'Store 3' },
  { id: 4, logo: 'https://placehold.jp/100x50.png', name: 'Store 4' },
  { id: 5, logo: 'https://placehold.jp/100x50.png', name: 'Store 5' },
  { id: 6, logo: 'https://placehold.jp/100x50.png', name: 'Store 6' },
  { id: 7, logo: 'https://placehold.jp/100x50.png', name: 'Store 7' },
  { id: 8, logo: 'https://placehold.jp/100x50.png', name: 'Store 8' },
  { id: 9, logo: 'https://placehold.jp/100x50.png', name: 'Store 9' },
  { id: 10, logo: 'https://placehold.jp/100x50.png', name: 'Store 10' },
  { id: 11, logo: 'https://placehold.jp/100x50.png', name: 'Store 11' },
  { id: 12, logo: 'https://placehold.jp/100x50.png', name: 'Store 12' },
  { id: 13, logo: 'https://placehold.jp/100x50.png', name: 'Store 13' },
  { id: 14, logo: 'https://placehold.jp/100x50.png', name: 'Store 14' },
  { id: 15, logo: 'https://placehold.jp/100x50.png', name: 'Store 15' },
  { id: 16, logo: 'https://placehold.jp/100x50.png', name: 'Store 16' },
  { id: 17, logo: 'https://placehold.jp/100x50.png', name: 'Store 17' },
  { id: 18, logo: 'https://placehold.jp/100x50.png', name: 'Store 18' },
  { id: 19, logo: 'https://placehold.jp/100x50.png', name: 'Store 19' },
  { id: 20, logo: 'https://placehold.jp/100x50.png', name: 'Store 20' },
];

const SellerList = () => {
  return (
    <div className="seller-list">
      <h1>Participating Stores</h1>
      <div className="seller-grid">
        {sellers.map((seller) => (
          <div key={seller.id} className="seller-item">
            <img src={seller.logo} alt={seller.name} className="seller-logo" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SellerList;