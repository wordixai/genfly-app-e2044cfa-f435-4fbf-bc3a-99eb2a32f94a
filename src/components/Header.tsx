import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Menu, X, Globe, ArrowRight } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const platformItems = [
    {
      title: "Guests and reservations",
      items: [
        { name: "Unified Inbox", desc: "Bring every guest conversation together for faster, better responses", href: "#" },
        { name: "Multi-Calendar", desc: "Manage reservations from multiple channels within a single calendar", href: "#" },
        { name: "Mobile Management App", desc: "Your business on-the-go, no matter where you are", href: "#" },
      ]
    },
    {
      title: "Distribution and operations", 
      items: [
        { name: "Channel Manager", desc: "Your listings everywhere that matters, controlled from one dashboard", href: "#" },
        { name: "Guesty Websites", desc: "Craft stunning booking sites that convert visitors into guests", href: "#" },
        { name: "Task Management", desc: "Organize cleaning, maintenance, and other tasks without missing a beat", href: "#" },
      ]
    },
    {
      title: "Business and financials",
      items: [
        { name: "Revenue Management", desc: "Unlock your property's full earning potential with informed, intelligent pricing", href: "#" },
        { name: "Payment Solutions", desc: "Frictionless payments designed specifically for short-term rental success", href: "#" },
        { name: "Trust Accounting", desc: "Navigate complex hospitality accounting with automated tools for compliance", href: "#" },
      ]
    }
  ];

  const solutionsItems = [
    { name: "Vacation rentals", desc: "Build a distinctive brand that drives direct bookings and fosters lasting loyalty", href: "#" },
    { name: "Urban rentals", desc: "Capture competitive markets with strategic pricing and increased visibility", href: "#" },
    { name: "Aparthotel", desc: "Manage multi-unit apartments efficiently while enhancing distribution opportunities", href: "#" },
    { name: "Serviced apartments", desc: "Provide exceptional service at scale for sustainable profitability", href: "#" },
    { name: "Outdoor stays", desc: "Maximize high season returns with dynamic pricing and an enhanced online presence", href: "#" },
    { name: "Guesthouses and B&Bs", desc: "Perfect the details that matter with tools that foster a warm, welcoming experience", href: "#" },
  ];

  const resourcesItems = [
    { name: "Blog", desc: "Latest tips and strategies for operational excellence", href: "#" },
    { name: "Reports & guides", desc: "Expert resources and insights to drive your business forward", href: "#" },
    { name: "Customers", desc: "Real success stories from businesses thriving with Guesty", href: "#" },
    { name: "Events", desc: "Connect and learn at our virtual and in-person gatherings", href: "#" },
    { name: "Marketplace", desc: "Third-party integrations to enhance your Guesty experience", href: "#" },
    { name: "Help Center", desc: "Quick guides and videos to master Guesty's features and tools", href: "#" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
      <div className="content-wrapper">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-lg">G</span>
              </div>
              <span className="text-xl font-bold text-gray-900">Guesty</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50">
                  Platform
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[800px] p-6">
                    <div className="grid grid-cols-3 gap-6">
                      {platformItems.map((category, idx) => (
                        <div key={idx}>
                          <h3 className="font-semibold text-gray-900 mb-3">{category.title}</h3>
                          <div className="space-y-3">
                            {category.items.map((item, itemIdx) => (
                              <a
                                key={itemIdx}
                                href={item.href}
                                className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                              >
                                <h4 className="font-medium text-gray-900 mb-1">{item.name}</h4>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <a href="#" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
                        All features
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </a>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[600px] p-6">
                    <div className="mb-6">
                      <h3 className="font-semibold text-gray-900 mb-2">Solutions for diverse portfolios</h3>
                      <p className="text-gray-600 text-sm">Powerful tools that simplify workflows across every property type you manage</p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {solutionsItems.map((item, idx) => (
                        <a
                          key={idx}
                          href={item.href}
                          className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <h4 className="font-medium text-gray-900 mb-1">{item.name}</h4>
                          <p className="text-sm text-gray-600">{item.desc}</p>
                        </a>
                      ))}
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50">
                  Resources
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="w-[700px] p-6">
                    <div className="grid grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-3">Guesty knowledge hub</h3>
                        <p className="text-gray-600 text-sm mb-4">Smart resources for smarter business decisions</p>
                        <div className="space-y-3">
                          {resourcesItems.map((item, idx) => (
                            <a
                              key={idx}
                              href={item.href}
                              className="block p-3 rounded-lg hover:bg-gray-50 transition-colors"
                            >
                              <h4 className="font-medium text-gray-900 mb-1">{item.name}</h4>
                              <p className="text-sm text-gray-600">{item.desc}</p>
                            </a>
                          ))}
                        </div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-4">
                        <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">Industry insights</span>
                        <h3 className="font-bold text-gray-900 mt-3 mb-3">Supercharging revenue for short-term rentals</h3>
                        <Button size="sm" variant="outline" className="text-blue-600 border-blue-600">
                          Learn more
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <a href="#" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                  Pricing
                </a>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Right side items */}
          <div className="flex items-center space-x-4">
            <button className="hidden lg:flex items-center space-x-1 text-sm text-gray-700 hover:text-gray-900">
              <Globe className="h-4 w-4" />
              <span>En</span>
              <ChevronDown className="h-3 w-3" />
            </button>
            
            <a
              href="#"
              className="hidden lg:inline-flex text-sm text-gray-700 hover:text-gray-900"
            >
              Log in
            </a>

            <Button className="hidden lg:inline-flex bg-blue-600 hover:bg-blue-700">
              Get started
            </Button>

            {/* Mobile menu button */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-full sm:w-[400px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="flex flex-col space-y-4 mt-6">
                  <Button variant="ghost" className="justify-start">Platform</Button>
                  <Button variant="ghost" className="justify-start">Solutions</Button>
                  <Button variant="ghost" className="justify-start">Resources</Button>
                  <Button variant="ghost" className="justify-start">Pricing</Button>
                  <hr />
                  <Button variant="ghost" className="justify-start">Log in</Button>
                  <Button className="bg-blue-600 hover:bg-blue-700">Get started</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;