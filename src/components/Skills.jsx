import Section from "./Section";
import SectionTitle from "./SectionTitle";
import { Shield, Bug, Radar, Cpu, Network, Layers } from "lucide-react";

export default function Skills() {
  const groups = [
    { title: "Security Operations (SOC)", Icon: Shield, items: [
      "Incident Detection & Response",
      "Log Analysis & Alert Triage",
      "SIEM Monitoring (Splunk, Wazuh)",
      "Threat Hunting Fundamentals",
    ]},
    { title: "Threat Analysis & Defense", Icon: Radar, items: [
      "Threat Modeling (MITRE ATT&CK / STRIDE)",
      "Malware Behavior Analysis",
      "Network Traffic Analysis (Wireshark, PCAPs)",
      "Endpoint Hardening",
    ]},
    { title: "Vulnerability Management", Icon: Bug, items: [
      "Vulnerability Scanning (Nessus, OpenVAS)",
      "Web App Testing (OWASP Top 10)",
      "Configuration Auditing",
      "Remediation Validation",
    ]},
    { title: "Offensive Security", Icon: Cpu, items: [
      "Reconnaissance & Enumeration",
      "Web App Testing (Burp Suite, ZAP)",
      "Exploit Fundamentals",
      "Python Automation",
    ]},
    { title: "Network & Cloud Security", Icon: Network, items: [
      "Firewalling & Segmentation (pfSense)",
      "Secure Network Architecture",
      "Identity & Access Controls",
      "VM & Container Security",
    ]},
    { title: "Tools & Platforms", Icon: Layers, items: [
      "Splunk · Wazuh",
      "Burp Suite · OWASP ZAP",
      "Nessus · OpenVAS · Nmap",
      "Wireshark · Metasploit",
      "GitHub · Jira · Confluence",
    ]},
  ];

  return (
    <Section id="skills">
      <SectionTitle
        label="Skills"
        eyebrow="Hands-on offensive and defensive capabilities"
      />

      <div className="relative max-w-5xl mt-10 pl-10 space-y-4">

        {/* Single Spine */}
        <div className="absolute top-0 bottom-0 left-4 w-[2px] bg-blue-200" />

        {groups.map(({ title, Icon, items }) => (
          <div key={title} className="flex items-start gap-2 text-sm text-gray-700 leading-relaxed">
            <Icon className="mt-0.5 w-4 h-4 text-blue-600 flex-shrink-0" />
            <div className="flex-1">
              <span className="font-semibold text-blue-800">{title}:</span>{" "}
              {items.join(" · ")}
            </div>
          </div>
        ))}

      </div>
    </Section>
  );
}
