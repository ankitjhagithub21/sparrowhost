import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, Mail, Users, AlertTriangle, CheckCircle, Download, Settings } from "lucide-react"
import Link from "next/link"

export default function PhishTriagePage() {
  return (
    <div className="flex">
      
      <main className="flex-1 p-8">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Phish Triage Overview</h1>
            <p className="text-xl text-gray-600">
              Enable your users to report suspicious emails directly from Outlook and manage reported emails through a
              centralized triage system with admin controls.
            </p>
          </div>

          <Alert className="mb-8">
            <Shield className="h-4 w-4" />
            <AlertDescription>
              Phish Triage helps organizations quickly identify and respond to real phishing threats reported by users,
              while distinguishing them from simulated phishing campaigns.
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <div>
                    <CardTitle>How Phish Triage Works</CardTitle>
                    <CardDescription>Complete workflow from user reporting to admin action</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      1
                    </div>
                    <div>
                      <p className="font-medium">User Reports Suspicious Email</p>
                      <p className="text-sm text-gray-600">
                        Users click the "Report Phishing" button in Outlook to report suspicious emails
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Automatic Classification</p>
                      <p className="text-sm text-gray-600">
                        System automatically determines if the reported email is a simUphish simulation or real threat
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Triage Queue</p>
                      <p className="text-sm text-gray-600">
                        Real threats appear in the admin triage dashboard for review and action
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      4
                    </div>
                    <div>
                      <p className="font-medium">Admin Action</p>
                      <p className="text-sm text-gray-600">
                        Admins can move emails to spam/junk, mark as safe, or take other protective actions
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Download className="h-6 w-6 text-green-600" />
                  <div>
                    <CardTitle>Outlook Add-in Installation</CardTitle>
                    <CardDescription>Deploy the phishing report button to your organization</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Add-in Details</h4>
                  <div className="p-4 bg-gray-50 rounded-lg">
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Add-in URL:</strong>{" "}
                        <code className="bg-white px-2 py-1 rounded">https://simuphish.com/report.xml</code>
                      </div>
                      <div>
                        <strong>Name:</strong> simUphish Phish Reporter
                      </div>
                      <div>
                        <strong>Type:</strong> Outlook Web Add-in
                      </div>
                      <div>
                        <strong>Compatibility:</strong> Outlook 2016+, Outlook on the web, Outlook mobile
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 flex items-center gap-2">
                      <Users className="h-4 w-4 text-blue-600" />
                      Organization-wide Deployment
                    </h5>
                    <p className="text-sm text-gray-600 mb-3">Deploy to all users via Microsoft 365 Admin Center</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/phish-triage/outlook-addon">Setup Guide</Link>
                    </Button>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-medium mb-2 flex items-center gap-2">
                      <Download className="h-4 w-4 text-green-600" />
                      Individual Installation
                    </h5>
                    <p className="text-sm text-gray-600 mb-3">Users can install the add-in manually</p>
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/phish-triage/outlook-addon#individual">User Instructions</Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                  <div>
                    <CardTitle>Email Classification</CardTitle>
                    <CardDescription>How the system distinguishes between simulations and real threats</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border-l-4 border-green-500 bg-green-50">
                    <h5 className="font-semibold text-green-900 mb-2">Simulation Emails</h5>
                    <ul className="text-sm text-green-800 space-y-1">
                      <li>• Sent from simUphish domains</li>
                      <li>• Contain simulation headers</li>
                      <li>• Automatically marked as "Training"</li>
                      <li>• User receives educational feedback</li>
                      <li>• Counted in simulation metrics</li>
                    </ul>
                  </div>
                  <div className="p-4 border-l-4 border-red-500 bg-red-50">
                    <h5 className="font-semibold text-red-900 mb-2">Real Threats</h5>
                    <ul className="text-sm text-red-800 space-y-1">
                      <li>• External or unknown senders</li>
                      <li>• No simulation identifiers</li>
                      <li>• Sent to triage queue</li>
                      <li>• Require admin review</li>
                      <li>• Potential security incidents</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Automatic Processing</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium text-sm">Simulation Reported</p>
                        <p className="text-xs text-gray-600">
                          User receives immediate feedback, report logged for training metrics
                        </p>
                      </div>
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        Auto-handled
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <AlertTriangle className="h-5 w-5 text-orange-600" />
                      <div>
                        <p className="font-medium text-sm">Real Threat Reported</p>
                        <p className="text-xs text-gray-600">
                          Email forwarded to triage queue, admin notification sent
                        </p>
                      </div>
                      <Badge variant="outline" className="text-orange-600 border-orange-200">
                        Needs Review
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Settings className="h-6 w-6 text-purple-600" />
                  <div>
                    <CardTitle>Admin Triage Dashboard</CardTitle>
                    <CardDescription>Centralized management of reported phishing emails</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Available Actions</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-1">Move to Spam/Junk</h5>
                        <p className="text-xs text-gray-600">
                          Automatically move similar emails to junk folder organization-wide
                        </p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-1">Mark as Safe</h5>
                        <p className="text-xs text-gray-600">Whitelist sender and prevent future false positives</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-1">Block Sender</h5>
                        <p className="text-xs text-gray-600">
                          Add sender to organization blocklist and quarantine emails
                        </p>
                      </div>
                      <div className="p-3 border rounded-lg">
                        <h5 className="font-medium text-sm mb-1">Create Incident</h5>
                        <p className="text-xs text-gray-600">
                          Escalate to security team and create formal incident record
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Authentication & Security</h4>
                  <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="h-4 w-4 text-yellow-600" />
                      <span className="font-medium text-yellow-900">One-Time Admin Authentication</span>
                    </div>
                    <p className="text-sm text-yellow-800">
                      Admins must authenticate once per session before taking actions on reported emails. This ensures
                      only authorized personnel can modify email security policies.
                    </p>
                  </div>
                </div>

                <Button asChild>
                  <Link href="/phish-triage/admin">Access Admin Dashboard</Link>
                </Button>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Quick Setup</CardTitle>
                  <CardDescription>Get started with phish triage in minutes</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">
                        1
                      </div>
                      <span>Deploy Outlook add-in</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">
                        2
                      </div>
                      <span>Configure admin access</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-4 h-4 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs">
                        3
                      </div>
                      <span>Train users on reporting</span>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/phish-triage/outlook-addon">Start Setup</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Benefits</CardTitle>
                  <CardDescription>Why implement phish triage</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Faster threat response</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Reduced false positives</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Improved user awareness</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Centralized management</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Automated workflows</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
