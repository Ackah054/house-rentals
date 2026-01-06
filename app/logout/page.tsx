"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/lib/auth-context"

export default function LogoutPage() {
  const router = useRouter()
  const { logout } = useAuth()

  useEffect(() => {
    // Clear auth and redirect to home
    logout()
    router.push("/")
  }, [logout, router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50">
      <div className="text-center">
        <p className="text-lg text-neutral-600">Logging you out...</p>
      </div>
    </div>
  )
}
