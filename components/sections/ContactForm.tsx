"use client";

import { useState, FormEvent } from "react";
import TextReveal from "@/components/animations/TextReveal";
import Reveal from "@/components/animations/Reveal";
import SectionLabel from "@/components/ui/SectionLabel";
import Button from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const projectTypes = [
  "Mobile App",
  "Web Application",
  "Website",
  "SaaS Product",
  "Custom Software",
  "Other",
];

const budgetOptions = [
  "Under $1,000",
  "$1,000 – $5,000",
  "$5,000 – $10,000",
  "$10,000+",
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const updateField = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  if (isSubmitted) {
    return (
      <Reveal>
        <div className="text-center py-16">
          <h2 className="text-3xl md:text-4xl font-medium mb-4">Thank you.</h2>
          <p className="text-body-lg text-[var(--color-muted)] max-w-md mx-auto">
            We&apos;ve received your message and will be in touch shortly.
          </p>
        </div>
      </Reveal>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <FormField label="Name" error={errors.name} required>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={(e) => updateField("name", e.target.value)}
            className={inputClass(errors.name)}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
        </FormField>

        <FormField label="Email" error={errors.email} required>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={(e) => updateField("email", e.target.value)}
            className={inputClass(errors.email)}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
        </FormField>

        <FormField label="Phone">
          <input
            type="tel"
            id="phone"
            value={formData.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            className={inputClass()}
          />
        </FormField>

        <FormField label="Company">
          <input
            type="text"
            id="company"
            value={formData.company}
            onChange={(e) => updateField("company", e.target.value)}
            className={inputClass()}
          />
        </FormField>

        <FormField label="Project Type">
          <select
            id="projectType"
            value={formData.projectType}
            onChange={(e) => updateField("projectType", e.target.value)}
            className={inputClass()}
          >
            <option value="">Select a type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </FormField>

        <FormField label="Budget">
          <select
            id="budget"
            value={formData.budget}
            onChange={(e) => updateField("budget", e.target.value)}
            className={inputClass()}
          >
            <option value="">Select a range</option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </FormField>
      </div>

      <FormField label="Message" error={errors.message} required>
        <textarea
          id="message"
          rows={5}
          value={formData.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={cn(inputClass(errors.message), "resize-none")}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
      </FormField>

      <Button type="submit" variant="primary" showArrow disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
}

function FormField({
  label,
  error,
  required,
  children,
}: {
  label: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  const id = label.toLowerCase().replace(/\s/g, "-");
  return (
    <div>
      <label htmlFor={id} className="text-label block mb-3 opacity-60">
        {label}
        {required && <span className="text-[var(--color-cyan)] ml-1">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} className="text-sm text-red-400 mt-2" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

function inputClass(error?: string) {
  return cn(
    "w-full bg-transparent border-b border-[var(--color-border)] py-3 text-[var(--color-off-white)] placeholder:text-[var(--color-muted)] focus:border-[var(--color-cyan)] focus:outline-none transition-colors duration-300",
    error && "border-red-400"
  );
}
