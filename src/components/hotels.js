export const hotelChains = [
    {
      chainName: "BlueWave Hotels & Resorts",
      centralOffice: "123 Ocean Drive, Miami, FL",
      numberOfHotels: 3,
      contactEmail: "info@bluewavehotels.com",
      contactPhone: "305-555-0123",
      hotels: [
        {
          hotelName: "BlueWave Miami Beach",
          hotelClass: 5,
          numberOfRooms: 200,
          hotelAddress: "1000 Boardwalk, Miami Beach, FL",
          hotelContactEmail: "booking@miamibeach.bluewave.com",
          hotelContactPhone: "305-555-1000",
          rooms: [
            {
              roomId: "BWM-101",
              price: 300,
              amenities: ["Ocean View", "WiFi", "Pool", "Spa", "Gym", "Minibar"],
              capacity: "Double",
              extendable: true,
              view: "Ocean",
              damage: false,
            },
            {
              roomId: "BWM-102",
              price: 280,
              amenities: ["City View", "WiFi", "Pool"],
              capacity: "Single",
              extendable: false,
              view: "City",
              damage: false,
            },
            // More rooms...
          ],
        },
        // More hotels for BlueWave Hotels & Resorts...
      ],
    },
    {
      chainName: "MountView Hospitality",
      centralOffice: "400 Mountain Rd, Denver, CO",
      numberOfHotels: 4,
      contactEmail: "info@mountviewhospitality.com",
      contactPhone: "303-555-0400",
      hotels: [
        {
          hotelName: "MountView Lakeside",
          hotelClass: 4,
          numberOfRooms: 120,
          hotelAddress: "50 Lakefront Road, Denver, CO",
          hotelContactEmail: "bookings@lakeside.mountview.com",
          hotelContactPhone: "303-555-0500",
          rooms: [
            {
              roomId: "MVL-201",
              price: 250,
              amenities: ["Lake View", "Balcony", "WiFi", "Breakfast Included"],
              capacity: "Suite",
              extendable: true,
              view: "Lake",
              damage: false,
            },
            {
              roomId: "MVL-202",
              price: 220,
              amenities: ["Mountain View", "WiFi", "Hot Tub"],
              capacity: "Double",
              extendable: false,
              view: "Mountain",
              damage: false,
            },
            // More rooms...
          ],
        },
        // More hotels for MountView Hospitality...
      ],
    },
    // ... (Additional hotel chains and their hotels)
  ];
  
  export default hotelChains;
  