import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ShieldCheck,
  Target,
  Lightbulb,
  Globe2,
} from "lucide-react";

const leaders = [
  {
    number: "01",
    name: "P. Dhanalakshmi",
    role: "Founder",
    image: "/images/leadership/founder.jpg",
    description:
      "Driving the vision behind TrackOwls through innovation, digital security, and a commitment to protecting intellectual property.",
    focus: "Vision & Strategy",
  },
  {
    number: "02",
    name: "Shamsath Begum",
    role: "Co-Founder",
    image: "/images/leadership/co-founder.jpg",
    description:
      "Supporting TrackOwls' strategic growth and innovation while strengthening digital protection and creating meaningful industry impact.",
    focus: "Growth & Innovation",
  },
];

const values = [
  {
    icon: Target,
    title: "Clear Vision",
    description:
      "Building a safer digital ecosystem through purposeful leadership.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description:
      "Using technology to address evolving digital challenges.",
  },
  {
    icon: Globe2,
    title: "Global Impact",
    description:
      "Working towards stronger intellectual property protection.",
  },
];

const Leadership = () => {
  return (
    <section
      id="leadership"
      className="relative overflow-hidden mt-4 bg-[#F5F8F2] px-5 py-14 font-['Roboto'] text-[#152019] sm:px-8 sm:py-16 lg:px-16 lg:py-20"
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-[#8BB630]/10 blur-[100px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl sm:mb-12"
        >
          <div className="mb-4 flex items-center gap-3">
            <span className="h-[2px] w-7 bg-[#8BB630]" />
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#668B27] sm:text-xs">
              The People Behind The Vision
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Leadership that{" "}
            <span className="text-[#8BB630]">
              drives protection.
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-[#68746C] sm:text-base sm:leading-7">
            Meet the leadership shaping our vision, driving innovation,
            and building a stronger future for digital content protection.
          </p>
        </motion.div>

        {/* LEADERSHIP CARDS */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-7">

          {leaders.map((leader, index) => (
            <motion.article
              key={leader.number}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              className="group overflow-hidden border border-[#152019]/10 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* IMAGE */}
              <div className="relative h-[250px] overflow-hidden bg-[#E7EDDF] sm:h-[300px] lg:h-[340px]">

                <img
                  src={leader.image}
                  alt={leader.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

                <span className="absolute left-5 top-5 text-xs font-bold text-white">
                  {leader.number}
                </span>

                <div className="absolute bottom-5 left-5 flex items-center gap-2">
                  <ShieldCheck
                    size={16}
                    className="text-[#ADD132]"
                  />
                  <span className="text-[9px] font-bold tracking-[0.15em] text-white">
                    TRACKOWLS LEADERSHIP
                  </span>
                </div>

                <div className="absolute right-5 top-5 rounded-full border border-white/40 p-2 text-white backdrop-blur-sm">
                  <ArrowUpRight size={17} />
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-6">

                <div className="mb-3 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#8BB630]" />

                  <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#668B27]">
                    {leader.role}
                  </span>
                </div>

                <h3 className="text-xl font-bold tracking-tight sm:text-2xl">
                  {leader.name}
                </h3>

                <p className="mt-3 text-[13px] leading-6 text-[#68746C] sm:text-sm">
                  {leader.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-[#152019]/10 pt-4">
                  <span className="text-[9px] font-bold uppercase tracking-[0.12em] text-[#68746C]">
                    {leader.focus}
                  </span>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#8BB630] text-[#152019] transition-all duration-300 group-hover:rotate-45 group-hover:bg-[#152019] group-hover:text-white">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

              </div>
            </motion.article>
          ))}

        </div>

        {/* LEADERSHIP VALUES */}
        <div className="mt-16 border-t border-[#152019]/10 pt-10 sm:mt-20 sm:pt-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#668B27] sm:text-xs">
              What Drives Us
            </span>

            <h3 className="mt-3 text-2xl font-bold sm:text-3xl lg:text-4xl">
              Leadership built on purpose.
            </h3>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                  }}
                  className="group border-b border-[#152019]/10 pb-5"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#8BB630]/15 text-[#668B27] transition-all duration-300 group-hover:bg-[#8BB630] group-hover:text-[#152019]">
                    <Icon size={21} strokeWidth={1.7} />
                  </div>

                  <h4 className="text-base font-bold sm:text-lg">
                    {value.title}
                  </h4>

                  <p className="mt-2 max-w-sm text-xs leading-6 text-[#68746C] sm:text-sm">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}

          </div>
        </div>

        {/* BOTTOM STATEMENT */}
       
      </div>
    </section>
  );
};

export default Leadership;

