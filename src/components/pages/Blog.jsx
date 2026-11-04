
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ShieldCheck,
  Globe,
  LockKeyhole,
  Monitor,
  Fingerprint,
  Search,
  Clock,
  BookOpen,
  ArrowRight,
} from "lucide-react";

/* =========================
   BLOG DATA
========================= */

const blogs = [
  {
    number: "01",
    category: "DIGITAL SECURITY",
    title: "Understanding Digital Content Piracy",
    description:
      "Discover how digital content piracy affects creators, businesses, and the entertainment industry.",
    icon: ShieldCheck,
    readTime: "6 MIN READ",
    featured: true,
  },
  {
    number: "02",
    category: "CONTENT PROTECTION",
    title: "Why Content Protection Matters in the Digital Age",
    description:
      "Explore the importance of protecting original digital content and maintaining ownership.",
    icon: LockKeyhole,
    readTime: "5 MIN READ",
  },
  {
    number: "03",
    category: "ONLINE SECURITY",
    title: "The Growing Threat of Online Content Theft",
    description:
      "Understand common online content theft practices and the challenges businesses face.",
    icon: Globe,
    readTime: "7 MIN READ",
  },
  {
    number: "04",
    category: "TECHNOLOGY",
    title: "How Digital Monitoring Helps Protect Content",
    description:
      "Learn how continuous monitoring helps identify unauthorized content distribution.",
    icon: Monitor,
    readTime: "4 MIN READ",
  },
  {
    number: "05",
    category: "INTELLECTUAL PROPERTY",
    title: "Protecting Intellectual Property Online",
    description:
      "Understand the importance of intellectual property rights in today's connected world.",
    icon: Fingerprint,
    readTime: "6 MIN READ",
  },
  {
    number: "06",
    category: "INDUSTRY INSIGHTS",
    title: "The Future of Anti-Piracy Technology",
    description:
      "Explore emerging technologies and approaches shaping the future of digital protection.",
    icon: Search,
    readTime: "8 MIN READ",
  },
];

/* =========================
   ANIMATIONS
========================= */

