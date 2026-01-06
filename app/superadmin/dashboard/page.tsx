"use client"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"

const ADMINS = [
  { id: 1, name: "Admin One", email: "admin@test.com", properties: 3, status: "Active" },
  { id: 2, name: "Admin Two", email: "admin2@test.com", properties: 2, status: "Active" },
]

const ALL_TRANSACTIONS = [
  { id: 1, property: "Modern 3-Bedroom House", admin: "Admin One", amount: "₵7,500", date: "2026-01-15" },
  { id: 2, property: "Premium Single Room", admin: "Admin One", amount: "₵1,050", date: "2026-01-14" },
]

export default function SuperAdminDashboard() {
  const [showAddAdmin, setShowAddAdmin] = useState(false)
  const router = useRouter()
  const { user, isAuthenticated } = useAuth()

  useEffect(() => {
    if (!isAuthenticated || user?.userType !== "superadmin") {
      router.push("/login")
    }
  }, [isAuthenticated, user, router])

  const handleLogout = () => {
    router.push("/logout")
  }

  if (!isAuthenticated || user?.userType !== "superadmin") {
    return null
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header */}
      <div className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold">Super Admin Dashboard</h1>
            <Button variant="outline" onClick={handleLogout}>
              Logout
            </Button>
          </div>
          <p className="text-primary-light">Platform overview and admin management</p>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Platform Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 border border-neutral-200">
            <p className="text-neutral-600 mb-2">Total Admins</p>
            <p className="text-3xl font-bold">{ADMINS.length}</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-neutral-200">
            <p className="text-neutral-600 mb-2">Total Properties</p>
            <p className="text-3xl font-bold">7</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-neutral-200">
            <p className="text-neutral-600 mb-2">Total Bookings</p>
            <p className="text-3xl font-bold">65</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-neutral-200">
            <p className="text-neutral-600 mb-2">Platform Revenue</p>
            <p className="text-3xl font-bold text-primary">₵150,000+</p>
          </div>
        </div>

        {/* Admin Management */}
        <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden mb-8">
          <div className="p-6 border-b border-neutral-200 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Admin Accounts</h2>
            <Button onClick={() => setShowAddAdmin(!showAddAdmin)}>{showAddAdmin ? "Cancel" : "+ Create Admin"}</Button>
          </div>

          {showAddAdmin && (
            <div className="p-6 border-b border-neutral-200 bg-neutral-50">
              <form className="space-y-4 max-w-2xl">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg"
                />
                <input
                  type="password"
                  placeholder="Temporary Password"
                  className="w-full px-4 py-2 border border-neutral-300 rounded-lg"
                />
                <Button type="submit" className="w-full">
                  Create Admin Account
                </Button>
              </form>
            </div>
          )}

          <div className="divide-y divide-neutral-200">
            {ADMINS.map((admin) => (
              <div key={admin.id} className="p-6 hover:bg-neutral-50 transition">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-bold text-lg">{admin.name}</h3>
                    <p className="text-neutral-600">{admin.email}</p>
                  </div>
                  <span className="px-3 py-1 rounded-full text-sm font-semibold bg-success/20 text-success">
                    {admin.status}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-neutral-600">Managing {admin.properties} properties</p>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">
                      Edit
                    </Button>
                    <Button size="sm" variant="outline">
                      Delete Account
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Transactions */}
        <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden">
          <div className="p-6 border-b border-neutral-200">
            <h2 className="text-2xl font-bold">All Transactions</h2>
          </div>

          <div className="divide-y divide-neutral-200 max-h-96 overflow-y-auto">
            {ALL_TRANSACTIONS.map((txn) => (
              <div key={txn.id} className="p-6 hover:bg-neutral-50 transition">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold">{txn.property}</h3>
                    <p className="text-neutral-600 text-sm">by {txn.admin}</p>
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
