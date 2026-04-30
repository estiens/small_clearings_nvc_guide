// utils.typ — shared helpers for nvc_zine
// Import with: #import "../utils.typ": divider, section-heading
// (or from nvc_zine.typ: #import "utils.typ": *)

// ── Fonts ─────────────────────────────────────────────────────────────────────

// ── Typeface palette ──────────────────────────────────────────────────────────
// See styleguide.typ for visual reference of all options below.

// Body serif — Athelas, warm and slightly calligraphic
#let body-font = ("Athelas", "Palatino", "Georgia", "Charter")

// Sans — Optima, warm humanist, unusual for labels/captions
#let sans = "Optima"

// Editorial — Gill Sans, punky/press-y. Section headings, callouts, openers.
#let editorial = "Gill Sans"

// Display — Didot, high-contrast. Pull-quote marks, oversized numerals.
#let display = "Didot"

// Mono/typewriter — IBM Plex Mono first (geometric, utilitarian), falling back to
// American Typewriter (hand-set feel) for macOS systems without Plex installed.
#let mono = ("American Typewriter", "Courier New", "Courier")

// Slab serif — Rockwell, blocky and loud. Good for emphatic headers or pull-outs.
#let slab = "Rockwell"

// Geometric sans — Futura, Bauhaus/zine. Good for high-impact section labels.
#let geometric = ("Futura", "Avenir Next", "Avenir")

// Heavy condensed — Impact, maximum-weight moments. Use sparingly.
#let heavy = ("Impact", "Helvetica Neue", "Helvetica")

// Classical — Baskerville, elegant and slightly cold. Good for extended quotes.
#let classical = ("Baskerville", "Garamond", "Palatino")

// Real ornaments — Hoefler Text Ornaments is bundled with macOS
#let ornament-font-name = "Hoefler Text Ornaments"

// ── Ornament + dingbat font wrappers ──────────────────────────────────────────

// Wrap a glyph in Hoefler Text Ornaments, falling back to body serif if missing.
#let ornamental-font(size: 14pt, body) = text(
  font: (ornament-font-name, "Hoefler Text", "Athelas"),
  size: size,
)[#body]

// Wrap a glyph in Zapf Dingbats with sensible fallbacks.
#let dingbats-font(size: 12pt, body) = text(
  font: ("Zapf Dingbats", ornament-font-name, "Apple Color Emoji", "Athelas"),
  size: size,
)[#body]

// ── Ornamental break builder ──────────────────────────────────────────────────

#let ornamental-break-base(content, spacing: (top: 1.3em, bottom: 1.3em)) = {
  v(spacing.top, weak: true)
  align(center)[#content]
  v(spacing.bottom, weak: true)
}

// ── Standard divider (kept for backward compatibility) ────────────────────────

// Mid-section ornamental break — quiet line-asterisk-line.
#let divider = {
  v(1.3em)
  align(center)[
    #h(0.3em)
    #line(length: 12%, stroke: 0.4pt + luma(160))
    #h(0.6em)
    #text(size: 9pt, fill: luma(160))[#sym.ast.op]
    #h(0.6em)
    #line(length: 12%, stroke: 0.4pt + luma(160))
    #h(0.3em)
  ]
  v(1.3em)
}

// ── Six ornamental break variants ─────────────────────────────────────────────
//
// Glyphs routed through "Apple Symbols" (broad Unicode coverage on macOS) →
// "Hoefler Text" → "Athelas" so missing characters fall back gracefully
// instead of rendering as tofu.

// Arial Unicode MS has every dingbat-range glyph we use; Apple Symbols /
// Hoefler Text catch a few; Athelas is the final fallback for the asterism
// and other glyphs that exist in the body face.
#let _orn(size: 12pt, body) = text(
  font: ("Hoefler Text", "Apple Symbols", "Arial Unicode MS", "Athelas"),
  size: size,
  fill: luma(110),
  body,
)

// Asterism — three asterisks in a triangle (single Unicode glyph ⁂).
#let asterism-break = ornamental-break-base(
  _orn(size: 15pt)[⁂],
)

// Fleuron — single floral ornament ❦
#let fleuron-break = ornamental-break-base(
  _orn(size: 18pt)[❦],
)

// Triple star — three four-pointed stars
#let triple-star = ornamental-break-base(
  _orn(size: 12pt)[✦ #h(0.6em) ✦ #h(0.6em) ✦],
)

// Chevron line — three right-pointing markers
#let chevron-break = ornamental-break-base(
  _orn(size: 12pt)[❯ #h(0.4em) ❯ #h(0.4em) ❯],
)

// Cross — Maltese cross ornament
#let cross-break = ornamental-break-base(
  _orn(size: 16pt)[✠],
)

