import React from "react";

const protectionLinks = [
  { name: "Live Streaming Protection", href: "/solutions/live-streaming-protection" },
  { name: "OTT & VOD Protection", href: "/solutions/ott-vod-protection" },
  { name: "Website & App Monitoring", href: "/solutions/web-app-monitoring" },
  { name: "Copyright Enforcement", href: "/solutions/copyright-enforcement" },
  { name: "Brand Protection", href: "/solutions/brand-protection" },
  { name: "Piracy Intelligence", href: "/solutions/piracy-intelligence" },
  { name: "Marketplace & Counterfeit Monitoring", href: "/solutions/marketplace-counterfeit-monitoring" },
  { name: "Domain & Impersonation Monitoring", href: "/solutions/domain-impersonation-monitoring" },
  { name: "Social Media & Video Protection", href: "/solutions/social-media-video-protection" },
];

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Leadership", href: "/leadership" },
  { name: "Team", href: "/our-team" },
  { name: "News", href: "/news" },
  { name: "Blog", href: "/blog" },
  { name: "How it works", href: "/how-it-works" },
  { name: "Case studies", href: "/insights" },
  { name: "Insights", href: "/insights" },
  { name: "Piracy impact report", href: "/piracy" },
  { name: "FAQs", href: "/faq" },
  { name: "Technology", href: "/platform" },
  { name: "Careers", href: "/careers" },
  { name: "Contact", href: "/contact" },
];

const informationLinks = [
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
  { name: "Cookies", href: "/cookies" },
  { name: "Copyright reporting", href: "/copyrights" },
  { name: "Content editor", href: "/content-editor" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/trackowls/",
    icon: "instagram",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61594204995079",
    icon: "facebook",
  },
  {
    name: "Threads",
    href: "https://www.threads.com/@trackowls",
    icon: "threads",
  },
  {
    name: "X",
    href: "https://x.com/Track_Owls",
    icon: "x",
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCi_S9-dSwWf0yjaXzPiGdjw",
    icon: "youtube",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/p-dhanalakshmi-03a60b438/",
    icon: "linkedin",
  },
];

function SocialIcon({ type }) {
  const commonProps = {
    width: 17,
    height: 17,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
  };

  switch (type) {
    case "instagram":
      return (
        <svg {...commonProps}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );

    case "facebook":
      return (
        <svg {...commonProps} fill="currentColor" stroke="none">
          <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.3-1.5 1.6-1.5h1.6V3.7c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2H7.2V13H10v8h3.5Z" />
        </svg>
      );

    case "threads":
      return (
        <svg {...commonProps}>
          <path d="M16.8 8.3c-.7-2.1-2.2-3.3-4.7-3.3-3.7 0-6.1 2.7-6.1 7.1 0 4.5 2.3 7 6.2 7 3.2 0 5.2-1.8 5.2-4.5 0-2.4-1.7-3.8-4.1-3.8-2.1 0-3.5 1.1-3.5 2.8 0 1.4 1 2.3 2.5 2.3 2.7 0 4.1-2.3 4.1-5.3 0-3.9-2.1-6.1-5.4-6.1-4.3 0-7.2 3.1-7.2 7.8" />
        </svg>
      );

    case "x":
      return (
        <svg {...commonProps} stroke="none" fill="currentColor">
          <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.7 5.6 22H2.4l7.3-8.5L1.9 2h6.5l4.5 6.7L18.9 2Zm-1.1 17.9h1.7L7.4 4H5.6l12.2 15.9Z" />
        </svg>
      );

    case "youtube":
      return (
        <svg {...commonProps}>
          <path d="M22 12s0-3.5-.5-5.1a2.7 2.7 0 0 0-1.9-1.9C17.9 4.5 12 4.5 12 4.5s-5.9 0-7.6.5a2.7 2.7 0 0 0-1.9 1.9C2 8.5 2 12 2 12s0 3.5.5 5.1a2.7 2.7 0 0 0 1.9 1.9c1.7.5 7.6.5 7.6.5s5.9 0 7.6-.5a2.7 2.7 0 0 0 1.9-1.9c.5-1.6.5-5.1.5-5.1Z" />
          <path d="m10 8.5 5 3.5-5 3.5v-7Z" fill="currentColor" stroke="none" />
        </svg>
      );

    case "linkedin":
      return (
        <svg {...commonProps} fill="currentColor" stroke="none">
          <path d="M5.2 3a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9h3.8v12H3.3V9Zm6.2 0h3.6v1.6h.1a4 4 0 0 1 3.6-2c3.8 0 4.5 2.5 4.5 5.7V21h-3.8v-5.9c0-1.4 0-3.2-2-3.2s-2.3 1.5-2.3 3.1V21H9.5V9Z" />
        </svg>
      );

    default:
      return null;
  }
}

