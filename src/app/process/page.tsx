import { Navbar } from '@/widgets/Navbar';
import { Footer } from '@/widgets/Footer';
import { ProcessHero } from '@/widgets/ProcessHero';
import { ProcessTimeline } from '@/widgets/ProcessTimeline';
import { ProcessFeatures } from '@/widgets/ProcessFeatures';
import { ProcessFAQ } from '@/widgets/ProcessFAQ';
import { ProcessCTA } from '@/widgets/ProcessCTA';

export default function ProcessPage() {
  return (
    <>
      <Navbar />
      <ProcessHero />
      <ProcessTimeline />
      <ProcessFeatures />
      <ProcessFAQ />

      <Footer />
    </>
  );
}