// Dingbat line — three eight-pointed asterisks
#let dingbat-line = ornamental-break-base(
  _orn(size: 13pt)[❋ #h(0.7em) ❋ #h(0.7em) ❋],
)

// ── Section heading ───────────────────────────────────────────────────────────

// Section heading — always begins a new page (weak break) so a section never
// starts orphaned at the bottom of a previous page. Big Didot numeral as the
// hero element; typewriter eyebrow above; bold title below; thin rule.
#let section-heading(num, title) = {
  pagebreak(weak: true)
  v(0.8em)
  line(length: 100%, stroke: 2pt + luma(20))
  v(0.5em)
  grid(
    columns: (3.8em, 1fr),
    gutter: 0.8em,
    align(horizon + left)[
      #text(
        size: 32pt,
        font: editorial,
        weight: "bold",
        fill: luma(15),
      )[#num]
    ],
    align(horizon + left)[
      #text(
        size: 11.5pt,
        font: editorial,
        weight: "bold",
        tracking: 0.16em,
        fill: luma(15),
      )[#upper[#title]]
    ]
  )
  v(0.3em)
  line(length: 100%, stroke: 0.5pt + luma(150))
  v(0.9em)
}

// ── Appendix heading ──────────────────────────────────────────────────────────

// Appendix heading — slightly smaller, same visual language
#let appendix-heading(title) = {
  pagebreak(weak: true)
  v(0.8em)
  line(length: 100%, stroke: 2pt + luma(20))
  v(0.5em)
  grid(
    columns: (4.5em, 1fr),
    gutter: 0.8em,
    align(horizon + left)[
      #text(
        size: 8pt,
        font: mono,
        tracking: 0.22em,
        fill: luma(110),
      )[#upper[appendix]]
    ],
    align(horizon + left)[
      #text(
        size: 11.5pt,
        font: editorial,
        weight: "bold",
        tracking: 0.16em,
        fill: luma(15),
      )[#upper[#title]]
    ]
  )
  v(0.3em)
  line(length: 100%, stroke: 0.5pt + luma(150))
  v(0.9em)
}

// ── Coda heading ──────────────────────────────────────────────────────────────

// Coda heading — same visual language as appendix-heading but with a
// "POSTSCRIPT" eyebrow instead of "APPENDIX". Used for the long-form
// philosophy deep-dive that follows the conclusion as optional reading.
#let coda-heading(title) = {
  pagebreak(weak: true)
  v(0.8em)
  line(length: 100%, stroke: 2pt + luma(20))
  v(0.5em)
  grid(
    columns: (5.2em, 1fr),
    gutter: 0.8em,
    align(horizon + left)[
      #text(
        size: 8pt,
        font: mono,
        tracking: 0.22em,
        fill: luma(110),
      )[#upper[postscript]]
    ],
    align(horizon + left)[
      #text(
        size: 11.5pt,
        font: editorial,
        weight: "bold",
        tracking: 0.16em,
        fill: luma(15),
      )[#upper[#title]]
    ]
  )
  v(0.3em)
  line(length: 100%, stroke: 0.5pt + luma(150))
  v(0.9em)
}

// ── Chart caption ─────────────────────────────────────────────────────────────

// Chart caption — used on the translation-table standalone page
// Smaller, italic, centered, Optima — clearly "outside" the prose flow
#let chart-caption(body) = {
  align(center)[
    #block(width: 75%)[
      #set text(size: 8pt, style: "italic", font: sans, fill: luma(110))
      #set par(justify: false, first-line-indent: 0em, leading: 0.65em)
      #body
    ]
  ]
}

// ── Reference block ───────────────────────────────────────────────────────────

// Reference block wrapper — for the translation table and needs taxonomy
#let ref-block(body) = {
  block(
    width: 100%,
    inset: (x: 1.1em, y: 0.9em),
    fill: luma(248),
    radius: 2pt,
  )[
    #set text(size: 10.5pt)
    #set par(leading: 0.82em, spacing: 0.7em, first-line-indent: 0em)
    #body
  ]
}

// ── Needs / translation helpers ───────────────────────────────────────────────

#let needs-category(label, items) = {
  par(first-line-indent: 0em)[
    *#label* #sym.dash.em #items
  ]
}

#let translation-row(pseudo, feelings, needs-text) = {
  par(first-line-indent: 0em)[
    #emph[#pseudo] #sym.dash.em #feelings #sym.dash.em #emph[needs:] #needs-text
  ]
}

// ── Pull-quote ────────────────────────────────────────────────────────────────

