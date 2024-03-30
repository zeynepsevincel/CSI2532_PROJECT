import React from 'react';
import { hotelChains } from '../data/hotels'; // Update this import path as necessary
import './AboutUs.css'; // Ensure the CSS file path is correct

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {hotelChains.map((chain, index) => (
        <div key={index} className="hotel-chain-card">
          <h2>{chain.chainName}</h2>
          <p>Headquarters: {chain.headquartersAddress}</p>
          <p>Contact Email: {chain.contactEmail}</p>
          <p>Contact Phone: {chain.contactPhone}</p>
          <p>Number of Hotels: {chain.numberOfHotels}</p>
          <div className="hotels-list">
            <h3>Hotels:</h3>
            <ul>
              {chain.hotels.map((hotel, hotelIndex) => (
                <li key={hotelIndex}>{hotel.hotelName}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
