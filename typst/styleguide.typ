// styleguide.typ — visual reference for NVC Zine typography
// Compile: typst compile typst/styleguide.typ
// This file is NOT included in nvc_zine.typ — reference only.

#import "utils.typ": *

#set page(paper: "a5", margin: (x: 1.8cm, y: 2.2cm))
#set par(justify: false, leading: 0.8em, spacing: 0.5em)

#let sg-label(t) = {
  v(0.15em)
  text(size: 7pt, font: mono, tracking: 0.28em, fill: luma(120))[#upper[#t]]
  v(0.2em)
  line(length: 100%, stroke: 0.4pt + luma(180))
  v(0.4em)
}

#let sg-row(label, sample) = {
  grid(
    columns: (5em, 1fr),
    gutter: 0.6em,
    align(right + top)[
      #text(size: 7pt, fill: luma(150), font: mono)[#label]
    ],
    sample
  )
  v(0.2em)
}

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE 1: BODY FACES
// ═══════════════════════════════════════════════════════════════════════════════

#sg-label("Body typefaces")

#sg-row("Athelas")[
  #text(font: "Athelas", size: 12pt)[Regular — the quick brown fox jumps over the lazy dog]
  #text(font: "Athelas", size: 12pt, weight: "bold")[Bold — the quick brown fox jumps over the lazy dog]
  #text(font: "Athelas", size: 12pt, style: "italic")[Italic — the quick brown fox jumps over the lazy dog]
]

#sg-row("Baskerville")[
  #text(font: "Baskerville", size: 12pt)[Regular — the quick brown fox jumps over the lazy dog]
  #text(font: "Baskerville", size: 12pt, weight: "bold")[Bold — the quick brown fox jumps over the lazy dog]
  #text(font: "Baskerville", size: 12pt, style: "italic")[Italic — the quick brown fox jumps over the lazy dog]
]

#sg-row("Palatino")[
  #text(font: "Palatino", size: 12pt)[Regular — the quick brown fox jumps over the lazy dog]
  #text(font: "Palatino", size: 12pt, weight: "bold")[Bold — the quick brown fox jumps over the lazy dog]
  #text(font: "Palatino", size: 12pt, style: "italic")[Italic — the quick brown fox jumps over the lazy dog]
]

#sg-row("Charter")[
  #text(font: "Charter", size: 12pt)[Regular — the quick brown fox jumps over the lazy dog]
  #text(font: "Charter", size: 12pt, weight: "bold")[Bold — the quick brown fox jumps over the lazy dog]
  #text(font: "Charter", size: 12pt, style: "italic")[Italic — the quick brown fox jumps over the lazy dog]
]

#v(0.8em)
#sg-label("Display / editorial faces")

#sg-row("Gill Sans")[
  #text(font: "Gill Sans", size: 12pt)[Regular — the quick brown fox]
  #text(font: "Gill Sans", size: 12pt, weight: "bold")[Bold — the quick brown fox]
  #text(font: "Gill Sans", size: 12pt, style: "italic")[Italic — the quick brown fox]
  #text(font: "Gill Sans", size: 18pt, weight: "bold", tracking: 0.12em)[#upper[section heading treatment]]
]

#sg-row("Optima")[
  #text(font: "Optima", size: 12pt)[Regular — the quick brown fox]
  #text(font: "Optima", size: 12pt, weight: "bold")[Bold — the quick brown fox]
  #text(font: "Optima", size: 12pt, style: "italic")[Italic — the quick brown fox]
]

#sg-row("Didot")[
  #text(font: "Didot", size: 12pt)[Regular — the quick brown fox]
  #text(font: "Didot", size: 12pt, weight: "bold")[Bold — the quick brown fox]
  #text(font: "Didot", size: 14pt, style: "italic")[Italic — the quick brown fox]
  #text(font: "Didot", size: 36pt)[I II III IV V VI VII]
]

#sg-row("Futura")[
  #text(font: "Futura", size: 12pt)[Regular — the quick brown fox]
  #text(font: "Futura", size: 12pt, weight: "bold")[Bold — the quick brown fox]
  #text(font: "Futura", size: 14pt, weight: "bold", tracking: 0.1em)[#upper[label treatment]]
]

