import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Copy, Download, Settings, Users, AlertTriangle, CheckCircle, ExternalLink } from "lucide-react"

export default function OutlookAddonPage() {
  return (
    <div className="flex">
     
      <main className="flex-1 p-8">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Outlook Add-in Installation</h1>
            <p className="text-xl text-gray-600">
              Deploy the simUphish phishing report button to Microsoft Outlook across your organization or for
              individual users.
            </p>
          </div>

          <Alert className="mb-8">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Organization-wide deployment requires Microsoft 365 Global Administrator or Exchange Administrator
              privileges. Individual users can install the add-in themselves.
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Download className="h-6 w-6 text-blue-600" />
                  <div>
                    <CardTitle>Add-in Configuration Details</CardTitle>
                    <CardDescription>Technical specifications for the simUphish reporting add-in</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Manifest URL</h4>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <code className="flex-1 text-sm">https://simuphish.com/report.xml</code>
                    <Button size="sm" variant="ghost">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Add-in Details</h4>
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Name:</strong> simUphish Phish Reporter
                      </div>
                      <div>
                        <strong>Version:</strong> 1.2.0
                      </div>
                      <div>
                        <strong>Provider:</strong> simUphish Security
                      </div>
                      <div>
                        <strong>Type:</strong> Task Pane Add-in
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Compatibility</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>Outlook 2016 or later</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>Outlook on the web</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>Outlook mobile (iOS/Android)</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="h-3 w-3 text-green-600" />
                        <span>Outlook for Mac</span>
                      </div>
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
                    <CardTitle>Organization-wide Deployment</CardTitle>
                    <CardDescription>Deploy to all users via Microsoft 365 Admin Center</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Access Microsoft 365 Admin Center</p>
                      <p className="text-sm text-gray-600">
                        Navigate to https://admin.microsoft.com and sign in with Global Administrator credentials
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Navigate to Integrated Apps</p>
                      <p className="text-sm text-gray-600">
                        Go to Settings → Integrated apps → Add-ins → Deploy Add-in
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Deploy Custom Add-in</p>
                      <p className="text-sm text-gray-600 mb-2">
                        Select "Deploy a custom add-in" and choose "I have the URL for the manifest file"
                      </p>
                      <div className="p-3 bg-gray-100 rounded-md">
                        <code className="text-sm">https://simuphish.com/report.xml</code>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      4
                    </div>
                    <div>
                      <p className="font-medium">Configure Deployment Settings</p>
                      <div className="mt-2 p-3 bg-gray-100 rounded-md">
                        <div className="space-y-2 text-sm">
                          <div>
                            <strong>Assign to:</strong> Everyone (or specific groups)
                          </div>
                          <div>
                            <strong>Deployment method:</strong> Fixed (always available)
                          </div>
                          <div>
                            <strong>Default state:</strong> Enabled
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      5
                    </div>
                    <div>
                      <p className="font-medium">Complete Deployment</p>
                      <p className="text-sm text-gray-600">
                        Review settings and click "Deploy". The add-in will be available to users within 24 hours.
                      </p>
                    </div>
                  </div>
                </div>

                <Alert>
                  <Settings className="h-4 w-4" />
                  <AlertDescription>
                    After deployment, users will see a "Report Phishing" button in their Outlook ribbon. No additional
                    configuration is required on the user side.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card id="individual">
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Download className="h-6 w-6 text-purple-600" />
                  <div>
                    <CardTitle>Individual User Installation</CardTitle>
                    <CardDescription>Instructions for users to install the add-in manually</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Outlook Desktop (Windows/Mac)</h4>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-sm">Open Outlook and go to Home tab</p>
                        <p className="text-xs text-gray-600">Click on "Get Add-ins" or "Store" button</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-sm">Select "My add-ins" tab</p>
                        <p className="text-xs text-gray-600">Click "Add a custom add-in" → "Add from URL"</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-sm">Enter the manifest URL</p>
                        <div className="mt-1 p-2 bg-gray-100 rounded text-xs">
                          <code>https://simuphish.com/report.xml</code>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        4
                      </div>
                      <div>
                        <p className="font-medium text-sm">Install and activate</p>
                        <p className="text-xs text-gray-600">
                          Click "Install" and the button will appear in your ribbon
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Outlook on the Web</h4>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-sm">Open Outlook.office.com</p>
                        <p className="text-xs text-gray-600">Click the Settings gear icon → "Get add-ins"</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-sm">Add custom add-in</p>
                        <p className="text-xs text-gray-600">
                          Select "My add-ins" → "Add a custom add-in" → "Add from URL"
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-sm">Install the add-in</p>
                        <p className="text-xs text-gray-600">
                          Paste the manifest URL and click "Install". The button will appear when reading emails.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-orange-600" />
                  <div>
                    <CardTitle>User Training & Usage</CardTitle>
                    <CardDescription>How users should use the phishing report button</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">When to Use the Report Button</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border-l-4 border-red-500 bg-red-50">
                      <h5 className="font-semibold text-red-900 mb-2">Report These Emails</h5>
                      <ul className="text-sm text-red-800 space-y-1">
                        <li>• Suspicious sender addresses</li>
                        <li>• Urgent requests for credentials</li>
                        <li>• Unexpected attachments</li>
                        <li>• Requests for money transfers</li>
                        <li>• Links to unfamiliar websites</li>
                        <li>• Poor grammar or spelling</li>
                      </ul>
                    </div>
                    <div className="p-4 border-l-4 border-green-500 bg-green-50">
                      <h5 className="font-semibold text-green-900 mb-2">Don't Report These</h5>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Legitimate marketing emails</li>
                        <li>• Known company communications</li>
                        <li>• Personal emails from contacts</li>
                        <li>• Automated system notifications</li>
                        <li>• Newsletter subscriptions</li>
                        <li>• Calendar invitations</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">How to Report</h4>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-sm">Select the suspicious email</p>
                        <p className="text-xs text-gray-600">Click on the email to select it (don't open it)</p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-sm">Click "Report Phishing" button</p>
                        <p className="text-xs text-gray-600">
                          Find the button in the Outlook ribbon or right-click menu
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-sm">Confirm the report</p>
                        <p className="text-xs text-gray-600">
                          The email will be automatically forwarded to the security team
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h5 className="font-medium text-blue-900 mb-2">What Happens After Reporting?</h5>
                  <ul className="text-sm text-blue-800 space-y-1">
                    <li>• The email is immediately forwarded to the security team</li>
                    <li>• If it's a simUphish training email, you'll receive educational feedback</li>
                    <li>• If it's a real threat, the security team will investigate and take action</li>
                    <li>• You may receive a follow-up notification about the outcome</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Settings className="h-6 w-6 text-gray-600" />
                  <div>
                    <CardTitle>Troubleshooting</CardTitle>
                    <CardDescription>Common issues and solutions</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="p-3 border rounded-lg">
                    <h5 className="font-medium text-sm mb-1">Add-in not appearing in Outlook</h5>
                    <p className="text-xs text-gray-600">
                      Check if add-ins are enabled in Outlook settings. Restart Outlook and wait up to 24 hours for
                      organization deployments.
                    </p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h5 className="font-medium text-sm mb-1">Error installing from URL</h5>
                    <p className="text-xs text-gray-600">
                      Ensure you have internet connectivity and the manifest URL is correct. Contact your IT
                      administrator if the issue persists.
                    </p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h5 className="font-medium text-sm mb-1">Button not working</h5>
                    <p className="text-xs text-gray-600">
                      Try refreshing Outlook or restarting the application. Check that the add-in is enabled in your
                      add-in management settings.
                    </p>
                  </div>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h5 className="font-medium mb-2">Need Help?</h5>
                  <p className="text-sm text-gray-600 mb-3">
                    If you encounter issues with the add-in installation or usage, contact your IT support team or reach
                    out to simUphish support.
                  </p>
                  <Button variant="outline" size="sm">
                    Contact Support <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
