import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-16 pb-20 sm:pt-24 sm:pb-28 overflow-hidden">
      <div className="content-wrapper">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          {/* Text content */}
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
            <div className="animate-fade-in">
              <div className="text-sm font-medium text-blue-600 uppercase tracking-wide mb-4">
                THE LEADING property management software for short-term rentals
              </div>
              <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl lg:text-6xl">
                The driving force behind more{' '}
                <span className="relative">
                  <span className="text-gradient">rental companies</span>
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-600 max-w-3xl">
                Simplify operations, eliminate busywork, and grow revenue. All from one powerful platform.
              </p>
              <div className="mt-8">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8">
                  Get started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>

            {/* Reviews and badges */}
            <div className="mt-12 animate-slide-up">
              <div className="flex items-center space-x-8 justify-center lg:justify-start">
                {/* Stars */}
                <div className="flex space-x-4">
                  <div className="flex items-center">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">4.9/5</span>
                  </div>
                  <div className="flex items-center">
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">4.8/5</span>
                  </div>
                </div>
              </div>

              {/* Partner badges */}
              <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 opacity-60">
                <div className="text-sm font-medium text-gray-500">Proud to partner with</div>
              </div>
              <div className="mt-4 flex items-center justify-center lg:justify-start space-x-8 grayscale opacity-60">
                {['Airbnb', 'Booking.com', 'Vrbo', 'Expedia'].map((partner) => (
                  <div key={partner} className="text-sm font-medium text-gray-400 bg-gray-100 px-3 py-1 rounded">
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Video/Image */}
          <div className="mt-12 lg:mt-0 lg:col-span-6">
            <div className="relative animate-float">
              <div className="aspect-video bg-gradient-to-br from-blue-400 to-blue-600 rounded-2xl shadow-2xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-blue-50 to-white p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <div className="w-0 h-0 border-l-[8px] border-l-white border-y-[6px] border-y-transparent ml-1"></div>
                    </div>
                    <p className="text-gray-600">Product Demo Video</p>
                  </div>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-yellow-500 rounded-full animate-bounce delay-300"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-50 rounded-full opacity-60"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-purple-50 rounded-full opacity-40"></div>
      </div>
    </section>
  );
};

export default Hero;