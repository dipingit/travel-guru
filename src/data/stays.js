import hotel_1 from '../assets/images/hotel-1.png';
import hotel_2 from '../assets/images/hotel-2.png';
import resort from '../assets/images/resort.png'

const stays = [
    // Cox's Bazar
    {
      id: 1,
      destination: "Cox's Bazar",
      name: "Ocean View Hotel",
      description: "A sea-facing hotel with spacious rooms and stunning sunset views.",
      amenities: ["Free WiFi", "Breakfast", "Beach Access", "Swimming Pool"],
      number_of_rooms: 40,
      maximum_guest: 80,
      pricePerNight: 90,
      rating: 4.6,
      image: hotel_1,
    },
    {
      id: 2,
      destination: "Cox's Bazar",
      name: "Beachside Resort",
      description: "Relax in style just a few steps from the beach.",
      amenities: ["Air Conditioning", "Restaurant", "24/7 Service"],
      number_of_rooms: 25,
      maximum_guest: 60,
      pricePerNight: 75,
      rating: 4.2,
      image: resort
    },
  
    // Sreemangal
    {
      id: 3,
      destination: "Sreemangal",
      name: "Tea Garden Inn",
      description: "Stay amidst the serene tea gardens of Sreemangal.",
      amenities: ["Free Parking", "Garden View", "Local Cuisine"],
      number_of_rooms: 20,
      maximum_guest: 40,
      pricePerNight: 60,
      rating: 4.4,
      image: hotel_1,
    },
    {
      id: 4,
      destination: "Sreemangal",
      name: "Green Leaf Lodge",
      description: "Eco-friendly lodge with modern comforts.",
      amenities: ["Free WiFi", "Breakfast", "Nature Trails"],
      number_of_rooms: 15,
      maximum_guest: 30,
      pricePerNight: 55,
      rating: 4.1,
      image: hotel_2,
    },
  
    // Sundarbans
    {
      id: 5,
      destination: "Sundarbans",
      name: "Jungle Retreat",
      description: "An adventurous retreat close to the mangrove forest.",
      amenities: ["Boat Ride", "Wildlife Tours", "Campfire"],
      number_of_rooms: 10,
      maximum_guest: 20,
      pricePerNight: 85,
      rating: 4.8,
      image: hotel_2,
    },
    {
      id: 6,
      destination: "Sundarbans",
      name: "Mangrove Eco Resort",
      description: "Experience nature up close in this sustainable resort.",
      amenities: ["Solar Power", "Eco Tours", "Local Cuisine"],
      number_of_rooms: 12,
      maximum_guest: 24,
      pricePerNight: 70,
      rating: 4.3,
      image: resort,
    },
  ];
  
  export default stays;
  