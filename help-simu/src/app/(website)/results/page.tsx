import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ResultsApiPage() {
  return (
    <div className="flex">
      <main className="flex-1 p-8">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Results & Analytics API</h1>
            <p className="text-xl text-gray-600">
              Access detailed campaign results, user behavior data, and analytics for your phishing simulations.
            </p>
          </div>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                    GET
                  </Badge>
                  <CardTitle>/campaigns/{"{id}"}/results</CardTitle>
                </div>
                <CardDescription>Get detailed results for a specific campaign</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Query Parameters</h4>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
                    <div>
                      <code>include_users</code> - Include individual user results (default: false)
                    </div>
                    <div>
                      <code>group_by</code> - Group results by department, job_title, or location
                    </div>
                    <div>
                      <code>format</code> - Response format: json or csv
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Example Response</h4>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <code className="text-sm whitespace-pre-wrap">
                      {`{
  "campaign_id": "campaign_789",
  "campaign_name": "Q1 Security Awareness Test",
  "status": "completed",
  "duration_days": 7,
  "summary": {
    "emails_sent": 156,
    "emails_delivered": 154,
    "emails_bounced": 2,
    "emails_opened": 142,
    "clicks": 23,
    "credentials_entered": 8,
    "reported": 12,
    "training_completed": 31
  },
  "rates": {
    "delivery_rate": 0.987,
    "open_rate": 0.923,
    "click_rate": 0.149,
    "credential_rate": 0.052,
    "report_rate": 0.078,
    "training_completion_rate": 0.201
  },
  "timeline": [
    {
      "timestamp": "2024-02-01T09:00:00Z",
      "event": "campaign_started",
      "count": 156
    },
    {
      "timestamp": "2024-02-01T09:15:00Z",
      "event": "first_click",
      "count": 1
    },
    {
      "timestamp": "2024-02-01T10:30:00Z",
      "event": "first_credential_entry",
      "count": 1
    }
  ],
  "demographics": {
    "by_department": {
      "Marketing": {
        "total": 23,
        "clicks": 5,
        "click_rate": 0.217
      },
      "Sales": {
        "total": 18,
        "clicks": 3,
        "click_rate": 0.167
      },
      "IT": {
        "total": 12,
        "clicks": 1,
        "click_rate": 0.083
      }
    }
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
                  <CardTitle>/campaigns/{"{id}"}/results/users</CardTitle>
                </div>
                <CardDescription>Get individual user results for a campaign</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Example Response</h4>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <code className="text-sm whitespace-pre-wrap">
                      {`{
  "users": [
    {
      "user_id": "user_123",
      "email": "john.doe@company.com",
      "first_name": "John",
      "last_name": "Doe",
      "department": "Marketing",
      "email_sent": true,
      "email_delivered": true,
      "email_opened": true,
      "clicked": true,
      "clicked_at": "2024-02-01T10:15:00Z",
      "credentials_entered": false,
      "reported": false,
      "training_assigned": true,
      "training_completed": false,
      "ip_address": "192.168.1.100",
      "user_agent": "Mozilla/5.0...",
      "location": "New York, NY"
    }
  ],
  "total": 156
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
                  <CardTitle>/users/{"{id}"}/history</CardTitle>
                </div>
                <CardDescription>Get a user's complete phishing simulation history</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Example Response</h4>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <code className="text-sm whitespace-pre-wrap">
                      {`{
  "user_id": "user_123",
  "email": "john.doe@company.com",
  "summary": {
    "campaigns_participated": 5,
    "total_clicks": 2,
    "total_credentials_entered": 1,
    "total_reported": 2,
    "overall_click_rate": 0.4,
    "improvement_trend": "improving"
  },
  "campaigns": [
    {
      "campaign_id": "campaign_789",
      "campaign_name": "Q1 Security Awareness Test",
      "date": "2024-02-01T09:00:00Z",
      "template_type": "credential_harvesting",
      "clicked": true,
      "clicked_at": "2024-02-01T10:15:00Z",
      "credentials_entered": false,
      "reported": false,
      "training_completed": true
    },
    {
      "campaign_id": "campaign_456",
      "campaign_name": "Holiday Phishing Test",
      "date": "2023-12-15T09:00:00Z",
      "template_type": "social_engineering",
      "clicked": false,
      "reported": true,
      "reported_at": "2023-12-15T09:30:00Z",
      "training_completed": true
    }
  ]
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
                  <CardTitle>/analytics/summary</CardTitle>
                </div>
                <CardDescription>Get organization-wide analytics and trends</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Query Parameters</h4>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
                    <div>
                      <code>period</code> - Time period: 30d, 90d, 1y, all (default: 90d)
                    </div>
                    <div>
                      <code>group_by</code> - Group by: month, quarter, year
                    </div>
                    <div>
                      <code>department</code> - Filter by specific department
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Example Response</h4>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <code className="text-sm whitespace-pre-wrap">
                      {`{
  "period": "90d",
  "organization": {
    "total_users": 500,
    "active_users": 485,
    "campaigns_run": 12,
    "total_emails_sent": 1850,
    "overall_click_rate": 0.156,
    "overall_report_rate": 0.089,
    "improvement_percentage": 23.5
  },
  "trends": {
    "click_rate_trend": [
      {"month": "2023-12", "rate": 0.189},
      {"month": "2024-01", "rate": 0.167},
      {"month": "2024-02", "rate": 0.145}
    ],
    "report_rate_trend": [
      {"month": "2023-12", "rate": 0.067},
      {"month": "2024-01", "rate": 0.078},
      {"month": "2024-02", "rate": 0.089}
    ]
  },
  "risk_assessment": {
    "overall_risk": "medium",
    "high_risk_users": 45,
    "improving_users": 123,
    "consistent_reporters": 89
  },
  "template_performance": [
    {
      "template_type": "credential_harvesting",
      "campaigns": 5,
      "avg_click_rate": 0.167,
      "avg_report_rate": 0.078
    },
    {
      "template_type": "business_email_compromise",
      "campaigns": 3,
      "avg_click_rate": 0.234,
      "avg_report_rate": 0.045
    }
  ]
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
                  <CardTitle>/analytics/export</CardTitle>
                </div>
                <CardDescription>Export analytics data in various formats</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Query Parameters</h4>
                  <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
                    <div>
                      <code>format</code> - Export format: csv, xlsx, pdf (default: csv)
                    </div>
                    <div>
                      <code>campaign_ids</code> - Specific campaigns to include
                    </div>
                    <div>
                      <code>include_pii</code> - Include personally identifiable information (default: false)
                    </div>
                    <div>
                      <code>date_range</code> - Date range for export
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Example Request</h4>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <code className="text-sm">
                      {`curl -H "Authorization: Bearer YOUR_API_KEY" \\
  "https://api.simUphish.com/v1/analytics/export?format=csv&include_pii=false"`}
                    </code>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Response</h4>
                  <p className="text-sm text-gray-600">
                    Returns the exported file as a download or a URL to download the generated report.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
