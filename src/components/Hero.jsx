import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiTryhackme, SiHackthebox } from "react-icons/si";
import {
  Shield,
  Bug,
  Radar,
  AlertTriangle,
  Network,
  FileSearch,
  Terminal,
  Activity,
  Lock,
  Cpu,
} from "lucide-react";

const skills = [
  { label: "SOC OPERATIONS", Icon: Shield },
  { label: "THREAT ANALYSIS", Icon: Radar },
  { label: "VULNERABILITY MANAGEMENT", Icon: Bug },
  { label: "SIEM", Icon: Activity },
  { label: "INCIDENT RESPONSE", Icon: AlertTriangle },
  { label: "MALWARE ANALYSIS", Icon: Cpu },
  { label: "NETWORK SECURITY", Icon: Network },
  { label: "LOG ANALYSIS", Icon: FileSearch },
  { label: "MITRE ATT&CK", Icon: Lock },
  { label: "LINUX", Icon: Terminal },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="
        relative w-full min-h-screen flex items-center
        bg-cover bg-center bg-no-repeat
      "
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 flex justify-center md:justify-start">
        <div
          className="
            space-y-6 text-white text-center md:text-left
            drop-shadow-[0_0_6px_rgba(0,0,0,0.6)]
            md:translate-x-[-300px]
          "
        >
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-blue-300">
            Cybersecurity · SOC · Vulnerability Management
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
            Steven Song
          </h1>

          <h2 className="text-base sm:text-lg md:text-2xl text-gray-200">
            Cybersecurity Student & Analyst
          </h2>

          <p className="font-mono text-xs sm:text-sm text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
            <span className="text-blue-400">&gt;</span> Focused on{" "}
            <span className="text-blue-300 tracking-wide">
              SOC, Threat Analysis, and Vulnerability Management
            </span>
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 pt-4">
            <a
              href="#projects"
              className="
                inline-flex items-center justify-center px-8 py-3.5 rounded-full
                bg-blue-600 text-white font-semibold shadow-lg
                hover:bg-blue-700 hover:shadow-xl hover:scale-[1.03]
                transition-all duration-200
              "
            >
              View Projects
            </a>

            <div className="flex gap-5 text-blue-300 text-2xl">
              {[
                { Icon: FaLinkedin, href: "https://www.linkedin.com/in/stsong0812" },
                { Icon: FaGithub, href: "https://github.com/stsong0812" },
                { Icon: SiTryhackme, href: "https://tryhackme.com/p/scanttk" },
                { Icon: SiHackthebox, href: "https://app.hackthebox.com/users/1065634" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition transform hover:-translate-y-1"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Skills Bara*/}
      <div className="absolute bottom-0 left-0 w-full z-20 overflow-hidden">
        <div className="bg-blue-900/30 backdrop-blur-md border-t border-blue-400/30">
          <div className="flex whitespace-nowrap animate-scroll gap-10 py-4 px-6 font-mono text-sm tracking-widest text-blue-200">
            {[...skills, ...skills].map(({ label, Icon }, i) => (
              <span
                key={i}
                className="
                  flex items-center gap-2
                  opacity-90 hover:opacity-100
                  transition-all duration-200
                "
              >
                <Icon className="w-4 h-4 text-blue-400" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
