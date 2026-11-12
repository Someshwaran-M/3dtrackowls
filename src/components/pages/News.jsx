
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Newspaper,
  ShieldCheck,
  Globe2,
  TrendingUp,
  CalendarDays,
  ArrowRight,
} from "lucide-react";

/* =========================
   NEWS DATA
========================= */

const newsItems = [
  {
    number: "01",
    category: "INDUSTRY INSIGHTS",
    title: "The Growing Challenge of Digital Content Piracy",
    description:
      "Explore the evolving digital piracy landscape and why protecting original content has become increasingly important.",
    icon: Globe2,
    readTime: "5 MIN READ",
    featured: true,
  },
  {
    number: "02",
    category: "TECHNOLOGY",
    title: "How Technology Is Transforming Anti-Piracy Protection",
    description:
      "Discover how intelligent monitoring, automation, and advanced technologies support digital content protection.",
    icon: ShieldCheck,
    readTime: "4 MIN READ",
  },
  {
    number: "03",
    category: "DIGITAL SECURITY",
    title: "Understanding the Importance of Online Brand Protection",
    description:
      "Learn why businesses need to monitor unauthorized use of their brands across digital platforms.",
    icon: TrendingUp,
    readTime: "6 MIN READ",
  },
];

/* =========================
   ANIMATION
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
      delay: index * 0.15,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* =========================
   NEWS COMPONENT
========================= */

