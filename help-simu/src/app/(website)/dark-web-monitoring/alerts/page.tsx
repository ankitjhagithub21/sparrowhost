import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Bell, Mail, MessageSquare, Webhook, AlertTriangle, CheckCircle, Clock } from "lucide-react"

export default function DarkWebAlertsPage() {
  return (
    <div className="flex">
    
      <main className="flex-1 p-8">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Alerts & Notifications</h1>
            <p className="text-xl text-gray-600">
              Configure how and when you receive notifications about dark web threats targeting your organization.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Bell className="h-6 w-6 text-blue-600" />
                  <div>
                    <CardTitle>Notification Channels</CardTitle>
                    <CardDescription>Configure multiple channels for receiving alerts</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Mail className="h-5 w-5 text-blue-600" />
                      <h5 className="font-semibold">Email Notifications</h5>
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        Active
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Primary:</strong> security@company.com
                      </div>
                      <div>
                        <strong>Secondary:</strong> admin@company.com
                      </div>
                      <div>
                        <strong>Frequency:</strong> Immediate for Critical/High
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-3">
                      Configure
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <MessageSquare className="h-5 w-5 text-green-600" />
                      <h5 className="font-semibold">Slack Integration</h5>
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        Active
                      </Badge>
                    </div>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Channel:</strong> #security-alerts
                      </div>
                      <div>
                        <strong>Workspace:</strong> Company Workspace
                      </div>
                      <div>
                        <strong>Mentions:</strong> @security-team
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-3">
                      Configure
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Webhook className="h-5 w-5 text-purple-600" />
                      <h5 className="font-semibold">Webhook Integration</h5>
                      <Badge variant="outline">Inactive</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>Send alerts to your SIEM or SOAR platform</div>
                      <div>Real-time JSON payload delivery</div>
                      <div>Custom endpoint configuration</div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-3">
                      Setup Webhook
                    </Button>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center gap-3 mb-3">
                      <Bell className="h-5 w-5 text-orange-600" />
                      <h5 className="font-semibold">SMS Alerts</h5>
                      <Badge variant="outline">Inactive</Badge>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div>Critical alerts via SMS</div>
                      <div>Emergency contact numbers</div>
                      <div>After-hours notifications</div>
                    </div>
                    <Button variant="outline" size="sm" className="mt-3">
                      Setup SMS
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  <div>
                    <CardTitle>Alert Rules & Escalation</CardTitle>
                    <CardDescription>Define when and how alerts are escalated</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="font-semibold flex items-center gap-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        Critical Alerts
                      </h5>
                      <Badge variant="destructive">Immediate</Badge>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Triggers:</strong>
                        <ul className="mt-1 space-y-1 text-gray-600">
                          <li>• Active credential sales</li>
                          <li>• Executive account compromises</li>
                          <li>• Ongoing targeted attacks</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Response:</strong>
                        <ul className="mt-1 space-y-1 text-gray-600">
                          <li>• Immediate email + SMS</li>
                          <li>• Slack mention @channel</li>
                          <li>• Auto-create SIEM incident</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="font-semibold flex items-center gap-2">
                        <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                        High Priority Alerts
                      </h5>
                      <Badge variant="outline" className="border-orange-500 text-orange-700">
                        Within 15 min
                      </Badge>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Triggers:</strong>
                        <ul className="mt-1 space-y-1 text-gray-600">
                          <li>• Employee credential breaches</li>
                          <li>• Sensitive data exposure</li>
                          <li>• Brand impersonation</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Response:</strong>
                        <ul className="mt-1 space-y-1 text-gray-600">
                          <li>• Email notification</li>
                          <li>• Slack alert</li>
                          <li>• Dashboard notification</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h5 className="font-semibold flex items-center gap-2">
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        Medium Priority Alerts
                      </h5>
                      <Badge variant="outline" className="border-yellow-500 text-yellow-700">
                        Hourly digest
                      </Badge>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Triggers:</strong>
                        <ul className="mt-1 space-y-1 text-gray-600">
                          <li>• General brand mentions</li>
                          <li>• Industry threat intelligence</li>
                          <li>• Potential indicators</li>
                        </ul>
                      </div>
                      <div>
                        <strong>Response:</strong>
                        <ul className="mt-1 space-y-1 text-gray-600">
                          <li>• Digest email</li>
                          <li>• Dashboard update</li>
                          <li>• Weekly report inclusion</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Clock className="h-6 w-6 text-green-600" />
                  <div>
                    <CardTitle>Recent Alerts</CardTitle>
                    <CardDescription>Latest dark web monitoring alerts for your organization</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 border-l-4 border-red-500 bg-red-50">
                    <AlertTriangle className="h-5 w-5 text-red-600" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="destructive">Critical</Badge>
                        <span className="text-sm font-medium">Employee credentials for sale</span>
                      </div>
                      <p className="text-sm text-gray-600">
                        5 employee email/password combinations found on dark web marketplace
                      </p>
                      <p className="text-xs text-gray-500 mt-1">2 hours ago • Marketplace: DarkMarket</p>
                    </div>
                    <Button size="sm">Investigate</Button>
                  </div>

                  <div className="flex items-center gap-3 p-3 border-l-4 border-orange-500 bg-orange-50">
                    <AlertTriangle className="h-5 w-5 text-orange-600" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="border-orange-500 text-orange-700">
                          High
                        </Badge>
                        <span className="text-sm font-medium">Brand impersonation detected</span>
                      </div>
                      <p className="text-sm text-gray-600">Fake website mimicking your company found on dark web</p>
                      <p className="text-xs text-gray-500 mt-1">6 hours ago • Domain: company-secure.onion</p>
                    </div>
                    <Button size="sm" variant="outline">
                      Review
                    </Button>
                  </div>

                  <div className="flex items-center gap-3 p-3 border-l-4 border-green-500 bg-green-50">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge variant="outline" className="border-green-500 text-green-700">
                          Resolved
                        </Badge>
                        <span className="text-sm font-medium">Takedown request successful</span>
                      </div>
                      <p className="text-sm text-gray-600">Fraudulent website removed from hosting provider</p>
                      <p className="text-xs text-gray-500 mt-1">1 day ago • Response time: 4 hours</p>
                    </div>
                  </div>
                </div>

                <Button variant="outline" className="w-full">
                  View All Alerts
                </Button>
              </CardContent>
            </Card>

            <Alert>
              <Bell className="h-4 w-4" />
              <AlertDescription>
                Alert preferences are applied immediately. Test notifications can be sent to verify your configuration
                is working correctly.
              </AlertDescription>
            </Alert>

            <div className="flex gap-4">
              <Button>Save Alert Settings</Button>
              <Button variant="outline">Send Test Alert</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
