import React, { useRef, useState } from "react";


const careerPositions = [
  { department: "Operations", title: "Operations Manager", experience: "4–7 years", summary: "Lead service delivery, workflows, resource planning, operational controls and performance reporting." },
  { department: "Operations", title: "Operations Executive / Coordinator", experience: "0–3 years", summary: "Coordinate daily workflows, case tracking, shift handovers and operational reports." },
  { department: "Anti-Piracy & Content Protection", title: "Anti-Piracy Analyst", experience: "0–3 years", summary: "Monitor digital channels, identify unauthorized content, document evidence and support takedown workflows." },
  { department: "Anti-Piracy & Content Protection", title: "Senior Anti-Piracy Analyst / Investigator", experience: "3–5 years", summary: "Investigate piracy networks, validate evidence, guide analysts and improve detection workflows." },
  { department: "Brand Protection & Enforcement", title: "Brand Protection Analyst", experience: "0–3 years", summary: "Monitor online misuse of brands, trademarks, domains, social profiles and marketplace listings." },
  { department: "Brand Protection & Enforcement", title: "Enforcement / Takedown Specialist", experience: "1–4 years", summary: "Review evidence, submit authorized platform reports and track enforcement outcomes." },
  { department: "Sales & Business Development", title: "Business Development Executive", experience: "1–3 years", summary: "Research prospective clients, generate qualified opportunities and manage the sales pipeline." },
  { department: "Sales & Business Development", title: "Sales / Business Development Manager", experience: "5+ years", summary: "Lead sales strategy, strategic accounts, proposals, negotiations and revenue forecasting." },
  { department: "Marketing & Communications", title: "Digital Marketing Executive", experience: "0–3 years", summary: "Plan digital campaigns, SEO, website updates, social content and performance reporting." },
  { department: "Marketing & Communications", title: "Content & Communications Specialist", experience: "2+ years", summary: "Create accurate website copy, blogs, explainers, newsletters and corporate communications." },
  { department: "Legal & Compliance", title: "Legal Associate – IP / Copyright", experience: "0–3 years", summary: "Support legal research, copyright and trademark documentation, evidence packs and approved workflows." },
  { department: "Legal & Compliance", title: "Compliance Specialist", experience: "1–4 years", summary: "Maintain compliance controls, review workflows, track policy changes and document corrective actions." },
  { department: "Finance & Accounts", title: "Accounts Executive", experience: "0–3 years", summary: "Maintain financial records, invoices, receipts, reconciliations and accounting documentation." },
  { department: "Finance & Accounts", title: "Finance Manager", experience: "5+ years", summary: "Oversee budgeting, cash-flow forecasts, financial reporting, controls and financial risk analysis." },
  { department: "Human Resources & Administration", title: "HR / Talent Acquisition Executive", experience: "0–3 years", summary: "Coordinate job postings, candidate screening, interviews, onboarding and HR records." },
  { department: "Human Resources & Administration", title: "HR Manager", experience: "5+ years", summary: "Lead workforce planning, HR policies, performance processes, training and employee engagement." },
  { department: "IT, Engineering & Technology Operations", title: "Software Developer", experience: "1–4 years", summary: "Build and maintain frontend, backend and API features for platform and internal tools." },
  { department: "IT, Engineering & Technology Operations", title: "DevOps / Cloud Engineer", experience: "2–5 years", summary: "Maintain cloud infrastructure, CI/CD pipelines, monitoring, deployment and reliability." },
  { department: "MIS & Data Analytics", title: "MIS Executive", experience: "0–3 years", summary: "Prepare operational reports, validate data and maintain management information." },
  { department: "MIS & Data Analytics", title: "Data Analyst / BI Analyst", experience: "1–4 years", summary: "Analyze operational data, build dashboards, define metrics and communicate insights." },
  { department: "Client Success & Account Management", title: "Client Success Executive", experience: "1–3 years", summary: "Support client onboarding, service coordination, requests, reporting and follow-ups." },
  { department: "Client Success & Account Management", title: "Client Success Lead / Account Manager", experience: "4+ years", summary: "Own client relationships, service reviews, escalations, account health and improvement plans." },
  { department: "Quality Assurance & Research / Threat Intelligence", title: "Quality Assurance Analyst", experience: "1–3 years", summary: "Audit monitoring and case handling quality, document findings and recommend process improvements." },
  { department: "Quality Assurance & Research / Threat Intelligence", title: "OSINT / Threat Intelligence Analyst", experience: "1–4 years", summary: "Research public-source digital threats, piracy infrastructure, suspicious domains and abuse patterns." },
  { department: "Specialist Roles", title: "Live Streaming Analyst", experience: "As per approved vacancy", summary: "Monitor unauthorized live broadcasts and investigate stream sources under approved procedures." },
  { department: "Specialist Roles", title: "Platform Compliance Specialist", experience: "As per approved vacancy", summary: "Handle platform-specific reporting workflows and policy requirements." },
  { department: "Specialist Roles", title: "App Store Compliance Specialist", experience: "As per approved vacancy", summary: "Identify potentially infringing mobile apps and prepare platform reports." },
  { department: "Specialist Roles", title: "Digital Forensics Specialist", experience: "As per approved vacancy", summary: "Preserve and document digital evidence using approved forensic procedures." },
  { department: "Specialist Roles", title: "Web Scraping & Automation Engineer", experience: "As per approved vacancy", summary: "Build authorized crawlers, monitoring systems and infringement-detection workflows." },
  { department: "Specialist Roles", title: "Technical Support Specialist", experience: "As per approved vacancy", summary: "Support clients and internal teams with platform usage and troubleshooting." },
  { department: "Internships", title: "Intern – Anti-Piracy / Brand Protection / Legal / Data / Technology", experience: "Internship", summary: "Support supervised research, documentation, analysis or development tasks." },
];

