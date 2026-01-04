/*"use client"

import { useState } from "react"
import Link from "next/link"
import { PropertyCard } from "@/components/property-card"

const LOCATIONS = ["All Locations", "Konongo", "Kumasi", "Accra", "Cape Coast", "Takoradi", "Tema"]

const PROPERTIES = [
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
  },
]

export default function BrowsePage() {
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [selectedType, setSelectedType] = useState<"all" | "house" | "hotel">("all")

  const filtered = PROPERTIES.filter(
    (p) =>
      (selectedLocation === "All Locations" || p.location === selectedLocation) &&
      (selectedType === "all" || p.type === selectedType),
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header *}
      <div className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="text-white hover:opacity-80 mb-4 inline-block">
            ← Back Home
          </Link>
          <h1 className="text-3xl font-bold">Browse Properties</h1>
        </div>
      </div>

      {/* Filters *}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Location Filter *}
          <div>
            <h3 className="font-bold mb-4">Location</h3>
            <div className="flex flex-wrap gap-2">
              {LOCATIONS.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setSelectedLocation(loc)}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    selectedLocation === loc
                      ? "bg-primary text-white"
                      : "bg-neutral-200 text-foreground hover:bg-neutral-300"
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>

          {/* Property Type Filter *}
          <div>
            <h3 className="font-bold mb-4">Property Type</h3>
            <div className="flex gap-4">
              {(["all", "house", "hotel"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg font-semibold transition capitalize ${
                    selectedType === type
                      ? "bg-accent text-white"
                      : "bg-neutral-200 text-foreground hover:bg-neutral-300"
                  }`}
                >
                  {type === "all" ? "All Types" : type === "house" ? "🏠 Houses" : "🏨 Hotels"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Properties Grid *}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-600 text-lg">No properties found. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}
  */
 "use client"

import { useState } from "react"
import Link from "next/link"
import { PropertyCard } from "@/components/property-card"
import { PROPERTIES } from "@/lib/properties"

const LOCATIONS = ["All Locations", "Konongo", "Kumasi", "Accra", "Cape Coast", "Takoradi", "Tema"]

export default function BrowsePage() {
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [selectedType, setSelectedType] = useState<"all" | "house" | "hotel">("all")

  const filtered = PROPERTIES.filter(
    (p) =>
      (selectedLocation === "All Locations" || p.location === selectedLocation) &&
      (selectedType === "all" || p.type === selectedType),
  )

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <Link href="/" className="text-white hover:opacity-80 mb-4 inline-block">
            ← Back Home
          </Link>
          <h1 className="text-3xl font-bold">Browse Properties</h1>
        </div>
      </div>

      {/* Filters */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Location Filter */}
          <div>
            <h3 className="font-bold mb-4">Location</h3>
            <div className="flex flex-wrap gap-2">
              {LOCATIONS.map((loc) => (
                <button
                  key={loc}
                  onClick={() => setSelectedLocation(loc)}
                  className={`px-4 py-2 rounded-lg font-semibold transition ${
                    selectedLocation === loc
                      ? "bg-primary text-white"
                      : "bg-neutral-200 text-foreground hover:bg-neutral-300"
                  }`}
                >
                  {loc}
                </button>
              ))}
            </div>
          </div>

          {/* Property Type Filter */}
          <div>
            <h3 className="font-bold mb-4">Property Type</h3>
            <div className="flex gap-4">
              {(["all", "house", "hotel"] as const).map((type) => (
                <button
                  key={type}
                  onClick={() => setSelectedType(type)}
                  className={`px-4 py-2 rounded-lg font-semibold transition capitalize ${
                    selectedType === type
                      ? "bg-accent text-white"
                      : "bg-neutral-200 text-foreground hover:bg-neutral-300"
                  }`}
                >
                  {type === "all" ? "All Types" : type === "house" ? "🏠 Houses" : "🏨 Hotels"}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-neutral-600 text-lg">No properties found. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  )
}

