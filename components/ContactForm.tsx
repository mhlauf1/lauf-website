"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error();
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <p className="text-lg font-medium">
        Thanks for reaching out — we&apos;ll be in touch soon.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm text-foreground-secondary"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="mt-2 w-full border-b border-border bg-transparent py-3 text-lg outline-none transition-colors focus:border-foreground"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm text-foreground-secondary"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="mt-2 w-full border-b border-border bg-transparent py-3 text-lg outline-none transition-colors focus:border-foreground"
        />
      </div>
      <div>
        <label
          htmlFor="message"
          className="block text-sm text-foreground-secondary"
        >
          Tell us about your project
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="mt-2 w-full resize-none border-b border-border bg-transparent py-3 text-lg outline-none transition-colors focus:border-foreground"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-3 rounded-full bg-foreground px-8 py-4 font-mono text-[11px] tracking-wider text-background uppercase transition-colors hover:bg-foreground/80 disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </button>
      {status === "error" && (
        <p className="text-sm text-red-600">
          Something went wrong. Please try again or email us directly.
        </p>
      )}
    </form>
  );
}
