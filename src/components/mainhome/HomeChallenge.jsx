import React from "react";
import { motion, useReducedMotion } from "framer-motion";

const challenges = [
  {
    number: "01",
    title: "Content leakage",
    description:
      "Premium films, episodes and digital assets distributed without permission.",
  },
  {
    number: "02",
    title: "Live piracy",
    description:
      "Unauthorized streams during events where every minute matters.",
  },
  {
    number: "03",
    title: "Brand & IP abuse",
    description:
      "Misused trademarks, logos and creative assets across digital channels.",
  },
];

// LETTER-BY-LETTER ANIMATION
function AnimatedText({
  text,
  delay = 0,
  stagger = 0.006,
  duration = 0.2,
  reduceMotion,
}) {
  const words = text.split(" ");

  return (
    <motion.span
      aria-label={text}
      className="inline"
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.01,
        margin: "0px 0px -5% 0px",
      }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger,
          },
        },
      }}
    >
      <span aria-hidden="true">
        {words.map((word, wordIndex) => (
          <React.Fragment key={wordIndex}>
            <motion.span
              className="inline-block whitespace-nowrap"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: stagger,
                  },
                },
              }}
            >
              {Array.from(word).map((letter, letterIndex) => (
                <motion.span
                  key={`${letter}-${letterIndex}`}
                  className="inline-block"
                  variants={
                    reduceMotion
                      ? {
                          hidden: { opacity: 0 },
                          visible: { opacity: 1 },
                        }
                      : {
                          hidden: {
                            opacity: 0,
                            y: 8,
                            filter: "blur(2px)",
                          },
                          visible: {
                            opacity: 1,
                            y: 0,
                            filter: "blur(0px)",
                          },
                        }
                  }
                  transition={{
                    duration,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </motion.span>

            {wordIndex !== words.length - 1 && " "}
          </React.Fragment>
        ))}
      </span>
    </motion.span>
  );
}

export default function HomeChallenge() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home-challenge"
      className="
        relative w-full overflow-hidden
        border-y border-[#1B3045]
        bg-[#030D1B]
        font-['Roboto',Arial,sans-serif]
        text-white
      "
    >
      <div
        className="
          mx-auto w-full max-w-[1600px]
          px-6 py-[48px]
          sm:px-10 sm:py-[58px]
          lg:px-[4.5%] lg:py-[72px]
        "
      >
        {/* HEADER */}
        <div
          className="
            grid grid-cols-1 gap-5
            lg:grid-cols-[minmax(0,1fr)_minmax(340px,0.47fr)]
            lg:items-end lg:gap-[60px]
          "
        >
          <div className="min-w-0">

            {/* Eyebrow */}
            <p className="mb-[20px] text-[12px] font-bold uppercase leading-[1.2] tracking-[1.8px] text-[#A4CB35]">
              The challenge
            </p>

            {/* Main Heading */}
            <h2
              className="
                m-0
                text-[36px] font-bold
                leading-[1.15] tracking-[-1.4px]
                text-white
                sm:text-[46px]
                lg:text-[58px]
                lg:leading-[1.12]
                lg:tracking-[-2px]
              "
            >
              <AnimatedText
                text="Piracy moves fast."
                reduceMotion={reduceMotion}
                stagger={0.008}
              />

              <span className="block">
                <AnimatedText
                  text="Your response should too."
                  delay={0.1}
                  reduceMotion={reduceMotion}
                  stagger={0.008}
                />
              </span>
            </h2>
          </div>

          {/* Supporting Text */}
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              amount: 0.05,
            }}
            transition={{
              duration: 0.45,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="
              m-0 max-w-[490px]
              text-[15px] font-normal
              leading-[1.65]
              text-[#A6B7C9]
              sm:text-[17px]
              lg:justify-self-end lg:text-[18px]
            "
          >
            Unauthorized copies and brand misuse spread across channels. A
            useful response connects discovery, verification and action.
          </motion.p>
        </div>

        {/* DIVIDER */}
        <div className="my-[28px] h-px w-full bg-[#1B3045] sm:my-[34px] lg:my-[38px]" />

        {/* CHALLENGE CARDS */}
        <div
          className="
            grid grid-cols-1
            items-stretch
            gap-4
            sm:grid-cols-2
            sm:gap-5
            lg:grid-cols-3
            lg:gap-[3.5%]
          "
        >
          {challenges.map((challenge, index) => (
            <motion.article
              key={challenge.number}
              initial={{
                opacity: 0,
                y: reduceMotion ? 0 : 12,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.05,
              }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="
                group relative flex h-full
                min-w-0 flex-col
                rounded-[14px]
                border border-[#263B50]
                bg-[#0A192A]
                p-[20px]
                transition-colors duration-300
                hover:border-[#526B48]
                sm:p-[22px]
                lg:p-[23px]
              "
            >
              {/* CARD NUMBER */}
              <p className="m-0 text-[14px] font-bold leading-[1.4] text-[#A7B9C9]">
                <AnimatedText
                  text={challenge.number}
                  reduceMotion={reduceMotion}
                  stagger={0.025}
                  duration={0.18}
                />
              </p>

              {/* CARD TITLE */}
              <h3
                className="
                  mb-0 mt-[20px]
                  text-[22px] font-bold
                  leading-[1.3] tracking-[-0.5px]
                  text-white
                  sm:text-[24px]
                "
              >
                <AnimatedText
                  text={challenge.title}
                  reduceMotion={reduceMotion}
                  stagger={0.008}
                  duration={0.2}
                />
              </h3>

              {/* CARD DESCRIPTION */}
              <p
                className="
                  mb-0 mt-[17px]
                  w-full max-w-[470px]
                  text-[15px] font-normal
                  leading-[1.7] tracking-[-0.1px]
                  text-[#A6B7C9]
                  sm:text-[17px]
                "
              >
                <AnimatedText
                  text={challenge.description}
                  reduceMotion={reduceMotion}
                  stagger={0.004}
                  duration={0.18}
                />
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

