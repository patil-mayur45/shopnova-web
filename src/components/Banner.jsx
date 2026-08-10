import { useEffect, useState } from "react";

export default function Banner() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function onScroll() {
      setOffset(window.scrollY);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="relative overflow-hidden h-[320px] sm:h-[420px] flex items-center justify-center bg-primary">
      {/* Parallax background layer - moves slower than scroll */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translateY(${offset * 0.3}px)`,
          background:
            "radial-gradient(circle at 20% 20%, #E8A33D 0%, transparent 40%), radial-gradient(circle at 80% 70%, #4F6F52 0%, transparent 45%)",
        }}
      />
      <div
        className="relative z-10 text-center px-6"
        style={{ transform: `translateY(${offset * 0.1}px)` }}
      >
        <p className="uppercase tracking-[0.3em] text-accent text-xs sm:text-sm mb-3">
          New season, new finds
        </p>
        <h1 className="font-display font-800 text-3xl sm:text-5xl text-cream leading-tight">
          Everything You Need,
          <br /> Nested in One Place
        </h1>
        <p className="text-cream/70 mt-4 max-w-lg mx-auto text-sm sm:text-base">
          Discover thousands of products across every category — hand-picked,
          fairly priced, delivered fast.
        </p>
      </div>
    </section>
  );
}