// Pull-quote — a short sentence pulled large out of the prose flow.
// Optima, italic, ~14pt, with a vertical rule on the left.
// Feels like a poster or broadsheet pull, not a block-quote.
#let pullquote(body) = {
  v(1.6em)
  block(
    width: 100%,
    inset: (left: 1.4em, right: 1em, y: 0.5em),
    stroke: (left: 2.5pt + luma(120)),
  )[
    #set text(size: 14pt, style: "italic", font: sans, fill: luma(60))
    #set par(justify: false, first-line-indent: 0em, leading: 1.1em)
    #body
  ]
  v(1.6em)
}

// Display pull-quote — oversized opening quote mark in Didot, then the line
// in italic Optima below. Use sparingly (1–2 per book) for maximum effect.
#let pullquote-display(body) = {
  v(2em)
  align(center)[
    #block(width: 82%)[
      #align(left)[
        #text(
          size: 72pt,
          font: display,
          fill: luma(170),
        )["]
      ]
      #v(-2.4em)
      #block(inset: (left: 1.4em))[
        #set text(size: 16pt, style: "italic", font: sans, fill: luma(45))
        #set par(justify: false, leading: 1.05em, first-line-indent: 0em)
        #body
      ]
    ]
  ]
  v(2em)
}

// ── Callout / aside box ───────────────────────────────────────────────────────

// Callout — small definitional aside with left border rule.
// Use for key one-sentence definitions: OFNR, "empathy is orientation", etc.
// Different from ref-block: smaller, no fill, left-ruled, prose-weight.
#let callout(body) = {
  v(0.8em)
  block(
    width: 100%,
    inset: (left: 1em, right: 0.6em, y: 0.55em),
    stroke: (left: 2.5pt + luma(80)),
    fill: luma(248),
    radius: (right: 2pt),
  )[
    #set text(size: 10pt, fill: luma(40), font: editorial)
    #set par(justify: true, first-line-indent: 0em, leading: 0.7em)
    #body
  ]
  v(0.8em)
}

// Callout bar — a small-caps label sitting on a horizontal rule, body below.
// Distinct from `callout`: no box, more zine/broadsheet inset feel.
// Use for moments where context wants visual weight without sidebar styling.
#let callout-bar(label, body) = {
  v(1.2em)
  block(width: 100%)[
    #text(font: sans, size: 7.5pt, tracking: 0.32em, fill: luma(60))[
      #upper[#label]
    ]
    #v(0.25em)
    #line(length: 100%, stroke: 0.6pt + luma(60))
    #v(0.55em)
    #set par(first-line-indent: 0em, justify: true, leading: 0.7em)
    #set text(size: 10.5pt, fill: luma(40))
    #body
  ]
  v(1.2em)
}

// ── Rosenberg block-quote ─────────────────────────────────────────────────────

// Block-quote for extended quoted passages (e.g. Rosenberg §06).
// Left-ruled, italic, slightly reduced size, no fill.
#let blockquote(body) = {
  block(
    stroke: (left: 2pt + luma(160)),
    inset: (left: 1.2em, right: 0.5em, y: 0.6em),
    above: 1em,
    below: 1em,
  )[
    #set text(size: 9.5pt, style: "italic")
    #set par(first-line-indent: 0em)
    #body
  ]
}

// ── Section opener ────────────────────────────────────────────────────────────

// Section opener — first paragraph of a section at 13pt with extra leading.
// Not a drop cap. A subtle "this is where we enter" signal.
// Apply only to sections with punchy opening paragraphs (01, 03, 05, 07).
#let section-opener(body) = {
  block(
    width: 100%,
    above: 0em,
    below: 0em,
  )[
    #set text(size: 12.5pt, font: editorial)
    #set par(justify: true, leading: 0.9em, first-line-indent: 0em)
    #body
  ]
  v(1.1em)
}

// ── Practice box ─────────────────────────────────────────────────────────────

// Practice box — centered, bordered artifact for the "Smallest Possible Practice"
// in section 07. Body rendered in a slightly elevated treatment.
// Any text wrapped in #practice-emphasis[...] gets the prominent treatment
// (all-caps, tracked, Optima, 11pt) — use for the "THE PAUSE IS THE PRACTICE" line.
#let practice-emphasis(body) = {
  text(
    size: 11pt,
    font: sans,
    weight: "bold",
    tracking: 0.18em,
    fill: luma(30),
  )[#upper[#body]]
}

#let practice-box(body) = {
  v(1.2em)
  align(center)[
    #block(
      width: 90%,
      inset: (x: 1.6em, y: 1.4em),
      fill: luma(245),
      stroke: 0.6pt + luma(170),
      radius: 3pt,
    )[
      #set text(size: 11pt)
      #set par(justify: false, first-line-indent: 0em, leading: 0.82em)
      #align(center)[
        #text(size: 7pt, tracking: 0.28em, fill: luma(140), font: sans)[#upper[practice]]
        #v(0.6em)
        #body
      ]
    ]
  ]
  v(1.2em)
}
