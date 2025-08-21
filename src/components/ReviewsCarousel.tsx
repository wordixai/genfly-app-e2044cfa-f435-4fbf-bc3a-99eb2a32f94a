import React from 'react';
import { Star } from 'lucide-react';

const ReviewsCarousel = () => {
  const reviews = [
    {
      name: "Matt Marrs",
      location: "Texas | United States",
      testimonial: "Guesty's made a huge impact on our business. It has allowed us to grow faster than I ever thought we could.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Brandreth Canaley", 
      location: "Florida | United States",
      testimonial: "I have overseen and handled four property management system migrations. Guesty is my last stop.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "David Lederman",
      location: "Florida | United States", 
      testimonial: "Since we started using Guesty, our reviews have improved tremendously. We're seeing an influx of five-star reviews, and very very rarely do we see any bad reviews.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Ric Kenworthy",
      location: "Arizona | United States",
      testimonial: "There are a lot of options when it comes to property management software, but having one that grows with the industry has been super helpful for us.",
      avatar: "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Jacob Guldager",
      location: "Denmark", 
      testimonial: "Guesty makes it easy to scale up. It feels like it's built for that.",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Karl Scarlett",
      location: "Washington, DC | United States",
      testimonial: "Guesty has been the reason we've been able to grow. Besides my amazing team, it allows you to be bigger than you are.",
      avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Veronique Lalonde",
      location: "Global",
      testimonial: "Because Guesty is a very robust platform, we were not afraid to move from five properties to 500 in three years.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Tim Mortimer",
      location: "Australia",
      testimonial: "If you're thinking about moving to Guesty, do it. We did the research, we partnered with Guesty because it's forward-thinking in the industry, and it's been the best decision we've made.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=60&h=60&fit=crop&crop=face"
    }
  ];

  const awards = [
    { name: "G2 Leader", image: "https://via.placeholder.com/100x60/4F46E5/white?text=G2" },
    { name: "Capterra", image: "https://via.placeholder.com/100x60/059669/white?text=Capterra" },
    { name: "GetApp", image: "https://via.placeholder.com/100x60/DC2626/white?text=GetApp" },
    { name: "Software Advice", image: "https://via.placeholder.com/100x60/7C3AED/white?text=Software" },
    { name: "TrustPilot", image: "https://via.placeholder.com/100x60/0EA5E9/white?text=TrustPilot" },
    { name: "Forbes", image: "https://via.placeholder.com/100x60/1F2937/white?text=Forbes" }
  ];

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="content-wrapper mb-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-start">
          <div>
            <div className="text-sm font-medium text-blue-600 uppercase tracking-wide mb-4">
              Industry Recognized Excellence
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              See why property<br />
              managers around the<br />
              globe <span className="text-gradient">rely</span> on Guesty
            </h2>
          </div>

          <div className="mt-8 lg:mt-0">
            <div className="grid grid-cols-3 gap-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg p-4 shadow-sm border flex items-center justify-center h-16"
                >
                  <img src={award.image} alt={award.name} className="max-h-full max-w-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reviews carousel */}
      <div className="relative">
        <div className="flex space-x-6 animate-scroll-reviews">
          {/* First set */}
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-600">{review.location}</div>
                </div>
              </div>

              <blockquote className="text-gray-700 mb-6">
                "{review.testimonial}"
              </blockquote>

              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
          
          {/* Duplicate for seamless loop */}
          {reviews.map((review, index) => (
            <div
              key={`dup-${index}`}
              className="flex-shrink-0 w-80 bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="flex items-center space-x-4 mb-6">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">{review.name}</div>
                  <div className="text-sm text-gray-600">{review.location}</div>
                </div>
              </div>

              <blockquote className="text-gray-700 mb-6">
                "{review.testimonial}"
              </blockquote>

              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Fade effects */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
      </div>

      <style jsx>{`
        @keyframes scroll-reviews {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .animate-scroll-reviews {
          animation: scroll-reviews 120s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ReviewsCarousel;