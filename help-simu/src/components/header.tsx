"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Menu} from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useAuth } from "@/context/AuthContext"

export function Header() {
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { logout, user } = useAuth()


  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-2 rounded-lg shadow-sm">
              <img
                src="/images/simu-logo-detailed.png"
                alt="simUphish Logo"
                className="h-6 w-auto filter brightness-0 invert"
              />
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm">
            {/* <Link href="/getting-started" className="text-gray-600 hover:text-gray-900">
              Getting Started
            </Link>
            <Link href="/security" className="text-gray-600 hover:text-gray-900">
              Security
            </Link> */}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input placeholder="Search docs..." className="pl-10 w-64" onFocus={() => setIsSearchOpen(true)} />
            </div>
          </div>

       
          {
            user &&
            <Button variant="outline" size="sm" onClick={logout}>
              Logout
            </Button>
          }

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                {/* <Link href="/getting-started" className="text-lg">
                  Getting Started
                </Link>
                <Link href="/security" className="text-lg">
                  Security
                </Link> */}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}