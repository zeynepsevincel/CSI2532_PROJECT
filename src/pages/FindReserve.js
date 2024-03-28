import React, { useState } from 'react';
import SearchBar from '../components/SearchBar'; // Update the import path as necessary
import HotelCard from '../components/HotelCard'; // Update the import path as necessary
import { hotelChains } from '../components/hotels'; // Corrected path assuming hotel data is structured as provided

const FindReserve = () => {
  // Consolidating all rooms for display simplicity
  const allRooms = hotelChains.flatMap(chain => chain.hotels.flatMap(hotel => hotel.rooms.map(room => ({
    ...room,
    hotelName: hotel.hotelName, // Add hotel name to each room for clarity
    chainName: chain.chainName, // Add chain name to each room for clarity
  }))));

  // State for managing filters (simplified to a few amenities for this example)
  const [filters, setFilters] = useState({
    wifi: false,
    pool: false,
    gym: false,
  });

  // Simple filter function - extend this to match your filter UI
  const filteredRooms = allRooms.filter(room => 
    (!filters.wifi || room.amenities.includes('WiFi')) &&
    (!filters.pool || room.amenities.includes('Pool')) &&
    (!filters.gym || room.amenities.includes('Gym'))
  );

  // Function to toggle filter states
  const handleFilterChange = (filter) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  return (
    <div className="find-reserve-container">
      <SearchBar /> {/* Ensure your SearchBar can interact with the room listing */}
      <div className="filter-controls">
        {/* Simplified filter controls for demonstration */}
        <label>
          <input type="checkbox" checked={filters.wifi} onChange={() => handleFilterChange('wifi')} /> Free WiFi
        </label>
        <label>
          <input type="checkbox" checked={filters.pool} onChange={() => handleFilterChange('pool')} /> Pool
        </label>
        <label>
          <input type="checkbox" checked={filters.gym} onChange={() => handleFilterChange('gym')} /> Gym
        </label>
      </div>
      <div className="room-listing">
        {filteredRooms.length > 0 ? (
          filteredRooms.map((room, index) => (
            <HotelCard key={index} {...room} />
          ))
        ) : (
          <p>No rooms available based on selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default FindReserve;
