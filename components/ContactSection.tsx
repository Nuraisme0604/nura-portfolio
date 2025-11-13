"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { SOCIAL_LINKS } from "@/constants";
import HiddenInfoButton from "@/components/HiddenInfoButton";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            Initiate <span className="text-primary">Handshake</span>
          </h2>
          <p className="text-dim text-lg">Let&apos;s connect securely</p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Social Links */}
          <div className="space-y-6">
            <h3 className="text-2xl font-mono font-bold text-white mb-6 text-center">Contact Channels</h3>
            
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-surface border border-border rounded hover:border-primary glow-hover group"
            >
              <Github className="text-primary group-hover:scale-110 transition-transform" size={24} />
              <div>
                <p className="font-mono text-white">GitHub</p>
                <p className="text-dim text-sm">@Nuraisme0604</p>
              </div>
            </a>
      
            <div className="relative">
              <div className="flex items-center gap-4 p-4 bg-surface border border-border rounded hover:border-primary transition-colors group">
                <Linkedin className="text-primary group-hover:scale-110 transition-transform" size={24} />
                <div className="flex-1">
                  <p className="font-mono text-white">LinkedIn</p>
                  <p className="text-dim text-sm">Connect with me 🔒</p>
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <HiddenInfoButton variant="link" className="w-full h-full !no-underline opacity-0 cursor-pointer">
                  LinkedIn
                </HiddenInfoButton>
              </div>
            </div>

            <a
              href={`mailto:${SOCIAL_LINKS.email}`}
              className="flex items-center gap-4 p-4 bg-surface border border-border rounded hover:border-primary glow-hover group"
            >
              <Mail className="text-primary group-hover:scale-110 transition-transform" size={24} />
              <div>
                <p className="font-mono text-white">Email</p>
                <p className="text-dim text-sm">{SOCIAL_LINKS.email}</p>
              </div>
            </a>

            {/* Hidden Contact Methods */}
            <div className="p-4 bg-surface border border-border rounded">
              <p className="font-mono text-white mb-3">More Contact Methods</p>
              <div className="flex gap-3">
                <HiddenInfoButton variant="button">
                  Facebook 🔒
                </HiddenInfoButton>
                <HiddenInfoButton variant="button">
                  Discord 🔒
                </HiddenInfoButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
