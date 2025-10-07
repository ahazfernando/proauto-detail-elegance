import { Clock, Users, DollarSign, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Clock,
    title: "Convenient Service",
    description: "Flexible scheduling with online booking available 24/7. We work around your schedule to provide maximum convenience.",
  },
  {
    icon: Users,
    title: "Professional Team",
    description: "Our certified technicians have years of experience and undergo continuous training to deliver exceptional results.",
  },
  {
    icon: DollarSign,
    title: "Affordable Pricing",
    description: "Competitive rates without compromising quality. Transparent pricing with no hidden fees or surprises.",
  },
  {
    icon: CheckCircle,
    title: "Satisfaction Guaranteed",
    description: "We stand behind our work with a 100% satisfaction guarantee. Your trust is our most valuable asset.",
  },
];

const Process = () => {
  return (
    <section className="py-20 bg-automotive-light">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
            Detailing Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Discover Our Car Detailing Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A systematic approach that ensures every vehicle receives the highest level of care and attention.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-accent rounded-full mb-6 hover-lift shadow-red">
                <step.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
