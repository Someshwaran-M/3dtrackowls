import React from "react";
import { Link } from "react-router-dom";

function SolutionsCTA() {
  return (
    <section
      id="solutions-cta"
      className="w-full border-y border-[rgba(171,198,215,0.18)] bg-[rgba(10,26,46,0.65)] backdrop-blur-xl font-['Roboto',sans-serif]"
    >
      <div className="mx-auto flex max-w-[1480px] flex-col justify-between gap-6 px-5 py-9 sm:px-8 sm:py-10 lg:flex-row lg:items-center lg:gap-10 lg:px-16 lg:py-12">

        {/* Left content */}
        <div className="min-w-0">
          <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.16em] text-[#d1ed14] sm:text-[11px]">
            Secure Your Digital Assets
          </p>

          <h2 className="m-0 text-2xl font-bold leading-tight tracking-tight text-[#f8fafc] sm:text-3xl lg:text-4xl">
            Ready to strengthen your protection?
          </h2>

          <p className="mb-0 mt-3 text-[13px] leading-relaxed text-[#b7cbd9] sm:text-sm">
            Discover how TrackOwls solutions can help protect your content,
            brand and intellectual property.
          </p>
        </div>

        {/* Right button */}
        <div className="shrink-0 lg:pl-6">
          <Link
            to="/contact"
            className="inline-flex min-h-[45px] w-full items-center justify-center rounded-md bg-[#d1ed14] px-6 py-3 text-center text-[12px] font-bold !text-black transition-all duration-300 hover:bg-[#e2fa2e] hover:shadow-[0_0_20px_rgba(209,237,20,0.3)] sm:w-auto sm:min-w-[190px]"
          >
            Explore Protection →
          </Link>
        </div>

      </div>
    </section>
  );
}

export default SolutionsCTA;

