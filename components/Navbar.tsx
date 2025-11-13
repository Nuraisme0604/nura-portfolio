"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, FileDown } from "lucide-react";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "glass border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="#home" className="font-mono text-primary text-xl font-bold hover:glow transition-all">
              &gt; ANH MINH_
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-dim hover:text-primary transition-colors font-mono text-sm"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://drive.google.com/drive/u/0/folders/1CeCZ_inzebmb4Vs9QipuhF4RB1NrpMWM"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary rounded font-mono transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] text-sm"
              >
                <FileDown size={16} />
                CV
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-primary"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass border-t border-border">
            <div className="px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-dim hover:text-primary transition-colors font-mono text-sm py-2"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="https://drive.google.com/drive/u/0/folders/1CeCZ_inzebmb4Vs9QipuhF4RB1NrpMWM"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary rounded font-mono transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] text-sm w-full justify-center"
              >
                <FileDown size={16} />
                Download CV
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
