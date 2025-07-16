import React from "react";
import { Zap, Shield, Target, Check } from "lucide-react";

const FeaturesSection = ({ isVisible }) => {
  const features = [
    {
      icon: <Zap className="w-12 h-12" />,
      title: "Lightning Fast",
      description:
        "Experience blazing-fast performance with our optimized infrastructure and cutting-edge technology.",
      features: ["Real-time sync", "Instant loading", "Zero latency"],
    },
    {
      icon: <Shield className="w-12 h-12" />,
      title: "Enterprise Security",
      description:
        "Bank-grade security ensures your data is protected with advanced encryption and compliance.",
      features: [
        "End-to-end encryption",
        "SOC 2 compliant",
        "Multi-factor auth",
      ],
    },
    {
      icon: <Target className="w-12 h-12" />,
      title: "Smart Analytics",
      description:
        "Make data-driven decisions with comprehensive insights and intelligent reporting.",
      features: ["Custom dashboards", "AI insights", "Performance metrics"],
    },
  ];

  return (
    <section
      id="features"
      className="section min-h-screen py-20 relative bg-white text-black"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <div className="animate-on-scroll" id="features-title">
            <h2
              className={`text-4xl md:text-5xl font-bold mb-6 transition-all duration-1000 ${
                isVisible["features-title"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Powerful Features for
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                {" "}
                Modern Teams
              </span>
            </h2>
            <p
              className={`text-xl text-gray-900 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
                isVisible["features-title"]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              Everything you need to transform your team's productivity and
              collaboration
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="animate-on-scroll"
              id={`feature-${index}`}
            >
              <div
              className={`text-left bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-purple-500/60 transition-all duration-500 group hover:transform hover:scale-105}
 ${
                  isVisible[`feature-${index}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="text-purple-400 mb-6 group-hover:text-purple-300 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-2xl text-gray-300 font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
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
