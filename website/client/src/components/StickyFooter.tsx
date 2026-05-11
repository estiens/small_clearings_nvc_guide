/* ============================================================
   STICKY FOOTER NAV — Dharma Xerox chapter navigation
   Thin black bar fixed at bottom with chapter anchors.
   ============================================================ */
import { useState, useEffect } from "react";

const CHAPTERS = [
  { id: "cover", label: "Cover" },
  { id: "setup", label: "I. Setup" },
  { id: "feelings", label: "II. Feelings" },
  { id: "speaking", label: "III. Speaking" },
  { id: "self-nvc", label: "IV. Self" },
  { id: "listening", label: "V. Listening" },
  { id: "philosophy", label: "VI. Philosophy" },
  { id: "conclusion", label: "VII. End" },
  { id: "appendix", label: "Appendix" },
];

export default function StickyFooter() {
  const [active, setActive] = useState("cover");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    CHAPTERS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky-footer" aria-label="Chapter navigation">
      {CHAPTERS.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={active === id ? "active" : ""}
          onClick={(e) => {
            e.preventDefault();
            scrollTo(id);
          }}
        >
          {label}
        </a>
      ))}
    </nav>
  );
}
