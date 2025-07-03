import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Shield,
  AlertTriangle,
  CheckCircle,
  Clock,
  Search,
  Eye,
  Trash2,
  Ban,
  UserCheck,
  FileText,
  Settings,
} from "lucide-react"

export default function AdminDashboardPage() {
  return (
    <div className="flex">
    
      <main className="flex-1 p-8">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Admin Dashboard Documentation</h1>
            <p className="text-xl text-gray-600">
              Learn about the phish triage admin dashboard features and capabilities for managing reported emails.
            </p>
          </div>

          <Alert className="mb-8">
            <Shield className="h-4 w-4" />
            <AlertDescription>
              The admin dashboard is accessible through the simUphish platform with proper administrator credentials.
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-blue-600" />
                  <div>
                    <CardTitle>Authentication & Access</CardTitle>
                    <CardDescription>How administrators access the triage system</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">One-Time Authentication</h4>
                  <p className="text-sm text-gray-600 mb-3">
                    Administrators must authenticate once per session before taking any actions on reported emails. This
                    ensures only authorized personnel can modify email security policies.
                  </p>
                  <div className="bg-gray-100 p-3 rounded-lg">
                    <div className="space-y-2 text-sm">
                      <div>
                        <strong>Authentication Method:</strong> Admin password verification
                      </div>
                      <div>
                        <strong>Session Duration:</strong> 4 hours of activity
                      </div>
                      <div>
                        <strong>Re-authentication:</strong> Required after session expiry
                      </div>
                      <div>
                        <strong>Audit Logging:</strong> All actions are logged with timestamps
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                  <div>
                    <CardTitle>Email Classification & Queue</CardTitle>
                    <CardDescription>How reported emails are categorized and displayed</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Automatic Classification</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 border-l-4 border-green-500 bg-green-50">
                      <h5 className="font-semibold text-green-900 mb-2">Simulation Emails</h5>
                      <ul className="text-sm text-green-800 space-y-1">
                        <li>• Automatically identified by simUphish headers</li>
                        <li>• User receives immediate training feedback</li>
                        <li>• Logged for training metrics only</li>
                        <li>• No admin action required</li>
                      </ul>
                    </div>
                    <div className="p-4 border-l-4 border-red-500 bg-red-50">
                      <h5 className="font-semibold text-red-900 mb-2">Real Threats</h5>
                      <ul className="text-sm text-red-800 space-y-1">
                        <li>• Appear in admin triage queue</li>
                        <li>• Require manual review and action</li>
                        <li>• Risk-scored automatically</li>
                        <li>• Admin notifications sent</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Triage Queue Features</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <Search className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-sm">Search & Filter</p>
                        <p className="text-xs text-gray-600">Search by sender, subject, reporter, or risk level</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <Clock className="h-5 w-5 text-orange-600" />
                      <div>
                        <p className="font-medium text-sm">Priority Sorting</p>
                        <p className="text-xs text-gray-600">Emails sorted by risk level and time reported</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 border rounded-lg">
                      <Eye className="h-5 w-5 text-purple-600" />
                      <div>
                        <p className="font-medium text-sm">Detailed Analysis</p>
                        <p className="text-xs text-gray-600">Full email headers, content, and risk assessment</p>
                      </div>
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
                    <CardTitle>Available Admin Actions</CardTitle>
                    <CardDescription>Actions administrators can take on reported emails</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Trash2 className="h-4 w-4 text-red-600" />
                        <h5 className="font-medium text-sm">Move to Spam/Junk</h5>
                      </div>
                      <p className="text-xs text-gray-600">
                        Automatically moves similar emails to junk folder organization-wide. Creates transport rules to
                        catch future emails from the same sender or with similar patterns.
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Ban className="h-4 w-4 text-red-600" />
                        <h5 className="font-medium text-sm">Block Sender</h5>
                      </div>
                      <p className="text-xs text-gray-600">
                        Adds sender to organization-wide blocklist. All future emails from this sender will be
                        automatically quarantined before reaching users.
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <UserCheck className="h-4 w-4 text-green-600" />
                        <h5 className="font-medium text-sm">Mark as Safe</h5>
                      </div>
                      <p className="text-xs text-gray-600">
                        Whitelists the sender and prevents future false positives. Useful for legitimate emails that
                        were incorrectly reported as suspicious.
                      </p>
                    </div>
                    <div className="p-3 border rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <FileText className="h-4 w-4 text-blue-600" />
                        <h5 className="font-medium text-sm">Create Security Incident</h5>
                      </div>
                      <p className="text-xs text-gray-600">
                        Escalates the email to the security team and creates a formal incident record for investigation
                        and tracking.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Action Results</h4>
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h5 className="font-medium text-blue-900 mb-2">What Happens After Taking Action</h5>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• Email is immediately processed according to the selected action</li>
                      <li>• Similar emails across the organization are automatically identified</li>
                      <li>• User who reported the email receives feedback notification</li>
                      <li>• Action is logged in audit trail with admin details and timestamp</li>
                      <li>• Security policies are updated to prevent similar threats</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-6 w-6 text-green-600" />
                  <div>
                    <CardTitle>Dashboard Analytics</CardTitle>
                    <CardDescription>Metrics and insights available to administrators</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Real-time Statistics</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="font-medium text-sm">Pending Reviews</div>
                        <div className="text-xs text-gray-600">Number of emails awaiting admin action</div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="font-medium text-sm">Daily Resolutions</div>
                        <div className="text-xs text-gray-600">Emails processed in the last 24 hours</div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="font-medium text-sm">Average Response Time</div>
                        <div className="text-xs text-gray-600">Time from report to admin action</div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-lg">
                        <div className="font-medium text-sm">Threat Accuracy</div>
                        <div className="text-xs text-gray-600">Percentage of reports that were actual threats</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Reporting Features</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Export triage data for compliance reporting</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Track user reporting behavior and training effectiveness</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Monitor threat trends and attack patterns</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-green-600" />
                      <span>Generate executive summaries and security metrics</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-gray-600" />
                  <div>
                    <CardTitle>Security & Compliance</CardTitle>
                    <CardDescription>How the admin dashboard maintains security standards</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Audit & Logging</h4>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <ul className="text-sm text-yellow-800 space-y-1">
                      <li>• All admin actions are logged with full details</li>
                      <li>• Timestamps and admin user identification recorded</li>
                      <li>• Email content and headers preserved for investigation</li>
                      <li>• Action justification and outcomes tracked</li>
                      <li>• Compliance reports available for regulatory requirements</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Access Control</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <strong>Role-based Access:</strong> Only designated security administrators can access the triage
                      dashboard
                    </div>
                    <div>
                      <strong>Session Management:</strong> Automatic logout after inactivity to prevent unauthorized
                      access
                    </div>
                    <div>
                      <strong>Multi-factor Authentication:</strong> Optional MFA integration for enhanced security
                    </div>
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
