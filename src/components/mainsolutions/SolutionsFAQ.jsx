import React, { useState } from "react";

const faqItems = [
  {
    question: "What can TrackOwls help protect?",
    answer:
      "Engagements can focus on films, episodes, live broadcasts, music, digital publications or brand assets. The asset list and service scope are agreed before work begins.",
  },
  {
    question: "How do you distinguish a finding from an infringement?",
    answer:
      "A discovery is a lead. Analyst review checks the supplied rights, asset reference and source context before treating it as a verified case for action.",
  },
  {
    question: "Which channels can be included?",
    answer:
      "The scope may include public websites, video and social platforms, marketplaces, domains and public app listings. Access, monitoring methods and reporting routes are confirmed for the selected channels.",
  },
  {
    question: "How does a consultation lead to monitoring?",
    answer:
      "Share the assets, relevant rights, priority channels and timelines. The next step is to agree authorization, coverage hours, response targets, reporting and commercial terms.",
  },
  {
    question: "What does an enforcement report include?",
    answer:
      "Reports separate discovered leads, verified cases, submitted complaints and confirmed outcomes. They can also show pending reviews, repeat appearances and channel-level activity.",
  },
  {
    question: "Is the dashboard a live client portal?",
    answer:
      "The dashboard on this website is an interactive concept for the planned TrackOwls platform. Product availability, integrations and client access are confirmed directly.",
  },
  {
    question: "Do complaints guarantee removal?",
    answer:
      "No. The receiving platform or provider decides whether and when to act. TrackOwls records the complaint status and checks the source rather than treating submission as a confirmed removal.",
  },
];

export default function SolutionsFAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFAQ = (index) => {
    setOpenIndex((currentIndex) =>
      currentIndex === index ? -1 : index
    );
  };

  return (
    <section
      id="solutions-faq"
      className="
        relative
        w-full
        overflow-hidden
        bg-transparent
        px-4
        py-14
        font-['Roboto',sans-serif]
        sm:px-6
        sm:py-16
        lg:px-20
        lg:py-24
      "
    >
      <div className="relative z-10 mx-auto w-full max-w-[1320px]">

        {/* Heading */}
        <div
          className="
            mb-10
            grid
            grid-cols-1
            gap-6
            sm:mb-12
            sm:grid-cols-[1fr_0.65fr]
            sm:items-end
            lg:mb-14
          "
        >
          <div>
            <span
              className="
                mb-5
                inline-flex
                items-center
                gap-3
                text-[11px]
                font-bold
                uppercase
                tracking-[2px]
                text-[#8BB630]
              "
            >
              <span className="h-[2px] w-7 bg-[#8BB630]" />
              Your questions
            </span>

            <h2
              className="
                text-[32px]
                font-bold
                leading-[1.15]
                tracking-[-0.8px]
                text-white
                sm:text-[40px]
                lg:text-[48px]
              "
            >
              Know what to{" "}
              <span className="text-[#8BB630]">
                expect.
              </span>
            </h2>
          </div>

          <p
            className="
              max-w-[420px]
              text-[14px]
              leading-[1.9]
              text-[#C0CCC1]
              sm:justify-self-end
              lg:text-[15px]
            "
          >
            Understand the scope, evidence and reporting before you
            start a protection engagement.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="border-t border-white/20">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `solutions-faq-answer-${index}`;

            return (
              <article
                key={item.question}
                className="
                  group
                  border-b
                  border-white/20
                  transition-colors
                  duration-300
                  hover:bg-white/[0.035]
                "
              >
                {/* Question */}
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => toggleFAQ(index)}
                  className="
                    flex
                    min-h-[72px]
                    w-full
                    items-center
                    justify-between
                    gap-5
                    px-2
                    py-5
                    text-left
                    text-[15px]
                    font-medium
                    leading-[1.6]
                    text-white
                    transition-colors
                    duration-300
                    hover:text-[#8BB630]
                    focus-visible:outline-none
                    focus-visible:ring-2
                    focus-visible:ring-[#8BB630]
                    sm:min-h-[80px]
                    sm:px-4
                    sm:text-[16px]
                    lg:text-[18px]
                  "
                >
                  <span
                    className={`
                      pr-2
                      transition-colors
                      duration-300
                      ${
                        isOpen
                          ? "text-[#8BB630]"
                          : "text-white"
                      }
                    `}
                  >
                    {item.question}
                  </span>

                  {/* Plus Icon */}
                  <span
                    className={`
                      flex
                      h-9
                      w-9
                      shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      text-[23px]
                      font-light
                      leading-none
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "rotate-45 border-[#8BB630] bg-[#8BB630] text-[#152019]"
                          : "rotate-0 border-white/30 bg-white/5 text-white group-hover:border-[#8BB630] group-hover:text-[#8BB630]"
                      }
                    `}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>

                {/* Answer with smooth animation */}
                <div
                  id={answerId}
                  aria-hidden={!isOpen}
                  className={`
                    grid
                    transition-[grid-template-rows,opacity]
                    duration-500
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="px-2 pb-7 pr-12 sm:px-4 sm:pb-8">
                      <p
                        className="
                          max-w-[900px]
                          text-[14px]
                          leading-[1.95]
                          text-[#C0CCC1]
                          sm:text-[15px]
                        "
                      >
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}