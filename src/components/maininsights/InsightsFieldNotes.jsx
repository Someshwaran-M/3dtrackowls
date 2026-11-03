import React from "react";

const fieldNotes = [
{
title: "Before the whistle: planning live-event protection",
description:
"The assets, authorizations and escalation paths to prepare before a broadcast.",
link: "/live-event-protection",
},
{
title: "What a useful enforcement report should tell you",
description:
"Why detections, submissions and confirmed removals are different measures.",
link: "/enforcement-reports",
},
{
title: "Protecting content through a release window",
description:
"How monitoring priorities can change from launch day to catalogue protection.",
link: "/release-window",
},
{
title: "A brand reference pack that supports investigation",
description:
"Prepare logos, official channels and seller context before reviewing suspected misuse.",
link: "/brand-investigation",
},
{
title: "Following repeat sources without losing the evidence",
description:
"Use linked cases to understand recurring URLs, listings and public accounts.",
link: "/repeat-sources",
},
];

function InsightsFieldNotes() {
return ( <section
   id="insights-field-notes"
   className="relative isolate w-full overflow-hidden bg-[#152019] px-3 py-8 font-['Roboto',sans-serif] sm:px-5 sm:py-10 lg:px-8 lg:py-14"
 >
{/* Lime digital particles */}
<div
aria-hidden="true"
className="pointer-events-none absolute inset-0 -z-0 opacity-40"
style={{
backgroundImage:
"radial-gradient(circle, rgba(139,182,48,0.65) 0.8px, transparent 1px), radial-gradient(circle, rgba(139,182,48,0.3) 0.7px, transparent 1px)",
backgroundSize: "31px 33px, 49px 47px",
backgroundPosition: "0 0, 15px 19px",
maskImage:
"radial-gradient(ellipse at 90% 50%, black, transparent 65%)",
WebkitMaskImage:
"radial-gradient(ellipse at 90% 50%, black, transparent 65%)",
}}
/>


  {/* Background glow */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute right-[-120px] top-[10%] -z-0 h-[400px] w-[400px] rounded-full bg-[#8BB630]/[0.07] blur-[120px]"
  />

  {/* Main container */}
  <div className="relative z-10 mx-auto w-full max-w-[1350px]">

    {/* Field notes grid */}
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">

      {fieldNotes.map((note, index) => (
        <article
          key={note.title}
          className="group relative flex min-h-[280px] flex-col overflow-hidden rounded-[14px] border border-[#8BB630]/20 bg-[#1B2920]/70 px-6 py-7 transition-all duration-500 hover:-translate-y-1 hover:border-[#8BB630]/70 hover:bg-[#203025] sm:min-h-[290px] sm:px-7 sm:py-8"
        >
          {/* Hover glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#8BB630]/0 blur-[65px] transition-all duration-500 group-hover:bg-[#8BB630]/20"
          />

          {/* Top line */}
          <div className="relative mb-7 flex items-center justify-between">
            <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#8BB630]">
              Field notes
            </span>

            <span className="text-[12px] font-medium tracking-wider text-white/30 transition-colors duration-300 group-hover:text-[#8BB630]">
              0{index + 1}
            </span>
          </div>

          {/* Title */}
          <h2 className="relative text-[22px] font-bold leading-[1.35] tracking-[-0.5px] text-white transition-colors duration-300 group-hover:text-[#A8D34A] sm:text-[23px]">
            {note.title}
          </h2>

          {/* Description */}
          <p className="relative mt-4 text-[14px] font-normal leading-[1.75] text-[#A5B2A7]">
            {note.description}
          </p>

          {/* Read more */}
          <a
            href={note.link}
            aria-label={`Read more: ${note.title}`}
            className="relative mt-auto inline-flex w-fit items-center gap-3 border-b border-[#8BB630]/40 pb-[6px] pt-7 text-[13px] font-semibold text-[#8BB630] transition-all duration-300 hover:border-[#A8D34A] hover:text-[#A8D34A]"
          >
            Read more

            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
              →
            </span>
          </a>

          {/* Bottom accent */}
          <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#8BB630] transition-all duration-500 group-hover:w-full" />
        </article>
      ))}

    </div>
  </div>
</section>


);
}

export default InsightsFieldNotes;
