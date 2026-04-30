# NVC Booklet Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Write a ~4,000-4,500 word introductory booklet on NVC for skeptics and curious newcomers, with an irreverent, trauma-informed, gritty voice and a problem-first structure.

**Architecture:** Each section is drafted independently in `drafts/`, reviewed against spec criteria, then assembled into `NVC_BOOKLET.md`. Each section opens with a failure mode, surfaces the philosophical throughline as asides, and stays within word-count targets. Examples are embedded within their parent section files.

**Reference files:**
- Spec: `docs/superpowers/specs/2026-04-28-nvc-booklet-design.md`
- Quotes: `NVC_QUOTES.md`

---

## File Structure

| File | Purpose |
|------|---------|
| `drafts/01-intro.md` | What This Is Not — direct address, ~350 words |
| `drafts/02-feelings-needs.md` | Feelings + Needs — ~550 words |
| `drafts/03-speaking.md` | Speaking with NVC + examples — ~750 words |
| `drafts/04-self-nvc.md` | Self-NVC bridge — ~300 words |
| `drafts/05-listening.md` | Listening with NVC + examples — ~750 words |
| `drafts/06-philosophy.md` | Philosophy — ~550 words |
| `drafts/07-conclusion.md` | Conclusion — ~350 words |
| `NVC_BOOKLET.md` | Final assembled booklet |

---

## Review Criteria (apply to every section)

Before committing any section, check:
- [ ] Opens with a failure mode or direct address (not a definition)
- [ ] Philosophical throughline appears at least once as a quiet aside (not a lecture)
- [ ] Voice matches register: dry, precise, occasionally dark, no inspirational register, no TED-talk cadence
- [ ] Word count is within ~15% of target
- [ ] No sentences that sound like a wellness blog or self-help book
- [ ] Traps are named with warmth, not superiority

---

## Task 1: Set Up File Structure

**Files:**
- Create: `drafts/` directory
- Create: `NVC_BOOKLET.md` (empty shell with section headers)

- [ ] **Step 1: Create the drafts directory and shell booklet**

Create `NVC_BOOKLET.md` with this skeleton:

```markdown
# This Is Not What You Think It Is
## A Field Guide to Nonviolent Communication

---

## I. What This Is Not

*[intro]*

---

## II. Feelings and Needs (Or: You Are Probably Mislabeling Both)

*[feelings-needs]*

---

## III. Speaking

*[speaking]*

---

## IV. Speaking to Yourself

*[self-nvc]*

---

## V. Listening

*[listening]*

---

## VI. Why Any of This Matters

*[philosophy]*

---

## VII. A Word Before You Go

*[conclusion]*

---
```

- [ ] **Step 2: Commit the skeleton**

```bash
git add NVC_BOOKLET.md
git commit -m "feat: add booklet skeleton with section headers"
```

---

## Task 2: Draft the Intro

**Files:**
- Create: `drafts/01-intro.md`

**Target:** ~350 words. Direct address. What NVC is not. Opens with the failure mode: the conversation where everything said was technically fine and nothing landed.

- [ ] **Step 1: Draft the intro**

Write `drafts/01-intro.md`. The section must:
- Open with the failure mode — a conversation where no one was technically wrong and nothing connected
- Address the reader directly as "you" throughout
- Name at least four things NVC is not (a script, a technique for being nicer, therapy, a way to win)
- Seed the epistemological throughline in one aside — something like "we are working from stories, not from facts, and we will get to that"
- End by naming what NVC actually is, briefly, without over-explaining

Voice check: would a retired punk mediator say this, or a TED speaker? Cut anything that sounds like the latter.

- [ ] **Step 2: Apply review criteria**

Read the draft against the review criteria listed above. Fix anything that fails.

- [ ] **Step 3: Commit**

```bash
git add drafts/01-intro.md
git commit -m "feat: draft intro section"
```

---

## Task 3: Draft Feelings + Needs

**Files:**
- Create: `drafts/02-feelings-needs.md`

**Target:** ~550 words. Opens with the "I feel like you don't care" problem.

- [ ] **Step 1: Draft the section**

Write `drafts/02-feelings-needs.md`. The section must:
- Open with the failure mode: "I feel like you don't care" or similar — a thought dressed as a feeling
- Distinguish: feelings (body-based, yours) vs. evaluations/pseudo-feelings (thoughts about what the other person is doing)
- Introduce universal needs as the layer underneath — briefly, without turning it into a taxonomy lesson
- Name the failure mode of mistaking thoughts for feelings with precision and a little warmth ("this is a thing humans do, including you, including the author")
- Surface the epistemological aside: how certain are you that what you just called a feeling is a feeling? You have been wrong about this before.
- Optional quote candidate: Rosenberg on anger as a thinking event (NVC_QUOTES.md, p. 5–8) — use only if it earns its place

