interface HeroBannerProps {
  title: string;
  subtitle?: string;
  ctaText?: string;
  ctaHref?: string;
  fullHeight?: boolean;
}

export default function HeroBanner({
  title,
  subtitle,
  ctaText,
  ctaHref,
  fullHeight = false,
}: HeroBannerProps) {
  return (
    <section
      className={`relative flex items-center justify-center bg-black ${
        fullHeight ? "min-h-screen" : "py-32 md:py-40"
      }`}
    >
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />

      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 50%, #333 1px, transparent 1px), radial-gradient(circle at 75% 50%, #333 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="font-heading text-3xl sm:text-4xl md:text-h1 text-white uppercase tracking-wide">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 font-body text-lg md:text-xl text-light-gray">
            {subtitle}
          </p>
        )}
        {ctaText && ctaHref && (
          <a
            href={ctaHref}
            className="inline-block mt-8 bg-white text-black font-body font-semibold text-base px-8 py-3 rounded hover:bg-light-gray transition-colors"
          >
            {ctaText}
          </a>
        )}
      </div>
    </section>
  );
}
