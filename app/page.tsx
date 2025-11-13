import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-dim font-mono text-sm">
            &copy; 2025 Nguyen Doan Anh Minh. Built with Next.js & Tailwind CSS
          </p>
          <p className="text-primary font-mono text-xs mt-2">
            &lt;/&gt; with 💚 for security and code
          </p>
        </div>
      </footer>
    </>
  );
}