Voice check: no jargon without immediate grounding. "Universal needs" needs a beat of explanation before moving on.

- [ ] **Step 2: Apply review criteria**

- [ ] **Step 3: Commit**

```bash
git add drafts/02-feelings-needs.md
git commit -m "feat: draft feelings and needs section"
```

---

## Task 4: Draft Speaking with NVC + Examples

**Files:**
- Create: `drafts/03-speaking.md`

**Target:** ~750 words including examples. Opens with the complaint-as-NVC trap.

- [ ] **Step 1: Draft the section**

Write `drafts/03-speaking.md`. The section must:
- Open with the failure mode: using the structure to voice complaints without empathy — the person doing OFNR as a list of grievances with no curiosity about the other person
- Introduce OFNR (Observation, Feeling, Need, Request) without making it feel like a form to fill out
- Name the "what I'm longing for" positive reframe — e.g., "I find myself longing for more of our conversations to have a sense of ease and playfulness"
- Name traps: formulaic use (the robot problem), fighting over who is or isn't doing NVC correctly, using structure as a weapon
- Note that any tool can be weaponized — one sentence, no dwelling

**Examples block** (4-6 entries, embedded in the section after the main prose):

Format: a brief scene or line in prose, then the NVC reframe underneath, in a slightly different register. Mix:
1. Subtle failure: evaluation dressed as feeling — e.g., "I feel like this is a pattern with you" → observation of the specific thing + actual feeling + underlying need
2. Aggressive failure: "you never fucking care about anything I do around here" → honor the real need underneath (probably recognition, mattering) before any reframe
3. The longing reframe: a positive version — what the speaker is actually hoping for, said directly
4. The weaponized structure trap: someone doing technically-correct OFNR as a power move — name what's missing (curiosity, empathy, intent)
5. (Optional) The robot problem: OFNR so stiff it creates distance — note that the goal is connection, not compliance

- [ ] **Step 2: Apply review criteria**

Also check: do the examples feel real or constructed? If any example feels like a demo, make it messier.

- [ ] **Step 3: Commit**

```bash
git add drafts/03-speaking.md
git commit -m "feat: draft speaking section with examples"
```

---

## Task 5: Draft Self-NVC Bridge

**Files:**
- Create: `drafts/04-self-nvc.md`

**Target:** ~300 words. A hinge, not a chapter.

- [ ] **Step 1: Draft the section**

Write `drafts/04-self-nvc.md`. The section must:
- Introduce the pause: "this is a feeling — what story am I telling myself about it?"
- Distinguish when to excavate the story vs. when the feeling + need is already enough
- Use the insecurity example (or something like it): "I'm feeling insecure tonight and I'm longing for reassurance that you find me attractive" — no excavation required, feeling + need is sufficient; save the full story archaeology for your own therapy
- Name the pattern of over-excavating as its own trap — sometimes the analysis is avoidance
- Surface the throughline: the story changes after the feeling runs its course; you don't always need to know why

Voice check: this section should feel intimate, almost quiet — it's about internal practice, not performance.

- [ ] **Step 2: Apply review criteria**

- [ ] **Step 3: Commit**

```bash
git add drafts/04-self-nvc.md
git commit -m "feat: draft self-NVC bridge section"
```

---

## Task 6: Draft Listening with NVC + Examples

**Files:**
- Create: `drafts/05-listening.md`

**Target:** ~750 words including examples. Opens with the explanation-instead-of-empathy trap.

- [ ] **Step 1: Draft the section**

Write `drafts/05-listening.md`. The section must:
- Open with the failure mode: someone shares something hard and the listener offers an explanation of why it happened, or their own version of events — instead of empathy
- Name the recentering trap: the person who keeps pulling the conversation back to themselves ("that reminds me of when I...")
- Introduce asymmetric use: you can listen with NVC even when the other person isn't speaking it — you don't need their cooperation to do this
- Note: empathic listening is not silence, not agreement, not solving — name what it actually is

**Examples block** (4-6 entries):

