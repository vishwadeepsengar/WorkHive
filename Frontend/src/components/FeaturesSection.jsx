import React from "react";
import { Zap, Shield, Target, Check } from "lucide-react";

const FeaturesSection = () => {
  const features = [
  {
    icon: <Zap className="w-12 h-12" />,
    title: "Seamless Project Tracking",
    description:
      "Keep every project on schedule with clear timelines, milestones, and progress tracking.",
    features: ["Task assignments", "Milestone tracking", "Real-time updates"],
  },
  {
    icon: <Shield className="w-12 h-12" />,
    title: "Secure Employee Management",
    description:
      "Manage employee data and roles with enterprise-grade security and compliance features.",
    features: [
      "Role-based access",
      "Data privacy compliance",
      "Secure document storage",
    ],
  },
  {
    icon: <Target className="w-12 h-12" />,
    title: "Advanced Team Insights",
    description:
      "Gain actionable insights into team performance, workload distribution, and productivity trends.",
    features: [
      "Custom reports",
      "Performance analytics",
      "Workload monitoring",
    ],
  },
];


  return (
    <section
      id="features"
      className="section min-h-screen py-20 relative bg-white text-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-20">
          <div className="animate-on-scroll" id="features-title">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features for{" "}
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Modern Teams
              </span>
            </h2>
            <p className="text-xl text-gray-900 max-w-2xl mx-auto">
              Everything you need to transform your team's productivity and
              collaboration
            </p>
          </div>
        </div>

        {/* Features Grid */}
       <div className="grid md:grid-cols-3 gap-5">
  {features.map((feature, index) => (
    <div key={index} className="animate-on-scroll h-full" id={`feature-${index}`}>
      <div
        className={`flex flex-col h-full text-left bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-purple-500/60 transition-all duration-500 group hover:scale-105`}
        style={{ transitionDelay: `${index * 200}ms` }}
      >
        {/* Icon */}
        <div className="text-purple-400 mb-6 group-hover:text-purple-300 transition-colors">
          {feature.icon}
        </div>

        {/* Title & Description */}
        <h3 className="text-2xl text-gray-300 font-bold mb-4">
          {feature.title}
        </h3>
        <p className="text-gray-300 mb-6 flex-grow">{feature.description}</p>

        {/* Feature List */}
        <ul className="space-y-2 mt-auto">
          {feature.features.map((item, i) => (
            <li key={i} className="flex items-center space-x-2">
              <Check className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-300">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  ))}
</div>

      </div>
    </section>
  );
};

export default FeaturesSection;
