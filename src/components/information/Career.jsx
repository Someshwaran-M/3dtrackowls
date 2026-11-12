
import React, { useState } from "react";

function Career() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
    noticePeriod: "",
  });

  const [resume, setResume] = useState(null);
  const [coverLetter, setCoverLetter] = useState(null);

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        state: "",
        noticePeriod: "",
      });

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

  // Input Styling
  const inputStyle =
    "mt-2 w-full rounded-lg border border-[#C8D5DF] bg-white/95 px-4 py-3 text-[14px] font-normal text-[#18324B] outline-none transition-all duration-300 placeholder:text-[#8293A3] focus:border-[#8BB630] focus:bg-white focus:ring-2 focus:ring-[#8BB630]/20";

  const labelStyle =
    "block text-[14px] font-semibold text-[#18324B]";

  const sectionHeading =
    "mb-6 border-b border-[#D4E0EC] pb-3 text-[19px] font-bold text-[#102B43]";

  return (
    <main className="relative mt-25 min-h-screen w-full overflow-hidden bg-[#EAF3F9] px-3 pb-16 pt-3 font-['Roboto',Arial,sans-serif] text-[#18324B] sm:px-5">

      <div className="mx-auto w-full max-w-[1350px]">

        {/* ================= HERO SECTION ================= */}

        <section className="relative flex min-h-[260px] items-center overflow-hidden rounded-lg border border-[#B7C6CB] bg-[#071C30]">

          <div
            aria-hidden="true"
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "linear-gradient(90deg, rgba(7,28,48,0.97) 0%, rgba(7,28,48,0.88) 48%, rgba(7,28,48,0.48) 100%), url('/globe.png')",
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse at 72% 38%, rgba(139,182,48,0.13), transparent 48%)",
            }}
          />

          <div className="relative z-10 w-full px-6 py-12 sm:px-8 lg:px-10">

            <span className="text-[12px] font-bold uppercase tracking-[1.5px] text-[#D5F51F]">
              Careers
            </span>

            <h1 className="mt-4 max-w-[650px] text-[34px] font-bold leading-tight tracking-tight text-white sm:text-[42px] lg:text-[46px]">
              Help protect what creators
              <br className="hidden sm:block" /> build.
            </h1>

            <p className="mt-4 max-w-[560px] text-[15px] leading-relaxed text-[#D0DCE6]">
              Opportunities in anti-piracy operations, investigation,
              engineering and business development.
            </p>

          </div>
        </section>

        {/* ================= APPLICATION FORM ================= */}

        <section
          id="contact"
          className="relative mt-12 overflow-hidden rounded-2xl border border-white/80 bg-white/75 px-5 py-8 shadow-[0_15px_50px_rgba(24,50,75,0.08)] backdrop-blur-md sm:px-8 sm:py-10 lg:px-10"
        >

          {/* GLASSMORPHISM BACKGROUND */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#8BB630]/10 blur-[80px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#A9CBE3]/20 blur-[80px]"
          />

          {/* FORM CONTENT */}

          <div className="relative z-10">

            <h2 className="text-[28px] font-bold tracking-tight text-[#102B43] sm:text-[34px]">
              Register your interest.
            </h2>

            <p className="mt-3 max-w-[900px] text-[15px] leading-[1.8] text-[#435C75]">
              Interested in joining TrackOwls? Complete the application
              form below with your personal and professional details.
              Our recruitment team will review your application and
              contact you.
            </p>

            <form onSubmit={handleSubmit} className="mt-9 space-y-9">

              {/* PERSONAL INFORMATION */}

              <div>

                <h3 className={sectionHeading}>
                  Personal Information
                </h3>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">

                  <div>
                    <label className={labelStyle}>
                      Full Name *
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={inputStyle}
                      required
                    />
                  </div>

                  <div>
                    <label className={labelStyle}>
                      Phone Number *
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter phone number"
                      className={inputStyle}
                      required
                    />
                  </div>

                  <div>
                    <label className={labelStyle}>
                      Email Address *
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email address"
                      className={inputStyle}
                      required
                    />
                  </div>

                  <div className="sm:col-span-2 lg:col-span-3">

                    <label className={labelStyle}>
                      Address *
                    </label>

                    <textarea
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter your complete address"
                      rows="3"
                      className={`${inputStyle} resize-none`}
                      required
                    />

                  </div>

                  <div>
                    <label className={labelStyle}>
                      City *
                    </label>

                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="Enter city"
                      className={inputStyle}
                      required
                    />
                  </div>

                  <div>
                    <label className={labelStyle}>
                      State *
                    </label>

                    <input
                      type="text"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Enter state"
                      className={inputStyle}
                      required
                    />
                  </div>

                </div>
              </div>

              {/* PROFESSIONAL INFORMATION */}

              <div>

                <h3 className={sectionHeading}>
                  Professional Information
                </h3>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                  <div>
                    <label className={labelStyle}>
                      Notice Period *
                    </label>

               <select
  name="noticePeriod"
  value={formData.noticePeriod}
  onChange={handleChange}
  className={`${inputStyle} !bg-white !text-[#18324B] cursor-pointer`}
  style={{
    color: "#18324B",
    backgroundColor: "#FFFFFF",
    colorScheme: "light",
    opacity: 1,
  }}
  required
>
  <option value="">Select notice period</option>
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

              {/* ATTACHMENTS */}

              <div>

                <h3 className={sectionHeading}>
                  Attachments
                </h3>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                  <div>

                    <label className={labelStyle}>
                      Upload Resume *
                    </label>

                     <input
      id="resume"
      type="file"
      accept=".pdf,.doc,.docx"
      onChange={(e) => setResume(e.target.files[0] || null)}
      className="block w-full cursor-pointer text-[13px] text-[#18324B]
        file:mr-4 file:cursor-pointer file:rounded-md
        file:border-0 file:bg-[#8BB630]
        file:px-5 file:py-2.5
        file:text-[13px] file:font-bold
        file:text-[#071C30]
        hover:file:bg-[#ADD122]"
      required
    />

                    <p className="mt-2 text-[12px] text-[#52677B]">
                      Accepted formats: PDF, DOC, DOCX.
                    </p>

                  </div>

                  <div>

                    <label className={labelStyle}>
                      Upload Cover Letter
                    </label>

                     <input
      id="coverLetter"
      type="file"
      accept=".pdf,.doc,.docx"
      onChange={(e) => setCoverLetter(e.target.files[0] || null)}
      className="block w-full cursor-pointer text-[13px] text-[#18324B]
        file:mr-4 file:cursor-pointer file:rounded-md
        file:border-0 file:bg-[#8BB630]
        file:px-5 file:py-2.5
        file:text-[13px] file:font-bold
        file:text-[#071C30]
        hover:file:bg-[#ADD122]"
    />

                    <p className="mt-2 text-[12px] text-[#52677B]">
                      Accepted formats: PDF, DOC, DOCX.
                    </p>

                  </div>

                </div>
              </div>

              {/* ERROR MESSAGE */}

              {error && (
                <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-700">
                  {error}
                </div>
              )}

              {/* SUBMIT BUTTON */}

              <div className="border-t border-[#D4E0EC] pt-7">

                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[#8BB630] px-10 py-3 text-[14px] font-bold text-[#071C30] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ADD122] hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Submitting..." : "Submit Application"}
                </button>

                <p className="mt-4 text-[13px] leading-relaxed text-[#52677B]">
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

        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#071C30]/60 px-4 backdrop-blur-md">

          <div className="relative w-full max-w-[440px] rounded-2xl border border-white/80 bg-white/95 p-8 text-center shadow-2xl sm:p-10">

            {/* SUCCESS ICON */}

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-[#8BB630]/20 bg-[#8BB630]/15">

              <svg
                className="h-10 w-10 text-[#709A1C]"
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

            <h2 className="mt-6 text-[25px] font-bold text-[#18324B]">
              Application Submitted!
            </h2>

            <p className="mt-4 text-[14px] leading-[1.8] text-[#52677B]">
              Thank you for your interest in joining TrackOwls.
              Your application has been received successfully.
              Our team will review your details and contact you shortly.
            </p>

            <button
              onClick={() => setShowSuccess(false)}
              className="mt-7 w-full rounded-lg bg-[#8BB630] px-6 py-3 text-[14px] font-bold text-[#071C30] transition-all duration-300 hover:bg-[#ADD122]"
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
