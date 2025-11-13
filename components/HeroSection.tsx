"use client";

import { TypeAnimation } from "react-type-animation";
import Terminal from "./Terminal";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-20">
      <div className="max-w-7xl w-full mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-5xl md:text-6xl font-bold font-mono text-white">
                Nguyen Doan
                <br />
                <span className="text-primary">Anh Minh</span>
              </h1>
              
              <div className="h-16 flex items-center">
                <TypeAnimation
                  sequence={[     
                    "MIS Student",
                    2000,
                    "Full-Stack Developer",
                    2000,
                    "Security Analyst",
                    2000,
                  ]}
                  wrapper="h2"
                  speed={50}
                  className="text-2xl md:text-3xl font-mono text-secondary"
                  repeat={Infinity}
                />
              </div>
            </div>

            <p className="text-dim text-lg max-w-xl">
              Fourth-year student majoring in Management Information Systems at Hanoi University of Science and Technology.
              Passionate about learning new skills and personal development.

            </p>

            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-primary text-background font-mono font-bold hover:bg-primary/80 transition-all flex items-center gap-2 group"
              >
                [ View_Work ]
                <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />
              </a>
              
              <a
                href="#contact"
                className="px-6 py-3 border border-primary text-primary font-mono hover:bg-primary hover:text-background transition-all"
              >
                [ Contact_Me ]
              </a>
            </div>
          </div>

          {/* Right Side - Terminal */}
          <div className="hidden md:block">
            <Terminal />
          </div>
        </div>
      </div>
    </section>
  );
}
