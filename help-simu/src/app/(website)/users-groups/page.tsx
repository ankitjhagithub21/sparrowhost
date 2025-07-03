import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function UsersGroupsApiPage() {
  return (
    <div className="flex">
      <main className="flex-1 p-8">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Users & Groups API</h1>
            <p className="text-xl text-gray-600">
              Manage user lists and groups for targeting in your phishing simulation campaigns.
            </p>
          </div>

          <Tabs defaultValue="users" className="space-y-6">
            <TabsList>
              <TabsTrigger value="users">Users</TabsTrigger>
              <TabsTrigger value="groups">Groups</TabsTrigger>
            </TabsList>

            <TabsContent value="users" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      GET
                    </Badge>
                    <CardTitle>/users</CardTitle>
                  </div>
                  <CardDescription>Retrieve all users in your organization</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Query Parameters</h4>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
                      <div>
                        <code>limit</code> (optional) - Number of users to return (default: 100, max: 1000)
                      </div>
                      <div>
                        <code>offset</code> (optional) - Number of users to skip (default: 0)
                      </div>
                      <div>
                        <code>department</code> (optional) - Filter by department
                      </div>
                      <div>
                        <code>search</code> (optional) - Search by name or email
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Example Request</h4>
                    <div className="bg-gray-100 p-4 rounded-md">
                      <code className="text-sm">
                        {`curl -H "Authorization: Bearer YOUR_API_KEY" \\
  "https://api.simUphish.com/v1/users?limit=50&department=marketing"`}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Example Response</h4>
                    <div className="bg-gray-100 p-4 rounded-md">
                      <code className="text-sm whitespace-pre-wrap">
                        {`{
  "users": [
    {
      "id": "user_123",
      "email": "john.doe@company.com",
      "first_name": "John",
      "last_name": "Doe",
      "department": "Marketing",
      "job_title": "Marketing Manager",
      "created_at": "2024-01-15T10:30:00Z",
      "last_campaign": "2024-01-10T14:20:00Z",
      "status": "active"
    }
  ],
  "total": 156,
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
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      POST
                    </Badge>
                    <CardTitle>/users</CardTitle>
                  </div>
                  <CardDescription>Create a new user or import multiple users</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Request Body</h4>
                    <div className="bg-gray-100 p-4 rounded-md">
                      <code className="text-sm whitespace-pre-wrap">
                        {`{
  "users": [
    {
      "email": "jane.smith@company.com",
      "first_name": "Jane",
      "last_name": "Smith",
      "department": "Sales",
      "job_title": "Sales Representative",
      "manager_email": "sales.manager@company.com"
    }
  ]
}`}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Example Response</h4>
                    <div className="bg-gray-100 p-4 rounded-md">
                      <code className="text-sm whitespace-pre-wrap">
                        {`{
  "created": 1,
  "updated": 0,
  "errors": [],
  "users": [
    {
      "id": "user_456",
      "email": "jane.smith@company.com",
      "status": "active"
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
                    <CardTitle>/users/{"{id}"}</CardTitle>
                  </div>
                  <CardDescription>Get details for a specific user</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Example Response</h4>
                    <div className="bg-gray-100 p-4 rounded-md">
                      <code className="text-sm whitespace-pre-wrap">
                        {`{
  "id": "user_123",
  "email": "john.doe@company.com",
  "first_name": "John",
  "last_name": "Doe",
  "department": "Marketing",
  "job_title": "Marketing Manager",
  "created_at": "2024-01-15T10:30:00Z",
  "campaigns_participated": 5,
  "last_campaign": "2024-01-10T14:20:00Z",
  "click_rate": 0.2,
  "report_rate": 0.8,
  "status": "active"
}`}
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="groups" className="space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                      GET
                    </Badge>
                    <CardTitle>/groups</CardTitle>
                  </div>
                  <CardDescription>List all user groups</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Example Response</h4>
                    <div className="bg-gray-100 p-4 rounded-md">
                      <code className="text-sm whitespace-pre-wrap">
                        {`{
  "groups": [
    {
      "id": "group_123",
      "name": "Marketing Team",
      "description": "All marketing department employees",
      "user_count": 23,
      "created_at": "2024-01-15T10:30:00Z",
      "criteria": {
        "department": "Marketing"
      }
    },
    {
      "id": "group_456",
      "name": "Executive Team",
      "description": "C-level executives and VPs",
      "user_count": 8,
      "created_at": "2024-01-15T10:30:00Z",
      "criteria": {
        "job_title": ["CEO", "CTO", "CFO", "VP"]
      }
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
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                      POST
                    </Badge>
                    <CardTitle>/groups</CardTitle>
                  </div>
                  <CardDescription>Create a new user group</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Request Body</h4>
                    <div className="bg-gray-100 p-4 rounded-md">
                      <code className="text-sm whitespace-pre-wrap">
                        {`{
  "name": "Sales Team",
  "description": "All sales department employees",
  "criteria": {
    "department": "Sales"
  },
  "user_ids": ["user_123", "user_456"] // Optional: specific users
}`}
                      </code>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Group Criteria Options</h4>
                    <div className="bg-gray-50 p-4 rounded-lg space-y-2 text-sm">
                      <div>
                        <code>department</code> - Filter by department name
                      </div>
                      <div>
                        <code>job_title</code> - Filter by job title (string or array)
                      </div>
                      <div>
                        <code>location</code> - Filter by office location
                      </div>
                      <div>
                        <code>manager_email</code> - Filter by manager's email
                      </div>
                      <div>
                        <code>user_ids</code> - Specific list of user IDs
                      </div>
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
                    <CardTitle>/groups/{"{id}"}/users</CardTitle>
                  </div>
                  <CardDescription>Get all users in a specific group</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Example Response</h4>
                    <div className="bg-gray-100 p-4 rounded-md">
                      <code className="text-sm whitespace-pre-wrap">
                        {`{
  "users": [
    {
      "id": "user_123",
      "email": "john.doe@company.com",
      "first_name": "John",
      "last_name": "Doe",
      "department": "Marketing",
      "job_title": "Marketing Manager"
    },
    {
      "id": "user_456",
      "email": "jane.smith@company.com",
      "first_name": "Jane",
      "last_name": "Smith",
      "department": "Marketing",
      "job_title": "Marketing Specialist"
    }
  ],
  "total": 23,
  "group_id": "group_123"
}`}
                      </code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </main>
    </div>
  )
}
