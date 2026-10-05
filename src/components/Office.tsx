export default function Office() {
  return (
    <section className="border-t border-[color:var(--color-rule)] bg-[color:var(--color-cream)]/60 py-20 md:py-28">
      <div className="container-editorial">
        <div className="grid grid-cols-1 items-end gap-10 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <p className="eyebrow">The Space</p>
            <h2 className="font-display mt-5 text-[2rem] font-light leading-[1.12] tracking-tight text-[color:var(--color-ink)] md:text-[2.5rem] lg:text-[2.85rem]">
              A comfortable place to begin.
            </h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-[1rem] leading-[1.75] text-[color:var(--color-ink-soft)] md:text-[1.02rem]">
              Therapy is personal. The environment should feel comfortable,
              private, and welcoming.
            </p>
          </div>
        </div>

        {/* Image grid — asymmetric, editorial */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-12 md:gap-6">
          {/* Main office image — large */}
          <div className="md:col-span-7">
            <div className="aspect-[4/3] w-full overflow-hidden bg-[color:var(--color-stone)]">
              <img
                src="/images/office-main.jpg"
                alt="The therapy office"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Right column: stacked detail + secondary */}
          <div className="grid grid-cols-2 gap-4 md:col-span-5 md:grid-cols-1 md:gap-6">
            <div className="aspect-square w-full overflow-hidden bg-[color:var(--color-stone)] md:aspect-[4/3]">
              <img
                src="/images/office-detail.jpg"
                alt="A small detail inside the office"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="aspect-square w-full overflow-hidden bg-[color:var(--color-stone)] md:aspect-[4/3]">
              <img
                src="/images/office-secondary.jpg"
                alt="Another view of the office"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        {/* Small caption */}
        <p className="mt-6 text-[0.78rem] tracking-wide text-[color:var(--color-ink-mute)]">
          Photographs of the office at [Office Location].
        </p>
      </div>
    </section>
  );
}
