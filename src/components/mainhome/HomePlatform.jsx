import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useReducedMotion } from "motion/react";
import {
  ShieldCheck,
  Layers3,
  ScanSearch,
  FileCheck,
  ChartNoAxesColumn,
  LockKeyhole,
  ArrowUpRight,
  Check,
  Globe2,
  Activity,
} from "lucide-react";

const features = [
  {
    icon: Layers3,
    title: "Case management",
    description: "Keep discovery, evidence and actions in one case.",
  },
  {
    icon: FileCheck,
    title: "Evidence & audit history",
    description: "Preserve a traceable record of decisions and actions.",
  },
  {
    icon: ChartNoAxesColumn,
    title: "Client reporting",
    description: "Separate verified findings, submissions and outcomes.",
  },
];

const cases = [
  {
    id: "TW-1042",
    name: "Sample film · Release window",
    channel: "Website",
    status: "Verified",
    color: "green",
  },
  {
    id: "TW-1043",
    name: "Sample event · Live broadcast",
    channel: "Video",
    status: "Submitted",
    color: "amber",
  },
  {
    id: "TW-1044",
    name: "Sample brand · Logo misuse",
    channel: "Marketplace",
    status: "Review",
    color: "blue",
  },
];

const tabs = ["Cases", "Evidence", "Reporting"];

const sidebarItems = [
  { label: "Cases", icon: Layers3, tab: "Cases" },
  { label: "Detection", icon: ScanSearch, tab: "Cases" },
  { label: "Evidence", icon: FileCheck, tab: "Evidence" },
  { label: "Reporting", icon: ChartNoAxesColumn, tab: "Reporting" },
];

const metrics = [
  { label: "Sample cases", value: "03" },
  { label: "Evidence verified", value: "02" },
  { label: "In review", value: "01" },
];

function StatusBadge({ item }) {
  const styles =
    item.color === "green"
      ? "border-[#d1ed14]/40 bg-[#d1ed14]/15 text-[#d1ed14]"
      : item.color === "amber"
        ? "border-amber-400/40 bg-amber-400/15 text-amber-300"
        : "border-cyan-400/40 bg-cyan-400/15 text-cyan-300";

  return (
    <span
      className={`inline-flex max-w-full truncate rounded border px-1.5 py-0.5 text-[9px] font-medium sm:text-[8px] ${styles}`}
    >
      {item.status}
    </span>
  );
}

