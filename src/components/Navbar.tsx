"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container px-4 md:px-6">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">
              Pro<span className="text-accent">Auto</span>
            </span>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className={`font-medium hover:text-accent transition-colors ${isActive('/') ? 'text-accent' : ''}`}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`font-medium hover:text-accent transition-colors ${isActive('/services') ? 'text-accent' : ''}`}
            >
              Services
            </Link>
            <Link 
              to="/gallery" 
              className={`font-medium hover:text-accent transition-colors ${isActive('/gallery') ? 'text-accent' : ''}`}
            >
              Gallery
            </Link>
            <Link 
              to="/about" 
              className={`font-medium hover:text-accent transition-colors ${isActive('/about') ? 'text-accent' : ''}`}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`font-medium hover:text-accent transition-colors ${isActive('/contact') ? 'text-accent' : ''}`}
            >
              Contact
            </Link>
          </div>
          
          <div className="hidden md:block">
            <Link href="/contact">
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
              href="/" 
              className={`block font-medium hover:text-accent transition-colors ${isActive('/') ? 'text-accent' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/services" 
              className={`block font-medium hover:text-accent transition-colors ${isActive('/services') ? 'text-accent' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link 
              to="/gallery" 
              className={`block font-medium hover:text-accent transition-colors ${isActive('/gallery') ? 'text-accent' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Gallery
            </Link>
            <Link 
              to="/about" 
              className={`block font-medium hover:text-accent transition-colors ${isActive('/about') ? 'text-accent' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className={`block font-medium hover:text-accent transition-colors ${isActive('/contact') ? 'text-accent' : ''}`}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
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
