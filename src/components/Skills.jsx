import Section from "./Section";
import SectionTitle from "./SectionTitle";
import {
  Shield,
  Radar,
  Bug,
  Network,
  Cpu,
  Layers,
} from "lucide-react";

export default function Skills() {
  const groups = [
    {
      title: "Security Operations & Monitoring",
      Icon: Shield,
      items: [
        "Incident Detection & Response",
        "Log Analysis & Alert Triage",
        "SIEM Monitoring (Splunk, Wazuh)",
        "Threat Hunting Fundamentals",
        "MITRE ATT&CK Mapping",
      ],
    },
    {
      title: "Threat & Malware Analysis",
      Icon: Radar,
      items: [
        "Threat Modeling (MITRE ATT&CK, STRIDE)",
        "Malware Behavior Analysis",
        "Network Traffic Analysis (Wireshark, PCAPs)",
        "Indicator of Compromise (IOC) Identification",
      ],
    },
    {
      title: "Vulnerability Management & AppSec",
      Icon: Bug,
      items: [
        "Vulnerability Scanning (Nessus, OpenVAS)",
        "Configuration Auditing & Compliance Checks",
        "Remediation Validation",
        "OWASP Top 10 Awareness & Testing",
      ],
    },
    {
      title: "Systems, Identity & Enterprise IT",
      Icon: Layers,
      items: [
        "Operating Systems (Windows, Linux)",
        "Active Directory & Group Policy (GPO)",
        "Microsoft 365 Administration",
        "Endpoint Hardening & Access Controls",
      ],
    },
    {
      title: "Networking, Infrastructure & Cloud",
      Icon: Network,
      items: [
        "Networking Fundamentals (TCP/IP, OSI Model)",
        "Firewalling & Segmentation (pfSense)",
        "Secure Network Architecture",
        "Virtualization (Proxmox, VirtualBox, VMware)",
        "Cloud Platforms (AWS, Azure)",
      ],
    },
    {
      title: "Automation, Tooling & Platforms",
      Icon: Cpu,
      items: [
        "Scripting & Automation (Python, Bash)",
        "Reconnaissance & Enumeration Fundamentals",
        "Exploit Concepts & Tooling Foundations",
        "Burp Suite · OWASP ZAP · Metasploit",
        "GitHub · Jira · Confluence",
      ],
    },
  ];

  return (
    <Section id="skills">
      <SectionTitle
        label="Skills"
        eyebrow="IT, security, and infrastructure foundations"
      />

      <div className="relative max-w-5xl mt-10 pl-10 space-y-4">
        {/* Single Spine */}
        <div className="absolute top-0 bottom-0 left-4 w-[2px] bg-blue-200" />

        {groups.map(({ title, Icon, items }) => (
          <div
            key={title}
            className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed"
          >
            <Icon className="mt-0.5 w-4 h-4 text-blue-600 flex-shrink-0" />
            <div className="flex-1">
              <span className="font-semibold text-blue-800">
                {title}:
              </span>{" "}
              {items.join(" · ")}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}