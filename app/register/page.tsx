"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function RegisterPage() {
  const [step, setStep] = useState<"details" | "otp">("details")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [otp, setOtp] = useState("")
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate sending OTP
    setTimeout(() => {
      setStep("otp")
      setLoading(false)
    }, 1000)
  }

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate OTP verification
    setTimeout(() => {
      // In a real app, this would create the account and redirect
      alert("Account created successfully!")
      window.location.href = "/login"
      setLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-primary flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl p-8 shadow-xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-primary mb-2">Create Account</h1>
          <p className="text-neutral-600">Join HomeStay Ghana today</p>
        </div>

        {step === "details" ? (
          <form onSubmit={handleRegister} className="space-y-4">
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
              <label className="block text-sm font-semibold mb-2">Phone Number</label>
              <input
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="+233XXXXXXXXX"
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
                placeholder="At least 8 characters"
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? "Sending OTP..." : "Continue"}
            </Button>

            <p className="text-center text-neutral-600">
              Already have an account?{" "}
              <Link href="/login" className="text-primary font-semibold hover:underline">
                Login
              </Link>
            </p>
          </form>
        ) : (
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div className="bg-neutral-50 p-4 rounded-lg mb-4">
              <p className="text-sm text-neutral-600">
                We've sent a verification code to <strong>{email}</strong>
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Verification Code</label>
              <input
                type="text"
                required
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                maxLength={6}
                className="w-full px-4 py-3 text-center text-2xl border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="000000"
              />
            </div>

            <Button type="submit" className="w-full" disabled={loading || otp.length !== 6}>
              {loading ? "Verifying..." : "Verify & Create Account"}
            </Button>

            <button
              type="button"
              onClick={() => setStep("details")}
              className="w-full text-primary hover:underline font-semibold py-2"
            >
              Back
            </button>
          </form>
        )}
      </div>
    </div>
  )
}
