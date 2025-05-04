import { Shield, Zap, Lock, Globe, Code, RefreshCw } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Shield className="h-10 w-10 text-blue-500" />,
      title: "Secure by Default",
      description:
        "Built with security best practices. Protects against common vulnerabilities like CSRF, XSS, and injection attacks.",
    },
    {
      icon: <Zap className="h-10 w-10 text-blue-500" />,
      title: "Lightning Fast",
      description: "Optimized for performance with minimal overhead. Authentication flows complete in milliseconds.",
    },
    {
      icon: <Lock className="h-10 w-10 text-blue-500" />,
      title: "Multi-factor Authentication",
      description: "Easily implement SMS, email, or app-based two-factor authentication to enhance security.",
    },
    {
      icon: <Globe className="h-10 w-10 text-blue-500" />,
      title: "Cross-platform Support",
      description: "Works seamlessly across web, mobile, and desktop applications with a unified API.",
    },
    {
      icon: <Code className="h-10 w-10 text-blue-500" />,
      title: "Developer Friendly",
      description: "Simple, intuitive API with comprehensive documentation and examples for quick implementation.",
    },
    {
      icon: <RefreshCw className="h-10 w-10 text-blue-500" />,
      title: "Stateless JWT Tokens",
      description:
        "Utilizes modern JWT tokens for stateless authentication, reducing database load and improving scalability.",
    },
  ]

  return (
    <section id="features" className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Features that make authentication effortless
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Light-Auth combines security, performance, and ease of use in one lightweight package.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
