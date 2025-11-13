"use client";

import { motion } from "framer-motion";
import { EXPERIENCES } from "@/constants";

export default function ExperienceSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-mono text-white mb-4">
            Experience <span className="text-primary">Timeline</span>
          </h2>
          <p className="text-dim text-lg">My journey in cybersecurity and development</p>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex gap-6"
            >
              {/* Timeline Line */}
              <div className="flex flex-col items-center">
                <div className="w-4 h-4 rounded-full bg-primary glow" />
                {index < EXPERIENCES.length - 1 && (
                  <div className="w-0.5 h-full bg-border mt-2" />
                )}
              </div>

              {/* Content */}
              <div className="flex-1 pb-12">
                <div className="bg-surface border border-border rounded-lg p-6 hover:border-primary/50 transition-colors">
                  <span className="text-primary font-mono text-sm">{exp.year}</span>
                  <h3 className="text-xl font-bold text-white mt-2">{exp.title}</h3>
                  <p className="text-secondary font-mono text-sm mt-1">{exp.organization}</p>
                  <p className="text-dim mt-3">{exp.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
