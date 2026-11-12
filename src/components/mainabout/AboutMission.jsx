import React, { useEffect, useRef } from "react";

function AboutMission() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("mission-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about-mission"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-transparent px-3 py-5 font-['Roboto',sans-serif] sm:px-5 sm:py-7 lg:px-8 lg:py-9"
    >
      <style>{`
        /* SCROLL REVEAL */

        [data-reveal] {
          opacity: 0;
          transform: translateY(35px);
          transition:
            opacity 0.9s ease,
            transform 0.9s cubic-bezier(0.16, 1, 0.3, 1);
        }

        [data-reveal].mission-visible {
          opacity: 1;
          transform: translateY(0);
        }

        /* LOGO ANIMATION */

        .mission-logo {
          transition:
            transform 0.6s ease,
            filter 0.6s ease;
        }

        .mission-logo:hover {
          transform: scale(1.035);
          filter: drop-shadow(0 0 25px rgba(139, 182, 48, 0.2));
        }

        /* ACCENT LINE */

        .mission-accent {
          position: relative;
          width: 35px;
          height: 3px;
          border-radius: 10px;
          background: #8BB630;
          transition: width 0.5s ease;
        }

        .mission-block:hover .mission-accent {
          width: 65px;
        }

        /* TAGLINE */

        .mission-tagline span {
          transition: color 0.3s ease;
        }

        .mission-tagline span:hover {
          color: #B7E65B;
        }

        /* ATMOSPHERIC GLOW */

        @keyframes missionGlow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }

          50% {
            opacity: 0.5;
            transform: scale(1.12);
          }
        }

        .mission-glow {
          animation: missionGlow 7s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          [data-reveal],
          .mission-logo,
          .mission-accent,
          .mission-tagline span,
          .mission-glow {
            animation: none !important;
            transition: none !important;
          }

          [data-reveal] {
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1750px]">

        {/* MAIN DARK PANEL */}

        <div className=" rounded-[20px] sm:rounded-[24px]">

          {/* GLOBE BACKGROUND */}

          


          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 -left-20 -z-10 h-[350px] w-[350px] rounded-full bg-[#8BB630]/10 blur-[110px]"
          />

          {/* CONTENT GRID */}

          <div className="relative grid grid-cols-1 items-center gap-8 px-5 py-10 min-[400px]:px-6 sm:gap-10 sm:px-9 sm:py-12 lg:min-h-[615px] lg:grid-cols-[0.85fr_1.15fr] lg:gap-[70px] lg:px-[75px] lg:py-[65px] xl:px-[90px]">

            {/* LOGO SECTION */}

            <div
              data-reveal
              className="flex w-full items-center justify-center lg:justify-start"
            >

              <div className="relative flex w-full items-center justify-center">

                {/* Logo Glow */}

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute h-[220px] w-[220px] rounded-full bg-[#8BB630]/10 blur-[80px] sm:h-[300px] sm:w-[300px] lg:h-[400px] lg:w-[400px]"
                />

     <img
  src="/images/logo2/logo.png"
  alt="TrackOwls — Scan, Detect, Remove, Protect"
  className="mission-logo relative z-10 h-auto w-full max-w-[270px] rounded-4xl bg-white p-3 object-contain shadow-sm transition-opacity hover:opacity-95 sm:max-w-[350px] lg:max-w-[450px] xl:max-w-[490px]"
/>
              </div>

            </div>

            {/* MISSION AND VISION */}

            <div className="w-full min-w-0">

              {/* MISSION */}

              <div
                data-reveal
                className="mission-block"
              >

                <div className="mb-5 flex items-center gap-3 sm:mb-6 lg:mb-[30px]">

                  <span className="mission-accent" />

                  <span className="text-[10px] font-bold uppercase tracking-[1.8px] text-[#A5CF49] sm:text-[12px] lg:text-[14px]">

                    Our mission

                  </span>

                </div>

                <h2 className="max-w-[760px] text-[31px] font-bold leading-[1.12] tracking-[-1.1px] text-white min-[400px]:text-[34px] sm:text-[40px] sm:tracking-[-1.5px] md:text-[46px] lg:text-[58px] lg:leading-[1.16] lg:tracking-[-2px] xl:text-[64px]">

                  Make protected content harder to{" "}
                  <span className="text-[#8BB630]">
                    exploit.
                  </span>

                </h2>

                <p className="mt-5 max-w-[760px] text-[14px] leading-[1.85] text-[#B9C7BB] min-[400px]:text-[15px] sm:text-[16px] sm:leading-[1.9] lg:mt-[22px] lg:text-[18px]">

                  Our approach connects technology, human intelligence and
                  enforcement operations. We prioritize verification, evidence and
                  a clear record of what happens next.

                </p>

              </div>

              {/* DIVIDER */}

              <div
                data-reveal
                className="my-8 h-px w-full bg-gradient-to-r from-[#8BB630]/50 via-[#8BB630]/15 to-transparent sm:my-9 lg:my-[38px]"
              />

              {/* VISION */}

              <div
                data-reveal
                className="mission-block"
              >

                <div className="mb-4 flex items-center gap-3">

                  <span className="mission-accent" />

                  <h3 className="text-[18px] font-bold leading-tight tracking-[-0.4px] text-white sm:text-[20px] lg:text-[24px]">

                    Our vision

                  </h3>

                </div>

                <p className="max-w-[780px] text-[14px] leading-[1.85] text-[#B9C7BB] min-[400px]:text-[15px] sm:text-[16px] sm:leading-[1.9] lg:mt-[18px] lg:text-[18px]">

                  A trusted protection ecosystem where content owners and brands
                  can understand their exposure and act on infringement.

                </p>

              </div>

              {/* BRAND TAGLINE */}

              <div
                data-reveal
                className="mission-tagline mt-8 flex flex-wrap items-center gap-x-3 gap-y-3 text-[10px] font-bold uppercase tracking-[1.2px] text-[#D2DED1] sm:mt-9 sm:gap-x-4 sm:text-[11px] sm:tracking-[1.5px] lg:mt-[38px] lg:gap-x-[17px] lg:text-[13px]"
              >

                <span>Scan</span>

                <span className="font-bold text-[#8BB630]">/</span>

                <span>Detect</span>

                <span className="font-bold text-[#8BB630]">/</span>

                <span>Remove</span>

                <span className="font-bold text-[#8BB630]">/</span>

                <span>Protect</span>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default AboutMission;