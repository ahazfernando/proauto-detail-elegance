import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <span className="text-2xl font-bold">
              Pro<span className="text-accent">Auto</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="font-medium hover:text-accent transition-colors">Home</a>
            <a href="#services" className="font-medium hover:text-accent transition-colors">Services</a>
            <a href="#gallery" className="font-medium hover:text-accent transition-colors">Gallery</a>
            <a href="#testimonials" className="font-medium hover:text-accent transition-colors">Testimonials</a>
            <a href="#contact" className="font-medium hover:text-accent transition-colors">Contact</a>
          </div>
          
          <div className="hidden md:block">
            <Button variant="automotive">
              Book Service
            </Button>
          </div>
          
          <button 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        
        {isOpen && (
          <div className="md:hidden py-4 space-y-4">
            <a href="#home" className="block font-medium hover:text-accent transition-colors">Home</a>
            <a href="#services" className="block font-medium hover:text-accent transition-colors">Services</a>
            <a href="#gallery" className="block font-medium hover:text-accent transition-colors">Gallery</a>
            <a href="#testimonials" className="block font-medium hover:text-accent transition-colors">Testimonials</a>
            <a href="#contact" className="block font-medium hover:text-accent transition-colors">Contact</a>
            <Button variant="automotive" className="w-full">
              Book Service
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
