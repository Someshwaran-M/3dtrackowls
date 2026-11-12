import React, { useState } from "react";

const faqData = [
  {
    category: "General",
    questions: [
      {
        question: "What is TrackOwls?",
        answer:
          "TrackOwls is an anti-piracy solution focused on helping creators, businesses and content owners identify, monitor and address unauthorized distribution of their digital content.",
      },
      {
        question: "What services does TrackOwls provide?",
        answer:
          "TrackOwls focuses on digital content monitoring, piracy detection, evidence verification, enforcement support and content protection solutions.",
      },
      {
        question: "Who can use TrackOwls?",
        answer:
          "TrackOwls is designed for content creators, production companies, entertainment businesses, brands, publishers and organizations looking to protect their digital assets.",
      },
      {
        question: "Why is digital content protection important?",
        answer:
          "Digital piracy can affect revenue, brand reputation and intellectual property rights. Monitoring and identifying unauthorized content helps businesses take informed action to protect their work.",
      },
    ],
  },
  {
    category: "Anti-Piracy & Protection",
    questions: [
      {
        question: "How does TrackOwls detect pirated content?",
        answer:
          "TrackOwls uses content monitoring and verification processes to help identify potentially unauthorized copies of digital content across online platforms.",
      },
      {
        question: "What types of content can be protected?",
        answer:
          "Depending on the service and monitoring requirements, protection can cover digital media, videos, films, creative assets and other intellectual property.",
      },
      {
        question: "Can TrackOwls help with unauthorized content?",
        answer:
          "TrackOwls can support the identification, documentation and reporting of unauthorized content to help content owners pursue appropriate enforcement procedures.",
      },
      {
        question: "Does TrackOwls provide evidence verification?",
        answer:
          "Evidence verification is part of the content protection workflow. Relevant information can be reviewed and documented to support further action.",
      },
    ],
  },
  {
    category: "Platform & Technology",
    questions: [
      {
        question: "Which platforms does TrackOwls monitor?",
        answer:
          "Monitoring coverage depends on the selected service and project requirements. Contact our team to discuss the platforms relevant to your content.",
      },
      {
        question: "Can businesses request customized solutions?",
        answer:
          "Yes. Businesses can contact TrackOwls to discuss their content protection requirements and explore suitable solutions.",
      },
      {
        question: "How can I get started with TrackOwls?",
        answer:
          "You can reach out through our contact page with your requirements. Our team can understand your needs and guide you through the next steps.",
      },
    ],
  },
  {
    category: "Careers & Support",
    questions: [
      {
        question: "How can I join the TrackOwls team?",
        answer:
          "Visit our Careers page and submit your application with your personal details, resume and other requested information.",
      },
      {
        question: "How can I contact TrackOwls?",
        answer:
          "You can contact our team through the website or email us at info@trackowls.com for business enquiries and support.",
      },
      {
        question: "How long does it take to receive a response?",
        answer:
          "Our team will review your enquiry and get back to you as soon as possible. Response times may vary depending on the nature of your request.",
      },
    ],
  },
];

