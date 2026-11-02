import React from "react";
import { motion } from "motion/react";
import { TextRoll } from "../ui/TextRoll";

export default function HomeAbout() {
return ( <section
   id="about"
   className="
     relative w-full overflow-hidden
     bg-transparent
     border-y border-[rgba(171,198,215,0.15)]
     font-['Roboto',Arial,sans-serif]
     text-white
   "
 >
<div
className="
mx-auto grid w-full max-w-[1600px]
grid-cols-1 gap-8
px-6 py-[76px]
sm:px-10 sm:py-[90px]
md:grid-cols-2 md:items-start md:gap-12
lg:px-[4.5%] lg:py-[119px]
xl:gap-[100px]


      max-sm:gap-2
      max-sm:px-5
      max-sm:py-6
    "
  >
    {/* LEFT COLUMN */}
    <motion.div
      initial={{
        opacity: 0,
        y: 12,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.15,
      }}
      transition={{
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="min-w-0"
    >
      {/* Eyebrow */}
      <div className="mb-5 flex items-center sm:mb-[22px]">
        <span
          className="
            text-[11px] font-bold
            uppercase tracking-[0.19em]
            text-[#d1ed14]
            sm:text-[12px]
          "
        >
          <TextRoll duration={0.25} stagger={0.008}>
            Content. Identity. Digital trust.
          </TextRoll>
        </span>
      </div>

      {/* Main Heading */}
      <h2
        className="
          m-0 max-w-[700px]
          text-[32px] font-bold
          leading-[1.05] tracking-[-1.2px]
          text-[#f8fafc]
          sm:text-[52px]
          sm:tracking-[-1.6px]
          lg:text-[64px]
          lg:leading-[1.12]
          lg:tracking-[-2px]
        "
      >
        <span className="block">
          <TextRoll duration={0.25} stagger={0.008}>
            Protect what makes
          </TextRoll>
        </span>

        <span className="block">
          <TextRoll duration={0.25} stagger={0.008}>
            your business
          </TextRoll>
        </span>

        <span className="block">
          <TextRoll duration={0.25} stagger={0.008}>
            valuable.
          </TextRoll>
        </span>
      </h2>
    </motion.div>

    {/* RIGHT COLUMN */}
    <motion.div
      initial={{
        opacity: 0,
        y: 14,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: false,
        amount: 0.15,
      }}
      transition={{
        duration: 0.5,
        delay: 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      className="min-w-0 md:pt-0"
    >
      {/* First paragraph */}
      <p
        className="
          m-0 max-w-[800px]
          text-[15px] font-normal
          leading-[1.65] tracking-[-0.15px]
          text-[#b7cbd9]
          sm:text-[18px]
          lg:text-[18px]
          lg:leading-[1.65]

          max-sm:text-[15px]
          max-sm:leading-[1.8]
          max-sm:tracking-normal
          max-sm:[word-break:keep-all]
        "
      >
        <TextRoll duration={0.25} stagger={0.008}>
          Your content and brand can appear far beyond the channels you
          authorize. TrackOwls brings those findings into a structured
          review: what was found, which rights apply, what evidence
          supports it and what action follows.
        </TextRoll>
      </p>

      {/* Second paragraph */}
      <p
        className="
          mt-6 mb-0 max-w-[800px]
          text-[15px] font-normal
          leading-[1.65] tracking-[-0.15px]
          text-[#b7cbd9]
          sm:mt-[32px]
          sm:text-[18px]
          lg:text-[18px]
          lg:leading-[1.65]

          max-sm:mt-7
          max-sm:text-[15px]
          max-sm:leading-[1.8]
          max-sm:tracking-normal
          max-sm:[word-break:keep-all]
        "
      >
        <TextRoll duration={0.25} stagger={0.008}>
          Start with a release, a live event, a catalogue or a brand
          portfolio. Build the monitoring scope around your priorities,
          then use case record and reporting to follow the work.
        </TextRoll>
      </p>

      {/* About link */}
      <motion.a
        href="/about"
        initial={{
          opacity: 0,
          y: 6,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: false,
          amount: 0.15,
        }}
        transition={{
          duration: 0.4,
          delay: 0.12,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          x: 4,
          transition: {
            duration: 0.2,
            ease: "easeOut",
          },
        }}
        className="
          mt-6 inline-flex
          border-b border-[#d1ed14]/50
          pb-[7px]
          text-[13px] font-medium
          tracking-[-0.2px]
          text-[#d1ed14]
          transition-colors duration-200
          hover:border-[#d1ed14]
          hover:text-white
          sm:mt-[37px]
          sm:pb-[9px]
          sm:text-[14px]

          max-sm:mt-7
          max-sm:pb-2
        "
      >
        Meet TrackOwls →
      </motion.a>
    </motion.div>
  </div>
</section>
);
}
