import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Chen",
    role: "Porsche 911 Owner",
    content: "ProAuto transformed my 911. The ceramic coating and paint correction were flawless. They treat every car like it's their own masterpiece.",
    rating: 5,
  },
  {
    name: "Sarah Johnson",
    role: "Tesla Model S Owner",
    content: "Best detailing service I've ever experienced. The attention to detail is incredible, and my Tesla looks brand new again. Highly recommend!",
    rating: 5,
  },
  {
    name: "David Martinez",
    role: "BMW M5 Owner",
    content: "The team at ProAuto is exceptional. Professional, thorough, and passionate about their work. My M5 has never looked better.",
    rating: 5,
  },
  {
    name: "Emily Williams",
    role: "Mercedes AMG Owner",
    content: "I trust ProAuto with my AMG completely. Their expertise in luxury vehicle care is unmatched. Worth every penny!",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what luxury car owners say about their ProAuto experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-lift">
              <CardContent className="p-6">
                <Quote className="w-10 h-10 text-accent mb-4" />
                <p className="text-muted-foreground mb-6">{testimonial.content}</p>
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-accent text-lg">★</span>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
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
