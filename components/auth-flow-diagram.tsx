"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useState } from "react"

export default function AuthFlowDiagram() {
  const [activeTab, setActiveTab] = useState("flow")

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How Light-Auth Works</h2>
          <p className="mt-4 text-lg text-gray-600">Understanding the authentication flow and security architecture</p>
        </div>
        <div className="mt-12 mx-auto max-w-4xl">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="flow">Authentication Flow</TabsTrigger>
              <TabsTrigger value="architecture">Security Architecture</TabsTrigger>
            </TabsList>
            <TabsContent value="flow">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="w-full my-8">
                      <div className="relative">
                        {/* Authentication Flow Diagram */}
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
                          {/* Client */}
                          <div className="flex flex-col items-center">
                            <div className="w-32 h-20 bg-blue-100 rounded-lg flex items-center justify-center border border-blue-200">
                              <span className="font-medium text-blue-800">Client</span>
                            </div>
                            <span className="text-sm text-gray-500 mt-2">Browser/App</span>
                          </div>

                          {/* Arrows */}
                          <div className="flex flex-col items-center">
                            <div className="hidden md:block w-24 h-0.5 bg-gray-300"></div>
                            <div className="md:hidden h-8 w-0.5 bg-gray-300"></div>
                            <div className="text-xs text-gray-500 my-1">1. Auth Request</div>
                            <div className="hidden md:block w-24 h-0.5 bg-gray-300"></div>
                            <div className="md:hidden h-8 w-0.5 bg-gray-300"></div>
                          </div>

                          {/* Light-Auth */}
                          <div className="flex flex-col items-center">
                            <div className="w-32 h-20 bg-blue-600 rounded-lg flex items-center justify-center">
                              <span className="font-medium text-white">Light-Auth</span>
                            </div>
                            <span className="text-sm text-gray-500 mt-2">Authentication Service</span>
                          </div>

                          {/* Arrows */}
                          <div className="flex flex-col items-center">
                            <div className="hidden md:block w-24 h-0.5 bg-gray-300"></div>
                            <div className="md:hidden h-8 w-0.5 bg-gray-300"></div>
                            <div className="text-xs text-gray-500 my-1">2. Verify</div>
                            <div className="hidden md:block w-24 h-0.5 bg-gray-300"></div>
                            <div className="md:hidden h-8 w-0.5 bg-gray-300"></div>
                          </div>

                          {/* Database */}
                          <div className="flex flex-col items-center">
                            <div className="w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                              <span className="font-medium text-gray-800">User DB</span>
                            </div>
                            <span className="text-sm text-gray-500 mt-2">Secure Storage</span>
                          </div>
                        </div>

                        {/* Return Flow */}
                        <div className="mt-8 flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
                          {/* Client */}
                          <div className="flex flex-col items-center">
                            <div className="w-32 h-20 bg-blue-100 rounded-lg flex items-center justify-center border border-blue-200">
                              <span className="font-medium text-blue-800">Client</span>
                            </div>
                          </div>

                          {/* Arrows */}
                          <div className="flex flex-col items-center">
                            <div className="hidden md:block w-24 h-0.5 bg-gray-300"></div>
                            <div className="md:hidden h-8 w-0.5 bg-gray-300"></div>
                            <div className="text-xs text-gray-500 my-1">4. JWT Token</div>
                            <div className="hidden md:block w-24 h-0.5 bg-gray-300"></div>
                            <div className="md:hidden h-8 w-0.5 bg-gray-300"></div>
                          </div>

                          {/* Light-Auth */}
                          <div className="flex flex-col items-center">
                            <div className="w-32 h-20 bg-blue-600 rounded-lg flex items-center justify-center">
                              <span className="font-medium text-white">Light-Auth</span>
                            </div>
                          </div>

                          {/* Arrows */}
                          <div className="flex flex-col items-center">
                            <div className="hidden md:block w-24 h-0.5 bg-gray-300"></div>
                            <div className="md:hidden h-8 w-0.5 bg-gray-300"></div>
                            <div className="text-xs text-gray-500 my-1">3. Response</div>
                            <div className="hidden md:block w-24 h-0.5 bg-gray-300"></div>
                            <div className="md:hidden h-8 w-0.5 bg-gray-300"></div>
                          </div>

                          {/* Database */}
                          <div className="flex flex-col items-center">
                            <div className="w-32 h-20 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                              <span className="font-medium text-gray-800">User DB</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 text-sm text-gray-600 max-w-2xl">
                      <h3 className="font-semibold text-lg mb-2">Authentication Flow Explained</h3>
                      <ol className="list-decimal pl-5 space-y-2">
                        <li>
                          <strong>Client Request:</strong> The user submits credentials through your application, which
                          sends an authentication request to Light-Auth.
                        </li>
                        <li>
                          <strong>Verification:</strong> Light-Auth securely verifies the credentials against the user
                          database using industry-standard hashing and security practices.
                        </li>
                        <li>
                          <strong>Database Response:</strong> The user database confirms the identity and permissions of
                          the user.
                        </li>
                        <li>
                          <strong>Token Generation:</strong> Upon successful authentication, Light-Auth generates a
                          secure JWT token containing the user's identity and permissions, which is returned to the
                          client.
                        </li>
                        <li>
                          <strong>Secure Session:</strong> The client stores the token and includes it in subsequent API
                          requests to maintain a secure, authenticated session.
                        </li>
                      </ol>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="architecture">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center">
                    <div className="w-full my-8">
                      {/* Security Architecture Diagram */}
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                          <h3 className="font-semibold text-blue-800 mb-2">Client-Side Security</h3>
                          <ul className="text-sm space-y-2">
                            <li className="flex items-start">
                              <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                                ✓
                              </span>
                              <span>CSRF Protection</span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                                ✓
                              </span>
                              <span>XSS Prevention</span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-blue-200 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                                ✓
                              </span>
                              <span>Secure Token Storage</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-blue-600 p-4 rounded-lg text-white">
                          <h3 className="font-semibold mb-2">Transport Security</h3>
                          <ul className="text-sm space-y-2">
                            <li className="flex items-start">
                              <span className="bg-white text-blue-600 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                                ✓
                              </span>
                              <span>TLS Encryption</span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-white text-blue-600 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                                ✓
                              </span>
                              <span>Certificate Validation</span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-white text-blue-600 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                                ✓
                              </span>
                              <span>HSTS Implementation</span>
                            </li>
                          </ul>
                        </div>

                        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                          <h3 className="font-semibold text-gray-800 mb-2">Server-Side Security</h3>
                          <ul className="text-sm space-y-2">
                            <li className="flex items-start">
                              <span className="bg-gray-200 text-gray-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                                ✓
                              </span>
                              <span>Bcrypt Password Hashing</span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-gray-200 text-gray-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                                ✓
                              </span>
                              <span>Rate Limiting</span>
                            </li>
                            <li className="flex items-start">
                              <span className="bg-gray-200 text-gray-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-0.5">
                                ✓
                              </span>
                              <span>Brute Force Protection</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-8 bg-gray-50 p-4 rounded-lg border border-gray-200">
                        <h3 className="font-semibold text-center mb-4">JWT Token Security</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div className="bg-white p-3 rounded border border-gray-200">
                            <h4 className="font-medium text-sm mb-2">Header</h4>
                            <div className="bg-gray-100 p-2 rounded text-xs font-mono">
                              {`{
  "alg": "HS256",
  "typ": "JWT"
}`}
                            </div>
                          </div>
                          <div className="bg-white p-3 rounded border border-gray-200">
                            <h4 className="font-medium text-sm mb-2">Payload</h4>
                            <div className="bg-gray-100 p-2 rounded text-xs font-mono">
                              {`{
  "sub": "user_id",
  "name": "John Doe",
  "iat": 1516239022,
  "exp": 1516242622
}`}
                            </div>
                          </div>
                          <div className="bg-white p-3 rounded border border-gray-200">
                            <h4 className="font-medium text-sm mb-2">Signature</h4>
                            <div className="bg-gray-100 p-2 rounded text-xs font-mono">
                              HMACSHA256(
                              <br />
                              base64UrlEncode(header) +
                              <br />
                              "." +
                              <br />
                              base64UrlEncode(payload),
                              <br />
                              secret
                              <br />)
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-6 text-sm text-gray-600 max-w-2xl">
                      <h3 className="font-semibold text-lg mb-2">Security Architecture Highlights</h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          <strong>End-to-End Encryption:</strong> All communication between clients and Light-Auth is
                          encrypted using TLS 1.3.
                        </li>
                        <li>
                          <strong>Password Security:</strong> User passwords are never stored in plain text. They are
                          hashed using bcrypt with appropriate salt rounds.
                        </li>
                        <li>
                          <strong>Token Security:</strong> JWTs are signed using HMAC SHA-256 and include expiration
                          times to limit the window of opportunity for attacks.
                        </li>
                        <li>
                          <strong>Protection Against Common Attacks:</strong> Built-in safeguards against CSRF, XSS,
                          injection attacks, and brute force attempts.
                        </li>
                        <li>
                          <strong>Regular Security Audits:</strong> The Light-Auth codebase undergoes regular security
                          audits and penetration testing.
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
