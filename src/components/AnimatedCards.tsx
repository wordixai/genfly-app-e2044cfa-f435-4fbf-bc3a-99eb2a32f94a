import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';

const AnimatedCards = () => {
  const cards = [
    {
      icon: <Zap className="h-8 w-8 text-blue-600" />,
      title: "Connect and command",
      description: "Sync your properties in real-time on Airbnb, Booking.com, Vrbo, and 60+ channels, instantly optimizing for top rankings"
    },
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      title: "Transform operations",
      description: "Simplify even the most demanding tasks with automated, AI-powered tools — all managed effortlessly from one intuitive dashboard"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-green-600" />,
      title: "Maximize every opportunity",
      description: "Drive revenue through dynamic pricing, pre-check-in services, and elevated guest experiences that set you apart from the competition"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="content-wrapper">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-blue-600 uppercase tracking-wide mb-4">
            How it works
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            All your properties.<br />
            Every channel. <span className="text-gradient">One</span> platform.
          </h2>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gray-50 rounded-xl flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  {card.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimatedCards;