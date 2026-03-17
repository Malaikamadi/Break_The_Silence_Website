"use client";

import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import SectionTitle from "@/components/ui/SectionTitle";
import FormField from "@/components/ui/FormField";
import { submitVolunteerForm } from "@/services/volunteers";
import type { VolunteerApplication } from "@/types";

const availabilityOptions = [
  { value: "flexible", label: "Flexible" },
  { value: "weekdays", label: "Weekdays" },
  { value: "weekends", label: "Weekends" },
  { value: "both", label: "Both" },
];

const initial: VolunteerApplication = {
  full_name: "",
  email: "",
  phone: "",
  skills: "",
  availability: "flexible",
  notes: "",
};

export default function VolunteerPage() {
  const [form, setForm] = useState(initial);

  const mutation = useMutation({
    mutationFn: submitVolunteerForm,
    onSuccess: () => setForm(initial),
  });

  function update(field: keyof VolunteerApplication, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    mutation.mutate(form);
  }

  return (
    <>
      <section className="bg-sage py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <SectionTitle
            title="Become a Volunteer"
            subtitle="Join our growing community of changemakers. Fill out the form below and we'll be in touch."
          />
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-2xl px-4 lg:px-8">
          {mutation.isSuccess ? (
            <div className="rounded-2xl bg-sage p-10 text-center">
              <h3 className="mb-2 text-2xl font-bold text-primary">
                Thank You!
              </h3>
              <p className="text-secondary">
                Your volunteer application has been submitted. Our team will
                review it and get back to you shortly.
              </p>
              <button
                onClick={() => mutation.reset()}
                className="mt-6 rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-white hover:bg-primary-dark"
              >
                Submit Another
              </button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="space-y-5 rounded-2xl border border-border bg-white p-8 shadow-sm"
            >
              <FormField
                label="Full Name"
                required
                value={form.full_name}
                onChange={(e) =>
                  update("full_name", (e.target as HTMLInputElement).value)
                }
                placeholder="Jane Doe"
              />
              <div className="grid gap-5 sm:grid-cols-2">
                <FormField
                  label="Email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) =>
                    update("email", (e.target as HTMLInputElement).value)
                  }
                  placeholder="jane@example.com"
                />
                <FormField
                  label="Phone"
                  type="tel"
                  value={form.phone}
                  onChange={(e) =>
                    update("phone", (e.target as HTMLInputElement).value)
                  }
                  placeholder="+254 700 000 000"
                />
              </div>
              <FormField
                label="Skills"
                value={form.skills}
                onChange={(e) =>
                  update("skills", (e.target as HTMLInputElement).value)
                }
                placeholder="e.g. Photography, Teaching, Web Development"
              />
              <FormField
                as="select"
                label="Availability"
                options={availabilityOptions}
                value={form.availability}
                onChange={(e) =>
                  update("availability", (e.target as HTMLSelectElement).value)
                }
              />
              <FormField
                as="textarea"
                label="Additional Notes"
                value={form.notes}
                onChange={(e) =>
                  update("notes", (e.target as HTMLTextAreaElement).value)
                }
                placeholder="Tell us why you want to volunteer..."
              />

              {mutation.isError && (
                <p className="text-sm text-red-500">
                  Something went wrong. Please try again.
                </p>
              )}

              <button
                type="submit"
                disabled={mutation.isPending}
                className="w-full rounded-full bg-primary py-3 text-sm font-bold text-white transition-colors hover:bg-primary-dark disabled:opacity-50"
              >
                {mutation.isPending ? "Submitting..." : "Submit Application"}
              </button>
            </form>
          )}
        </div>
      </section>
    </>
  );
}
