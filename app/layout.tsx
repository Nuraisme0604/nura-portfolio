import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Nguyen Doan Anh Minh - Portfolio",
  description: "Portfolio of Nguyen Doan Anh Minh - Management Information Systems Student and Full-stack Developerfrom HUST",
  keywords: ["security", "development", "portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <head>
        {/* Easter Egg */}
        <meta name="author" content="Nura - HUST Student" />
      </head>
      <body className="font-sans antialiased">
        {/* Grid Background */}
        <div className="fixed inset-0 grid-background pointer-events-none z-0" />
        
        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
