import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for small projects and personal websites",
    features: [
      "Up to 1,000 monthly active users",
      "Email/password authentication",
      "JWT token management",
      "Community support",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    highlighted: true,
  },
  {
    name: "Pro",
    price: "$0",
    period: "/ (yes, it's free)",
    description: "For growing applications with advanced needs",
    features: [
      "Up to 10,000 monthly active users",
      "Social login providers",
      "Multi-factor authentication",
      "Priority email support",
      "Custom branding",
    ],
    buttonText: "Documentation",
    buttonVariant: "outline" as const,
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$0",
    period: "/ (yes, it's still free, but I have a paypal account)",
    description: "For large-scale applications with specific requirements",
    features: [
      "Unlimited monthly active users",
      "Dedicated support team",
      "Custom integration assistance",
      "SLA guarantees",
      "On-premise deployment option",
    ],
    buttonText: "Documentation",
    buttonVariant: "outline" as const,
    highlighted: true,
  },
];

export default function GetStarted() {
  return (
    <section id="get-started" className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Choose the plan that's right for your project and start implementing
            secure authentication today.
          </p>
        </div>
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`flex flex-col ${
                plan.highlighted ? "border-blue-500 shadow-lg" : ""
              }`}
            >
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <div className="mt-2">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span className="text-gray-600">{plan.period}</span>
                  )}
                </div>
                <CardDescription className="mt-2">
                  {plan.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="mr-2 h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant={plan.buttonVariant} className="w-full">
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
