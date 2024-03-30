export const hotelChains = [
  {
    chainName: 'North Star Lodgings',
    headquartersAddress: '100 Mountain Rd, Denver, CO',
    numberOfHotels: 3,
    contactEmail: 'contact@northstarlodgings.com',
    contactPhone: '1800500500',
    hotels: [
      {
        hotelName: 'North Star Seaside Resort',
        address: '2500 Boardwalk, Atlantic City, NJ',
        contactEmail: 'seaside@northstarlodgings.com',
        contactPhone: '1800500501',
        rating: 5,
        rooms: [
          {
            roomType: 'Suite',
            price: 450,
            amenities: ['King Bed', 'Ocean View', 'Hot Tub', 'Complimentary Breakfast'],
            capacity: 'Double',
            hasSeaView: true,
            isExtendable: true,
            issues: null,
            imageUrl: 'https://www.cvent.com/sites/default/files/styles/focus_scale_and_crop_800x450/public/image/2021-10/hotel%20room%20with%20beachfront%20view.jpg?h=662a4f7c&itok=7Laa3LkQ'
          },
          {
            roomType: 'Standard',
            price: 250,
            amenities: ['Two Queen Beds', 'City View', 'Free WiFi'],
            capacity: 'Quad',
            hasSeaView: false,
            isExtendable: false,
            issues: null,
            imageUrl: 'https://www.travelandleisure.com/thmb/DrKk89lVBFueSGokviOcCFPYyc8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/TAL-empty-hotel-room-BEDBUGHTL1023-93cb047ba72f48d4bc70505073ee8d10.jpg'
          },
        ],
      },
      {
        hotelName: 'North Star Mountain Escape',
        address: '750 Peakview Blvd, Boulder, CO',
        contactEmail: 'mountainescape@northstarlodgings.com',
        contactPhone: '1800500502',
        rating: 4,
        rooms: [
          {
            roomType: 'Executive Suite',
            price: 380,
            amenities: ['King Bed', 'Mountain View', 'Private Lounge', 'Complimentary Breakfast'],
            capacity: 'Double',
            hasSeaView: false,
            isExtendable: true,
            issues: null,
            imageUrl: 'https://example.com/executive-suite-image.jpg'
          },
          {
            roomType: 'Deluxe Room',
            price: 220,
            amenities: ['Queen Bed', 'Courtyard View', 'Free WiFi'],
            capacity: 'Double',
            hasSeaView: false,
            isExtendable: false,
            issues: null,
            imageUrl: 'https://example.com/deluxe-room-image.jpg'
          },
        ],
      },
      {
        hotelName: 'North Star City Center',
        address: '400 Downtown Rd, Denver, CO',
        contactEmail: 'citycenter@northstarlodgings.com',
        contactPhone: '1800500503',
        rating: 4,
        rooms: [
          {
            roomType: 'Urban Suite',
            price: 350,
            amenities: ['Queen Beds', 'City Skyline View', 'Exclusive Lounge Access'],
            capacity: 'Quad',
            hasSeaView: false,
            isExtendable: true,
            issues: null,
            imageUrl: 'https://example.com/urban-suite-image.jpg'
          },
          {
            roomType: 'Classic Room',
            price: 180,
            amenities: ['Double Bed', 'Street View', 'Complimentary Coffee'],
            capacity: 'Double',
            hasSeaView: false,
            isExtendable: false,
            issues: null,
            imageUrl: 'https://example.com/classic-room-image.jpg'
          },
        ],
      },
    ],
  },
  {
    chainName: 'Maple Leaf Resorts',
    headquartersAddress: '2020 Maple Rd, Vancouver, BC',
    numberOfHotels: 3,
    contactEmail: 'info@mapleleafresorts.com',
    contactPhone: '1800600600',
    hotels: [
      {
        hotelName: 'Maple Leaf Mountain Lodge',
        address: '303 Forest Parkway, Banff, AB',
        contactEmail: 'lodge@mapleleafresorts.com',
        contactPhone: '1800600601',
        rating: 4,
        rooms: [
          {
            roomType: 'Chalet',
            price: 500,
            amenities: ['Mountain View', 'Fireplace', 'Ski-in/Ski-out', 'Hot Tub'],
            capacity: 'Double',
            hasSeaView: false,
            isExtendable: true,
            issues: null,
            imageUrl: 'https://i.insider.com/5b980445672e1645d97594cb?width=700'
          },
          {
            roomType: 'Standard',
            price: 300,
            amenities: ['Two Double Beds', 'Mountain View', 'Balcony'],
            capacity: 'Quad',
            hasSeaView: false,
            isExtendable: false,
            issues: null,
            imageUrl: 'https://image-tc.galaxy.tf/wijpeg-6cmwjxzlipoftclhpzlyf2lu2/dsc04980-hdr-edit-opt_wide.jpg?crop=0%2C101%2C1920%2C1080'
          },
        ],
      },

  {
        hotelName: 'Maple Leaf Lakeside Inn',
        address: '120 Lakeview Drive, Whistler, BC',
        contactEmail: 'lakesideinn@mapleleafresorts.com',
        contactPhone: '1800600602',
        rating: 3,
        rooms: [
          {
            roomType: 'Lakeview Suite',
            price: 320,
            amenities: ['King Bed', 'Panoramic Lake View', 'Balcony'],
            capacity: 'Double',
            hasSeaView: true, // Assuming lake view is categorized as sea view
            isExtendable: true,
            issues: null,
            imageUrl: 'https://example.com/lakeview-suite-image.jpg'
          },
          {
            roomType: 'Cozy Cottage',
            price: 280,
            amenities: ['Fireplace', 'Lake Access', 'Kitchenette'],
            capacity: 'Quad',
            hasSeaView: true, // Assuming lake view is categorized as sea view
            isExtendable: true,
            issues: null,
            imageUrl: 'https://example.com/cozy-cottage-image.jpg'
          },
        ],
      },
      {
        hotelName: 'Maple Leaf Urban Hotel',
        address: '101 City Road, Vancouver, BC',
        contactEmail: 'urban@mapleleafresorts.com',
        contactPhone: '1800600603',
        rating: 4,
        rooms: [
          {
            roomType: 'City Suite',
            price: 400,
            amenities: ['King Bed', 'High-rise View', 'Minibar'],
            capacity: 'Double',
            hasSeaView: false,
            isExtendable: true,
            issues: null,
            imageUrl: 'https://example.com/city-suite-image.jpg'
          },
          {
            roomType: 'Economy Room',
            price: 150,
            amenities: ['Twin Beds', 'Compact Size', 'Free WiFi'],
            capacity: 'Double',
            hasSeaView: false,
            isExtendable: false,
            issues: null,
            imageUrl: 'https://example.com/economy-room-image.jpg'
          },
        ],
      },
      // Two more hotels can be added here following the pattern...
    ],
  },
  {
    chainName: 'Urban Getaway Hotels',
    headquartersAddress: '400 City Center Blvd, New York, NY',
    numberOfHotels: 2,
    contactEmail: 'stay@urbangetawayhotels.com',
    contactPhone: '1800700700',
    hotels: [
      {
        hotelName: 'Urban Getaway Downtown',
        address: '500 Urban St, Chicago, IL',
        contactEmail: 'downtown@urbangetawayhotels.com',
        contactPhone: '1800700701',
        rating: 4,
        rooms: [
          {
            roomType: 'Penthouse Suite',
            price: 700,
            amenities: ['City View', 'King Bed', 'Private Balcony', 'Butler Service'],
            capacity: 'Double',
            hasSeaView: false,
            isExtendable: true,
            issues: null,
            imageUrl: 'https://www.ca.kayak.com/rimg/kimg/a3/dd/d1773a9ca91e9374.jpg?width=1366&height=768&crop=true'
          },
          {
            roomType: 'Deluxe',
            price: 400,
            amenities: ['City View', 'Queen Bed', 'Work Desk', 'Free WiFi'],
            capacity: 'Double',
            hasSeaView: false,
            isExtendable: false,
            issues: null,
            imageUrl: 'https://sitecore-cd-imgr.shangri-la.com/MediaFiles/A/C/2/%7BAC2EB672-380C-4D28-85DE-146B6BB047E5%7DKHHK_RM_Club_City_View_1920x940.jpg'
          },
        ],
      },
      {
        hotelName: 'Urban Getaway Capitol Vista',
        address: '250 Capitol Avenue, Washington, D.C.',
        contactEmail: 'capitol@urbangetawayhotels.com',
        contactPhone: '1800700702',
        rating: 5,
        rooms: [
          {
            roomType: 'Executive Suite',
            price: 800,
            amenities: ['Capitol View', 'King Bed', 'Executive Lounge Access', 'Complimentary Limousine Service'],
            capacity: 'Double',
            hasSeaView: false,
            isExtendable: true,
            issues: null,
            imageUrl: 'https://example.com/executive-suite.jpg'
          },
          {
            roomType: 'Diplomat Deluxe',
            price: 600,
            amenities: ['City View', 'Queen Bed', 'Diplomatic Concierge', 'Priority Booking for Events'],
            capacity: 'Double',
            hasSeaView: false,
            isExtendable: true,
            issues: null,
            imageUrl: 'https://example.com/diplomat-deluxe.jpg'
          },
          {
            roomType: 'Ambassador Pod',
            price: 300,
            amenities: ['High-Speed Internet', 'Workspace', 'Access to Business Center', 'Complimentary Printing Services'],
            capacity: 'Single',
            hasSeaView: false,
            isExtendable: false,
            issues: null,
            imageUrl: 'https://example.com/ambassador-pod.jpg'
          },
        ],
      },

    ],
  },
  // Please add more chains following the same pattern...

// Adding to the existing hotelChains array
{
  chainName: 'Cascadia Boutique Retreats',
  headquartersAddress: '870 Pine St, Seattle, WA',
  numberOfHotels: 3,
  contactEmail: 'hello@cascadiaretreats.com',
  contactPhone: '1800800800',
  hotels: [
    {
      hotelName: 'Cascadia Mountain Villa',
      address: '789 Peak Rd, Aspen, CO',
      contactEmail: 'mountain@cascadiaretreats.com',
      contactPhone: '1800800801',
      rating: 5,
      rooms: [
        {
          roomType: 'Deluxe Suite',
          price: 600,
          amenities: ['Mountain View', 'King Bed', 'Private Jacuzzi', 'Fireplace', 'Complimentary Ski Passes'],
          capacity: 'Double',
          hasSeaView: false,
          isExtendable: true,
          issues: null,
          imageUrl: 'https://altitudecontrol.com/wp-content/uploads/2022/02/7132_hotel.jpg'
        },
        {
          roomType: 'Cozy Cabin',
          price: 400,
          amenities: ['Forest View', 'Queen Bed', 'Wood Stove'],
          capacity: 'Double',
          hasSeaView: false,
          isExtendable: false,
          issues: null,
          imageUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/19/c3/a1/c1/forest-view-suite.jpg'
        },
      ],
    },
    
    {
      hotelName: 'Cascadia Riverside Cottage',
      address: '60 River Rd, Portland, OR',
      contactEmail: 'riverside@cascadiaretreats.com',
      contactPhone: '1800800802',
      rating: 5,
      rooms: [
        {
          roomType: 'Riverside Bungalow',
          price: 500,
          amenities: ['River View', 'Private Dock', 'Gourmet Kitchen'],
          capacity: 'Family',
          hasSeaView: false,
          isExtendable: true,
          issues: null,
          imageUrl: 'https://example.com/riverside-bungalow-image.jpg'
        },
        {
          roomType: 'Garden Room',
          price: 250,
          amenities: ['Garden Access', 'Queen Bed', 'Patio'],
          capacity: 'Double',
          hasSeaView: false,
          isExtendable: false,
          issues: null,
          imageUrl: 'https://example.com/garden-room-image.jpg'
        },
      ],
    },
    {
      hotelName: 'Cascadia Riverside Escape',
      address: '1020 River Run, Spokane, WA',
      contactEmail: 'escape@cascadiaretreats.com',
      contactPhone: '1800800802',
      rating: 4,
      rooms: [
        {
          roomType: 'Riverside Suite',
          price: 550,
          amenities: ['Riverfront View', 'Private Balcony', 'Spa Tub', 'Room Service', 'Exclusive Fishing Tours'],
          capacity: 'Double',
          hasSeaView: false, // Since it's a river view
          isExtendable: true,
          issues: null,
          imageUrl: 'https://example.com/riverside-suite.jpg'
        },
        {
          roomType: 'Explorer Room',
          price: 350,
          amenities: ['Nature View', 'Queen Bed', 'Hiking Guide', 'Complimentary Park Pass'],
          capacity: 'Double',
          hasSeaView: false,
          isExtendable: false,
          issues: null,
          imageUrl: 'https://example.com/explorer-room.jpg'
        },
        {
          roomType: 'Adventurer Bunk',
          price: 200,
          amenities: ['Shared Room', 'Bunk Beds', 'Personal Lockers', 'Guided Nature Walks'],
          capacity: '4 People',
          hasSeaView: false,
          isExtendable: false,
          issues: null,
          imageUrl: 'https://example.com/adventurer-bunk.jpg'
        },
      ],
    },
  ],
},
{
  chainName: 'Lakeside Leisure Resorts',
  headquartersAddress: '55 Waterfront Ave, Orlando, FL',
  numberOfHotels: 4,
  contactEmail: 'contact@lakesideleisure.com',
  contactPhone: '1800900900',
  hotels: [
    {
      hotelName: 'Lakeside Leisure Orlando',
      address: '101 Lakeview St, Orlando, FL',
      contactEmail: 'orlando@lakesideleisure.com',
      contactPhone: '1800900901',
      rating: 4,
      rooms: [
        {
          roomType: 'Family Suite',
          price: 350,
          amenities: ['Lake View', 'Two Queen Beds', 'Balcony', 'Complimentary Breakfast', 'Shuttle Service to Theme Parks'],
          capacity: 'Quad',
          hasSeaView: false,
          isExtendable: true,
          issues: null,
          imageUrl: 'https://image-tc.galaxy.tf/wijpeg-ajeblqc7dsfyn6lwqmdso6vo9/west-tower-lakeview-two-queen-beds_wide.jpg?crop=29%2C0%2C1742%2C980'
        },
        {
          roomType: 'Standard Room',
          price: 200,
          amenities: ['Garden View', 'King Bed', 'Free WiFi'],
          capacity: 'Double',
          hasSeaView: false,
          isExtendable: false,
          issues: null,
          imageUrl: 'https://www.bahiahotel.com/sites/default/files/2020-07/gallery_garden-room-king.jpg'
        },
      ],
    },
    {
      hotelName: 'Lakeside Leisure Vista',
      address: '88 Horizon Line, Orlando, FL',
      contactEmail: 'vista@lakesideleisure.com',
      contactPhone: '1800900902',
      rating: 3,
      rooms: [
        {
          roomType: 'Vista Suite',
          price: 300,
          amenities: ['Lake View', 'Balcony', 'Mini Bar', 'Complimentary Bike Rental'],
          capacity: 'Double',
          hasSeaView: false, // Assuming this refers to a lake view
          isExtendable: false,
          issues: null,
          imageUrl: 'https://example.com/vista-suite-image.jpg'
        },
        {
          roomType: 'Vista Double',
          price: 200,
          amenities: ['Garden View', 'Two Double Beds', 'Access to Boat Rentals'],
          capacity: 'Quad',
          hasSeaView: false,
          isExtendable: true,
          issues: null,
          imageUrl: 'https://example.com/vista-double-image.jpg'
        },
      ],
    },
    {
      hotelName: 'Lakeside Leisure Gardens',
      address: '11 Garden Path, Orlando, FL',
      contactEmail: 'gardens@lakesideleisure.com',
      contactPhone: '1800900903',
      rating: 4,
      rooms: [
        {
          roomType: 'Garden Suite',
          price: 320,
          amenities: ['Private Garden', 'King Bed', 'Hot Tub', 'Complimentary Evening Snacks'],
          capacity: 'Double',
          hasSeaView: false,
          isExtendable: true,
          issues: null,
          imageUrl: 'https://example.com/garden-suite-image.jpg'
        },
        {
          roomType: 'Standard Garden Room',
          price: 210,
          amenities: ['Garden View', 'Queen Bed', 'Free WiFi', 'Breakfast Included'],
          capacity: 'Double',
          hasSeaView: false,
          isExtendable: false,
          issues: null,
          imageUrl: 'https://example.com/standard-garden-room-image.jpg'
        },
      ],
    },
    {
      hotelName: 'Lakeside Leisure Bayfront',
      address: '330 Bayshore Blvd, Orlando, FL',
      contactEmail: 'bayfront@lakesideleisure.com',
      contactPhone: '1800900904',
      rating: 5,
      rooms: [
        {
          roomType: 'Bayfront Exclusive',
          price: 400,
          amenities: ['Bay View', 'Private Balcony', 'Personal Concierge', 'Limo Service'],
          capacity: 'Double',
          hasSeaView: true, // Assuming this refers to a bay view
          isExtendable: true,
          issues: null,
          imageUrl: 'https://example.com/bayfront-exclusive-image.jpg'
        },
        {
          roomType: 'Bayfront Deluxe',
          price: 280,
          amenities: ['Bay View', 'King Bed', 'Access to Exclusive Lounge', 'Priority Reservations for Water Activities'],
          capacity: 'Double',
          hasSeaView: true,
          isExtendable: false,
          issues: null,
          imageUrl: 'https://example.com/bayfront-deluxe-image.jpg'
        },
      ],
    },
  ],
},
];

export default hotelChains;
