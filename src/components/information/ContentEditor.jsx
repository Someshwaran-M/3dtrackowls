import React from "react";

const editorSections = [
  {
    title: "Content ownership",
    description:
      "Creators, publishers and rights holders should maintain appropriate records of their original work and the rights they own or are authorized to represent.",
  },
  {
    title: "Reporting suspected infringement",
    description:
      "Provide the relevant content URL, details of the protected work, rights ownership information and supporting context when reporting suspected unauthorized use.",
  },
  {
    title: "Review and verification",
    description:
      "Reports may require additional information and verification before any enforcement request is coordinated. Submitting a report does not guarantee removal of the content.",
  },
  {
    title: "Editorial responsibility",
    description:
      "Content submitted for review should be accurate, relevant and lawfully shared. Do not submit misleading claims, harmful material or confidential information belonging to others.",
  },
];

function ContentEditor() {
  return (
    <main className="mx-auto mt-24 min-h-screen w-full max-w-[1350px] bg-[#EAF3F9] px-0 pb-12 font-['Roboto',Arial,sans-serif] text-[#18324B] sm:mt-28 sm:pb-14">

      {/* Hero banner */}
      <section className="relative mx-[10px] mt-[10px] flex min-h-[220px] items-center overflow-hidden rounded-[7px] border border-[#B7C6CB] bg-[#071C30] sm:mx-[18px] sm:min-h-[240px] lg:min-h-[250px]">

        {/* World map background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/globe.png')",
          }}
        />

        {/* Contrast overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#071C30]/95 via-[#071C30]/85 to-[#071C30]/55"
        />

        {/* Lime-green ambient glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 85% 45%, rgba(139,182,48,0.14), transparent 50%)",
          }}
        />

        {/* Banner content */}
        <div className="relative z-10 w-full px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">

          <span className="inline-flex items-center gap-2 text-[11px] font-extrabold uppercase tracking-[1.5px] text-[#D5F51F] sm:text-xs">
            <span className="h-[2px] w-5 bg-[#8BB630]" />
            Website information
          </span>

          <h1 className="mt-4 text-[34px] font-bold leading-[1.15] tracking-[-1px] text-white sm:mt-5 sm:text-[44px] sm:tracking-[-1.5px] lg:text-[48px]">
            Content Editor
          </h1>

          <p className="mt-4 max-w-[650px] text-[13px] leading-[1.9] text-[#D0DCE6] sm:mt-5 sm:text-[14px]">
            Guidance for responsible content review and infringement reporting.
          </p>

        </div>
      </section>

      {/* Main information */}
      <section
        aria-label="Content editor information"
        className="mx-auto mt-10 w-full max-w-[1000px] px-4 pb-16 sm:mt-12 sm:px-6 sm:pb-20 lg:mt-14 lg:px-8"
      >

        <div className="space-y-7 sm:space-y-8 lg:space-y-9">

          {editorSections.map((section) => (
            <article
              key={section.title}
              className="w-full rounded-md bg-[rgba(10,32,53,0.78)] px-5 py-5 transition-colors duration-300 sm:px-7 sm:py-6 lg:px-8 lg:py-7"
            >

              <h2 className="mb-3 text-[18px] font-bold leading-[1.4] tracking-[-0.35px] text-white transition-colors duration-200 sm:text-[20px]">
                {section.title}
              </h2>

              <p className="m-0 text-[13px] font-normal leading-[1.9] text-[#B9C9D7] sm:text-[14px] md:text-[15px]">
                {section.description}
              </p>

            </article>
          ))}

        </div>

        {/* Footer note */}
        <div className="mt-10 border-t border-[#D5E0E8] pt-5 sm:mt-12">

          <p className="text-[11px] leading-[1.9] text-[#71869B] sm:text-xs">
            Website notices prepared for this initial version. Final company
            details and policies require review before commercial public launch.
          </p>

        </div>

      </section>
    </main>
  );
}

export default ContentEditor;