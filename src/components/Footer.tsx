const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Couples", href: "#couples" },
  { label: "Individuals", href: "#individuals" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[color:var(--color-rule)] bg-[color:var(--color-ivory)]">
      <div className="container-editorial py-14 md:py-16">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <a
              href="#home"
              className="font-display text-[1.25rem] font-medium tracking-tight text-[color:var(--color-ink)]"
            >
              Carol Therapy
            </a>
            <p className="mt-4 max-w-sm text-[0.95rem] leading-[1.7] text-[color:var(--color-ink-soft)]">
              Therapy for couples and individuals navigating life&apos;s
              challenges.
            </p>
          </div>

          {/* Nav */}
          <div className="md:col-span-4">
            <p className="text-[0.75rem] tracking-[0.2em] uppercase text-[color:var(--color-ink-mute)]">
              Navigate
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3 md:grid-cols-2 lg:grid-cols-3">
              {footerLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[0.92rem] text-[color:var(--color-ink)] transition-colors hover:text-[color:var(--color-sage-deep)]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Elsewhere */}
          <div className="md:col-span-3">
            <p className="text-[0.75rem] tracking-[0.2em] uppercase text-[color:var(--color-ink-mute)]">
              Elsewhere
            </p>
            <ul className="mt-4 space-y-3">
              <li>
                <a
                  href="[Psychology Today URL]"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.92rem] text-[color:var(--color-ink)] transition-colors hover:text-[color:var(--color-sage-deep)]"
                >
                  Psychology Today
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-[0.92rem] text-[color:var(--color-ink)] transition-colors hover:text-[color:var(--color-sage-deep)]"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-[color:var(--color-rule)] pt-6 text-[0.8rem] text-[color:var(--color-ink-mute)] sm:flex-row sm:items-center">
          <p>© {year} Carol Therapy. All rights reserved.</p>
          <p>
            Website concept — placeholders to be replaced with your own content.
          </p>
        </div>
      </div>
    </footer>
  );
}
