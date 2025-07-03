import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Target, Mail, Users, Calendar, Play, BarChart3 } from "lucide-react"

export default function FirstCampaignPage() {
  return (
    <div className="flex">
      
      <main className="flex-1 p-8">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Your First Campaign</h1>
            <p className="text-xl text-gray-600">
              Step-by-step guide to creating and launching your first phishing simulation campaign.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Target className="h-6 w-6 text-red-600" />
                  <div>
                    <CardTitle>Campaign Setup</CardTitle>
                    <CardDescription>Define your campaign objectives and basic settings</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Campaign Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Q1 Security Awareness Test"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Campaign Type</label>
                      <select className="w-full px-3 py-2 border rounded-md">
                        <option>Credential Harvesting</option>
                        <option>Business Email Compromise</option>
                        <option>Malware Delivery</option>
                        <option>Social Engineering</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Difficulty Level</label>
                      <select className="w-full px-3 py-2 border rounded-md">
                        <option>Beginner (Easy to spot)</option>
                        <option>Intermediate (Moderate difficulty)</option>
                        <option>Advanced (Sophisticated)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Campaign Duration</label>
                      <select className="w-full px-3 py-2 border rounded-md">
                        <option>1 week</option>
                        <option>2 weeks</option>
                        <option>1 month</option>
                        <option>Custom</option>
                      </select>
                    </div>
                  </div>
                </div>

                <Alert>
                  <Target className="h-4 w-4" />
                  <AlertDescription>
                    For your first campaign, we recommend starting with a "Beginner" level credential harvesting
                    simulation targeting a small test group.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-blue-600" />
                  <div>
                    <CardTitle>Email Template Selection</CardTitle>
                    <CardDescription>Choose a realistic phishing email template</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium">Office 365 Login</h5>
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        Recommended
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">Fake Microsoft login page requesting credentials</p>
                    <div className="text-xs text-gray-500 mb-3">
                      {'Subject: "Your Office 365 account will expire soon"'}
                    </div>
                    <Button variant="outline" size="sm">
                      Preview Template
                    </Button>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <h5 className="font-medium">IT Security Alert</h5>
                      <Badge variant="outline">Popular</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-3">
                      Urgent security notification requiring immediate action
                    </p>
                    <div className="text-xs text-gray-500 mb-3">{'Subject: "URGENT: Security breach detected"'}</div>
                    <Button variant="outline" size="sm">
                      Preview Template
                    </Button>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Template Customization</h5>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h6 className="font-medium mb-1">Sender Information</h6>
                      <ul className="space-y-1 text-gray-600">
                        <li>• From: IT Security Team</li>
                        <li>• Reply-to: security@company.com</li>
                        <li>• Display name: Company IT</li>
                      </ul>
                    </div>
                    <div>
                      <h6 className="font-medium mb-1">Personalization</h6>
                      <ul className="space-y-1 text-gray-600">
                        <li>• {"{{ first_name }}"} - User's first name</li>
                        <li>• {"{{ company }}"} - Company name</li>
                        <li>• {"{{ department }}"} - User's department</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Users className="h-6 w-6 text-green-600" />
                  <div>
                    <CardTitle>Target Selection</CardTitle>
                    <CardDescription>Choose which users to include in your campaign</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">User Groups</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <input type="checkbox" id="test-group" />
                      <div className="flex-1">
                        <label htmlFor="test-group" className="font-medium">
                          Test Group
                        </label>
                        <p className="text-sm text-gray-600">5 users - IT department volunteers</p>
                      </div>
                      <Badge variant="outline" className="text-green-600 border-green-200">
                        Recommended
                      </Badge>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <input type="checkbox" id="marketing" />
                      <div className="flex-1">
                        <label htmlFor="marketing" className="font-medium">
                          Marketing Department
                        </label>
                        <p className="text-sm text-gray-600">23 users</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <input type="checkbox" id="sales" />
                      <div className="flex-1">
                        <label htmlFor="sales" className="font-medium">
                          Sales Team
                        </label>
                        <p className="text-sm text-gray-600">18 users</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h5 className="font-medium text-blue-900 mb-2">First Campaign Tips</h5>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• Start with a small test group (5-10 users)</li>
                    <li>• Include IT team members who are aware of the test</li>
                    <li>• Avoid targeting executives or critical business functions</li>
                    <li>• Ensure participants have completed basic security training</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Calendar className="h-6 w-6 text-purple-600" />
                  <div>
                    <CardTitle>Schedule Campaign</CardTitle>
                    <CardDescription>Set when your phishing emails will be sent</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1">Start Date</label>
                    <input type="date" className="w-full px-3 py-2 border rounded-md" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1">Start Time</label>
                    <select className="w-full px-3 py-2 border rounded-md">
                      <option>9:00 AM</option>
                      <option>10:00 AM</option>
                      <option>11:00 AM</option>
                      <option>2:00 PM</option>
                      <option>3:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Delivery Method</label>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input type="radio" name="delivery" id="immediate" defaultChecked />
                      <label htmlFor="immediate">Send all emails immediately</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="radio" name="delivery" id="staggered" />
                      <label htmlFor="staggered">Stagger delivery over 2 hours</label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="radio" name="delivery" id="random" />
                      <label htmlFor="random">Random delivery over 4 hours</label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Play className="h-6 w-6 text-red-600" />
                  <div>
                    <CardTitle>Launch Campaign</CardTitle>
                    <CardDescription>Review and start your phishing simulation</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Campaign Summary</h5>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="mb-2">
                        <strong>Name:</strong> Q1 Security Awareness Test
                      </div>
                      <div className="mb-2">
                        <strong>Template:</strong> Office 365 Login
                      </div>
                      <div className="mb-2">
                        <strong>Targets:</strong> Test Group (5 users)
                      </div>
                    </div>
                    <div>
                      <div className="mb-2">
                        <strong>Start:</strong> Tomorrow at 10:00 AM
                      </div>
                      <div className="mb-2">
                        <strong>Duration:</strong> 1 week
                      </div>
                      <div className="mb-2">
                        <strong>Delivery:</strong> Immediate
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Button className="flex-1">
                    <Play className="mr-2 h-4 w-4" />
                    Launch Campaign
                  </Button>
                  <Button variant="outline">Save as Draft</Button>
                </div>

                <Alert>
                  <BarChart3 className="h-4 w-4" />
                  <AlertDescription>
                    Once launched, you can monitor real-time results in the Analytics dashboard. Users who click the
                    phishing link will see an educational page explaining the simulation.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
