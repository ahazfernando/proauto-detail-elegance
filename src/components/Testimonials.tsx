import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "James Mitchell",
    role: "BMW Owner",
    content: "ProAuto transformed my car's interior completely. The attention to detail and professionalism exceeded all expectations. My leather seats look brand new!",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Mercedes Owner",
    content: "The best detailing service I've experienced. The team is knowledgeable, punctual, and the results are outstanding. My car has never looked better.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    role: "Bentley Owner",
    content: "World-class service for my luxury vehicle. ProAuto understands the care premium cars need. I won't trust anyone else with my vehicle.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-automotive-grey text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-automotive-black via-automotive-grey to-automotive-black opacity-90"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about our services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover-lift">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-gray-200 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
