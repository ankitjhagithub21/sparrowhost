import Link from "next/link"
import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, Shield, Settings, AlertTriangle, CheckCircle, ExternalLink, Network, Mail } from "lucide-react"

export default function OutlookPage() {
  return (
    <div className="flex">
     
      <main className="flex-1 p-8">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Microsoft Outlook Whitelisting Guide</h1>
            <p className="text-xl text-gray-600">
              Complete instructions to whitelist simUphish domains and IP subnet in Microsoft 365 Defender to ensure
              reliable delivery of phishing simulations.
            </p>
          </div>

          <Alert className="mb-8">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              You must have Global Administrator or Security Administrator privileges in Microsoft 365. Changes may take
              up to 30 minutes to propagate across all Exchange Online servers.
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <div>
                    <CardTitle>simUphish Domains and IP Subnet</CardTitle>
                    <CardDescription>Complete list of domains and IP range that need to be whitelisted</CardDescription>
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
                  <h4 className="font-semibold mb-2">IP Subnet</h4>
                  <div className="flex items-center gap-2 p-3 bg-gray-50 rounded-lg">
                    <code className="flex-1">212.11.79.0/24</code>
                    <Badge variant="secondary">IP Range</Badge>
                    <Button size="sm" variant="ghost">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    This subnet covers IP addresses from 212.11.79.1 to 212.11.79.254
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Settings className="h-6 w-6 text-green-600" />
                  <div>
                    <CardTitle>Step 1: Access Microsoft 365 Defender</CardTitle>
                    <CardDescription>Navigate to the security portal and locate anti-spam policies</CardDescription>
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
                      <p className="font-medium">Navigate to Microsoft 365 Defender</p>
                      <p className="text-sm text-gray-600">Go to https://security.microsoft.com</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Sign in with administrator account</p>
                      <p className="text-sm text-gray-600">
                        Use your Microsoft 365 Global or Security Administrator credentials
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Navigate to Anti-spam Policies</p>
                      <p className="text-sm text-gray-600">
                        Go to Email & Collaboration → Policies & Rules → Threat policies → Anti-spam
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Network className="h-6 w-6 text-purple-600" />
                  <div>
                    <CardTitle>Step 2: Configure Connection Filter Policy</CardTitle>
                    <CardDescription>Add simUphish IP subnet to the connection filter allowlist</CardDescription>
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
                      <p className="font-medium">Locate Connection Filter Policy</p>
                      <p className="text-sm text-gray-600">
                        In the Anti-spam policies page, click on the "Connection filter policy (Default)" tab
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Edit the Default Policy</p>
                      <p className="text-sm text-gray-600">
                        Click on "Connection filter policy (Default)" to open the policy settings
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Add IP Subnet to Allow List</p>
                      <p className="text-sm text-gray-600 mb-2">
                        In the "Always allow messages from the following IP addresses or address range" section, click
                        Edit
                      </p>
                      <div className="p-3 bg-gray-100 rounded-md">
                        <code className="text-sm">212.11.79.0/24</code>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        Click the + (Add) button, enter the subnet, then click Add and Save
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      4
                    </div>
                    <div>
                      <p className="font-medium">Enable Safe List</p>
                      <p className="text-sm text-gray-600">
                        Ensure "Turn on safe list" is enabled to honor the IP allow list
                      </p>
                    </div>
                  </div>
                </div>

                <Alert>
                  <Network className="h-4 w-4" />
                  <AlertDescription>
                    The subnet 212.11.79.0/24 covers all IP addresses from 212.11.79.1 to 212.11.79.254, ensuring all
                    simUphish emails from this range bypass connection filtering.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Mail className="h-6 w-6 text-orange-600" />
                  <div>
                    <CardTitle>Step 3: Configure Anti-spam Inbound Policy</CardTitle>
                    <CardDescription>Add simUphish domains to the anti-spam policy allowlist</CardDescription>
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
                      <p className="font-medium">Access Anti-spam Inbound Policy</p>
                      <p className="text-sm text-gray-600">
                        Click on the "Anti-spam inbound policy (Default)" tab in the Anti-spam policies page
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Edit the Default Policy</p>
                      <p className="text-sm text-gray-600">
                        Click on "Anti-spam inbound policy (Default)" to open the policy configuration
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Configure Allowed Senders and Domains</p>
                      <p className="text-sm text-gray-600 mb-2">
                        In the "Allowed senders and domains" section, click Edit
                      </p>
                      <div className="p-3 bg-gray-100 rounded-md">
                        <div className="space-y-1 text-sm">
                          <div>
                            <strong>Add these domains to "Allowed domains":</strong>
                          </div>
                          <div>securitynotice.org</div>
                          <div>secure-accessmail.com</div>
                          <div>account-checkup.com</div>
                          <div>verify-identity.net</div>
                          <div>notify.simuphish.com</div>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mt-2">
                        Add each domain individually using the + (Add) button, then click Save
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-orange-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      4
                    </div>
                    <div>
                      <p className="font-medium">Verify Spam Actions</p>
                      <p className="text-sm text-gray-600">
                        Ensure that emails from allowed domains are set to "Move message to Junk Email folder" or "Allow
                        message"
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Settings className="h-6 w-6 text-indigo-600" />
                  <div>
                    <CardTitle>Alternative: Mail Flow Rules Configuration</CardTitle>
                    <CardDescription>
                      Create advanced mail flow rules for granular control over simUphish emails
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <Settings className="h-4 w-4" />
                  <AlertDescription>
                    This is an advanced alternative to the standard anti-spam policy configuration. Use this method if
                    you need more granular control or if the standard method doesn't meet your requirements.
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Navigate to Mail Flow Rules</p>
                      <p className="text-sm text-gray-600">Go to Exchange Admin Center → Mail flow → Rules</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Create New Rule</p>
                      <p className="text-sm text-gray-600">Click the + (Add) button and select "Create a new rule"</p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Configure Rule Conditions</p>
                      <p className="text-sm text-gray-600 mb-3">
                        Set up the following conditions in the "Apply this rule if" section:
                      </p>

                      <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                        <div>
                          <p className="font-medium text-sm">Condition 1: IP Address Range</p>
                          <p className="text-sm text-gray-600">Sender's IP address is in any of these ranges:</p>
                          <code className="text-sm bg-white px-2 py-1 rounded">212.11.79.0/24</code>
                        </div>

                        <div>
                          <p className="font-medium text-sm">Condition 2: Message Header</p>
                          <p className="text-sm text-gray-600">'X-MailerSend-RecipientID' header contains:</p>
                          <code className="text-sm bg-white px-2 py-1 rounded">Feedback-ID</code>
                        </div>

                        <div>
                          <p className="font-medium text-sm">Condition 3: Sender Domain</p>
                          <p className="text-sm text-gray-600">
                            Sender's address domain portion belongs to any of these domains:
                          </p>
                          <div className="space-y-1 mt-1">
                            <code className="text-sm bg-white px-2 py-1 rounded block">secure-accessmail.com</code>
                            <code className="text-sm bg-white px-2 py-1 rounded block">mta.secure-accessmail.com</code>
                            <code className="text-sm bg-white px-2 py-1 rounded block">securitynotice.org</code>
                            <code className="text-sm bg-white px-2 py-1 rounded block">mta.securitynotice.org</code>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      4
                    </div>
                    <div>
                      <p className="font-medium">Configure Rule Actions</p>
                      <p className="text-sm text-gray-600 mb-3">
                        Set up the following actions in the "Do the following" section:
                      </p>

                      <div className="bg-gray-50 p-4 rounded-lg space-y-3">
                        <div>
                          <p className="font-medium text-sm">Action 1: Set Audit Severity</p>
                          <code className="text-sm bg-white px-2 py-1 rounded">Set audit severity level to 'High'</code>
                        </div>

                        <div>
                          <p className="font-medium text-sm">Action 2: Set SCL Score</p>
                          <code className="text-sm bg-white px-2 py-1 rounded">
                            Set the spam confidence level (SCL) to '-1'
                          </code>
                        </div>

                        <div>
                          <p className="font-medium text-sm">Action 3: Set Message Header</p>
                          <code className="text-sm bg-white px-2 py-1 rounded">
                            Set message header 'X-MS-Exchange-Organization-BypassClutter' with the value 'true'
                          </code>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Mail Flow Rule Configuration Example</h4>
                  <div className="border rounded-lg overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-l1iH0SkwflPp35FfOWZtN7zKYvN1EH.png"
                      alt="Exchange Admin Center Mail Flow Rules configuration showing simUphish whitelisting rule setup with IP ranges, message headers, and SCL settings"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Example of the mail flow rule configuration in Exchange Admin Center
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Complete Rule Description</h4>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <p className="text-sm font-medium mb-2">Apply this rule if:</p>
                    <div className="text-sm space-y-1 ml-4">
                      <p>• Sender IP addresses belong to one of these ranges: '212.11.79.0/24'</p>
                      <p>• 'X-MailerSend-RecipientID' header contains 'Feedback-ID'</p>
                      <p>
                        • Sender's address domain portion belongs to any of these domains: 'secure-accessmail.com' or
                        'mta.secure-accessmail.com' or 'securitynotice.org' or 'mta.securitynotice.org'
                      </p>
                    </div>
                    <p className="text-sm font-medium mt-3 mb-2">Do the following:</p>
                    <div className="text-sm space-y-1 ml-4">
                      <p>• Set audit severity level to 'High'</p>
                      <p>• Set the spam confidence level (SCL) to '-1'</p>
                      <p>• Set message header 'X-MS-Exchange-Organization-BypassClutter' with the value 'true'</p>
                    </div>
                  </div>
                </div>

                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Important:</strong> This mail flow rule method provides more granular control but requires
                    careful configuration. Test thoroughly before deploying to production. The rule will only apply to
                    emails that match ALL specified conditions.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  <div>
                    <CardTitle>Troubleshooting: Advanced Delivery Configuration</CardTitle>
                    <CardDescription>
                      If emails are still not being delivered, configure Advanced Delivery for phishing simulations
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Use this method if:</strong> Emails are still being blocked or quarantined after configuring
                    the anti-spam policies and connection filters above. Advanced Delivery is specifically designed for
                    phishing simulation vendors and provides the most reliable delivery.
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      1
                    </div>
                    <div>
                      <p className="font-medium">Navigate to Advanced Delivery</p>
                      <p className="text-sm text-gray-600">
                        Go to Microsoft 365 Defender → Email & Collaboration → Policies & Rules → Threat policies →
                        Advanced delivery
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Select Phishing Simulation Tab</p>
                      <p className="text-sm text-gray-600">
                        Click on the "Phishing simulation" tab to configure trusted simulation vendors
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Add simUphish Configuration</p>
                      <p className="text-sm text-gray-600 mb-3">Click "Edit" and add the following entries:</p>

                      <div className="bg-gray-50 p-4 rounded-lg space-y-4">
                        <div>
                          <p className="font-medium text-sm mb-2">Sending IP Range:</p>
                          <div className="flex items-center gap-2 p-2 bg-white rounded border">
                            <code className="text-sm">212.11.79.1-212.11.79.255</code>
                            <Badge variant="outline" className="text-xs">
                              Sending IP
                            </Badge>
                          </div>
                        </div>

                        <div>
                          <p className="font-medium text-sm mb-2">Domains:</p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 p-2 bg-white rounded border">
                              <code className="text-sm">securitynotice.org</code>
                              <Badge variant="outline" className="text-xs">
                                Domain
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white rounded border">
                              <code className="text-sm">secure-accessmail.com</code>
                              <Badge variant="outline" className="text-xs">
                                Domain
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white rounded border">
                              <code className="text-sm">mta.secure-accessmail.com</code>
                              <Badge variant="outline" className="text-xs">
                                Domain
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white rounded border">
                              <code className="text-sm">mta.securitynotice.org</code>
                              <Badge variant="outline" className="text-xs">
                                Domain
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white rounded border">
                              <code className="text-sm">account-checkup.com</code>
                              <Badge variant="outline" className="text-xs">
                                Domain
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white rounded border">
                              <code className="text-sm">verify-identity.net</code>
                              <Badge variant="outline" className="text-xs">
                                Domain
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white rounded border">
                              <code className="text-sm">notify.simuphish.com</code>
                              <Badge variant="outline" className="text-xs">
                                Domain
                              </Badge>
                            </div>
                          </div>
                        </div>

                        <div>
                          <p className="font-medium text-sm mb-2">Allowed Simulation URLs:</p>
                          <div className="space-y-2">
                            <div className="flex items-center gap-2 p-2 bg-white rounded border">
                              <code className="text-sm">*.account-checkup.com/*</code>
                              <Badge variant="outline" className="text-xs">
                                Allowed Simulation URL
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white rounded border">
                              <code className="text-sm">*.secure-accessmail.com/*</code>
                              <Badge variant="outline" className="text-xs">
                                Allowed Simulation URL
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white rounded border">
                              <code className="text-sm">*.securitynotice.org/*</code>
                              <Badge variant="outline" className="text-xs">
                                Allowed Simulation URL
                              </Badge>
                            </div>
                            <div className="flex items-center gap-2 p-2 bg-white rounded border">
                              <code className="text-sm">*.verify-identity.net/*</code>
                              <Badge variant="outline" className="text-xs">
                                Allowed Simulation URL
                              </Badge>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      4
                    </div>
                    <div>
                      <p className="font-medium">Save Configuration</p>
                      <p className="text-sm text-gray-600">
                        Click "Save" to apply the Advanced Delivery configuration for phishing simulations
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Advanced Delivery Configuration Example</h4>
                  <div className="border rounded-lg overflow-hidden">
                    <img
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-NQ8DDDRLzdE9wr1mhW7muncXCMUBW8.png"
                      alt="Microsoft 365 Defender Advanced Delivery configuration showing phishing simulation settings with IP ranges, domains, and allowed simulation URLs for simUphish"
                      className="w-full h-auto"
                    />
                  </div>
                  <p className="text-sm text-gray-600 mt-2">
                    Example of the Advanced Delivery configuration in Microsoft 365 Defender for phishing simulations
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">What Advanced Delivery Does</h4>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <ul className="text-sm space-y-2">
                      <li>
                        • <strong>Bypasses all filtering:</strong> Emails from configured IPs and domains bypass spam,
                        malware, and phishing detection
                      </li>
                      <li>
                        • <strong>URL protection bypass:</strong> Links in simulation emails are not scanned or
                        rewritten by Safe Links
                      </li>
                      <li>
                        • <strong>Attachment scanning bypass:</strong> Attachments from trusted simulation vendors are
                        not scanned
                      </li>
                      <li>
                        • <strong>Quarantine bypass:</strong> Simulation emails are delivered directly to user inboxes
                      </li>
                      <li>
                        • <strong>Reporting integration:</strong> Integrates with Microsoft's built-in attack simulation
                        training reporting
                      </li>
                    </ul>
                  </div>
                </div>

                <Alert>
                  <CheckCircle className="h-4 w-4" />
                  <AlertDescription>
                    <strong>Recommended Approach:</strong> Advanced Delivery is the most reliable method for ensuring
                    phishing simulation delivery. It's specifically designed for this purpose and provides comprehensive
                    bypass of all Microsoft 365 security features for trusted simulation vendors.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <div>
                    <CardTitle>Step 4: Configure Safe Links (Optional)</CardTitle>
                    <CardDescription>
                      Ensure simUphish URLs are not blocked by Microsoft Defender for Office 365
                    </CardDescription>
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
                      <p className="font-medium">Navigate to Safe Links</p>
                      <p className="text-sm text-gray-600">
                        Go to Email & Collaboration → Policies & Rules → Threat policies → Safe Links
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Edit Global Settings</p>
                      <p className="text-sm text-gray-600">
                        Click on "Global settings" and add simUphish domains to the "Do not rewrite the following URLs"
                        list
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Add Domain Exceptions</p>
                      <div className="mt-2 p-3 bg-gray-100 rounded-md">
                        <div className="space-y-1 text-sm">
                          <div>*.securitynotice.org</div>
                          <div>*.secure-accessmail.com</div>
                          <div>*.account-checkup.com</div>
                          <div>*.verify-identity.net</div>
                          <div>*.notify.simuphish.com</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    This step is only necessary if you have Microsoft Defender for Office 365 (formerly ATP) enabled.
                    Standard Exchange Online Protection does not include Safe Links.
                  </AlertDescription>
                </Alert>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <div>
                    <CardTitle>Step 5: Verify Configuration</CardTitle>
                    <CardDescription>Test your Microsoft 365 configuration to ensure proper delivery</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Verification Steps</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium">Send Test Email</p>
                        <p className="text-sm text-gray-600">
                          Send a test email from one of the whitelisted domains to a Microsoft 365 user
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium">Check Message Headers</p>
                        <p className="text-sm text-gray-600">
                          Verify that X-MS-Exchange-Organization-SCL is set to -1 (indicating bypass)
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div>
                        <p className="font-medium">Use Message Trace</p>
                        <p className="text-sm text-gray-600">
                          Run a message trace in Exchange Admin Center to verify delivery path
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">PowerShell Verification</h4>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <code className="text-sm whitespace-pre-wrap">
                      {`# Connect to Exchange Online
Connect-ExchangeOnline

# Check connection filter policy
Get-HostedConnectionFilterPolicy -Identity Default

# Check anti-spam policy
Get-HostedContentFilterPolicy -Identity Default

# Run message trace
Get-MessageTrace -SenderAddress "test@notify.simuphish.com" -StartDate (Get-Date).AddDays(-1)`}
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-yellow-900 mb-2">Important Notes</h3>
            <ul className="text-yellow-800 space-y-2 text-sm">
              <li>
                • <strong>Propagation Time:</strong> Changes may take up to 30 minutes to apply across all Exchange
                Online servers
              </li>
              <li>
                • <strong>Third-Party Filters:</strong> If you use additional email security solutions (Proofpoint,
                Mimecast, etc.), ensure the same domains and IP subnet are whitelisted there
              </li>
              <li>
                • <strong>Hybrid Environments:</strong> For hybrid Exchange deployments, also configure on-premises
                Exchange servers
              </li>
              <li>
                • <strong>Testing:</strong> Always test with a small group before running full phishing simulation
                campaigns
              </li>
              <li>
                • <strong>Monitoring:</strong> Use message trace and audit logs to monitor email delivery and policy
                effectiveness
              </li>
            </ul>
          </div>

          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">Additional Resources</h3>
            <p className="text-blue-800 mb-4">
              For more detailed Microsoft 365 configuration guidance, refer to these official resources:
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="sm" asChild>
                <Link href="https://security.microsoft.com" target="_blank">
                  Microsoft 365 Defender <ExternalLink className="ml-2 h-3 w-3" />
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://docs.microsoft.com/en-us/powershell/exchange/exchange-online-powershell"
                  target="_blank"
                >
                  Exchange Online PowerShell <ExternalLink className="ml-2 h-3 w-3" />
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://docs.microsoft.com/en-us/microsoft-365/security/office-365-security/"
                  target="_blank"
                >
                  Microsoft 365 Security Docs <ExternalLink className="ml-2 h-3 w-3" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
