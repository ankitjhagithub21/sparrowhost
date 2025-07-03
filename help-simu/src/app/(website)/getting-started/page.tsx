import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Users, Target, BarChart3 } from "lucide-react"
import Link from "next/link"

export default function GettingStartedPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Platform Overview</h1>
            <p className="text-xl text-gray-600">
              Welcome to simUphish! Learn how to use our platform to run effective phishing simulations and improve your
              organization's security awareness.
            </p>
          </div>

          <div className="grid gap-6 mb-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5 text-blue-600" />
                  <CardTitle>Step 1: Account Setup</CardTitle>
                  <Badge variant="secondary">10 min</Badge>
                </div>
                <CardDescription>Configure your organization settings and user groups</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Set up your organization profile, import user lists, and configure basic settings for your phishing
                  simulation campaigns.
                </p>
                <Link
                  href="/getting-started/account-setup"
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  Complete account setup <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-red-600" />
                  <CardTitle>Step 2: Your First Campaign</CardTitle>
                  <Badge variant="secondary">20 min</Badge>
                </div>
                <CardDescription>Create and launch your first phishing simulation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Learn how to create a simple phishing campaign, select appropriate templates, and target specific user
                  groups.
                </p>
                <Link
                  href="/getting-started/first-campaign"
                  className="text-blue-600 hover:underline flex items-center gap-1"
                >
                  Create your first campaign <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-green-600" />
                  <CardTitle>Step 3: Monitor Results</CardTitle>
                  <Badge variant="secondary">5 min</Badge>
                </div>
                <CardDescription>Track campaign performance and user responses</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Monitor real-time campaign results, analyze user behavior, and generate reports for stakeholders.
                </p>
                <Link href="/analytics" className="text-blue-600 hover:underline flex items-center gap-1">
                  View analytics dashboard <ArrowRight className="h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">What is Phishing Simulation?</h3>
            <p className="text-blue-800 mb-4">
              Phishing simulation is a cybersecurity training method that sends simulated phishing emails to employees
              to test their ability to identify and respond to real threats. It's a proactive approach to security
              awareness training.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-medium text-blue-900 mb-2">Benefits</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Identify vulnerable users</li>
                  <li>• Measure security awareness levels</li>
                  <li>• Provide targeted training</li>
                  <li>• Reduce successful phishing attacks</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-blue-900 mb-2">Best Practices</h4>
                <ul className="text-sm text-blue-800 space-y-1">
                  <li>• Start with simple scenarios</li>
                  <li>• Focus on education, not punishment</li>
                  <li>• Run regular campaigns</li>
                  <li>• Provide immediate feedback</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
