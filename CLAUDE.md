# NVC Booklet — Project Guide

A zine-length introduction to Nonviolent Communication for skeptics, cynics, freaks, and curious newcomers — the people who would close the Rosenberg book at the second "giraffe ears" reference. Written for the author's friends and for organizations that could use an intro to NVC even when getting them to sit with the classic books is not in the cards. Not self-help. Not therapy. Not a pamphlet. Closer to a punk dharma chapbook with bite. **Deceptively simple on the surface, transformative if practiced.**

**Working title:** *This Is Not What You Think It Is — A Field Guide to Nonviolent Communication*

> **Status note (2026-04-28):** First-pass drafts in `drafts/` were too short, too literary-generic, and too wellness-adjacent. They're kept as a record of what to NOT do. The vision below is the recalibration. Re-drafting will follow once this guide is approved.
>
> **Status note (2026-04-29):** All content has been converted to Typst. **Working files are now `typst/sections/0X-*.typ`.** The `drafts/` directory is deprecated — do not edit those files. Compile the booklet with `typst compile typst/nvc_zine.typ`.

---

## Anchor files

| File | What it is |
|------|------------|
| `OVERVIEW.md` | Original brief — sections, tone, voice, traps |
| `docs/superpowers/specs/2026-04-28-nvc-booklet-design.md` | Original writing spec — structurally still useful, but **superseded on voice + scope by this file** |
| `docs/superpowers/plans/2026-04-28-nvc-booklet.md` | Original implementation plan — superseded; will need rewrite after this recalibration |
| `NVC_QUOTES.md` | Curated reference anthology — Rosenberg, Kashtan, Meenadchi, van der Kolk, Menakem, Peyton, Sofer, etc. Optional ammunition; nothing mandatory |
| `docs/research/2026-04-28-nvc-intersections.md` | Research synthesis on NVC + IFS / magick / anarchism / codependence / trauma-somatics — context loaded for flavor, not bibliography |
| `drafts/0X-*.md` | **DEPRECATED** — dead / reference-only. Do not edit. |
| `typst/nvc_zine.typ` | Main Typst file — page setup, font, imports utils.typ, includes all sections |
| `typst/utils.typ` | Shared Typst helpers: `divider`, `section-heading`, `needs-category`, `translation-row` |
| `typst/sections/0X-*.typ` | **Live working files** — one per section. Edit these for content changes. |
| `NVC_BOOKLET.md` | Legacy assembled markdown — superseded by Typst files |

When this file and the original spec disagree, **this file wins** (the user has updated the vision; the spec was an earlier articulation).

---

## What NVC actually is

This is the substantive vision the booklet has to land. Not "what NVC says it is on the box." What it actually is, when you've been doing it long enough that the scaffolding falls away.

**The visible surface:** A stilted-sounding first-person way of talking about *feelings*, *needs*, and *requests*, plus the *stories you are telling yourself* about whatever just happened. Radical first-person-ness — owning the inside of your head as your own.

**What it actually is, once installed:**

