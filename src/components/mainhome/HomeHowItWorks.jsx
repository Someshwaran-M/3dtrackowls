
import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Link } from "react-router-dom";

const workflowStages = [
  {
    number: "01",
    title: "Monitor",
    description:
      "Define the assets, territories and digital channels in scope.",
  },
  {
    number: "02",
    title: "Detect",
    description:
      "Discover suspected unauthorized content, streams and URLs.",
  },
  {
    number: "03",
    title: "Verify",
    description:
      "Analysts check rights, validate the finding and capture evidence.",
  },
  {
    number: "04",
    title: "Enforce",
    description:
      "Submit authorized complaints and escalate through available channels.",
  },
  {
    number: "05",
    title: "Report",
    description:
      "Verify outcomes and report pending actions, removals and repeat cases.",
  },
];

export default function HomeHowItWorks() {
  const timelineRef = useRef(null);

  // Scroll progress
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 75%", "end 35%"],
  });

  // Progress animation
  const progressScale = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
  );

  // Desktop: left to right
  const horizontalPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  // Mobile: top to bottom
  const verticalPosition = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section
      id="home-how-it-works"
      className="workflow-section"
    >
      <style>{`

        /* GLOBAL WORKFLOW STYLES */

        .workflow-section,
        .workflow-section * {
          box-sizing: border-box;
        }

        .workflow-section {
          position: relative;
          width: 100%;
          overflow: hidden;
          background: transparent !important;
          border-top: 1px solid rgba(171, 198, 215, 0.15);
          border-bottom: 1px solid rgba(171, 198, 215, 0.15);
          color: #ffffff;
          font-family: Roboto, Arial, sans-serif;
        }

        /* REMOVE ALL CONTENT BACKGROUNDS */

        .workflow-container,
        .workflow-header,
        .workflow-header > div,
        .workflow-heading,
        .workflow-heading span,
        .workflow-eyebrow,
        .workflow-intro,
        .workflow-grid,
        .workflow-stage,
        .workflow-number,
        .workflow-title,
        .workflow-description,
        .workflow-cta-wrap,
        .workflow-cta {
          background: transparent !important;
          background-color: transparent !important;
        }

        .workflow-container {
          position: relative;
          width: calc(100% - 80px);
          max-width: 1380px;
          margin: 0 auto;
          padding: 120px 0 118px;
        }

        /* HEADER */

        .workflow-header {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 485px;
          align-items: end;
          column-gap: 50px;
          margin-bottom: 54px;
        }

        .workflow-eyebrow {
          margin: 0 0 30px;
          color: #d1ed14;
          font-size: 14px;
          font-weight: 700;
          line-height: 1.3;
          letter-spacing: 2.1px;
          text-transform: uppercase;
        }

        .workflow-heading {
          margin: 0;
          color: #f8fafc;
          font-size: 64px;
          font-weight: 700;
          line-height: 1.12;
          letter-spacing: -2.2px;
        }

        .workflow-heading span {
          display: block;
        }

        .workflow-intro {
          max-width: 485px;
          margin: 0 0 1px;
          color: #b7cbd9;
          font-size: 20px;
          font-weight: 400;
          line-height: 1.65;
        }

        /* WORKFLOW GRID */

        .workflow-grid {
          position: relative;
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          column-gap: 30px;
          align-items: start;
        }

        /* DESKTOP BASE LINE */

        .workflow-grid::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 1px;
          background: rgba(171, 198, 215, 0.25);
        }

        /* DESKTOP PROGRESS TRACK */

        .workflow-horizontal-track {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 1px;
          z-index: 5;
          pointer-events: none;
        }

        .workflow-horizontal-progress {
          position: absolute;
          inset: 0;
          height: 2px;
          background: #d1ed14;
          transform-origin: left center;
          box-shadow: 0 0 10px rgba(209, 237, 20, 0.55);
        }

        /* DESKTOP MOVING DOT */

        .workflow-horizontal-dot {
          position: absolute;
          top: 50%;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #d1ed14;
          border: 2px solid #d1ed14;
          box-shadow:
            0 0 0 4px rgba(209, 237, 20, 0.12),
            0 0 15px rgba(209, 237, 20, 0.8);
          transform: translate(-50%, -50%);
          z-index: 6;
        }

        /* MOBILE TRACK */

        .workflow-vertical-track {
          display: none;
        }

        /* WORKFLOW STAGES */

        .workflow-stage {
          position: relative;
          min-width: 0;
          border-top: none;
          padding-top: 40px;
          background: transparent !important;
        }

        .workflow-number {
          display: block;
          margin: 0 0 32px;
          color: #d1ed14;
          font-size: 15px;
          font-weight: 700;
          line-height: 1.3;
        }

        .workflow-title {
          margin: 0 0 19px;
          color: #f8fafc;
          font-size: 28px;
          font-weight: 700;
          line-height: 1.25;
          letter-spacing: -0.8px;
        }

        .workflow-description {
          margin: 0;
          color: #b7cbd9;
          font-size: 18px;
          font-weight: 400;
          line-height: 1.65;
        }

        /* CTA */

        .workflow-cta-wrap {
          margin-top: 76px;
        }

        .workflow-cta {
          display: inline-block;
          width: fit-content;
          padding-bottom: 10px;
          border-bottom: 1px solid rgba(209, 237, 20, 0.4);
          color: #d1ed14;
          font-size: 17px;
          font-weight: 400;
          line-height: 1.4;
          text-decoration: none;
          transition: color 180ms ease, border-color 180ms ease;
        }

        .workflow-cta:hover {
          color: #ffffff;
          border-color: #d1ed14;
        }

        /* TABLET */

        @media (max-width: 1200px) {

          .workflow-container {
            width: calc(100% - 64px);
            padding-top: 86px;
            padding-bottom: 82px;
          }

          .workflow-header {
            grid-template-columns: minmax(0, 1fr) 360px;
            column-gap: 32px;
            margin-bottom: 45px;
          }

          .workflow-heading {
            font-size: 50px;
            letter-spacing: -1.6px;
          }

          .workflow-eyebrow {
            font-size: 11px;
            margin-bottom: 23px;
          }

          .workflow-intro {
            font-size: 16px;
          }

          .workflow-grid {
            column-gap: 22px;
          }

          .workflow-stage {
            padding-top: 30px;
          }

          .workflow-number {
            margin-bottom: 25px;
            font-size: 13px;
          }

          .workflow-title {
            margin-bottom: 15px;
            font-size: 23px;
          }

          .workflow-description {
            font-size: 14px;
          }

          .workflow-cta-wrap {
            margin-top: 58px;
          }
        }

        /* SMALL TABLET */

        @media (max-width: 760px) {

          .workflow-container {
            width: calc(100% - 48px);
            padding-top: 64px;
            padding-bottom: 62px;
          }

          .workflow-header {
            grid-template-columns: 1fr;
            row-gap: 24px;
            margin-bottom: 38px;
          }

          .workflow-eyebrow {
            margin-bottom: 20px;
          }

          .workflow-heading {
            font-size: clamp(38px, 7vw, 48px);
            line-height: 1.12;
            letter-spacing: -1.5px;
          }

          .workflow-intro {
            max-width: 480px;
            font-size: 16px;
            line-height: 1.7;
          }

          .workflow-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
            column-gap: 26px;
            row-gap: 30px;
          }

          .workflow-stage {
            padding-top: 23px;
          }

          .workflow-number {
            margin-bottom: 19px;
          }

          .workflow-title {
            margin-bottom: 12px;
            font-size: 23px;
          }

          .workflow-description {
            font-size: 14px;
            line-height: 1.75;
          }

          .workflow-cta-wrap {
            margin-top: 42px;
          }
        }

        /* MOBILE - VERTICAL TIMELINE */

        @media (max-width: 480px) {

          .workflow-container {
            width: calc(100% - 40px);
            padding-top: 48px;
            padding-bottom: 48px;
          }

          .workflow-header {
            row-gap: 19px;
            margin-bottom: 32px;
          }

          .workflow-eyebrow {
            margin-bottom: 17px;
            font-size: 10px;
            letter-spacing: 1.7px;
          }

          .workflow-heading {
            font-size: 37px;
            line-height: 1.15;
            letter-spacing: -1.3px;
          }

          .workflow-intro {
            font-size: 15px;
          }

          /* SINGLE COLUMN */

          .workflow-grid {
            grid-template-columns: 1fr;
            row-gap: 25px;
            padding-left: 27px;
          }

          /* REMOVE HORIZONTAL LINE */

          .workflow-grid::before {
            display: none;
          }

          .workflow-horizontal-track {
            display: none;
          }

          /* VERTICAL BASE LINE */

          .workflow-vertical-track {
            display: block;
            position: absolute;
            top: 0;
            bottom: 0;
            left: 5px;
            width: 2px;
            background: rgba(171, 198, 215, 0.25);
            z-index: 4;
            pointer-events: none;
          }

          /* VERTICAL PROGRESS */

          .workflow-vertical-progress {
            position: absolute;
            top: 0;
            left: 0;
            width: 2px;
            height: 100%;
            background: #d1ed14;
            transform-origin: top center;
            box-shadow: 0 0 10px rgba(209, 237, 20, 0.55);
          }

          /* MOBILE MOVING DOT */

          .workflow-vertical-dot {
            position: absolute;
            left: 50%;
            top: 0;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            background: #d1ed14;
            border: 2px solid #d1ed14;
            box-shadow:
              0 0 0 4px rgba(209, 237, 20, 0.12),
              0 0 15px rgba(209, 237, 20, 0.8);
            transform: translate(-50%, -50%);
            z-index: 6;
          }

          /* STAGE CONTENT */

          .workflow-stage {
            padding-top: 10px;
            border-top: none;
            background: transparent !important;
          }

          .workflow-number {
            margin-bottom: 15px;
            font-size: 13px;
          }

          .workflow-title {
            margin-bottom: 10px;
            font-size: 23px;
          }

          .workflow-description {
            max-width: 360px;
            font-size: 14px;
          }

          .workflow-cta-wrap {
            margin-top: 36px;
          }

          .workflow-cta {
            font-size: 15px;
          }
        }

        /* REMOVE DARK BACKGROUND FROM WORKFLOW HEADER */

        .workflow-section .workflow-header,
        .workflow-section header.workflow-header,
        .workflow-section .workflow-header > div,
        .workflow-section .workflow-header .workflow-eyebrow,
        .workflow-section .workflow-header .workflow-heading,
        .workflow-section .workflow-header .workflow-heading span,
        .workflow-section .workflow-header .workflow-intro {
          background: transparent !important;
          background-color: transparent !important;
          background-image: none !important;
          box-shadow: none !important;
          backdrop-filter: none !important;
          -webkit-backdrop-filter: none !important;
        }

        .workflow-section .workflow-header::before,
        .workflow-section .workflow-header::after,
        .workflow-section .workflow-header > div::before,
        .workflow-section .workflow-header > div::after {
          content: none !important;
          display: none !important;
        }

        /* REDUCED MOTION */

        @media (prefers-reduced-motion: reduce) {

          .workflow-section *,
          .workflow-section *::before,
          .workflow-section *::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
          }
        }

      `}</style>

      <div className="workflow-container">

        {/* HEADER */}

        <motion.header
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.45,
            ease: "easeOut",
          }}
          className="workflow-header"
        >
          <div>

            <p className="workflow-eyebrow">
              How TrackOwls Works
            </p>

            <h2 className="workflow-heading">
              <span>From detection</span>
              <span>to enforcement.</span>
            </h2>

          </div>

          <p className="workflow-intro">
            Five connected stages. One traceable record of what
            was found, verified and actioned.
          </p>

        </motion.header>

        {/* WORKFLOW TIMELINE */}

        <div
          ref={timelineRef}
          className="workflow-grid"
        >

          {/* DESKTOP HORIZONTAL PROGRESS */}

          <div className="workflow-horizontal-track">

            <motion.div
              className="workflow-horizontal-progress"
              style={{
                scaleX: progressScale,
              }}
            />

            <motion.div
              className="workflow-horizontal-dot"
              style={{
                left: horizontalPosition,
              }}
            />

          </div>

          {/* MOBILE VERTICAL PROGRESS */}

          <div className="workflow-vertical-track">

            <motion.div
              className="workflow-vertical-progress"
              style={{
                scaleY: progressScale,
              }}
            />

            <motion.div
              className="workflow-vertical-dot"
              style={{
                top: verticalPosition,
              }}
            />

          </div>

          {/* WORKFLOW STAGES */}

          {workflowStages.map((stage, index) => (

            <motion.article
              key={stage.number}
              initial={{
                opacity: 0,
                y: 8,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.35,
                delay: index * 0.05,
              }}
              className="workflow-stage"
            >

              <span className="workflow-number">
                {stage.number}
              </span>

              <h3 className="workflow-title">
                {stage.title}
              </h3>

              <p className="workflow-description">
                {stage.description}
              </p>

            </motion.article>

          ))}

        </div>

        {/* CTA */}

        <div className="workflow-cta-wrap">

          <Link
            to="/how-it-works"
            className="workflow-cta"
          >
            Understand the workflow
          </Link>

        </div>

      </div>
    </section>
  );
}
