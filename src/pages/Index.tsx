import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import AnimatedCards from '@/components/AnimatedCards';
import StickyStack from '@/components/StickyStack';
import TabbedContent from '@/components/TabbedContent';
import TestimonialsGrid from '@/components/TestimonialsGrid';
import PartnersCarousel from '@/components/PartnersCarousel';
import RunningNumbers from '@/components/RunningNumbers';
import ReviewsCarousel from '@/components/ReviewsCarousel';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <AnimatedCards />
        <StickyStack />
        <TabbedContent />
        <TestimonialsGrid />
        <PartnersCarousel />
        <RunningNumbers />
        <ReviewsCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default Index;