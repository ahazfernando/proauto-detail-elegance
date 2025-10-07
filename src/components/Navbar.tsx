import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold">
              Pro<span className="text-accent">Auto</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              to="/" 
              className={`font-medium hover:text-accent transition-colors ${isActive('/') ? 'text-accent' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`font-medium hover:text-accent transition-colors ${isActive('/services') ? 'text-accent' : ''}`}
            >
              Services
            </Link>
            <a href="/#gallery" className="font-medium hover:text-accent transition-colors">Gallery</a>
            <a href="/#testimonials" className="font-medium hover:text-accent transition-colors">Testimonials</a>
            <Link 
              to="/contact" 
              className={`font-medium hover:text-accent transition-colors ${isActive('/contact') ? 'text-accent' : ''}`}
            >
              Contact
            </Link>
          </div>
          
          <div className="hidden md:block">
            <Link to="/contact">
              <Button variant="automotive">
                Book Service
              </Button>
            </Link>
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
            <Link 
              to="/" 
              className={`block font-medium hover:text-accent transition-colors ${isActive('/') ? 'text-accent' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/services" 
              className={`block font-medium hover:text-accent transition-colors ${isActive('/services') ? 'text-accent' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <a 
              href="/#gallery" 
              className="block font-medium hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </a>
            <a 
              href="/#testimonials" 
              className="block font-medium hover:text-accent transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </a>
            <Link 
              to="/contact" 
              className={`block font-medium hover:text-accent transition-colors ${isActive('/contact') ? 'text-accent' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link to="/contact" onClick={() => setIsOpen(false)}>
              <Button variant="automotive" className="w-full">
                Book Service
              </Button>
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
