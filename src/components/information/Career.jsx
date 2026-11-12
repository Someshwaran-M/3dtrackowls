import React, { useState } from "react";

function Career() {
  const initialFormData = {
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    noticePeriod: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState(null);

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  // Handle Input Changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle Form Submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const applicationData = new FormData();

      Object.entries(formData).forEach(([key, value]) => {
        applicationData.append(key, value);
      });

      if (resume) {
        applicationData.append("resume", resume);
      }

      if (coverLetter) {
        applicationData.append("coverLetter", coverLetter);
      }

      const response = await fetch("/api/career/apply/", {
        method: "POST",
        body: applicationData,
      });

      if (!response.ok) {
        throw new Error("Application submission failed.");
      }

      setShowSuccess(true);
      setFormData(initialFormData);
      setResume(null);
      setCoverLetter(null);

      e.target.reset();

    } catch (err) {
      setError(
        "Unable to submit your application. Please try again later."
      );
    } finally {
      setLoading(false);
    }
  };

  // Common Input Styling
  const inputStyle =
    "mt-2 block w-full rounded-lg border border-[#B8C9D8] bg-white px-4 py-3 text-[14px] font-medium !text-white outline-none transition-all duration-300 placeholder:!text-[#8293A3] focus:border-[#8BB630] focus:ring-2 focus:ring-[#8BB630]/30";

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
          className="relative  overflow-hidden rounded-2xl border border-[#D5E0E9] bg-white px-5 py-8 shadow-[0_15px_50px_rgba(24,50,75,0.08)] sm:px-8 sm:py-10 lg:px-12 lg:py-12"
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

          {/* Form Content */}

          <div className="relative z-10">

            {/* Form Heading */}

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

            <form onSubmit={handleSubmit} className="space-y-10">

              {/* ================= PERSONAL INFORMATION ================= */}

              <div>

                <h3 className={sectionHeading}>
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 gap-x-7 gap-y-6 sm:grid-cols-2 lg:grid-cols-3">

                  {/* Full Name */}

                  <div>
                    <label htmlFor="name" className={labelStyle}>
                      Full Name <span className="text-red-500">*</span>
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={inputStyle}
                      autoComplete="name"
                      required
                    />
                  </div>

                  {/* Phone */}

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

                  {/* Email */}

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

                  {/* Address */}

                  <div className="sm:col-span-2 lg:col-span-3">

                    <label htmlFor="address" className={labelStyle}>
                      Address <span className="text-red-500">*</span>
                    </label>

                    <textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your complete address"
                      rows="3"
                      className={`${inputStyle} resize-none`}
                      autoComplete="street-address"
                      required
                    />

                  </div>

                  {/* City */}

                  <div>
                    <label htmlFor="city" className={labelStyle}>
                      City <span className="text-red-500">*</span>
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
                      required
                    />
                  </div>

                  {/* State */}

                  <div>
                    <label htmlFor="state" className={labelStyle}>
                      State <span className="text-red-500">*</span>
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
                      required
                    />
                  </div>

                </div>

              </div>

              {/* ================= PROFESSIONAL INFORMATION ================= */}

              <div>

                <h3 className={sectionHeading}>
                  Professional Information
                </h3>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

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
                      <option value="45 Days">45 Days</option>
                      <option value="60 Days">60 Days</option>
                      <option value="90 Days">90 Days</option>
                      <option value="Other">Other</option>

                    </select>

                  </div>

                </div>

              </div>

              {/* ================= ATTACHMENTS ================= */}

              <div>

                <h3 className={sectionHeading}>
                  Attachments
                </h3>

                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">

                  {/* Resume */}

                  <div>

                    <label htmlFor="resume" className={labelStyle}>
                      Upload Resume <span className="text-red-500">*</span>
                    </label>

                    <div className="mt-3 rounded-xl border border-dashed border-[#B8C9D8] bg-[#F8FAFC] p-5 transition-all duration-300 hover:border-[#8BB630]">

                      <input
                        id="resume"
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

                  {/* Cover Letter */}

                  <div>

                    <label htmlFor="coverLetter" className={labelStyle}>
                      Upload Cover Letter
                    </label>

                    <div className="mt-3 rounded-xl border border-dashed border-[#B8C9D8] bg-[#F8FAFC] p-5 transition-all duration-300 hover:border-[#8BB630]">

                      <input
                        id="coverLetter"
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) =>
                          setCoverLetter(e.target.files[0] || null)
                        }
                        className="block w-full cursor-pointer text-[13px] !text-[#18324B]
                        file:mr-4 file:cursor-pointer file:rounded-md
                        file:border-0 file:bg-[#8BB630]
                        file:px-5 file:py-2.5
                        file:text-[13px] file:font-bold
                        file:!text-[#071C30]
                        hover:file:bg-[#ADD122]"
                      />

                      {coverLetter && (
                        <p className="mt-3 break-all text-[12px] font-semibold !text-[#52751A]">
                          Selected: {coverLetter.name}
                        </p>
                      )}

                      <p className="mt-3 text-[12px] !text-[#52677B]">
                        Accepted formats: PDF, DOC, DOCX.
                      </p>

                    </div>

                  </div>

                </div>

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

          </div>

        </section>

      </div>

      {/* ================= SUCCESS POPUP ================= */}

      {showSuccess && (

        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#071C30]/75 px-4 backdrop-blur-sm">

          <div className="relative w-full max-w-[440px] rounded-2xl border border-[#D5E0E9] bg-white p-7 text-center shadow-2xl sm:p-10">

            {/* Success Icon */}

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