"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export default function AuthDemo() {
  const [activeTab, setActiveTab] = useState("login")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [token, setToken] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)
    setToken("")

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Demo validation
      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters")
      }

      if (!email.includes("@")) {
        throw new Error("Please enter a valid email address")
      }

      // Generate a fake JWT token for demo purposes
      const demoToken = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiZW1haWwiOiIke2VtYWlsfSIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMn0.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`

      setSuccess(true)
      setToken(demoToken)
    } catch (err: any) {
      setError(err.message || "Authentication failed")
    } finally {
      setLoading(false)
    }
  }

  const resetForm = () => {
    setSuccess(false)
    setError("")
    setToken("")
    setPassword("")
    if (activeTab === "register") {
      setName("")
    }
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value)
    resetForm()
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">Try Light-Auth</h2>
          <p className="mt-4 text-lg text-gray-600">
            Experience how Light-Auth works with this interactive demo. Enter your details below to see it in action.
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-md">
          <Card className="border-2">
            <CardHeader>
              <CardTitle className="text-center">Authentication Demo</CardTitle>
              <CardDescription className="text-center">
                This is a simulated demo of Light-Auth in action
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="login">Login</TabsTrigger>
                  <TabsTrigger value="register">Register</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="password" className="text-sm font-medium">
                        Password
                      </label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Logging in...
                        </>
                      ) : (
                        "Log in"
                      )}
                    </Button>
                  </form>
                </TabsContent>
                <TabsContent value="register">
                  <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="password" className="text-sm font-medium">
                        Password
                      </label>
                      <Input
                        id="password"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>
                    <Button type="submit" className="w-full" disabled={loading}>
                      {loading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Registering...
                        </>
                      ) : (
                        "Register"
                      )}
                    </Button>
                  </form>
                </TabsContent>
              </Tabs>

              {success && (
                <Alert className="mt-4 bg-green-50 border-green-200">
                  <CheckCircle className="h-4 w-4 text-green-600" />
                  <AlertDescription className="text-green-800">
                    {activeTab === "login" ? "Login successful!" : "Registration successful!"}
                  </AlertDescription>
                </Alert>
              )}

              {error && (
                <Alert className="mt-4 bg-red-50 border-red-200">
                  <AlertCircle className="h-4 w-4 text-red-600" />
                  <AlertDescription className="text-red-800">{error}</AlertDescription>
                </Alert>
              )}

              {token && (
                <div className="mt-4">
                  <p className="text-sm font-medium mb-2">JWT Token:</p>
                  <div className="bg-gray-100 p-2 rounded-md">
                    <p className="text-xs text-gray-800 break-all">{token}</p>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    This token would be stored securely and used for authenticated API requests.
                  </p>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex justify-center border-t pt-4">
              <p className="text-xs text-gray-500">Note: This is a demo. No actual authentication is performed.</p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  )
}
