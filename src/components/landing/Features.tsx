
import React from "react";
import { 
  ArrowRight, 
  BarChart3, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Globe, 
  Users 
} from "lucide-react";

const features = [
  {
    icon: <CheckCircle className="w-6 h-6 text-saas-blue" />,
    title: "Task Management",
    description:
      "Create, assign, and track tasks with ease. Set priorities, deadlines, and dependencies.",
  },
  {
    icon: <Calendar className="w-6 h-6 text-saas-blue" />,
    title: "Project Planning",
    description:
      "Plan your projects with interactive Gantt charts and timeline views to keep everything on schedule.",
  },
  {
    icon: <Users className="w-6 h-6 text-saas-blue" />,
    title: "Team Collaboration",
    description:
      "Communicate effectively with built-in messaging, file sharing, and real-time collaboration tools.",
  },
  {
    icon: <BarChart3 className="w-6 h-6 text-saas-blue" />,
    title: "Advanced Analytics",
    description:
      "Get insights into your team's performance with detailed reports and customizable dashboards.",
  },
  {
    icon: <Globe className="w-6 h-6 text-saas-blue" />,
    title: "Remote-Friendly",
    description:
      "Perfect for distributed teams with cloud-based access from anywhere in the world.",
  },
  {
    icon: <Clock className="w-6 h-6 text-saas-blue" />,
    title: "Time Tracking",
    description:
      "Keep track of hours spent on tasks and projects with built-in time tracking functionality.",
  },
];

const FeatureCard = ({ feature, index }) => {
  const animationDelay = `${index * 0.1}s`;

  return (
    <div 
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-slide-up"
      style={{ animationDelay }}
    >
      <div className="mb-4 p-2 inline-block bg-saas-light-blue rounded-lg">
        {feature.icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
      <p className="text-gray-600 mb-4">{feature.description}</p>
      <a 
        href="#" 
        className="inline-flex items-center text-saas-blue hover:text-saas-dark-blue font-medium"
      >
        Learn more <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
};

const Features = () => {
  return (
    <section className="py-20 bg-saas-gray" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Everything you need to manage your work
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive suite of tools helps you stay organized, collaborate effectively,
            and deliver projects on time and within budget.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
