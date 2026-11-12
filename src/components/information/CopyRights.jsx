import React from "react";

const copyrightSections = [
  {
    title: "Information to provide",
    description:
      "Identify the protected work, the relevant rights owner, the suspected infringing URL, your authority to act and the territory involved. Include publicly shareable supporting context.",
  },
  {
    title: "Where to send it",
    description:
      "Use the consultation form and select Takedowns. This starts an enquiry; it does not submit a complaint to the hosting or social platform itself.",
  },
  {
    title: "Verification before action",
    description:
      "TrackOwls must verify the rights and authorization before coordinating an enforcement request. Do not submit unsupported claims or request removal of authorized material.",
  },
  {
    title: "Platform procedures",
    description:
      "Complaint formats, counter-notice processes and available remedies differ by service and jurisdiction. Applicable platform procedures govern their decisions.",
  },
];

function CopyRight() {
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

        {/* Navy overlay */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-[#071C30]/95 via-[#071C30]/80 to-[#071C30]/45"
        />

        {/* Subtle green glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at 80% 45%, rgba(139,182,48,0.12), transparent 48%)",
          }}
        />

        {/* Hero content */}
        <div className="relative z-10 w-full px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">

          <span className="block text-[11px] font-extrabold uppercase tracking-[1.5px] text-[#D5F51F] sm:text-xs">
            Website information
          </span>

          <h1 className="mt-4 text-[34px] font-bold leading-[1.15] tracking-[-1px] text-white sm:mt-5 sm:text-[44px] sm:tracking-[-1.5px] lg:text-[48px]">
            Copyright Reporting
          </h1>

          <p className="mt-4 max-w-[650px] text-[13px] leading-[1.9] text-[#D0DCE6] sm:mt-5 sm:text-[14px]">
            Provide clear rights information when reporting suspected
            infringement.
          </p>

        </div>
      </section>

      {/* Copyright reporting information */}
      <section
        aria-label="Copyright reporting information"
        className="mx-auto mt-10 w-full max-w-[1000px] px-4 pb-16 sm:mt-12 sm:px-6 sm:pb-20 lg:mt-14 lg:px-8"
      >

        <div className="space-y-7 sm:space-y-8 lg:space-y-9">

          {copyrightSections.map((section) => (
            <article
              key={section.title}
              className="w-full rounded-md bg-[rgba(10,32,53,0.78)] px-5 py-5 sm:px-7 sm:py-6 lg:px-8 lg:py-7"
            >

              <h2 className="mb-3 text-[18px] font-bold leading-[1.4] tracking-[-0.35px] text-white sm:text-[20px]">
                {section.title}
              </h2>

              <p className="m-0 text-[13px] font-normal leading-[1.9] text-[#B9C9D7] sm:text-[14px] md:text-[15px]">
                {section.description}
              </p>

            </article>
          ))}

        </div>

        {/* Footer note */}
        <p className="mt-10 border-t border-[#D5E0E8] pt-5 text-[11px] leading-[1.9] text-[#71869B] sm:mt-12 sm:text-xs">
          Website notices prepared for this initial version. Final company
          details and policies require review before commercial public launch.
        </p>

      </section>
    </main>
  );
}

export default CopyRight;