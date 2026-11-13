import React, { useRef, useState } from "react";

function Career() {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    streetAddress: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    noticePeriod: "",
    portfolio: "",
    termsAccepted: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [resume, setResume] = useState(null);

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");
  const formRef = useRef(null);
  const zohoSubmissionStarted = useRef(false);
  const submissionTimeout = useRef(null);

  const ZOHO_FORM_ACTION =
    "https://forms.zohopublic.in/trackowlsgm1/form/Career/formperma/SVLWIcq4aQ682kP9mdbgvvHQADZKrNwvcYM3_Gjioz8/htmlRecords/submit";

  // Zoho responds inside a hidden iframe so the visitor stays on this page.
  // The iframe load event is used to show the existing success popup.
  const handleZohoResponse = () => {
    if (!zohoSubmissionStarted.current) return;

    zohoSubmissionStarted.current = false;
    if (submissionTimeout.current) {
      window.clearTimeout(submissionTimeout.current);
      submissionTimeout.current = null;
    }
    setLoading(false);
    setError("");
    setShowSuccess(true);
    setFormData(initialFormData);
    setResume(null);
    formRef.current?.reset();
  };

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Submit the existing React form directly to Zoho Forms.
  // This is a native multipart form POST: no backend, API key, or Vercel API.
  const handleSubmit = () => {
    setLoading(true);
    setError("");
    zohoSubmissionStarted.current = true;

    if (submissionTimeout.current) {
      window.clearTimeout(submissionTimeout.current);
    }

    // Do not leave the button spinning forever if Zoho blocks the iframe.
    submissionTimeout.current = window.setTimeout(() => {
      zohoSubmissionStarted.current = false;
      setLoading(false);
      setError(
        "We could not confirm the submission. Please check your connection and verify the application in Zoho Forms before submitting again."
      );
    }, 30000);
  };

  // Common Input Styling
  const inputStyle =
    "mt-2 block w-full rounded-lg border border-[#B8C9D8] bg-white px-4 py-3 text-[14px] font-medium !text-[#18324B] outline-none transition-all duration-300 placeholder:!text-[#8293A3] focus:border-[#8BB630] focus:ring-2 focus:ring-[#8BB630]/30";

  // Label Styling
  const labelStyle =
    "block text-[14px] font-bold !text-white";

  // Section Heading
  const sectionHeading =
    "mb-6 border-b border-[#D5E0E9] pb-3 text-[19px] font-bold !text-white";

  return (
    <main className="relative mt-[100px] min-h-screen w-full overflow-hidden bg-[#F1F6FA] px-3 pb-16 pt-5 font-['Roboto',Arial,sans-serif] !text-[#18324B] sm:px-5 sm:pt-8">

      <div className="mx-auto w-full max-w-[1350px]">

        {/* ================= APPLICATION FORM ================= */}

        <section
          id="contact"
          className="relative overflow-hidden rounded-2xl border border-[#D5E0E9] bg-white px-5 py-8 shadow-[0_15px_50px_rgba(24,50,75,0.08)] sm:px-8 sm:py-10 lg:px-12 lg:py-12"
        >

          {/* Decorative Background */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#8BB630]/10 blur-[90px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-[#A9CBE3]/20 blur-[90px]"
          />

          <div className="relative z-10">

            {/* FORM HEADING */}

            <div className="mb-9">

              <span className="text-[12px] font-bold uppercase tracking-[1.8px] !text-[#709A1C]">
                Join Our Team
              </span>

              <h2 className="mt-3 text-[27px] font-bold tracking-tight !text-white sm:text-[35px]">
                Register your interest.
              </h2>

              <p className="mt-4 max-w-[850px] text-[14px] leading-[1.9] !text-[#435C75] sm:text-[15px]">
                Interested in joining TrackOwls? Complete the application
                form below with your personal and professional details.
                Our recruitment team will review your application and
                contact you.
              </p>

            </div>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              action={ZOHO_FORM_ACTION}
              method="POST"
              encType="multipart/form-data"
              target="zohoCareerSubmitFrame"
              className="space-y-10"
            >
              {/* Zoho Forms field mapping. Keep these exact name attributes. */}
              <input type="hidden" name="zf_referrer_name" value="" />
              <input type="hidden" name="zf_redirect_url" value="" />
              <input type="hidden" name="zc_gad" value="" />
              <input type="hidden" name="Name_First" value={formData.firstName} />
              <input type="hidden" name="Name_Last" value={formData.lastName} />
              <input type="hidden" name="Email" value={formData.email} />
              <input type="hidden" name="PhoneNumber_countrycode" value={formData.phone} />
              <input type="hidden" name="Address_AddressLine1" value={formData.streetAddress} />
              <input type="hidden" name="Address_AddressLine2" value={formData.addressLine2} />
              <input type="hidden" name="Address_City" value={formData.city} />
              <input type="hidden" name="Address_Region" value={formData.state} />
              <input type="hidden" name="Address_ZipCode" value={formData.postalCode} />
              <input type="hidden" name="Address_Country" value={formData.country || "-Select-"} />
              <input
                type="hidden"
                name="Dropdown"
                value={formData.noticePeriod === "Immediate" ? "Immediately Available" : formData.noticePeriod}
              />
              <input type="hidden" name="Website" value={formData.portfolio} />
              {formData.termsAccepted && (
                <input type="hidden" name="TermsConditions" value="on" />
              )}

              {/* ================= PERSONAL INFORMATION ================= */}

              <div>

                <h3 className={sectionHeading}>
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 gap-x-7 gap-y-6 sm:grid-cols-2">

                  {/* FIRST NAME */}

                  <div>

                    <label htmlFor="firstName" className={labelStyle}>
                      First Name <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter first name"
                      className={inputStyle}
                      autoComplete="given-name"
                      required
                    />

                  </div>

                  {/* LAST NAME */}

                  <div>

                    <label htmlFor="lastName" className={labelStyle}>
                      Last Name <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter last name"
                      className={inputStyle}
                      autoComplete="family-name"
                      required
                    />

                  </div>

                  {/* EMAIL */}

                  <div>

                    <label htmlFor="email" className={labelStyle}>
                      Email Address <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      className={inputStyle}
                      autoComplete="email"
                      required
                    />

                  </div>

                  {/* PHONE */}

                  <div>

                    <label htmlFor="phone" className={labelStyle}>
                      Phone Number <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      className={inputStyle}
                      autoComplete="tel"
                      required
                    />

                  </div>

                </div>

              </div>

              {/* ================= ADDRESS INFORMATION ================= */}

              <div>

                <h3 className={sectionHeading}>
                  Address Information
                </h3>

                <div className="grid grid-cols-1 gap-x-7 gap-y-6 sm:grid-cols-2">

                  {/* STREET ADDRESS */}

                  <div className="sm:col-span-2">

                    <label htmlFor="streetAddress" className={labelStyle}>
                      Street Address
                    </label>

                    <input
                      id="streetAddress"
                      type="text"
                      name="streetAddress"
                      value={formData.streetAddress}
                      onChange={handleChange}
                      placeholder="Enter street address"
                      className={inputStyle}
                      autoComplete="address-line1"
                    />

                  </div>

                  {/* ADDRESS LINE 2 */}

                  <div className="sm:col-span-2">

                    <label htmlFor="addressLine2" className={labelStyle}>
                      Address Line 2
                    </label>

                    <input
                      id="addressLine2"
                      type="text"
                      name="addressLine2"
                      value={formData.addressLine2}
                      onChange={handleChange}
                      placeholder="Apartment, suite, building, etc."
                      className={inputStyle}
                      autoComplete="address-line2"
                    />

                  </div>

                  {/* CITY */}

                  <div>

                    <label htmlFor="city" className={labelStyle}>
                      City
                    </label>

                    <input
                      id="city"
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter city"
                      className={inputStyle}
                      autoComplete="address-level2"
                    />

                  </div>

                  {/* STATE */}

                  <div>

                    <label htmlFor="state" className={labelStyle}>
                      State / Region / Province
                    </label>

                    <input
                      id="state"
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Enter state"
                      className={inputStyle}
                      autoComplete="address-level1"
                    />

                  </div>

                  {/* POSTAL CODE */}

                  <div>

                    <label htmlFor="postalCode" className={labelStyle}>
                      Postal / Zip Code
                    </label>

                    <input
                      id="postalCode"
                      type="text"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      placeholder="Enter postal code"
                      className={inputStyle}
                      autoComplete="postal-code"
                    />

                  </div>

                  {/* COUNTRY */}

                  <div>

                    <label htmlFor="country" className={labelStyle}>
                      Country
                    </label>

                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={`${inputStyle} cursor-pointer`}
                      style={{
                        color: "#18324B",
                        backgroundColor: "#FFFFFF",
                        colorScheme: "light",
                      }}
                    >

                      <option value="">Select country</option>
                      <option value="India">India</option>
                      <option value="United States">United States</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Canada">Canada</option>
                      <option value="Australia">Australia</option>
                      <option value="United Arab Emirates">
                        United Arab Emirates
                      </option>
                      <option value="Singapore">Singapore</option>
                      <option value="Germany">Germany</option>
                      <option value="Other">Other</option>

                    </select>

                  </div>

                </div>

              </div>

              {/* ================= PROFESSIONAL INFORMATION ================= */}

              <div>

                <h3 className={sectionHeading}>
                  Professional Information
                </h3>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                  {/* NOTICE PERIOD */}

                  <div>

                    <label htmlFor="noticePeriod" className={labelStyle}>
                      Notice Period <span className="text-red-500">*</span>
                    </label>

                    <select
                      id="noticePeriod"
                      name="noticePeriod"
                      value={formData.noticePeriod}
                      onChange={handleChange}
                      className={`${inputStyle} cursor-pointer`}
                      style={{
                        color: "#18324B",
                        backgroundColor: "#FFFFFF",
                        colorScheme: "light",
                      }}
                      required
                    >

                      <option value="" disabled>
                        Select notice period
                      </option>

                      <option value="Immediate">Immediate</option>
                      <option value="15 Days">15 Days</option>
                      <option value="30 Days">30 Days</option>
                      <option value="60 Days">60 Days</option>
                      <option value="90 Days">90 Days</option>

                    </select>

                  </div>

                  {/* PORTFOLIO */}

                  <div>

                    <label htmlFor="portfolio" className={labelStyle}>
                      Portfolio
                    </label>

                    <input
                      id="portfolio"
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      placeholder="https://yourportfolio.com"
                      className={inputStyle}
                    />

                  </div>

                </div>

              </div>

              {/* ================= ATTACHMENTS ================= */}

              <div>

                <h3 className={sectionHeading}>
                  Attachments
                </h3>

                <div className="grid grid-cols-1 gap-8">

                  {/* RESUME */}

                  <div>

                    <label htmlFor="resume" className={labelStyle}>
                      Resume Upload <span className="text-red-500">*</span>
                    </label>

                    <div className="mt-3 rounded-xl border border-dashed border-[#B8C9D8] bg-[#F8FAFC] p-5 transition-all duration-300 hover:border-[#8BB630]">

                      <input
                        id="resume"
                        name="FileUpload"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) =>
                          setResume(e.target.files[0] || null)
                        }
                        className="block w-full cursor-pointer text-[13px] !text-[#18324B]
                        file:mr-4 file:cursor-pointer file:rounded-md
                        file:border-0 file:bg-[#8BB630]
                        file:px-5 file:py-2.5
                        file:text-[13px] file:font-bold
                        file:!text-[#071C30]
                        hover:file:bg-[#ADD122]"
                        required
                      />

                      {resume && (
                        <p className="mt-3 break-all text-[12px] font-semibold !text-[#52751A]">
                          Selected: {resume.name}
                        </p>
                      )}

                      <p className="mt-3 text-[12px] !text-[#52677B]">
                        Accepted formats: PDF, DOC, DOCX.
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* ================= TERMS AND CONDITIONS ================= */}

              <div>

                <h3 className={sectionHeading}>
                  Terms and Conditions
                  <span className="text-red-500"> *</span>
                </h3>

                <div className="rounded-lg border border-[#B8C9D8] bg-white p-5">

                  <ul className="list-disc space-y-2 pl-5 text-[13px] leading-relaxed !text-[#435C75]">

                    <li>
                      I agree to the processing of my personal information
                      for recruitment purposes.
                    </li>

                    <li>
                      I agree to the Privacy Policy and Terms & Conditions.
                    </li>

                  </ul>

                </div>

                <label className="mt-4 flex cursor-pointer items-center gap-3">

                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleChange}
                    required
                    className="h-5 w-5 shrink-0 cursor-pointer accent-[#8BB630]"
                  />

                  <span className="text-[14px] font-bold !text-white">
                    I accept the Terms and Conditions.
                  </span>

                </label>

              </div>

              {/* ================= ERROR MESSAGE ================= */}

              {error && (

                <div className="rounded-lg border border-red-200 bg-red-50 px-5 py-4 text-[14px] font-medium !text-red-700">
                  {error}
                </div>

              )}

              {/* ================= SUBMIT BUTTON ================= */}

              <div className="border-t border-[#D5E0E9] pt-8">

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex min-h-[50px] w-full items-center justify-center rounded-lg bg-[#8BB630] px-10 py-3 text-[14px] font-bold !text-[#071C30] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#ADD122] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >

                  {loading ? (

                    <span className="flex items-center gap-3">

                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#071C30] border-t-transparent" />

                      Submitting...

                    </span>

                  ) : (

                    "Submit Application"

                  )}

                </button>

                <p className="mt-5 text-[13px] leading-relaxed !text-[#52677B]">
                  Your information will be kept confidential and used
                  only for recruitment purposes.
                </p>

              </div>

            </form>

            {/* Zoho submission target: keeps the visitor on the Career page. */}
            <iframe
              title="Zoho Career Form Submission"
              name="zohoCareerSubmitFrame"
              onLoad={handleZohoResponse}
              className="hidden"
              aria-hidden="true"
            />

          </div>

        </section>

      </div>

      {/* ================= SUCCESS POPUP ================= */}

      {showSuccess && (

        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#071C30]/75 px-4 backdrop-blur-sm">

          <div className="relative w-full max-w-[440px] rounded-2xl border border-[#D5E0E9] bg-white p-7 text-center shadow-2xl sm:p-10">

            {/* SUCCESS ICON */}

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#8BB630]/30 bg-[#8BB630]/15">

              <svg
                className="h-10 w-10 !text-[#709A1C]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >

                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M5 13l4 4L19 7"
                />

              </svg>

            </div>

            <h2 className="mt-6 text-[25px] font-bold !text-[#18324B]">
              Application Submitted!
            </h2>

            <p className="mt-4 text-[14px] leading-[1.9] !text-[#52677B]">
              Thank you for your interest in joining TrackOwls.
              Your application has been received successfully.
              Our team will review your details and contact you shortly.
            </p>

            <button
              type="button"
              onClick={() => setShowSuccess(false)}
              className="mt-8 w-full rounded-lg bg-[#8BB630] px-6 py-3.5 text-[14px] font-bold !text-[#071C30] transition-all duration-300 hover:bg-[#ADD122]"
            >
              Continue
            </button>

          </div>

        </div>

      )}

    </main>
  );
}

export default Career;