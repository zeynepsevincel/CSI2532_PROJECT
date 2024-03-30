import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import RoomCard from '../components/RoomCard';
import FilterPopup from '../components/FilterPopup'; // Import the FilterPopup component
import { hotelChains } from '../data/hotels';

const FindReserve = () => {
  const [isFilterPopupOpen, setIsFilterPopupOpen] = useState(false);
  const [filteredRooms, setFilteredRooms] = useState([]);

  // Initially, extract all rooms
  const roomsToDisplay = hotelChains.flatMap(chain => 
    chain.hotels.flatMap(hotel => 
      hotel.rooms.map(room => ({
        ...room,
        hotelName: hotel.hotelName,
        chainName: chain.chainName,
        address: hotel.address,
      }))
    )
  );

  const availableAmenities = Array.from(new Set(roomsToDisplay.flatMap(room => room.amenities)));

  const handleApplyFilters = (selectedAmenities) => {
    const filtered = roomsToDisplay.filter(room => 
      selectedAmenities.every(amenity => room.amenities.includes(amenity))
    );
    setFilteredRooms(filtered);
  };

  return (
    <div className="find-reserve-container">
      <SearchBar />
      <button onClick={() => setIsFilterPopupOpen(true)} className="filter-amenities-button">
        Filter Amenities</button>
      <FilterPopup 
        isOpen={isFilterPopupOpen} 
        onClose={() => setIsFilterPopupOpen(false)} 
        onApplyFilters={handleApplyFilters} 
        availableAmenities={availableAmenities} 
      />
      <div className="room-listing">
        {(filteredRooms.length > 0 ? filteredRooms : roomsToDisplay).map((room, index) => (
          <RoomCard 
            key={index}
            room={room}
          />
        ))}
      </div>
    </div>
  );
};
export default FindReserve;
