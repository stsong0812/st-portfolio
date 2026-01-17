export default function Navbar() {
  const links = [
    { href: "/#home", label: "Home" },
    { href: "/#experience", label: "Experience" },
    { href: "/#projects", label: "Projects" },
    { href: "/#skills", label: "Skills" },
    { href: "/#education", label: "Education" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <header
      className="
        fixed top-0 left-0 w-full z-50
        bg-blue-600
        backdrop-blur-md
        shadow-[0_0_25px_rgba(37,99,235,0.8)]
      "
    >
      <nav className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Name */}
        <span className="text-white font-semibold tracking-tight text-lg">
          Steven Song
        </span>

        {/* Links */}
        <div className="hidden md:flex gap-6 text-sm text-white/90">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="
                relative group
                hover:text-white transition-colors
              "
            >
              {link.label}

              {/* Hover underline */}
              <span
                className="
                  absolute left-0 -bottom-1 h-px w-0
                  bg-white
                  group-hover:w-full transition-all duration-200
                "
              />
            </a>
          ))}
        </div>

      </nav>
    </header>
  );
}