Format: same as speaking section — brief scene or line, then what empathy actually sounds like vs. what we usually do.
1. The explanation trap: someone in pain, listener responds with "well the reason that happened is..." — then the empathic version
2. The recentering trap: "I know exactly what you mean, I had the same thing happen to me last year..." — then the empathic version
3. The advice trap: immediate problem-solving before the person feels heard — then the empathic version
4. Asymmetric use: someone not speaking NVC at all, maybe angry or blaming — what listening with NVC sounds like from the inside (what you're doing internally, what you might say)
5. (Optional) Van der Kolk quote candidate (NVC_QUOTES.md): "Feeling listened to and understood changes our physiology" — use only if it earns its place, not as decoration

- [ ] **Step 2: Apply review criteria**

Also check: does the section make a clear distinction between empathy as a verbal technique and empathy as an orientation? The voice/structure trap shows up here too.

- [ ] **Step 3: Commit**

```bash
git add drafts/05-listening.md
git commit -m "feat: draft listening section with examples"
```

---

## Task 7: Draft Philosophy Section

**Files:**
- Create: `drafts/06-philosophy.md`

**Target:** ~550 words. Names the throughline explicitly. Feels like recognition, not introduction.

- [ ] **Step 1: Draft the section**

Write `drafts/06-philosophy.md`. The section must:
- Open by naming what has been running underneath every section: we are working from stories, not facts
- Use the retrospective question: how many times has your story of a set of events changed in retrospect? How many times have you been certain about what someone meant and been wrong?
- Name feelings as transient: they run their course and interpretation shifts — this is not a failure, it's how it works
- Introduce radical equality and sovereignty: NVC demands you treat the other person's inner life as real and legitimate, not as a problem to be managed
- Name connection over control explicitly
- Note the anarchist connection briefly — one or two sentences: non-violence as a practice of refusing coercion, including the coercive certainty of our own stories
- Quote candidate: Rosenberg on grammar and class control (NVC_QUOTES.md, p. 23) — this is the line to use when someone dismisses NVC as a communication technique; use if it fits the flow

Voice check: this section can be slightly more essayistic than the others — it's earned. But it should not lecture. The reader has already lived through the argument; this section names it.

- [ ] **Step 2: Apply review criteria**

Also check: does this feel like payoff or pivot? If it feels like a new idea, something is wrong — revise to make it feel like naming what was already there.

- [ ] **Step 3: Commit**

```bash
git add drafts/06-philosophy.md
git commit -m "feat: draft philosophy section"
```

---

## Task 8: Draft Conclusion

**Files:**
- Create: `drafts/07-conclusion.md`

**Target:** ~350 words. Not inspirational. Points outward. Ends on realistic tenderness.

- [ ] **Step 1: Draft the conclusion**

Write `drafts/07-conclusion.md`. The section must:
- Name it plainly: this is a practice, not a framework you master
- Acknowledge that you will do it badly — so will everyone you practice with
- The goal is not NVC-compliance; the goal is connection
- Point outward without being a bibliography: there are communities of practice, teachers, the Rosenberg book for those who want more; this booklet is a door, not the room
- Quote candidate: Miki Kashtan on rewiring the nervous system, or Meenadchi on authentic voice — use only if it earns its place
- End on something that is realistic and slightly tender — not a rallying cry, not a gentle encouragement, something truer than both

Voice check: the ending should feel like the narrator has said their piece and is stepping back. No crescendo.

- [ ] **Step 2: Apply review criteria**

- [ ] **Step 3: Commit**

```bash
git add drafts/07-conclusion.md
git commit -m "feat: draft conclusion section"
```

---

## Task 9: Assemble Final Booklet

**Files:**
- Modify: `NVC_BOOKLET.md`

- [ ] **Step 1: Assemble all sections**

Copy content from each draft into `NVC_BOOKLET.md`, replacing the `*[placeholder]*` markers with the actual drafted content.

- [ ] **Step 2: Read the whole thing end to end**

Check for:
- Voice consistency across sections — does it sound like one narrator throughout?
- Throughline coherence — do the philosophical asides build toward section 6's payoff?
- Pacing — does any section feel too long or too short relative to its neighbors?
- Total word count — aiming for 4,000-4,500 words
- Opening and closing land cleanly

- [ ] **Step 3: Make any smoothing edits**

Minor edits only — transitions, repeated words, anything that breaks the voice consistency. No rewrites at this stage; those go back to the individual draft files.

- [ ] **Step 4: Commit the assembled booklet**

```bash
git add NVC_BOOKLET.md
git commit -m "feat: assemble complete first draft booklet"
```

---

## Task 10: First Draft Review

- [ ] **Step 1: Read against the spec**

Open `docs/superpowers/specs/2026-04-28-nvc-booklet-design.md` and check each requirement:
- Success definition met (reader leaves knowing there's a real thing here)?
- NVC culture not used as foil — any tool can be weaponized framing present?
- All traps named from the spec?
- Philosophy throughline built throughout (not just section 6)?
- Reader recognition space created in examples?
- Section word counts roughly on target?

- [ ] **Step 2: Note revision candidates**

List any sections that need revision in a `REVISION_NOTES.md` file. Don't revise now — flag and commit the notes.

```bash
git add REVISION_NOTES.md
git commit -m "docs: first draft review notes"
```

- [ ] **Step 3: Report to user**

Summarize: what's working, what's flagged for revision, what needs a decision from the author.
