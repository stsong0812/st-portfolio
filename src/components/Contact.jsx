import Section from "./Section";
import SectionTitle from "./SectionTitle";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <Section id="contact">
      <SectionTitle label="Contact" eyebrow="Get in touch" />

      <div className="flex justify-center">
        <div className="max-w-lg text-center space-y-6 text-gray-700">

          <p className="text-lg">
            I’m always open to discussing cybersecurity projects, research,
            internships, or full-time opportunities. Feel free to reach out
            through any of the channels below.
          </p>

          {/* Contact Methods */}
          <div className="space-y-4">

            <div className="flex items-center justify-center gap-3">
              <FaEnvelope className="text-blue-600 text-xl" />
              <a
                href="mailto:your.email@example.com"
                className="text-blue-600 hover:text-blue-800 transition"
              >
                stevensong0812@gmail.com
              </a>
            </div>

            <div className="flex items-center justify-center gap-3">
              <FaLinkedin className="text-blue-600 text-xl" />
              <a
                href="https://www.linkedin.com/in/YOUR_USERNAME"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 transition"
              >
                linkedin.com/in/stsong0812
              </a>
            </div>

          </div>

        </div>
      </div>
    </Section>
  );
}