function FAQ() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openQuestion, setOpenQuestion] = useState(null);

  const categories = [
    "All",
    ...faqData.map((item) => item.category),
  ];

  const filteredFAQs =
    activeCategory === "All"
      ? faqData
      : faqData.filter(
          (item) => item.category === activeCategory
        );

  const toggleQuestion = (id) => {
    setOpenQuestion((previous) =>
      previous === id ? null : id
    );
  };

  return (
    <main className="relative mt-25 min-h-screen w-full overflow-hidden bg-[#07111F] px-4 pb-20 pt-10 font-['Roboto',Arial,sans-serif] sm:px-6 lg:px-8">

      {/* CLEAN NAVY BACKGROUND */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 75% 10%, rgba(139,182,48,0.09), transparent 45%)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1250px]">

        {/* ================= HERO SECTION ================= */}

        <section className="relative overflow-hidden rounded-xl border border-white/10 bg-[#0B1A2B]/90 px-6 py-14 shadow-xl backdrop-blur-md sm:px-10 sm:py-16 lg:px-16">

          {/* Subtle Glow */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#8BB630]/10 blur-[100px]"
          />

          <div className="relative z-10 max-w-[750px]">

            <span className="text-[12px] font-bold uppercase tracking-[2px] text-[#ADD122]">
              Help Center
            </span>

            <h1 className="mt-5 text-[36px] font-bold leading-tight tracking-tight text-white sm:text-[46px] lg:text-[54px]">
              Frequently Asked

              <span className="block text-[#ADD122]">
                Questions.
              </span>
            </h1>

            <p className="mt-5 max-w-[620px] text-[15px] leading-[1.9] text-[#C5D0DC] sm:text-[16px]">
              Find answers to common questions about TrackOwls,
              digital content protection, anti-piracy solutions
              and our services.
            </p>

          </div>
        </section>

        {/* ================= FAQ CONTENT ================= */}

        <section className="mt-14">

          {/* SECTION HEADING */}

          <div className="mb-9 text-center">

            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#ADD122]">
              Knowledge Base
            </span>

            <h2 className="mt-3 text-[28px] font-bold tracking-tight text-white sm:text-[36px]">
              How Can We Help You?
            </h2>

            <p className="mx-auto mt-3 max-w-[600px] text-[14px] leading-relaxed text-[#B5C2D0]">
              Explore our frequently asked questions to learn
              more about our services and solutions.
            </p>

          </div>

          {/* ================= CATEGORY FILTER ================= */}

          <div className="mb-12 flex flex-wrap justify-center gap-3">

            {categories.map((category) => (

              <button
                key={category}
                type="button"
                onClick={() => {
                  setActiveCategory(category);
                  setOpenQuestion(null);
                }}
                className={`rounded-full border px-5 py-3 text-[13px] font-bold transition-all duration-300 sm:px-6 ${
                  activeCategory === category
                    ? "border-[#8BB630] bg-[#8BB630] text-[#07111F] shadow-[0_0_20px_rgba(139,182,48,0.25)]"
                    : "border-white/20 bg-[#142438] text-white hover:border-[#8BB630] hover:bg-[#8BB630]/15 hover:text-[#ADD122]"
                }`}
              >
                {category}
              </button>

            ))}

          </div>

          {/* ================= FAQ ACCORDION ================= */}

          <div className="mx-auto max-w-[1150px] space-y-10">

            {filteredFAQs.map((group) => (

              <div key={group.category}>

                {/* CATEGORY TITLE */}

                <div className="mb-6 flex items-center gap-4">

                  <div className="h-[4px] w-10 shrink-0 rounded-full bg-[#8BB630]" />

                  <h3 className="text-[18px] font-bold text-white">
                    {group.category}
                  </h3>

                </div>

                {/* QUESTIONS */}

                <div className="space-y-3">

                  {group.questions.map((faq, questionIndex) => {

                    const uniqueId =
                      `${group.category}-${questionIndex}`;

                    const isOpen =
                      openQuestion === uniqueId;

                    return (

                      <div
                        key={uniqueId}
                        className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                          isOpen
                            ? "border-[#8BB630]/60 bg-[#102237] shadow-[0_10px_35px_rgba(0,0,0,0.2)]"
                            : "border-[#34475A] bg-[#0B1A2B] hover:border-[#8BB630]/50 hover:bg-[#102237]"
                        }`}
                      >

                        {/* QUESTION BUTTON */}

                        <button
                          type="button"
                          onClick={() =>
                            toggleQuestion(uniqueId)
                          }
                          aria-expanded={isOpen}
                          aria-controls={`answer-${group.category}-${questionIndex}`}
                          className="flex w-full items-center justify-between gap-5 px-5 py-6 text-left sm:px-9 sm:py-7"
                        >

                          {/* QUESTION TEXT */}

                          <span className="text-[15px] font-bold leading-relaxed text-white sm:text-[18px]">
                            {faq.question}
                          </span>

                          {/* VISIBLE ARROW BUTTON */}

                          <span
                            className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                              isOpen
                                ? "rotate-180 bg-[#8BB630]"
                                : "bg-[#F5F8E9] hover:bg-[#ADD122]"
                            }`}
                            style={{
                              opacity: 1,
                              visibility: "visible",
                            }}
                          >

                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#07111F"
                              strokeWidth="2.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              style={{
                                display: "block",
                                opacity: 1,
                                visibility: "visible",
                              }}
                            >
                              <path d="M6 9l6 6 6-6" />
                            </svg>

                          </span>

                        </button>

                        {/* ANSWER SECTION */}

                        <div
                          id={`answer-${group.category}-${questionIndex}`}
                          className={`grid transition-all duration-300 ease-in-out ${
                            isOpen
                              ? "grid-rows-[1fr] opacity-100"
                              : "grid-rows-[0fr] opacity-0"
                          }`}
                        >

                          <div className="overflow-hidden">

                            <div className="border-t border-white/10 px-5 py-6 sm:px-9">

                              <p className="max-w-[950px] text-[14px] leading-[1.9] text-[#C4D0DC] sm:text-[15px]">
                                {faq.answer}
                              </p>

                            </div>

                          </div>

                        </div>

                      </div>

                    );

                  })}

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* ================= CONTACT SECTION ================= */}

        <section className="relative mt-20 overflow-hidden rounded-2xl border border-white/10 bg-[#0B1A2B] px-6 py-14 text-center shadow-xl backdrop-blur-xl sm:px-10 sm:py-16">

          {/* Background Glow */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-32 h-72 w-72 rounded-full bg-[#8BB630]/15 blur-[100px]"
          />

          <div className="relative z-10">

            <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#ADD122]">
              Still Have Questions?
            </span>

            <h2 className="mt-4 text-[28px] font-bold text-white sm:text-[36px]">
              We're Here to Help.
            </h2>

            <p className="mx-auto mt-4 max-w-[550px] text-[14px] leading-[1.9] text-[#C4D0DC] sm:text-[15px]">
              Can't find the answer you're looking for?
              Get in touch with our team and we'll be happy
              to assist you.
            </p>

            <a
              href="mailto:info@trackowls.com"
              className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-lg bg-[#8BB630] px-9 py-3 text-[14px] font-bold text-[#07111F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ADD122] hover:shadow-[0_8px_25px_rgba(139,182,48,0.25)]"
            >
              Contact Our Team
            </a>

          </div>

        </section>

      </div>

    </main>
  );
}

export default FAQ;
