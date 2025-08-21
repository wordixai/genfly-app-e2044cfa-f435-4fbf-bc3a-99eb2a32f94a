import React from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from 'lucide-react';

const StickyStack = () => {
  const stackItems = [
    {
      title: "Get started with ease",
      tags: ["1-3 listings", "Guesty LITE™"],
      tagVariant: "bg-blue-100 text-blue-800",
      quote: "Solo hosts and property owners can transform their vacation rental side hustles into thriving businesses, managing bookings and delighting guests effortlessly with Guesty",
      buttonText: "Discover Guesty Lite™",
      buttonHref: "#",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop"
    },
    {
      title: "Scale to new heights", 
      tags: ["4-199 listings", "Guesty PRO™"],
      tagVariant: "bg-purple-100 text-purple-800",
      quote: "Guesty helps growing rental companies evolve from just a few properties into regional leaders, managing hundreds of listings and driving millions in revenue",
      buttonText: "Discover Guesty Pro™",
      buttonHref: "#",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
    },
    {
      title: "Elevate your business",
      tags: ["200+ listings", "Guesty ENTERPRISE™"],
      tagVariant: "bg-green-100 text-green-800",
      quote: "Property management enterprises rely on Guesty's customized solutions to manage thousands of listings, optimize revenue, and deliver exceptional guest experiences globally",
      buttonText: "Discover Guesty Enterprise™",
      buttonHref: "#",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop"
    }
  ];

  return (
    <section className="py-20">
      <div className="content-wrapper">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-blue-600 uppercase tracking-wide mb-4">
            From solo to scale
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Your business has <span className="text-gradient">no limits.</span><br />
            Neither do we.
          </h2>
        </div>

        <div className="space-y-8">
          {stackItems.map((item, index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden shadow-2xl bg-white"
            >
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                {/* Image */}
                <div className="relative h-64 lg:h-96">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  
                  {/* Title overlay */}
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {item.title}
                    </h3>
                    <div className="flex space-x-2">
                      {item.tags.map((tag, tagIdx) => (
                        <Badge key={tagIdx} className={`${item.tagVariant} border-0`}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <blockquote className="text-xl text-gray-600 mb-8 italic">
                    "{item.quote}"
                  </blockquote>
                  <Button variant="outline" className="self-start">
                    {item.buttonText}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StickyStack;