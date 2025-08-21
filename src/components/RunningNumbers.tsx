import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const RunningNumbers = () => {
  const stats = [
    {
      number: "500K+",
      description: "listings managed across our platform"
    },
    {
      number: "99.99%",
      description: "uptime backed by 24/7 support"
    },
    {
      prefix: "Daily",
      description: "feature releases to keep you ahead"
    },
    {
      number: "250+",
      description: "R&D experts driving continuous innovation"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="content-wrapper">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div>
            <div className="text-sm font-medium text-blue-600 uppercase tracking-wide mb-4">
              Why Guesty?
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
              Built by hosts, trusted<br />
              by industry <span className="text-gradient">leaders</span><br />
              worldwide
            </h2>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get a demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="mt-12 lg:mt-0">
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <div className="text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                    {stat.prefix && (
                      <span className="text-2xl lg:text-3xl text-blue-600 block mb-1">
                        {stat.prefix}
                      </span>
                    )}
                    {stat.number}
                  </div>
                  <p className="text-gray-600">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RunningNumbers;