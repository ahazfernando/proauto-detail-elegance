import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageSquare, Calendar } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-automotive-grey text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-automotive-black via-automotive-grey to-automotive-black"></div>
          
          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="text-accent text-sm font-semibold tracking-wider uppercase mb-4 block">
                Get in Touch
              </span>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Contact ProAuto
              </h1>
              <p className="text-xl text-gray-300">
                Have questions or ready to book? Our team is here to help you with all your automotive care needs.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-20 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              <Card className="hover-lift shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">Phone</h3>
                  <p className="text-muted-foreground mb-2">Call us anytime</p>
                  <a href="tel:+15551234567" className="text-accent font-semibold hover:underline">
                    +1 (555) 123-4567
                  </a>
                </CardContent>
              </Card>

              <Card className="hover-lift shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">Email</h3>
                  <p className="text-muted-foreground mb-2">Send us a message</p>
                  <a href="mailto:info@proauto.com" className="text-accent font-semibold hover:underline">
                    info@proauto.com
                  </a>
                </CardContent>
              </Card>

              <Card className="hover-lift shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">Location</h3>
                  <p className="text-muted-foreground mb-2">Visit our facility</p>
                  <p className="text-accent font-semibold">
                    123 Auto Care Drive<br />Los Angeles, CA 90001
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-lift shadow-lg border-0">
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-bold mb-2">Hours</h3>
                  <p className="text-muted-foreground mb-2">We're open</p>
                  <p className="text-accent font-semibold">
                    Mon-Sat: 8AM-6PM<br />Sunday: Closed
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form and Info */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div>
                <div className="mb-8">
                  <h2 className="text-3xl font-bold mb-4">Send Us a Message</h2>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </div>

                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                        First Name *
                      </label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                        Last Name *
                      </label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <Input id="email" type="email" placeholder="john@example.com" required />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Phone Number *
                    </label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" required />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Service Interested In
                    </label>
                    <select 
                      id="service" 
                      className="w-full h-10 px-3 rounded-md border border-input bg-background"
                    >
                      <option>Select a service</option>
                      <option>Exterior Detailing</option>
                      <option>Interior Detailing</option>
                      <option>Paint Protection Film</option>
                      <option>Ceramic Coating</option>
                      <option>Wheel Service</option>
                      <option>Paint Correction</option>
                      <option>Complete Package</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message *
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your vehicle and what services you're interested in..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button variant="automotive" size="lg" className="w-full">
                    <MessageSquare className="mr-2" />
                    Send Message
                  </Button>
                </form>
              </div>

              {/* Additional Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Why Choose ProAuto?</h2>
                  
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Easy Online Booking</h3>
                        <p className="text-muted-foreground">
                          Schedule your appointment online 24/7 with our convenient booking system.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Expert Consultation</h3>
                        <p className="text-muted-foreground">
                          Our team provides personalized recommendations based on your vehicle's needs.
                        </p>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center flex-shrink-0">
                        <Clock className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">Fast Response Time</h3>
                        <p className="text-muted-foreground">
                          We respond to all inquiries within 24 hours or less.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="rounded-2xl overflow-hidden shadow-lg h-64 bg-automotive-light">
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 mx-auto mb-2 text-accent" />
                      <p className="font-semibold">123 Auto Care Drive</p>
                      <p>Los Angeles, CA 90001</p>
                    </div>
                  </div>
                </div>

                {/* Business Hours */}
                <Card className="shadow-lg border-0">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-xl mb-4 flex items-center gap-2">
                      <Clock className="w-6 h-6 text-accent" />
                      Business Hours
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Monday - Friday</span>
                        <span className="font-semibold">8:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Saturday</span>
                        <span className="font-semibold">9:00 AM - 5:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Sunday</span>
                        <span className="font-semibold text-accent">Closed</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-automotive-black text-white">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Prefer to Book Directly?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Skip the form and schedule your service appointment right now with our online booking system.
            </p>
            <Button variant="automotive" size="lg" className="hover-lift">
              <Calendar className="mr-2" />
              Book Appointment Now
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
