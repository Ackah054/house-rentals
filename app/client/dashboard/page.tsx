"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

const BOOKINGS = [
  {
    id: 1,
    property: "Modern 3-Bedroom House",
    location: "Konongo",
    status: "Active",
    date: "Jan 2026 - Apr 2026",
    amount: "₵7,500",
    type: "house",
  },
  {
    id: 2,
    property: "Deluxe Double Room",
    location: "Konongo",
    status: "Completed",
    date: "Dec 2025",
    amount: "₵1,650",
    type: "hotel",
  },
]

export default function ClientDashboard() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">Welcome, Client</h1>
            <Button variant="outline" asChild>
              <Link href="/logout">Logout</Link>
            </Button>
          </div>
          <p className="text-primary-light">Manage your bookings and reservations</p>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Quick Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 border border-neutral-200">
            <p className="text-neutral-600 mb-2">Active Bookings</p>
            <p className="text-3xl font-bold">1</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-neutral-200">
            <p className="text-neutral-600 mb-2">Total Spent</p>
            <p className="text-3xl font-bold text-primary">₵9,150</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-neutral-200">
            <p className="text-neutral-600 mb-2">Completed Bookings</p>
            <p className="text-3xl font-bold">1</p>
          </div>
        </div>

        {/* Bookings Section */}
        <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
          <div className="p-6 border-b border-neutral-200">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">My Bookings</h2>
              <Button asChild>
                <Link href="/browse">Browse & Book</Link>
              </Button>
            </div>
          </div>

          <div className="divide-y divide-neutral-200">
            {BOOKINGS.map((booking) => (
              <div key={booking.id} className="p-6 hover:bg-neutral-50 transition">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{booking.property}</h3>
                    <p className="text-neutral-600">{booking.location}</p>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-semibold ${
                      booking.status === "Active" ? "bg-success/20 text-success" : "bg-neutral-200 text-neutral-700"
                    }`}
                  >
                    {booking.status}
                  </span>
                </div>
                <div className="grid md:grid-cols-3 gap-4 text-sm text-neutral-600 mb-4">
                  <div>📅 {booking.date}</div>
                  <div>💳 {booking.amount}</div>
                  <div>{booking.type === "house" ? "🏠 House Rental" : "🏨 Hotel Room"}</div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                  <Button size="sm" onClick={() => window.print()}>
                    📥 Download Receipt
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
