'use client';

import Footer from '@/components/organisms/Footer';
import Hero from '@/components/organisms/Hero';
import AccountingHero from '@/components/organisms/Hero2';
import AccountingHighlights from '@/components/organisms/HightLights';
import Navbar from '@/components/organisms/Navbar';
import ProductShowcase from '@/components/organisms/Products';
import Services from '@/components/organisms/Services';
import TestimonialsSection from '@/components/organisms/Testimonials';
import WhyChooseUs from '@/components/organisms/WhyChooseUs';

export default function Home() {
  return (
    <main className='bg-gradient-to-r from-orange-50 to-gray-100 '>
      <Navbar />
      <Hero />
      <AccountingHero />
      <Services />
      <WhyChooseUs />
      <ProductShowcase />
      <AccountingHighlights />
      <TestimonialsSection />
      <Footer />
    </main>
  );
}
