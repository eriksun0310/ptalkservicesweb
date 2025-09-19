import { Navbar } from '@/widgets/Navbar';
import { Footer } from '@/widgets/Footer';
import { ProductsSection } from '@/features/product-showcase';

export default function ProductsPage() {
  return (
    <>
      <Navbar />
      <ProductsSection />
      <Footer />
    </>
  );
}