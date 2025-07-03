import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertTriangle } from "lucide-react"

export default function CampaignsApiPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 p-8">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Campaigns API</h1>
            <p className="text-xl text-gray-600">
              Create, manage, and control phishing simulation campaigns programmatically.
            </p>
          </div>

          <Alert className="mb-6">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Campaign creation requires proper authorization. Ensure you have the necessary permissions and legal
              approval before launching phishing simulations.
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                    POST
                  </Badge>
                  <CardTitle>/campaigns</CardTitle>
                </div>
                <CardDescription>Create and launch a new phishing simulation campaign</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Request Body</h4>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <code className="text-sm whitespace-pre-wrap">
                      {`{
  "name": "Q1 Security Awareness Test",
  "description": "Quarterly phishing simulation for all employees",
  "template_id": "template_123",
  "target_groups": ["group_456", "group_789"],
  "target_users": ["user_123"], // Optional: specific users
  "schedule": {
    "start_time": "2024-02-01T09:00:00Z",
    "delivery_method": "staggered", // immediate, staggered, random
    "duration_hours": 2
  },
  "settings": {
    "track_clicks": true,
    "track_credentials": true,
    "send_reminders": true,
    "reminder_delay_hours": 24,
    "auto_enroll_training": true
  },
  "landing_page": {
    "type": "educational", // educational, redirect
    "message": "This was a phishing simulation...",
    "redirect_url": "https://company.com/security-training"
  }
}`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Example Response</h4>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <code className="text-sm whitespace-pre-wrap">
                      {`{
  "id": "campaign_789",
  "name": "Q1 Security Awareness Test",
  "status": "scheduled",
  "created_at": "2024-01-15T10:30:00Z",
  "start_time": "2024-02-01T09:00:00Z",
  "target_count": 156,
  "template": {
    "id": "template_123",
    "name": "Office 365 Login",
    "type": "credential_harvesting"
  }
}`}
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    GET
                  </Badge>
                  <CardTitle>/campaigns</CardTitle>
                </div>
                <CardDescription>List all campaigns with optional filtering</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Query Parameters</h4>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
                    <div>
                      <code>status</code> - Filter by status (draft, scheduled, active, completed, paused)
                    </div>
                    <div>
                      <code>limit</code> - Number of campaigns to return (default: 50, max: 200)
                    </div>
                    <div>
                      <code>offset</code> - Number of campaigns to skip
                    </div>
                    <div>
                      <code>start_date</code> - Filter campaigns after this date
                    </div>
                    <div>
                      <code>end_date</code> - Filter campaigns before this date
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Example Response</h4>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <code className="text-sm whitespace-pre-wrap">
                      {`{
  "campaigns": [
    {
      "id": "campaign_789",
      "name": "Q1 Security Awareness Test",
      "status": "active",
      "created_at": "2024-01-15T10:30:00Z",
      "start_time": "2024-02-01T09:00:00Z",
      "target_count": 156,
      "emails_sent": 156,
      "clicks": 23,
      "credentials_entered": 8,
      "reported": 12
    }
  ],
  "total": 25,
  "limit": 50,
  "offset": 0
}`}
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    GET
                  </Badge>
                  <CardTitle>/campaigns/{"{id}"}</CardTitle>
                </div>
                <CardDescription>Get detailed information about a specific campaign</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Example Response</h4>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <code className="text-sm whitespace-pre-wrap">
                      {`{
  "id": "campaign_789",
  "name": "Q1 Security Awareness Test",
  "description": "Quarterly phishing simulation for all employees",
  "status": "active",
  "created_at": "2024-01-15T10:30:00Z",
  "start_time": "2024-02-01T09:00:00Z",
  "end_time": "2024-02-08T09:00:00Z",
  "template": {
    "id": "template_123",
    "name": "Office 365 Login",
    "type": "credential_harvesting",
    "subject": "Your Office 365 account will expire soon"
  },
  "targets": {
    "groups": ["group_456", "group_789"],
    "users": ["user_123"],
    "total_count": 156
  },
  "metrics": {
    "emails_sent": 156,
    "emails_delivered": 154,
    "emails_bounced": 2,
    "clicks": 23,
    "credentials_entered": 8,
    "reported": 12,
    "click_rate": 0.149,
    "credential_rate": 0.052,
    "report_rate": 0.078
  },
  "settings": {
    "track_clicks": true,
    "track_credentials": true,
    "send_reminders": true,
    "auto_enroll_training": true
  }
}`}
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                    PUT
                  </Badge>
                  <CardTitle>/campaigns/{"{id}"}/start</CardTitle>
                </div>
                <CardDescription>Start a scheduled campaign immediately</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Example Request</h4>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <code className="text-sm">
                      {`curl -X PUT \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  "https://api.simUphish.com/v1/campaigns/campaign_789/start"`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Example Response</h4>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <code className="text-sm whitespace-pre-wrap">
                      {`{
  "id": "campaign_789",
  "status": "active",
  "started_at": "2024-01-15T15:30:00Z",
  "message": "Campaign started successfully"
}`}
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                    PUT
                  </Badge>
                  <CardTitle>/campaigns/{"{id}"}/pause</CardTitle>
                </div>
                <CardDescription>Pause an active campaign</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Example Response</h4>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <code className="text-sm whitespace-pre-wrap">
                      {`{
  "id": "campaign_789",
  "status": "paused",
  "paused_at": "2024-01-15T16:30:00Z",
  "message": "Campaign paused successfully"
}`}
                    </code>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
                    DELETE
                  </Badge>
                  <CardTitle>/campaigns/{"{id}"}</CardTitle>
                </div>
                <CardDescription>Delete a campaign (only if not started)</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Example Response</h4>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <code className="text-sm whitespace-pre-wrap">
                      {`{
  "message": "Campaign deleted successfully",
  "deleted_at": "2024-01-15T17:30:00Z"
}`}
                    </code>
                  </div>
                </div>

                <Alert>
                  <AlertTriangle className="h-4 w-4" />
                  <AlertDescription>
                    Campaigns can only be deleted if they haven't started yet. Active or completed campaigns cannot be
                    deleted for audit and compliance purposes.
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
