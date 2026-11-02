import React from "react";
import {
  Layers3,
  FileCheck,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

const modules = [
  {
    number: "01",
    title: "Assets & case workspace",
    description:
      "Organize clients, protected assets, rights references and incoming findings. Link duplicate URLs to a consistent case record.",
    Icon: Layers3,
  },
  {
    number: "02",
    title: "Evidence & enforcement",
    description:
      "Bring screenshots, verification notes, analyst assignments, complaint references and status history into the same workflow.",
    Icon: FileCheck,
  },
  {
    number: "03",
    title: "Client reporting & intelligence",
    description:
      "Present case activity, pending actions, outcomes and recurring sources through client-specific reporting views.",
    Icon: ChartNoAxesColumnIncreasing,
  },
];

function PlatformModules() {
  return (
    <section
      id="platform-modules"
      className="w-full overflow-hidden bg-[#EAF3F9] px-6 py-12 font-['Roboto',sans-serif] sm:px-8 sm:py-14 md:px-10 md:py-16 lg:px-12 lg:py-20"
    >
      <div className="mx-auto w-full max-w-[1350px]">
        {/* Heading and description */}
        <div className="mb-9 grid grid-cols-1 gap-5 sm:mb-10 md:grid-cols-[1.3fr_0.7fr] md:items-end md:gap-10">
          <div>
            <span className="inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[2px] text-[#648A13]">
              <span className="h-[2px] w-5 bg-[#8BB630]" />
              Planned platform modules
            </span>

            <h2 className="mt-4 text-[32px] font-bold leading-[1.12] tracking-[-0.9px] text-[#19334E] sm:text-[36px] md:mt-5 md:text-[42px] lg:text-[46px] lg:tracking-[-1.2px]">
              Connected records.
              <br />
              Clear responsibilities.
            </h2>
          </div>

          <p className="max-w-[420px] text-[14px] leading-[1.8] text-[#526B86] md:justify-self-end md:text-[15px]">
            The TrackOwls platform concept connects three operational areas.
            These modules are planned capabilities, subject to product
            development.
          </p>
        </div>

        {/* Module cards */}
        <div className="grid grid-cols-1 gap-5 sm:gap-5 md:grid-cols-3 md:gap-5 lg:gap-6">
          {modules.map(({ number, title, description, Icon }) => (
            <article
              key={number}
              className="group flex min-w-0 flex-col rounded-[12px] border border-[#CFDAD5] bg-[#E5EBE8] px-6 py-6 transition-colors duration-300 hover:border-[#B9D39C] sm:px-7 sm:py-7 md:min-h-[270px] md:rounded-[14px] md:px-6 md:py-7 lg:min-h-[290px] lg:px-8 lg:py-8"
            >
              {/* Icon: top-left on mobile and desktop */}
              <div className="mb-6 flex items-center text-[#159DB8]">
                <Icon
                  size={24}
                  strokeWidth={1.6}
                  aria-hidden="true"
                  className="h-6 w-6"
                />
              </div>

              <h3 className="text-[18px] font-bold leading-[1.4] tracking-[-0.2px] text-[#19334E] transition-colors duration-300 group-hover:text-[#648A13] sm:text-[19px] md:text-[18px] lg:text-[20px]">
                {title}
              </h3>

              <p className="mt-4 text-[14px] font-normal leading-[1.8] text-[#526B86] sm:text-[15px] md:text-[14px] lg:text-[15px]">
                {description}
              </p>

              {/* Small bottom accent */}
              <div className="mt-6 pt-1 md:mt-auto md:pt-7">
                <div className="h-[2px] w-8 bg-[#D2E1C7] transition-all duration-300 group-hover:w-14 group-hover:bg-[#8BB630]" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PlatformModules;