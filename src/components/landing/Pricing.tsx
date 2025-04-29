
import React from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const pricingPlans = [
  {
    name: "Free",
    description: "Perfect for individuals just getting started",
    price: "$0",
    period: "forever",
    features: [
      "Up to 5 projects",
      "Basic task management",
      "File sharing up to 100MB",
      "Community support",
      "1 team member",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "Ideal for small teams and growing businesses",
    price: "$29",
    period: "per month",
    features: [
      "Unlimited projects",
      "Advanced task management",
      "File sharing up to 10GB",
      "Priority email support",
      "Up to 10 team members",
      "Custom fields",
      "Advanced reporting",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For organizations with complex workflows",
    price: "$99",
    period: "per month",
    features: [
      "Everything in Pro",
      "Unlimited team members",
      "24/7 dedicated support",
      "Custom integrations",
      "Advanced security",
      "Admin controls",
      "API access",
      "Custom training",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const PricingCard = ({ plan }) => (
  <div 
    className={`relative bg-white rounded-xl p-8 shadow-sm transition-all hover:shadow-lg ${
      plan.popular ? "border-2 border-saas-blue" : "border border-gray-100"
    }`}
  >
    {plan.popular && (
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-saas-blue text-white text-xs font-bold py-1 px-3 rounded-full">
        MOST POPULAR
      </div>
    )}
    <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
    <p className="text-gray-600 mb-6 h-12">{plan.description}</p>
    <div className="mb-6">
      <span className="text-4xl font-bold">{plan.price}</span>
      <span className="text-gray-500 ml-1">{plan.period}</span>
    </div>
    <ul className="space-y-3 mb-8">
      {plan.features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle className="h-5 w-5 text-saas-blue mr-2 flex-shrink-0 mt-0.5" />
          <span>{feature}</span>
        </li>
      ))}
    </ul>
    <Button 
      className={`w-full py-6 ${
        plan.popular 
          ? "bg-saas-blue hover:bg-saas-dark-blue text-white" 
          : "bg-white border-2 border-saas-blue text-saas-blue hover:bg-saas-light-blue"
      }`}
    >
      {plan.cta}
    </Button>
  </div>
);

const Pricing = () => {
  return (
    <section className="py-20" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the plan that works best for you and your team. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fade-in">
          {pricingPlans.map((plan, index) => (
            <PricingCard key={index} plan={plan} />
          ))}
        </div>

        <div className="text-center mt-12 text-gray-600 animate-fade-in">
          <p>All plans include basic features like task management, file sharing, and team collaboration.</p>
          <p className="mt-2">
            Need a custom plan?{" "}
            <a href="#contact" className="text-saas-blue hover:underline">
              Contact our sales team
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