- **A programming language for the self.** You are rewriting the syntax of your own internal monologue. The old syntax — *you always, you never, this is just like when, why are you, why am I, what is wrong with me* — gets slowly replaced by a different grammar that turns out to produce different states. The thing changes you because the language changes you.
- **A piece of magical technology.** In the working sense, not the woo sense. It does something to the room, and to the person speaking it, that is hard to account for in purely informational terms. Something happens when "you don't respect me" becomes "I am hurt and I am longing to feel like I matter to you." Naming it as magic refuses both the wellness register and the dry-skill-acquisition register.
- **A more precise way of telling the truth.** Not despite being grounded in subjectivity, but *because* of it. The Robert Anton Wilson move on E-prime applies — drop the "to be" verbs that smuggle metaphysics into description, and what remains is closer to true. *She is selfish* is a story; *I am furious and I am longing for partnership* is the actual data. The booklet should say this somewhere.
- **Orthogonal to IFS.** It is always speaking from a part — there is no monolithic "you" in the sentence — but the mechanism is different. IFS unblends; NVC translates. Both name parts; NVC names the feeling and the need at the surface of the part that is currently speaking. They can run in parallel. The booklet doesn't have to teach IFS, but it should at least gesture that NVC is *that* kind of operation, not a comm-skills training.
- **A way to find out what you are actually feeling.** Half the time the words you would reach for first are barely connected to the body event going on. The practice is partly a way of slowing down enough that the pre-verbal stuff has time to surface and find its words.
- **A way of talking to yourself differently.** The internal monologue gets reshaped. The harshness of the inner critic, the moralism, the *should*-bath — those start to lose their grip when you've spent enough time translating yourself into the same language you'd use with someone you loved.
- **A spiritual practice.** In the way that contact improv is a spiritual relationship practice. Embodied, dyadic (or solo), requiring awareness and precision, opening into something larger than the technique. Not a religion, not a worldview. A practice.
- **A way to connect.** This is the one the marketing copy says, and it is true, but it sits at the bottom of this list because it is the consequence, not the entry point.

The booklet should make all of these visible. Not as a list — woven through. The reader should finish thinking *oh, this is more than I thought*, not *oh, that was a nice introduction to a communication framework*.

---

## What most communication actually looks like (not failures, just the baseline)

This is not a "failure modes" frame. The point isn't *here are the broken patterns NVC fixes.* The point is: most human communication, including yours and the writer's, is mixed up and confused most of the time. Experienced practitioners with real sovereignty tend to see it that way — descriptive, not damning. The booklet should hold the same view: this is what is mostly happening; here is a different practice you can do with it.

The full territory the booklet covers — woven through, not as a moralistic taxonomy:

- **Yelling.** Fights where everyone's nervous system is online and no one is listening.
- **Passive aggression.** The tightly-wound, plausibly-deniable cruelty. The sigh that means *fuck you* in three syllables.
- **People-pleasing.** Swallowing your own needs so smoothly you don't know you've done it. The codependence frame. NVC is for this — maybe especially for this.
- **Civil-but-empty.** Every word reasonable, nothing landing.
- **Shutdown.** Stonewalling, silent treatment, the partner who has gone somewhere else inside.
- **The internal monologue running you ragged.** Self-attack, rumination, the 3 AM tribunal.

These are not separate problems. They are the same problem in different costumes — most of them rooted in the same confusion about what we are actually feeling, what we actually need, and what we are actually saying when we open our mouths. The booklet holds them lightly. The reader should feel observed, not lectured.

---

## Voice

### Register: punk dharma + dark stand-up

Not "literary." Not "wellness." Not "dryly witty." **Punk dharma + dark stand-up.** Two related but distinct moves.

**Punk dharma.** Brad Warner more than Pema. Trungpa's "spiritual materialism" critique more than the modern mindfulness app. Adyashanti when he's annoyed. The Buddhist precision is there; the deference is not. Anti-authoritarian even toward the practice itself. Self-implicating — the writer is in the trap with you, not above it. Working-class register over bourgeois. Comfortable with vulgarity when vulgarity is the right tool. Refuses sentimentality. Refuses the "spiritual" voice you can hear coming a block away.

**Dark stand-up.** Stanhope, Attell, Bamford-when-she's-honest, Hannah Gadsby in the harder bits of *Nanette*, Hedberg's economy. **Actual jokes** — setup, image, payoff. Specific concrete images (your stepdad's voicemail, Tuesday-night Trader Joe's, the unread text from your sister at 9:47 PM). Truth that's worse than expected, said cleanly. Comfortable with darkness — addiction, mental illness, fucked-up family — without being depressing about it. Doesn't moralize. Won't telegraph the emotion; lets the reader find it. Bits build; callbacks reward attention.

