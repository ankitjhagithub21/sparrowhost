import { Sidebar } from "@/components/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Shield, Lock, Key, AlertTriangle } from "lucide-react"
import Link from "next/link"

export default function SecurityPage() {
  return (
    <div className="flex">
    
      <main className="flex-1 p-8">
        <div className="max-w-4xl">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-4">Security</h1>
            <p className="text-xl text-gray-600">
              Learn about security best practices and how to keep your simUphish applications secure.
            </p>
          </div>

          <Alert className="mb-8">
            <AlertTriangle className="h-4 w-4" />
            <AlertDescription>
              Security is a shared responsibility. While simUphish provides secure infrastructure, you must implement
              proper security practices in your applications.
            </AlertDescription>
          </Alert>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Key className="h-6 w-6 text-blue-600" />
                  <div>
                    <CardTitle>API Key Management</CardTitle>
                    <CardDescription>Best practices for managing your API keys securely</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">✅ Do:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    <li>Store API keys in environment variables</li>
                    <li>Use different keys for development and production</li>
                    <li>Rotate keys regularly</li>
                    <li>Restrict key permissions to minimum required</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">❌ Don't:</h4>
                  <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                    <li>Hardcode keys in your source code</li>
                    <li>Share keys in public repositories</li>
                    <li>Use production keys in development</li>
                    <li>Store keys in client-side code</li>
                  </ul>
                </div>
                <div className="bg-gray-100 p-4 rounded-md">
                  <code className="text-sm">
                    {`// ✅ Good
const apiKey = process.env.SIMUPFISH_API_KEY

// ❌ Bad
const apiKey = "sk_live_abc123..."`}
                  </code>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Lock className="h-6 w-6 text-green-600" />
                  <div>
                    <CardTitle>Data Encryption</CardTitle>
                    <CardDescription>How simUphish protects your data</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Encryption at Rest</h4>
                  <p className="text-sm text-gray-600">
                    All data stored in simUphish is encrypted using AES-256 encryption. Database backups and logs are
                    also encrypted.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Encryption in Transit</h4>
                  <p className="text-sm text-gray-600">
                    All API communications use TLS 1.2 or higher. We enforce HTTPS for all connections and use
                    certificate pinning.
                  </p>
                </div>
                <Link href="/security/encryption" className="text-blue-600 hover:underline text-sm">
                  Learn more about our encryption →
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Shield className="h-6 w-6 text-purple-600" />
                  <div>
                    <CardTitle>Authentication & Authorization</CardTitle>
                    <CardDescription>Secure user authentication and access control</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Multi-Factor Authentication</h4>
                  <p className="text-sm text-gray-600 mb-2">
                    Enable MFA for all user accounts to add an extra layer of security.
                  </p>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <code className="text-sm">
                      {`// Enable MFA for a user
await simUphish.auth.enableMFA({
  userId: 'user_123',
  method: 'totp'
})`}
                    </code>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Role-Based Access Control</h4>
                  <p className="text-sm text-gray-600">
                    Implement RBAC to ensure users only have access to resources they need.
                  </p>
                </div>
                <Link href="/security/best-practices" className="text-blue-600 hover:underline text-sm">
                  View authentication best practices →
                </Link>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 bg-red-50 border border-red-200 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-red-900 mb-2">Security Incident Response</h3>
            <p className="text-red-800 mb-4">
              If you discover a security vulnerability, please report it to our security team immediately.
            </p>
            <div className="flex gap-4">
              <Link href="mailto:security@simUphish.com" className="text-red-700 hover:underline">
                security@simUphish.com
              </Link>
              <Link href="/security/reporting" className="text-red-700 hover:underline">
                Security Reporting Guidelines
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
