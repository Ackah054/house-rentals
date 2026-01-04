/*"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const PROPERTIES: Record<string, any> = {
  "1": {
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
    description: "Beautiful modern house with all amenities",
  },
  "2": {
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
    description: "Cozy bungalow with garden",
  },
  "4": {
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
}

export default function BookingPage({ params }: { params: { id: string } }) {
  const property = PROPERTIES[params.id]
  const [step, setStep] = useState<"booking" | "payment" | "receipt">("booking")
  const [loading, setLoading] = useState(false)

  // Booking details
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [duration, setDuration] = useState(1)

  if (!property) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Property not found</h1>
          <Button asChild>
            <Link href="/browse">Browse Properties</Link>
          </Button>
        </div>
      </div>
    )
  }

  const totalPrice = property.price * duration

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setStep("payment")
      setLoading(false)
    }, 1000)
  }

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setStep("receipt")
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/browse" className="text-primary hover:underline mb-4 inline-block">
          ← Back to Browse
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Property Details *}
          <div>
            <div className="relative h-96 bg-neutral-100 rounded-xl overflow-hidden mb-4">
              <Image src={property.image || "/placeholder.svg"} alt={property.name} fill className="object-cover" />
            </div>
            <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
            <p className="text-neutral-600 mb-4">{property.location}</p>
            <p className="text-neutral-600 mb-6">{property.description}</p>

            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-neutral-200">
                <span className="text-neutral-600">Bedrooms:</span>
                <span className="font-semibold">{property.beds}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-200">
                <span className="text-neutral-600">Bathrooms:</span>
                <span className="font-semibold">{property.baths}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-200">
                <span className="text-neutral-600">Rating:</span>
                <span className="font-semibold">★ {property.rating}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-neutral-600">Price:</span>
                <span className="font-semibold">
                  ₵{property.price.toLocaleString()}
                  {property.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Booking Form *}
          <div className="bg-white border border-neutral-200 rounded-xl p-6 sticky top-24 h-fit">
            {step === "booking" && (
              <form onSubmit={handleBooking} className="space-y-4">
                <h2 className="text-2xl font-bold mb-6">Complete Booking</h2>

                {property.type === "house" ? (
                  <>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Start Date</label>
                      <input
                        type="date"
                        required
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Duration (months)</label>
                      <input
                        type="number"
                        min="1"
                        value={duration}
                        onChange={(e) => setDuration(Number.parseInt(e.target.value))}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Check-in Date</label>
                      <input
                        type="date"
                        required
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Check-out Date</label>
                      <input
                        type="date"
                        required
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Number of Nights</label>
                      <input
                        type="number"
                        min="1"
                        value={duration}
                        onChange={(e) => setDuration(Number.parseInt(e.target.value))}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg"
                      />
                    </div>
                  </>
                )}

                <div className="bg-neutral-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>Price per {property.type === "house" ? "month" : "night"}:</span>
                    <span>₵{property.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Duration:</span>
                    <span>{duration}</span>
                  </div>
                  <div className="border-t border-neutral-200 pt-2 mt-2 flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span className="text-primary">₵{totalPrice.toLocaleString()}</span>
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Processing..." : "Proceed to Payment"}
                </Button>
              </form>
            )}

            {step === "payment" && (
              <form onSubmit={handlePayment} className="space-y-4">
                <h2 className="text-2xl font-bold mb-6">Payment Details</h2>

                <div>
                  <label className="block text-sm font-semibold mb-2">Payment Method</label>
                  <select className="w-full px-4 py-2 border border-neutral-300 rounded-lg">
                    <option>Mobile Money</option>
                    <option>Bank Transfer</option>
                    <option>Card Payment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="bg-neutral-50 p-4 rounded-lg">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Amount Due:</span>
                    <span className="text-primary">₵{totalPrice.toLocaleString()}</span>
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Processing Payment..." : "Complete Payment"}
                </Button>

                <button
                  type="button"
                  onClick={() => setStep("booking")}
                  className="w-full text-primary hover:underline font-semibold py-2"
                >
                  Back
                </button>
              </form>
            )}

            {step === "receipt" && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">✓</div>
                  <h2 className="text-2xl font-bold text-success">Booking Confirmed!</h2>
                  <p className="text-neutral-600">Your reservation is complete</p>
                </div>

                <div className="bg-neutral-50 p-6 rounded-lg space-y-4">
                  <div>
                    <p className="text-sm text-neutral-600">Booking Reference</p>
                    <p className="font-bold text-lg">HOMESTAY{Math.random().toString(36).substring(7).toUpperCase()}</p>
                  </div>

                  <div className="border-t border-neutral-200 pt-4">
                    <p className="text-sm text-neutral-600">Property</p>
                    <p className="font-semibold">{property.name}</p>
                    <p className="text-neutral-600 text-sm">{property.location}</p>
                  </div>

                  <div className="border-t border-neutral-200 pt-4">
                    <p className="text-sm text-neutral-600">Total Amount</p>
                    <p className="font-bold text-2xl text-primary">₵{totalPrice.toLocaleString()}</p>
                  </div>
                </div>

                <Button className="w-full" onClick={() => window.print()}>
                  📥 Download Receipt
                </Button>

                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/client/dashboard">View My Bookings</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
*/

"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { getPropertyById } from "@/lib/properties"