**The Alan Moore move.** Skewer the sacred dragon while keeping dragons sacred. Moore can deflate the pomp of magic without desecrating the practice; he can name what is ridiculous about ceremonial robes and still take the work itself dead seriously. The booklet does the same with NVC — makes fun of the culture, the giraffe ears, the workshop-circle confession voice, the people who turn it into a cudgel — and at the same time treats the practice itself with the respect it has earned over fifty years. **Reverence and irreverence held in the same sentence.** Both are real. Neither is performed.

**The combination.** Precision plus bite. Dharma plus deflation. The reader laughs and then realizes the joke was on them, gently. The book is willing to be funny because being funny is part of being honest about how absurd this all is — including the practice it's teaching. And underneath the laugh, the work is taken seriously enough that the reader can tell.

### Deceptively simple

The surface should read **easy**. Plain enough that a friend who would never sit with the Rosenberg book picks this up and keeps going. Substance comes through accumulation, not density per sentence. This is a zine for friends and orgs, not a treatise — the reader has to actually want to read the next page. Easier on the eye than on the practice.

If a paragraph has more than two abstractions running at once, simplify. If a sentence requires a re-read to parse, fix it. The depth lands because the surface is clear, not despite it.

### Concrete moves the voice should make

- **Real specific images.** Not "a hard conversation." *Your sister's text at 9:47 on a Tuesday that made your chest go tight.* Not "someone in pain." *Your friend whose dog just died, holding her phone in the kitchen.*
- **Stand-up timing.** Short sentence when something matters. Longer, riffing one when we are inside the bit. Land the line and shut up.
- **Profanity that earns its place.** Not as seasoning. Used when the clean version would lie.
- **Direct address — but casual.** "Look." "Okay so." "Here's the thing." Not "Dear reader." Not "We invite you to consider." If the user can imagine the narrator saying it across a kitchen table at 1 AM after the second drink, it's the right register.
- **Self-implication.** *The author does this. You do this. The fifteen-year practitioner does this, slightly faster on the catch.*
- **Dharma as deflation, not elevation.** "This is the part where the wellness app would say *honor your truth.* Don't honor anything. Just notice the thing actually happening in your chest."
- **Names the practice's own bullshit.** NVC has a culture. The culture has its own self-righteousness. The booklet is allowed to mock it warmly. It is not the enemy; it is one more thing humans do.

### Anti-patterns (cut on sight)

These leaked into the first drafts. Watch for them.

- **TED-talk cadence.** Triplet rhythms, rhetorical questions answered cleanly, the inspirational lift at the end of a paragraph.
- **Wellness-blog softening.** "Gentle." "Lean into." "Hold space for." "Beautiful." "Honor your X." "Sit with."
- **Self-help register.** "You deserve." "Your truth." Anything that could be the caption on a watercolor sunrise.
- **Therapist demo voice.** Constructed examples that sound staged for instruction.
- **MFA literary preciousness.** "Sandwiches made of paper." "The soft cardigan of emotional language." "Weather inside you." If a sentence is reaching for poetry, cut it. The voice is poetic when something earns it, not as a default texture.
- **Crescendo endings.** Sections end on something true and small, not something stirring.
- **Definitions before failure modes.** Each section opens in the mess. Never with "NVC is…"
- **First-person memoir.** No "I". No anecdotes. No character backstory. Direct address to "you" only.
- **Both-sides moralism about NVC culture.** One sentence acknowledging that any tool can be weaponized, then move on. Not an argument we make.

### The voice tests

Apply to every paragraph:

1. **Body test.** *Does this land in the body when read aloud?* If not, it's head-y. Cut.
2. **Wellness Instagram caption test.** Could this be the caption on a watercolor sunrise? Cut.
3. **Stand-up test.** Where is the joke? Where is the bit? If a section has zero comic moments, it's broken. (The philosophy section can run leaner on jokes; everywhere else needs them.)
4. **1 AM kitchen-table test.** Could the narrator say this aloud, after the second drink, to a friend who had a hard day? If it would sound like a podcast in that setting, cut.
5. **Practice-implication test.** Does the writer sound like they have done this badly themselves? If they sound expert, fix it.

