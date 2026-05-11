// 00-front-matter.typ — Title page and copyright

// ── Title page ───────────────────────────────────────────────────────────────

#align(center + horizon)[
  #text(size: 28pt, weight: "bold", tracking: 0.12em)[
    #upper[Small Clearings]
  ]
  #v(0.3em)
  #text(size: 14pt, tracking: 0.18em, fill: luma(60))[
    #upper[Language for Clearer Rooms]
  ]

  #v(1.2em)
  #line(length: 30%, stroke: 0.4pt + luma(160))
  #v(1.2em)

  #text(size: 10.5pt, style: "italic")[
    A Field Guide to Nonviolent Communication
  ]

  #v(2.5em)

  #text(size: 8.5pt, fill: luma(130))[
    for skeptics, cynics,\
    and the emotionally exhausted
  ]
]

#pagebreak()

// ── Copyright / license page ─────────────────────────────────────────────────

#align(bottom)[
  #set text(size: 7.5pt)
  #set par(justify: false, first-line-indent: 0em, leading: 0.6em)

  #sym.copyright 2026

  #v(0.6em)

  This work is licensed under a *Creative Commons Attribution 4.0 International* license (CC BY 4.0). You are free to share, copy, redistribute, adapt, remix, transform, and build upon this material — for any purpose, including commercially — as long as you give appropriate credit to the original author and indicate if changes were made.

  #v(0.4em)

  _creativecommons.org/licenses/by/4.0_

  #v(0.6em)

  #box(
    stroke: 0.4pt + luma(160),
    inset: (x: 0.5em, y: 0.3em),
    radius: 2pt,
  )[
    #text(size: 7pt, tracking: 0.08em, fill: luma(100))[CC BY 4.0]
  ]
]

#pagebreak()
