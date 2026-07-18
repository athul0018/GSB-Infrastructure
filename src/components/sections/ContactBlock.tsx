import { FormEvent, useState } from 'react';

import { companyInfo, contactOptions } from '@/data/site';

import { ButtonLink } from '../ui/ButtonLink';

export function ContactBlock() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-aqua-600">
          Contact
        </p>
        <h3 className="mt-4 font-display text-4xl leading-tight text-ink-900">
          Let’s discuss your next infrastructure requirement.
        </h3>
        <p className="mt-4 text-base leading-7 text-steel-500">
          This contact flow is ready for later backend or CRM integration. For now, the direct
          phone and email actions are live and the form demonstrates the intended inquiry
          experience.
        </p>

        <div className="mt-8 space-y-4">
          {contactOptions.map((option) => (
            <a
              key={option.label}
              className="block rounded-2xl border border-steel-300/60 bg-white px-5 py-4 text-sm text-ink-900 shadow-soft transition hover:-translate-y-1 hover:shadow-card"
              href={option.href}
            >
              <span className="block text-xs font-semibold uppercase tracking-[0.24em] text-aqua-600">
                {option.label}
              </span>
              <span className="mt-2 block">{option.value}</span>
            </a>
          ))}
          <div className="rounded-2xl border border-steel-300/60 bg-mist-100 px-5 py-4 text-sm leading-7 text-ink-900">
            {companyInfo.address}
          </div>
        </div>
      </div>

      <form
        className="rounded-[28px] border border-steel-300/60 bg-white p-6 shadow-card sm:p-8"
        onSubmit={handleSubmit}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <label className="text-sm font-medium text-ink-900">
            Name
            <input
              className="mt-2 w-full rounded-md border border-steel-300 bg-cloud-50 px-4 py-3 outline-none transition focus:border-aqua-500 focus:ring-4 focus:ring-aqua-500/15"
              name="name"
              required
              type="text"
            />
          </label>
          <label className="text-sm font-medium text-ink-900">
            Company
            <input
              className="mt-2 w-full rounded-md border border-steel-300 bg-cloud-50 px-4 py-3 outline-none transition focus:border-aqua-500 focus:ring-4 focus:ring-aqua-500/15"
              name="company"
              type="text"
            />
          </label>
          <label className="text-sm font-medium text-ink-900">
            Email
            <input
              className="mt-2 w-full rounded-md border border-steel-300 bg-cloud-50 px-4 py-3 outline-none transition focus:border-aqua-500 focus:ring-4 focus:ring-aqua-500/15"
              name="email"
              required
              type="email"
            />
          </label>
          <label className="text-sm font-medium text-ink-900">
            Phone
            <input
              className="mt-2 w-full rounded-md border border-steel-300 bg-cloud-50 px-4 py-3 outline-none transition focus:border-aqua-500 focus:ring-4 focus:ring-aqua-500/15"
              name="phone"
              type="tel"
            />
          </label>
        </div>
        <label className="mt-5 block text-sm font-medium text-ink-900">
          Message
          <textarea
            className="mt-2 min-h-36 w-full rounded-md border border-steel-300 bg-cloud-50 px-4 py-3 outline-none transition focus:border-aqua-500 focus:ring-4 focus:ring-aqua-500/15"
            name="message"
            required
          />
        </label>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <button
            className="inline-flex items-center justify-center rounded-md bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-aqua-600"
            type="submit"
          >
            Send Inquiry
          </button>
          <ButtonLink href={`mailto:${companyInfo.email}`} label="Email Directly" variant="secondary" />
        </div>

        {submitted ? (
          <p className="mt-4 rounded-xl bg-aqua-500/10 px-4 py-3 text-sm text-aqua-600">
            Inquiry received. Connect this form to email or CRM in the final integration phase.
          </p>
        ) : null}
      </form>
    </div>
  );
}
