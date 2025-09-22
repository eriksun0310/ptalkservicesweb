import { HeroSection } from '@/widgets/HeroSection';
import { ServicesSection } from '@/widgets/ServicesSection';
import { WhyUsSection } from '@/widgets/WhyUsSection';
import { Navbar } from '@/widgets/Navbar';
import { Footer } from '@/widgets/Footer';
import { generateOrganizationSchema, generateServiceSchema, generateFAQSchema } from '@/shared/utils/schema';

export default function HomePage() {
  const organizationSchema = generateOrganizationSchema();
  const serviceSchema = generateServiceSchema();
  const faqSchema = generateFAQSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <WhyUsSection />
      <Footer />
    </>
  );
}