import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Award, Target, Users, Zap } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Excellence",
    description: "We deliver world-class automotive care with meticulous attention to detail and international quality standards.",
  },
  {
    icon: Target,
    title: "Precise",
    description: "Every vehicle receives customized treatment using premium products and advanced techniques for optimal results.",
  },
  {
    icon: Users,
    title: "Customer Focus",
    description: "Your satisfaction drives everything we do. We build lasting relationships through exceptional service and care.",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead with cutting-edge technology and methods to protect and enhance your vehicle's appearance.",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-20">
        <section className="py-20 bg-automotive-grey text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-automotive-black via-automotive-grey to-automotive-black opacity-90"></div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="text-center mb-16">
              <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
                About Us
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Redefining Automotive Excellence
              </h1>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                ProAuto was founded with a singular mission: to provide luxury vehicle owners with world-class detailing and care services that exceed international standards. Our team of certified professionals brings together decades of experience, combining traditional craftsmanship with modern innovation.
              </p>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                From exotic supercars to daily drivers, we treat every vehicle as a masterpiece deserving of exceptional care. Our commitment to quality, precision, and customer satisfaction has made us the trusted choice for discerning automotive enthusiasts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
              {values.map((value, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/20 mb-4">
                      <value.icon className="w-8 h-8 text-accent" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
