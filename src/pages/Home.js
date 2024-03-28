import React from 'react';
import './Home.css'; 
import SearchBar from '../components/SearchBar';

const Home = () => {
  return (
    <div className="home">
        <div className="parallax-section">
        <SearchBar />

      </div>
      <section className="hotels-display">
        <h2>OUR HOTELS</h2>
        {/* You'll populate this section dynamically, presumably with a list of hotels. */}
        {/* For now, we'll just simulate with placeholders */}
        <div className="hotel-placeholder"></div>
        <div className="hotel-placeholder"></div>
        <div className="hotel-placeholder"></div>
        {/* Add more placeholders or actual content as needed */}
      </section>
    </div>
  );
};

export default Home;
