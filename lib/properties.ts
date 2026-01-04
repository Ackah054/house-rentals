export interface Property {
  id: number
  name: string
  location: string
  type: "house" | "hotel"
  price: number
  duration: string
  image: string
  beds: number
  baths: number
  rating: number
  description: string
}

export const PROPERTIES: Property[] = [
  // Konongo House Rentals
  {
    id: 1,
    name: "Modern 3-Bedroom House",
    location: "Konongo",
    type: "house",
    price: 2500,
    duration: "/month",
    image: "/beautiful-3-bedroom-house.jpg",
    beds: 3,
    baths: 2,
    rating: 4.8,
    description: "Beautiful modern house with all amenities, perfect for families",
  },
  {
    id: 2,
    name: "Luxury 2-Bedroom Bungalow",
    location: "Konongo",
    type: "house",
    price: 1800,
    duration: "/month",
    image: "/luxury-bungalow-with-garden.jpg",
    beds: 2,
    baths: 1,
    rating: 4.9,
    description: "Cozy bungalow with garden and modern furnishings",
  },
  {
    id: 3,
    name: "Spacious Family Villa",
    location: "Konongo",
    type: "house",
    price: 3500,
    duration: "/month",
    image: "/spacious-family-villa.jpg",
    beds: 4,
    baths: 3,
    rating: 4.7,
    description: "Spacious villa perfect for large families with stunning views",
  },

  // Konongo Hotel Rooms
  {
    id: 4,
    name: "Premium Single Room",
    location: "Konongo",
    type: "hotel",
    price: 350,
    duration: "/night",
    image: "/luxury-hotel-single-room.jpg",
    beds: 1,
    baths: 1,
    rating: 4.6,
    description: "Comfortable hotel room with all facilities",
  },
  {
    id: 5,
    name: "Deluxe Double Room",
    location: "Konongo",
    type: "hotel",
    price: 550,
    duration: "/night",
    image: "/deluxe-hotel-double-room.jpg",
    beds: 2,
    baths: 1,
    rating: 4.8,
    description: "Deluxe double room with premium amenities",
  },

  // Kumasi Properties
  {
    id: 6,
    name: "Executive 3-Bedroom Apartment",
    location: "Kumasi",
    type: "house",
    price: 2200,
    duration: "/month",
    image: "/executive-apartment-kumasi.jpg",
    beds: 3,
    baths: 2,
    rating: 4.7,
    description: "Executive apartment with modern interior design",
  },
  {
    id: 7,
    name: "Business Hotel Suite",
    location: "Kumasi",
    type: "hotel",
    price: 650,
    duration: "/night",
    image: "/business-hotel-suite.jpg",
    beds: 2,
    baths: 1,
    rating: 4.9,
    description: "Business suite with conference room access",
  },

  // Accra Properties
  {
    id: 8,
    name: "Oceanview 2-Bedroom Penthouse",
    location: "Accra",
    type: "house",
    price: 4000,
    duration: "/month",
    image: "/oceanview-penthouse-accra.jpg",
    beds: 2,
    baths: 2,
    rating: 4.9,
    description: "Stunning oceanview penthouse in the heart of Accra",
  },
  {
    id: 9,
    name: "5-Star Resort Room",
    location: "Accra",
    type: "hotel",
    price: 800,
    duration: "/night",
    image: "/5-star-resort-room.jpg",
    beds: 2,
    baths: 2,
    rating: 5.0,
    description: "Luxurious 5-star resort room with world-class amenities",
  },
]

// Helper function to get property by ID
export function getPropertyById(id: number): Property | undefined {
  return PROPERTIES.find((p) => p.id === id)
}