const careerBenefits = [
  { title: "Meaningful work", description: "Protect content, creativity and intellectual property.", image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=85" },
  { title: "Technology & innovation", description: "Work with automation, analytics and digital security.", image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=85" },
  { title: "Career development", description: "Build skills and grow across different functions.", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=85" },
  { title: "Team culture", description: "Collaborate with people who value ideas and ownership.", image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=900&q=85" },
];

const applicationSteps = [
  { title: "Explore opportunities", description: "Find a suitable department and position." },
  { title: "Submit your application", description: "Share your resume and relevant details." },
  { title: "Interview & assessment", description: "Discuss your experience, skills and role requirements." },
  { title: "Selection & onboarding", description: "Complete the selection process and join the team." },
];

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
    positionApplied: "",
    portfolio: "",
    termsAccepted: false,
  };

  const [formData, setFormData] = useState(initialFormData);
  const [resume, setResume] = useState(null);

  const [loading, setLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState("");
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("All departments");
  const [selectedExperience, setSelectedExperience] = useState("All experience levels");
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

  const getExperienceLevel = (experience) => {
    if (experience === "Internship") return "Internship";
    if (experience === "As per approved vacancy") return "To be confirmed";
    if (experience.includes("5+") || experience.includes("4–7") || experience.includes("4+")) return "Senior";
    if (experience.includes("3–5") || experience.includes("2–5") || experience.includes("1–4") || experience.includes("1–3")) return "Mid-level";
    return "Entry-level";
  };

  const departments = ["All departments", ...new Set(careerPositions.map((item) => item.department))];
  const experienceLevels = ["All experience levels", "Entry-level", "Mid-level", "Senior", "Internship", "To be confirmed"];

  const filteredPositions = careerPositions.filter((position) => {
    const query = searchTerm.trim().toLowerCase();
    const matchesSearch =
      !query ||
      position.title.toLowerCase().includes(query) ||
      position.department.toLowerCase().includes(query) ||
      position.summary.toLowerCase().includes(query);
    const matchesDepartment =
      selectedDepartment === "All departments" || position.department === selectedDepartment;
    const matchesExperience =
      selectedExperience === "All experience levels" ||
      getExperienceLevel(position.experience) === selectedExperience;

    return matchesSearch && matchesDepartment && matchesExperience;
  });

  const applyForPosition = (positionTitle) => {
    setFormData((prev) => ({ ...prev, positionApplied: positionTitle }));
    setShowApplicationForm(true);
    window.setTimeout(() => {
      document.getElementById("career-application-form")?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  const closeApplicationForm = () => {
    setShowApplicationForm(false);
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
    <main className="relative mt-[100px] min-h-screen w-full overflow-hidden bg-[linear-gradient(180deg,#F7FAFC_0%,#EEF4F8_100%)] px-3 pb-16 pt-5 font-['Roboto',Arial,sans-serif] !text-[#18324B] sm:px-5 sm:pt-8">

      <div className="mx-auto w-full max-w-[1380px]">

        {/* ================= CAREER INTRODUCTION ================= */}
        <section className="relative mb-12 overflow-hidden rounded-[28px] border border-[#29445C] bg-gradient-to-br from-[#0B2033] via-[#132D45] to-[#1C3B53] px-6 py-12 text-white shadow-[0_24px_70px_rgba(11,32,51,0.22)] sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div aria-hidden="true" className="pointer-events-none absolute -right-16 -top-24 h-80 w-80 rounded-full border border-[#ADD122]/20 bg-[#8BB630]/10 blur-3xl" />
          <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-1/4 h-px w-2/3 bg-gradient-to-r from-transparent via-[#ADD122]/70 to-transparent" />
          <div className="relative z-10"><p className="text-xs font-bold uppercase tracking-[2.5px] text-[#ADD122]">Careers at TrackOwls</p>
          <h1 className="mt-3 max-w-3xl text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
            Protecting what matters. Building what’s next.
          </h1>
          <p className="mt-5 max-w-3xl text-sm leading-7 text-white/80 sm:text-base">
            Explore opportunities across anti-piracy, content protection, brand protection,
            technology, operations and business functions. Select a role to begin your application.
          </p>
          <a href="#career-positions" className="mt-8 inline-flex items-center rounded-xl bg-[#ADD122] px-6 py-3.5 text-sm font-extrabold text-[#10283D] shadow-[0_8px_25px_rgba(173,209,34,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#BDE83A]">
            Explore positions <span className="ml-2" aria-hidden="true">↓</span>
          </a></div>
        </section>

        {/* ================= WHY JOIN TRACKOWLS ================= */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-extrabold text-[#132D45] sm:text-3xl">Why join TrackOwls?</h2>
          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {careerBenefits.map((benefit) => (
              <article key={benefit.title} className="group min-w-0 overflow-hidden rounded-2xl border border-[#DCE5EC] bg-white p-2.5 shadow-[0_8px_28px_rgba(24,50,75,0.05)] transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-3">
                <img src={benefit.image} alt={benefit.title} loading="lazy" className="h-32 w-full rounded-xl object-cover transition duration-500 group-hover:scale-[1.02] sm:h-48" />
                <h3 className="mt-3 text-lg font-extrabold leading-tight text-[#132D45] sm:text-xl">{benefit.title}</h3>
                <p className="mt-1 text-sm leading-6 text-[#52677B] sm:text-base">{benefit.description}</p>
              </article>
            ))}
          </div>
        </section>

        {/* ================= APPLICATION PROCESS ================= */}
        <section className="mb-12">
          <h2 className="mb-6 text-2xl font-extrabold text-[#132D45] sm:text-3xl">Application process</h2>
          <ol className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {applicationSteps.map((step, index) => (
              <li key={step.title} className="flex gap-4 rounded-2xl border border-[#DCE5EC] bg-white p-5 shadow-[0_6px_22px_rgba(24,50,75,0.04)]">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#8BB630]/15 text-base font-extrabold text-[#52751A]">{index + 1}</span>
                <div>
                  <h3 className="text-base font-extrabold text-[#132D45] sm:text-lg">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#52677B] sm:text-base">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ================= OPEN POSITIONS ================= */}
        <section id="career-positions" className="mb-12 scroll-mt-28">
          <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[2px] text-[#709A1C]">Explore opportunities</p>
              <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-[#132D45] sm:text-3xl">Find your place at TrackOwls</h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#52677B]">
                Search roles and narrow the list by department or experience level.
              </p>
            </div>
            <span className="w-fit rounded-full border border-[#8BB630]/30 bg-[#8BB630]/10 px-4 py-2 text-xs font-extrabold text-[#52751A]">
              {filteredPositions.length} of {careerPositions.length} role profiles
            </span>
          </div>

          {/* Opportunity filters */}
          <div className="mb-6 rounded-2xl border border-[#D9E3EA] bg-white p-4 shadow-[0_8px_30px_rgba(24,50,75,0.05)] sm:p-5">
            <div className="grid grid-cols-1 gap-3 md:grid-cols-[1.2fr_1fr_1fr_auto]">
              <label className="block">
                <span className="mb-1.5 block text-xs font-bold text-[#18324B]">Search positions</span>
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search job title or keyword..."
                  className="w-full rounded-xl border border-[#C9D6E0] bg-[#F8FAFC] px-4 py-3 text-sm text-[#18324B] outline-none transition placeholder:text-[#8293A3] focus:border-[#8BB630] focus:ring-2 focus:ring-[#8BB630]/20"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-bold text-[#18324B]">Department</span>
                <select
                  value={selectedDepartment}
                  onChange={(event) => setSelectedDepartment(event.target.value)}
                  aria-label="Filter positions by department"
                  className="career-filter-select !w-full !rounded-xl !border !border-[#C9D6E0] !bg-white !px-4 !py-3 !text-sm !text-[#18324B] opacity-100 outline-none focus:!border-[#8BB630] focus:ring-2 focus:ring-[#8BB630]/20"
                  style={{ color: "#18324B", backgroundColor: "#FFFFFF", colorScheme: "light", WebkitTextFillColor: "#18324B" }}
                >
                  {departments.map((department) => <option key={department} value={department} style={{ color: "#18324B", backgroundColor: "#FFFFFF" }}>{department}</option>)}
                </select>
              </label>

              <label className="block">
                <span className="mb-1.5 block text-xs font-bold text-[#18324B]">Experience level</span>
                <select
                  value={selectedExperience}
                  onChange={(event) => setSelectedExperience(event.target.value)}
                  aria-label="Filter positions by experience level"
                  className="career-filter-select !w-full !rounded-xl !border !border-[#C9D6E0] !bg-white !px-4 !py-3 !text-sm !text-[#18324B] opacity-100 outline-none focus:!border-[#8BB630] focus:ring-2 focus:ring-[#8BB630]/20"
                  style={{ color: "#18324B", backgroundColor: "#FFFFFF", colorScheme: "light", WebkitTextFillColor: "#18324B" }}
                >
                  {experienceLevels.map((level) => <option key={level} value={level} style={{ color: "#18324B", backgroundColor: "#FFFFFF" }}>{level}</option>)}
                </select>
              </label>

              <div className="flex items-end">
                <button
                  type="button"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedDepartment("All departments");
                    setSelectedExperience("All experience levels");
                  }}
                  className="w-full rounded-xl border border-[#C9D6E0] px-4 py-3 text-sm font-bold text-[#18324B] transition hover:border-[#8BB630] hover:bg-[#8BB630]/10 md:w-auto"
                >
                  Clear filters
                </button>
              </div>
            </div>
          </div>

          {filteredPositions.length > 0 ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {filteredPositions.map((position) => (
                <article
                  key={`${position.department}-${position.title}`}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-[#D8E2EA] bg-white p-5 shadow-[0_8px_28px_rgba(24,50,75,0.055)] transition duration-300 hover:-translate-y-1 hover:border-[#8BB630]/70 hover:shadow-[0_18px_42px_rgba(24,50,75,0.12)] sm:p-6"
                >
                  <div className="absolute left-0 top-0 h-1 w-full origin-left scale-x-0 bg-[#8BB630] transition-transform duration-300 group-hover:scale-x-100" />
                  <p className="text-[10px] font-extrabold uppercase leading-5 tracking-[1.3px] text-[#709A1C]">{position.department}</p>
                  <h3 className="mt-2 text-lg font-extrabold leading-snug text-[#132D45]">{position.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-[#52677B]">{position.summary}</p>
                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-[#E5ECF1] pt-4">
                    <span className="rounded-full bg-[#F1F6FA] px-3 py-1.5 text-[11px] font-bold text-[#52677B]">
                      {position.experience}
                    </span>
                    <button
                      type="button"
                      onClick={() => applyForPosition(position.title)}
                      className="inline-flex items-center gap-2 rounded-xl bg-[#8BB630] px-4 py-2.5 text-xs font-extrabold text-[#10283D] transition duration-300 hover:-translate-y-0.5 hover:bg-[#ADD122] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8BB630]"
                    >
                      Apply for this role <span aria-hidden="true">→</span>
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-[#B8C9D8] bg-white px-5 py-12 text-center">
              <h3 className="text-lg font-extrabold text-[#132D45]">No matching positions found</h3>
              <p className="mt-2 text-sm text-[#52677B]">Try another keyword or clear the filters to view all role profiles.</p>
            </div>
          )}

          {/* General opportunities note: no email address or separate apply button */}
          <div className="relative mt-7 overflow-hidden rounded-2xl bg-gradient-to-r from-[#10283D] to-[#1B3D57] p-6 text-white shadow-[0_14px_38px_rgba(16,40,61,0.16)] sm:p-8">
            <div aria-hidden="true" className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full border border-[#ADD122]/20 bg-[#8BB630]/10 blur-2xl" />
            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex rounded-full border border-[#ADD122]/25 bg-[#8BB630]/15 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[1.5px] text-[#D5F27A]">Future opportunities</span>
              <h3 className="mt-4 text-xl font-extrabold sm:text-2xl">Don't see the right opportunity?</h3>
              <p className="mt-2 text-sm leading-7 text-white/80 sm:text-base">
                We are always interested in hearing from people who care about protecting digital content and brands. Explore the role profiles above and check back as approved opportunities are published.
              </p>
              <button
    type="button"
    onClick={() => applyForPosition("Open Application / Other")}
    className="inline-flex items-center mt-2 gap-2 rounded-xl border border-[#ADD122]/50 bg-[#8BB630]/15 px-5 py-3 text-sm font-bold text-[#D5F27A] transition-all duration-300 hover:-translate-y-1 hover:border-[#ADD122] hover:bg-[#8BB630]/25 hover:shadow-lg"
  >
    Open Application / Other
    <span aria-hidden="true">↗</span>
  </button>
            </div>
          </div>

          <p className="mt-4 text-xs leading-5 text-[#718295]">
            These are illustrative role profiles, not confirmation of current vacancies. Only approved openings should be treated as active vacancies.
          </p>
        </section>

        {/* ================= APPLICATION FORM ================= */}
        {showApplicationForm && (
        <section
          id="career-application-form"
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
            <div className="mb-6 flex justify-end">
              <button
                type="button"
                onClick={closeApplicationForm}
                className="inline-flex items-center gap-2 rounded-lg border border-[#C9D6E0] px-4 py-2 text-xs font-bold text-[#18324B] transition hover:border-[#8BB630] hover:bg-[#8BB630]/10"
              >
                <span aria-hidden="true">×</span> Close application form
              </button>
            </div>

            {/* FORM HEADING */}

            <div className="mb-9">

              <span className="text-[12px] font-bold uppercase tracking-[1.8px] !text-[#709A1C]">
                Join Our Team
              </span>

              <h2 className="mt-3 text-[27px] font-bold tracking-tight !text-white sm:text-[35px]">
                Register your interest.
              </h2>

              <p className="mt-4 max-w-[850px] text-[14px] leading-[1.9] !text-[#94a3b8] sm:text-[15px]">
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
              {/* Verified from the supplied Zoho Career form HTML:
                  Dropdown1 = optional generic Dropdown
                  Dropdown2 = Position Applied For
                  Dropdown = Notice Period */}
              <input type="hidden" name="Dropdown2" value={formData.positionApplied || "-Select-"} />
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
                      className={`${inputStyle} career-form-select cursor-pointer`}
                      style={{
                        color: "#FFFFFF",
                        backgroundColor: "#10283D",
                        colorScheme: "dark",
                        WebkitTextFillColor: "#FFFFFF",
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

                  {/* POSITION APPLIED */}
                  <div className="sm:col-span-2">
                    <label htmlFor="positionApplied" className={labelStyle}>
                      Position Applied For <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="positionApplied"
                      name="positionApplied"
                      value={formData.positionApplied}
                      onChange={handleChange}
                      className={`${inputStyle} career-form-select cursor-pointer`}
                      style={{
                         color: "#FFFFFF",
                         backgroundColor: "#10283D",
                         colorScheme: "dark",
                         WebkitTextFillColor: "#FFFFFF",
                       }}
                      required
                    >
                      <option value="">Select a position</option>
                      {careerPositions.map((position) => (
                        <option key={`${position.department}-${position.title}`} value={position.title}>
                          {position.title} — {position.department}
                        </option>
                      ))}
                      <option value="Open Application / Other">
  Open Application / Other
</option>
                    </select>
                    <p className="mt-2 text-xs !text-[#52677B]">
                      Selecting “Apply for this role” above will automatically choose the position here.
                    </p>
                  </div>

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
                      className={`${inputStyle} career-form-select cursor-pointer`}
                      style={{
                        color: "#FFFFFF",
                        backgroundColor: "#10283D",
                        colorScheme: "dark",
                        WebkitTextFillColor: "#FFFFFF",
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
                        <p className="mt-3 break-all text-[12px] font-semibold !text-white/80">
                          Selected: {resume.name}
                        </p>
                      )}

                      <p className="mt-3 text-[12px] !text-white/80">
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
        )}

      </div>

      {/* Keep native filter dropdown text readable even when global theme styles target select/options. */}
      <style>{`
        /* Opportunity filters: keep their existing light appearance. */
        #career-positions .career-filter-select,
        #career-positions .career-filter-select:focus {
          color: #18324B !important;
          -webkit-text-fill-color: #18324B !important;
          background-color: #FFFFFF !important;
          opacity: 1 !important;
          color-scheme: light;
        }
        #career-positions .career-filter-select option {
          color: #18324B !important;
          -webkit-text-fill-color: #18324B !important;
          background: #FFFFFF !important;
          opacity: 1 !important;
        }

        /* Application form dropdowns only: TrackOwls navy blue. */
        #career-application-form .career-form-select,
        #career-application-form .career-form-select:focus {
          color: #FFFFFF !important;
          -webkit-text-fill-color: #FFFFFF !important;
          background-color: #10283D !important;
          color-scheme: dark;
          border-color: #29445C !important;
          opacity: 1 !important;
        }
        #career-application-form .career-form-select option {
          color: #FFFFFF !important;
          -webkit-text-fill-color: #FFFFFF !important;
          background-color: #10283D !important;
        }
        #career-application-form .career-form-select option:checked {
          color: #FFFFFF !important;
          background-color: #1B3D57 !important;
        }
      `}</style>

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