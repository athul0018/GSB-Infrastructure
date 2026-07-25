import { FormEvent, useState } from 'react';
import { send } from '@emailjs/browser';

import { companyInfo, contactOptions } from '@/data/site';
import {
  EMAILJS_PUBLIC_KEY,
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAIL_URL,
} from '@/config/envConstants';

import { ButtonLink } from '../ui/ButtonLink';

type SubmissionStatus = 'idle' | 'submitting' | 'success' | 'error';

const emailJsConfig = {
  publicKey: EMAILJS_PUBLIC_KEY,
  serviceId: EMAILJS_SERVICE_ID,
  templateId: EMAILJS_TEMPLATE_ID,
};

const isEmailJsConfigured = Object.values(emailJsConfig).every(
  (value) => typeof value === 'string' && value.trim().length > 0,
);

const getFieldValue = (formData: FormData, fieldName: string) =>
  String(formData.get(fieldName) ?? '').trim();

export function ContactBlock() {
  const [submissionStatus, setSubmissionStatus] = useState<SubmissionStatus>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState<string | null>(null);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    setSubmissionStatus('submitting');
    setFeedbackMessage(null);

    if (!isEmailJsConfigured) {
      setSubmissionStatus('error');
      setFeedbackMessage(
        'Contact form is not configured yet. Add the EmailJS environment variables to enable submissions.',
      );
      return;
    }

    try {
      const formData = new FormData(form);
      const name = getFieldValue(formData, 'name');
      const company = getFieldValue(formData, 'company');
      const email = getFieldValue(formData, 'email');
      const phone = getFieldValue(formData, 'phone');
      const message = getFieldValue(formData, 'message');

      await send(emailJsConfig.serviceId, emailJsConfig.templateId, {
        name,
        from_name: name,
        company,
        from_company: company,
        email,
        reply_to: email,
        phone,
        message,
        to_email: EMAIL_URL || companyInfo.email,
      }, {
        publicKey: emailJsConfig.publicKey,
      });

      form.reset();
      setSubmissionStatus('success');
      setFeedbackMessage(
        'Inquiry sent successfully. Our team will review your message and get back to you soon.',
      );
    } catch (error) {
      console.error('Failed to send contact form via EmailJS.', error);
      setSubmissionStatus('error');
      setFeedbackMessage(
        'We could not send your inquiry right now. Please try again or use the direct email option below.',
      );
    }
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-aqua-600">
          Contact
        </p>
        <h3 className="mt-4 font-display text-4xl leading-tight text-ink-900">
          Let's Build Your Next Project Together
        </h3>
        <p className="mt-4 text-base leading-7 text-steel-500">
          our team is ready to help
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
              autoComplete="name"
              name="name"
              required
              type="text"
            />
          </label>
          <label className="text-sm font-medium text-ink-900">
            Company
            <input
              className="mt-2 w-full rounded-md border border-steel-300 bg-cloud-50 px-4 py-3 outline-none transition focus:border-aqua-500 focus:ring-4 focus:ring-aqua-500/15"
              autoComplete="organization"
              name="company"
              type="text"
            />
          </label>
          <label className="text-sm font-medium text-ink-900">
            Email
            <input
              className="mt-2 w-full rounded-md border border-steel-300 bg-cloud-50 px-4 py-3 outline-none transition focus:border-aqua-500 focus:ring-4 focus:ring-aqua-500/15"
              autoComplete="email"
              name="email"
              required
              type="email"
            />
          </label>
          <label className="text-sm font-medium text-ink-900">
            Phone
            <input
              className="mt-2 w-full rounded-md border border-steel-300 bg-cloud-50 px-4 py-3 outline-none transition focus:border-aqua-500 focus:ring-4 focus:ring-aqua-500/15"
              autoComplete="tel"
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
            rows={6}
            required
          />
        </label>

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center">
          <button
            className="inline-flex items-center justify-center rounded-md bg-ink-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-aqua-600 disabled:cursor-not-allowed disabled:opacity-70"
            disabled={submissionStatus === 'submitting'}
            type="submit"
          >
            {submissionStatus === 'submitting' ? 'Sending...' : 'Send Inquiry'}
          </button>
          <ButtonLink href={`mailto:${companyInfo.email}`} label="Email Directly" variant="secondary" />
        </div>

        {feedbackMessage ? (
          <p
            aria-live="polite"
            className={`mt-4 rounded-xl px-4 py-3 text-sm ${
              submissionStatus === 'success'
                ? 'bg-aqua-500/10 text-aqua-600'
                : 'bg-red-500/10 text-red-700'
            }`}
            role={submissionStatus === 'error' ? 'alert' : 'status'}
          >
            {feedbackMessage}
          </p>
        ) : null}
      </form>
    </div>
  );
}
