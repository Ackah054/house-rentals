"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function LandingPage() {
  const [selectedType, setSelectedType] = useState<"house" | "hotel">("house")

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">🏠</span>
            </div>
            <span className="font-bold text-xl text-primary">HomeStay Ghana</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login" className="text-foreground hover:text-primary transition">
              Login
            </Link>
            <Button asChild>
              <Link href="/register">Sign Up</Link>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Find Your Perfect <span className="text-primary">Home or Room</span> in Ghana
            </h1>
            <p className="text-lg text-neutral-600 mb-8">
              Explore thousands of verified houses and hotel rooms across all locations in Ghana. Book securely,
              download receipts, and enjoy hassle-free experiences.
            </p>
            <Button asChild size="lg">
              <Link href="/browse">Explore Now</Link>
            </Button>
          </div>
          <div className="relative h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden">
            <Image src="/modern-living-room-with-furniture.jpg" alt="Modern home" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-neutral-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose HomeStay Ghana?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: "✓", title: "Verified Properties", desc: "All properties are verified and authentic" },
              { icon: "💳", title: "Secure Payment", desc: "Multiple payment methods for your convenience" },
              { icon: "📄", title: "Instant Receipts", desc: "Download receipts immediately after booking" },
              { icon: "🔒", title: "Secure & Safe", desc: "Your data is protected with encryption" },
              { icon: "⏰", title: "24/7 Support", desc: "Customer support available anytime" },
              { icon: "🎯", title: "Best Prices", desc: "Competitive rates across all locations" },
            ].map((item, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-neutral-200 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold mb-4">About</h4>
              <p className="text-neutral-400">
                HomeStay Ghana is your trusted platform for house rentals and hotel bookings.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-neutral-400">
                <li>
                  <Link href="/browse" className="hover:text-white transition">
                    Browse Properties
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-white transition">
                    About Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Support</h4>
              <ul className="space-y-2 text-neutral-400">
                <li>
                  <a href="mailto:support@homestay.com" className="hover:text-white transition">
                    Email Us
                  </a>
                </li>
                <li>
                  <a href="tel:+233XXXXXXXXX" className="hover:text-white transition">
                    Call Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <p className="text-neutral-400">Accra, Ghana</p>
            </div>
          </div>
          <div className="border-t border-neutral-700 pt-8 text-center text-neutral-400">
            <p>&copy; 2026 HomeStay Ghana. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