function FooterColumn({ title, links, className = "" }) {
  return (
    <div className={className}>
      <h3 className="mb-4 text-[12px] font-bold text-[#f8fafc]">
        {title}
      </h3>

      <ul className="space-y-[10px]">
        {links.map((link) => (
          <li key={link.name}>
            <a
              href={link.href}
              className="text-[12px] leading-5 text-[#94a3b8] transition-colors duration-200 hover:text-[#d1ed14]"
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer
      id="footer"
      className="w-full bg-transparent font-['Roboto',sans-serif] text-white border-t border-[rgba(255,255,255,0.08)] backdrop-blur-md"
    >
      <div className="mx-auto max-w-[1420px] px-5 pt-12 sm:px-8 sm:pt-14 lg:px-10 lg:pt-16">

        <div className="footer-grid grid grid-cols-1 gap-10 pb-12 sm:grid-cols-2 lg:grid-cols-[1.25fr_1fr_0.78fr_0.72fr] lg:gap-8 lg:pb-16">

          {/* Brand section */}
          <div className="footer-brand max-w-[280px]">

            <a
              href="/"
              aria-label="TrackOwls home"
              className="inline-flex items-center gap-2 rounded-lg bg-white/95 px-3 py-1.5 shadow-sm backdrop-blur-sm"
            >
              <img
                src="/images/logo2/logo-remove-logo.png"
                alt=""
                draggable="false"
                className="h-[58px] w-[58px] shrink-0 object-contain sm:h-12 sm:w-12 lg:h-14 lg:w-14"
              />

              <img
                src="/images/logo2/Trackowls_Owl_Logo_Banner-remove-owltext-bg.png"
                alt="TrackOwls"
                draggable="false"
                className="h-auto w-[160px] max-w-full object-contain"
              />
            </a>

            <p className="mt-5 max-w-[240px] text-[12px] leading-[1.8] text-[#94a3b8]">
              Digital anti-piracy, content protection and brand enforcement.
            </p>

            {/* Brand tagline */}
            <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-[9px] font-black uppercase tracking-[0.06em] text-[#cbd5e1]">
              <span>Scan</span>
              <span className="text-[#d1ed14]">|</span>
              <span>Detect</span>
              <span className="text-[#d1ed14]">|</span>
              <span>Remove</span>
              <span className="text-[#d1ed14]">|</span>
              <span>Protect</span>
            </div>

            {/* Social Media Icons */}
            <div className="footer-social mt-6">

              <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.12em] text-[#94a3b8]">
                Follow TrackOwls
              </p>

              <div className="flex flex-wrap items-center gap-2">

                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit TrackOwls on ${social.name}`}
                    title={social.name}
                    className={`footer-social-icon flex h-[35px] w-[35px] items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[#94a3b8] transition-all duration-300 hover:-translate-y-1 hover:border-[#d1ed14]/50 hover:bg-[#d1ed14]/10 hover:text-[#d1ed14]`}
                  >
                    <SocialIcon type={social.icon} />
                  </a>
                ))}

              </div>
            </div>

          </div>

          {/* Protection links */}
          <FooterColumn
            title="Protection"
            links={protectionLinks}
            className="footer-protection"
          />

          {/* Company links */}
          <FooterColumn
            title="Company"
            links={companyLinks}
            className="footer-company"
          />

          {/* Information links */}
          <FooterColumn
            title="Information"
            links={informationLinks}
            className="footer-information"
          />

        </div>

        {/* Bottom divider */}
        <div className="h-px w-full bg-[rgba(255,255,255,0.1)]" />

        {/* Copyright row */}
        <div className="footer-bottom flex flex-col gap-3 py-5 text-[10px] text-[#64748b] sm:flex-row sm:items-center sm:justify-between sm:py-6">

          <p className="footer-copyright">
            © {new Date().getFullYear()} TrackOwls. All rights reserved.
          </p>

          <p className="footer-powered font-medium tracking-[0.02em] text-[#94a3b8]">
            Powered by{" "}
            <span className="font-bold text-[#8BB630]">
              MK Dynamic Technology
            </span>
          </p>

          <p className="footer-tagline tracking-[0.01em] text-[#94a3b8]">
            Scan. Detect. Remove. Protect.
          </p>

        </div>
      </div>

      {/* Responsive footer styles */}
      <style>{`

        @media (max-width: 639px) {

          #footer > div {
            padding-top: 20px;
            padding-left: 10px;
            padding-right: 10px;
          }

          #footer .footer-grid {
            display: grid;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            column-gap: 28px;
            row-gap: 18px;
            padding-bottom: 22px;
          }

          #footer .footer-brand {
            grid-column: 1 / -1;
            grid-row: 1;
            max-width: 100%;
          }

          #footer .footer-brand > a {
            gap: 7px;
          }

          #footer .footer-brand > a img:last-child {
            width: 175px;
          }

          #footer .footer-brand > p {
            margin-top: 10px;
          }

          #footer .footer-brand > div:not(.footer-social) {
            margin-top: 16px;
          }

          #footer .footer-social {
            margin-top: 20px;
          }

          #footer .footer-protection {
            grid-column: 1;
            grid-row: 2;
            min-width: 0;
          }

          #footer .footer-company {
            grid-column: 2;
            grid-row: 2;
            min-width: 0;
          }

          #footer .footer-information {
            grid-column: 1 / -1;
            grid-row: 3;
          }

          #footer .footer-grid h3 {
            margin-bottom: 10px;
            font-size: 12px;
          }

          #footer .footer-grid ul {
            display: flex;
            flex-direction: column;
            gap: 7px;
          }

          #footer .footer-grid li {
            min-width: 0;
            line-height: 1.5;
          }

          #footer .footer-grid li a {
            display: inline;
            font-size: 12px;
            line-height: 1.5;
            overflow-wrap: anywhere;
          }

          #footer .footer-grid + div {
            width: 100%;
          }

          #footer .footer-bottom {
            display: grid !important;
            grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
            grid-template-areas:
              "copyright tagline"
              "powered powered";
            align-items: center;
            column-gap: 4px;
            row-gap: 4px;
            padding-top: 10px;
            padding-bottom: 8px;
          }

          #footer .footer-copyright {
            grid-area: copyright;
            text-align: left;
            white-space: nowrap;
            font-size: 11px;
          }

          #footer .footer-tagline {
            grid-area: tagline;
            text-align: right;
            white-space: nowrap;
            font-size: 11px;
          }

          #footer .footer-powered {
            grid-area: powered;
            text-align: center;
            font-size: 12px;
            margin: 0;
          }

        }

        /* Social icon hover */
        #footer .footer-social-icon:hover {
          box-shadow: 0 5px 18px rgba(209, 237, 20, 0.12);
        }

        /* Reduced motion accessibility */
        @media (prefers-reduced-motion: reduce) {
          #footer *,
          #footer *::before,
          #footer *::after {
            transition-duration: 0.01ms !important;
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }

      `}</style>

    </footer>
  );
}