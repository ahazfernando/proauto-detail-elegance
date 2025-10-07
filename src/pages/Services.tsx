import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Shield, Droplets, Gauge, Paintbrush, Car, CheckCircle, ArrowRight } from "lucide-react";
import serviceQuality from "@/assets/service-quality.jpg";

const services = [
  {
    icon: Sparkles,
    title: "Premium Exterior Detailing",
    description: "Complete exterior transformation including hand wash, clay bar treatment, paint correction, and ceramic coating application.",
    features: [
      "Multi-stage hand wash & decontamination",
      "Paint correction & polishing",
      "Ceramic coating protection",
      "Chrome & trim restoration",
    ],
    price: "From $299",
  },
  {
    icon: Car,
    title: "Luxury Interior Detailing",
    description: "Deep interior cleaning and restoration for leather, fabric, and all interior surfaces with premium products.",
    features: [
      "Deep vacuum & steam cleaning",
      "Leather conditioning & protection",
      "Fabric & carpet shampooing",
      "Dashboard & trim detailing",
    ],
    price: "From $249",
  },
  {
    icon: Shield,
    title: "Paint Protection Film (PPF)",
    description: "Self-healing protective film installation to shield your vehicle from rock chips, scratches, and environmental damage.",
    features: [
      "Premium 3M or XPEL film",
      "Full front-end coverage",
      "Self-healing technology",
      "10-year warranty included",
    ],
    price: "From $1,499",
  },
  {
    icon: Droplets,
    title: "Ceramic Coating",
    description: "Professional-grade nano-ceramic coating for long-lasting protection and incredible shine that lasts years.",
    features: [
      "9H hardness protection",
      "Hydrophobic properties",
      "UV damage prevention",
      "5-year warranty",
    ],
    price: "From $799",
  },
  {
    icon: Gauge,
    title: "Performance Wheel Service",
    description: "Specialized wheel cleaning, restoration, and protection services for high-performance and luxury vehicles.",
    features: [
      "Deep wheel cleaning",
      "Brake dust removal",
      "Ceramic coating application",
      "Tire dressing & protection",
    ],
    price: "From $199",
  },
  {
    icon: Paintbrush,
    title: "Paint Correction",
    description: "Multi-stage machine polishing to remove swirl marks, scratches, and oxidation for a showroom finish.",
    features: [
      "Swirl mark removal",
      "Scratch correction",
      "Oxidation removal",
      "High-gloss finish",
    ],
    price: "From $599",
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-24 bg-automotive-grey overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img 
              src={serviceQuality} 
              alt="Professional car detailing services" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-automotive-black via-automotive-black/80 to-transparent"></div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl">
              <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
                Our Services
              </span>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Premium Car Care Services
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                From basic detailing to advanced paint protection, we offer comprehensive automotive care services using the finest products and techniques.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="hover-lift shadow-lg border-0">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mb-6">
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-center justify-between pt-6 border-t">
                      <span className="text-2xl font-bold text-accent">{service.price}</span>
                      <Button variant="automotive" size="sm">
                        Book Now
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Package Section */}
        <section className="py-20 bg-automotive-light">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-16">
              <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
                Complete Care
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Full Detailing Packages
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Save with our comprehensive packages that combine multiple services for complete vehicle care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Basic Package */}
              <Card className="hover-lift shadow-lg border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">Essential Care</h3>
                  <p className="text-4xl font-bold text-accent mb-6">$449</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Exterior hand wash & wax</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Interior vacuum & wipe down</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Wheel cleaning & tire shine</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Window cleaning</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Select Package
                  </Button>
                </CardContent>
              </Card>

              {/* Premium Package */}
              <Card className="hover-lift shadow-lg border-2 border-accent relative">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">Premium Care</h3>
                  <p className="text-4xl font-bold text-accent mb-6">$799</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Everything in Essential</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Paint correction (1-stage)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Ceramic coating application</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Deep interior detailing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Leather conditioning</span>
                    </li>
                  </ul>
                  <Button variant="automotive" className="w-full">
                    Select Package
                  </Button>
                </CardContent>
              </Card>

              {/* Ultimate Package */}
              <Card className="hover-lift shadow-lg border-2">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-2">Ultimate Care</h3>
                  <p className="text-4xl font-bold text-accent mb-6">$1,499</p>
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Everything in Premium</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Paint correction (2-stage)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Premium ceramic coating</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Engine bay detailing</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span>Headlight restoration</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">
                    Select Package
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-automotive-black text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Vehicle?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Book your service today and experience the ProAuto difference.
            </p>
            <Button variant="automotive" size="lg" className="hover-lift">
              Schedule Appointment
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
