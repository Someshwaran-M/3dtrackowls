import React, { useEffect, useRef } from "react";

const reportingRows = [
  {
    area: "Discovery",
    meaning: "Potential sources found within the agreed scope",
    record: "Source URL and discovery timestamp",
  },
  {
    area: "Verification",
    meaning: "Findings reviewed against the protected asset and rights",
    record: "Reference asset, evidence and analyst notes",
  },
  {
    area: "Enforcement",
    meaning: "Authorized complaints submitted and followed up",
    record: "Complaint reference and submission history",
  },
  {
    area: "Outcome",
    meaning: "Confirmed changes, pending reviews and unresolved cases",
    record: "Source availability check and case status",
  },
  {
    area: "Intelligence",
    meaning: "Repeat appearances and channel patterns",
    record: "Linked case references and reporting period",
  },
];

function HowItWorksClient() {
  const tableRef = useRef(null);

  useEffect(() => {
    const table = tableRef.current;
    if (!table) return;

    const rows = Array.from(
      table.querySelectorAll(".reporting-row")
    );

    let frame = null;

    const updateActiveRow = () => {
      frame = null;

      const tableRect = table.getBoundingClientRect();

      if (
        tableRect.bottom < 0 ||
        tableRect.top > window.innerHeight
      ) {
        rows.forEach((row) =>
          row.classList.remove("scroll-active")
        );
        return;
      }

      const viewportCenter = window.innerHeight * 0.5;

      let closestRow = null;
      let minDistance = Infinity;

      rows.forEach((row) => {
        const rect = row.getBoundingClientRect();

        if (
          rect.bottom <= 0 ||
          rect.top >= window.innerHeight
        ) {
          return;
        }

        const center = rect.top + rect.height / 2;
        const distance = Math.abs(center - viewportCenter);

        if (distance < minDistance) {
          minDistance = distance;
          closestRow = row;
        }
      });

      rows.forEach((row) => {
        row.classList.toggle(
          "scroll-active",
          row === closestRow
        );
      });
    };

    const handleScroll = () => {
      if (frame !== null) return;

      frame = requestAnimationFrame(updateActiveRow);
    };

    updateActiveRow();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (frame !== null) {
        cancelAnimationFrame(frame);
      }
    };
  }, []);

  return (
    <section
      id="how-it-works-client"
      className="relative w-full overflow-hidden bg-transparent px-3 py-5 font-['Roboto',sans-serif] sm:px-5 sm:py-7 lg:px-8 lg:py-8"
    >
      <style>{`

        /* PANEL */

        .reporting-panel {
          animation: reportPanelReveal 0.8s ease both;
        }

        @keyframes reportPanelReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* TABLE */

        .reporting-table-scroll {
          overflow-x: auto;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: #8BB630 #152019;
        }

        .reporting-table-scroll::-webkit-scrollbar {
          height: 5px;
        }

        .reporting-table-scroll::-webkit-scrollbar-track {
          background: #152019;
        }

        .reporting-table-scroll::-webkit-scrollbar-thumb {
          background: #8BB630;
          border-radius: 10px;
        }

        .reporting-table-scroll:focus-visible {
          outline: 2px solid #8BB630;
          outline-offset: 4px;
        }

        /* TABLE HEADER */

        .reporting-header th {
          background: rgba(139, 182, 48, 0.16);
          color: #ffffff;
        }

        /* TABLE ROW DEFAULT */

        .reporting-row td {
          background: rgba(8, 20, 13, 0.85);
          color: #C0CCC1;
          transition:
            background 0.45s ease,
            color 0.45s ease,
            box-shadow 0.45s ease;
        }

        /* FIRST COLUMN */

        .reporting-row td:first-child {
          color: #A5CF49;
          font-weight: 600;
        }

        /* AUTOMATIC SCROLL HIGHLIGHT */

        .reporting-row.scroll-active td {
          background: rgba(139, 182, 48, 0.16);
          box-shadow:
            inset 0 1px 0 rgba(139, 182, 48, 0.25),
            inset 0 -1px 0 rgba(139, 182, 48, 0.25);
        }

        .reporting-row.scroll-active td:first-child {
          color: #C1EF70;
          box-shadow:
            inset 4px 0 0 #8BB630,
            inset 0 1px 0 rgba(139, 182, 48, 0.25),
            inset 0 -1px 0 rgba(139, 182, 48, 0.25);
        }

        .reporting-row.scroll-active td:not(:first-child) {
          color: #ffffff;
        }

        /* MANUAL HOVER */

        .reporting-row:hover td {
          background: rgba(139, 182, 48, 0.16);
          color: #ffffff;
        }

        .reporting-row:hover td:first-child {
          color: #C1EF70;
          box-shadow: inset 4px 0 0 #8BB630;
        }

        /* GREEN INDICATOR */

        .report-indicator {
          display: inline-block;
          width: 0;
          height: 3px;
          margin-right: 0;
          vertical-align: middle;
          border-radius: 10px;
          background: #8BB630;
          transition: all 0.4s ease;
        }

        .reporting-row.scroll-active .report-indicator,
        .reporting-row:hover .report-indicator {
          width: 7px;
          margin-right: 9px;
        }

        /* MOBILE */

        @media (max-width: 639px) {
          .reporting-table-scroll table {
            min-width: 650px;
          }
        }

        /* ACCESSIBILITY */

        @media (prefers-reduced-motion: reduce) {
          .reporting-panel,
          .reporting-row td,
          .report-indicator {
            animation: none !important;
            transition: none !important;
          }
        }

      `}</style>

      <div className="mx-auto w-full max-w-[1750px]">

        {/* MAIN PANEL */}

        <div className=" px-4 py-7 sm:rounded-[22px] sm:px-7 sm:py-9 lg:rounded-[25px] lg:px-[50px] lg:py-[46px]">

        

          {/* GREEN GLOW */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-32 top-0 -z-10 h-[350px] w-[350px] rounded-full bg-[#8BB630]/10 blur-[110px]"
          />

          {/* HEADING */}

          <div className="relative z-10 mb-7 grid grid-cols-1 gap-4 sm:mb-8 lg:mb-[38px] lg:grid-cols-[1.7fr_0.8fr] lg:items-end lg:gap-10">

            <div>

              <span className="mb-4 flex items-center gap-3 text-[10px] font-bold uppercase leading-relaxed tracking-[1.8px] text-[#A5CF49] sm:mb-5 sm:text-[12px]">

                <span className="h-[2px] w-8 bg-[#8BB630]" />

                Meaningful client visibility

              </span>

              <h2 className="max-w-[850px] text-[31px] font-bold leading-[1.12] tracking-[-1.2px] text-white min-[400px]:text-[34px] sm:text-[40px] md:text-[46px] lg:text-[48px] xl:text-[52px]">

                Measure the work.

                <br className="hidden lg:block" />

                <span className="text-[#8BB630]">
                  Understand the outcome.
                </span>

              </h2>

            </div>

            <p className="max-w-[440px] text-[14px] leading-[1.75] text-[#C0CCC1] sm:text-[15px] sm:leading-[1.8] lg:justify-self-end lg:pb-1 lg:text-[16px]">

              Separate the stages of enforcement so that activity counts are
              never mistaken for confirmed removals.

            </p>

          </div>

          {/* REPORTING TABLE */}

          <div
            ref={tableRef}
            className="reporting-table-scroll relative z-10 w-full rounded-[10px] border border-[#8BB630]/25"
            role="region"
            aria-label="Reporting table. Swipe horizontally to view all columns."
            tabIndex={0}
          >

            <table className="w-full min-w-[650px] table-fixed border-collapse text-left sm:min-w-0">

              <colgroup>
                <col className="w-[25%] lg:w-[19%]" />
                <col className="w-[40%] lg:w-[43%]" />
                <col className="w-[35%] lg:w-[38%]" />
              </colgroup>

              <thead>

                <tr className="reporting-header">

                  <th className="border-r border-[#8BB630]/20 px-4 py-4 text-[13px] font-bold leading-[1.5] sm:px-5 sm:py-[19px] sm:text-[14px]">
                    Reporting area
                  </th>

                  <th className="border-r border-[#8BB630]/20 px-4 py-4 text-[13px] font-bold leading-[1.5] sm:px-5 sm:py-[19px] sm:text-[14px]">
                    What it tells you
                  </th>

                  <th className="px-4 py-4 text-[13px] font-bold leading-[1.5] sm:px-5 sm:py-[19px] sm:text-[14px]">
                    Supporting record
                  </th>

                </tr>

              </thead>

              <tbody>

                {reportingRows.map((row) => (

                  <tr
                    key={row.area}
                    className="reporting-row"
                  >

                    <td className="border-r border-[#8BB630]/15 px-4 py-5 align-top text-[13px] leading-[1.7] sm:px-5 sm:py-[21px] sm:text-[14px]">

                      <span className="report-indicator" />

                      {row.area}

                    </td>

                    <td className="border-r border-[#8BB630]/15 px-4 py-5 align-top text-[13px] leading-[1.8] sm:px-5 sm:py-[21px] sm:text-[14px]">

                      {row.meaning}

                    </td>

                    <td className="px-4 py-5 align-top text-[13px] leading-[1.8] sm:px-5 sm:py-[21px] sm:text-[14px]">

                      {row.record}

                    </td>

                  </tr>

                ))}

              </tbody>

            </table>

          </div>


        </div>

      </div>
    </section>
  );
}

export default HowItWorksClient;