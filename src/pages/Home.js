import React from 'react';
import './Home.css'; 
import SearchBar from '../components/SearchBar';
import HotelCard from '../components/HotelCard';

const Home = () => {
  const hotelData = [
    {
      name: "BlueWave Miami Beach",
      location: "Miami, Florida",
      price: "$350",
      stars: 5,
      imageUrl: "https://www.miamiandbeaches.com/getmedia/63620274-056c-45c3-b384-5f8d6139cf79/1hotel-south-beach-balcony-1440x900.jpg"
    },
    {
      name: 'Lakeside Tahoe Vista',
      location: 'Lake Tahoe, California',
      price: '$275',
      stars: 4,
      imageUrl: 'https://imgcy.trivago.com/c_limit,d_dummy.jpeg,f_auto,h_600,q_auto,w_600//hotelier-images/96/e4/e09d49a30b95de8e154b0bd61b66fa5612306e5e4b1b0de07674c0a74ed2.jpeg' // Replace with actual image path
    },
    {
      name: 'UrbanStay Downtown Toronto',
      location: 'Toronto, Ontario',
      price: '$180',
      stars: 3,
      imageUrl: 'https://imageio.forbes.com/specials-images/imageserve/61a26193d0b62c6be454fdde/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds'
    
    }
    // ... Add more hotel data objects based on the information you have
  ];

  return (
    <div className="home">
      <div className="parallax-section">
        <SearchBar />
      </div>
      <section className="luxury-hotels-showcase">
        <h2>Explore our most luxurious stays</h2>
        <div className="hotel-cards-container">
          {hotelData.map(hotel => (
            <HotelCard
              key={hotel.name}
              name={hotel.name}
              location={hotel.location}
              price={hotel.price}
              stars={hotel.stars}
              imageUrl={hotel.imageUrl}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
