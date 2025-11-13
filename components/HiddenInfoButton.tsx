"use client";

import { useState } from "react";
import HiddenInfoPopup from "@/components/HiddenInfoPopup";

interface HiddenInfoButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "button" | "link" | "icon";
}

export default function HiddenInfoButton({ 
  children, 
  className = "",
  variant = "button" 
}: HiddenInfoButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  const baseStyles = {
    button: "bg-primary/10 hover:bg-primary/20 text-primary border border-primary px-4 py-2 rounded font-mono transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,255,65,0.3)]",
    link: "text-primary hover:text-primary/80 underline decoration-dotted font-mono transition-colors",
    icon: "text-primary/50 hover:text-primary cursor-pointer transition-colors"
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={`${baseStyles[variant]} ${className}`}
      >
        {children || "🔒 Hidden Info"}
      </button>
      <HiddenInfoPopup isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
}
