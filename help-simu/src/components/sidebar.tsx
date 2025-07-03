"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronDown, ChevronRight } from "lucide-react"
import { useState } from "react"

interface SidebarItem {
  title: string
  href?: string
  items?: SidebarItem[]
}

const sidebarItems: SidebarItem[] = [
  // {
  //   title: "Getting Started",
  //   items: [
  //     { title: "Platform Overview", href: "/getting-started" },
  //     { title: "Account Setup", href: "/getting-started/account-setup" },
  //     { title: "First Campaign", href: "/getting-started/first-campaign" },
  //   ],
  // },
  // {
  //   title: "Dark Web Monitoring",
  //   items: [
  //     { title: "Overview", href: "/dark-web-monitoring" },
  //     { title: "Setup & Configuration", href: "/dark-web-monitoring/setup" },
  //     { title: "Alerts & Notifications", href: "/dark-web-monitoring/alerts" },
  //   ],
  // },
  {
    title: "Email Configuration",
    items: [
      { title: "Google Workspace", href: "/email-config/google-workspace" },
      { title: "Microsoft Outlook", href: "/email-config/outlook" },
    ],
  },
  {
    title: "Phish Triage",
    items: [
      { title: "Overview & Setup", href: "/phish-triage" },
      { title: "Outlook Add-in Installation", href: "/phish-triage/outlook-addon" },
      { title: "Admin Dashboard", href: "/phish-triage/admin" },
    ],
  },
  {
    title: "Whatsapp Configuration",
    items: [
      { title: "Overview & Setup", href: "/whatsapp-config" },
    
    ],
  },
  // {
  //   title: "Security & Compliance",
  //   items: [{ title: "Best Practices", href: "/security" }],
  // },
]

export function Sidebar() {
  const pathname = usePathname()
  const [openSections, setOpenSections] = useState<string[]>(["Email Configuration", "Phish Triage"])

  const toggleSection = (title: string) => {
    setOpenSections((prev) => (prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]))
  }

  const renderItems = (items: SidebarItem[], level = 0) => {
    return items.map((item) => {
      const isOpen = openSections.includes(item.title)
      const isActive = item.href === pathname

      return (
        <div key={item.title}>
          {item.href ? (
            <Link
              href={item.href}
              className={cn(
                "block px-3 py-2 text-sm rounded-md transition-colors",
                level > 0 && "ml-4",
                isActive ? "bg-blue-100 text-blue-900 font-medium" : "text-gray-700 hover:bg-gray-100",
              )}
            >
              {item.title}
            </Link>
          ) : (
            <button
              onClick={() => toggleSection(item.title)}
              className={cn(
                "flex items-center justify-between w-full px-3 py-2 text-sm font-medium text-gray-900 rounded-md hover:bg-gray-100",
                level > 0 && "ml-4",
              )}
            >
              {item.title}
              {item.items && (isOpen ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />)}
            </button>
          )}

          {item.items && isOpen && <div className="mt-1 space-y-1">{renderItems(item.items, level + 1)}</div>}
        </div>
      )
    })
  }

  return (
    <aside className="w-64 border-r bg-gray-50/50 p-6">
      <nav className="space-y-2">{renderItems(sidebarItems)}</nav>
    </aside>
  )
}
