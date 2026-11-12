import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Code2,
  Search,
  Monitor,
  Headset,
  ArrowUpRight,
  Users,
} from "lucide-react";

/* =========================
   TEAM DEPARTMENTS
========================= */

const departments = [
  {
    number: "01",
    title: "Technology & Development",
    description:
      "Building intelligent digital solutions and advanced technologies to strengthen content protection.",
    icon: Code2,
    tag: "ENGINEERING",
  },
  {
    number: "02",
    title: "Anti-Piracy Operations",
    description:
      "Identifying, investigating, and addressing unauthorized distribution of digital content.",
    icon: ShieldCheck,
    tag: "PROTECTION",
  },
  {
    number: "03",
    title: "Research & Intelligence",
    description:
      "Analyzing digital threats and discovering insights to improve intellectual property protection.",
    icon: Search,
    tag: "INTELLIGENCE",
  },
  {
    number: "04",
    title: "Digital Monitoring",
    description:
      "Monitoring digital platforms to identify potential copyright infringements and online threats.",
    icon: Monitor,
    tag: "MONITORING",
  },
  {
    number: "05",
    title: "Client Success & Support",
    description:
      "Working closely with clients to deliver reliable support and effective protection solutions.",
    icon: Headset,
    tag: "CLIENT EXPERIENCE",
  },
];

/* =========================
   ANIMATION VARIANTS
========================= */

const reveal = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const cardReveal = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* =========================
   OUR TEAM COMPONENT
========================= */

const OurTeam = () => {
  return (
    <section
      id="our-team"
      className="relative isolate overflow-hidden mt-4 bg-transparent px-5 py-14 font-['Roboto'] text-white sm:px-8 sm:py-16 lg:px-16 lg:py-20"
    >

      {/* BACKGROUND GLOW */}

      <div className="pointer-events-none absolute -left-40 top-20 -z-10 h-80 w-80 rounded-full bg-[#8BB630]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#8BB630]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          className="mb-10 max-w-3xl sm:mb-12"
        >

          <div className="mb-4 flex items-center gap-3">

            <span className="h-[2px] w-7 bg-[#8BB630]" />

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8BB630] sm:text-xs">
              The People Behind The Protection
            </span>

          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">

            One mission.

            <span className="text-[#8BB630]">
              {" "}One team.
            </span>

          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-[#AAB8C5] sm:text-base sm:leading-7">

            A collaborative team of professionals bringing together
            technology, intelligence, and expertise to protect digital
            content and intellectual property.

          </p>

        </motion.div>

        {/* =========================
            TEAM INTRO BANNER
        ========================= */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          className="mb-8 flex flex-col gap-4 border border-[#8BB630]/20 bg-[#152019]/90 p-5 backdrop-blur-md sm:flex-row sm:items-center sm:justify-between sm:p-6"
        >

          <div className="flex items-center gap-4">

            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#8BB630] text-[#152019]">

              <Users size={21} />

            </div>

            <div>

              <h3 className="text-base font-bold text-white">
                Stronger Together
              </h3>

              <p className="mt-1 text-xs leading-5 text-[#AAB8AE] sm:text-sm">
                Different expertise. One shared commitment.
              </p>

            </div>

          </div>

          <span className="text-[10px] font-bold tracking-[0.16em] text-[#8BB630]">
            UNITED BY PURPOSE
          </span>

        </motion.div>

        {/* =========================
            DEPARTMENT CARDS
        ========================= */}

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {departments.map((department, index) => {

            const Icon = department.icon;

            return (

              <motion.article
                key={department.number}
                custom={index}
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: 0.15,
                }}
                className="group relative flex flex-col border border-white/10 bg-[#071525]/75 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#8BB630]/50 hover:bg-[#102019]/90 hover:shadow-[0_15px_45px_rgba(139,182,48,0.08)] sm:p-6"
              >

                {/* TOP */}

                <div className="mb-7 flex items-center justify-between">

                  <span className="text-xs font-bold text-[#8BB630]">
                    {department.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8BB630]/15 text-[#8BB630] transition-all duration-300 group-hover:bg-[#8BB630] group-hover:text-[#152019]">

                    <Icon
                      size={20}
                      strokeWidth={1.7}
                    />

                  </div>

                </div>

                {/* CONTENT */}

                <div className="flex-1">

                  <span className="text-[9px] font-bold tracking-[0.15em] text-[#8BB630]">

                    {department.tag}

                  </span>

                  <h3 className="mt-2 text-lg font-bold leading-snug text-white sm:text-xl">

                    {department.title}

                  </h3>

                  <p className="mt-3 text-[13px] leading-6 text-[#AAB8C5] sm:text-sm">

                    {department.description}

                  </p>

                </div>

                {/* BOTTOM */}

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">

                  <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#82918A]">

                    TEAM EXPERTISE

                  </span>

                  <ArrowUpRight
                    size={18}
                    className="text-[#8BB630] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />

                </div>

              </motion.article>

            );

          })}

        </div>

        {/* =========================
            TEAM CULTURE
        ========================= */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          className="mt-16 border-t border-white/10 pt-10 sm:mt-20 sm:pt-12"
        >

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-center">

            <div>

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8BB630]">

                Together We Make It Happen

              </span>

              <h3 className="mt-3 text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">

                Different skills.

                <br />

                <span className="text-[#8BB630]">
                  One powerful purpose.
                </span>

              </h3>

            </div>

            <p className="text-sm leading-7 text-[#AAB8C5] sm:text-base">

              At TrackOwls, collaboration drives everything we do.
              Our collective expertise, innovative thinking, and
              shared commitment help us build smarter approaches
              to digital content protection.

            </p>

          </div>

        </motion.div>

        {/* =========================
            BOTTOM STATEMENT
        ========================= */}

        

      </div>

    </section>
  );
};

export default OurTeam;
