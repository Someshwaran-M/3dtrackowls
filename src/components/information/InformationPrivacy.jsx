import React from "react";

const privacySections = [
  {
    title: "Enquiry information",
    description:
      "The consultation form collects your name, company, business email, optional phone and country, protection requirements and message. These details are used to manage and respond to your enquiry.",
  },
  {
    title: "Website activity",
    description:
      "The site may record page paths and selected interaction events to understand which pages and consultation actions are used. These event records should not include form values, email addresses or third-party advertising identifiers.",
  },
  {
    title: "Access and hosting",
    description:
      "Enquiries are available through a restricted administration area. Site hosting is provided through the website platform infrastructure. Do not submit confidential media, account credentials or sensitive personal information through the form.",
  },
  {
    title: "Your requests",
    description:
      'Use the consultation form with "Privacy request" in your message to request access, correction or deletion of information you have submitted. Specific retention periods and additional service providers should be confirmed before a public commercial launch.',
  },
];

function InformationPrivacy() {
  return (
    <main className="mx-auto mt-24 min-h-screen w-full max-w-[1350px] bg-[#EAF3F9] px-4 font-['Roboto',sans-serif] text-[#18324B] sm:mt-28 sm:px-6 lg:mt-26 lg:px-8">

      {/* Privacy hero banner */}
      <section
        className="relative flex min-h-[220px] w-full items-center overflow-hidden rounded-lg border border-[#CAD5DC] bg-[#0A2035] bg-cover bg-center bg-no-repeat sm:min-h-[240px] lg:min-h-[250px]"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(5,27,46,0.94) 0%, rgba(5,27,46,0.80) 45%, rgba(5,27,46,0.52) 100%), url('/globe.png')",
        }}
      >
        <div className="relative z-10 w-full px-6 py-10 sm:px-10 sm:py-12 lg:px-12 lg:py-14">

          <span className="mb-4 block text-[11px] font-extrabold uppercase tracking-[1.5px] text-[#A8FF45] sm:text-xs">
            Website information
          </span>

          <h1 className="m-0 text-[34px] font-extrabold leading-[1.15] tracking-[-1px] text-white sm:text-[42px] sm:tracking-[-1.5px] md:text-[46px] lg:text-[50px]">
            Privacy Notice
          </h1>

          <p className="mt-4 text-[13px] leading-7 text-[#D0DCE6] sm:text-[14px] md:text-[15px]">
            How information is handled on this website.
          </p>

        </div>
      </section>

      {/* Privacy content */}
      <section
        aria-label="Privacy information"
        className="mx-auto w-full max-w-[1000px] px-3 pb-16 pt-10 sm:px-5 sm:pb-20 sm:pt-12 lg:px-6 lg:pt-14"
      >

        <div className="space-y-7 sm:space-y-8">

          {privacySections.map((section) => (
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
          This privacy notice is an initial version. Confirm the company
          details, data practices, retention periods and applicable policies
          before public commercial launch.
        </p>

      </section>
    </main>
  );
}

export default InformationPrivacy;