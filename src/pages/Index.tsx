import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import BookingSection from "@/components/BookingSection";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import ContactSection from "@/components/ContactSection";
import Team from "@/components/Team";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <BookingSection />
        <Gallery />
        <Process />
        <Testimonials />
        <Team />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
