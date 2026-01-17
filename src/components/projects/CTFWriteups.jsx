import { Link } from "react-router-dom";

export default function CTFWriteups() {
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
        CTF Writeups
      </h1>

      <p className="font-mono text-sm text-blue-700 mt-2 mb-12">
        OverTheWire · PicoCTF · Web · Crypto · Reverse Engineering · Forensics
      </p>

      {/* Content */}
      <div className="space-y-12 leading-relaxed">

        {/* Overview */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-900">
            Overview
          </h2>

          <p className="text-gray-700 text-lg">
            This page contains a curated collection of Capture The Flag (CTF)
            writeups completed across multiple platforms. These challenges span
            a wide range of cybersecurity domains, including web exploitation,
            cryptography, reverse engineering, forensics, and general Linux
            fundamentals. Each writeup documents the problem-solving process,
            tools used, and technical concepts applied.
          </p>
        </section>

        {/* OverTheWire */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-900">
            OverTheWire
          </h2>

          <p className="text-gray-700 text-lg mb-6">
            OverTheWire is a series of war games focused on foundational security
            concepts, Linux internals, scripting, and exploitation fundamentals.
            These challenges emphasize command-line proficiency and analytical
            problem-solving over tooling.
          </p>

          <ul className="space-y-4">
            {[
              ["Bandit", "33", "https://stevens-notes.gitbook.io/overthewire-writeups-1"],
              ["Natas", "19", "https://stevens-notes.gitbook.io/overthewire-writeups-1/overthewire-natas"],
              ["Leviathan", "9", "https://stevens-notes.gitbook.io/overthewire-writeups-1/overthewire-leviathan"],
              ["Krypton", "7", "https://stevens-notes.gitbook.io/overthewire-writeups-1/overthewire-krypton"],
            ].map(([name, count, link]) => (
              <li key={name}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-between
                    rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm
                    cursor-pointer transition
                    hover:border-blue-300 hover:bg-blue-50 hover:shadow-md
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                  "
                >
                  <span className="text-lg font-semibold text-blue-800">
                    {name}{" "}
                    <span className="text-gray-500 font-normal">
                      ({count})
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* PicoCTF */}
        <section>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-900">
            PicoCTF
          </h2>

          <p className="text-gray-700 text-lg mb-6">
            PicoCTF is a competitive CTF platform designed to introduce and
            reinforce practical cybersecurity skills through hands-on challenges.
            The problems cover a broad spectrum of real-world attack and defense
            techniques commonly encountered in security research and incident
            response.
          </p>

          <ul className="space-y-4">
            {[
              ["General Skills", "40", "https://stevens-notes.gitbook.io/picoctf-writeups-1"],
              ["Web Exploitation", "52", "https://stevens-notes.gitbook.io/picoctf-writeups-1/picoctf-web-exploitation"],
              ["Cryptography", "15", "https://stevens-notes.gitbook.io/picoctf-writeups-1/picoctf-cryptography"],
              ["Reverse Engineering", "15", "https://stevens-notes.gitbook.io/picoctf-writeups-1/picoctf-reverse-engineering"],
              ["Forensics", "17", "https://stevens-notes.gitbook.io/picoctf-writeups-1/picoctf-forensics"],
            ].map(([name, count, link]) => (
              <li key={name}>
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    flex items-center justify-between
                    rounded-xl border border-gray-200 bg-white px-6 py-4 shadow-sm
                    cursor-pointer transition
                    hover:border-blue-300 hover:bg-blue-50 hover:shadow-md
                    focus:outline-none focus:ring-2 focus:ring-blue-500
                  "
                >
                  <span className="text-lg font-semibold text-blue-800">
                    {name}{" "}
                    <span className="text-gray-500 font-normal">
                      ({count})
                    </span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

      </div>

      {/* Spacer */}
      <div className="h-20" />
    </section>
  );
}
