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
 > <div
     className="
       mx-auto grid w-full max-w-[1600px]
       grid-cols-1 gap-8
       px-6 py-[76px]
       sm:px-10 sm:py-[90px]
       md:grid-cols-2 md:items-start md:gap-12
       lg:px-[4.5%] lg:py-[119px]
       xl:gap-[100px]
     "
   >
{/* LEFT COLUMN */}
<motion.div
initial={{
opacity: 0,
y: 35,
}}
whileInView={{
opacity: 1,
y: 0,
}}
viewport={{
once: false,
amount: 0.3,
}}
transition={{
duration: 0.8,
ease: [0.22, 1, 0.36, 1],
}}
className="min-w-0"
>
{/* Eyebrow */} <div className="mb-5 flex items-center sm:mb-[32px]"> <span
           className="
             text-[11px] font-bold
             uppercase tracking-[0.19em]
             text-[#d1ed14]
             sm:text-[12px]
           "
         > <TextRoll
             duration={0.5}
             stagger={0.035}
             delay={0.05}
           >
Content. Identity. Digital trust. </TextRoll> </span> </div>


      {/* Main heading */}
      <h2
        className="
          m-0 max-w-[700px]
          text-[32px] font-bold
          leading-[1.12] tracking-[-1.2px]
          text-[#f8fafc]
          sm:text-[52px]
          sm:tracking-[-1.6px]
          lg:text-[64px]
          lg:leading-[1.12]
          lg:tracking-[-2px]
        "
      >
        <span className="block sm:inline">
          <TextRoll
            duration={0.6}
            stagger={0.025}
          >
            Protect what makes
          </TextRoll>
        </span>{" "}<br />

        <span className="block sm:inline">
          <TextRoll
            duration={0.6}
            stagger={0.025}
            delay={0.15}
          >
            your business
          </TextRoll>
        </span>{" "}<br />

        <span className="block sm:inline">
          <TextRoll
            duration={0.6}
            stagger={0.025}
            delay={0.3}
          >
            valuable.
          </TextRoll>
        </span>
      </h2>
    </motion.div>

    {/* RIGHT COLUMN */}
    <motion.div
      initial={{
        opacity: 0,
        y: 55,
        rotateX: 8,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotateX: 0,
      }}
      viewport={{
        once: false,
        amount: 0.3,
      }}
      transition={{
        duration: 0.8,
        delay: 0.12,
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
        "
      >
        <TextRoll
          duration={0.4}
          stagger={0.012}
          delay={0.1}
        >
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
        "
      >
        <TextRoll
          duration={0.4}
          stagger={0.012}
          delay={0.15}
        >
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
          y: 15,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: false,
          amount: 0.3,
        }}
        transition={{
          duration: 0.6,
          delay: 0.25,
        }}
        whileHover={{
          x: 6,
          transition: {
            duration: 0.25,
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
        "
      >
        Meet TrackOwls →
      </motion.a>
    </motion.div>
  </div>
</section>


);
}
