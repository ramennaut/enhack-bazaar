import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import SellerList from './components/SellerList';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <SellerList/>
      <ProductGrid/>
      <Footer/>
    </div>
  );
}

export default App;
