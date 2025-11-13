"use client";

import { Shield, Code2 } from "lucide-react";
import { SECURITY_SKILLS, DEV_SKILLS } from "@/constants";

export default function SkillsSection() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            The <span className="text-primary">Arsenal</span>
          </h2>
          <p className="text-dim text-lg">Skills & Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
         
          {/* Development Skills */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="text-secondary" size={32} />
              <h3 className="text-2xl font-mono font-bold text-white">Development</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {DEV_SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-surface border border-border p-4 rounded hover:border-secondary glow-hover cursor-pointer"
                >
                  <p className="font-mono text-sm text-white">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

           {/* Security Skills */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <Shield className="text-primary" size={32} />
              <h3 className="text-2xl font-mono font-bold text-white">Security Operations</h3>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {SECURITY_SKILLS.map((skill) => (
                <div
                  key={skill.name}
                  className="bg-surface border border-border p-4 rounded hover:border-primary glow-hover cursor-pointer"
                >
                  <p className="font-mono text-sm text-white">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
