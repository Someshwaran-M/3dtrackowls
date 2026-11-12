import React, { useState, useCallback, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import ImageLoader from "./components/common/ImageLoader";
import GalaxyBackground from "./components/common/GalaxyBackground";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Home from "./components/pages/Home";
import HowItWorks from "./components/pages/HowItWorks";
import About from "./components/pages/About";
import Solutions from "./components/pages/Solutions";
import Industries from "./components/pages/Industries";
import Platform from "./components/pages/Platform";
import Insights from "./components/pages/Insights";
import Piracy from "./components/pages/Piracy";
import Contact from "./components/pages/Contact";

import InformationPrivacy from "./components/information/InformationPrivacy";
import InformationTerms from "./components/information/InformationTerms";
import CopyRight from "./components/information/CopyRights";
import InformationCookies from "./components/information/InformationCookies";
import ContentEditor from "./components/information/ContentEditor";
import Career from "./components/information/Career";

import LiveEventProtectionChecklist from "./components/maininsights/LiveEventProtectionChecklist";
import UnderstandingEnforcementReports from "./components/maininsights/UnderstandingEnforcementReports";
import ReleaseWindowMonitoring from "./components/maininsights/ReleaseWindowMonitoring";
import BrandReferenceChecklist from "./components/maininsights/BrandReferenceChecklist";
import RepeatSourceInvestigation from "./components/maininsights/RepeatSourceInvestigation";

import LivestreamingProtection from "./components/mainsolutions/solutions/LiveStreamingProtection";
import OTTVODProtection from "./components/mainsolutions/solutions/OTTVODProtection";
import WebAppMonitoring from "./components/mainsolutions/solutions/WebAppMonitoring";
import CopyrightEnforcement from "./components/mainsolutions/solutions/CopyrightsEnforcement";
import BrandProtection from "./components/mainsolutions/solutions/BrandProtection";
import PiracyIntelligence from "./components/mainsolutions/solutions/PiracyIntelligence";
import MarketplaceCounterfeitMonitoring from "./components/mainsolutions/solutions/MarketplaceCounterfeitMonitoring";
import DomainImpersonationMonitoring from "./components/mainsolutions/solutions/DomainImpersonationMonitoring";
import SocialMediaVideoProtection from "./components/mainsolutions/solutions/SocialMediaVideoProtection";

import FilmEntertainment from "./components/mainindustries/industries/FilmEntertainment";
import OTTStreaming from "./components/mainindustries/industries/OTTStreaming";
import LiveSports from "./components/mainindustries/industries/LiveSports";
import TelevisionBroadcasting from "./components/mainindustries/industries/TelevisionBroadcasting";
import Music from "./components/mainindustries/industries/Music";
import BrandIPOwners from "./components/mainindustries/industries/BrandIPOwners";
import SportsWear from "./components/mainindustries/industries/SportsWear";
import Publishers from "./components/mainindustries/industries/Publishers";
import Leadership from "./components/pages/Leadership";
import OurTeam from "./components/pages/OurTeam";
import News from "./components/pages/News";
import Blog from "./components/pages/Blog";
import FAQ from "./components/information/FAQ";

function App() {
  
  useEffect(() => {
    document.body.classList.add("galaxy-site");

    return () => document.body.classList.remove("galaxy-site");
  }, []);
  
  const [loading, setLoading] = useState(true);
 
  const handleLoaderComplete = useCallback(() => {
    setLoading(false);
  }, []);

  return (
    <div className="min-h-screen text-[#152019] dark:text-white">
     
      <GalaxyBackground />
     
      {loading && (
        <ImageLoader onComplete={handleLoaderComplete} duration={2000} />
      )}
 
      <div className={loading ? "invisible" : "visible"} aria-hidden={loading} >
        <Navbar />

        <main>
          <Routes>
           
            <Route path="/" element={<Home />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/piracy" element={<Piracy />} />
            <Route path="/contact" element={<Contact />} />
           
            <Route path="/privacy" element={<InformationPrivacy />} />
            <Route path="/terms" element={<InformationTerms />} />
            <Route path="/cookies" element={<InformationCookies />} />
            <Route path="/copyrights" element={<CopyRight />} />
            <Route path="/content-editor" element={<ContentEditor />} />
            <Route path="/careers" element={<Career />} />
           
            <Route path="/live-event-protection" element={<LiveEventProtectionChecklist />} />
            <Route path="/enforcement-reports" element={<UnderstandingEnforcementReports />} />
            <Route path="/release-window" element={<ReleaseWindowMonitoring />} />
            <Route path="/brand-investigation" element={<BrandReferenceChecklist />} />
            <Route path="/repeat-sources" element={<RepeatSourceInvestigation />} />

            <Route path="/solutions/live-streaming-protection" element={<LivestreamingProtection />} />
            <Route path="/solutions/ott-vod-protection" element={<OTTVODProtection />} />
            <Route path="/solutions/web-app-monitoring" element={<WebAppMonitoring />} />
            <Route path="/solutions/copyright-enforcement" element={<CopyrightEnforcement />} />
            <Route path="/solutions/brand-protection" element={<BrandProtection />} />
            <Route path="/solutions/piracy-intelligence" element={<PiracyIntelligence />} />
            <Route path="/solutions/marketplace-counterfeit-monitoring" element={<MarketplaceCounterfeitMonitoring />} />
            <Route path="/solutions/domain-impersonation-monitoring" element={<DomainImpersonationMonitoring />} />
            <Route path="/solutions/social-media-video-protection" element={<SocialMediaVideoProtection />} />

            <Route path="/industries/film-entertainment" element={<FilmEntertainment />} />
            <Route path="/industries/ott-streaming" element={<OTTStreaming />} />
            <Route path="/industries/live-sports" element={<LiveSports />} />
            <Route path="/industries/television-broadcasting" element={<TelevisionBroadcasting />} />
            <Route path="/industries/music" element={<Music />} />
            <Route path="/industries/brand-ip-owners" element={<BrandIPOwners />} />
            <Route path="/industries/sportswear" element={<SportsWear />} />
            <Route path="/industries/publishers" element={<Publishers />} />

            <Route path="/leadership" element={<Leadership />} />
            <Route path="/our-team" element={<OurTeam />} />
            <Route path="/news" element={<News />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/faq" element={<FAQ />} />

          </Routes>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;