import { useState, type FormEvent } from "react";

const interestOptions = [
  "Couples Therapy",
  "Individual Therapy",
  "Not Sure Yet",
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Please share your name.";
    if (!form.email.trim()) next.email = "Please share your email.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      next.email = "Please enter a valid email.";
    if (!form.interest) next.interest = "Please choose an option.";
    if (!form.message.trim()) next.message = "Please include a short message.";
    return next;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length === 0) {
      setSubmitted(true);
    }
  };

  const onChange = (field: string, value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: "" }));
  };

  return (
    <section id="contact" className="scroll-mt-20 py-20 md:py-28">
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-14 md:grid-cols-12 md:gap-16">
          {/* Left: intro & contact info */}
          <div className="md:col-span-5">
            <p className="eyebrow">Contact</p>
            <h2 className="font-display mt-5 text-[2rem] font-light leading-[1.12] tracking-tight text-[color:var(--color-ink)] md:text-[2.4rem] lg:text-[2.6rem]">
              Let&apos;s connect.
            </h2>
            <p className="mt-6 text-[1rem] leading-[1.75] text-[color:var(--color-ink-soft)] md:text-[1.02rem]">
              Feel free to reach out with questions or to schedule a brief
              consultation. I typically respond within one to two business days.
            </p>

            <dl className="mt-10 space-y-6 border-t border-[color:var(--color-rule)] pt-8 text-[0.95rem]">
              <div className="flex items-start gap-4">
                <dt className="w-24 shrink-0 text-[0.75rem] tracking-[0.2em] uppercase text-[color:var(--color-ink-mute)] pt-0.5">
                  Email
                </dt>
                <dd className="text-[color:var(--color-ink)]">
                  <a href="mailto:[Email]" className="link-arrow" style={{ borderBottomColor: "var(--color-rule)" }}>
                    [Email]
                    <span aria-hidden>→</span>
                  </a>
                </dd>
              </div>
              <div className="flex items-start gap-4">
                <dt className="w-24 shrink-0 text-[0.75rem] tracking-[0.2em] uppercase text-[color:var(--color-ink-mute)] pt-0.5">
                  Phone
                </dt>
                <dd className="text-[color:var(--color-ink)]">
                  <a href="tel:[Phone]" className="link-arrow" style={{ borderBottomColor: "var(--color-rule)" }}>
                    [Phone]
                    <span aria-hidden>→</span>
                  </a>
                </dd>
              </div>
              <div className="flex items-start gap-4">
                <dt className="w-24 shrink-0 text-[0.75rem] tracking-[0.2em] uppercase text-[color:var(--color-ink-mute)] pt-0.5">
                  Office
                </dt>
                <dd className="text-[color:var(--color-ink)]">
                  [Office Location]
                </dd>
              </div>
              <div className="flex items-start gap-4">
                <dt className="w-24 shrink-0 text-[0.75rem] tracking-[0.2em] uppercase text-[color:var(--color-ink-mute)] pt-0.5">
                  Hours
                </dt>
                <dd className="text-[color:var(--color-ink)]">
                  [Session Availability]
                </dd>
              </div>
            </dl>
          </div>

          {/* Right: form */}
          <div className="md:col-span-7">
            {submitted ? (
              <div className="border border-[color:var(--color-rule)] bg-[color:var(--color-ivory-soft)] p-10 text-center">
                <p className="eyebrow">Thank you</p>
                <h3 className="font-display mt-4 text-[1.6rem] font-normal leading-[1.25] tracking-tight">
                  Your message has been received.
                </h3>
                <p className="mt-4 text-[color:var(--color-ink-soft)]">
                  I&apos;ll be in touch within one to two business days.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", email: "", phone: "", interest: "", message: "" });
                  }}
                  className="link-arrow mt-7"
                >
                  Send another message
                  <span aria-hidden>→</span>
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="grid grid-cols-1 gap-8 sm:grid-cols-2"
              >
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="text-[0.75rem] tracking-[0.2em] uppercase text-[color:var(--color-ink-mute)]">
                    Name <span aria-hidden>*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    className="form-input"
                    placeholder="Your full name"
                    value={form.name}
                    onChange={(e) => onChange("name", e.target.value)}
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="mt-2 text-[0.8rem] text-[color:var(--color-sage-deep)]">
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="email" className="text-[0.75rem] tracking-[0.2em] uppercase text-[color:var(--color-ink-mute)]">
                    Email <span aria-hidden>*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    className="form-input"
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={(e) => onChange("email", e.target.value)}
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="mt-2 text-[0.8rem] text-[color:var(--color-sage-deep)]">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="phone" className="text-[0.75rem] tracking-[0.2em] uppercase text-[color:var(--color-ink-mute)]">
                    Phone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    className="form-input"
                    placeholder="Optional"
                    value={form.phone}
                    onChange={(e) => onChange("phone", e.target.value)}
                  />
                </div>

                <div className="sm:col-span-1">
                  <label htmlFor="interest" className="text-[0.75rem] tracking-[0.2em] uppercase text-[color:var(--color-ink-mute)]">
                    I&apos;m interested in <span aria-hidden>*</span>
                  </label>
                  <div className="relative">
                    <select
                      id="interest"
                      className="form-input appearance-none pr-8"
                      value={form.interest}
                      onChange={(e) => onChange("interest", e.target.value)}
                      aria-invalid={!!errors.interest}
                    >
                      <option value="" disabled>
                        Please choose
                      </option>
                      {interestOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <svg
                      aria-hidden
                      className="pointer-events-none absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 text-[color:var(--color-ink-soft)]"
                      viewBox="0 0 12 12"
                      fill="none"
                    >
                      <path d="M2 4.5L6 8.5L10 4.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="square" />
                    </svg>
                  </div>
                  {errors.interest && (
                    <p className="mt-2 text-[0.8rem] text-[color:var(--color-sage-deep)]">
                      {errors.interest}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-[0.75rem] tracking-[0.2em] uppercase text-[color:var(--color-ink-mute)]">
                    Message <span aria-hidden>*</span>
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="form-input resize-none"
                    placeholder="A few sentences about what brings you to therapy, or anything you'd like me to know."
                    value={form.message}
                    onChange={(e) => onChange("message", e.target.value)}
                    aria-invalid={!!errors.message}
                  />
                  {errors.message && (
                    <p className="mt-2 text-[0.8rem] text-[color:var(--color-sage-deep)]">
                      {errors.message}
                    </p>
                  )}
                </div>

                <div className="sm:col-span-2 flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-[0.78rem] text-[color:var(--color-ink-mute)]">
                    All inquiries are confidential.
                  </p>
                  <button type="submit" className="btn-primary">
                    Send Message
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