export default function HomePlatform() {
  const navigate = useNavigate();
  const reduceMotion = useReducedMotion();
  const [activeTab, setActiveTab] = useState("Cases");
  const [selectedCase, setSelectedCase] = useState(null);

  const selectedCaseData = cases.find((item) => item.id === selectedCase);

  const handleExplore = () => {
    // /request-demo is not registered in the supplied App.jsx.
    // Use the existing Contact route so the button always navigates.
    navigate("/contact");
  };

  const cardMotion = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 38, rotateX: 7 },
        whileInView: { opacity: 1, y: 0, rotateX: 0 },
        viewport: { once: false, amount: 0.16 },
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
      };

  return (
    <section
      id="platform"
      className="relative isolate overflow-hidden border-y border-[rgba(171,198,215,0.15)] bg-transparent px-5 py-10 font-['Roboto',sans-serif] text-white sm:px-8 sm:py-12 lg:min-h-[650px] lg:px-18 lg:py-12"
    >
      <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#8bb630]/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-80 w-80 rounded-full bg-cyan-400/10 blur-[110px]" />

      <div className="relative mx-auto grid max-w-[1380px] items-center gap-9 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
        {/* LEFT CONTENT */}
        <motion.div
          {...cardMotion}
          style={{ transformPerspective: 1100 }}
          className="max-w-[500px]"
        >
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.65 }}
            className="mb-5 text-[11px] font-bold uppercase tracking-[0.19em] text-[#d1ed14] sm:mb-6 sm:text-[12px]"
          >
            TrackOwls platform · Concept preview
          </motion.p>

          <h2 className="max-w-[490px] text-[30px] font-bold leading-[1.08] tracking-[-0.8px] text-[#f8fafc] sm:text-[48px] sm:tracking-[-1.5px] lg:text-[54px]">
            One workspace.
            <br />
            Complete case
            <br />
            <span>visibility.</span>
          </h2>

          <p className="mt-5 max-w-[430px] text-[15px] leading-[1.85] text-[#b7cbd9] sm:text-[16px]">
            A planned case management platform connecting assets, evidence,
            analyst workflows and enforcement reporting.
          </p>

          <div className="mt-6 space-y-5 sm:mt-7">
            {features.map((feature, index) => {
              const FeatureIcon = feature.icon;

              return (
                <motion.div
                  key={feature.title}
                  initial={reduceMotion ? false : { opacity: 0, x: -28 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{
                    duration: 0.6,
                    delay: reduceMotion ? 0 : index * 0.12,
                  }}
                  whileHover={reduceMotion ? undefined : { x: 7 }}
                  className="flex items-start gap-3.5"
                >
                  <FeatureIcon
                    size={18}
                    strokeWidth={1.8}
                    className="mt-0.5 shrink-0 text-[#d1ed14]"
                  />

                  <div>
                    <h3 className="text-[14px] font-bold text-white sm:text-[15px]">
                      {feature.title}
                    </h3>

                    <p className="mt-1 text-[13px] leading-[1.7] text-[#b7cbd9] sm:text-[14px]">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.button
            type="button"
            onClick={handleExplore}
            whileHover={reduceMotion ? undefined : { y: -4, scale: 1.025 }}
            whileTap={reduceMotion ? undefined : { scale: 0.97 }}
            className="group mt-7 inline-flex min-h-[43px] items-center gap-4 rounded-[6px] border border-[rgba(171,198,215,0.25)] bg-[rgba(10,26,46,0.65)] px-5 py-3 text-[12px] font-bold text-white backdrop-blur-md transition duration-300 hover:border-[#d1ed14] hover:bg-[rgba(14,34,60,0.85)] sm:text-[13px]"
          >
            Explore the platform concept
            <ArrowUpRight
              size={14}
              className="text-[#d1ed14] transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </motion.button>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          {...cardMotion}
          style={{ transformPerspective: 1400 }}
          className="min-w-0"
        >
          {/* Dashboard Glass Container */}
          <motion.div
            whileHover={reduceMotion ? undefined : { rotateY: -1.2, rotateX: 1.2, y: -4 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            style={{ transformStyle: "preserve-3d" }}
            className="overflow-hidden rounded-[10px] border border-[rgba(171,198,215,0.22)] bg-[rgba(10,26,46,0.7)] shadow-[0_18px_50px_rgba(0,0,0,0.35)] backdrop-blur-xl"
          >
            {/* Header */}
            <div className="flex min-h-[43px] items-center justify-between gap-3 border-b border-[rgba(171,198,215,0.18)] bg-[rgba(6,18,32,0.8)] px-3.5 sm:px-5">
              <div className="flex items-center gap-2">
                <ShieldCheck size={14} className="text-[#d1ed14]" />
                <span className="text-[10px] font-extrabold tracking-tight text-[#d1ed14]">
                  TRACKOWLS
                </span>
                <span className="ml-1 text-[9px] font-semibold text-[#a9c5d8] sm:text-[8px]">
                  WORKSPACE
                </span>
              </div>

              <span className="rounded border border-[rgba(171,198,215,0.2)] bg-[rgba(255,255,255,0.04)] px-2 py-0.5 text-[9px] text-[#d1ed14] sm:text-[8px]">
                Concept preview
              </span>
            </div>

            <div className="grid grid-cols-[36px_minmax(0,1fr)] sm:grid-cols-[45px_minmax(0,1fr)]">
              {/* Sidebar */}
              <aside className="flex flex-col items-center gap-3 border-r border-[rgba(171,198,215,0.18)] bg-[rgba(6,18,32,0.75)] py-4">
                {sidebarItems.map(({ label, icon: Icon, tab }) => {
                  const active = activeTab === tab && (label !== "Detection" || activeTab === "Cases");

                  return (
                    <motion.button
                      key={label}
                      type="button"
                      aria-label={label}
                      aria-pressed={active}
                      title={label}
                      onClick={() => setActiveTab(tab)}
                      whileHover={reduceMotion ? undefined : { scale: 1.12, y: -2 }}
                      whileTap={reduceMotion ? undefined : { scale: 0.92 }}
                      className={`flex h-7 w-7 items-center justify-center rounded transition ${
                        active
                          ? "bg-[#d1ed14]/20 text-[#d1ed14]"
                          : "text-[#8497A5] hover:bg-white/5 hover:text-[#d1ed14]"
                      }`}
                    >
                      <Icon size={14} strokeWidth={1.8} />
                    </motion.button>
                  );
                })}
              </aside>

              {/* Main dashboard area */}
              <div className="min-w-0 p-3.5 sm:p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.09em] text-[#d1ed14] sm:text-[9px]">
                      Enforcement overview
                    </p>

                    <h3 className="mt-1 text-[15px] font-bold text-white sm:text-[14px]">
                      A clear view of every case.
                    </h3>
                  </div>

                  <LockKeyhole
                    size={14}
                    className="mt-1 shrink-0 text-[#d1ed14]"
                  />
                </div>

                {/* Tabs */}
                <div className="mt-4 flex gap-0 border-b border-[rgba(171,198,215,0.18)]">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      aria-pressed={activeTab === tab}
                      onClick={() => {
                        setActiveTab(tab);
                        if (tab !== "Cases") setSelectedCase(null);
                      }}
                      className={`relative px-3 py-2 text-[11px] transition sm:text-[10px] ${
                        activeTab === tab
                          ? "bg-[rgba(209,237,20,0.1)] font-bold text-[#d1ed14]"
                          : "text-[#8497A5] hover:bg-white/5 hover:text-white"
                      }`}
                    >
                      {tab}
                      {activeTab === tab && (
                        <motion.span
                          layoutId="platform-active-tab"
                          className="absolute inset-x-0 bottom-0 h-[2px] bg-[#d1ed14]"
                        />
                      )}
                    </button>
                  ))}
                </div>

                {/* Metric boxes */}
                <div className="mt-4 grid grid-cols-3 gap-2">
                  {metrics.map((metric, index) => (
                    <motion.div
                      key={metric.label}
                      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.08 }}
                      className="min-w-0 rounded-[4px] border border-[rgba(171,198,215,0.18)] bg-[rgba(6,18,32,0.6)] px-2 py-3 sm:px-3"
                    >
                      <p className="text-[10px] leading-4 text-[#94a3b8] sm:text-[8px]">
                        {metric.label}
                      </p>
                      <p className="mt-1 text-[20px] font-semibold leading-tight text-white">
                        {metric.value}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Functional dashboard tab content */}
                <div className="mt-5 min-h-[190px]">
                  {activeTab === "Cases" && (
                    <div>
                      <div className="grid grid-cols-[1.35fr_.65fr_.65fr] gap-2 border-b border-[rgba(171,198,215,0.18)] px-1.5 py-2 text-[10px] font-medium text-[#94a3b8] sm:text-[9px]">
                        <span>Case / asset</span>
                        <span>Channel</span>
                        <span>Status</span>
                      </div>

                      {cases.map((item, index) => (
                        <motion.button
                          key={item.id}
                          type="button"
                          onClick={() =>
                            setSelectedCase(
                              selectedCase === item.id ? null : item.id
                            )
                          }
                          initial={reduceMotion ? false : { opacity: 0, x: 18 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.35, delay: index * 0.07 }}
                          whileHover={reduceMotion ? undefined : { x: 3 }}
                          className={`grid w-full grid-cols-[1.35fr_.65fr_.65fr] items-center gap-2 border-b border-[rgba(171,198,215,0.1)] px-1.5 py-2.5 text-left transition ${
                            selectedCase === item.id
                              ? "bg-[rgba(209,237,20,0.08)]"
                              : "hover:bg-white/[0.03]"
                          }`}
                        >
                          <span className="min-w-0">
                            <span className="block truncate text-[10px] font-bold text-white sm:text-[10px]">
                              {item.id}
                            </span>
                            <span className="mt-1 block truncate text-[9px] text-[#94a3b8] sm:text-[8px]">
                              {item.name}
                            </span>
                          </span>

                          <span className="truncate text-[9px] text-[#cfdeeb] sm:text-[8px]">
                            {item.channel}
                          </span>

                          <span>
                            <StatusBadge item={item} />
                          </span>
                        </motion.button>
                      ))}

                      {selectedCaseData && (
                        <motion.div
                          initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-3 rounded border border-[rgba(171,198,215,0.2)] bg-[rgba(6,18,32,0.85)] p-2.5"
                        >
                          <p className="text-[10px] font-bold text-[#d1ed14] sm:text-[9px]">
                            {selectedCaseData.id} selected
                          </p>
                          <p className="mt-1 text-[10px] text-[#b7cbd9] sm:text-[9px]">
                            {selectedCaseData.name} · {selectedCaseData.channel} · {selectedCaseData.status}
                          </p>
                        </motion.div>
                      )}
                    </div>
                  )}

                  {activeTab === "Evidence" && (
                    <motion.div
                      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between border-b border-[rgba(171,198,215,0.15)] pb-3">
                        <span className="text-[11px] font-semibold text-white">
                          Evidence register
                        </span>
                        <span className="text-[9px] text-[#d1ed14]">
                          02 verified
                        </span>
                      </div>
                      {cases.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between gap-3 rounded border border-[rgba(171,198,215,0.13)] bg-[rgba(6,18,32,0.45)] p-3"
                        >
                          <div className="min-w-0">
                            <p className="truncate text-[10px] font-bold text-white">
                              {item.id}
                            </p>
                            <p className="mt-1 truncate text-[9px] text-[#94a3b8]">
                              {item.name}
                            </p>
                          </div>
                          <FileCheck size={15} className="shrink-0 text-[#d1ed14]" />
                        </div>
                      ))}
                    </motion.div>
                  )}

                  {activeTab === "Reporting" && (
                    <motion.div
                      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="space-y-3"
                    >
                      <div className="flex items-center justify-between border-b border-[rgba(171,198,215,0.15)] pb-3">
                        <span className="text-[11px] font-semibold text-white">
                          Client reporting
                        </span>
                        <span className="text-[9px] text-[#94a3b8]">
                          Illustrative summary
                        </span>
                      </div>
                      {[
                        { label: "Verified findings", value: 2, width: "66%" },
                        { label: "Submitted actions", value: 1, width: "33%" },
                        { label: "Cases under review", value: 1, width: "33%" },
                      ].map((row) => (
                        <div key={row.label}>
                          <div className="mb-1.5 flex justify-between gap-3 text-[10px]">
                            <span className="text-[#b7cbd9]">{row.label}</span>
                            <span className="font-bold text-white">{row.value}</span>
                          </div>
                          <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: row.width }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                              className="h-full rounded-full bg-[#d1ed14]"
                            />
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  )}
                </div>

                {/* Dashboard footer */}
                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[rgba(171,198,215,0.1)] pt-3">
                  <span className="flex items-center gap-1.5 text-[9px] text-[#d1ed14] sm:text-[8px]">
                    <Check size={11} />
                    Evidence recorded
                  </span>

                  <span className="text-[9px] text-[#8497A5] sm:text-[8px]">
                    Illustrative data only
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Connected intelligence banner */}
          <motion.div
            whileHover={reduceMotion ? undefined : { y: -5, rotateX: 1.5 }}
            transition={{ type: "spring", stiffness: 180, damping: 18 }}
            className="relative mt-6 min-h-[190px] overflow-hidden rounded-[10px] border border-[rgba(171,198,215,0.22)] bg-[rgba(14,35,58,0.7)] backdrop-blur-xl"
          >
            <div className="pointer-events-none absolute -right-10 -top-20 h-52 w-52 rounded-full bg-[#d1ed14]/10 blur-[65px]" />
            <div className="relative flex min-h-[190px] flex-col justify-end p-5 sm:p-6">
              <div className="mb-3 flex items-center gap-2 text-[#d1ed14]">
                <Globe2 size={14} />
                <span className="text-[9px] font-bold uppercase tracking-[0.18em] sm:text-[8px]">
                  Global monitoring
                </span>
              </div>

              <h3 className="text-[18px] font-bold tracking-tight text-white sm:text-[20px]">
                A connected view of digital threats.
              </h3>

              <p className="mt-2 max-w-[440px] text-[12px] leading-[1.8] text-[#b7cbd9] sm:text-[11px]">
                Monitor agreed channels, connect findings to your assets, and
                follow each verified case through enforcement.
              </p>

              <div className="mt-3 flex items-center gap-2 text-[9px] font-semibold tracking-wider text-[#d1ed14] sm:text-[8px]">
                <Activity size={11} />
                SCAN / DETECT / REVIEW / PROTECT
              </div>
            </div>

            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 1.1, ease: "easeOut" }}
              className="absolute bottom-0 left-0 h-[3px] w-full origin-left bg-[#d1ed14]"
            />
          </motion.div>

          <p className="mt-3 text-right text-[10px] text-[#8497A5] sm:text-[9px]">
            TrackOwls platform concept · Illustrative interface
          </p>
        </motion.div>
      </div>
    </section>
  );
}
