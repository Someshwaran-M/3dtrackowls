import React from "react";

const scopeItems = [
  {
    number: "01",
    title: "Assets & rights",
    description:
      "Share asset references, title variations, rights territories and enforcement authorization.",
  },
  {
    number: "02",
    title: "Scope & priorities",
    description:
      "Agree channels, event schedules, monitoring hours, response targets and escalation routes.",
  },
  {
    number: "03",
    title: "Reporting & review",
    description:
      "Set reporting frequency and review pending cases, confirmed outcomes and recurring sources.",
  },
];

function HowItWorksScope() {
  return (
    <section
      id="how-it-works-scope"
      className="relative w-full overflow-hidden bg-transparent px-3 py-5 font-['Roboto',sans-serif] sm:px-5 sm:py-7 lg:px-8 lg:py-9"
    >
      <style>{`
        @keyframes scopeReveal {
          from {
            opacity: 0;
            transform: translateY(35px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scopeGlow {
          0%, 100% {
            opacity: 0.25;
          }
          50% {
            opacity: 0.65;
          }
        }

        @keyframes scopeLine {
          from {
            transform: scaleX(0);
          }
          to {
            transform: scaleX(1);
          }
        }

        .scope-reveal {
          animation: scopeReveal 0.9s ease-out both;
        }

        .scope-card {
          animation: scopeReveal 0.9s ease-out both;
          transition:
            transform 0.5s ease,
            border-color 0.5s ease,
            background 0.5s ease,
            box-shadow 0.5s ease;
        }

        .scope-card:hover {
          transform: translateY(-10px);
          border-color: rgba(139, 182, 48, 0.7);
          background: rgba(21, 32, 25, 0.92);
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.25),
                      0 0 25px rgba(139, 182, 48, 0.08);
        }

        .scope-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #8BB630;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s ease;
        }

        .scope-card:hover::before {
          transform: scaleX(1);
        }

        .scope-glow {
          animation: scopeGlow 5s ease-in-out infinite;
        }

        .scope-card:nth-child(1) {
          animation-delay: 0.15s;
        }

        .scope-card:nth-child(2) {
          animation-delay: 0.3s;
        }

        .scope-card:nth-child(3) {
          animation-delay: 0.45s;
        }

        @media (prefers-reduced-motion: reduce) {
          .scope-reveal,
          .scope-card,
          .scope-glow {
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1750px]">

        {/* MAIN DARK PANEL */}
        <div className=" px-5 py-8  sm:rounded-[22px] sm:px-8 sm:py-10 lg:rounded-[25px] lg:px-[60px] lg:py-[58px]">

          

         

          {/* Green Atmospheric Glow */}
          <div
            aria-hidden="true"
            className="scope-glow pointer-events-none absolute -right-32 top-0 -z-10 h-[350px] w-[350px] rounded-full bg-[#8BB630]/15 blur-[110px] sm:h-[450px] sm:w-[450px]"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-20 -z-10 h-[300px] w-[300px] rounded-full bg-[#8BB630]/10 blur-[100px]"
          />

          {/* HEADING AND INTRODUCTION */}
          <div className="scope-reveal mb-8 grid grid-cols-1 gap-5 sm:mb-10 lg:mb-[54px] lg:grid-cols-[1.6fr_0.9fr] lg:items-center lg:gap-12">

            <div>
              <div className="mb-5 flex items-center gap-3">

                <span className="h-[2px] w-9 bg-[#8BB630]" />

                <span className="text-[11px] font-extrabold uppercase tracking-[2px] text-[#A5CF49] sm:text-[12px]">
                  Getting Started
                </span>

              </div>

              <h2 className="max-w-[850px] text-[30px] font-bold leading-[1.12] tracking-[-1.1px] text-white min-[400px]:text-[34px] sm:text-[40px] sm:tracking-[-1.5px] lg:text-[48px] xl:text-[52px]">

                Start with the right{" "}
                <span className="text-[#8BB630]">scope.</span>

              </h2>
            </div>

            <p className="max-w-[490px] text-[13px] leading-[1.9] text-[#B3C1B5] sm:text-[14px] lg:justify-self-end lg:text-[16px] xl:text-[17px]">

              Before monitoring begins, agree what is protected, where your
              rights apply and how cases should be prioritized.

            </p>
          </div>

          {/* THREE SCOPE CARDS */}
          <div className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-3 lg:gap-[26px]">

            {scopeItems.map((item) => (

              <article
                key={item.number}
                className="scope-card relative isolate min-w-0 overflow-hidden rounded-[16px] border border-[#8BB630]/20 bg-[#0C1811]/75 px-5 py-6 backdrop-blur-md min-[400px]:px-6 sm:rounded-[18px] sm:px-7 sm:py-7 lg:min-h-[250px] lg:px-[34px] lg:py-[34px] xl:min-h-[275px] xl:px-[35px] xl:py-[38px]"
              >

                {/* Card Glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-20 -right-16 -z-10 h-40 w-40 rounded-full bg-[#8BB630]/15 blur-[65px] transition-all duration-500 group-hover:bg-[#8BB630]/25"
                />

                {/* Number */}
                <span className="block text-[12px] font-bold tracking-[1.5px] text-[#8BB630] sm:text-[13px]">

                  {item.number}

                </span>

                {/* Title */}
                <h3 className="mt-5 text-[19px] font-bold leading-[1.3] tracking-[-0.4px] text-white transition-colors duration-300 group-hover:text-[#A5CF49] min-[400px]:text-[20px] sm:mt-6 sm:text-[22px] lg:mt-7 lg:text-[23px] xl:text-[25px]">

                  {item.title}

                </h3>

                {/* Description */}
                <p className="mt-4 max-w-[390px] text-[13px] leading-[1.85] text-[#B4C2B6] sm:text-[14px] sm:leading-[1.9] lg:text-[15px]">

                  {item.description}

                </p>

                {/* Bottom Indicator */}
                <div className="mt-7 flex items-center gap-3">

                  <span className="h-[3px] w-8 rounded-full bg-[#8BB630] transition-all duration-500 group-hover:w-16" />

                  <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#8F9D91]">

                    Requirement {item.number}

                  </span>

                </div>

              </article>

            ))}

          </div>

          {/* BOTTOM INFORMATION NOTICE */}
          <div className="scope-reveal relative mt-5 overflow-hidden rounded-[15px] border border-[#8BB630]/20 bg-[#0C1811]/65 px-5 py-5 backdrop-blur-md sm:mt-6 sm:px-6 lg:mt-[38px] lg:rounded-[18px] lg:px-[30px] lg:py-[27px]">

            {/* Accent Line */}
            <div
              aria-hidden="true"
              className="absolute bottom-0 left-0 top-0 w-[3px] bg-[#8BB630]"
            />

            <p className="text-[12px] leading-[1.8] text-[#C0CCC1] sm:text-[13px] sm:leading-[1.85] lg:text-[15px]">

              Platform response times vary. Monitoring hours and service targets
              are agreed per engagement; a complaint does not guarantee removal.

            </p>

          </div>

        </div>
      </div>
    </section>
  );
}

export default HowItWorksScope;