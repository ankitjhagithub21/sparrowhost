import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Settings, Plus, Shield, Globe, Users, Building } from "lucide-react"

export default function DarkWebSetupPage() {
  return (
    <div className="flex">

      <main className="flex-1 p-8">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Dark Web Monitoring Setup</h1>
            <p className="text-xl text-gray-600">
              Configure monitoring parameters and assets to protect your organization from dark web threats.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Building className="h-6 w-6 text-blue-600" />
                  <div>
                    <CardTitle>Organization Assets</CardTitle>
                    <CardDescription>Define what to monitor for your organization</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Company Domains</label>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                          <span className="flex-1 text-sm">company.com</span>
                          <Badge variant="secondary">Primary</Badge>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
                          <span className="flex-1 text-sm">company.net</span>
                          <Badge variant="outline">Secondary</Badge>
                        </div>
                        <Button variant="outline" size="sm">
                          <Plus className="mr-2 h-3 w-3" />
                          Add Domain
                        </Button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">IP Ranges</label>
                      <div className="space-y-2">
                        <input
                          type="text"
                          className="w-full px-3 py-2 border rounded-md text-sm"
                          placeholder="192.168.1.0/24"
                        />
                        <Button variant="outline" size="sm">
                          <Plus className="mr-2 h-3 w-3" />
                          Add IP Range
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <label className="block text-sm font-medium mb-1">Brand Keywords</label>
                      <div className="space-y-2">
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Company Name</Badge>
                          <Badge variant="outline">Product Names</Badge>
                          <Badge variant="outline">Executive Names</Badge>
                        </div>
                        <input
                          type="text"
                          className="w-full px-3 py-2 border rounded-md text-sm"
                          placeholder="Add keyword"
                        />
                        <Button variant="outline" size="sm">
                          <Plus className="mr-2 h-3 w-3" />
                          Add Keyword
                        </Button>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-1">Industry Sectors</label>
                      <select className="w-full px-3 py-2 border rounded-md text-sm">
                        <option>Technology</option>
                        <option>Healthcare</option>
                        <option>Financial Services</option>
                        <option>Manufacturing</option>
                        <option>Retail</option>
                      </select>
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
                    <CardTitle>Employee Monitoring</CardTitle>
                    <CardDescription>Configure credential monitoring for your workforce</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Monitoring Scope</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="all-employees" defaultChecked />
                      <label htmlFor="all-employees" className="text-sm">
                        Monitor all employee email addresses
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="executives" defaultChecked />
                      <label htmlFor="executives" className="text-sm">
                        Enhanced monitoring for executives and privileged users
                      </label>
                    </div>
                    <div className="flex items-center gap-2">
                      <input type="checkbox" id="contractors" />
                      <label htmlFor="contractors" className="text-sm">
                        Include contractors and temporary workers
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Data Sources</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <input type="checkbox" id="active-directory" defaultChecked />
                        <label htmlFor="active-directory" className="font-medium text-sm">
                          Active Directory
                        </label>
                      </div>
                      <p className="text-xs text-gray-600">Sync employee emails from AD</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <input type="checkbox" id="hr-system" />
                        <label htmlFor="hr-system" className="font-medium text-sm">
                          HR System
                        </label>
                      </div>
                      <p className="text-xs text-gray-600">Import from HRIS platform</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <input type="checkbox" id="csv-upload" />
                        <label htmlFor="csv-upload" className="font-medium text-sm">
                          CSV Upload
                        </label>
                      </div>
                      <p className="text-xs text-gray-600">Manual employee list upload</p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <input type="checkbox" id="api-integration" />
                        <label htmlFor="api-integration" className="font-medium text-sm">
                          API Integration
                        </label>
                      </div>
                      <p className="text-xs text-gray-600">Custom API connection</p>
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
                    <CardTitle>Monitoring Configuration</CardTitle>
                    <CardDescription>Fine-tune monitoring parameters and sensitivity</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Scan Frequency</label>
                    <select className="w-full px-3 py-2 border rounded-md">
                      <option>Real-time (Recommended)</option>
                      <option>Every 15 minutes</option>
                      <option>Hourly</option>
                      <option>Daily</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Alert Sensitivity</label>
                    <select className="w-full px-3 py-2 border rounded-md">
                      <option>High (More alerts, fewer false negatives)</option>
                      <option>Medium (Balanced)</option>
                      <option>Low (Fewer alerts, more false negatives)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Threat Categories</h4>
                  <div className="grid md:grid-cols-2 gap-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="credentials" defaultChecked />
                        <label htmlFor="credentials" className="text-sm">
                          Compromised Credentials
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="data-breaches" defaultChecked />
                        <label htmlFor="data-breaches" className="text-sm">
                          Data Breaches
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="malware" defaultChecked />
                        <label htmlFor="malware" className="text-sm">
                          Malware & Exploits
                        </label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="brand-abuse" defaultChecked />
                        <label htmlFor="brand-abuse" className="text-sm">
                          Brand Abuse
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="financial" defaultChecked />
                        <label htmlFor="financial" className="text-sm">
                          Financial Fraud
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="ransomware" defaultChecked />
                        <label htmlFor="ransomware" className="text-sm">
                          Ransomware Threats
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Globe className="h-6 w-6 text-orange-600" />
                  <div>
                    <CardTitle>Geographic & Language Settings</CardTitle>
                    <CardDescription>Configure regional monitoring preferences</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Primary Regions</label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="north-america" defaultChecked />
                        <label htmlFor="north-america" className="text-sm">
                          North America
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="europe" defaultChecked />
                        <label htmlFor="europe" className="text-sm">
                          Europe
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="asia-pacific" />
                        <label htmlFor="asia-pacific" className="text-sm">
                          Asia Pacific
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="global" />
                        <label htmlFor="global" className="text-sm">
                          Global Coverage
                        </label>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Languages</label>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="english" defaultChecked />
                        <label htmlFor="english" className="text-sm">
                          English
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="spanish" />
                        <label htmlFor="spanish" className="text-sm">
                          Spanish
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="russian" />
                        <label htmlFor="russian" className="text-sm">
                          Russian
                        </label>
                      </div>
                      <div className="flex items-center gap-2">
                        <input type="checkbox" id="chinese" />
                        <label htmlFor="chinese" className="text-sm">
                          Chinese
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Alert>
              <Shield className="h-4 w-4" />
              <AlertDescription>
                Configuration changes may take up to 30 minutes to take effect. Critical alerts will be processed
                immediately regardless of scan frequency settings.
              </AlertDescription>
            </Alert>

            <div className="flex gap-4">
              <Button className="flex-1">Save Configuration</Button>
              <Button variant="outline">Test Settings</Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
