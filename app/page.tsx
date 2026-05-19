import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import BridgeSection from "@/components/BridgeSection";
import CTASection from "@/components/CTASection";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <VideoSection />
      <BridgeSection />
      <CTASection />
      <AboutSection />
      <Footer />
    </main>
  );
}
