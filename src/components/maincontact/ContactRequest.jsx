import React, { useState } from "react";

const ZOHO_FORM_ACTION =
  "https://forms.zohopublic.in/trackowlsgm1/form/Trackowlscontact/formperma/nmokwKyajjEsWkS4EC3-iuU6HbRq0FUY0DokjfFna9U/htmlRecords/submit";

const protectionOptions = [
  "OTT / VOD",
  "Movies",
  "Live Sports",
  "TV / Broadcast",
  "Music",
  "Brand / Trademark",
  "Other",
];

const supportOptions = [
  "Monitoring",
  "Piracy Detection",
  "Takedowns",
  "Brand Protection",
  "Intelligence",
  "Others",
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/trackowls/",
    icon: "instagram",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61594204995079",
    icon: "facebook",
  },
  {
    name: "Threads",
    href: "https://www.threads.com/@trackowls",
    icon: "threads",
  },
  {
    name: "X",
    href: "https://x.com/Track_Owls",
    icon: "x",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCi_S9-dSwWf0yjaXzPiGdjw",
    icon: "youtube",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/p-dhanalakshmi-03a60b438/",
    icon: "linkedin",
  },
];

const inputClass =
  "mt-2 w-full rounded-md border border-white/15 bg-[#0E1711]/80 px-4 py-3 text-[14px] text-white outline-none transition placeholder:text-[#89978C] focus:border-[#8BB630] focus:ring-2 focus:ring-[#8BB630]/20";

function SocialIcon({ type }) {
  const icons = {
    instagram: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
      </>
    ),

    facebook: (
      <path
        d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.6V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H7.2V13H10v8h3.5Z"
        fill="currentColor"
        stroke="none"
      />
    ),

    threads: (
      <path d="M16.8 8.3c-.7-2.1-2.2-3.3-4.7-3.3-3.7 0-6.1 2.7-6.1 7.1 0 4.5 2.3 7 6.2 7 3.2 0 5.2-1.8 5.2-4.5 0-2.4-1.7-3.8-4.1-3.8-2.1 0-3.5 1.1-3.5 2.8 0 1.4 1 2.3 2.5 2.3 2.7 0 4.1-2.3 4.1-5.3 0-3.9-2.1-6.1-5.4-6.1-4.3 0-7.2 3.1-7.2 7.8" />
    ),

    x: (
      <path
        d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.7 5.6 22H2.4l7.3-8.5L1.9 2h6.5l4.5 6.7L18.9 2Zm-1.1 17.9h1.7L7.4 4H5.6l12.2 15.9Z"
        fill="currentColor"
        stroke="none"
      />
    ),

    youtube: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="4" />
        <path
          d="m10 9 5 3-5 3V9Z"
          fill="currentColor"
          stroke="none"
        />
      </>
    ),

    linkedin: (
      <path
        d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.2 0h3.6v1.6h.1a4 4 0 0 1 3.6-2c3.8 0 4.5 2.5 4.5 5.7V21h-3.8v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9.5V9Z"
        fill="currentColor"
        stroke="none"
      />
    ),
  };

  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {icons[type]}
    </svg>
  );
}