---

## The meat (substance the booklet has to carry)

The first drafts were vibes-without-cargo. The reader walked away with mood and no ammunition. This is what the booklet needs to actually deliver, woven into prose:

- **True feelings vs. faux/pseudo-feelings.** *I feel attacked / ignored / dismissed / abandoned / used / disrespected / manipulated* — these are stories about the other person wearing a feeling's coat. Real feelings live in the body: tight chest, hot face, the cold thing in the gut, sad/scared/tired/lit-up/restless/tender/furious/numb. **The user will copy in standard feelings/pseudo-feelings charts from existing NVC materials — the booklet's prose has to set those charts up.**
- **Universal needs.** Mattering, being seen, rest, autonomy, belonging, contact, solitude, meaning, safety, play, contribution. The "why" beneath the feeling. The other person is the occasion, not the cause. **Charts will be inserted; prose has to make them mean something.**
- **Types of anger.** Anger as a thinking event (Rosenberg's harder claim). Anger that's actually fear with a louder coat. Anger that's actually grief that hasn't been allowed to be sad. Anger that's a boundary-protection instinct doing useful work. Anger that's secondary to humiliation. The booklet should differentiate at least a few of these.
- **Types of fear.** Fear of losing the connection. Fear of being seen and rejected. Fear of one's own anger. Fear of becoming the thing one's parent was. Fear that's actually the body remembering something. Differentiation matters here too.
- **Observation vs. evaluation.** *He left the dishes again* (observation, mostly) vs. *He never helps* (evaluation). The grammatical fingerprints of evaluation: never, always, just like, that kind of person.
- **OFNR — Observation, Feeling, Need, Request.** The technical structure. Not as a form to fill out. As scaffolding that, like all scaffolding, comes off when the building stands.
- **Requests vs. demands.** A request can be told no. If it can't, it was a demand wearing a request's costume.
- **The longing reframe.** *What I'm longing for is…* The positive version. The thing actually being moved toward, not just the thing being moved away from.
- **Empathy as orientation, not technique.** Reflective listening done without the orientation produces the dead-eyed therapist demo voice. The orientation is: the other person's interior is real and not a problem to be managed.
- **Self-NVC depth.** This is not a transitional bridge. It is at least as central as outward speaking. The internal monologue rewiring is most of where the practice lives.
- **The transformation arc.** Booklet has to name explicitly: NVC at first looks stilted and weird. People who are using it well do not sound like they are using it. The scaffolding falls away. **This is one of the most important things to land** — without it, a skeptical reader watches a YouTube video and concludes it's a cult.
- **The RAW / E-prime move.** Naming this somewhere. NVC is doing the same kind of work — pulling "to be" verbs and the false certainty they smuggle, and replacing them with present-moment subjective grammar.
- **NVC as orthogonal to IFS.** A sentence or two. Both are parts-aware practices; they are not the same operation.
- **NVC as a spiritual practice.** Named explicitly somewhere — probably the philosophy section. With the contact improv analogy or one like it.

The user is supplying the charts; the prose has to be worthy of them.

---

## Structure (provisional — to be revised)

Original 7-section structure is provisional. The expanded vision may want:

- A clearer "what NVC actually is once installed" section (the magic / programming-language / spiritual-practice frame) — possibly absorbing or extending the current §VI.
- More room for self-NVC; possibly promoting it from "bridge" to full section.
- A section or distributed treatment of the failure modes beyond civil-but-empty (yelling, passive aggression, people-pleasing, shutdown, internal-monologue grind).
- Charts placed deliberately — feelings list, needs list, anger flavors, fear flavors — as artifact pages the reader can flip back to.

**Decision pending.** Will be settled after the user reads this file and we agree on shape and length.

Provisional length: closer to **8,000–12,000 words** than 4,500. Final number set once shape is set. This is not a 20-page pamphlet. It is a chapbook / zine.

---

## The throughline (philosophical spine, expanded)

Running underneath everything: **we are not working from facts, we are working from stories.** Stories change. Feelings run their course and interpretation shifts. We have been wrong, repeatedly, about what other people meant. Our certainty about our own emotional states is also frequently misplaced.

NVC is partly a communication practice and partly a discipline of holding our own certainty more lightly. It is also — and this is the move the original drafts missed — **a precision instrument for the present moment.** A way of speaking from the part of you that is actually present, in the actual body, in the actual room, instead of from the courtroom your mind built about what someone else is doing.

The throughline connects to: radical equality, sovereignty, connection over control, non-violence as refusing coercion (including the coercive certainty of one's own narratives), and — newly explicit — **language as a technology that shapes the speaker.** This is the RAW move. This is the programming-language frame. The grammar of *you always* makes one kind of self; the grammar of *I am hurt and I am longing for partnership* makes another.

The anarchist note stays brief — one or two sentences. Named, not argued.

---

## Drafting workflow (revised, post-recalibration)

1. **First, this file is approved.** No drafting until the user has read and signed off on the vision and voice contract above.
2. **Then, structure decision.** Confirm or revise the section list and length budget.
3. **Then, redraft.** Likely one section at a time, by me directly first (not parallel agents), so voice can be calibrated against feedback in real time. Parallel agent fan-out only after one or two sections have been written and approved as voice-templates.
4. **Existing drafts in `drafts/` are abandoned for content.** They can be mined for individual lines that survive the recalibration, but their voice and shape are dead.

**One section per pass.** Voice drift is a real risk; re-anchor against this file every time.

---

## Reality check / reading aloud

Before any section ships:
- Read it aloud. If a sentence makes you wince, fix it.
- Where are the actual jokes? Mark them. If there are zero, the section is broken.
- Where is the moment a reader would feel implicated? Mark it. If there is none, the section is broken.
- Where does the body show up? Mark it. If the section is all head, fix it.
- Could this paragraph appear in *Tricycle*'s most generic feature, *Greater Good Magazine*, or a corporate empathy training? If yes, fix it.

---

## What this booklet is not (for the file, not the reader)

- Not the Rosenberg book — no extended theory, no academic apparatus, but more theoretical depth than the original spec admitted
- Not a certification manual
- Not therapy
- Not a wellness product
- Not inspirational
- Not for people who think they are already good communicators (though it is especially for them)
- Not a positioning piece against NVC culture — but allowed to make fun of the culture warmly when it earns it
- Not a 20-page pamphlet — closer to a zine / chapbook

---

## Success definition (revised)

The reader finishes knowing:

1. **There is a real thing here.** Depth, history, decades of development, communities of practice, a connection to dharma traditions, somatic work, parts work, and a long anti-authoritarian thread running through it. Not just a technique.
2. **They have been doing something without knowing it** — mistaking thoughts for feelings, evaluations for observations, demands for requests, stories for facts — and it is survivable and changeable.
3. **What it actually is once installed** — the programming-language move, the precision-instrument move, the magical-technology claim, the spiritual practice. The booklet has named these explicitly enough that the reader can hold them.
4. **The body is in this somewhere.** Not abstract. Not literary. Something landed.

The booklet is an on-ramp, not a destination. Conclusion points outward — Rosenberg, Kashtan, Sofer, Meenadchi, Peyton, communities, the dharma adjacencies, Robert Anton Wilson on language — without becoming a bibliography.

---

## When in doubt

The original tone line from `OVERVIEW.md` still holds, but read it with the recalibration in mind:

> *poetic gritty old retired couples therapist and longtime mediator and former punk with severe anger management issues*

Translate as: **the punk is not decorative.** The narrator was actually in the pit. The anger management issues were actually serious. The therapy practice was real but came after, not instead. The voice has been through something. It is not performing earnedness; it has the bruises.
