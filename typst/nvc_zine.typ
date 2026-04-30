// nvc_zine.typ — main file for "Small Clearings: Language That Transforms"
// Helpers live in utils.typ; section content lives in sections/*.typ

#import "utils.typ": *

#set document(
  title: "Small Clearings: Language That Transforms — A Field Guide to Nonviolent Communication",
)

#set page(
  paper: "a5",
  margin: (inside: 1.8cm, outside: 2.2cm, top: 2.5cm, bottom: 3cm),
  footer: context {
    let n = counter(page).display("1")
    set text(font: ("American Typewriter", "Courier New", "Courier"), size: 8pt, fill: luma(120))
    if calc.odd(here().page()) {
      align(right)[#n]
    } else {
      align(left)[#n]
    }
  },
)

#set text(
  font: ("Athelas", "Palatino", "Georgia", "Charter"),
  size: 11pt,
  lang: "en",
)

#set par(
  justify: true,
  leading: 0.7em,
  first-line-indent: 1.2em,
  linebreaks: "optimized",
)

#show heading: it => {
  v(1.5em, weak: true)
  block(breakable: false)[
    #text(
      font: ("American Typewriter", "Courier New", "Courier"),
      size: 10pt,
      weight: "bold",
      tracking: 0.05em,
    )[#upper(it.body)]
    #v(0.8em, weak: true)
  ]
}

// ── Sections ─────────────────────────────────────────────────────────────────

#include "sections/00-front-matter.typ"
#include "sections/01-intro.typ"
#include "sections/02-feelings-needs.typ"
#include "sections/03-speaking.typ"
#include "sections/04-self-nvc.typ"
#include "sections/05-listening.typ"
#include "sections/07-conclusion.typ"

// ── Appendices ────────────────────────────────────────────────────────────────

#include "sections/appendix-feelings.typ"
#include "sections/appendix-needs.typ"

// ── Postscript: optional long-form deep-dive ──────────────────────────────────

#include "sections/06-philosophy.typ"
