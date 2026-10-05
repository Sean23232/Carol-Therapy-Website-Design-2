export default function Hero() {
  return (
    <section id="home" className="relative">
      <div className="container-editorial pt-14 pb-16 md:pt-20 md:pb-24 lg:pt-24 lg:pb-28">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Copy */}
          <div className="order-2 lg:order-1 lg:col-span-6">
            <p className="eyebrow soft-rise">Therapy for Couples &amp; Individuals</p>
            <h1 className="font-display mt-6 text-[2.4rem] font-light leading-[1.08] tracking-tight text-[color:var(--color-ink)] soft-rise-2 sm:text-[3rem] md:text-[3.4rem] lg:text-[3.6rem]">
              Support for where you are
              <span className="text-[color:var(--color-ink-mute)]"> — </span>
              and where you want to go.
            </h1>
            <p className="mt-7 max-w-[36rem] text-[1.05rem] leading-[1.7] text-[color:var(--color-ink-soft)] soft-rise-3">
              Life and relationships can become complicated. Therapy can offer a
              thoughtful, supportive space to understand what you&apos;re
              experiencing, work through challenges, and move toward meaningful
              change.
            </p>

            <div className="mt-10 flex flex-col items-start gap-5 sm:flex-row sm:items-center soft-rise-3">
              <a href="#contact" className="btn-primary">
                Get Started
              </a>
              <a href="#approach" className="link-arrow">
                Learn More About My Approach
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="order-1 lg:order-2 lg:col-span-6">
            <div className="relative">
              <div className="aspect-[4/5] w-full overflow-hidden bg-[color:var(--color-cream)]">
                <img
                  src="/images/hero-portrait.jpg"
                  alt="Portrait of the therapist"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
              {/* Subtle caption — editorial touch */}
              <p className="mt-4 text-[0.78rem] tracking-wide text-[color:var(--color-ink-mute)]">
                Carol, in her practice.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Hairline rule */}
      <div className="container-editorial">
        <div className="h-px w-full bg-[color:var(--color-rule)]" />
      </div>
    </section>
  );
}
