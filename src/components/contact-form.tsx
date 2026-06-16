"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = (data: FormData) => {
    const errs: Record<string, string> = {};
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;

    if (!name || name.trim().length < 2) errs.name = "Please enter your name.";
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "Please enter a valid email address.";
    if (!message || message.trim().length < 10) errs.message = "Please enter a message of at least 10 characters.";

    return errs;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const errs = validate(data);

    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const payload = {
        access_key: "YOUR_WEB3FORMS_KEY", // sign up free at web3forms.com → paste key here
        subject: `New enquiry from ${data.get("name")} — BERICO Research LLP`,
        from_name: "BERICO Research LLP Website",
        name: data.get("name"),
        email: data.get("email"),
        phone: data.get("phone") || "—",
        enquiry_subject: data.get("subject") || "—",
        message: data.get("message"),
      };

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      const json = await res.json();
      if (json.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field: string) =>
    `w-full bg-[var(--background)] border ${
      errors[field] ? "border-red-400" : "border-[var(--border)]"
    } px-4 py-3.5 font-body text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)] focus:outline-none focus:border-[var(--accent)] transition-colors duration-300`;

  return (
    <div className="bg-[var(--surface)] border border-[var(--border)] p-10 lg:p-12">
      <h2 className="font-heading text-2xl font-semibold text-[var(--text-primary)] mb-2">
        Send us a message
      </h2>
      <p className="font-body text-sm text-[var(--text-secondary)] mb-8 font-light">
        All enquiries are handled with strict confidentiality.
      </p>

      {status === "success" ? (
        <div
          role="alert"
          className="flex flex-col items-center justify-center py-16 text-center"
          aria-live="polite"
        >
          <CheckCircle size={40} strokeWidth={1.25} className="text-[var(--accent)] mb-4" />
          <h3 className="font-heading text-xl font-semibold text-[var(--text-primary)] mb-2">
            Message received
          </h3>
          <p className="font-body text-sm text-[var(--text-secondary)] font-light max-w-xs">
            Thank you for reaching out. We will be in touch at the earliest opportunity.
          </p>
          <button
            onClick={() => setStatus("idle")}
            className="mt-8 font-body text-sm text-[var(--accent)] hover:underline"
          >
            Send another message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate aria-label="Contact form">
          <div className="flex flex-col gap-5">
            {/* Name */}
            <div>
              <label htmlFor="contact-name" className="font-body text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)] font-medium block mb-2">
                Full Name <span className="text-[var(--accent)]" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                required
                placeholder="Your full name"
                className={inputClass("name")}
                aria-describedby={errors.name ? "name-error" : undefined}
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p id="name-error" role="alert" className="font-body text-xs text-red-500 mt-1.5 flex items-center gap-1">
                  <AlertCircle size={12} />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="contact-email" className="font-body text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)] font-medium block mb-2">
                Email Address <span className="text-[var(--accent)]" aria-hidden="true">*</span>
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                className={inputClass("email")}
                aria-describedby={errors.email ? "email-error" : undefined}
                aria-invalid={!!errors.email}
              />
              {errors.email && (
                <p id="email-error" role="alert" className="font-body text-xs text-red-500 mt-1.5 flex items-center gap-1">
                  <AlertCircle size={12} />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="contact-phone" className="font-body text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)] font-medium block mb-2">
                Phone Number
              </label>
              <input
                id="contact-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+91 00000 00000"
                className={inputClass("phone")}
              />
            </div>

            {/* Subject */}
            <div>
              <label htmlFor="contact-subject" className="font-body text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)] font-medium block mb-2">
                Subject
              </label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="Nature of your enquiry"
                className={inputClass("subject")}
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className="font-body text-xs uppercase tracking-[0.15em] text-[var(--text-secondary)] font-medium block mb-2">
                Message <span className="text-[var(--accent)]" aria-hidden="true">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={5}
                placeholder="Please introduce yourself and describe the nature of your enquiry..."
                className={`${inputClass("message")} resize-none`}
                aria-describedby={errors.message ? "message-error" : undefined}
                aria-invalid={!!errors.message}
              />
              {errors.message && (
                <p id="message-error" role="alert" className="font-body text-xs text-red-500 mt-1.5 flex items-center gap-1">
                  <AlertCircle size={12} />
                  {errors.message}
                </p>
              )}
            </div>

            {/* Error banner */}
            {status === "error" && (
              <div role="alert" aria-live="polite" className="flex items-center gap-2 p-4 border border-red-300 bg-red-50 dark:bg-red-900/10">
                <AlertCircle size={16} className="text-red-500 shrink-0" />
                <p className="font-body text-sm text-red-600 dark:text-red-400">
                  Something went wrong. Please try again or email us directly.
                </p>
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[var(--accent)] text-white font-body text-sm font-medium tracking-wide hover:opacity-90 transition-opacity duration-300 disabled:opacity-60 disabled:cursor-not-allowed group mt-2"
              aria-label="Send your message to BERICO Research LLP"
            >
              {status === "loading" ? (
                <>
                  <span className="w-4 h-4 border border-white/40 border-t-white rounded-full animate-spin" aria-hidden="true" />
                  Sending…
                </>
              ) : (
                <>
                  Send Message
                  <Send size={15} strokeWidth={1.5} className="group-hover:translate-x-1 transition-transform duration-300" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
