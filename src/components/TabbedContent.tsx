import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Check } from 'lucide-react';

const TabbedContent = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      name: "Diverse Distribution",
      title: "Enjoy unmatched reach coupled with smart, channel-specific pricing strategies",
      tags: ["Channel management", "Direct bookings", "API synchronization"],
      bullets: [
        "Connect to 60+ booking channels",
        "Tailor rate strategies for each channel",
        "Sync availability and pricing in real-time",
        "Build branded booking websites"
      ],
      buttonText: "Explore Channel Manager",
      buttonHref: "#",
      video: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
    },
    {
      name: "Centralized Control",
      title: "Master all operations from a single, intelligent command center",
      tags: ["Multi-calendar", "Unified inbox", "Analytics"],
      bullets: [
        "A single inbox for all guest communication",
        "A single calendar for every reservation", 
        "Metrics to track and benchmark KPIs",
        "Customizable business reporting"
      ],
      buttonText: "Explore Multi-Calendar",
      buttonHref: "#",
      video: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop"
    },
    {
      name: "Smart Operations",
      title: "Automate workflows with AI-powered tools that learn and adapt",
      tags: ["Automation", "AI messaging", "Mobile app"],
      bullets: [
        "Automated end-to-end guest journey",
        "AI generated personalized guest replies",
        "AI-driven website content creation",
        "Mobile app for on-the-go management"
      ],
      buttonText: "Explore Automation Workflows",
      buttonHref: "#",
      video: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop"
    },
    {
      name: "Guest Success",
      title: "Deliver exceptional experiences that drive repeat bookings",
      tags: ["Guest portal", "CRM", "Reviews"],
      bullets: [
        "User-friendly guest portal",
        "CRM turns data into guest satisfaction",
        "Automated review collection",
        "AI summaries to improve reviews"
      ],
      buttonText: "Explore Guesty CRM",
      buttonHref: "#",
      video: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=600&fit=crop"
    },
    {
      name: "Financial Performance",
      title: "Optimize revenue with intelligent pricing and secure payments",
      tags: ["Dynamic pricing", "Payment processing", "Revenue management"],
      bullets: [
        "Machine learning driven dynamic pricing",
        "Pricing rules for every scenario",
        "Integrated, secure payment solutions",
        "Compliant vacation rental trust accounting"
      ],
      buttonText: "Explore Revenue Management",
      buttonHref: "#",
      video: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop"
    },
    {
      name: "Risk Mitigation",
      title: "Protect your business with comprehensive coverage and verification",
      tags: ["Damage protection", "Fraud prevention", "Guest verification"],
      bullets: [
        "Comprehensive liability protection",
        "Damage protection coverage",
        "AI-powered fraud prevention tools",
        "Thorough guest verification"
      ],
      buttonText: "Explore Damage Protection",
      buttonHref: "#",
      video: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
    }
  ];

  const currentTab = tabs[activeTab];

  return (
    <section className="py-20 bg-white">
      <div className="content-wrapper">
        <div className="text-center mb-16">
          <div className="text-sm font-medium text-blue-600 uppercase tracking-wide mb-4">
            Purpose-built tools for every goal
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-8">
            The future of short-term<br />
            property management, <span className="text-gradient">today</span>
          </h2>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
            Get a demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === index
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-gray-50 rounded-3xl overflow-hidden">
          <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
            {/* Text Content */}
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6">
                {currentTab.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {currentTab.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-blue-100 text-blue-800">
                    {tag}
                  </Badge>
                ))}
              </div>

              <ul className="space-y-4 mb-8">
                {currentTab.bullets.map((bullet, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{bullet}</span>
                  </li>
                ))}
              </ul>

              <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                {currentTab.buttonText}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Media Content */}
            <div className="relative h-64 lg:h-96">
              <img
                src={currentTab.video}
                alt={currentTab.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabbedContent;