import { Check, X } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function Comparison() {
  const features = [
    { name: "Easy Setup", lightAuth: true, auth0: true, firebase: true, custom: false },
    { name: "Lightweight (<5KB gzipped)", lightAuth: true, auth0: false, firebase: false, custom: true },
    { name: "No External Dependencies", lightAuth: true, auth0: false, firebase: false, custom: true },
    { name: "Multi-factor Authentication", lightAuth: true, auth0: true, firebase: true, custom: false },
    { name: "Social Login Integration", lightAuth: true, auth0: true, firebase: true, custom: false },
    { name: "Self-hosted Option", lightAuth: true, auth0: false, firebase: false, custom: true },
    { name: "Free Tier Available", lightAuth: true, auth0: true, firebase: true, custom: true },
    { name: "Enterprise Support", lightAuth: true, auth0: true, firebase: true, custom: false },
    { name: "Customizable UI", lightAuth: true, auth0: false, firebase: false, custom: true },
  ]

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">How Light-Auth Compares</h2>
          <p className="mt-4 text-lg text-gray-600">
            See how Light-Auth stacks up against other authentication solutions.
          </p>
        </div>
        <div className="mt-12 mx-auto max-w-5xl overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-1/5">Feature</TableHead>
                  <TableHead className="w-1/5 text-center">Light-Auth</TableHead>
                  <TableHead className="w-1/5 text-center">Auth0</TableHead>
                  <TableHead className="w-1/5 text-center">Firebase Auth</TableHead>
                  <TableHead className="w-1/5 text-center">Custom Solution</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {features.map((feature) => (
                  <TableRow key={feature.name}>
                    <TableCell className="font-medium">{feature.name}</TableCell>
                    <TableCell className="text-center">
                      {feature.lightAuth ? (
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      ) : (
                        <X className="mx-auto h-5 w-5 text-red-500" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {feature.auth0 ? (
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      ) : (
                        <X className="mx-auto h-5 w-5 text-red-500" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {feature.firebase ? (
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      ) : (
                        <X className="mx-auto h-5 w-5 text-red-500" />
                      )}
                    </TableCell>
                    <TableCell className="text-center">
                      {feature.custom ? (
                        <Check className="mx-auto h-5 w-5 text-green-500" />
                      ) : (
                        <X className="mx-auto h-5 w-5 text-red-500" />
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </section>
  )
}