const reveal = {
  hidden: {
    opacity: 0,
    y: 30,
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
    y: 35,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.1,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

/* =========================
   BLOG COMPONENT
========================= */

const Blog = () => {
  return (
    <section
      id="blog"
      className="relative isolate overflow-hidden bg-transparent px-5 py-14 font-['Roboto'] text-white sm:px-8 sm:py-16 lg:px-16 lg:py-20"
    >
      {/* BACKGROUND GLOW */}

      <div className="pointer-events-none absolute -left-40 top-10 -z-10 h-80 w-80 rounded-full bg-[#8BB630]/10 blur-[120px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-[#8BB630]/5 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* HEADER */}

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
              Knowledge & Perspectives
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ideas that inspire.
            <br />
            <span className="text-[#8BB630]">
              Knowledge that protects.
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-[#AAB8C5] sm:text-base sm:leading-7">
            Explore insights, practical knowledge, and expert perspectives
            on digital content protection, intellectual property,
            and online security.
          </p>
        </motion.div>

        {/* FEATURED BLOG */}

        <motion.article
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="group mb-10 grid overflow-hidden border border-white/10 bg-[#071525]/80 backdrop-blur-sm md:grid-cols-2"
        >
          {/* FEATURED VISUAL */}

          <div className="relative flex min-h-[230px] items-center justify-center overflow-hidden bg-gradient-to-br from-[#14271D] via-[#071525] to-[#020B18] p-8 sm:min-h-[300px] lg:min-h-[340px]">

            <div className="absolute h-64 w-64 rounded-full border border-[#8BB630]/10 transition-transform duration-1000 group-hover:scale-110" />

            <div className="absolute h-48 w-48 rounded-full border border-[#8BB630]/20 transition-transform duration-1000 group-hover:scale-110" />

            <div className="absolute h-32 w-32 rounded-full border border-[#8BB630]/30" />

            <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-[#8BB630]/15 text-[#8BB630] shadow-[0_0_60px_rgba(139,182,48,0.15)]">
              <BookOpen size={38} strokeWidth={1.4} />
            </div>

            <span className="absolute bottom-6 left-6 text-[9px] font-bold tracking-[0.2em] text-[#8BB630]">
              TRACKOWLS BLOG
            </span>

            <span className="absolute right-6 top-6 text-xs font-bold text-white/40">
              FEATURED / 01
            </span>
          </div>

          {/* FEATURED CONTENT */}

          <div className="flex flex-col justify-center p-6 sm:p-9 lg:p-11">

            <div className="mb-5 flex items-center gap-3">
              <span className="bg-[#8BB630]/15 px-3 py-1.5 text-[9px] font-bold tracking-[0.15em] text-[#8BB630]">
                FEATURED ARTICLE
              </span>

              <span className="text-[10px] text-[#82918A]">
                DIGITAL SECURITY
              </span>
            </div>

            <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
              Understanding Digital Content Piracy
            </h3>

            <p className="mt-4 text-sm leading-7 text-[#AAB8C5]">
              Discover how digital piracy impacts creators, businesses,
              and the entertainment industry, and why effective
              protection strategies matter.
            </p>

            <div className="mt-7 flex items-center justify-between border-t border-white/10 pt-5">

              <span className="flex items-center gap-2 text-[9px] font-bold tracking-[0.12em] text-[#82918A]">
                <Clock size={14} />
                6 MIN READ
              </span>

              <a
                href="/insights"
                className="group/link flex items-center gap-2 text-xs font-bold text-[#8BB630] transition-colors hover:text-white"
              >
                Read Article

                <ArrowUpRight
                  size={17}
                  className="transition-transform duration-300 group-hover/link:-translate-y-1 group-hover/link:translate-x-1"
                />
              </a>

            </div>
          </div>
        </motion.article>

        {/* BLOG SECTION HEADING */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          className="mb-7 flex items-center justify-between"
        >
          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8BB630]">
              Explore Our Articles
            </span>

            <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              Latest From Our Blog
            </h3>
          </div>

          <div className="hidden items-center gap-2 text-[10px] font-bold tracking-[0.12em] text-[#82918A] sm:flex">
            <BookOpen size={15} />
            KNOWLEDGE HUB
          </div>
        </motion.div>

        {/* BLOG CARDS */}

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {blogs.slice(1).map((blog, index) => {
            const Icon = blog.icon;

            return (
              <motion.article
                key={blog.number}
                custom={index}
                variants={cardReveal}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: 0.15,
                }}
                className="group flex flex-col border border-white/10 bg-[#071525]/75 p-5 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#8BB630]/40 hover:bg-[#102019]/90 hover:shadow-[0_15px_45px_rgba(139,182,48,0.07)] sm:p-6"
              >

                {/* CARD TOP */}

                <div className="mb-7 flex items-center justify-between">
                  <span className="text-xs font-bold text-[#8BB630]">
                    {blog.number}
                  </span>

                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#8BB630]/10 text-[#8BB630] transition-all duration-300 group-hover:bg-[#8BB630] group-hover:text-[#152019]">
                    <Icon size={20} strokeWidth={1.6} />
                  </div>
                </div>

                {/* CATEGORY */}

                <span className="text-[9px] font-bold tracking-[0.15em] text-[#8BB630]">
                  {blog.category}
                </span>

                {/* TITLE */}

                <h4 className="mt-3 text-lg font-bold leading-snug text-white sm:text-xl">
                  {blog.title}
                </h4>

                {/* DESCRIPTION */}

                <p className="mt-3 flex-1 text-[13px] leading-6 text-[#AAB8C5] sm:text-sm">
                  {blog.description}
                </p>

                {/* FOOTER */}

                <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">

                  <span className="flex items-center gap-2 text-[9px] font-bold tracking-[0.12em] text-[#82918A]">
                    <Clock size={13} />
                    {blog.readTime}
                  </span>

                  <a
                    href="/insights"
                    aria-label={`Read ${blog.title}`}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#8BB630]/30 text-[#8BB630] transition-all duration-300 hover:bg-[#8BB630] hover:text-[#152019]"
                  >
                    <ArrowUpRight size={17} />
                  </a>

                </div>

              </motion.article>
            );
          })}

        </div>

        {/* BOTTOM CTA */}

        <motion.div
          variants={reveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-white/10 pt-9 sm:mt-16 sm:flex-row sm:items-center"
        >

          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8BB630]">
              Learn. Understand. Protect.
            </span>

            <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              Stay ahead with knowledge.
            </h3>

            <p className="mt-2 text-xs leading-6 text-[#AAB8C5] sm:text-sm">
              Explore more perspectives on digital content protection.
            </p>
          </div>

          <a
            href="/blog"
            className="group inline-flex shrink-0 items-center gap-3 border border-[#8BB630]/40 px-5 py-3 text-xs font-bold text-[#8BB630] transition-all duration-300 hover:bg-[#8BB630] hover:text-[#152019]"
          >
            Explore All Blogs

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

export default Blog;

