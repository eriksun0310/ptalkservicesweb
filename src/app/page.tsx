import { HeroSection } from '@/widgets/HeroSection';
import { ServicesSection } from '@/widgets/ServicesSection';
import { WhyUsSection } from '@/widgets/WhyUsSection';
import { Navbar } from '@/widgets/Navbar';
import { Footer } from '@/widgets/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <Footer />
    </>
  );
}