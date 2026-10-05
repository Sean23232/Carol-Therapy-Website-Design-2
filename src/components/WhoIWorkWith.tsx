export default function WhoIWorkWith() {
  return (
    <section id="how-i-help" className="border-t border-[color:var(--color-rule)] bg-[color:var(--color-ivory-soft)] py-20 md:py-28">
      <div className="container-editorial">
        {/* Section header */}
        <div className="max-w-2xl">
          <p className="eyebrow">How I Can Help</p>
          <h2 className="font-display mt-5 text-[2rem] font-light leading-[1.12] tracking-tight text-[color:var(--color-ink)] md:text-[2.5rem] lg:text-[2.85rem]">
            Different challenges call for different kinds of support.
          </h2>
        </div>

        {/* Two large content areas */}
        <div className="mt-14 grid grid-cols-1 gap-16 md:mt-20 md:grid-cols-2 md:gap-14 lg:gap-20">
          {/* Couples */}
          <div id="couples" className="scroll-mt-24">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-[0.95rem] tracking-[0.25em] text-[color:var(--color-sage-deep)]">
                I
              </span>
              <span className="eyebrow">Couples</span>
            </div>
            <h3 className="font-display mt-6 text-[1.65rem] font-normal leading-[1.18] tracking-tight text-[color:var(--color-ink)] md:text-[1.9rem]">
              Working Through Relationship Challenges
            </h3>
            <p className="mt-6 text-[1rem] leading-[1.75] text-[color:var(--color-ink-soft)] md:text-[1.02rem]">
              Relationships can bring connection and fulfillment, but they can
              also bring conflict, distance, uncertainty, and difficult
              transitions. Couples therapy provides an opportunity to slow down,
              understand each other more clearly, and work toward a healthier
              relationship.
            </p>
            <div className="mt-8">
              <a href="#contact" className="link-arrow">
                Explore Couples Therapy
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          {/* Individuals */}
          <div id="individuals" className="scroll-mt-24 md:border-l md:border-[color:var(--color-rule)] md:pl-14 lg:pl-20">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-[0.95rem] tracking-[0.25em] text-[color:var(--color-sage-deep)]">
                II
              </span>
              <span className="eyebrow">Individuals</span>
            </div>
            <h3 className="font-display mt-6 text-[1.65rem] font-normal leading-[1.18] tracking-tight text-[color:var(--color-ink)] md:text-[1.9rem]">
              Support for Life&apos;s Challenges
            </h3>
            <p className="mt-6 text-[1rem] leading-[1.75] text-[color:var(--color-ink-soft)] md:text-[1.02rem]">
              Individual therapy can provide a place to explore personal
              challenges, relationships, transitions, patterns, and the
              questions that can be difficult to navigate alone.
            </p>
            <p className="mt-4 text-[1rem] leading-[1.75] text-[color:var(--color-ink-soft)] md:text-[1.02rem]">
              Whether you&apos;re working through something difficult or hoping
              to build a healthier relationship in the future, therapy can help
              you better understand yourself and what you want.
            </p>
            <div className="mt-8">
              <a href="#contact" className="link-arrow">
                Explore Individual Therapy
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
