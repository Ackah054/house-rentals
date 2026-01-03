"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [userType, setUserType] = useState<"client" | "admin" | "superadmin">("client")

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    // Simulate login
    setTimeout(() => {
      if (userType === "client") {
        window.location.href = "/client/dashboard"
      } else if (userType === "admin") {
        window.location.href = "/admin/dashboard"
      } else {
        window.location.href = "/superadmin/dashboard"
      }
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-primary mb-2">Welcome Back</h1>
          <p className="text-neutral-600">Login to HomeStay Ghana</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* User Type Selection */}
          <div>
            <label className="block text-sm font-semibold mb-3">Login As</label>
            <div className="grid grid-cols-3 gap-2">
              {(["client", "admin", "superadmin"] as const).map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => setUserType(type)}
                  className={`py-2 rounded-lg font-semibold transition text-sm ${
                    userType === type ? "bg-primary text-white" : "bg-neutral-100 text-foreground hover:bg-neutral-200"
                  }`}
                >
                  {type === "client" ? "Client" : type === "admin" ? "Admin" : "Super Admin"}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder="Your password"
            />
          </div>

          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Logging in..." : "Login"}
          </Button>

          <p className="text-center text-neutral-600">
            Don't have an account?{" "}
            <Link href="/register" className="text-primary font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        </form>

        {/* Demo Credentials */}
        <div className="mt-8 pt-8 border-t border-neutral-200">
          <p className="text-xs text-neutral-500 font-semibold mb-2">DEMO CREDENTIALS:</p>
          <div className="text-xs space-y-1 text-neutral-600">
            <p>
              <strong>Client:</strong> client@test.com / password
            </p>
            <p>
              <strong>Admin:</strong> admin@test.com / password
            </p>
            <p>
              <strong>Super Admin:</strong> superadmin@test.com / password
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
