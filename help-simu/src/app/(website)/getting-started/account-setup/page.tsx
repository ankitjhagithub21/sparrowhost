import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Building, Users, Settings, CheckCircle, AlertTriangle } from "lucide-react"

export default function AccountSetupPage() {
  return (
    <div className="flex">
     
      <main className="flex-1 p-8">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Account Setup</h1>
            <p className="text-xl text-gray-600">
              Configure your organization settings and prepare your simUphish account for phishing simulations.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Building className="h-6 w-6 text-blue-600" />
                  <div>
                    <CardTitle>Organization Profile</CardTitle>
                    <CardDescription>Set up your company information and branding</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Company Name</label>
                      <input
                        type="text"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="Acme Corporation"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Industry</label>
                      <select className="w-full px-3 py-2 border rounded-md">
                        <option>Technology</option>
                        <option>Healthcare</option>
                        <option>Finance</option>
                        <option>Manufacturing</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Company Size</label>
                      <select className="w-full px-3 py-2 border rounded-md">
                        <option>1-50 employees</option>
                        <option>51-200 employees</option>
                        <option>201-1000 employees</option>
                        <option>1000+ employees</option>
                      </select>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Primary Domain</label>
                      <input type="text" className="w-full px-3 py-2 border rounded-md" placeholder="acme.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Time Zone</label>
                      <select className="w-full px-3 py-2 border rounded-md">
                        <option>UTC-8 (Pacific)</option>
                        <option>UTC-5 (Eastern)</option>
                        <option>UTC+0 (GMT)</option>
                        <option>UTC+1 (CET)</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Security Contact</label>
                      <input
                        type="email"
                        className="w-full px-3 py-2 border rounded-md"
                        placeholder="security@acme.com"
                      />
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
                    <CardTitle>User Import</CardTitle>
                    <CardDescription>Import your employee directory for targeting</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Import Methods</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg text-center">
                      <h5 className="font-medium mb-2">CSV Upload</h5>
                      <p className="text-sm text-gray-600 mb-3">Upload a CSV file with user information</p>
                      <Button variant="outline" size="sm">
                        Choose File
                      </Button>
                    </div>
                    <div className="p-4 border rounded-lg text-center">
                      <h5 className="font-medium mb-2">Active Directory</h5>
                      <p className="text-sm text-gray-600 mb-3">Sync with your AD/LDAP directory</p>
                      <Button variant="outline" size="sm">
                        Configure
                      </Button>
                    </div>
                    <div className="p-4 border rounded-lg text-center">
                      <h5 className="font-medium mb-2">API Integration</h5>
                      <p className="text-sm text-gray-600 mb-3">Connect via REST API</p>
                      <Button variant="outline" size="sm">
                        Setup API
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Required Fields</h4>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <h5 className="font-medium mb-2">Required</h5>
                        <ul className="space-y-1">
                          <li>• Email Address</li>
                          <li>• First Name</li>
                          <li>• Last Name</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="font-medium mb-2">Optional</h5>
                        <ul className="space-y-1">
                          <li>• Department</li>
                          <li>• Job Title</li>
                          <li>• Manager</li>
                          <li>• Location</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    Ensure you have proper consent and authorization to include employees in phishing simulations. Check
                    with your legal and HR teams.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Settings className="h-6 w-6 text-purple-600" />
                  <div>
                    <CardTitle>Email Configuration</CardTitle>
                    <CardDescription>Set up email delivery for your simulations</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Email Provider</h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-lg">
                      <input type="radio" name="provider" id="google" className="mb-2" />
                      <label htmlFor="google" className="block font-medium">
                        Google Workspace
                      </label>
                      <p className="text-sm text-gray-600">Use Google's email infrastructure</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <input type="radio" name="provider" id="outlook" className="mb-2" />
                      <label htmlFor="outlook" className="block font-medium">
                        Microsoft 365
                      </label>
                      <p className="text-sm text-gray-600">Use Microsoft's email infrastructure</p>
                    </div>
                    <div className="p-4 border rounded-lg">
                      <input type="radio" name="provider" id="custom" className="mb-2" />
                      <label htmlFor="custom" className="block font-medium">
                        Custom SMTP
                      </label>
                      <p className="text-sm text-gray-600">Use your own email server</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h5 className="font-medium text-blue-900 mb-2">Next Steps</h5>
                  <p className="text-sm text-blue-800 mb-3">
                    After selecting your email provider, you'll need to configure IP whitelisting and spam filter
                    settings.
                  </p>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      Google Workspace Guide
                    </Button>
                    <Button variant="outline" size="sm">
                      Microsoft 365 Guide
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <div>
                    <CardTitle>Setup Checklist</CardTitle>
                    <CardDescription>Complete these steps to finish your account setup</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm">Organization profile completed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 border-2 border-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-600">User directory imported</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 border-2 border-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-600">Email provider configured</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 border-2 border-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-600">IP whitelisting completed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="h-5 w-5 border-2 border-gray-300 rounded-full"></div>
                    <span className="text-sm text-gray-600">Test campaign sent</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
