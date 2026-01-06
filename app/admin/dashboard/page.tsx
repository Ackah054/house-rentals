"use client"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"
import { PROPERTIES } from "@/lib/properties"

const TRANSACTIONS = [
  {
    id: 1,
    property: "Modern 3-Bedroom House",
    client: "John Doe",
    amount: "₵2,500",
    date: "2026-01-15",
    status: "Completed",
  },
  {
    id: 2,
    property: "Premium Single Room",
    client: "Jane Smith",
    amount: "₵350",
    date: "2026-01-14",
    status: "Completed",
  },
]

export default function AdminDashboard() {
  const [showAddProperty, setShowAddProperty] = useState(false)
  const router = useRouter()
  const { user, isAuthenticated } = useAuth()

  useEffect(() => {
    if (!isAuthenticated || user?.userType !== "admin") {
      router.push("/login")
    }
  }, [isAuthenticated, user, router])

  const handleLogout = () => {
    router.push("/logout")
  }

  if (!isAuthenticated || user?.userType !== "admin") {
    return null
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
          <p className="text-primary-light">Manage properties and view transactions</p>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 border border-neutral-200">
            <p className="text-neutral-600 mb-2">Total Properties</p>
            <p className="text-3xl font-bold">{PROPERTIES.length}</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-neutral-200">
            <p className="text-neutral-600 mb-2">Total Bookings</p>
            <p className="text-3xl font-bold">{PROPERTIES.reduce((sum, p) => sum + p.bookings, 0)}</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-neutral-200">
            <p className="text-neutral-600 mb-2">Revenue</p>
            <p className="text-3xl font-bold text-primary">₵50,000+</p>
          </div>
        </div>

        {/* Properties Management */}
        <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden mb-8">
          <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
            <h2 className="text-2xl font-bold">My Properties</h2>
            <Button onClick={() => setShowAddProperty(!showAddProperty)}>
              {showAddProperty ? "Cancel" : "+ Add Property"}
            </Button>
          </div>

          {showAddProperty && (
            <div className="p-6 border-b border-neutral-200 bg-neutral-50">
              <form className="space-y-4 max-w-2xl">
                <input
                  type="text"
                  placeholder="Property Name"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg"
                />
                <select className="w-full px-4 py-2 border border-neutral-300 rounded-lg">
                  <option>House Rental</option>
                  <option>Hotel Room</option>
                </select>
                <select className="w-full px-4 py-2 border border-neutral-300 rounded-lg">
                  <option>Konongo</option>
                  <option>Kumasi</option>
                  <option>Accra</option>
                </select>
                <input
                  type="number"
                  placeholder="Price"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg"
                />
                <textarea
                  placeholder="Description"
                  rows={3}
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg"
                ></textarea>
                <Button type="submit" className="w-full">
                  Add Property
                </Button>
              </form>
            </div>
          )}

          <div className="divide-y divide-neutral-200">
            {PROPERTIES.map((property) => (
              <div key={property.id} className="p-6 hover:bg-neutral-50 transition">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{property.name}</h3>
                    <p className="text-neutral-600">{property.location}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-success/20 text-success">
                    {property.status}
                  </span>
                </div>
                <div className="grid md:grid-cols-4 gap-4 text-sm mb-4">
                  <div className="text-neutral-600">
                    💰 ₵{property.price.toLocaleString()}/{property.type === "house" ? "month" : "night"}
                  </div>
                  <div className="text-neutral-600">📅 {property.bookings} Bookings</div>
                  <div className="text-neutral-600">{property.type === "house" ? "🏠 House" : "🏨 Hotel"}</div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm" variant="outline">
                    Edit
                  </Button>
                  <Button size="sm" variant="outline">
                    📸 Upload Images
                  </Button>
                  <Button size="sm" variant="outline">
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Transactions */}
        <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
          <div className="p-6 border-b border-neutral-200">
            <h2 className="text-2xl font-bold">Recent Transactions</h2>
          </div>

          <div className="divide-y divide-neutral-200">
            {TRANSACTIONS.map((txn) => (
              <div key={txn.id} className="p-6 hover:bg-neutral-50 transition">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold">{txn.property}</h3>
                    <p className="text-neutral-600 text-sm">Client: {txn.client}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-lg text-primary">{txn.amount}</p>
                    <p className="text-neutral-600 text-sm">{txn.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
