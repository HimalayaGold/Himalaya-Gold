import { CONTACT } from "@/constants/contact";

/**
 * Red "Get in Touch" info card sitting left of the form.
 * Static content — server component.
 */
export function GetInTouchCard() {
  return (
    <div className="rounded-3xl bg-brick-500 p-7 text-white shadow-xl sm:p-9">
      <h2 className="text-2xl font-bold sm:text-3xl">Get in Touch</h2>

      <address className="mt-6 space-y-3 text-sm not-italic">
        <p>
          <span className="font-bold">Phone:</span>{" "}
          <a href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} className="hover:underline">
            {CONTACT.phone}
          </a>
        </p>
        <p>
          <span className="font-bold">Email:</span>{" "}
          <a href={`mailto:${CONTACT.email}`} className="hover:underline">
            {CONTACT.email}
          </a>
        </p>
        <p>
          <span className="font-bold">Address:</span> {CONTACT.address}
        </p>
      </address>

      <hr className="my-8 border-white/40" />

      <h2 className="text-2xl font-bold sm:text-3xl">Stay Connected</h2>
      <p className="mt-4 text-sm leading-relaxed text-white/90">
        Follow us on social media for product updates, recipes, and the latest news
        from our brand.
      </p>
    </div>
  );
}