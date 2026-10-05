export default function Credibility() {
  return (
    <section className="border-t border-[color:var(--color-rule)] bg-[color:var(--color-ivory-soft)] py-20 md:py-24">
      <div className="container-editorial">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <p className="eyebrow">Considering Therapy?</p>
            <h2 className="font-display mt-5 text-[1.9rem] font-light leading-[1.15] tracking-tight text-[color:var(--color-ink)] md:text-[2.3rem] lg:text-[2.6rem]">
              Take your time deciding if this feels like the right fit.
            </h2>
            <p className="mt-6 max-w-xl text-[1rem] leading-[1.75] text-[color:var(--color-ink-soft)] md:text-[1.02rem]">
              Choosing a therapist is a personal decision. Take some time to
              learn about my approach and decide whether it feels like the right
              fit for you.
            </p>
          </div>

          <div className="md:col-span-5 md:border-l md:border-[color:var(--color-rule)] md:pl-10 lg:pl-14">
            <p className="text-[0.78rem] tracking-[0.2em] uppercase text-[color:var(--color-ink-mute)]">
              Psychology Today Profile
            </p>
            <p className="mt-4 text-[0.95rem] leading-[1.65] text-[color:var(--color-ink-soft)]">
              You can read more about my background and practice on Psychology
              Today.
            </p>
            <div className="mt-7">
              <a
                href="[Psychology Today URL]"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                View My Psychology Today Profile
                <span aria-hidden>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
