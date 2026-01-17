import pfSense from "/screenshots/proxmoxlab/pfSense.png";
import wazuh from "/screenshots/proxmoxlab/wazuh.png";
import ms2 from "/screenshots/proxmoxlab/ms2.png";
import windc from "/screenshots/proxmoxlab/windc.png";
import portainer from "/screenshots/proxmoxlab/portainer.png";

import {
  SiProxmox,
  SiPfsense,
  SiTailscale,
  SiDocker,
  SiKalilinux
} from "react-icons/si";

import {
  MdSecurity,
  MdBugReport,
  MdOutlineSensorOccupied,
} from "react-icons/md";

import { FaWindows } from "react-icons/fa";
import { GiTargetArrows } from "react-icons/gi";

import CodeRef from "../CodeRef";

import { Link } from "react-router-dom";

export default function ProxmoxHomelab() {
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
        Proxmox Security Homelab
      </h1>

      <p className="font-mono text-sm text-blue-700 mt-2 mb-12">
        Proxmox VE · pfSense · VLAN Segmentation · SIEM · Detection Engineering
      </p>

      <div className="space-y-16 leading-relaxed">

        {/* Overview */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-900">
            Overview
          </h2>

          <p className="text-gray-700 text-lg">
            This project outlines a cybersecurity homelab built on Proxmox
            designed to gain hands-on experience with core cybersecurity
            concepts. This includes virtualization, network segmentation,
            vulnerability management, device patching, adversary emulation, and
            centralized detection.
          </p>
        </section>


        {/* Tools Used */}
        <section className="mt-14">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-900">
            Tools Used
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Column 1: Infrastructure */}
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                Infrastructure & Networking
              </h3>

              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-center gap-3">
                  <SiProxmox className="text-orange-600 w-6 h-6 shrink-0" />
                  <span><span className="font-semibold">Proxmox VE</span> — Virtualization & orchestration</span>
                </li>

                <li className="flex items-center gap-3">
                  <SiPfsense className="text-gray-700 w-6 h-6 shrink-0" />
                  <span><span className="font-semibold">pfSense</span> — Firewalling, routing & VLAN segmentation</span>
                </li>

                <li className="flex items-center gap-3">
                  <SiTailscale className="text-blue-700 w-6 h-6 shrink-0" />
                  <span><span className="font-semibold">Tailscale</span> — Zero Trust remote access</span>
                </li>

                <li className="flex items-center gap-3">
                  <FaWindows className="text-blue-500 w-6 h-6 shrink-0" />
                  <span><span className="font-semibold">Windows Server</span> — AD DS, DNS & DHCP</span>
                </li>

                <li className="flex items-center gap-3">
                  <SiDocker className="text-blue-600 w-6 h-6 shrink-0" />
                  <span><span className="font-semibold">Docker</span> — Containerized lab workloads & services</span>
                </li>
              </ul>
            </div>

            {/* Column 2: Security Tooling */}
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                Security & Detection Stack
              </h3>

              <ul className="space-y-3 text-gray-700 text-lg">
                <li className="flex items-center gap-3">
                  <MdSecurity className="text-purple-700 w-6 h-6 shrink-0" />
                  <span><span className="font-semibold">Wazuh</span> — SIEM / EDR / Log aggregation</span>
                </li>

                <li className="flex items-center gap-3">
                  <MdOutlineSensorOccupied className="text-red-700 w-6 h-6 shrink-0" />
                  <span><span className="font-semibold">Security Onion</span> — Network IDS & full packet capture</span>
                </li>

                <li className="flex items-center gap-3">
                  <MdBugReport className="text-green-600 w-6 h-6 shrink-0" />
                  <span><span className="font-semibold">Nessus</span> — Vulnerability scanning</span>
                </li>

                <li className="flex items-center gap-3">
                  <GiTargetArrows className="text-orange-600 w-6 h-6 shrink-0" />
                  <span><span className="font-semibold">Caldera</span> — Adversary emulation (MITRE ATT&CK)</span>
                </li>

                <li className="flex items-center gap-3">
                  <SiKalilinux className="text-gray-800 w-6 h-6 shrink-0" />
                  <span><span className="font-semibold">Kali Linux</span> — Management & jumpbox</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-blue-900">
            High-Level Architecture
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

            {/* Image */}
            <div className="flex justify-center">
              <div className="inline-block rounded-xl border border-gray-300 overflow-hidden p-3 bg-white">
                <img
                  src="/thumbnails/homelab.jpg"
                  alt="Homelab Architecture"
                  className="block w-full max-w-md object-contain"
                />
              </div>
            </div>

            {/* Text */}
            <div className="space-y-3 pl-4 border-l-2 border-blue-200">
              <p><span className="font-mono text-blue-700">Proxmox VE</span>: Virtualization platform hosting all nodes and lab workloads with network bridging, VM isolation, snapshots, and ZFS storage.</p>
              <p><span className="font-mono text-blue-700">pfSense Firewall</span>: Central router and security layer enforcing VLAN boundaries, NAT, and inter-VLAN policy. Configured firewall rules for inter-VLAN communication.</p>
              <p><span className="font-mono text-blue-700">Tailscale</span>: Zero-trust VPN for remote access without port forwarding or public exposure. Configured through pfSense for individual lab access.</p>
              <p><span className="font-mono text-blue-700">VLAN Structure</span>: Separate VLANs for management, vulnerable/victim machines, Windows Active Directory, and containerized services.</p>
            </div>

          </div>
        </section>

        {/* Network Segmmentation */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-900">
            Network Design & Remote Access
          </h2>

          <div className="mt-4 w-full">
            <div className="rounded-xl border border-gray-300 overflow-hidden bg-white w-full">
              <img
                src={pfSense}
                alt="Network Segmentation Diagram"
                className="block w-full max-w-none object-contain"
              />
            </div>
          </div>

          <p className="text-gray-700 text-lg">
            Network segmentation is implemented using Proxmox and pfSense for VLAN configurations 
            and routing. Proxmox bridges vmbr0 and vmbr1 are configured as WAN and LAN interfaces
            respectively. The pfSense VM is connected to both bridges, acting as the central firewall
            and router for the lab.
            <br></br><br></br>
            VLANs have been segmented into the following subnets, each with specific roles: <CodeRef>VLAN1(10.10.1.254/24)</CodeRef>
            for management, <CodeRef>VLAN10(10.10.10.254/24)</CodeRef> for vulnerable machines, <CodeRef>VLAN20(10.10.20.254/24)</CodeRef> for Windows AD,
            and <CodeRef>VLAN30(10.10.30.254/24)</CodeRef> for containerized services. Inter-VLAN routing is strictly controlled via pfSense firewall rules to
            enforce security boundaries.
          </p>
        </section>

        {/* Management Tools */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-900">
            Management Subnet
          </h2>

          <p className="text-gray-700 text-lg">
            A dedicated management VLAN was established to host lab adminstration and 
            security emulation tools. This subnet provides a secure environment for monitoring,
            logging, and configuration tasks without exposing critical services to vulnerable
            or untrusted networks.
          </p>

          <p className="text-gray-700 text-lg mt-4">
            The first VM in this subnet is a Kali Linux jumpbox for SSH and GUI access to other
            lab machines. For the emulation of blue team operations, Nesssus vulnerability
            scanner, Wazuh SIEM server, and Security Onion IDS/NSM platform were deployed. As for red team
            operations, MITRE Caldera was installed to facilitate adversary emulation and attack simulation.
          </p>

          <div className="mt-4 w-full">
            <div className="rounded-xl border border-gray-300 overflow-hidden bg-white w-full">
              <img
                src={wazuh}
                alt="Kali Linux Wazuh interface"
                className="block w-full max-w-none object-contain"
              />
            </div>
          </div>
        </section>

        {/* Vulnerable Machines */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-900">
            Vulnerable Machines Subnet
          </h2>

          <p className="text-gray-700 text-lg">
            A dedicated vulnerable environment was created to support repeatable
            exploitation and detection testing. This includes both legacy-style
            virtual machines and modern containerized web applications.
          </p>

          <p className="text-gray-700 text-lg mt-4">
            Metasploitable2 was deployed as a standalone VM by converting its disk
            image into a Proxmox-compatible format and attaching it directly to a
            virtual machine. This mirrors how legacy systems often appear in real
            environments and avoids abstracting away operational complexity.
          </p>

          <div className="mt-4 w-full">
            <div className="rounded-xl border border-gray-300 overflow-hidden bg-white w-full">
              <img
                src={ms2}
                alt="Metasploitable2 Login Screen"
                className="block w-full max-w-none object-contain"
              />
            </div>
          </div>
        </section>

        {/* Vulnerable Targets */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-900">
            Windows Active Directory Subnet
          </h2>

          <p className="text-gray-700 text-lg">
            A dedicated vulnerable environment was created to support repeatable
            exploitation and detection testing. This includes both legacy-style
            virtual machines and modern containerized web applications.
          </p>

          <p className="text-gray-700 text-lg mt-4">
            Metasploitable2 was deployed as a standalone VM by converting its disk
            image into a Proxmox-compatible format and attaching it directly to a
            virtual machine. This mirrors how legacy systems often appear in real
            environments and avoids abstracting away operational complexity.
          </p>

          <p className="text-gray-700 text-lg mt-4">
            In parallel, intentionally vulnerable applications such as DVWA,
            BWAPP, and WebGoat were deployed as Docker containers. Rather than
            exposing them through shared host ports, a macvlan-based networking
            model was implemented so each container receives its own IP address
            within the VLAN.
          </p>

          <div className="mt-4 w-full">
            <div className="rounded-xl border border-gray-300 overflow-hidden bg-white w-full">
              <img
                src={windc}
                alt="Windows Domain Controller"
                className="block w-full max-w-none object-contain"
              />
            </div>
          </div>
        </section>

        {/* Containerized Services */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-900">
            Containerized Services Subnet
          </h2>

          <p className="text-gray-700 text-lg">
            Traditional Docker bridge networking obscures container visibility
            by hiding services behind a single host IP. To preserve realistic
            network monitoring and vulnerability scanning, macvlan networking
            was implemented.
          </p>

          <p className="text-gray-700 text-lg mt-4">
            Each container is treated as a first-class network host, allowing
            tools such as Nessus, Wazuh, and Security Onion to discover, scan,
            and attribute activity at the individual service level. This design
            decision significantly improves realism and supports enterprise-grade
            detection workflows.
          </p>

          <div className="mt-4 w-full">
            <div className="rounded-xl border border-gray-300 overflow-hidden bg-white w-full">
              <img
                src={portainer}
                alt="Portainer Dashboard"
                className="block w-full max-w-none object-contain"
              />
            </div>
          </div>
        </section>

        {/* Conclusion */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-900">
            Conclusion
          </h2>

          <p className="text-gray-700 text-lg">
            This Proxmox-based homelab is a fully integrated security environment
            designed to mirror enterprise SOC and research workflows. By combining
            segmentation, adversary emulation, vulnerability management, and
            centralized detection, the lab enables realistic experimentation
            across the full attack lifecycle.
          </p>

          <p className="text-gray-700 text-lg mt-4">
            The platform serves as both a technical learning environment and a
            long-term foundation for detection engineering, threat hunting, and
            security research.
          </p>
        </section>

      </div>

      <div className="h-20" />
    </section>
  );
}
