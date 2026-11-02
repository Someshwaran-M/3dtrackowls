import React, { useEffect, useRef, useState } from "react";

const steps = [
  {
    number: "01",
    title: "Monitor",
    description:
      "Define the assets, territories and digital channels in scope.",
  },
  {
    number: "02",
    title: "Detect",
    description:
      "Discover suspected unauthorized content, streams and URLs.",
  },
  {
    number: "03",
    title: "Verify",
    description:
      "Analysts check rights, validate the finding and capture evidence.",
  },
  {
    number: "04",
    title: "Enforce",
    description:
      "Submit authorized complaints and escalate through available channels.",
  },
  {
    number: "05",
    title: "Report",
    description:
      "Verify outcomes and report pending actions, removals and repeat cases.",
  },
];

function HowItWorksMain() {
  const panelRef = useRef(null);
  const cardsRef = useRef([]);
  const progressPathRef = useRef(null);
  const animationFrame = useRef(null);

  const [linePoints, setLinePoints] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  // RESPONSIVE TIMELINE POSITIONS
  useEffect(() => {
    const panel = panelRef.current;

    if (!panel) return;

    let resizeFrame;

    const calculatePoints = () => {
      const panelRect = panel.getBoundingClientRect();
      const isDesktop = window.innerWidth >= 1024;

      const points = cardsRef.current
        .filter(Boolean)
        .map((card) => {
          const rect = card.getBoundingClientRect();

          if (isDesktop) {
            // Desktop: horizontal line above cards
            return {
              x: rect.left + rect.width / 2 - panelRect.left,
              y: 24,
            };
          }

          // Mobile and tablet: vertical line on left
          return {
            x: 17,
            y: rect.top + 30 - panelRect.top,
          };
        });

      setLinePoints(points);
    };

    const handleResize = () => {
      cancelAnimationFrame(resizeFrame);

      resizeFrame = requestAnimationFrame(calculatePoints);
    };

    calculatePoints();

    const resizeObserver = new ResizeObserver(handleResize);

    resizeObserver.observe(panel);

    cardsRef.current.forEach((card) => {
      if (card) resizeObserver.observe(card);
    });

    window.addEventListener("resize", handleResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(resizeFrame);
    };
  }, []);

  // SCROLL-CONTROLLED DOT MOVEMENT
  useEffect(() => {
    const panel = panelRef.current;

    if (!panel) return;

    const updateProgress = () => {
      animationFrame.current = null;

      const viewportCenter = window.innerHeight * 0.5;

      let closestIndex = 0;
      let closestDistance = Infinity;

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;

        const distance = Math.abs(
          cardCenter - viewportCenter
        );

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    const handleScroll = () => {
      if (animationFrame.current !== null) return;

      animationFrame.current =
        requestAnimationFrame(updateProgress);
    };

    updateProgress();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);

      if (animationFrame.current !== null) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [linePoints]);

  // DRAW PROGRESS LINE
  useEffect(() => {
    const path = progressPathRef.current;

    if (!path || linePoints.length !== steps.length) return;

    const fullPath = linePoints
      .map((point, index) => {
        return `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`;
      })
      .join(" ");

    const totalLength = path.getTotalLength();

    path.setAttribute("d", fullPath);

    path.style.strokeDasharray = `${totalLength}`;
    path.style.strokeDashoffset = `${
      totalLength * (1 - activeIndex / (steps.length - 1))
    }`;
  }, [linePoints, activeIndex]);

  const linePath = linePoints
    .map((point, index) => {
      return `${index === 0 ? "M" : "L"} ${point.x} ${point.y}`;
    })
    .join(" ");

  const activePoint = linePoints[activeIndex];

  return (
    <section
      id="how-it-works"
      className="relative w-full overflow-hidden bg-transparent px-3 pt-20 pb-10 font-['Roboto',sans-serif] sm:px-5 sm:pt-24 sm:pb-12 lg:px-8 lg:pt-28 lg:pb-16"
    >
      <style>{`

        /* HERO ANIMATION */

        @keyframes heroReveal {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .how-hero-content {
          animation: heroReveal 0.9s ease both;
        }

        /* TIMELINE */

        .process-timeline {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          pointer-events: none;
          overflow: visible;
          z-index: 5;
        }

        .timeline-base {
          fill: none;
          stroke: rgba(139, 182, 48, 0.28);
          stroke-width: 2;
          stroke-dasharray: 5 7;
          stroke-linecap: round;
          stroke-linejoin: round;
        }

        .timeline-progress {
          fill: none;
          stroke: #8BB630;
          stroke-width: 2.5;
          stroke-linecap: round;
          stroke-linejoin: round;
          filter: drop-shadow(0 0 5px rgba(139, 182, 48, 0.7));
          transition: stroke-dashoffset 0.5s ease;
        }

        /* MOVING DOT */

        .timeline-dot {
          fill: #C1ED70;
          stroke: #8BB630;
          stroke-width: 3;
          filter: drop-shadow(0 0 8px #8BB630);
          transition:
            cx 0.5s cubic-bezier(0.22, 1, 0.36, 1),
            cy 0.5s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .timeline-dot-glow {
          fill: rgba(139, 182, 48, 0.18);
          transition:
            cx 0.5s ease,
            cy 0.5s ease;
        }

        /* PROCESS CARDS */

        .process-card {
          position: relative;
          transition:
            border-color 0.45s ease,
            background 0.45s ease,
            box-shadow 0.45s ease,
            transform 0.45s ease;
        }

        .process-card.active-card {
          border-color: rgba(139, 182, 48, 0.8);
          background: rgba(139, 182, 48, 0.09);

          box-shadow:
            0 0 25px rgba(139, 182, 48, 0.09),
            inset 0 0 20px rgba(139, 182, 48, 0.035);
        }

        .process-card:hover {
          transform: translateY(-5px);
          border-color: #8BB630;
        }

        .process-number {
          transition: color 0.4s ease;
        }

        .active-card .process-number {
          color: #C1ED70;
          text-shadow: 0 0 15px rgba(139, 182, 48, 0.45);
        }

        .process-title {
          transition: color 0.4s ease;
        }

        .active-card .process-title,
        .process-card:hover .process-title {
          color: #A5CF49;
        }

        /* DESKTOP TIMELINE SPACE */

        @media (min-width: 1024px) {
          .process-grid {
            padding-top: 55px;
          }
        }

        /* MOBILE AND TABLET TIMELINE SPACE */

        @media (max-width: 1023px) {
          .process-grid {
            padding-left: 36px;
          }
        }

        @media (max-width: 599px) {
          .process-card {
            min-height: 190px;
          }
        }

        /* ACCESSIBILITY */

        @media (prefers-reduced-motion: reduce) {
          .process-card,
          .process-number,
          .process-title,
          .timeline-dot,
          .timeline-dot-glow,
          .timeline-progress,
          .how-hero-content {
            animation: none !important;
            transition: none !important;
          }
        }

      `}</style>

      <div className="mx-auto w-full max-w-[1750px]">

        {/* HERO SECTION */}

        <div className="relative isolate flex min-h-[340px] w-full items-center overflow-hidden rounded-[20px] border border-[#8BB630]/25 bg-[#152019]/85 sm:min-h-[400px] lg:min-h-[470px]">

          {/* BACKGROUND IMAGE */}

          <div
            aria-hidden="true"
            className="absolute inset-0 z-[-2] bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/globe.png')",
            }}
          />

          
          {/* GREEN GLOW */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 top-1/2 z-[-1] h-72 w-72 -translate-y-1/2 rounded-full bg-[#8BB630]/15 blur-[100px] sm:h-[400px] sm:w-[400px]"
          />

          {/* HERO CONTENT */}

          <div className="how-hero-content relative z-10 w-full px-6 py-12 sm:px-10 sm:py-16 lg:px-[75px] lg:py-[85px]">

            <div className="max-w-[1000px]">

              <div className="mb-6 flex items-center gap-3">

                <span className="h-[2px] w-9 bg-[#8BB630]" />

                <span className="text-[11px] font-bold uppercase tracking-[2px] text-[#A5CF49] sm:text-[13px]">
                  How It Works
                </span>

              </div>

              <h1 className="max-w-[1050px] text-[36px] font-bold leading-[1.12] tracking-[-1.5px] text-white min-[400px]:text-[40px] sm:text-[50px] sm:tracking-[-2px] lg:text-[68px] lg:tracking-[-3px] xl:text-[76px]">

                From detection to a

                <span className="block text-[#8BB630]">
                  documented outcome.
                </span>

              </h1>

              <p className="mt-6 max-w-[780px] text-[14px] leading-[1.85] text-[#C0CCC1] sm:text-[16px] lg:text-[18px]">

                A five-stage approach to identify suspected infringements,
                verify evidence and coordinate appropriately authorized action.

              </p>

            </div>

          </div>
        </div>

        {/* FIVE-STAGE PROCESS PANEL */}

        <div
          ref={panelRef}
          className=" mt-6 overflow-hidden rounded-[20px]px-4 py-7  sm:mt-8 sm:rounded-[23px] sm:px-7 sm:py-10 lg:mt-10 lg:px-9 lg:py-12 xl:px-[55px] xl:py-[55px]"
        >

          

          

          {/* TIMELINE */}

          {linePoints.length === steps.length && (
            <svg
              className="process-timeline"
              aria-hidden="true"
            >
              {/* BASE LINE */}

              <path
                d={linePath}
                className="timeline-base"
              />

              {/* PROGRESS LINE */}

              <path
                ref={progressPathRef}
                d={linePath}
                className="timeline-progress"
              />

              {/* DOT GLOW */}

              {activePoint && (
                <circle
                  cx={activePoint.x}
                  cy={activePoint.y}
                  r="15"
                  className="timeline-dot-glow"
                />
              )}

              {/* MOVING DOT */}

              {activePoint && (
                <circle
                  cx={activePoint.x}
                  cy={activePoint.y}
                  r="6"
                  className="timeline-dot"
                />
              )}
            </svg>
          )}

          {/* PROCESS CARDS */}

          <div className="process-grid relative z-10 grid grid-cols-1 gap-5 lg:grid-cols-5 lg:gap-4 xl:gap-5">

            {steps.map((step, index) => (
              <article
                key={step.number}
                ref={(element) => {
                  cardsRef.current[index] = element;
                }}
                className={`process-card min-w-0 rounded-[16px] border bg-[#0C1811]/90 px-5 py-6 backdrop-blur-sm min-[400px]:px-6 sm:rounded-[18px] sm:px-7 sm:py-7 lg:min-h-[290px] lg:px-6 lg:py-8 xl:min-h-[300px] xl:px-7 xl:py-9 ${
                  activeIndex === index
                    ? "active-card border-[#8BB630]/70"
                    : "border-[#8BB630]/20"
                }`}
              >

                {/* NUMBER */}

                <span className="process-number block text-[12px] font-bold tracking-[1.5px] text-[#8BB630] sm:text-[13px]">
                  {step.number}
                </span>

                {/* TITLE */}

                <h2 className="process-title mt-7 text-[22px] font-bold leading-tight tracking-[-0.5px] text-white sm:mt-9 sm:text-[24px] lg:mt-10 lg:text-[25px]">
                  {step.title}
                </h2>

                {/* DESCRIPTION */}

                <p className="mt-3 max-w-[280px] text-[13px] leading-[1.85] text-[#B4C2B6] sm:text-[14px]">
                  {step.description}
                </p>

                {/* BOTTOM INDICATOR */}

                <div className="mt-7 flex items-center gap-3">

                  <span
                    className={`h-[3px] rounded-full bg-[#8BB630] transition-all duration-500 ${
                      activeIndex === index ? "w-12" : "w-7"
                    }`}
                  />

                  <span className="text-[10px] font-bold uppercase tracking-[1.5px] text-[#8F9D91]">
                    Stage {index + 1}
                  </span>

                </div>

              </article>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}

export default HowItWorksMain;