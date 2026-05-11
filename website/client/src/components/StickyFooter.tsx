/* ============================================================
   STICKY FOOTER NAV — Chapter navigation, roman numerals
   Fixed bottom strip with I–VII anchors. Highlights the
   active chapter via IntersectionObserver. Hover reveals
   the chapter title.
   ============================================================ */
import { useEffect, useState } from "react";

interface Chapter {
  id: string;
  label: string;
  title: string;
}

const CHAPTERS: Chapter[] = [
  { id: "cover",      label: "✦",   title: "Cover" },
  { id: "setup",      label: "I",   title: "The Setup" },
  { id: "feelings",   label: "II",  title: "Feelings & Needs" },
  { id: "speaking",   label: "III", title: "Speaking" },
  { id: "self-nvc",   label: "IV",  title: "Self-NVC" },
  { id: "listening",  label: "V",   title: "Listening" },
  { id: "philosophy", label: "VI",  title: "Philosophy" },
  { id: "conclusion", label: "VII", title: "Conclusion" },
  { id: "appendix",   label: "✱",   title: "Appendix" },
];

export default function StickyFooter() {
  const [active, setActive] = useState<string>("cover");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -60% 0px", threshold: 0 }
    );
    CHAPTERS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", `#${id}`);
    }
  };

  const activeChapter = CHAPTERS.find((c) => c.id === active);

  return (
    <nav className="sticky-footer" aria-label="Chapter navigation">
      <div className="sticky-footer-inner">
        <span className="sticky-footer-cur" aria-live="polite">
          {activeChapter ? activeChapter.title : ""}
        </span>
        <ol className="sticky-footer-list">
          {CHAPTERS.map(({ id, label, title }) => (
            <li key={id} className="sticky-footer-item">
              <a
                href={`#${id}`}
                className={active === id ? "active" : ""}
                data-title={title}
                aria-label={title}
                aria-current={active === id ? "true" : undefined}
                onClick={(e) => handleClick(e, id)}
              >
                <span aria-hidden="true">{label}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
