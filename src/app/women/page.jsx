import Navigation from "../../components/site/Navigation";
import PageIntro from "../../components/site/PageIntro";
import ProductGrid from "../../components/site/ProductGrid";
import Testimonials from "../../components/site/Testimonials";
import Footer from "../../components/site/Footer";

export default function WomenPage() {
  return (
    <main>
      <Navigation />
      <div className="h-[80px] w-[100vw]"></div>
      <ProductGrid gender="women" title="Women’s collection"/>
      <Testimonials />
      <Footer />
    </main>
  );
}
