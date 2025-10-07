import { Award, Heart, Package } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import serviceQuality from "@/assets/service-quality.jpg";
import customerExperience from "@/assets/customer-experience.jpg";
import carProducts from "@/assets/car-products.jpg";

const features = [
  {
    icon: Award,
    title: "Exceptional Service Quality",
    description: "Our certified technicians deliver meticulous attention to detail using state-of-the-art equipment and proven techniques for superior results.",
    image: serviceQuality,
  },
  {
    icon: Heart,
    title: "Top-Tier Customer Experience",
    description: "Experience luxury service with comfortable waiting areas, transparent communication, and personalized care that exceeds expectations.",
    image: customerExperience,
  },
  {
    icon: Package,
    title: "Premium Car Care Products",
    description: "We exclusively use professional-grade products from leading manufacturers to ensure the best protection and finish for your vehicle.",
    image: carProducts,
  },
];

const Features = () => {
  return (
    <section className="py-20 bg-automotive-light">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Satisfaction is Our Guarantee
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="overflow-hidden hover-lift shadow-lg border-0">
              <div className="h-48 overflow-hidden">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
