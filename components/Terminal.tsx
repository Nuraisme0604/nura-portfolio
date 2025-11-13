"use client";

export default function Terminal() {
  const terminalContent = {
    name: "Nguyen Doan Anh Minh",
    username: "Nura",
    role: "Developer & Security Researcher ",
    location: "Hanoi, Vietnam",
    education: "HUST - Management Information Systems",
    skills: [
      "Full-stack Development",
      "Malware Analysis",
    ],
    interests: ["Program DIY embedded projects.", "Study techniques for system exploitation and defense.", "Listen to English podcasts about technology and economics."],
    status: "Hiii Iam Nuuuuu (^.^)"
  };



  return (
    <div className="bg-surface border border-border rounded-lg overflow-hidden shadow-xl">
      {/* Terminal Header */}
      <div className="bg-[#1a1a1a] px-4 py-3 flex items-center gap-2 border-b border-border">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-dim text-xs font-mono ml-2">nura@portfolio:~</span>
      </div>

      {/* Terminal Body */}
      <div className="p-6 font-mono text-sm">
        <div className="text-primary mb-2">
          root@nura-pc:~$ <span className="text-white">cat user_info.json</span>
        </div>
        <div className="text-yellow-300">{`{`}</div>
        <div className="pl-4 text-blue-400">
          "name": <span className="text-white">"{terminalContent.name}"</span>,
        </div>
        <div className="pl-4 text-blue-400">
          "username": <span className="text-white">"{terminalContent.username}"</span>,
        </div>
        <div className="pl-4 text-blue-400">
          "role": <span className="text-white">"{terminalContent.role}"</span>,
        </div>
        <div className="pl-4 text-blue-400">
          "location": <span className="text-white">"{terminalContent.location}"</span>,
        </div>
        <div className="pl-4 text-blue-400">
          "education": <span className="text-white">"{terminalContent.education}"</span>,
        </div>
        <div className="pl-4 text-blue-400">
          "skills": <span className="text-yellow-300">[</span>
        </div>
        {terminalContent.skills.map((skill, idx) => (
          <div key={idx} className="pl-8 text-white">
            "{skill}"{idx < terminalContent.skills.length - 1 ? "," : ""}
          </div>
        ))}
        <div className="pl-4 text-yellow-300">],</div>
        <div className="pl-4 text-blue-400">
          "interests": <span className="text-yellow-300">[</span>
        </div>
        {terminalContent.interests.map((interest, idx) => (
          <div key={idx} className="pl-8 text-white">
            "{interest}"{idx < terminalContent.interests.length - 1 ? "," : ""}
          </div>
        ))}
        <div className="pl-4 text-yellow-300">],</div>
        <div className="pl-4 text-blue-400">
          "status": <span className="text-white">"{terminalContent.status}"</span>
        </div>
        <div className="text-yellow-300">{`}`}</div>
        <div className="mt-3 text-primary flex items-center">
          root@nura-pc:~$ <span className="ml-2 cursor-blink">_</span>
        </div>
      </div>
    </div>
  );
}
