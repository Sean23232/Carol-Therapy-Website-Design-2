export default function FinalCTA() {
  return (
    <section className="bg-[color:var(--color-ink)] py-20 text-[color:var(--color-ivory)] md:py-28">
      <div className="container-editorial">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[0.72rem] tracking-[0.22em] uppercase text-[color:var(--color-stone)]">
            A Note
          </p>
          <h2 className="font-display mt-6 text-[2.1rem] font-light leading-[1.15] tracking-tight md:text-[2.7rem] lg:text-[3.1rem]">
            You don&apos;t have to figure it all out alone.
          </h2>
          <p className="mx-auto mt-7 max-w-xl text-[1.02rem] leading-[1.7] text-[color:var(--color-stone)]">
            If you&apos;re considering therapy for yourself or your relationship,
            I welcome you to reach out and start a conversation.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-[2px] bg-[color:var(--color-ivory)] px-7 py-4 text-[0.9rem] font-medium tracking-wide text-[color:var(--color-ink)] transition-colors hover:bg-[color:var(--color-cream)]"
            >
              Get in Touch
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-[2px] border border-[color:var(--color-stone-deep)] px-7 py-4 text-[0.9rem] font-medium tracking-wide text-[color:var(--color-ivory)] transition-colors hover:border-[color:var(--color-ivory)]"
            >
              Book a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
