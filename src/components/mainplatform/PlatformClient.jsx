import React from "react";

function PlatformClient() {
  return (
    <section
      id="platform-client"
      className="relative isolate w-full overflow-hidden bg-transparent px-3 py-8 font-['Roboto',sans-serif] sm:px-5 sm:py-10 lg:px-12 lg:py-12"
    >
      {/* Subtle lime particle background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage: `
            radial-gradient(circle, rgba(139,182,48,0.85) 1px, transparent 1.5px),
            radial-gradient(circle, rgba(139,182,48,0.55) 1px, transparent 1.5px),
            radial-gradient(circle, rgba(255,255,255,0.22) 0.7px, transparent 1.2px)
          `,
          backgroundSize: "83px 79px, 127px 113px, 47px 53px",
          backgroundPosition: "10px 15px, 42px 61px, 20px 28px",
          maskImage:
            "radial-gradient(ellipse at 72% 50%, black 0%, transparent 76%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 72% 50%, black 0%, transparent 76%)",
        }}
      />

      {/* Main panel */}
      <div className="relative mx-auto w-full max-w-[1350px] overflow-hidden rounded-[13px] border border-[#8BB630]/25 bg-[#152019]/75 px-5 py-7 shadow-[0_15px_50px_rgba(0,0,0,0.16)] backdrop-blur-md sm:px-8 sm:py-9 md:px-9 md:py-10 lg:px-[45px] lg:py-[50px]">

        {/* Soft lime texture inside the panel */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(139,182,48,0.45) 0.8px, transparent 1.2px)",
            backgroundSize: "9px 9px",
            maskImage:
              "radial-gradient(ellipse at 72% 48%, black, transparent 65%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at 72% 48%, black, transparent 65%)",
          }}
        />

        {/* Green ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-1/2 h-[250px] w-[250px] -translate-y-1/2 rounded-full bg-[#8BB630]/10 blur-[100px]"
        />

        {/* Content grid */}
        <div className="relative z-10 grid grid-cols-1 items-center gap-7 sm:gap-8 md:grid-cols-[1.08fr_1fr] md:gap-9 lg:grid-cols-[1.08fr_1fr] lg:gap-[55px]">

          {/* Left content */}
          <div className="min-w-0">
            <span className="mb-4 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-[#8BB630] sm:text-[11px]">
              <span className="h-[2px] w-6 bg-[#8BB630]" />
              Client experience
            </span>

            <h2 className="max-w-[500px] text-[30px] font-bold leading-[1.18] tracking-[-1.1px] text-white min-[400px]:text-[32px] sm:text-[36px] sm:leading-[1.15] md:text-[34px] lg:text-[44px] lg:tracking-[-1.5px]">
              Client visibility.
              <br />
              <span className="text-[#8BB630]">
                Evidence you can follow.
              </span>
            </h2>

            <p className="mt-4 max-w-[510px] text-[13px] leading-[1.85] text-[#C0CCC1] sm:text-[14px] md:mt-4 lg:text-[15px] lg:leading-[1.8]">
              The planned client experience brings active cases, status
              history, pending actions and reporting into one view.
            </p>
          </div>

          {/* Right product status card */}
          <div className="group relative min-w-0 overflow-hidden rounded-[15px] border border-[#8BB630]/25 bg-[#0E1711]/65 px-5 py-5 transition-all duration-500 hover:border-[#8BB630]/55 hover:bg-[#0E1711]/85 sm:px-6 sm:py-6 lg:rounded-[16px] lg:px-[30px] lg:py-[27px]">

            {/* Card accent */}
            <div className="absolute left-0 top-0 h-[2px] w-0 bg-[#8BB630] transition-all duration-500 group-hover:w-full" />

            <div className="relative z-10">
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-[17px] font-bold leading-tight tracking-[-0.3px] text-white sm:text-[18px] lg:text-[20px]">
                  Product status
                </h3>

                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#8BB630]/30 bg-[#8BB630]/10">
                  <span className="h-2 w-2 rounded-full bg-[#8BB630] shadow-[0_0_10px_rgba(139,182,48,0.7)]" />
                </span>
              </div>

              <p className="mt-3 text-[13px] leading-[1.85] text-[#C0CCC1] sm:text-[14px] lg:leading-[1.9]">
                The interface shown here is a concept. Availability,
                integrations and client access will be confirmed directly
                during a consultation.
              </p>

              <a
                href="/contact"
                className="group/btn mt-5 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[4px] border border-[#8BB630] bg-[#8BB630] px-5 py-3 text-center text-[12px] font-bold text-[#152019] transition-all duration-300 hover:-translate-y-1 hover:bg-transparent hover:text-[#8BB630] sm:mt-6"
              >
                Discuss the platform

                <span className="inline-block transition-transform duration-300 group-hover/btn:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlatformClient;