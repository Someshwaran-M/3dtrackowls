import React from "react";
import {
  Search,
  ScanSearch,
  ShieldCheck,
  Scale,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";

const features = [
  {
    icon: Search,
    title: "Broad-spectrum discovery",
    description:
      "Automated monitoring scans public web, streaming and social channels for matching assets.",
  },
  {
    icon: ScanSearch,
    title: "Analyst verification",
    description:
      "Experienced analysts confirm title, rights and evidence before any action is initiated.",
  },
  {
    icon: ShieldCheck,
    title: "Enforcement operations",
    description:
      "Direct complaints and escalations via platform workflows, host notices and legal pathways.",
  },
  {
    icon: Scale,
    title: "Evidence preservation",
    description:
      "Timestamped logs, source records and chain of custody support ongoing protection.",
  },
];

export default function HomeTechnology() {
  const shouldReduceMotion = useReducedMotion();

  const leftContentInitial = shouldReduceMotion
    ? { opacity: 1, x: 0, rotateY: 0 }
    : { opacity: 0, x: -70, rotateY: 12 };

  const cardInitial = shouldReduceMotion
    ? { opacity: 1, y: 0, rotateX: 0, rotateY: 0, scale: 1 }
    : { opacity: 0, y: 65, rotateX: 16, rotateY: -10, scale: 0.92 };

  return (
    <section
      id="home-technology"
      className="relative w-full overflow-hidden border-y border-[rgba(171,198,215,0.15)] bg-transparent font-['Roboto',Arial,sans-serif] text-white"
      style={{ perspective: "1400px" }}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <motion.div
          aria-hidden="true"
          className="absolute -right-24 top-1/4 h-64 w-64 rounded-full bg-[#d1ed14]/[0.045] blur-3xl"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, -35, 0],
                  y: [0, 28, 0],
                  scale: [1, 1.12, 1],
                }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden="true"
          className="absolute -bottom-28 left-1/3 h-56 w-56 rounded-full bg-[#8bb630]/[0.05] blur-3xl"
          animate={
            shouldReduceMotion
              ? undefined
              : {
                  x: [0, 30, 0],
                  y: [0, -24, 0],
                }
          }
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative mx-auto grid max-w-[1580px] grid-cols-1 gap-8 px-4 py-8 sm:gap-12 sm:px-8 sm:py-12 lg:grid-cols-[1fr_1fr] lg:items-center lg:gap-16 lg:px-[4.8%] lg:py-16">
        {/* Left content */}
        <motion.div
          className="relative"
          initial={leftContentInitial}
          whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: shouldReduceMotion ? 0 : 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          <motion.p
            className="mb-5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#d1ed14] sm:mb-7 sm:text-xs sm:tracking-[0.24em]"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.5 }}
            transition={{ delay: 0.12, duration: 0.65 }}
          >
            Technology + Human Intelligence
          </motion.p>

          <motion.h2
            className="m-0 max-w-[700px] text-[30px] font-bold leading-[1.13] tracking-[-0.045em] text-[#f8fafc] sm:text-[48px] lg:text-[54px]"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 30, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "left center" }}
          >
            The right evidence.
            <br />
            <span>The right action.</span>
          </motion.h2>

          <motion.p
            className="mt-5 max-w-[710px] text-[15px] leading-[1.7] text-[#b7cbd9] sm:mt-6 sm:text-[17px] sm:leading-[1.9]"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ delay: 0.3, duration: 0.75 }}
          >
            Automation supports discovery. Analyst review supports decisions.
            Enforcement operations connect verified findings to appropriate
            reporting channels.
          </motion.p>

          <motion.a
            href="/how-it-works"
            className="group mt-6 inline-flex items-center gap-2 border-b border-[#d1ed14]/40 pb-2 text-[13px] font-medium text-[#d1ed14] transition-colors duration-300 hover:border-[#d1ed14] hover:text-white sm:mt-8 sm:text-[14px]"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            whileHover={shouldReduceMotion ? undefined : { x: 5 }}
            whileTap={shouldReduceMotion ? undefined : { scale: 0.97 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <span>Explore our approach</span>
            <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </motion.a>
        </motion.div>

        {/* Right feature grid */}
        <motion.div
          className="grid grid-cols-2 gap-x-5 gap-y-8 sm:gap-x-12 sm:gap-y-12 lg:gap-x-14 lg:gap-y-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.18 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: shouldReduceMotion ? 0 : 0.16,
                delayChildren: 0.12,
              },
            },
          }}
          style={{ transformStyle: "preserve-3d" }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                variants={{
                  hidden: cardInitial,
                  visible: {
                    opacity: 1,
                    y: 0,
                    rotateX: 0,
                    rotateY: 0,
                    scale: 1,
                    transition: {
                      duration: shouldReduceMotion ? 0 : 0.85,
                      ease: [0.22, 1, 0.36, 1],
                    },
                  },
                }}
                whileHover={
                  shouldReduceMotion
                    ? undefined
                    : {
                        y: -9,
                        rotateX: 3,
                        rotateY: index % 2 === 0 ? -3 : 3,
                        scale: 1.025,
                        transition: { duration: 0.3, ease: "easeOut" },
                      }
                }
                className="group min-w-0 rounded-xl border border-[rgba(171,198,215,0.15)] bg-[rgba(10,26,46,0.55)] p-5 backdrop-blur-md transition-colors duration-300 hover:border-[#d1ed14]/50 hover:bg-[rgba(14,34,60,0.8)]"
                style={{
                  transformStyle: "preserve-3d",
                  transformPerspective: 1000,
                  willChange: shouldReduceMotion ? "auto" : "transform, opacity",
                }}
              >
                <motion.div
                  className="mb-4 inline-flex text-[#d1ed14] sm:mb-6"
                  whileHover={shouldReduceMotion ? undefined : { z: 24, rotateY: 18, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 260, damping: 14 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                    aria-hidden="true"
                    className="sm:h-[28px] sm:w-[28px]"
                  />
                </motion.div>

                <h3 className="m-0 text-[15px] font-bold leading-[1.2] tracking-[-0.025em] text-white transition-colors duration-300 group-hover:text-[#d1ed14] sm:text-[20px] sm:leading-snug">
                  {feature.title}
                </h3>

                <p className="mb-0 mt-2 text-[12px] leading-[1.7] text-[#b7cbd9] sm:mt-3 sm:max-w-[330px] sm:text-[14px] sm:leading-[1.8]">
                  {feature.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
