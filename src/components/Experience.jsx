import Section from "./Section";
import SectionTitle from "./SectionTitle";

export default function Experience() {
  const experience = [
    {
      title: "Cybersecurity Intern",
      timeframe: "Jan 2025 – May 2025",
      description:
        "Worked within a public-facing cybersecurity clinic to deliver security education, simulate real-world threats, and mentor trainees in foundational security concepts.",
      bullets: [
        "Created and delivered cybersecurity awareness presentations for older adults through the Osher Lifelong Learning Institute (OLLI), reaching 100+ participants.",
        "Designed phishing simulation scenarios and supporting educational materials to improve awareness of social engineering risks.",
        "Provided mentorship and structured training to OCCIC trainees preparing for CompTIA Security+, achieving a 100% certification pass rate.",
      ],
      tags: [
        "Cybersecurity Awareness",
        "Phishing",
        "Social Engineering",
        "Security+",
        "Public Outreach",
      ],
    },
  ];

  return (
    <Section id="experience">
      <SectionTitle
        label="Experience"
        eyebrow="Applied cybersecurity practice and public-facing security work"
      />

      {/* Timeline */}
      <div className="relative mt-16">

        {/* Vertical Line */}
        <div className="absolute left-4 top-0 h-full w-px bg-blue-200" />

        <div className="space-y-12">
          {experience.map((item) => (
            <div key={item.title} className="relative pl-12">

              {/* Timeline Dot */}
              <div
                className="
                  absolute left-0 top-6
                  w-8 h-8 rounded-full
                  bg-white border-2 border-blue-500
                  flex items-center justify-center
                "
              >
                <div className="w-3 h-3 rounded-full bg-blue-500" />
              </div>

              {/* Card */}
              <div
                className="
                  rounded-2xl bg-white border border-gray-200
                  shadow-md overflow-hidden
                  transition-all duration-300
                  hover:shadow-[0_8px_32px_rgba(0,0,0,0.18)]
                  hover:border-blue-500/60 hover:-translate-y-1
                "
              >
                <div className="p-6">

                  {/* Header */}
                  <div className="mb-3">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="font-mono text-xs text-gray-500 mt-1">
                      Orange County Cyber Innovations Clinic (OCCIC)
                    </p>
                    <p className="font-mono text-xs text-gray-500">
                      {item.timeframe}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Bullet Points */}
                  <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-600 mb-4">
                    {item.bullets.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="
                          px-2 py-0.5 rounded-full border border-blue-300/50
                          text-[0.7rem] text-blue-700
                          font-mono uppercase tracking-wide
                        "
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