#sg-row("Rockwell")[
  #text(font: "Rockwell", size: 12pt)[Regular — the quick brown fox]
  #text(font: "Rockwell", size: 12pt, weight: "bold")[Bold — the quick brown fox]
  #text(font: "Rockwell", size: 16pt, weight: "bold")[SLAB HEADER TREATMENT]
]

#sg-row("Am. Typewriter")[
  #text(font: "American Typewriter", size: 11pt)[Regular — the quick brown fox]
  #text(font: "American Typewriter", size: 11pt, weight: "bold")[Bold — the quick brown fox]
  #text(font: "American Typewriter", size: 9pt, tracking: 0.22em)[#upper[eyebrow label treatment]]
]

#sg-row("Impact")[
  #text(font: "Impact", size: 14pt)[HEAVY CONDENSED — THE QUICK BROWN FOX]
  #text(font: "Impact", size: 22pt)[THE QUICK BROWN FOX]
]

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE 2: ORNAMENTALS
// ═══════════════════════════════════════════════════════════════════════════════

#pagebreak()

#sg-label("Ornamental breaks — all available")

#sg-row("divider")[
  #set par(leading: 0.5em)
  body text ends here with some words
  #divider
  body text continues after the break
]

#sg-row("asterism")[
  #set par(leading: 0.5em)
  body text ends here
  #asterism-break
  body text continues
]

#sg-row("fleuron")[
  #set par(leading: 0.5em)
  body text ends here
  #fleuron-break
  body text continues
]

#sg-row("triple-star")[
  #set par(leading: 0.5em)
  body text ends here
  #triple-star
  body text continues
]

#sg-row("chevron")[
  #set par(leading: 0.5em)
  body text ends here
  #chevron-break
  body text continues
]

#sg-row("cross")[
  #set par(leading: 0.5em)
  body text ends here
  #cross-break
  body text continues
]

#sg-row("dingbat")[
  #set par(leading: 0.5em)
  body text ends here
  #dingbat-line
  body text continues
]

#v(0.8em)
#sg-label("Ornamentals at larger spacing — for major section transitions")

#set text(size: 10pt)
#sg-row("asterism\nlarge")[
  body text ends here
  #ornamental-break-base(_orn(size: 15pt)[⁂], spacing: (top: 1.2em, bottom: 1.2em))
  body text continues
]

#sg-row("fleuron\nlarge")[
  body text ends here
  #ornamental-break-base(_orn(size: 22pt)[❦], spacing: (top: 1.2em, bottom: 1.2em))
  body text continues
]

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE 3: COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════════

#pagebreak()
#set text(size: 11pt)

#sg-label("Callout (current — Gill Sans)")

#callout[A request is something the other person can say no to. If they cannot say no, it was a demand wearing a request's clothes.]

#v(0.4em)
#sg-label("Callout — possible Rockwell variant")

#block(
  width: 100%,
  inset: (left: 1em, right: 0.6em, y: 0.55em),
  stroke: (left: 2.5pt + luma(80)),
  fill: luma(248),
  radius: (right: 2pt),
)[
  #set text(size: 10pt, fill: luma(40), font: slab)
  #set par(justify: true, first-line-indent: 0em, leading: 0.7em)
  A request is something the other person can say no to. If they cannot say no, it was a demand wearing a request's clothes.
]

#v(0.4em)
#sg-label("Callout — possible Futura variant")

#block(
  width: 100%,
  inset: (left: 1em, right: 0.6em, y: 0.55em),
  stroke: (left: 2.5pt + luma(80)),
  fill: luma(248),
  radius: (right: 2pt),
)[
  #set text(size: 9.5pt, fill: luma(40), font: "Futura")
  #set par(justify: true, first-line-indent: 0em, leading: 0.72em)
  A request is something the other person can say no to. If they cannot say no, it was a demand wearing a request's clothes.
]

#v(0.6em)
#sg-label("Pull-quote (current — Optima italic)")

#pullquote[Weather does not require the other person's agreement to exist.]

#v(0.2em)
#sg-label("Pull-quote — possible Am. Typewriter variant")

