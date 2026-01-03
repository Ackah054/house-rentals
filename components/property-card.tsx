"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

interface Property {
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
}

export function PropertyCard({ property }: { property: Property }) {
  return (
    <div className="bg-white rounded-xl overflow-hidden border border-neutral-200 hover:shadow-lg transition">
      <div className="relative h-48 bg-neutral-100">
        <Image src={property.image || "/placeholder.svg"} alt={property.name} fill className="object-cover" />
        <div className="absolute top-4 right-4 bg-white rounded-lg px-3 py-1 font-bold text-accent">
          ★ {property.rating}
        </div>
      </div>

      <div className="p-6">
        <p className="text-sm text-neutral-600 mb-2">{property.location}</p>
        <h3 className="font-bold text-lg mb-3 line-clamp-2">{property.name}</h3>

        <div className="flex gap-4 mb-4 text-sm text-neutral-600">
          <span>🛏️ {property.beds} Beds</span>
          <span>🚿 {property.baths} Baths</span>
        </div>

        <div className="border-t border-neutral-200 pt-4 mb-4">
          <div className="text-2xl font-bold text-primary mb-1">
            ₵{property.price.toLocaleString()}
            <span className="text-sm text-neutral-600 font-normal">{property.duration}</span>
          </div>
        </div>

        <Button asChild className="w-full">
          <Link href={`/booking/${property.id}`}>{property.type === "house" ? "Rent Now" : "Book Room"}</Link>
        </Button>
      </div>
    </div>
  )
}
