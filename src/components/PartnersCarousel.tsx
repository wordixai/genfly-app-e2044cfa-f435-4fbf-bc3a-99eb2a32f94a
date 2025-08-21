import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const PartnersCarousel = () => {
  const partners = [
    'Airbnb', 'Booking.com', 'Vrbo', 'Expedia', 'HomeAway', 'KAYAK', 
    'TripAdvisor', 'Agoda', 'Priceline', 'Hotels.com', 'Flipkey', 'Tripadvisor',
    'RedAwning', 'Vacasa', 'Rentals.com', 'HomeToGo', 'Tripping', 'Wimdu',
    'RoomAway', 'Holistay', 'OwnerRez', 'Lodgify', 'Streamline', 'PriceLabs',
    'Beyond', 'Hostfully', 'TouchStay', 'Breezeway', 'AutoHost', 'Superhog',
    'NoiseAware', 'August', 'RemoteLock', 'Schlage', 'Yale', 'Lockly',
    'SmartThings', 'Nest', 'Ring', 'SimpliSafe'
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="content-wrapper">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Connect with 200+<br />
              top <span className="text-gradient">industry solutions</span>
            </h2>
          </div>
          <div>
            <p className="text-xl text-gray-600 mb-8">
              Guesty's Marketplace helps you build a stronger tech stack in a single platform, unlocking endless possibilities for integration through an open API
            </p>
            <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
              Get started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Animated carousel */}
        <div className="relative">
          <div className="flex space-x-8 animate-scroll">
            {/* First row */}
            <div className="flex space-x-8 animate-scroll-left">
              {partners.slice(0, 20).map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-24 h-16 bg-white rounded-lg shadow-sm border flex items-center justify-center"
                >
                  <span className="text-xs font-medium text-gray-600 text-center px-2">
                    {partner}
                  </span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {partners.slice(0, 20).map((partner, index) => (
                <div
                  key={`dup1-${index}`}
                  className="flex-shrink-0 w-24 h-16 bg-white rounded-lg shadow-sm border flex items-center justify-center"
                >
                  <span className="text-xs font-medium text-gray-600 text-center px-2">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex space-x-8 mt-4">
            {/* Second row - reverse direction */}
            <div className="flex space-x-8 animate-scroll-right">
              {partners.slice(20).map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 w-24 h-16 bg-white rounded-lg shadow-sm border flex items-center justify-center"
                >
                  <span className="text-xs font-medium text-gray-600 text-center px-2">
                    {partner}
                  </span>
                </div>
              ))}
              {/* Duplicate for seamless loop */}
              {partners.slice(20).map((partner, index) => (
                <div
                  key={`dup2-${index}`}
                  className="flex-shrink-0 w-24 h-16 bg-white rounded-lg shadow-sm border flex items-center justify-center"
                >
                  <span className="text-xs font-medium text-gray-600 text-center px-2">
                    {partner}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Fade effects */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 60s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 60s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default PartnersCarousel;