function ContactRequest() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [validationMessage, setValidationMessage] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    country: "",
    contentTypes: [],
    supportNeeds: [],
    requirements: "",
  });

  const updateField = (event) => {
    const { value, dataset } = event.target;
    const fieldName = dataset.field;
    if (!fieldName) return;

    setFormData((previous) => ({
      ...previous,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (event) => {
    // Keep the native browser POST to Zoho. Do not prevent the default submit.
    if (!formData.contentTypes.length || !formData.supportNeeds.length) {
      event.preventDefault();
      setValidationMessage(
        "Please select at least one option in both protection and support sections."
      );
      return;
    }

    setValidationMessage("");
    setIsSubmitting(true);
  };

  const handleZohoResponse = () => {
    // The hidden iframe loads after Zoho responds to the POST.
    if (isSubmitting) {
      setIsSubmitting(false);
      setShowSuccessPopup(true);
    }
  };

  const closeSuccessPopup = () => {
    setShowSuccessPopup(false);
    setFormData({
      firstName: "",
      lastName: "",
      company: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      country: "",
      contentTypes: [],
      supportNeeds: [],
      requirements: "",
    });
  };

  const toggleOption = (field, option) => {
    setFormData((previous) => {
      const selected = previous[field];
      return {
        ...previous,
        [field]: selected.includes(option)
          ? selected.filter((item) => item !== option)
          : [...selected, option],
      };
    });
  };

  const renderCheckboxes = (options, field, zohoFieldName) => (
    <div className="mt-3 grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-2 xl:grid-cols-3">
      {options.map((option) => {
        const checked = formData[field].includes(option);
        return (
          <label
            key={option}
            className={`inline-flex min-w-0 cursor-pointer items-center gap-3 rounded-md border px-3 py-2.5 text-[13px] leading-5 transition duration-300 ${
              checked
                ? "border-[#8BB630] bg-[#8BB630]/15 text-[#B6DB78]"
                : "border-white/15 bg-white/[0.035] text-[#C0CCC1] hover:border-[#8BB630] hover:bg-[#8BB630]/10"
            }`}
          >
            <input
              type="checkbox"
              name={zohoFieldName}
              value={option}
              checked={checked}
              onChange={() => toggleOption(field, option)}
              className="h-4 w-4 shrink-0 accent-[#8BB630]"
            />
            <span>{option}</span>
          </label>
        );
      })}
    </div>
  );

  return (
    <section
      id="contact-request"
      className="relative w-full overflow-hidden bg-transparent px-4 py-12 font-['Roboto',sans-serif] sm:px-6 sm:py-16 lg:px-8 lg:py-20"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-[300px] w-[300px] rounded-full bg-[#8BB630]/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-[350px] w-[350px] rounded-full bg-[#8BB630]/10 blur-[130px]"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-[1280px] grid-cols-1 items-start gap-8 md:gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
        {/* LEFT: Contact information */}
        <div className="flex min-w-0 flex-col gap-6 lg:pt-3">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="h-[2px] w-8 bg-[#8BB630]" />
              <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#8BB630]">
                Contact TrackOwls
              </span>
            </div>

            <h2 className="max-w-[480px] text-[30px] font-bold leading-[1.15] tracking-[-1px] text-white sm:text-[36px] lg:text-[42px]">
              A focused first conversation.
            </h2>

            <p className="mt-4 max-w-[460px] text-[14px] leading-7 text-[#C0CCC1] sm:text-[15px]">
              Share your requirements so we can discuss the monitoring scope,
              authorization and enforcement approach.
            </p>
          </div>

          <div className="rounded-sm border border-white/15 border-l-[3px] border-l-[#8BB630] bg-[#152019]/80 p-5 backdrop-blur-md transition duration-300 hover:border-[#8BB630]/50 sm:p-6">
            <p className="text-[11px] font-bold uppercase tracking-[1.8px] text-[#8BB630]">
              Our office
            </p>
            <h3 className="mt-3 text-[18px] font-bold text-white">
              Coimbatore, Tamil Nadu
            </h3>
            <address className="mt-3 text-[14px] not-italic leading-7 text-[#C0CCC1]">
              201, First Floor,
              <br />
              Paradise Garden,
              <br />
              Coimbatore, Tamil Nadu, India.
            </address>
            <a
              href="mailto:info@trackowls.com"
              className="mt-3 inline-block text-[14px] leading-7 text-[#C0CCC1] transition hover:text-[#8BB630]"
            >
              info@trackowls.com
            </a>
          </div>

          {/* Social Media Section */}
<div className="mt-2">

  <h3 className="text-[14px] font-bold text-white">
    Connect with TrackOwls
  </h3>

  <p className="mt-2 text-[12px] leading-6 text-[#C0CCC1]">
    Follow us for the latest updates, insights and digital protection news.
  </p>

  <div className="mt-4 flex flex-wrap items-center gap-3">

    {socialLinks.map((social) => (
      <a
        key={social.name}
        href={social.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`TrackOwls on ${social.name}`}
        title={social.name}
        className="
          group flex h-11 w-11 items-center justify-center
          rounded-lg border border-white/15
          bg-[#152019]/80 text-[#C0CCC1]
          transition-all duration-300
          hover:-translate-y-1
          hover:border-[#8BB630]
          hover:bg-[#8BB630]/15
          hover:text-[#8BB630]
          hover:shadow-[0_5px_20px_rgba(139,182,48,0.15)]
        "
      >
        <SocialIcon type={social.icon} />
      </a>
    ))}

  </div>

</div>

          <div>
            <h3 className="text-[15px] font-bold text-white">
              What we can discuss
            </h3>
            <ul className="mt-4 space-y-3">
              {[
                "Your assets and rights",
                "Priority channels and territories",
                "Event or release timelines",
                "Monitoring and reporting requirements",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-[13px] leading-6 text-[#C0CCC1] sm:text-[14px]"
                >
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-[#8BB630]/40 bg-[#8BB630]/10 text-[12px] font-bold text-[#8BB630]">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-sm border border-[#8BB630]/25 bg-[#152019]/75 p-5 backdrop-blur-md sm:p-6">
            <span className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#8BB630]">
              Next step
            </span>
            <h3 className="mt-2 text-[17px] font-bold text-white">
              Request an assessment
            </h3>
            <p className="mt-2 text-[13px] leading-6 text-[#C0CCC1] sm:text-[14px]">
              Describe the content or brand you want to protect and the issue
              you are experiencing. Assessment scope and availability will be
              agreed with you.
            </p>
          </div>
        </div>

        {/* RIGHT: React form posts directly to Zoho Forms */}
        <form
          action={ZOHO_FORM_ACTION}
          method="POST"
          target="zoho-contact-submit-frame"
          encType="multipart/form-data"
          acceptCharset="UTF-8"
          onSubmit={handleSubmit}
          className="relative min-w-0 overflow-hidden rounded-sm border border-[#8BB630]/25 bg-[#152019]/90 p-5 shadow-[0_12px_40px_rgba(0,0,0,0.2)] backdrop-blur-lg sm:p-7 md:p-8 lg:p-9"
        >
          {/* Zoho system fields */}
          <input type="hidden" name="zf_referrer_name" value="" />
          <input type="hidden" name="zf_redirect_url" value="" />
          <input type="hidden" name="zc_gad" value="" />

          <div className="absolute left-0 top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-[#8BB630] to-transparent" />

          <div className="mb-7 border-b border-white/15 pb-5">
            <p className="text-[11px] font-bold uppercase tracking-[1.8px] text-[#8BB630]">
              Consultation request
            </p>
            <h3 className="mt-2 text-[23px] font-bold tracking-[-0.5px] text-white sm:text-[27px]">
              Tell us about your needs.
            </h3>
            <p className="mt-2 text-[13px] leading-6 text-[#C0CCC1] sm:text-[14px]">
              Complete the details below and choose the protection services
              relevant to you.
            </p>
          </div>

          {/* Name */}
          <div className="grid grid-cols-1 gap-x-5 gap-y-5 sm:grid-cols-2">
            <div className="min-w-0">
              <label htmlFor="contact-first-name" className="text-[13px] font-semibold text-white">
                First name
              </label>
              <input
                id="contact-first-name"
                type="text"
                name="Name_First"
                data-field="firstName"
                value={formData.firstName}
                onChange={updateField}
                className={inputClass}
                placeholder="First name"
                autoComplete="given-name"
              />
            </div>

            <div className="min-w-0">
              <label htmlFor="contact-last-name" className="text-[13px] font-semibold text-white">
                Last name
              </label>
              <input
                id="contact-last-name"
                type="text"
                name="Name_Last"
                data-field="lastName"
                value={formData.lastName}
                onChange={updateField}
                className={inputClass}
                placeholder="Last name"
                autoComplete="family-name"
              />
            </div>

            <div className="min-w-0">
              <label htmlFor="contact-email" className="text-[13px] font-semibold text-white">
                Business email <span className="text-red-400">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                name="Email1"
                data-field="email"
                value={formData.email}
                onChange={updateField}
                className={inputClass}
                placeholder="you@company.com"
                autoComplete="email"
                required
              />
            </div>

            <div className="min-w-0">
              <label htmlFor="contact-phone" className="text-[13px] font-semibold text-white">
                Phone <span className="text-red-400">*</span>
              </label>
              <input
                id="contact-phone"
                type="tel"
                name="PhoneNumber1_countrycode"
                data-field="phone"
                value={formData.phone}
                onChange={updateField}
                className={inputClass}
                placeholder="Include country code"
                autoComplete="tel"
                required
              />
            </div>

            <div className="min-w-0">
              <label htmlFor="contact-company" className="text-[13px] font-semibold text-white">
                Company name <span className="text-red-400">*</span>
              </label>
              <input
                id="contact-company"
                type="text"
                name="SingleLine"
                data-field="company"
                value={formData.company}
                onChange={updateField}
                className={inputClass}
                placeholder="Company name"
                autoComplete="organization"
                required
              />
            </div>

            <div className="min-w-0">
              <label htmlFor="contact-address" className="text-[13px] font-semibold text-white">
                Address
              </label>
              <input
                id="contact-address"
                type="text"
                name="Address_AddressLine1"
                data-field="address"
                value={formData.address}
                onChange={updateField}
                className={inputClass}
                placeholder="Street address"
                autoComplete="street-address"
              />
            </div>

            <div className="min-w-0">
              <label htmlFor="contact-city" className="text-[13px] font-semibold text-white">
                City
              </label>
              <input
                id="contact-city"
                type="text"
                name="Address_City"
                data-field="city"
                value={formData.city}
                onChange={updateField}
                className={inputClass}
                placeholder="City"
                autoComplete="address-level2"
              />
            </div>

            <div className="min-w-0">
              <label htmlFor="contact-state" className="text-[13px] font-semibold text-white">
                State / Region / Province
              </label>
              <input
                id="contact-state"
                type="text"
                name="Address_Region"
                data-field="state"
                value={formData.state}
                onChange={updateField}
                className={inputClass}
                placeholder="State / Region / Province"
                autoComplete="address-level1"
              />
            </div>

            <div className="min-w-0 sm:col-span-2">
              <label htmlFor="contact-country" className="text-[13px] font-semibold text-white">
                Country
              </label>
              <input
                id="contact-country"
                type="text"
                name="Address_Country"
                data-field="country"
                value={formData.country}
                onChange={updateField}
                className={inputClass}
                placeholder="Country"
                autoComplete="country-name"
              />
            </div>
          </div>

          {/* Content protection */}
          <fieldset className="mt-7 border-t border-white/15 pt-6">
            <legend className="px-0 text-[13px] font-semibold text-white sm:text-[14px]">
              What would you like to protect? <span className="text-red-400">*</span>
            </legend>
            {renderCheckboxes(protectionOptions, "contentTypes", "Checkbox")}
          </fieldset>

          {/* Support required */}
          <fieldset className="mt-6 border-t border-white/15 pt-6">
            <legend className="px-0 text-[13px] font-semibold text-white sm:text-[14px]">
              What do you need help with? <span className="text-red-400">*</span>
            </legend>
            {renderCheckboxes(supportOptions, "supportNeeds", "Checkbox1")}
          </fieldset>

          {/* Requirements */}
          <div className="mt-7">
            <label htmlFor="contact-requirements" className="text-[13px] font-semibold text-white">
              Tell us about your requirement
            </label>
            <textarea
              id="contact-requirements"
              name="MultiLine"
              data-field="requirements"
              value={formData.requirements}
              onChange={updateField}
              placeholder="Tell us about your requirements..."
              rows={5}
              className={`${inputClass} min-h-[130px] resize-y leading-7`}
            />
          </div>

          <p className="mt-5 text-[11px] leading-6 text-[#AAB8AD]">
            Please share requirements rather than confidential content or
            login credentials. By submitting, you agree that TrackOwls may
            use these details to respond to your enquiry. Read the{" "}
            <a
              href="/privacy"
              className="font-medium text-[#8BB630] underline underline-offset-2 transition hover:text-[#B6DB78]"
            >
              privacy notice
            </a>
            .
          </p>

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-6 flex w-full items-center justify-center gap-3 rounded-sm bg-[#8BB630] px-5 py-4 text-[13px] font-bold text-[#152019] transition duration-300 hover:-translate-y-0.5 hover:bg-[#A3CC4C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8BB630] disabled:cursor-wait disabled:opacity-60"
          >
            {isSubmitting ? "Submitting..." : "Request a consultation"}
            {!isSubmitting && <span aria-hidden="true">→</span>}
          </button>

          {validationMessage && (
            <p role="alert" className="mt-3 text-[12px] leading-5 text-red-400">
              {validationMessage}
            </p>
          )}

          <p className="mt-4 text-center text-[11px] text-[#89978C]">
            TrackOwls · Digital content protection
          </p>
        </form>

        {/* Zoho submission happens in this hidden frame; visitor stays on this page. */}
        <iframe
          title="Zoho Contact Form submission"
          name="zoho-contact-submit-frame"
          onLoad={handleZohoResponse}
          className="hidden"
          tabIndex="-1"
          aria-hidden="true"
        />

        {showSuccessPopup && (
          <div
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-4 py-6"
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-success-title"
          >
            <div className="w-full max-w-[420px] rounded-xl border border-[#8BB630]/40 bg-[#152019] p-7 text-center shadow-2xl">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#8BB630]/15 text-3xl text-[#A3CC4C]">
                ✓
              </div>
              <h3
                id="contact-success-title"
                className="mt-5 text-xl font-bold text-white"
              >
                Thank you!
              </h3>
              <p className="mt-3 text-sm leading-6 text-[#C0CCC1]">
                Thank you for contacting TrackOwls! Your enquiry has been received. Our team will review your details and get back to you soon.
              </p>
              <button
                type="button"
                onClick={closeSuccessPopup}
                className="mt-6 rounded-md bg-[#8BB630] px-7 py-3 text-sm font-bold text-[#152019] transition hover:bg-[#A3CC4C]"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ContactRequest;
