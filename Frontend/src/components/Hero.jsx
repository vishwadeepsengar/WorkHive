import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="hero"
      className="w-full min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900"
    >
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-blue-900/10"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl md:text-7xl text-white font-bold mb-8 leading-tight">
          Welcome to{' '}
          <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 bg-clip-text text-transparent">
            WorkHive
          </span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-12">
          The future of collaborative workspaces. Where productivity meets innovation.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-gradient-to-r from-purple-600 to-purple-700 px-8 py-4 rounded-lg text-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 flex items-center space-x-2 group">
            <span>Start Your Journey</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="border border-purple-400 px-8 py-4 rounded-lg text-white text-lg font-semibold hover:bg-purple-600/20 transition-all duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-purple-400" />
      </div>
    </section>
  );
};

export default Hero;

