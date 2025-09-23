import logo from "./assets/youware-bg.png";
import { ScrollProgress } from "./components/ScrollComponents";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { FAQSection } from "./components/FAQSection";
import { CTASection } from "./components/CTASection";
import { Footer } from "./components/Footer";
import { FloatingActionButton } from "./components/ScrollComponents";

function App() {
  return (
    <>
      {/* Main content */}
      <main className="min-h-screen bg-white text-black overflow-x-hidden relative">
        <ScrollProgress />
        <div className="relative z-10">
          <Header />
          <HeroSection />
          <FeaturesSection />
          <TestimonialsSection />
          <FAQSection />
          <CTASection />
          <Footer />
        </div>
        <FloatingActionButton />
      </main>
    </>
  );
}

export default App;