#block(
  width: 100%,
  inset: (left: 1.4em, right: 1em, y: 0.5em),
  stroke: (left: 2.5pt + luma(120)),
)[
  #set text(size: 13pt, font: "American Typewriter", fill: luma(50))
  #set par(justify: false, first-line-indent: 0em, leading: 1.05em)
  Weather does not require the other person's agreement to exist.
]

#v(0.6em)
#sg-label("Callout-bar (label + rule + body)")

#callout-bar("Key principle")[The grammar is not just describing the speaker's interior. It is changing it. Speech is performative all the way down.]

#v(0.4em)
#sg-label("Section heading (current treatment)")

#section-heading("IV", "Self-NVC")

#sg-label("Ref-block (current — 10.5pt Athelas)")

#ref-block[
  *CONNECTION* — belonging, inclusion, intimacy, contact, to be seen, mattering

  *AUTONOMY* — choice, freedom, sovereignty, space, self-determination

  *MEANING* — purpose, contribution, growth, understanding, to make a difference
]

// ═══════════════════════════════════════════════════════════════════════════════
// PAGE 4: HEADING SIZES + SCALE
// ═══════════════════════════════════════════════════════════════════════════════

#pagebreak()

#sg-label("Type scale — Gill Sans (editorial)")

#text(font: "Gill Sans", size: 32pt, weight: "bold")[32pt — Display header]
#v(0.3em)
#text(font: "Gill Sans", size: 24pt, weight: "bold")[24pt — Large header]
#v(0.3em)
#text(font: "Gill Sans", size: 18pt, weight: "bold", tracking: 0.08em)[18pt — Section header]
#v(0.3em)
#text(font: "Gill Sans", size: 14pt, weight: "bold", tracking: 0.06em)[14pt — Subsection header]
#v(0.3em)
#text(font: "Gill Sans", size: 12pt, weight: "bold")[12pt — Body bold / inline heading]
#v(0.3em)
#text(font: "Gill Sans", size: 10pt, tracking: 0.18em)[#upper[10pt — Label / eyebrow text]]
#v(0.3em)
#text(font: "Gill Sans", size: 8pt, tracking: 0.28em)[#upper[8pt — Small caption / sub-label]]

#v(0.8em)
#sg-label("Type scale — Rockwell (slab)")

#text(font: "Rockwell", size: 28pt, weight: "bold")[28pt — Slab display]
#v(0.3em)
#text(font: "Rockwell", size: 18pt, weight: "bold")[18pt — Slab header]
#v(0.3em)
#text(font: "Rockwell", size: 12pt)[12pt — Slab body]
#v(0.3em)
#text(font: "Rockwell", size: 10pt, tracking: 0.12em)[#upper[10pt — Slab label]]

#v(0.8em)
#sg-label("Type scale — American Typewriter")

#text(font: "American Typewriter", size: 18pt, weight: "bold")[18pt — Typewriter display]
#v(0.3em)
#text(font: "American Typewriter", size: 12pt)[12pt — Typewriter body]
#v(0.3em)
#text(font: "American Typewriter", size: 9pt, tracking: 0.24em)[#upper[9pt — Typewriter label / eyebrow]]

#v(0.8em)
#sg-label("Numerals — display faces for section numbers")

#grid(
  columns: (1fr, 1fr, 1fr),
  gutter: 0.6em,
  [
    #text(font: "Didot", size: 36pt, fill: luma(30))[I II III]
    #v(0.2em)
    #text(size: 8pt, fill: luma(140), font: mono)[#upper[Didot]]
  ],
  [
    #text(font: "Gill Sans", size: 36pt, weight: "bold", fill: luma(20))[I II III]
    #v(0.2em)
    #text(size: 8pt, fill: luma(140), font: mono)[#upper[Gill Sans bold]]
  ],
  [
    #text(font: "Rockwell", size: 36pt, weight: "bold", fill: luma(20))[I II III]
    #v(0.2em)
    #text(size: 8pt, fill: luma(140), font: mono)[#upper[Rockwell bold]]
  ],
)

#v(0.6em)
#text(size: 8pt, fill: luma(150), font: mono)[#upper[compile: typst compile typst/styleguide.typ]]
