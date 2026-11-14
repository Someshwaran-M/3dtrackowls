import { Helmet } from "react-helmet-async";

const SEO = () => {
  const title =
    "TrackOwls | Advanced Anti-Piracy & Digital Content Protection";

  const description =
    "TrackOwls delivers advanced anti-piracy solutions to scan, detect, monitor, and remove unauthorized digital content. Protect your copyrights, intellectual property, and digital assets with confidence.";

  const websiteUrl = "https://YOUR-DOMAIN.com/";

  const imageUrl =
    "https://YOUR-DOMAIN.com/images/logo2/logo-remove-text.png";

  return (
    <Helmet>
      <title>{title}</title>

      <meta name="description" content={description} />

      <meta name="robots" content="index, follow" />

      <meta
        name="author"
        content="TrackOwls Anti-Piracy Private Limited"
      />

      <link rel="canonical" href={websiteUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="TrackOwls" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={websiteUrl} />
      <meta property="og:image" content={imageUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
};

export default SEO;