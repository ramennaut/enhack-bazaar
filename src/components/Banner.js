import React from 'react';
import item1 from '../assets/featured-item-1.jpg';
import item2 from '../assets/featured-item-2.jpg';
import item3 from '../assets/featured-item-3.jpg';
import item4 from '../assets/featured-item-4.jpg';
import item5 from '../assets/featured-item-5.jpg';
import item6 from '../assets/featured-item-6.jpg';
import './Banner.css';

function Banner() {
  // Ideally, this is fetched from a database feeding from seller input of starred items
  // Finished MVP also changes this per day on rotation
  const featuredItems = [
    {
      id: 1,
      image: item1,
      title: 'Featured Item 1',
    },
    {
      id: 2,
      image: item2,
      title: 'Featured Item 2',
    },
    {
      id: 3,
      image: item3,
      title: 'Featured Item 3',
    },
    {
      id: 4,
      image: item4,
      title: 'Featured Item 4',
    },
    {
      id: 5,
      image: item5,
      title: 'Featured Item 5',
    },
    {
      id: 6,
      image: item6,
      title: 'Featured Item 6',
    }
  ];

  // Generate a random index to select a featured item for the day
  const currentDate = new Date();
  const day = currentDate.getDate();
  const selectedFeaturedItemIndex = (day - 1) % featuredItems.length;
  const selectedFeaturedItem = featuredItems[selectedFeaturedItemIndex];

  return (
    <div className="banner">
      <div className="banner-left">
        <div className="feature-grid">
          {featuredItems.map((item) => (
            <img key={item.id} src={item.image} alt={item.title} className="feature-item" />
          ))}
        </div>
      </div>
      <div className="banner-right">
        <h2>Playtopia</h2>
        <h3>The Ultimate Toy Bazaar</h3>
        <p>
          Immerse yourself in a world of limitless joy and excitement. Discover a vast array of
          hobbyist toys, from mind-bending puzzles to awe-inspiring action figures. Unleash your
          inner child and explore a universe of endless play possibilities, all-in-one online
          destination. Let the adventure begin!
        </p>
        <button>Shop Now</button>
      </div>
    </div>
  );
}

export default Banner;
