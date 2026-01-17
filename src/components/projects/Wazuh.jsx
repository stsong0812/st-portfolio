import { Link } from "react-router-dom";
import CodeRef from "../CodeRef";

export default function Wazuh() {
  return (
    <section className="min-h-screen px-6 py-24 max-w-5xl mx-auto text-gray-900">

      {/* Breadcrumb */}
      <div className="text-sm mb-10 font-mono tracking-wide">
        <Link
          to="/#projects"
          className="text-blue-600 hover:text-blue-800 transition"
        >
          ← Back to Projects
        </Link>
      </div>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-blue-900">
        Wazuh SIEM Deployment
      </h1>

      <p className="font-mono text-sm text-blue-700 mt-2 mb-12">
        SIEM Engineering · Windows Security · Endpoint Telemetry · Compliance & Detection
      </p>

      <div className="space-y-20 leading-relaxed text-lg text-gray-700">

        {/* Overview */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
            Overview
          </h2>

          <p>
            This project involved deploying and configuring <CodeRef>Wazuh</CodeRef>,
            an open-source SIEM platform capable of ingesting endpoint telemetry,
            correlating security alerts, assessing compliance posture, and performing
            vulnerability analysis. The goal was to simulate an enterprise-style SOC
            environment by monitoring a Windows Server 2022 Domain Controller and a
            domain-joined Windows 11 workstation, evaluating detection coverage, and
            validating remediation workflows.
          </p>
        </section>

        {/* Deployment & Configuration */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
            Agent Deployment
          </h2>

          <div className="mt-4l">
            <div className="rounded-xl border border-gray-300 overflow-hidden bg-white w-full">
              <img
                src={"/public/screenshots/wazuh/agents.png"}
                alt="Wazuh Agent Summary Page"
                className="block w-full max-w-none object-contain"
              />
            </div>
          </div>

          <p className="mt-4">
            Wazuh agents were deployed across several systems that represent a realistic SOC monitoring surface. These included our
            primary management jumpbox, our Docker containers, and the our enterprise Windows environment.These agents supplied the 
            data needed for the population of dashboard data to enact detection and compliance monitoring.
          </p>

          <ul className="space-y-3 pl-4 border-l-2 border-blue-200 mt-4">
            <li>
              <span className="font-mono text-blue-700">Kali VM</span>: Used as the management, analyst, and jumpbox host for interacting with various lab VMs.
            </li>
            <li>
              <span className="font-mono text-blue-700">Ubuntu Docker Host</span>: Hosetd Portainer and various vulnerable web applications for testing.
            </li>
            <li>
              <span className="font-mono text-blue-700">Server 2022 DC</span>: Hosted Active Directory, DNS, and DHCP, providing a realistic enterprise domain environment.
            </li>
            <li>
              <span className="font-mono text-blue-700">Windows 11 Workstation</span>: Domain-joined endpoint simulating a typical user machine within the enterprise.
            </li>
          </ul>
        </section>

        {/* Telemetry Sources */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
            Telemetry & Event Collection
          </h2>

          <div className="mt-4">
            <div className="rounded-xl border border-gray-300 overflow-hidden bg-white w-full">
              <img
                src={"/public/screenshots/wazuh/dashboard.png"}
                alt="Wazuh Dashboard"
                className="block w-full max-w-none object-contain"
              />
            </div>
          </div>

          <p className="mt-4">
            Once deployed, Wazuh agents collect logs and telemetry from various sources based on pre-configured 
            and selected modules. For the Windows domain controller, key telemetry sources included:
          </p>

          <ul className="space-y-3 pl-4 border-l-2 border-blue-200 mt-4">
            <li>
              <span className="font-mono text-blue-700">Windows Security Logs</span>: Authentication events, Kerberos ticket operations, user/group modifications, and account lockouts provided identity-centric visibility critical for SOC workflows.
            </li>
            <li>
              <span className="font-mono text-blue-700">Sysmon</span>: Process, registry, network, and named pipe events enabled deeper behavior analysis commonly leveraged in detection engineering and threat hunting.
            </li>
            <li>
              <span className="font-mono text-blue-700">PowerShell Operational Logs</span>: Script block + module logging surfaced suspicious PowerShell execution patterns associated with lateral movement, credential access, and post-exploitation frameworks.
            </li>
            <li>
              <span className="font-mono text-blue-700">File Integrity Monitoring (FIM)</span>: Monitored sensitive system paths and configuration files for unauthorized modifications indicative of persistence or configuration tampering.
            </li>
            <li>
              <span className="font-mono text-blue-700">Vulnerability Inventory</span>: Software inventory and versioning allowed Wazuh to correlate the host against NVD/Microsoft CVE feeds for missing patches and outdated packages.
            </li>
            <li>
              <span className="font-mono text-blue-700">Compliance Benchmarks</span>: CIS Windows Server 2022 policies were evaluated for audit configuration, authentication controls, privileged policy enforcement, and logging requirements.
            </li>
          </ul>
        </section>

        {/* Compliance & Hardening */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
            Compliance Benchmarking
          </h2>

          <p className="mt-4">
            With telemetry established, Wazuh automatically evaluated the Domain Controller
            against the <CodeRef>CIS Microsoft Windows Server 2022 Benchmark</CodeRef>. The
            initial compliance score was <span className="text-red-600 font-semibold">27% </span>
            with <span className="font-semibold"> 259 failed</span> controls and only
            <span className="font-semibold"> 100 passed</span>. These findings reflected missing
            enterprise hardening configurations related to password policy enforcement,
            Kerberos settings, RDP authentication requirements, PowerShell logging, SMB/NTLM
            hardening, and general audit policy configuration.
          </p>

          <div className="mt-4 w-full">
            <div className="rounded-xl border border-gray-300 overflow-hidden bg-white w-full">
              <img
                src={"/public/screenshots/wazuh/compliance.png"}
                alt="Wazuh Compliance Dashboard"
                className="block w-full max-w-none object-contain"
              />
            </div>
          </div>

          <p className="mt-4">
            Given the results of this CIS benchmark, we can start remediating these failed checks
            starting with simple, low risk configuration changes. These controls can be classified into
            mostly account management and audit policy settings that can be adjusted via Group Policy Objects (GPOs).
          </p>
        </section>

        {/* Vulnerability Management */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
            Vulnerability Management
          </h2>

          <p>
            Wazuh's Vulnerability Detection module correlates information about the machine's operating system,
            installed applications, and packages against Wazuh's Cyber Threat Intelligence (CTI) feeds. In the 
            case of our Windows Server 2022 Domain Controller, the initial scan identified several missing security
            patches and outdated software versions.
          </p>

          <div className="mt-4 w-full">
            <div className="rounded-xl border border-gray-300 overflow-hidden bg-white w-full">
              <img
                src={"/public/screenshots/wazuh/vulns.png"}
                alt="Wazuh Vulnerability Detection Dashboard"
                className="block w-full max-w-none object-contain"
              />
            </div>
          </div>
        </section>

        {/* File Integrity Monitoring */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
            File Integrity Monitoring
          </h2>

          <p>
            Wazuh's File Integrity Monitoring (FIM) capabilities were configured to monitor
            critical system files and directories on the Domain Controller. This included
            Windows system directories, registry hives, and configuration files commonly
            used for system administration and security. Any unauthorized changes to these files would
            generate alerts for further investigation.
          </p>

          <div className="mt-4 w-full">
            <div className="rounded-xl border border-gray-300 overflow-hidden bg-white w-full">
              <img
                src={"/public/screenshots/wazuh/fim.png"}
                alt="Wazuh File Integrity Monitoring Dashboard"
                className="block w-full max-w-none object-contain"
              />
            </div>
          </div>
        </section>

        {/* Detection Engineering & Analyst Workflow */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
            Detection Engineering & Analyst Workflow
          </h2>

          <p>
            With collection and posture validated, the final phase involved exercising
            detection rules and simulating basic analyst workflows. Custom rules were authored
            to detect behaviors such as encoded PowerShell execution, LSASS credential access,
            registry persistence, and suspicious Sysmon events indicating malware-style activity.
            The Wazuh Dashboard provided an investigation surface for alert triage, host
            correlation, and IOC review—mirroring blue-team operations commonly seen within SOCs.
          </p>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold text-blue-900 mb-4">
            Conclusion
          </h2>

          <p>
            The deployment demonstrated Wazuh's capabilities as an open-source SIEM platform
            capable of ingesting enterprise telemetry, assessing security posture, driving
            compliance improvements, and supporting analyst-driven detection workflows. The
            project recreated a realistic subset of enterprise SOC functions including
            collection, detection, remediation, and validation.
          </p>
        </section>

      </div>

      <div className="h-20" />
    </section>
  );
}
