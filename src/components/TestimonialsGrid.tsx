import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const TestimonialsGrid = () => {
  const testimonials = [
    {
      statistic: "10x",
      description: "portfolio increase in 2 years",
      company: "Old Town Rentals",
      testimonial: "There are a lot of options when it comes to property management software, but having one that grows with the industry has been super helpful for us",
      bgColor: "bg-gradient-to-br from-blue-500 to-purple-600"
    },
    {
      statistic: "50+",
      description: "hours on average saved per month", 
      company: "Tiny Away",
      bgColor: "bg-gradient-to-br from-green-500 to-blue-600"
    },
    {
      statistic: "2.5x",
      description: "revenue growth in 2 years",
      company: "Zen Vacation Rentals", 
      bgColor: "bg-gradient-to-br from-purple-500 to-pink-600"
    },
    {
      statistic: "840",
      description: "properties added in 5 years",
      company: "Host & Stay",
      bgColor: "bg-gradient-to-br from-orange-500 to-red-600"
    },
    {
      statistic: "~50%",
      description: "increase in daily rates",
      company: "Cypriot Realty",
      bgColor: "bg-gradient-to-br from-teal-500 to-green-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="content-wrapper">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-start mb-16">
          <div>
            <div className="text-sm font-medium text-blue-600 uppercase tracking-wide mb-4">
              Real voices, real results
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Hear from property professionals<br />
              who <span className="text-gradient">partnered</span> with Guesty
            </h2>
          </div>
          <div>
            <p className="text-xl text-gray-600 mb-8">
              Fueled by exploration and innovation, Guesty's comprehensive product suite delivers the tools you need to scale your portfolio and stay ahead
            </p>
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get a demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`${item.bgColor} rounded-2xl p-8 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300`}
            >
              <div className="relative z-10">
                <div className="text-4xl font-bold mb-2">
                  {item.statistic}
                </div>
                <p className="text-white/90 mb-6">
                  {item.description}
                </p>
                <div className="flex items-center space-x-2 mb-4">
                  <span className="font-medium">{item.company}</span>
                </div>
                {item.testimonial && (
                  <blockquote className="text-sm text-white/90 italic">
                    "{item.testimonial}"
                  </blockquote>
                )}
              </div>
              
              {/* Background decoration */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-white/10 rounded-full opacity-50"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsGrid;