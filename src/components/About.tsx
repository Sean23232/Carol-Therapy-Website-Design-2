export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-20 md:py-28">
      <div className="container-editorial">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-16">
          {/* Copy */}
          <div className="md:col-span-6 md:order-2 md:pt-6">
            <p className="eyebrow">About Carol</p>
            <h2 className="font-display mt-5 text-[2rem] font-light leading-[1.12] tracking-tight text-[color:var(--color-ink)] md:text-[2.4rem] lg:text-[2.75rem]">
              A space where you can be honest, understood, and supported.
            </h2>
            <div className="mt-7 space-y-5 text-[1rem] leading-[1.75] text-[color:var(--color-ink-soft)] md:text-[1.05rem]">
              <p>
                Beginning therapy can feel like a big step. My goal is to create
                a comfortable, respectful environment where you can talk openly
                about what&apos;s happening in your life and relationships
                without feeling judged.
              </p>
              <p>
                [Therapist bio — a short personal paragraph about who you are,
                what draws you to this work, and how you think about therapy.
                This can be adapted from your Psychology Today profile.]
              </p>
              <p>
                [Therapist credentials — degrees, licensure, and any
                specializations you&apos;d like to include.]
              </p>
            </div>
            <div className="mt-9">
              <a href="#approach" className="link-arrow">
                Learn More About Me
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>

          {/* Portrait */}
          <div className="md:col-span-6 md:order-1">
            <div className="aspect-[4/5] w-full overflow-hidden bg-[color:var(--color-cream)]">
              <img
                src="/images/about-portrait.jpg"
                alt="The therapist in her office"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
