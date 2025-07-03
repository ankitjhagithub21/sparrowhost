import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import {
  AlertTriangle,
  CheckCircle,
  ExternalLink,
  Phone,
  Settings,
  Shield,
  Smartphone,
  Users,
  Webhook,
} from "lucide-react"
import Link from "next/link"

export default function WhatsAppConfigPage() {
  return (
    <div className="flex-1 mx-auto p-6 space-y-8">
      {/* Header */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Smartphone className="h-8 w-8 text-green-600" />
          <h1 className="text-4xl font-bold">WhatsApp Business API Setup</h1>
        </div>
        <p className="text-xl text-gray-600">
          Complete guide to setting up WhatsApp Business API with Meta and integrating it with SimUPhish for WhatsApp
          phishing simulations.
        </p>
      </div>

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Setup Overview
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p>
            This integration allows you to send WhatsApp phishing simulation messages through SimUPhish using the
            official WhatsApp Business API.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Part 1: Meta Configuration</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Create Meta Developer Account</li>
                <li>• Set up Meta Business Account</li>
                <li>• Create WhatsApp Business API</li>
                <li>• Generate permanent access token</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Part 2: SimUPhish Integration</h4>
              <ul className="text-sm space-y-1 text-gray-600">
                <li>• Configure WhatsApp channel</li>
                <li>• Enter API credentials</li>
                <li>• Set up webhooks</li>
                <li>• Test integration</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Important Prerequisites */}
      <Alert>
        <AlertTriangle className="h-4 w-4" />
        <AlertDescription>
          <strong>Important:</strong> The phone number used for WhatsApp Business API must NOT be registered with any
          existing WhatsApp or WhatsApp Business account. Delete any existing account first and back up chats if needed.
        </AlertDescription>
      </Alert>

      {/* Part 1: Meta Configuration */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-lg px-3 py-1">
            Part 1
          </Badge>
          <h2 className="text-3xl font-bold">Creating WhatsApp Business API in Meta</h2>
        </div>

        {/* Step 1: Meta Developer Account */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Users className="h-5 w-5" />
              Step 1: Create Meta Developer Account
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </span>
                <div>
                  <p>
                    <strong>Sign Up or Log In:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• Visit the Meta for Developers website</li>
                    <li>• If you don't have an account, click "Getting Started" in the top-right corner</li>
                    <li>• If you see "My Apps", you're already logged in</li>
                    <li>• Agree to Meta's terms, provide phone verification, and select your role (Developer)</li>
                  </ul>
                  <Button variant="outline" size="sm" className="mt-2 bg-transparent" asChild>
                    <Link href="https://developers.facebook.com" target="_blank">
                      Meta for Developers <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Step 2: Meta Business Account */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Step 2: Create Meta Business Account
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </span>
                <div>
                  <p>
                    <strong>Access Business Manager:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• Go to Meta Business Suite</li>
                    <li>• If you don't have a Meta Business Account, select "Create an Account"</li>
                    <li>• Enter your business name, your name, and business email address</li>
                    <li>• If you have an existing account, ensure it's verified (may require business documents)</li>
                    <li>• Verification takes 2–48 hours</li>
                  </ul>
                  <Button variant="outline" size="sm" className="mt-2 bg-transparent" asChild>
                    <Link href="https://business.facebook.com" target="_blank">
                      Meta Business Suite <ExternalLink className="ml-1 h-3 w-3" />
                    </Link>
                  </Button>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Step 3: Create Meta App */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Step 3: Create Meta App
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </span>
                <div>
                  <p>
                    <strong>Navigate to My Apps:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• Log in to Meta for Developers</li>
                    <li>• Click "My Apps" in the top-right corner, then select "Create App"</li>
                  </ul>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold">
                  2
                </span>
                <div>
                  <p>
                    <strong>Select App Type:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• Choose "Business" as the app type and click "Next"</li>
                    <li>• Enter an app name (e.g., "MyWhatsAppApp")</li>
                    <li>• Select your verified Meta Business Account from the dropdown</li>
                    <li>• Click "Create App" and re-enter your Facebook password when prompted</li>
                  </ul>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Step 4: Add WhatsApp Product */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5" />
              Step 4: Add WhatsApp Product
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </span>
                <div>
                  <p>
                    <strong>Access App Dashboard:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• After creating the app, you'll be redirected to the app dashboard</li>
                    <li>• Scroll down to "Add Product", find "WhatsApp", and click "Set Up"</li>
                  </ul>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold">
                  2
                </span>
                <div>
                  <p>
                    <strong>Select Business Account:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• Choose your Meta Business Account or create one if prompted</li>
                    <li>• Click "Continue" to proceed to the WhatsApp API setup page</li>
                  </ul>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Step 5: Add Phone Number */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Step 5: Add a Phone Number
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Critical:</strong> Use a phone number NOT registered with any existing WhatsApp or WhatsApp
                Business account. Using a registered number will result in permanent loss of chats.
              </AlertDescription>
            </Alert>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </span>
                <div>
                  <p>
                    <strong>Navigate to API Setup:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• In the app dashboard, under WhatsApp, select "API Setup" from the left menu</li>
                    <li>• Scroll to "Step 5: Add a Phone Number" and click "Add Phone Number"</li>
                  </ul>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold">
                  2
                </span>
                <div>
                  <p>
                    <strong>Enter Business Details:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• Provide your business name, website (or social media profile URL), and country</li>
                    <li>• Enter a phone number not registered with any existing WhatsApp account</li>
                  </ul>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold">
                  3
                </span>
                <div>
                  <p>
                    <strong>Verify Phone Number:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• Verify the number via SMS or voice call with a 6-digit code</li>
                    <li>• Set a WhatsApp Business Profile Display Name, time zone, and category</li>
                    <li>• Click "Next" to complete</li>
                  </ul>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Step 6: Obtain IDs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Step 6: Obtain WhatsApp Business Account ID and Phone Number ID
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm font-medium text-yellow-800">
                <strong>Important:</strong> Save these IDs securely - you'll need them for SimUPhish integration.
              </p>
            </div>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </span>
                <div>
                  <p>
                    <strong>Locate IDs:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>
                      • On the API Setup page, under "Step 1: Select Phone Numbers", select your added phone number
                    </li>
                    <li>
                      • Copy the <strong>WhatsApp Business Account ID</strong> and <strong>Phone Number ID</strong>{" "}
                      displayed
                    </li>
                    <li>• Store these securely for SimUPhish integration</li>
                  </ul>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Step 7: Generate Permanent Access Token */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Step 7: Generate a Permanent Access Token
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertTriangle className="h-4 w-4" />
              <AlertDescription>
                <strong>Critical:</strong> The permanent token won't be accessible after generation. Store it securely
                immediately.
              </AlertDescription>
            </Alert>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </span>
                <div>
                  <p>
                    <strong>Create a System User:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>
                      • Go to Meta Business Suite, select your business account, and click the Settings (gear) icon
                    </li>
                    <li>• Navigate to Business Settings &gt; Users &gt; System Users</li>
                    <li>• Click "Add", name the system user (e.g., "WhatsAppAPIUser")</li>
                    <li>• Select "Admin" as the role, and click "Create System User"</li>
                  </ul>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold">
                  2
                </span>
                <div>
                  <p>
                    <strong>Assign Assets:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• In System Users, select the new user and click "Add Assets"</li>
                    <li>• Choose "Apps", select your app, and enable "Full Control" under permissions</li>
                    <li>• Click "Save Changes"</li>
                  </ul>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold">
                  3
                </span>
                <div>
                  <p>
                    <strong>Generate Permanent Token:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• Select the system user, click "Generate New Token", and choose your app</li>
                    <li>
                      • Select permissions:{" "}
                      <code className="bg-gray-100 px-1 rounded">whatsapp_business_messaging</code> and{" "}
                      <code className="bg-gray-100 px-1 rounded">whatsapp_business_management</code>
                    </li>
                    <li>• Click "Generate Token", copy the token, and save it securely</li>
                  </ul>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Step 8: Configure Webhooks */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Webhook className="h-5 w-5" />
              Step 8: Configure Webhooks (Optional for SimUPhish Integration)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-gray-600">
              This step may be required depending on your SimUPhish configuration. Check with SimUPhish documentation or
              support for webhook requirements.
            </p>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </span>
                <div>
                  <p>
                    <strong>Set Up Webhooks:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• In the app dashboard, go to WhatsApp &gt; Configuration</li>
                    <li>• Click "Set Up" under Webhooks</li>
                    <li>• Enter a Callback URL provided by SimUPhish (check their documentation or dashboard)</li>
                    <li>• Enter a Webhook Verify Token (also from SimUPhish)</li>
                    <li>• Click "Verify and Save", then subscribe to the messages webhook field</li>
                  </ul>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Step 9: Test Setup */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Step 9: Test the Setup
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </span>
                <div>
                  <p>
                    <strong>Send a Test Message:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• On the API Setup page, use the temporary access token (valid for 24 hours)</li>
                    <li>• Use the test phone number provided by Meta</li>
                    <li>• Enter a recipient phone number (your own for testing) in the "To" field</li>
                    <li>• Send a test message using the provided curl command or a tool like Postman</li>
                  </ul>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Step 10: Go Live */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Step 10: Verify Business and Go Live
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </span>
                <div>
                  <p>
                    <strong>Business Verification:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• Ensure your Meta Business Account is verified by submitting required documents</li>
                    <li>• Submit business license or other required documents in Meta Business Suite</li>
                    <li>• Verification typically takes 2–48 hours</li>
                  </ul>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-blue-100 text-blue-800 rounded-full flex items-center justify-center text-sm font-semibold">
                  2
                </span>
                <div>
                  <p>
                    <strong>Switch to Live Mode:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• In the app dashboard, change the app mode to "Live" to send messages to production users</li>
                  </ul>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>

      <Separator />

      {/* Part 2: SimUPhish Integration */}
      <div className="space-y-6">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="text-lg px-3 py-1">
            Part 2
          </Badge>
          <h2 className="text-3xl font-bold">Integrating WhatsApp Business API with SimUPhish Dashboard</h2>
        </div>

        <Alert>
          <AlertTriangle className="h-4 w-4" />
          <AlertDescription>
            The following steps are based on standard practices for integrating WhatsApp Business API with third-party
            platforms. Check SimUPhish's official documentation or support for exact field names and steps.
          </AlertDescription>
        </Alert>

        {/* Step 1: Access SimUPhish Dashboard */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-5 w-5" />
              Step 1: Access SimUPhish Dashboard
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </span>
                <div>
                  <p>
                    <strong>Log In to SimUPhish:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• Go to the SimUPhish platform (you'll need your login credentials or a SimUPhish account)</li>
                    <li>• Navigate to the integrations or channels section</li>
                    <li>
                      • Look for sections labeled as "Integrations," "Channels," "WhatsApp Settings", or "WA Campaigns"
                    </li>
                  </ul>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Step 2: Add WhatsApp Channel */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Smartphone className="h-5 w-5" />
              Step 2: Add WhatsApp Channel
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </span>
                <div>
                  <p>
                    <strong>Select WhatsApp Integration:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• In the SimUPhish dashboard, find the option to add a new channel or integration</li>
                    <li>• Choose "WhatsApp" or "WhatsApp Business API" as the channel type</li>
                  </ul>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Step 3: Enter WhatsApp Credentials */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Step 3: Enter WhatsApp Credentials
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-sm font-medium text-blue-800">
                <strong>Required Information:</strong> You'll need the credentials from Part 1 of this setup.
              </p>
            </div>
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </span>
                <div>
                  <p>
                    <strong>Input Credentials:</strong>
                  </p>
                  <div className="mt-2 space-y-2">
                    <div className="bg-gray-50 p-3 rounded border">
                      <p className="font-medium">Enter the following details from your Meta WhatsApp setup:</p>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600">
                        <li>
                          • <strong>Permanent Access Token:</strong> Paste the token generated in Step 7 of Part 1
                        </li>
                        <li>
                          • <strong>WhatsApp Business Account ID:</strong> Paste the ID copied in Step 6 of Part 1
                        </li>
                        <li>
                          • <strong>Phone Number ID:</strong> Paste the ID copied in Step 6 of Part 1
                        </li>
                      </ul>
                    </div>
                    <p className="text-sm text-gray-600">
                      If SimUPhish requires additional fields (e.g., App ID or Webhook URL), retrieve the App ID from
                      the Meta app dashboard under Settings &gt; Basic, or contact SimUPhish support for the correct
                      Webhook URL and Verify Token.
                    </p>
                  </div>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Step 4: Configure Webhook */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Webhook className="h-5 w-5" />
              Step 4: Configure Webhook (If Required by SimUPhish)
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </span>
                <div>
                  <p>
                    <strong>Set Up Webhook in SimUPhish:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>
                      • If SimUPhish requires a webhook for receiving messages, copy the Callback URL and Webhook Verify
                      Token from the SimUPhish dashboard
                    </li>
                    <li>
                      • Return to the Meta app dashboard, go to WhatsApp &gt; Configuration, and paste these values
                    </li>
                    <li>• Subscribe to the messages webhook field and save</li>
                  </ul>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Step 5: Test Integration */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Step 5: Test the Integration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </span>
                <div>
                  <p>
                    <strong>Send a Test Message:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>
                      • In the SimUPhish dashboard, use their testing feature (if available) to send a test message to a
                      verified phone number
                    </li>
                    <li>• Verify that messages are sent and received correctly</li>
                  </ul>
                </div>
              </li>
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-semibold">
                  2
                </span>
                <div>
                  <p>
                    <strong>Check Analytics:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• Confirm that SimUPhish displays delivery and read status for test messages</li>
                    <li>• This indicates successful integration</li>
                  </ul>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>

        {/* Step 6: Save and Activate */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Step 6: Save and Activate
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ol className="space-y-3">
              <li className="flex gap-3">
                <span className="flex-shrink-0 w-6 h-6 bg-green-100 text-green-800 rounded-full flex items-center justify-center text-sm font-semibold">
                  1
                </span>
                <div>
                  <p>
                    <strong>Save Settings:</strong>
                  </p>
                  <ul className="mt-2 space-y-1 text-gray-600">
                    <li>• Save the configuration in the SimUPhish dashboard</li>
                    <li>
                      • Ensure the WhatsApp channel is active and ready for use in your campaigns or customer support
                      workflows
                    </li>
                  </ul>
                </div>
              </li>
            </ol>
          </CardContent>
        </Card>
      </div>

      {/* Notes and Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Notes and Tips</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-3">
            <div className="flex gap-3">
              <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Phone Number Restrictions:</p>
                <p className="text-sm text-gray-600">
                  The phone number used for the WhatsApp Business API must not be registered with the WhatsApp Business
                  App or personal WhatsApp. Delete any existing account on the number first, and back up chats if
                  needed.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Users className="h-5 w-5 text-blue-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">SimUPhish Support:</p>
                <p className="text-sm text-gray-600">
                  If you can't find the exact fields for the token, WhatsApp Business Account ID, or Phone Number ID in
                  the SimUPhish dashboard, contact their support team or check their help center for specific
                  instructions.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Webhook className="h-5 w-5 text-purple-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Webhook Configuration:</p>
                <p className="text-sm text-gray-600">
                  Some platforms like SimUPhish require webhooks for real-time message updates. Ensure you have the
                  correct Callback URL and Verify Token from SimUPhish.
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Shield className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-medium">Business Verification:</p>
                <p className="text-sm text-gray-600">
                  Complete Meta's business verification to avoid limitations on messaging or API access.
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Troubleshooting */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5" />
            Troubleshooting
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4">
              <p className="font-medium text-red-800">Error: "Your Request Couldn't Be Processed"</p>
              <p className="text-sm text-gray-600">
                This indicates a Meta platform issue. Wait and retry, or contact Meta support.
              </p>
            </div>
            <div className="border-l-4 border-amber-500 pl-4">
              <p className="font-medium text-amber-800">Token Expiration</p>
              <p className="text-sm text-gray-600">
                The temporary token lasts 24 hours. Always use the permanent token for SimUPhish integration.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="font-medium text-blue-800">Webhook Issues</p>
              <p className="text-sm text-gray-600">
                Ensure the Callback URL is HTTPS and uses a valid SSL certificate.
              </p>
            </div>
            <div className="border-l-4 border-purple-500 pl-4">
              <p className="font-medium text-purple-800">SimUPhish Integration Fails</p>
              <p className="text-sm text-gray-600">
                Double-check credentials for typos and verify that the phone number is correctly registered in Meta.
                Contact SimUPhish support for platform-specific errors.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Links Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Useful Links</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Button variant="outline" size="sm" asChild className="w-full justify-start bg-transparent">
                <Link href="https://developers.facebook.com" target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Meta for Developers
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild className="w-full justify-start bg-transparent">
                <Link href="https://business.facebook.com" target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Meta Business Suite
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild className="w-full justify-start bg-transparent">
                <Link href="https://developers.facebook.com/docs/whatsapp/cloud-api" target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  WhatsApp Cloud API Documentation
                </Link>
              </Button>
            </div>
            <div className="space-y-2">
              <Button variant="outline" size="sm" asChild className="w-full justify-start bg-transparent">
                <Link href="https://www.facebook.com/business/help/2058515294227817" target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Meta Business Verification
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild className="w-full justify-start bg-transparent">
                <Link href="https://developers.facebook.com/docs/whatsapp/cloud-api/webhooks" target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  WhatsApp Webhooks Documentation
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