const PROPERTIES: Record<string, any> = {
  "1": {
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
    description: "Beautiful modern house with all amenities",
  },
  "2": {
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
    description: "Cozy bungalow with garden",
  },
  "4": {
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
}

export default function BookingPage({ params }: { params: { id: string } }) {
  const property = getPropertyById(Number.parseInt(params.id))
  const [step, setStep] = useState<"booking" | "payment" | "receipt">("booking")
  const [loading, setLoading] = useState(false)

  // Booking details
  const [startDate, setStartDate] = useState("")
  const [endDate, setEndDate] = useState("")
  const [duration, setDuration] = useState(1)

  if (!property) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Property not found</h1>
          <Button asChild>
            <Link href="/browse">Browse Properties</Link>
          </Button>
        </div>
      </div>
    )
  }

  const totalPrice = property.price * duration

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setStep("payment")
      setLoading(false)
    }, 1000)
  }

  const handlePayment = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setStep("receipt")
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <Link href="/browse" className="text-primary hover:underline mb-4 inline-block">
          ← Back to Browse
        </Link>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Property Details */}
          <div>
            <div className="relative h-96 bg-neutral-100 rounded-xl overflow-hidden mb-4">
              <Image src={property.image || "/placeholder.svg"} alt={property.name} fill className="object-cover" />
            </div>
            <h1 className="text-3xl font-bold mb-2">{property.name}</h1>
            <p className="text-neutral-600 mb-4">{property.location}</p>
            <p className="text-neutral-600 mb-6">{property.description}</p>

            <div className="space-y-4">
              <div className="flex justify-between py-2 border-b border-neutral-200">
                <span className="text-neutral-600">Bedrooms:</span>
                <span className="font-semibold">{property.beds}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-200">
                <span className="text-neutral-600">Bathrooms:</span>
                <span className="font-semibold">{property.baths}</span>
              </div>
              <div className="flex justify-between py-2 border-b border-neutral-200">
                <span className="text-neutral-600">Rating:</span>
                <span className="font-semibold">★ {property.rating}</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-neutral-600">Price:</span>
                <span className="font-semibold">
                  ₵{property.price.toLocaleString()}
                  {property.duration}
                </span>
              </div>
            </div>
          </div>

          {/* Booking Form */}
          <div className="bg-white border border-neutral-200 rounded-xl p-6 sticky top-24 h-fit">
            {step === "booking" && (
              <form onSubmit={handleBooking} className="space-y-4">
                <h2 className="text-2xl font-bold mb-6">Complete Booking</h2>

                {property.type === "house" ? (
                  <>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Start Date</label>
                      <input
                        type="date"
                        required
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Duration (months)</label>
                      <input
                        type="number"
                        min="1"
                        value={duration}
                        onChange={(e) => setDuration(Number.parseInt(e.target.value))}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg"
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Check-in Date</label>
                      <input
                        type="date"
                        required
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Check-out Date</label>
                      <input
                        type="date"
                        required
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold mb-2">Number of Nights</label>
                      <input
                        type="number"
                        min="1"
                        value={duration}
                        onChange={(e) => setDuration(Number.parseInt(e.target.value))}
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg"
                      />
                    </div>
                  </>
                )}

                <div className="bg-neutral-50 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>Price per {property.type === "house" ? "month" : "night"}:</span>
                    <span>₵{property.price.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span>Duration:</span>
                    <span>{duration}</span>
                  </div>
                  <div className="border-t border-neutral-200 pt-2 mt-2 flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span className="text-primary">₵{totalPrice.toLocaleString()}</span>
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Processing..." : "Proceed to Payment"}
                </Button>
              </form>
            )}

            {step === "payment" && (
              <form onSubmit={handlePayment} className="space-y-4">
                <h2 className="text-2xl font-bold mb-6">Payment Details</h2>

                <div>
                  <label className="block text-sm font-semibold mb-2">Payment Method</label>
                  <select className="w-full px-4 py-2 border border-neutral-300 rounded-lg">
                    <option>Mobile Money</option>
                    <option>Bank Transfer</option>
                    <option>Card Payment</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="bg-neutral-50 p-4 rounded-lg">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Amount Due:</span>
                    <span className="text-primary">₵{totalPrice.toLocaleString()}</span>
                  </div>
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Processing Payment..." : "Complete Payment"}
                </Button>

                <button
                  type="button"
                  onClick={() => setStep("booking")}
                  className="w-full text-primary hover:underline font-semibold py-2"
                >
                  Back
                </button>
              </form>
            )}

            {step === "receipt" && (
              <div className="space-y-6">
                <div className="text-center mb-6">
                  <div className="text-4xl mb-2">✓</div>
                  <h2 className="text-2xl font-bold text-success">Booking Confirmed!</h2>
                  <p className="text-neutral-600">Your reservation is complete</p>
                </div>

                <div className="bg-neutral-50 p-6 rounded-lg space-y-4">
                  <div>
                    <p className="text-sm text-neutral-600">Booking Reference</p>
                    <p className="font-bold text-lg">HOMESTAY{Math.random().toString(36).substring(7).toUpperCase()}</p>
                  </div>

                  <div className="border-t border-neutral-200 pt-4">
                    <p className="text-sm text-neutral-600">Property</p>
                    <p className="font-semibold">{property.name}</p>
                    <p className="text-neutral-600 text-sm">{property.location}</p>
                  </div>

                  <div className="border-t border-neutral-200 pt-4">
                    <p className="text-sm text-neutral-600">Total Amount</p>
                    <p className="font-bold text-2xl text-primary">₵{totalPrice.toLocaleString()}</p>
                  </div>
                </div>

                <Button className="w-full" onClick={() => window.print()}>
                  📥 Download Receipt
                </Button>

                <Button asChild variant="outline" className="w-full bg-transparent">
                  <Link href="/client/dashboard">View My Bookings</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
