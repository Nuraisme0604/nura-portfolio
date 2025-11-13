export interface Project {
  title: string;
  category: string;
  description: string;
  tech: string[];
  links: {
    github?: string | null;
    demo?: string | null;
    writeup?: string | null;
  };
}

export interface Skill {
  name: string;
  category: 'Security' | 'Development';
}

export interface Experience {
  year: string;
  title: string;
  organization: string;
  description: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
}

export const PROJECTS: Project[] = [
  // {
  //   title: "Redline Stealer Analysis",
  //   category: "Malware Analysis",
  //   description: "Phân tích hành vi mã độc, kỹ thuật che giấu và phương thức trộm dữ liệu của Redline Stealer.",
  //   tech: ["Ghidra", "Wireshark", "VirtualBox", "Python"],
  //   links: {
  //     // github: "#",
  //     // writeup: "#"
  //   }
  // },
  // {
  //   title: "Rootkit Detection on Windows",
  //   category: "Memory Forensics",
  //   description: "Phát hiện và phân tích rootkit trên hệ thống Windows sử dụng Volatility",
  //   tech: ["Volatility", "Python", "Memory Forensics"],
  //   links: {
  //     // github: "#",
  //     // writeup: "#"
  //   }
  // },
  {
    title: "Một số chức năng cơ bản của hệ thống LMS (thực tập) ",
    category: "Web Development",
    description: "Lập trình Backend hệ thống LMS với NestJS, GraphQL và MongoDB",
    tech: ["NestJS", "GraphQL", "MongoDB"],
    links: {
      github: "https://github.com/Nuraisme0604/LMS_App_Function.git",
      // demo: "#",
    }
  },
  {
    title: "MERN Stack Inventory Website",
    category: "Web Development",
    description: "Xây dựng website quản lý kho hàng sử dụng MongoDB, Express.js, React và Node.js (MERN Stack)",
    tech: ["MongoDB", "Express.js", "React", "Node.js"],
    links: {
      github: "https://github.com/Nuraisme0604/InventoryWEBMernStack",
      // demo: "#",
    }
  },
  {
    title: "NFTs Marketplace Backend Blockchain",
    category: "Web Development",
    description: "Xây dựng backend cho marketplace NFTs sử dụng công nghệ blockchain",
    tech: ["Blockchain", "Node.js", "Express.js", "Solidity"],
    links: {
      github: "https://github.com/Nuraisme0604/NFTs_marketplace_backend_blockchain",
      // demo: "#",
    }
  },
  
  {
    title: "Một số dự án Winform App đơn giản khác",
    category: "Winform App Development",
    description: "Sử dụng C# để phát triển các ứng dụng Winform phục vụ các nhu cầu cá nhân và học tập. Các repo này vừa làm full vừa là có sự tham gia (full stack)",
    tech: ["C#", "Winform", "SQL Server"],
    links: {
      github: "https://github.com/Nuraisme0604?tab=repositories",
      // demo: "#",
    }
  },
];

export const SECURITY_SKILLS: Skill[] = [
  { name: "Burp Suite", category: "Security" },
  { name: "Metasploit", category: "Security" },
  { name: "Volatility", category: "Security" },
  { name: "Wireshark", category: "Security" },
  { name: "Ghidra", category: "Security" },
  { name: "OWASP Top 10", category: "Security" },
  { name: "REMnux", category: "Security" },
  { name: "FlareVM", category: "Security" },
  
];

export const DEV_SKILLS: Skill[] = [
  { name: "React", category: "Development" },
  { name: "Next.js", category: "Development" },
  { name: "Node.js", category: "Development" },
  { name: "Github", category: "Development" },
  { name: "MongoDB", category: "Development" },
  { name: "C#", category: "Development" },
  { name: "Python", category: "Development" },
  { name: "TypeScript", category: "Development" },
  { name: "C/C++", category: "Development" },
  { name: "NestJS", category: "Development" },
];

export const EXPERIENCES: Experience[] = [
  {
    year: "2022",
    title: "Bắt đầu học đại học",
    organization: "HUST - Đại học Bách Khoa Hà Nội",
    description: "Chuyên ngành Hệ thống Thông tin Quản lý"
  },
  {
    year: "05/2025 - 08/2025",
    title: "Backend Developer Intern",
    organization: "DHTE Company",
    description: "Lập trình Backend hệ thống LMS Microservices với NestJS, GraphQL và MongoDB"
  },
  {
    year: "2026",
    title: "Tốt nghiệp Đại học (dự kiến)",
    organization: "HUST - Đại học Bách Khoa Hà Nội",
    description: "Hoàn thành chương trình Hệ thống Thông tin Quản lý"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    name: "Google Cybersecurity Certificate",
    issuer: "Google",
    date: "2025"
  },
  {
    name: "Using Python to Interact with the Operating System",
    issuer: "Google",
    date: "2025"
  },
  {
    name: "Automate Cybersecurity Tasks with Python",
    issuer: "Google",
    date: "2025"
  }
];

export const SOCIAL_LINKS = {
  github: "https://github.com/Nuraisme0604",
  linkedin: "https://linkedin.com/in/your-profile",
  email: "nguxxxxxxxxxxxxx@gmail.com"
};
