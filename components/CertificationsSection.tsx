"use client";

import { useState } from "react";
import { Award } from "lucide-react";
import { CERTIFICATIONS } from "@/constants";
import HiddenInfoPopup from "@/components/HiddenInfoPopup";

export default function CertificationsSection() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <section className="py-20 px-4 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-dim text-lg">Professional credentials and achievements</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert) => (
            <div
              key={cert.name}
              className="bg-surface border border-border rounded-lg p-6 hover:border-primary glow-hover group"
            >
              <Award className="text-primary mb-4 group-hover:scale-110 transition-transform" size={32} />
              <h3 className="text-lg font-bold text-white font-mono mb-2">{cert.name}</h3>
              <p className="text-dim text-sm">{cert.issuer}</p>
              <p className="text-primary text-xs font-mono mt-2">{cert.date}</p>
              
              {/* Hidden Credential */}
              <div className="mt-4">
                <button
                  onClick={() => setIsPopupOpen(true)}
                  className="text-primary hover:text-primary/80 underline decoration-dotted font-mono transition-colors text-sm"
                >
                  View Credential 🔒
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Single Popup for all certificates */}
      <HiddenInfoPopup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)} />
    </section>
  );
}