const News = () => {
  return (
    <section
      id="news"
      className="relative isolate overflow-hidden mt-4 bg-transparent px-5 py-14 font-['Roboto'] text-white sm:px-8 sm:py-16 lg:px-16 lg:py-20"
    >

      {/* BACKGROUND GLOW */}

      <div className="pointer-events-none absolute -right-40 top-10 -z-10 h-96 w-96 rounded-full bg-[#8BB630]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -left-40 bottom-0 -z-10 h-80 w-80 rounded-full bg-[#8BB630]/5 blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* =========================
            HEADER
        ========================= */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          className="mb-10 flex flex-col justify-between gap-6 md:flex-row md:items-end"
        >

          <div className="max-w-3xl">

            <div className="mb-4 flex items-center gap-3">

              <span className="h-[2px] w-7 bg-[#8BB630]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8BB630] sm:text-xs">
                News & Updates
              </span>

            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">

              What's happening

              <span className="text-[#8BB630]">
                {" "}in our world.
              </span>

            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-[#AAB8C5] sm:text-base sm:leading-7">

              Stay informed with the latest developments, digital
              protection insights, industry trends, and updates
              from the world of anti-piracy.

            </p>

          </div>

          {/* NEWS ICON */}

          <div className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-full border border-[#8BB630]/30 bg-[#8BB630]/10 text-[#8BB630] md:flex">

            <Newspaper size={25} strokeWidth={1.5} />

          </div>

        </motion.div>

        {/* =========================
            FEATURED NEWS
        ========================= */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="group relative mb-7 overflow-hidden border border-white/10 bg-[#071525]/80 backdrop-blur-sm"
        >

          <div className="grid grid-cols-1 md:grid-cols-2">

            {/* FEATURED VISUAL */}

            <div className="relative flex min-h-[230px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#10251C] via-[#071525] to-[#020B18] p-8 sm:min-h-[300px] lg:min-h-[340px]">

              <div className="absolute h-64 w-64 rounded-full border border-[#8BB630]/10 transition-transform duration-1000 group-hover:scale-110" />

              <div className="absolute h-48 w-48 rounded-full border border-[#8BB630]/20 transition-transform duration-1000 group-hover:scale-110" />

              <div className="absolute h-32 w-32 rounded-full border border-[#8BB630]/30" />

              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#8BB630]/15 text-[#8BB630] shadow-[0_0_60px_rgba(139,182,48,0.15)]">

                <ShieldCheck size={42} strokeWidth={1.2} />

              </div>

              <span className="absolute bottom-6 left-6 text-[9px] font-bold tracking-[0.2em] text-[#8BB630]">
                TRACKOWLS INSIGHTS
              </span>

              <span className="absolute right-6 top-6 text-xs font-bold text-white/40">
                01 / FEATURED
              </span>

            </div>

            {/* FEATURED CONTENT */}

            <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-11">

              <div className="mb-5 flex items-center gap-3">

                <span className="bg-[#8BB630]/15 px-3 py-1.5 text-[9px] font-bold tracking-[0.15em] text-[#8BB630]">
                  FEATURED ARTICLE
                </span>

                <span className="text-[10px] text-[#82918A]">
                  INDUSTRY INSIGHTS
                </span>

              </div>

              <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">

                The Growing Challenge of Digital Content Piracy

              </h3>

              <p className="mt-4 text-sm leading-7 text-[#AAB8C5]">

                Explore the evolving digital piracy landscape and
                understand why protecting original content is
                essential for creators, businesses, and brands.

              </p>

              <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">

                <span className="text-[9px] font-bold tracking-[0.15em] text-[#82918A]">
                  5 MIN READ
                </span>

                <a
                  href="/insights"
                  className="group/link flex items-center gap-2 text-xs font-bold text-[#8BB630] transition-colors hover:text-white"
                >
                  Explore Insights

                  <ArrowUpRight
                    size={17}
                    className="transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                  />

                </a>

              </div>

            </div>

          </div>

        </motion.div>

        {/* =========================
            LATEST ARTICLES
        ========================= */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          className="mb-7 flex items-center justify-between"
        >

          <div>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8BB630]">
              Explore More
            </span>

            <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              Latest Articles
            </h3>

          </div>

          <div className="hidden items-center gap-2 text-[10px] font-bold tracking-[0.12em] text-[#82918A] sm:flex">

            <CalendarDays size={15} />

            INSIGHTS & UPDATES

          </div>

        </motion.div>

        {/* ARTICLE CARDS */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {newsItems.slice(1).map((item, index) => {

            const Icon = item.icon;

            return (

              <motion.article
                key={item.number}
                custom={index}
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                className="group flex flex-col border border-white/10 bg-[#071525]/75 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#8BB630]/40 hover:bg-[#102019]/90 hover:shadow-[0_15px_45px_rgba(139,182,48,0.07)] sm:p-6"
              >

                {/* CARD TOP */}

                <div className="mb-7 flex items-center justify-between">

                  <span className="text-xs font-bold text-[#8BB630]">
                    {item.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8BB630]/10 text-[#8BB630] transition-all duration-300 group-hover:bg-[#8BB630] group-hover:text-[#152019]">

                    <Icon size={20} strokeWidth={1.6} />

                  </div>

                </div>

                {/* CATEGORY */}

                <span className="text-[9px] font-bold tracking-[0.15em] text-[#8BB630]">
                  {item.category}
                </span>

                {/* TITLE */}

                <h4 className="mt-3 text-lg font-bold leading-snug text-white sm:text-xl">
                  {item.title}
                </h4>

                {/* DESCRIPTION */}

                <p className="mt-3 flex-1 text-[13px] leading-6 text-[#AAB8C5] sm:text-sm">
                  {item.description}
                </p>

                {/* CARD FOOTER */}

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">

                  <span className="text-[9px] font-bold tracking-[0.12em] text-[#82918A]">
                    {item.readTime}
                  </span>

                  <a
                    href="/insights"
                    aria-label={`Read more about ${item.title}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8BB630]/30 text-[#8BB630] transition-all duration-300 hover:bg-[#8BB630] hover:text-[#152019]"
                  >

                    <ArrowUpRight size={17} />

                  </a>

                </div>

              </motion.article>

            );

          })}

        </div>

        {/* =========================
            BOTTOM CTA
        ========================= */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-9 sm:mt-16 sm:flex-row sm:items-center"
        >

          <div>

            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8BB630]">
              Stay Informed
            </span>

            <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              Knowledge strengthens protection.
            </h3>

            <p className="mt-2 text-xs leading-6 text-[#AAB8C5] sm:text-sm">
              Discover more insights about digital security and content protection.
            </p>

          </div>

          <a
            href="/insights"
            className="group inline-flex shrink-0 items-center gap-3 border border-[#8BB630]/40 px-5 py-3 text-xs font-bold text-[#8BB630] transition-all duration-300 hover:bg-[#8BB630] hover:text-[#152019]"
          >

            Explore All Insights

            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </a>

        </motion.div>

      </div>

    </section>
  );
};

export default News;

