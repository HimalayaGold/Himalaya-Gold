"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FormField } from "@/components/ui/FormField";
import { contactSchema, type ContactFormValues } from "../schema";

/**
 * "Your Detail" form card.
 *
 * - React Hook Form manages state (uncontrolled inputs = fewer re-renders
 *   than a useState-per-field approach).
 * - zodResolver wires our Zod schema in as the validation source.
 * - Submission is stubbed for now; the API route lands in the backend phase.
 */
export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    // TODO (backend phase): POST to /api/contact
    console.log("Contact form submission:", values);
    await new Promise((r) => setTimeout(r, 600)); // simulate network
    setSubmitted(true);
    reset();
  };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-2xl sm:p-8">
      <h2 className="text-xl font-bold text-maroon-950 sm:text-2xl">Your Detail</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate className="mt-6 space-y-6">
        <FormField
          label="Name"
          required
          placeholder="Your Name"
          error={errors.name?.message}
          {...register("name")}
        />

        <div className="grid gap-6 sm:grid-cols-2">
          <FormField
            label="Phone Number"
            required
            type="tel"
            placeholder="Your Phone Number"
            error={errors.phone?.message}
            {...register("phone")}
          />
          <FormField
            label="Email Address"
            required
            type="email"
            placeholder="Your Email"
            error={errors.email?.message}
            {...register("email")}
          />
        </div>

        <FormField
          as="textarea"
          label="Comments / Questions"
          placeholder="Your Message"
          error={errors.message?.message}
          {...register("message")}
        />

        {/* Consent */}
        <div>
          <div className="flex items-start gap-2">
            <input
              id="consent"
              type="checkbox"
              className="mt-0.5 h-4 w-4 shrink-0 accent-brick-500"
              aria-invalid={!!errors.consent}
              {...register("consent")}
            />
            <label htmlFor="consent" className="text-xs leading-relaxed text-maroon-950/70">
              I give consent to use my data for communication purpose and I agree to
              company&apos;s privacy policy. <span className="text-brick-500">*</span>
            </label>
          </div>
          {errors.consent && (
            <p role="alert" className="mt-1 text-xs text-brick-500">
              {errors.consent.message}
            </p>
          )}
        </div>

        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? "Sending…" : "SUBMIT"}
        </Button>

        {submitted && (
          <p role="status" className="text-sm font-medium text-green-700">
            Thank you — we&apos;ve received your message and will be in touch soon.
          </p>
        )}
      </form>
    </div>
  );
}