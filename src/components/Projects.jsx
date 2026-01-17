import Section from "./Section";
import SectionTitle from "./SectionTitle";

export default function Projects() {
  const projects = [
    {
      title: "Malware Analysis Lab",
      description:
        "Built a Windows and REMnux analysis environment to analyze and document malicious PE samples using tools such as ProcMon, APIMon, and Ghidra. Documented findings using industry-standard frameworks.",
      tags: ["Malware Analysis", "Dynamic Analysis", "Reverse Engineering", "PE", "MITRE"],
      writeup: "../projects/MalwareAnalysis",
      thumbnail: "/thumbnails/malware-analysis.jpg",
    },
    {
      title: "Paradise Ransomware Analysis",
      description:
        "Performed static source code analysis of the Paradise ransomware to document its execution flow, encryption, persistence, and key escrow. Mapped behaviors to the MITRE ATT&CK and extracted IoCs.",
      tags: ["Malware Analysis", "Static Analysis", "Reverse Engineering", "PE", "MITRE"],
      writeup: "../projects/ParadiseCode",
      thumbnail: "/thumbnails/paradise.png",
    },
    {
      title: "Chiron: Compliance Management System",
      description:
        "A React/Firebase platform for GRC workflows, including evidence tracking, audit trails, and compliance status. Built with secure engineering principles and CI/CD integration.",
      tags: ["React", "Firebase", "GRC", "CI/CD", "Jira"],
      writeup: "/projects/ChironCMS",
      thumbnail: "/thumbnails/chiron.jpg",
    },
    {
      title: "Proxmox Homelab",
      description:
        "A Proxmox-based virtualized security lab with segmented networks, SIEM ingestion, Windows/Linux hosts, and malware testing environments for SOC and IR exercises.",
      tags: ["Virtualization", "Homelab", "Proxmox", "SIEM", "Windows AD"],
      writeup: "/projects/ProxmoxHomelab",
      thumbnail: "/thumbnails/homelab.jpg",
    },
    {
      title: "CTF Write-Ups",
      description:
        "A curated library of CTF solutions from PicoCTF and OverTheWire demonstrating offensive exploitation techniques and reverse engineering.",
      tags: ["CTF", "Offensive", "Reverse Engineering", "Write-Ups"],
      writeup: "/projects/CTFWriteups",
      thumbnail: "/thumbnails/ctf.jpg",
    },
    {
      title: "Wazuh SIEM Deployment",
      description:
        "Deployed Wazuh SIEM for log aggregation, threat detection, and compliance monitoring across multi-host enterprise-like lab environments.",
      tags: ["SIEM", "SOC", "Wazuh", "Log Management"],
      writeup: "/projects/Wazuh",
      thumbnail: "/thumbnails/wazuh.jpg",
    },
    {
      title: "SecureChat WebSocket Application",
      description:
        "A secure WebSockets-based chat application supporting real-time encrypted messaging and multi-user rooms, backed by SQLite for persistence.",
      tags: ["WebSockets", "Node.js", "SQLite3", "Crypto", "Real-Time"],
      writeup: "https://github.com/stsong0812/SecureChat",
      thumbnail: "/thumbnails/websockets.png",
    },
    {
      title: "TitanLock Password Manager",
      description:
        "A local password management application using Argon2 for password hashing and Tkinter for GUI interactions, emphasizing secure key storage and encryption hygiene.",
      tags: ["Python", "Argon2", "Tkinter", "Encryption", "Key Derivation"],
      writeup: "https://github.com/stsong0812/TitanLock",
      thumbnail: "/thumbnails/titanlock.png",
    },
    {
      title: "Email Spam Classifier (NBC)",
      description:
        "A Naive Bayes email spam classifier leveraging Python and Pandas for dataset preprocessing and probabilistic classification of ham vs spam messages.",
      tags: ["Python", "Pandas", "ML", "Naive Bayes", "Classification"],
      writeup: "https://github.com/stsong0812/Email-Spam-Classifier",
      thumbnail: "/thumbnails/nbc.png",
    },
  ];

  return (
    <Section id="projects">
      <SectionTitle
        label="Projects"
        eyebrow="Case studies in analysis, engineering, and security"
      />

      <div
        className="
          bg-white border border-gray-200 rounded-2xl shadow-md
          mt-10 overflow-hidden
        "
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-3 divide-x divide-y divide-gray-200">
          {projects.map((project) => (
            <a
              key={project.title}
              href={project.writeup}
              className="
                group relative flex flex-col
                transition-all duration-300
                hover:bg-blue-50/40
                hover:-translate-y-[2px]
                hover:shadow-[0_4px_20px_rgba(0,0,0,0.08)]
              "
            >
              {/* Thumbnail */}
              <div className="relative h-44 overflow-hidden">
                <div
                  className="
                    absolute inset-0 bg-gradient-to-br from-blue-500/30 to-transparent
                    opacity-0 group-hover:opacity-40 transition-opacity duration-300
                  "
                />

                <img
                  src={project.thumbnail}
                  alt={project.title}
                  className={`
                    w-full h-full transition-transform duration-500 group-hover:scale-[1.25]
                    ${
                      project.title === "TitanLock Password Manager"
                        ? "object-contain p-3 scale-[1.1]"
                        : "object-cover"
                    }
                  `}
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col flex-1">
                <h3
                  className="
                    text-lg font-semibold text-gray-900 mb-1
                    transition-colors duration-300
                    group-hover:text-blue-800
                  "
                >
                  {project.title}
                </h3>

                <p
                  className="
                    text-sm text-gray-600 leading-relaxed mb-3 flex-1
                    transition-colors duration-300
                    group-hover:text-gray-700
                  "
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="
                        px-2 py-0.5 rounded-full border border-blue-300/50
                        text-[0.7rem] text-blue-700 font-mono uppercase tracking-wide
                        transition-all duration-300
                        group-hover:border-blue-500
                        group-hover:bg-blue-100/20
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </Section>
  );
}
