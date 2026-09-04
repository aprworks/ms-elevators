"use client";

import { useState, type FormEvent } from "react";
import { business } from "@/lib/content";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = [
      `Hi ${business.name}, I'd like to get in touch.`,
      name && `Name: ${name}`,
      phone && `Phone: ${phone}`,
      message && `Message: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-slate-700">
          Name
        </label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
        />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-slate-700">
          Phone Number
        </label>
        <input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700">
          What do you need help with?
        </label>
        <textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
          className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-amber-500 focus:outline-none focus:ring-1 focus:ring-amber-500"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded-md bg-amber-500 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition-colors hover:bg-amber-400"
      >
        Send via WhatsApp
      </button>
    </form>
  );
}
