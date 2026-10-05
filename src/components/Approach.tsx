const steps = [
  {
    num: "01",
    title: "Start Where You Are",
    body:
      "Begin with a conversation about what brings you to therapy and what you'd like support with.",
  },
  {
    num: "02",
    title: "Understand What's Happening",
    body:
      "Together, explore the patterns, challenges, relationships, or life circumstances that may be affecting you.",
  },
  {
    num: "03",
    title: "Move Toward Change",
    body:
      "Work toward greater clarity, healthier relationships, and meaningful steps forward.",
  },
];

export default function Approach() {
  return (
    <section id="approach" className="scroll-mt-20 py-20 md:py-28">
      <div className="container-editorial">
        <div className="max-w-2xl">
          <p className="eyebrow">What You Can Expect</p>
          <h2 className="font-display mt-5 text-[2rem] font-light leading-[1.12] tracking-tight text-[color:var(--color-ink)] md:text-[2.5rem] lg:text-[2.85rem]">
            A thoughtful, steady process.
          </h2>
        </div>

        <div className="mt-14 border-t border-[color:var(--color-rule)] md:mt-20">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className={`grid grid-cols-1 gap-6 border-b border-[color:var(--color-rule)] py-10 md:grid-cols-12 md:gap-10 md:py-14 ${
                i === steps.length - 1 ? "" : ""
              }`}
            >
              <div className="md:col-span-2">
                <span className="font-display text-[0.95rem] tracking-[0.18em] text-[color:var(--color-sage-deep)]">
                  {step.num}
                </span>
              </div>
              <div className="md:col-span-4">
                <h3 className="font-display text-[1.4rem] font-normal leading-[1.2] tracking-tight text-[color:var(--color-ink)] md:text-[1.6rem]">
                  {step.title}
                </h3>
              </div>
              <div className="md:col-span-6">
                <p className="text-[1rem] leading-[1.75] text-[color:var(--color-ink-soft)] md:text-[1.02rem]">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
