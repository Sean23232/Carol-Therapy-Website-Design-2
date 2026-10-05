export default function Philosophy() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-editorial">
        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-12 md:gap-16">
          {/* Office photo */}
          <div className="md:col-span-6">
            <div className="aspect-[4/5] w-full overflow-hidden bg-[color:var(--color-cream)] md:aspect-[5/6]">
              <img
                src="/images/office-main.jpg"
                alt="A view of the therapist's office"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Copy */}
          <div className="md:col-span-6 md:pt-6 lg:pl-8">
            <p className="eyebrow">Therapy That Meets You Where You Are</p>
            <h2 className="font-display mt-5 text-[2rem] font-light leading-[1.12] tracking-tight text-[color:var(--color-ink)] md:text-[2.4rem] lg:text-[2.75rem]">
              Your experience matters.
            </h2>
            <div className="mt-7 space-y-5 text-[1rem] leading-[1.75] text-[color:var(--color-ink-soft)] md:text-[1.05rem]">
              <p>
                Whether you&apos;re navigating difficulties in a relationship,
                working through a personal challenge, or trying to understand
                what comes next, therapy can provide a space to slow down,
                reflect, and move forward with greater clarity.
              </p>
              <p>
                My approach is centered on listening carefully, understanding
                your experience, and working together toward practical and
                meaningful change.
              </p>
            </div>
            <div className="mt-9">
              <a href="#approach" className="link-arrow">
                More About My Approach
                <span aria-hidden>→</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
