import React from "react";

const paragraphs = [
"Start with the event schedule, licensed territories and an accurate reference asset list. Decide which public channels are in scope and how analysts will distinguish authorized distribution from suspected infringement.",

"Confirm enforcement authorization before the event. Record the platform complaint requirements and agree an escalation route for high-priority findings.",

"During the event, keep a timestamped record of findings, verification and submissions. After the event, separate confirmed removals from pending complaints and review repeat distribution patterns.",
];

function LiveEventProtectionChecklist() {
return ( <main className="relative mt-20 min-h-screen overflow-hidden bg-[#152019] px-4 pb-20 pt-6 font-['Roboto',sans-serif] text-white sm:px-6 lg:px-[110px]">


  {/* Background particles */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 opacity-30"
    style={{
      backgroundImage:
        "radial-gradient(circle, rgba(139,182,48,0.6) 0.8px, transparent 1px)",
      backgroundSize: "35px 35px",
      maskImage:
        "radial-gradient(ellipse at 90% 30%, black, transparent 70%)",
      WebkitMaskImage:
        "radial-gradient(ellipse at 90% 30%, black, transparent 70%)",
    }}
  />

  {/* Background glow */}
  <div
    aria-hidden="true"
    className="pointer-events-none absolute right-[-150px] top-[200px] h-[400px] w-[400px] rounded-full bg-[#8BB630]/[0.08] blur-[130px]"
  />

  {/* Hero banner */}
  <section
    aria-labelledby="live-event-title"
    className="relative isolate flex min-h-[270px] w-full items-center overflow-hidden rounded-[14px] border border-[#8BB630]/25 bg-[#101B15] bg-cover bg-center sm:min-h-[320px] lg:min-h-[376px]"
    style={{
      backgroundImage:
        "linear-gradient(90deg, rgba(15,29,20,0.97) 0%, rgba(15,29,20,0.88) 45%, rgba(15,29,20,0.55) 100%), url('/globe.png')",
    }}
  >
    {/* Hero atmospheric effects */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 opacity-40"
      style={{
        background:
          "repeating-radial-gradient(circle at 75% 50%, transparent 0 32px, rgba(139,182,48,0.15) 33px 34px), repeating-linear-gradient(115deg, transparent 0 45px, rgba(139,182,48,0.06) 46px 47px)",
      }}
    />

    {/* Lime glow */}
    <div
      aria-hidden="true"
      className="absolute right-[10%] top-1/2 h-[250px] w-[250px] -translate-y-1/2 rounded-full bg-[#8BB630]/10 blur-[100px]"
    />

    <div className="relative w-full max-w-[1000px] px-6 py-12 sm:px-9 md:px-[45px]">

      <span className="mb-5 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-[#8BB630]">
        <span className="h-[7px] w-[7px] rounded-full bg-[#8BB630]" />
        Insights
      </span>

      <h1
        id="live-event-title"
        className="max-w-[900px] text-[34px] font-extrabold leading-[1.12] tracking-[-1.2px] text-white sm:text-[46px] md:text-[56px] lg:text-[66px]"
      >
        Before the whistle: planning
        <br className="hidden sm:block" /> live-event protection
      </h1>

      <p className="mt-5 max-w-[760px] text-[15px] font-normal leading-[1.8] text-[#B6C2B8] sm:text-[16px]">
        The assets, authorizations and escalation paths to prepare before a
        broadcast.
      </p>

      <div className="mt-7 h-[2px] w-[65px] rounded-full bg-[#8BB630]" />

    </div>
  </section>

  {/* Article content */}
  <article
    aria-label="Live-event protection checklist"
    className="relative mx-auto w-full max-w-[872px] px-2 pb-2 pt-14 sm:px-0 sm:pt-[78px] lg:pt-[90px]"
  >

    {/* Article label */}
    <div className="mb-8 flex items-center gap-3">
      <span className="h-[1px] w-8 bg-[#8BB630]" />

      <span className="text-[10px] font-bold uppercase tracking-[2px] text-[#8BB630]">
        Event protection guide
      </span>
    </div>

    {/* Paragraphs */}
    <div className="space-y-8 sm:space-y-9">
      {paragraphs.map((paragraph, index) => (
        <div
          key={index}
          className="group relative border-l border-[#8BB630]/30 py-1 pl-5 transition-all duration-300 hover:border-[#8BB630] sm:pl-7"
        >
          <span className="mb-3 block text-[11px] font-bold tracking-[1.5px] text-[#8BB630]/80">
            0{index + 1}
          </span>

          <p className="m-0 text-[15px] font-normal leading-[1.9] text-[#B8C5BA] transition-colors duration-300 group-hover:text-white sm:text-[16px]">
            {paragraph}
          </p>
        </div>
      ))}
    </div>

    {/* Return link */}
    <a
      href="/insights"
      className="group mt-12 inline-flex items-center gap-3 border-b border-[#8BB630]/50 pb-[7px] text-[14px] font-semibold text-[#8BB630] transition-all duration-300 hover:border-[#A8D34A] hover:text-[#A8D34A] sm:mt-[54px]"
    >
      <span
        aria-hidden="true"
        className="inline-block transition-transform duration-300 group-hover:-translate-x-1"
      >
        ←
      </span>

      View all insights
    </a>

  </article>

</main>


);
}

export default LiveEventProtectionChecklist;
