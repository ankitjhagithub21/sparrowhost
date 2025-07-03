import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, Shield, Settings, AlertTriangle, CheckCircle, Clock } from "lucide-react"

export default function GoogleWorkspacePage() {
  return (
    <div className="flex">
      
      <main className="flex-1 p-8">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Google Workspace Whitelisting Guide</h1>
            <p className="text-xl text-gray-600">
              Complete instructions to whitelist simUphish domains and IP addresses in Google Workspace to ensure
              reliable delivery of phishing simulations.
            </p>
          </div>

          <Alert className="mb-8">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              You must have security administrator privileges in the Google Workspace Admin Console. Changes may take up
              to 24 hours to propagate, though they typically apply within an hour.
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <div>
                    <CardTitle>Domains and IP to Whitelist</CardTitle>
                    <CardDescription>simUphish domains and IP address that need to be whitelisted</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">simUphish Domains</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <code className="flex-1">securitynotice.org</code>
                      <Button size="sm" variant="ghost">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <code className="flex-1">secure-accessmail.com</code>
                      <Button size="sm" variant="ghost">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <code className="flex-1">account-checkup.com</code>
                      <Button size="sm" variant="ghost">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <code className="flex-1">verify-identity.net</code>
                      <Button size="sm" variant="ghost">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                    <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                      <code className="flex-1">notify.simuphish.com</code>
                      <Badge variant="secondary">Primary</Badge>
                      <Button size="sm" variant="ghost">
                        <Copy className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">IP Address</h4>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <code className="flex-1">212.11.79.100</code>
                    <Badge variant="secondary">Gateway IP</Badge>
                    <Button size="sm" variant="ghost">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Settings className="h-6 w-6 text-green-600" />
                  <div>
                    <CardTitle>Step 1: Access Google Workspace Admin Console</CardTitle>
                    <CardDescription>Log in and navigate to Gmail settings</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Navigate to Google Admin Console</p>
                      <p className="text-sm text-gray-600">Go to https://admin.google.com</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Sign in with administrator account</p>
                      <p className="text-sm text-gray-600">Use your Google Workspace administrator credentials</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Access Gmail Settings</p>
                      <p className="text-sm text-gray-600">
                        Go to Apps → Google Workspace → Gmail → Spam, Phishing, and Malware
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-purple-600" />
                  <div>
                    <CardTitle>Step 2: Add IP Address to Email Allowlist</CardTitle>
                    <CardDescription>Prevent emails from the IP from being marked as spam</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Locate Email allowlist setting</p>
                      <p className="text-sm text-gray-600">
                        In the Spam, Phishing, and Malware section, find Email allowlist
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Click the Edit (pencil) icon</p>
                      <p className="text-sm text-gray-600">Open the allowlist configuration</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Enter the IP address</p>
                      <div className="mt-2 p-3 bg-gray-100 rounded-md">
                        <code className="text-sm">212.11.79.100</code>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">Ensure no extra spaces or commas, then click Save</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Settings className="h-6 w-6 text-orange-600" />
                  <div>
                    <CardTitle>Step 3: Configure Inbound Gateway</CardTitle>
                    <CardDescription>Prevent warning banners on emails from the specified IP</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Navigate to Inbound gateway</p>
                      <p className="text-sm text-gray-600">
                        In Spam, Phishing, and Malware section, scroll to Inbound gateway
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Add Gateway IP</p>
                      <p className="text-sm text-gray-600">Click Add and enter: 212.11.79.100</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Configure Gateway Settings</p>
                      <div className="mt-2 p-3 bg-gray-100 rounded-md">
                        <div className="space-y-2 text-sm">
                          <div>✅ Require TLS for connections from email gateways</div>
                          <div>✅ Message is considered spam if header regexp matches</div>
                          <div>✅ Disable Gmail spam evaluation on mail from this gateway</div>
                          <div>❌ Reject all mail not from gateway IPs (UNCHECK this)</div>
                          <div className="mt-2">
                            <strong>Regexp field:</strong> x-unique-spam-filter-2025
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <div>
                    <CardTitle>Step 4: Create Approved Sender List for Domains</CardTitle>
                    <CardDescription>
                      Bypass spam filters and hide warning banners for simUphish domains
                    </CardDescription>
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
                      <p className="font-medium">Navigate to Spam Settings</p>
                      <p className="text-sm text-gray-600">
                        In Spam, Phishing, and Malware section, scroll to Spam and click Configure or Add Another Rule
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Create New Rule</p>
                      <p className="text-sm text-gray-600">
                        Enter name: "Phishing Simulation Domains" and select "Bypass spam filters and hide warnings"
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Add Domain List</p>
                      <p className="text-sm text-gray-600 mb-2">
                        Click "Create or edit list" and bulk upload these domains:
                      </p>
                      <div className="p-3 bg-gray-100 rounded-md">
                        <code className="text-sm whitespace-pre-wrap">
                          {`securitynotice.org
secure-accessmail.com
account-checkup.com
verify-identity.net
notify.simuphish.com`}
                        </code>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        ⚠️ Uncheck "Require sender authentication" for each domain
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Settings className="h-6 w-6 text-blue-600" />
                  <div>
                    <CardTitle>Step 5: Content Compliance Rule (Optional)</CardTitle>
                    <CardDescription>Additional whitelisting via email headers for enhanced control</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Navigate to Content Compliance</p>
                      <p className="text-sm text-gray-600">
                        Scroll to Content compliance and click Configure or Add Another Rule
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Configure Header Match</p>
                      <div className="mt-2 p-3 bg-gray-100 rounded-md">
                        <div className="space-y-2 text-sm">
                          <div>
                            <strong>Rule name:</strong> Phishing Header Bypass
                          </div>
                          <div>
                            <strong>Location:</strong> Header
                          </div>
                          <div>
                            <strong>Match type:</strong> Exact match
                          </div>
                          <div>
                            <strong>Content:</strong> X-PHISHTEST
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Set Actions</p>
                      <p className="text-sm text-gray-600">
                        Select "Bypass spam filter" and "Require secure transport (TLS)"
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <div>
                    <CardTitle>Step 6: Verify Whitelisting</CardTitle>
                    <CardDescription>Test your configuration to ensure proper delivery</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">Send Test Email</p>
                      <p className="text-sm text-gray-600">
                        Send a test email from one of the whitelisted domains to a Google Workspace user
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">Verify Inbox Delivery</p>
                      <p className="text-sm text-gray-600">
                        Confirm the email lands in the inbox without spam or warning banners
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 border rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <div>
                      <p className="font-medium">Check Admin Console Logs</p>
                      <p className="text-sm text-gray-600">
                        Verify settings have propagated in the audit log (may take up to 24 hours)
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-900 mb-2 flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Important Notes
              </h3>
              <ul className="text-yellow-800 space-y-2 text-sm">
                <li>
                  • <strong>Propagation Time:</strong> Changes may take up to 24 hours to fully apply, though typically
                  they take effect within an hour
                </li>
                <li>
                  • <strong>Third-Party Filters:</strong> If you use additional spam filters (Barracuda, Mimecast),
                  ensure the same domains and IP are whitelisted there
                </li>
                <li>
                  • <strong>Image Blocking:</strong> Add domains to Image URL proxy allowlist in End user access
                  settings if images are blocked
                </li>
                <li>
                  • <strong>SPF Records:</strong> Consider adding the IP to your SPF records if you control the domains
                </li>
                <li>
                  • <strong>Testing:</strong> Always test with a small group before running full phishing campaigns
                </li>
              </ul>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
