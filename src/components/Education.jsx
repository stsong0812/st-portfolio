import Section from "./Section";
import SectionTitle from "./SectionTitle";

export default function Education() {
  const professionalCerts = [
    {
      name: "CompTIA Security+",
      issuer: "CompTIA",
      date: "Aug 2024 — Aug 2028",
      logo: "/certs/secplus.svg",
    },
    {
      name: "Google Cybersecurity Certificate",
      issuer: "Google",
      date: "July 2023",
      logo: "/certs/google-cyber.svg",
    },
  ];

  return (
    <Section id="education">
      <SectionTitle
        label="Education & Certifications"
        eyebrow="Academic Credentials & Applied Training"
      />

      <div className="space-y-10 leading-relaxed">

        {/* Degree Block */}
        <div
          className="
            w-full group
            rounded-2xl bg-white border border-gray-200 shadow-md p-6
            transition-all duration-300
            hover:-translate-y-1
            hover:shadow-[0_8px_32px_rgba(0,0,0,0.16)]
            hover:border-blue-500/60
            flex gap-6 items-start
          "
        >
          <img
            src="/banners/csuf.svg"
            alt="CSUF Seal"
            className="
              w-24 h-24 rounded-full shadow-sm bg-white border border-gray-200
              transition-all duration-300
              group-hover:shadow-[0_8px_32px_rgba(0,0,0,0.16)]
              group-hover:border-blue-500/60
            "
          />

          {/* Content */}
          <div className="flex-1">
            <h3 className="text-xl font-semibold text-blue-800">
              California State University, Fullerton
            </h3>

            <p className="text-gray-700">
              B.S. Computer Science — Cybersecurity Concentration
            </p>

            <p className="text-gray-500 text-sm">Completed Fall 2025</p>

            <p className="text-sm text-gray-700 mt-4">
              <span className="font-semibold text-blue-700">Relevant Coursework:</span>{" "}
              Python Programming, File Structures & Databases, Compilers & Languages,
              Operating Systems, Front-End Engineering, Networking & Network Security,
              Software Engineering, Cybersecurity, Cloud Security, Malware Analysis
            </p>

            <p className="text-sm text-gray-700 mt-2">
              <span className="font-semibold text-blue-700">Activities:</span>{" "}
              Offensive Security Society member; participated in red/blue team cyber defense
              competitions and Capture-the-Flag events
            </p>
          </div>
        </div>

        {/* Professional Certifications */}
        <div className="grid sm:grid-cols-2 gap-8">
          {professionalCerts.map((c) => (
            <div
              key={c.name}
              className="
                w-full rounded-2xl bg-white border border-gray-200 shadow-md p-6
                flex flex-col items-center
                transition-all duration-300
                hover:-translate-y-1
                hover:shadow-[0_8px_32px_rgba(0,0,0,0.16)]
                hover:border-blue-500/60
              "
            >
              {c.logo && <img src={c.logo} className="h-14 mb-3" />}
              <p className="font-semibold text-blue-700 text-center">{c.name}</p>
              <p className="text-gray-500 text-sm">{c.issuer}</p>
              <p className="text-gray-400 text-xs mt-1">{c.date}</p>
            </div>
          ))}
        </div>

      </div>
    </Section>
  );
}
