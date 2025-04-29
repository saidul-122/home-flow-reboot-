
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background design elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-blue-200 mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute bottom-40 right-10 w-72 h-72 rounded-full bg-purple-200 mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-yellow-200 mix-blend-multiply filter blur-xl opacity-50 animate-pulse"></div>
      </div>
      
      <div className="container relative z-10 px-6 mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 animate-fade-in">
            <span className="inline-block px-4 py-1.5 mb-5 text-sm font-medium rounded-full bg-saas-light-blue text-saas-dark-blue">
              Version 2.0 is here!
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-900 mb-6">
              Streamline Your Workflow with{" "}
              <span className="text-saas-blue">FlowApp</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
              The all-in-one platform that helps teams collaborate, manage projects, 
              and deliver results faster than ever before.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-saas-blue hover:bg-saas-dark-blue text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all">
                Get Started Free
              </Button>
              <Button variant="outline" className="group border-gray-300 text-gray-700 px-8 py-6 text-lg hover:border-saas-blue">
                See How It Works
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center text-gray-500">
              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                NO CREDIT CARD REQUIRED
              </span>
              <span className="mx-3 hidden sm:block">•</span>
              <span>14-day free trial</span>
              <span className="mx-3 hidden sm:block">•</span>
              <span>Cancel anytime</span>
            </div>
          </div>
          <div className="w-full lg:w-1/2 animate-fade-in">
            <div className="relative">
              <div className="absolute -top-4 -left-4 right-4 bottom-4 rounded-xl bg-gradient-to-br from-saas-blue/20 to-purple-400/10 -z-10"></div>
              <div className="bg-white p-2 rounded-xl shadow-2xl transform hover:-translate-y-1 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?q=80&w=1000&auto=format" 
                  alt="FlowApp Dashboard Preview"
                  className="rounded-lg w-full h-auto object-cover"
                />
                <div className="absolute -bottom-3 -right-3 bg-white p-2 rounded-lg shadow-lg">
                  <div className="flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    <span className="text-xs font-medium text-gray-800">Live Dashboard</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path fill="#F9FAFB" fillOpacity="1" d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,213.3C1248,203,1344,213,1392,218.7L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
