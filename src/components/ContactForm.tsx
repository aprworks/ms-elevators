"use client";

import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { business } from "@/lib/content";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

type Errors = Partial<Record<"name" | "phone", string>>;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [submitting, setSubmitting] = useState(false);

  function validate(): Errors {
    const next: Errors = {};
    if (!name.trim()) next.name = "Please enter your name.";
    if (!/^[0-9+\s-]{7,}$/.test(phone.trim())) {
      next.phone = "Please enter a valid phone number.";
    }
    return next;
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    const text = [
      `Hi ${business.name}, I'd like to get in touch.`,
      `Name: ${name}`,
      `Phone: ${phone}`,
      message && `Message: ${message}`,
    ]
      .filter(Boolean)
      .join("\n");
    const url = `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Opening WhatsApp", {
      description: "Send the pre-filled message and we'll get back to you shortly.",
    });
    // Keep the button disabled briefly so a second click can't open duplicate WhatsApp tabs.
    setTimeout(() => setSubmitting(false), 1000);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4">
      <div className="space-y-1.5">
        <Label htmlFor="name">Name</Label>
        <Input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={Boolean(errors.name)}
          className="h-11"
        />
        {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="phone">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          aria-invalid={Boolean(errors.phone)}
          className="h-11"
        />
        {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
      </div>
      <div className="space-y-1.5">
        <Label htmlFor="message">What do you need help with?</Label>
        <Textarea
          id="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={4}
        />
      </div>
      <Button type="submit" disabled={submitting} className="w-full rounded-full">
        {submitting ? "Opening WhatsApp..." : "Send via WhatsApp"}
      </Button>
    </form>
  );
}
