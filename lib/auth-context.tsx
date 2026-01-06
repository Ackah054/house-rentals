"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  email: string
  userType: "client" | "admin" | "superadmin"
  name?: string
  phone?: string
}

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string, userType: "client" | "admin" | "superadmin") => Promise<void>
  logout: () => void
  register: (email: string, phone: string, password: string) => Promise<void>
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  // Load user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("currentUser")
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser))
      } catch (error) {
        console.error("Failed to parse stored user:", error)
      }
    }
    setLoading(false)
  }, [])

  const login = async (email: string, password: string, userType: "client" | "admin" | "superadmin") => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newUser: User = {
      id: Math.random().toString(36).substring(7),
      email,
      userType,
      name: email.split("@")[0],
    }

    setUser(newUser)
    localStorage.setItem("currentUser", JSON.stringify(newUser))
  }

  const register = async (email: string, phone: string, password: string) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))

    const newUser: User = {
      id: Math.random().toString(36).substring(7),
      email,
      phone,
      userType: "client",
      name: email.split("@")[0],
    }

    setUser(newUser)
    localStorage.setItem("currentUser", JSON.stringify(newUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("currentUser")
  }

  return (
    <AuthContext.Provider value={{ user, loading, login, logout, register, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
