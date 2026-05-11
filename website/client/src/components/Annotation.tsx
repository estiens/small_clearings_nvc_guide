/* ============================================================
   ANNOTATION COMPONENT — Dharma Xerox marginalia system
   Renders an annotated inline span with a tooltip showing
   the link title, description, and URL. Hover to reveal.
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

  // Close on outside click
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  return (
    <span
      ref={ref}
      className="annotated"
      data-glyph={glyph}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onClick={() => setOpen((v) => !v)}
      style={{ position: "relative" }}
    >
      {children}
      <span
        className={`annotation-tip${open ? " visible" : ""}`}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        {links.map((link, i) => (
          <span key={i} style={{ display: "block", marginBottom: i < links.length - 1 ? "0.6rem" : 0 }}>
            <span style={{ fontWeight: 600, fontSize: "0.9rem", display: "block" }}>{link.title}</span>
            <span style={{ fontSize: "0.8rem", opacity: 0.85, display: "block", marginBottom: "0.2rem" }}>{link.desc}</span>
            <a href={link.url} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}>
              → {link.url.replace(/^https?:\/\//, "").slice(0, 55)}{link.url.length > 60 ? "…" : ""}
            </a>
          </span>
        ))}
      </span>
    </span>
  );
}
