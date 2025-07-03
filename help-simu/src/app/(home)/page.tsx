'use client'
import { Header } from "@/components/header"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Code, Shield } from "lucide-react"
import Link from "next/link"


export default function HomePage() {
  
  return (
    <>
    
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">simUphish Email Configuration</h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Complete guide to configuring email delivery for simUphish phishing simulations. Learn how to whitelist
            domains and IP addresses in Google Workspace and Microsoft Outlook.
          </p>
          <div className="flex gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/email-config/google-workspace">
                Google Workspace Setup <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/email-config/outlook">Microsoft Outlook Setup</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Email Configuration & Phish Triage</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Code className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>Google Workspace</CardTitle>
                <CardDescription>Complete whitelisting guide for Google Workspace and Gmail</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" asChild className="p-0">
                  <Link href="/email-config/google-workspace">Configure Google →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>Microsoft Outlook</CardTitle>
                <CardDescription>Setup instructions for Microsoft 365 and Exchange Online</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" asChild className="p-0">
                  <Link href="/email-config/outlook">Configure Outlook →</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Phish Triage</CardTitle>
                <CardDescription>User reporting system and admin management dashboard</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" asChild className="p-0">
                  <Link href="/phish-triage">Setup Triage →</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Resources</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Google Workspace</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/email-config/google-workspace" className="text-blue-600 hover:underline">
                    Complete Whitelisting Guide
                  </Link>
                </li>
                <li>
                  <span className="text-gray-600">Domain and IP Configuration</span>
                </li>
                <li>
                  <span className="text-gray-600">Spam Filter Settings</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Microsoft Outlook</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/email-config/outlook" className="text-blue-600 hover:underline">
                    Microsoft 365 Setup
                  </Link>
                </li>
                <li>
                  <span className="text-gray-600">Exchange Online Configuration</span>
                </li>
                <li>
                  <span className="text-gray-600">Transport Rules Setup</span>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Phish Triage</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/phish-triage/outlook-addon" className="text-blue-600 hover:underline">
                    Outlook Add-in Setup
                  </Link>
                </li>
                <li>
                  <Link href="/phish-triage/admin" className="text-blue-600 hover:underline">
                    Admin Dashboard
                  </Link>
                </li>
                <li>
                  <span className="text-gray-600">User Training & Reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
