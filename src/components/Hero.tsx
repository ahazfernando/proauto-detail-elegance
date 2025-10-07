import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroWheel from "@/assets/hero-wheel.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-automotive-black">
      <div className="absolute inset-0">
        <img 
          src={heroWheel} 
          alt="Luxury car wheel with premium detailing" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-automotive-black via-automotive-black/80 to-transparent"></div>
      </div>
      
      <div className="container relative z-10 px-4 md:px-6 py-20">
        <div className="max-w-3xl">
          <div className="mb-6">
            <span className="text-accent text-sm font-semibold tracking-wider uppercase">
              Premium Car Care Services
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight text-shadow">
            International Quality and World Class Wheels
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl">
            Experience unparalleled car detailing and maintenance services. We bring international standards and world-class quality to every vehicle we service.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <Button variant="automotive" size="lg" className="hover-lift">
              Book Service Now
              <ArrowRight className="ml-2" />
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-automotive-black">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
