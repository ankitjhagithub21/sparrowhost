import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, Search, AlertTriangle, Eye, Globe, Database } from "lucide-react"
import Link from "next/link"

export default function DarkWebMonitoringPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Dark Web Monitoring</h1>
            <p className="text-xl text-gray-600">
              Proactively monitor the dark web for compromised credentials, data breaches, and threats targeting your
              organization.
            </p>
          </div>

          <Alert className="mb-8">
            <Shield className="h-4 w-4" />
            <AlertDescription>
              Dark web monitoring helps you detect compromised credentials and data breaches before they impact your
              organization. Early detection enables rapid response and mitigation.
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Search className="h-6 w-6 text-blue-600" />
                  <div>
                    <CardTitle>What We Monitor</CardTitle>
                    <CardDescription>Comprehensive coverage across dark web marketplaces and forums</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-semibold mb-2 flex items-center gap-2">
                      <Database className="h-4 w-4 text-red-600" />
                      Compromised Credentials
                    </h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Employee email addresses and passwords</li>
                      <li>• Corporate domain credentials</li>
                      <li>• VPN and remote access accounts</li>
                      <li>• Administrative and privileged accounts</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-semibold mb-2 flex items-center gap-2">
                      <Globe className="h-4 w-4 text-orange-600" />
                      Corporate Data
                    </h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Customer databases and PII</li>
                      <li>• Financial records and payment data</li>
                      <li>• Intellectual property and source code</li>
                      <li>• Internal documents and communications</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-semibold mb-2 flex items-center gap-2">
                      <AlertTriangle className="h-4 w-4 text-yellow-600" />
                      Threat Intelligence
                    </h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Planned attacks against your organization</li>
                      <li>• Malware and exploit kits</li>
                      <li>• Ransomware group communications</li>
                      <li>• Industry-specific threats</li>
                    </ul>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h5 className="font-semibold mb-2 flex items-center gap-2">
                      <Eye className="h-4 w-4 text-purple-600" />
                      Brand Monitoring
                    </h5>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Fake websites and phishing domains</li>
                      <li>• Brand impersonation attempts</li>
                      <li>• Counterfeit products and services</li>
                      <li>• Social media account takeovers</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-green-600" />
                  <div>
                    <CardTitle>Monitoring Sources</CardTitle>
                    <CardDescription>Comprehensive coverage across the dark web ecosystem</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900 mb-2">500+</div>
                    <div className="text-sm text-gray-600">Dark Web Markets</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900 mb-2">1,200+</div>
                    <div className="text-sm text-gray-600">Criminal Forums</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="text-2xl font-bold text-gray-900 mb-2">24/7</div>
                    <div className="text-sm text-gray-600">Continuous Monitoring</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Monitored Platforms</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <h5 className="font-medium mb-2">Dark Web Marketplaces</h5>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Tor hidden services</li>
                        <li>• Encrypted messaging platforms</li>
                        <li>• Private criminal forums</li>
                        <li>• Ransomware group sites</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium mb-2">Surface Web Sources</h5>
                      <ul className="space-y-1 text-gray-600">
                        <li>• Paste sites and code repositories</li>
                        <li>• Social media platforms</li>
                        <li>• Public data breach databases</li>
                        <li>• Cybercrime blogs and news sites</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-red-600" />
                  <div>
                    <CardTitle>Alert Severity Levels</CardTitle>
                    <CardDescription>Prioritized threat notifications based on risk level</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 border-l-4 border-red-500 bg-red-50">
                    <Badge variant="destructive">Critical</Badge>
                    <div>
                      <p className="font-medium">Immediate Action Required</p>
                      <p className="text-sm text-gray-600">
                        Active credentials for sale, ongoing attacks, or executive-level compromises
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 border-l-4 border-orange-500 bg-orange-50">
                    <Badge variant="outline" className="border-orange-500 text-orange-700">
                      High
                    </Badge>
                    <div>
                      <p className="font-medium">Urgent Response Needed</p>
                      <p className="text-sm text-gray-600">
                        Employee credentials compromised, sensitive data exposed, or targeted threats
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 border-l-4 border-yellow-500 bg-yellow-50">
                    <Badge variant="outline" className="border-yellow-500 text-yellow-700">
                      Medium
                    </Badge>
                    <div>
                      <p className="font-medium">Monitor and Investigate</p>
                      <p className="text-sm text-gray-600">
                        Potential threats, brand mentions, or industry-related discussions
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-3 border-l-4 border-blue-500 bg-blue-50">
                    <Badge variant="outline" className="border-blue-500 text-blue-700">
                      Low
                    </Badge>
                    <div>
                      <p className="font-medium">Informational</p>
                      <p className="text-sm text-gray-600">
                        General mentions, old breaches, or low-confidence indicators
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Database className="h-6 w-6 text-purple-600" />
                  <div>
                    <CardTitle>Response Workflow</CardTitle>
                    <CardDescription>Automated and manual response procedures for detected threats</CardDescription>
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
                      <p className="font-medium">Immediate Detection</p>
                      <p className="text-sm text-gray-600">
                        AI-powered scanning identifies potential threats and matches against your organization's assets
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      2
                    </div>
                    <div>
                      <p className="font-medium">Automated Verification</p>
                      <p className="text-sm text-gray-600">
                        System validates findings and filters false positives using machine learning algorithms
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      3
                    </div>
                    <div>
                      <p className="font-medium">Instant Notification</p>
                      <p className="text-sm text-gray-600">
                        Real-time alerts sent via email, SMS, Slack, or API webhooks based on severity level
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-medium">
                      4
                    </div>
                    <div>
                      <p className="font-medium">Guided Response</p>
                      <p className="text-sm text-gray-600">
                        Detailed remediation steps and integration with security tools for automated response
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <h5 className="font-medium text-green-900 mb-2">Automated Actions</h5>
                  <ul className="text-sm text-green-800 space-y-1">
                    <li>• Force password resets for compromised accounts</li>
                    <li>• Block suspicious IP addresses and domains</li>
                    <li>• Create security incidents in your SIEM/SOAR platform</li>
                    <li>• Generate takedown requests for fraudulent content</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Get Started</CardTitle>
                  <CardDescription>Set up dark web monitoring for your organization</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full">
                    <Link href="/dark-web-monitoring/setup">Configure Monitoring</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Alert Management</CardTitle>
                  <CardDescription>Configure notifications and response workflows</CardDescription>
                </CardHeader>
                <CardContent>
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/dark-web-monitoring/alerts">Manage Alerts</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
