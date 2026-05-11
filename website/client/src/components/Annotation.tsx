/* ============================================================
   ANNOTATION COMPONENT — Dharma Xerox marginalia system
   Renders an annotated inline span. Click to reveal a small
   panel of contextual links. Stays out of the way otherwise.
   ============================================================ */
import { useState, useRef, useEffect } from "react";

interface AnnotationLink {
  url: string;
  title: string;
  desc: string;
}

interface AnnotationProps {
  links: AnnotationLink[];
  children: React.ReactNode;
  glyph?: string;
}

export default function Annotation({ links, children, glyph = "◆" }: AnnotationProps) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // Close on outside click and on Escape
  useEffect(() => {
    if (!open) return;
    const onMouseDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const handleClick = (e: React.MouseEvent) => {
    // Don't toggle when clicking a link inside the panel
    if ((e.target as HTMLElement).closest("a")) return;
    setOpen((v) => !v);
  };

  return (
    <span
      ref={ref}
      className="annotated"
      data-glyph={glyph}
      role="button"
      tabIndex={0}
      aria-expanded={open}
      onClick={handleClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setOpen((v) => !v);
        }
      }}
      style={{ position: "relative" }}
    >
      {children}
      <span className={`annotation-tip${open ? " visible" : ""}`} aria-hidden={!open}>
        {links.map((link, i) => (
          <span key={i} style={{ display: "block", marginBottom: i < links.length - 1 ? "0.6rem" : 0 }}>
            <span style={{ fontWeight: 600, fontSize: "1.05rem", display: "block" }}>{link.title}</span>
            <span style={{ fontSize: "0.95rem", opacity: 0.85, display: "block", marginBottom: "0.25rem" }}>{link.desc}</span>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              → {link.url.replace(/^https?:\/\//, "").slice(0, 55)}{link.url.length > 60 ? "…" : ""}
            </a>
          </span>
        ))}
      </span>
    </span>
  );
}
