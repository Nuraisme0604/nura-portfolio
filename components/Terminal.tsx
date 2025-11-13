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
          &quot;name&quot;: <span className="text-white">&quot;{terminalContent.name}&quot;</span>,
        </div>
        <div className="pl-4 text-blue-400">
          &quot;username&quot;: <span className="text-white">&quot;{terminalContent.username}&quot;</span>,
        </div>
        <div className="pl-4 text-blue-400">
          &quot;role&quot;: <span className="text-white">&quot;{terminalContent.role}&quot;</span>,
        </div>
        <div className="pl-4 text-blue-400">
          &quot;location&quot;: <span className="text-white">&quot;{terminalContent.location}&quot;</span>,
        </div>
        <div className="pl-4 text-blue-400">
          &quot;education&quot;: <span className="text-white">&quot;{terminalContent.education}&quot;</span>,
        </div>
        <div className="pl-4 text-blue-400">
          &quot;skills&quot;: <span className="text-yellow-300">[</span>
        </div>
        {terminalContent.skills.map((skill, idx) => (
          <div key={idx} className="pl-8 text-white">
            &quot;{skill}&quot;{idx < terminalContent.skills.length - 1 ? "," : ""}
          </div>
        ))}
        <div className="pl-4 text-yellow-300">],</div>
        <div className="pl-4 text-blue-400">
          &quot;interests&quot;: <span className="text-yellow-300">[</span>
        </div>
        {terminalContent.interests.map((interest, idx) => (
          <div key={idx} className="pl-8 text-white">
            &quot;{interest}&quot;{idx < terminalContent.interests.length - 1 ? "," : ""}
          </div>
        ))}
        <div className="pl-4 text-yellow-300">],</div>
        <div className="pl-4 text-blue-400">
          &quot;status&quot;: <span className="text-white">&quot;{terminalContent.status}&quot;</span>
        </div>
        <div className="text-yellow-300">{`}`}</div>
        <div className="mt-3 text-primary flex items-center">
          root@nura-pc:~$ <span className="ml-2 cursor-blink">_</span>
        </div>
      </div>
    </div>
  );
}
