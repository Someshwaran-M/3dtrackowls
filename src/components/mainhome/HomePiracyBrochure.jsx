import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

export default function HomePiracyBrochure() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const root = sectionRef.current;
    if (!root) return;

    const revealItems = root.querySelectorAll(".brochure-reveal");

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      revealItems.forEach((item) => item.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          entry.target.classList.toggle("is-visible", entry.isIntersecting);
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -35px 0px" }
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="piracy-brochure"
      ref={sectionRef}
      className="w-full overflow-hidden border-y border-[rgba(171,198,215,0.15)] bg-transparent font-['Roboto',Arial,sans-serif] text-white"
    >
      <div className="brochure-container mx-auto max-w-[1320px] px-6 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-[76px]">
        <div className="grid grid-cols-1 items-center gap-9 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          {/* LEFT CONTENT */}
          <div className="brochure-copy brochure-reveal brochure-reveal-left flex min-w-0 flex-col items-start">
            <p className="mb-5 text-[10px] font-bold uppercase leading-[1.4] tracking-[1.9px] text-[#d1ed14] sm:text-[11px]">
              TrackOwls insights / Industry report
            </p>

            <h2 className="m-0 text-[34px] font-bold leading-[1.12] tracking-[-1.2px] text-[#f8fafc] sm:text-[43px] lg:text-[49px]">
              Digital piracy.
              <span className="block">Real consequences.</span>
            </h2>

            <p className="mt-5 max-w-[610px] text-[14px] font-normal leading-[1.75] text-[#b7cbd9] sm:text-[15px]">
              Explore our 12-page report on piracy exposure, commercial
              impact and protection priorities for production, OTT and
              live events. With sourced research, a measurement framework
              and a practical roadmap.
            </p>

            <div className="brochure-actions mt-7 flex flex-wrap items-center gap-3">
              <Link
                to="/piracy"
                className="brochure-primary inline-flex min-h-[46px] items-center justify-center gap-3 rounded-[4px] bg-[#d1ed14] px-5 py-3 text-[12px] font-bold text-[#02040d] transition-all duration-300 hover:bg-[#e2fa2e]"
              >
                Read the industry report
                <span aria-hidden="true" className="text-base transition-transform duration-300">↗</span>
              </Link>

              <a
                href="/reports/digital-piracy-report.pdf"
                download
                className="brochure-secondary inline-flex min-h-[46px] items-center justify-center gap-3 rounded-[4px] border border-[rgba(171,198,215,0.3)] bg-transparent px-5 py-3 text-[12px] font-bold text-white transition-all duration-300 hover:border-[#d1ed14] hover:text-[#d1ed14]"
              >
                Download PDF
                <span aria-hidden="true" className="text-base">↓</span>
              </a>
            </div>
          </div>

          {/* RIGHT FEATURE PANEL */}
          <div className="brochure-visual brochure-reveal brochure-reveal-right relative min-w-0">
            <div className="brochure-cover relative isolate min-h-[330px] overflow-hidden rounded-[9px] border border-[rgba(171,198,215,0.22)] bg-[linear-gradient(135deg,rgba(17,43,61,0.72),rgba(5,17,31,0.5))] px-6 py-7 text-white sm:min-h-[360px] sm:px-8 sm:py-8">
              {/* Technical grid and decorative orbit */}
              <div aria-hidden="true" className="brochure-grid absolute inset-0" />
              <div aria-hidden="true" className="brochure-orbit brochure-orbit-one absolute -right-12 -top-16 h-52 w-52 rounded-full border border-[#d1ed14]/25 sm:h-64 sm:w-64" />
              <div aria-hidden="true" className="brochure-orbit brochure-orbit-two absolute -right-1 -top-4 h-36 w-36 rounded-full border border-[#d1ed14]/20 sm:h-48 sm:w-48" />

              <div className="relative z-10 flex min-h-[274px] flex-col items-start sm:min-h-[300px]">
                <div className="flex w-full items-center justify-between gap-3">
                  <p className="m-0 text-[10px] font-bold uppercase leading-[1.5] tracking-[1.7px] text-[#D0F20A] sm:text-[11px]">
                    TrackOwls insights / 2026
                  </p>
                  <span className="brochure-edition rounded-full border border-white/20 px-3 py-1 text-[9px] uppercase tracking-[1.2px] text-[#dce6ed]">
                    Industry report
                  </span>
                </div>

                <div className="mt-9 max-w-[440px]">
                  <p className="mb-3 text-[9px] font-semibold uppercase tracking-[2px] text-[#a9bdca]">
                    Protecting content at every touchpoint
                  </p>
                  <h3 className="m-0 text-[29px] font-bold leading-[1.18] tracking-[-0.7px] text-white sm:text-[36px] lg:text-[39px]">
                    Every release.
                    <br />
                    Every stream.
                    <br />
                    Every live moment.
                  </h3>
                </div>

                <div className="mt-auto flex w-full flex-wrap items-end justify-between gap-4 border-t border-white/15 pt-5">
                  <p className="m-0 text-[10px] font-normal uppercase leading-[1.7] tracking-[0.55px] text-[#E2E9F0] sm:text-[11px]">
                    Film &amp; production
                    <span className="mx-1.5 text-[#d1ed14]">·</span>
                    OTT
                    <span className="mx-1.5 text-[#d1ed14]">·</span>
                    Live sports
                  </p>
                  <p className="m-0 text-[9px] font-bold uppercase leading-[1.5] tracking-[1.4px] text-[#D0F20A]">
                    Scan / Detect / Remove / Protect
                  </p>
                </div>
              </div>
            </div>
            <div aria-hidden="true" className="brochure-depth-line absolute -bottom-2 left-5 right-5 -z-10 h-4 rounded-b-lg border-b border-x border-[#d1ed14]/25" />
          </div>
        </div>
      </div>

      <style>{`
        #piracy-brochure,
        #piracy-brochure * {
          box-sizing: border-box;
        }

        #piracy-brochure {
          perspective: 1400px;
        }

        .brochure-reveal {
          opacity: 0;
          filter: blur(3px);
          transform: translate3d(0, 34px, 0) rotateX(6deg);
          transition:
            opacity 750ms ease,
            transform 850ms cubic-bezier(.16,1,.3,1),
            filter 750ms ease;
          will-change: transform, opacity;
        }

        .brochure-reveal-left {
          transform: translate3d(-48px, 14px, 0) rotateY(8deg);
          transform-origin: right center;
        }

        .brochure-reveal-right {
          transform: translate3d(48px, 14px, 0) rotateY(-8deg);
          transform-origin: left center;
        }

        .brochure-reveal.is-visible {
          opacity: 1;
          filter: blur(0);
          transform: translate3d(0,0,0) rotateX(0) rotateY(0);
        }

        .brochure-cover {
          transform-style: preserve-3d;
          transition:
            transform 500ms cubic-bezier(.2,.8,.2,1),
            border-color 350ms ease,
            box-shadow 500ms ease;
        }

        .brochure-grid {
          z-index: -1;
          opacity: .3;
          background-image:
            linear-gradient(rgba(171,198,215,.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(171,198,215,.08) 1px, transparent 1px);
          background-size: 28px 28px;
          mask-image: linear-gradient(135deg, black, transparent 82%);
        }

        .brochure-orbit {
          pointer-events: none;
          transform: translateZ(24px);
          box-shadow: inset 0 0 28px rgba(209,237,20,.035);
        }

        .brochure-orbit-one {
          animation: brochure-orbit-float 9s ease-in-out infinite;
        }

        .brochure-orbit-two {
          animation: brochure-orbit-float 7s ease-in-out infinite reverse;
        }

        .brochure-edition {
          background: rgba(255,255,255,.035);
        }

        .brochure-depth-line {
          transition: border-color .35s ease, transform .35s ease;
        }

        .brochure-primary,
        .brochure-secondary {
          transition:
            transform .25s ease,
            background .25s ease,
            border-color .25s ease,
            color .25s ease,
            box-shadow .25s ease;
        }

        @media (hover: hover) and (pointer: fine) {
          .brochure-cover:hover {
            transform: perspective(1100px) rotateX(2deg) rotateY(-2deg) translateY(-5px);
            border-color: rgba(209,237,20,.48);
            box-shadow: 0 22px 48px rgba(0,0,0,.2);
          }

          .brochure-cover:hover .brochure-orbit-one {
            transform: translate3d(-8px, 8px, 35px);
          }

          .brochure-primary:hover,
          .brochure-secondary:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 24px rgba(0,0,0,.18);
          }
        }

        @keyframes brochure-orbit-float {
          0%, 100% { transform: translate3d(0,0,24px) rotate(0deg); }
          50% { transform: translate3d(-8px,10px,34px) rotate(8deg); }
        }

        @media (max-width: 1023px) {
          .brochure-container {
            padding-top: 52px;
            padding-bottom: 52px;
          }
        }

        @media (max-width: 640px) {
          .brochure-container {
            width: 100%;
            padding: 38px 18px 42px;
          }

          #piracy-brochure .grid {
            gap: 30px;
          }

          .brochure-copy h2 {
            font-size: clamp(31px, 8vw, 36px);
            line-height: 1.13;
            letter-spacing: -.9px;
          }

          .brochure-copy > p:nth-of-type(2) {
            margin-top: 15px;
            font-size: 13px;
            line-height: 1.7;
          }

          .brochure-actions {
            width: 100%;
            gap: 9px;
            margin-top: 22px;
          }

          .brochure-actions a {
            min-height: 43px;
            padding: 10px 13px;
            font-size: 11px;
          }

          .brochure-cover {
            min-height: 310px;
            padding: 22px 19px;
          }

          .brochure-cover > div.relative {
            min-height: 264px;
          }

          .brochure-cover h3 {
            font-size: clamp(27px, 7.5vw, 32px);
          }

          .brochure-cover .brochure-orbit-one {
            right: -82px;
            top: -62px;
          }

          .brochure-cover .brochure-orbit-two {
            right: -42px;
            top: -15px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .brochure-reveal,
          .brochure-cover,
          .brochure-orbit-one,
          .brochure-orbit-two,
          .brochure-primary,
          .brochure-secondary {
            opacity: 1 !important;
            filter: none !important;
            transform: none !important;
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
