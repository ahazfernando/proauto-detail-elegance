import { Button } from "@/components/ui/button";
import { Calendar, Phone } from "lucide-react";

const BookingSection = () => {
  return (
    <section className="py-20 bg-automotive-grey relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img 
          src="/booking-process.jpg" 
          alt="Professional car detailing" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
                Easy Booking
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Book Your Service Appointment Online Today
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our easy online booking system allows you to schedule your service at your convenience. Choose your preferred date, time, and service package.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="automotive" size="lg" className="hover-lift">
                <Calendar className="mr-2" />
                Book Appointment
              </Button>
              <Button variant="outline" size="lg">
                <Phone className="mr-2" />
                Call Us Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
