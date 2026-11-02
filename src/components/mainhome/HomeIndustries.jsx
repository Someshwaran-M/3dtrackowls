import React, { useEffect, useRef } from "react";

const industries = [
{
number: "01",
title: "Film & Entertainment",
description:
"Theatrical, physical and digital distribution for features and series.",
image: "/industries/film.jpeg",
link: "/industries/film",
},
{
number: "02",
title: "OTT & Streaming Platforms",
description:
"Subscription catalogues, transactional VOD and platform originals.",
image: "/industries/ott.jpeg",
link: "/industries/ott",
},
{
number: "03",
title: "Live Sports & Events",
description: "Matchday feeds, PPV broadcasts and concurrent streams.",
image: "/industries/livesport.jpeg",
link: "/industries/sports",
},
{
number: "04",
title: "Television & Broadcasting",
description: "Linear channels, catch-up services and regional syndication.",
image: "/industries/tv.jpeg",
link: "/industries/broadcast",
},
{
number: "05",
title: "Music & Audio",
description:
"Recordings, publishing catalogues, podcasts and audio streams.",
image: "/industries/music.jpeg",
link: "/industries/music",
},
{
number: "06",
title: "Brands & IP Owners",
description:
"Trademark misuse, brand impersonation and counterfeit goods.",
image: "/industries/brand.jpeg",
link: "/industries/brands",
},
{
number: "07",
title: "Sportswear & Apparel Brands",
description:
"Brand identity, product imagery and suspicious online listings.",
image: "/industries/sportswear.jpeg",
link: "/industries/sportswear",
},
{
number: "08",
title: "Publishers & Digital Creators",
description: "Books, courses, software and original digital publications.",
image: "/industries/public.jpeg",
link: "/industries/publishers",
},
];

function IndustryCell({ industry }) {
return ( <article className="industry-card group min-w-0 bg-[rgba(10,26,46,0.5)] px-[31px] py-[37px] backdrop-blur-md">


  <div className="industry-image-wrapper">
    <img
      src={industry.image}
      alt={industry.title}
      loading="lazy"
      className="industry-image"
    />
  </div>

  <p className="m-0 text-[12px] font-bold leading-[1.5] text-[#d1ed14]">
    {industry.number}
  </p>

  <h3 className="mb-0 mt-[25px] text-[22px] font-bold leading-[1.2] tracking-[-0.55px] text-white">
    {industry.title}
  </h3>

  <p className="mb-0 mt-[15px] text-[15px] font-normal leading-[1.65] text-[#b7cbd9]">
    {industry.description}
  </p>

  <a
    href={industry.link}
    className="mt-[32px] inline-flex border-b border-[#d1ed14]/40 pb-[7px] text-[12px] font-medium leading-[1.4] text-[#d1ed14] transition-colors duration-200 hover:border-[#d1ed14] hover:text-white"
  >
    Explore protection →
  </a>

</article>


);
}

