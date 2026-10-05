import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Couples", href: "#couples" },
  { label: "Individuals", href: "#individuals" },
  { label: "How I Can Help", href: "#approach" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-colors duration-300 ${
        scrolled
          ? "bg-[color:var(--color-ivory)]/90 backdrop-blur supports-[backdrop-filter]:bg-[color:var(--color-ivory)]/80 border-b border-[color:var(--color-rule)]"
          : "bg-[color:var(--color-ivory)]"
      }`}
    >
      <div className="container-editorial flex h-16 items-center justify-between md:h-20">
        {/* Logo / Practice name */}
        <a
          href="#home"
          className="font-display text-[1.15rem] font-medium tracking-tight text-[color:var(--color-ink)] md:text-[1.25rem]"
          aria-label="Home"
        >
          Carol Therapy
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.88rem] font-normal text-[color:var(--color-ink-soft)] transition-colors hover:text-[color:var(--color-ink)]"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a href="#contact" className="btn-primary">
            Get in Touch
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="relative inline-flex h-10 w-10 items-center justify-center lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <span
            className={`absolute h-px w-6 bg-[color:var(--color-ink)] transition-transform duration-300 ${
              open ? "translate-y-0 rotate-45" : "-translate-y-1.5"
            }`}
          />
          <span
            className={`absolute h-px w-6 bg-[color:var(--color-ink)] transition-transform duration-300 ${
              open ? "translate-y-0 -rotate-45" : "translate-y-1.5"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden border-t border-[color:var(--color-rule)] bg-[color:var(--color-ivory)] transition-[max-height,opacity] duration-300 ease-out ${
          open ? "max-h-[80vh] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="container-editorial flex flex-col gap-1 py-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-[color:var(--color-rule)] py-4 text-[1rem] text-[color:var(--color-ink)] last:border-b-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary mt-6"
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
}
