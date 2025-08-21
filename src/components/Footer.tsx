import React from 'react';
import { ChevronDown, Facebook, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    Platform: [
      "All Features",
      "Unified Inbox", 
      "Multi-Calendar",
      "Mobile Management App",
      "Guesty CRM",
      "Direct Reservations",
      "Guest Communication Services™",
      "Manual Reservations",
      "Guesty Damage Protection™",
      "Channel Manager",
      "Guesty Websites",
      "Task Management",
      "Automation Tools",
      "Multi-Unit Management",
      "Analytics",
      "Reporting Tools",
      "Guesty LocksManager™",
      "Revenue Management",
      "Payment Solutions",
      "Trust Accounting",
      "Guesty Pay™",
      "Guesty Capital™",
      "Guesty PriceOptimizer™",
      "Owners Portal",
      "Open API"
    ],
    Solutions: [
      "Vacation Rentals",
      "Urban Rentals", 
      "Aparthotels",
      "Serviced Apartments",
      "Outdoor Stays",
      "Hotel property management system",
      "Property management for rentals",
      "Real estate property management", 
      "Home rentals property management",
      "Guesthouse and B&Bs"
    ],
    Resources: [
      "Blog",
      "Reports & Guides",
      "Customers", 
      "Guesty alternatives",
      "Events",
      "Marketplace",
      "Guesty Pro Help Center",
      "Guesty Lite Help Center"
    ],
    Company: [
      "About Us",
      "Careers",
      "Press",
      "Pricing"
    ],
    "Get in Touch": [
      "Contact Us",
      "Become a Partner",
      "Affiliate Program",
      "Sign up for our newsletter"
    ]
  };

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
    { name: 'YouTube', icon: Youtube, href: '#' }
  ];

  const legalLinks = [
    "Guesty Copyright Policy",
    "Privacy Policy", 
    "Terms of Service",
    "Vulnerability Discovery Procedure",
    "Do Not Sell My Personal Information",
    "Guesty Insurance Services LLC"
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="content-wrapper py-16">
        {/* Top section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center mb-12">
          {/* Logo */}
          <div className="flex items-center mb-8 lg:mb-0">
            <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center mr-3">
              <span className="text-white font-bold text-lg">G</span>
            </div>
            <span className="text-2xl font-bold">Guesty</span>
          </div>

          {/* Social links */}
          <div className="flex space-x-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                  aria-label={social.name}
                >
                  <Icon className="h-5 w-5" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-lg font-semibold mb-4 flex items-center lg:block">
                {category}
                <ChevronDown className="h-4 w-4 ml-2 lg:hidden" />
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    {link === "Sign up for our newsletter" ? (
                      <button className="text-gray-300 hover:text-white transition-colors text-left">
                        {link}
                      </button>
                    ) : (
                      <a
                        href="#"
                        className="text-gray-300 hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile social links */}
        <div className="flex justify-center space-x-4 lg:hidden mb-8">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors"
                aria-label={social.name}
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center">
            <div className="text-gray-400 mb-4 lg:mb-0">
              © 2025 Guesty, Inc.
            </div>
            
            <div className="flex flex-wrap gap-4 text-sm text-gray-400">
              {legalLinks.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="hover:text-white transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;