export default function HomeIndustries() {
const sectionRef = useRef(null);
const stickyRef = useRef(null);
const trackRef = useRef(null);

useEffect(() => {
const section = sectionRef.current;
const track = trackRef.current;


if (!section || !track) return;

let frameId = null;

const updateCards = () => {
  if (frameId) cancelAnimationFrame(frameId);

  frameId = requestAnimationFrame(() => {
    const sectionRect = section.getBoundingClientRect();

    const sectionTop = window.scrollY + sectionRect.top;

    const scrollDistance =
      section.offsetHeight - window.innerHeight;

    if (scrollDistance <= 0) return;

    // Progress from 0 to 1 while scrolling through section
    const progress = Math.max(
      0,
      Math.min(
        1,
        (window.scrollY - sectionTop) / scrollDistance
      )
    );

    // Total available horizontal movement
    const maxMovement = Math.max(
      0,
      track.scrollWidth - track.parentElement.clientWidth
    );

    // Scroll down = right to left
    const translateX = progress * maxMovement;

    track.style.transform =
      `translate3d(${-translateX}px, 0, 0)`;
  });
};

updateCards();

window.addEventListener("scroll", updateCards, {
  passive: true,
});

window.addEventListener("resize", updateCards);

const resizeObserver = new ResizeObserver(updateCards);

resizeObserver.observe(section);
resizeObserver.observe(track);

return () => {
  window.removeEventListener("scroll", updateCards);
  window.removeEventListener("resize", updateCards);

  resizeObserver.disconnect();

  if (frameId) {
    cancelAnimationFrame(frameId);
  }
};


}, []);

return ( <section
   ref={sectionRef}
   id="home-industries"
   className="industry-section w-full border-y border-[rgba(171,198,215,0.15)] bg-transparent font-['Roboto',Arial,sans-serif] text-white"
 >
{/* Extra scroll height controls horizontal movement */} <div className="industry-sticky-wrapper">


    <div
      ref={stickyRef}
      className="industry-sticky-content"
    >

      <div className="mx-auto w-full max-w-[1590px] px-6 pb-[65px] pt-[75px] sm:px-10 lg:px-[5.1%]">

        {/* Header */}
        <div className="mb-[43px] grid grid-cols-1 gap-7 lg:grid-cols-[minmax(0,1fr)_minmax(330px,0.53fr)] lg:items-end lg:gap-[75px]">

          <div>
            <p className="mb-[25px] text-[12px] font-bold uppercase leading-[1.3] tracking-[1.9px] text-[#d1ed14]">
              Industries
            </p>

            <h2 className="m-0 text-[38px] font-bold leading-[1.12] tracking-[-1.2px] text-white sm:text-[42px] lg:text-[48px]">
              Built around
              <span className="block">
                what you protect.
              </span>
            </h2>
          </div>

          <p className="m-0 max-w-[390px] pb-[3px] text-[15px] font-normal leading-[1.75] text-[#b7cbd9] sm:text-[16px] lg:justify-self-end">
            Protection priorities differ by content, release window and
            rights. Start with your industry.
          </p>

        </div>

        {/* Horizontal Scroll Animation */}
        <div className="industry-viewport">

          <div
            ref={trackRef}
            className="industry-track"
          >

            {industries.map((industry) => (
              <div
                key={industry.number}
                className="industry-item"
              >
                <IndustryCell industry={industry} />
              </div>
            ))}

          </div>

        </div>

      </div>

    </div>
  </div>

  <style>{`

    /* 
      Vertical section height controls
      the horizontal scrolling animation.
    */

    .industry-section {
      position: relative;
    }

    .industry-sticky-wrapper {
      height: 220vh;
      position: relative;
    }

    .industry-sticky-content {
      position: sticky;
      top: 0;
      min-height: 100vh;
      display: flex;
      align-items: center;
      overflow: hidden;
    }

    /* Horizontal Viewport */

    .industry-viewport {
      width: 100%;
      overflow: hidden;
      position: relative;
    }

    /* Horizontal Track */

    .industry-track {
      display: flex;
      width: max-content;
      gap: 20px;

      transform: translate3d(0, 0, 0);
      will-change: transform;
    }

    /* Cards */

    .industry-item {
      width: 350px;
      flex-shrink: 0;
    }

    .industry-card {
      min-height: 410px;
      height: 100%;
      border: 1px solid rgba(171,198,215,0.15);
      border-radius: 8px;

      transition:
        background 0.35s ease,
        border-color 0.35s ease,
        box-shadow 0.35s ease;
    }

    .industry-card:hover {
      background: rgba(14,34,60,0.85);
      border-color: rgba(209,237,20,0.5);
      box-shadow: 0 18px 45px rgba(0,0,0,0.2);
    }

    /* Images */

    .industry-image-wrapper {
      width: 100%;
      height: 157px;
      overflow: hidden;
      border-radius: 6px;
      margin-bottom: 25px;
    }

    .industry-image {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.6s ease;
    }

    .industry-card:hover .industry-image {
      transform: scale(1.06);
    }

    /* Responsive */

    @media(max-width: 768px) {

      .industry-sticky-wrapper {
        height: 200vh;
      }

      .industry-sticky-content {
        min-height: 100svh;
      }

      .industry-item {
        width: 290px;
      }

      .industry-track {
        gap: 14px;
      }

      .industry-card {
        min-height: 390px;
      }

    }

    @media(prefers-reduced-motion: reduce) {
      .industry-track {
        will-change: auto;
      }

      .industry-card,
      .industry-image {
        transition: none;
      }
    }

  `}</style>
</section>


);
}
