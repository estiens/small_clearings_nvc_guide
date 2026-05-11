/* ============================================================
   HOME — Small Clearings Annotated Zine
   Design: Dharma Xerox — Buddhist punk samizdat
   Fonts: Playfair Display / IBM Plex Mono / Caveat
   Colors: Newsprint (#F5F0E8), Sumi (#1A1410), Turmeric (#C8860A)
   ============================================================ */
import Annotation from "@/components/Annotation";
import StickyFooter from "@/components/StickyFooter";
import FadeIn from "@/components/FadeIn";

// ---- ANNOTATION DATA ----
const A = {
  rosenberg: [
    {
      url: "https://github.com/cognitivetech/Marshall-Rosenberg-NVC/blob/main/Basics-Nonviolent-Communication_Marshall-Rosenberg_San-Francisco_transcript.md",
      title: "NVC San Francisco Workshop Transcript",
      desc: "Rosenberg on domination cultures, Amtsprache, and how language trains obedience.",
    },
    {
      url: "http://mainenvcnetwork.org/angeranddominationsystems.pdf",
      title: "Anger and Domination Systems (PDF)",
      desc: "Workshop transcript: anger as symptom of supporting domination systems.",
    },
  ],
  resmaa: [
    {
      url: "https://onbeing.org/programs/resmaa-menakem-notice-the-rage-notice-the-silence/",
      title: "Notice the Rage; Notice the Silence — On Being",
      desc: "Resmaa Menakem on racialized trauma and its somatic manifestations.",
    },
    {
      url: "https://www.eliseloehnen.com/episodes/h1mjtwhv3bo2nddnd6ikmoj8ogsbzf-jxhh7",
      title: "Resmaa Menakem: Finding Fear in the Body",
      desc: "Interview exploring somatic experience of fear and trauma in racialized bodies.",
    },
    {
      url: "https://www.wnyc.org/story/unedited-resmaa-menakem-with-krista-tippett/",
      title: "Resmaa Menakem with Krista Tippett (Unedited)",
      desc: "Full-length On Being interview on racialized trauma — extended cut.",
    },
  ],
  ifs: [
    {
      url: "https://www.esalen.org/podcasts/dr-richard-schwartz-internal-family-systems",
      title: "Richard Schwartz: Internal Family Systems — Esalen",
      desc: "Schwartz explains IFS and guides a live trauma session.",
    },
    {
      url: "https://scottbarrykaufman.com/podcast/no-bad-parts-w-richard-schwartz/",
      title: "No Bad Parts w/ Richard Schwartz",
      desc: "IFS, personal burdens, the 8 C's of Self-Energy — and an impromptu session.",
    },
    {
      url: "https://tim.blog/2021/01/15/richard-schwartz-internal-family-systems-transcript/",
      title: "Schwartz on IFS & Psychedelic Experiences w/o Drugs",
      desc: "Long-form Tim Ferriss transcript with Schwartz on IFS in depth.",
    },
  ],
  miki: [
    {
      url: "https://www.youtube.com/watch?v=rviyJefkv1A",
      title: "Miki Kashtan: Reawakening the Radical Potential of NVC",
      desc: "YouTube talk connecting NVC to social transformation and challenging societal assumptions.",
    },
    {
      url: "https://thefearlessheart.org/nonviolent-communication-for-liberation-flow-mobilization-and-emergency/",
      title: "NVC for Liberation: Flow, Mobilization, Emergency",
      desc: "Long-form essay by Kashtan on NVC's role in liberation and radical organizing.",
    },
  ],
  roxy: [
    {
      url: "https://www.lifteconomy.com/blog/2021/8/10/roxy-manning-consciousness-compassion-and-nonviolent-communication",
      title: "Roxy Manning: Consciousness, Compassion, NVC",
      desc: "Long-form article on NVC, social change, and navigating conversations about race.",
    },
    {
      url: "https://www.youtube.com/watch?v=IZ0EpkW6Kq8",
      title: "Nonviolent Communication with Dr Roxy Manning",
      desc: "Direct interview on liberatory NVC and decolonising the practice.",
    },
    {
      url: "https://catcallmag.com/2023/10/16/how-to-have-antiracist-conversations-with-dr-manning/",
      title: "How to Have Antiracist Conversations with Dr Manning",
      desc: "Catcall Magazine interview tied to Manning's antiracist conversations work.",
    },
  ],
  korzybski: [
    {
      url: "https://stevenlewis.info/gs/identity.htm",
      title: "Korzybski and the 'Is' of Identity",
      desc: "Deep dive into the is-of-identity — the core tenet of General Semantics.",
    },
    {
      url: "https://www.hilaritaspress.com/podcasts/alfred-korzybski-hilaritas-press-podcast-episode-1/",
      title: "Alfred Korzybski — Hilaritas Press Podcast",
      desc: "Interview with a key General Semantics figure on Korzybski's life and ideas.",
    },
    {
      url: "https://archive.org/details/sciencesanityint00korz",
      title: "Science and Sanity (1933) — full text on Internet Archive",
      desc: "Korzybski's foundational General Semantics text — the source of the is-of-identity critique.",
    },
  ],
  raw: [
    {
      url: "https://theanarchistlibrary.org/mirror/v/va/various-authors-illuminating-discord-an-interview-with-robert-anton-wilson.html",
      title: "Illuminating Discord: Interview with Robert Anton Wilson",
      desc: "Primary interview with RAW on language, reality tunnels, and E-Prime.",
    },
    {
      url: "https://youtu.be/rem8j6ZVeHw",
      title: "Neurological Reality Tunnels — Robert Anton Wilson",
      desc: "RAW himself explaining reality tunnels — direct and engaging.",
    },
    {
      url: "https://www.scribd.com/document/268865845/Toward-Understanding-E-Prime-by-Robert-Anton-Wilson",
      title: "Toward Understanding E-Prime — Robert Anton Wilson",
      desc: "RAW's own essay on E-Prime and its implications for consciousness.",
    },
  ],
  moore: [
    {
      url: "https://www.thebeliever.net/an-interview-with-alan-moore/",
      title: "Alan Moore: Magic as Grammar — The Believer",
      desc: "Moore on magic as linguistic structure and its connection to art and consciousness.",
    },
    {
      url: "https://bureauoflostculture.podbean.com/e/alan-moore-on-magi/",
      title: "Podcast: Alan Moore on Magic",
      desc: "Moore on his magical practice and the creation of his modern grimoire.",
    },
    {
      url: "https://arthurmag.com/2007/05/10/1815/",
      title: "Magic is Afoot: Alan Moore on the Arts and the Occult",
      desc: "Long Arthur Magazine interview, freely hosted — Moore at length on art, magic, language.",
    },
  ],
  polyvagal: [
    {
      url: "https://pointofrelationpodcast.com/podcast/dr-stephen-porges-safety-connection-and-polyvagal-theory/",
      title: "Dr. Stephen Porges: Safety, Connection, Polyvagal Theory",
      desc: "Direct interview with Porges on safety, connection, and co-regulation.",
    },
    {
      url: "https://www.youtube.com/watch?v=Wo9AFESNA30",
      title: "Polyvagal Theory: Science of Safety & Trauma",
      desc: "Porges on neuroception, cues of safety, and the nervous system's role in trauma.",
    },
  ],
  sarahPeyton: [
    {
      url: "https://sarahpeyton.com/resonant-language-and-self-healing-an-interview-with-sarah-peyton/",
      title: "Resonant Language & Self-Healing: Sarah Peyton",
      desc: "Peyton on resonant language and self-healing — key concepts in NVC and the brain.",
    },
    {
      url: "https://www.thetraumatherapistproject.com/podcast/emotional-trauma-amp-the-brain-sarah-peyton",
      title: "Emotional Trauma & The Brain with Sarah Peyton",
      desc: "Peyton on the intersection of emotional trauma and brain function.",
    },
  ],
  tonePolicing: [
    {
      url: "https://blog.apaonline.org/2022/05/10/tone-policing-and-the-assertion-of-authority/",
      title: "Tone-Policing and the Assertion of Authority — APA",
      desc: "Academic analysis of tone policing's impact on conversational and epistemic authority.",
    },
    {
      url: "https://zawn.substack.com/p/nonviolent-communication-through",
      title: "NVC Through a Feminist Lens — Substack",
      desc: "Critical examination of NVC from a feminist perspective on social justice.",
    },
  ],
  fawn: [
    {
      url: "https://www.pete-walker.com/codependencyFawnResponse.htm",
      title: "Codependency, Trauma and the Fawn Response — Pete Walker",
      desc: "Foundational article by the coiner of the term — fawn as trauma survival strategy.",
    },
    {
      url: "https://podcasts.apple.com/ca/podcast/fawning-the-disease-to-please-and-taking-back-your/id1408141817?i=1000732652869",
      title: "Fawning: The Disease to Please (Podcast)",
      desc: "Interview with Dr. Ingrid Clayton on fawning, people-pleasing, and healing.",
    },
    {
      url: "https://pete-walker.com/fourFs_TraumaTypologyComplexPTSD.htm",
      title: "The 4Fs: A Trauma Typology in Complex PTSD",
      desc: "Walker's primary essay on fight/flight/freeze/fawn as four distinct survival strategies.",
    },
  ],
  contactImprov: [
    {
      url: "https://www.nitalittle.com/published-writings/blog-post-title-one-arrz3",
      title: "Cultivating Emergence in Contact Improvisation",
      desc: "Essay on CI as a path of research, connecting it to embodied knowledge.",
    },
    {
      url: "https://authenticmotion.org/2017/03/01/the-somatic-practise-of-contact-improvisation/",
      title: "The Somatic Practise of Contact Improvisation",
      desc: "CI as a somatic practice fostering freedom, connection, and mind-body balance.",
    },
    {
      url: "https://pillowvoices.org/episodes/the-origins-and-value-of-contact-improvisation-in-the-words-of-steve-paxton/transcript",
      title: "Origins of CI — Steve Paxton (Pillow Voices)",
      desc: "Oral history transcript with the founder of contact improvisation.",
    },
  ],
  buddhismIFS: [
    {
      url: "https://www.johnclarketherapy.com/podcast/buddhism-and-ifs-with-ralph-de-la-rosa",
      title: "Buddhism and IFS with Ralph De La Rosa",
      desc: "Podcast on intersections between IFS and Buddhist principles including no-self.",
    },
    {
      url: "https://www.researchgate.net/publication/390049661_Anatta_No_Self_in_Buddhism_Through_the_Lens_of_Modern_Psychology",
      title: "Anatta (No Self) in Buddhism Through Modern Psychology",
      desc: "Academic paper on Anatta and its alignments with modern psychological self-models.",
    },
    {
      url: "https://www.accesstoinsight.org/lib/authors/thanissaro/selvesnotself.html",
      title: "Selves & Not-self — Thanissaro Bhikkhu",
      desc: "Thanissaro Bhikkhu's free book on the Buddhist teaching on Anatta.",
    },
  ],
  kathleen: [
    {
      url: "https://www.youtube.com/watch?v=cXRneCHrbT8",
      title: "The Art of Listening | Kathleen Macferran | TEDxRainier",
      desc: "Macferran on the transformative power of deep, empathetic listening.",
    },
    {
      url: "https://strengthofconnection.com/",
      title: "Strength of Connection — Kathleen Macferran",
      desc: "Macferran's own teaching site, with talks, writings, and trauma-informed NVC resources.",
    },
  ],
  meenadchi: [
    {
      url: "https://www.skepticspath.org/podcast/decolonizing-nonviolent-communication-with-meenadchi/",
      title: "Decolonizing NVC with Meenadchi",
      desc: "Meenadchi on updating NVC through a decolonial lens with Buddhist influences.",
    },
    {
      url: "https://www.youtube.com/watch?v=7BnZvNzCNT0",
      title: "Decolonizing NVC with Meenadchi (YouTube)",
      desc: "Talk by Meenadchi on decolonizing Nonviolent Communication.",
    },
  ],
  anger: [
    {
      url: "https://zawn.substack.com/p/nonviolent-communication-through",
      title: "NVC Through a Feminist Lens — Substack",
      desc: "On anger, NVC, and the politics of emotional expression.",
    },
    {
      url: "https://podcasts.happyscribe.com/the-daily/the-sunday-read-on-female-rage",
      title: "The Sunday Read: On Female Rage — NYT",
      desc: "On female rage and Audre Lorde's 'The Uses of Anger'.",
    },
    {
      url: "https://refugeingrief.com/podcasts/rage-anger-becomes-her-and-by-her-i-mean-us-with-soraya-chemaly/",
      title: "Rage Becomes Her — Soraya Chemaly on Refuge in Grief",
      desc: "Chemaly on women's anger as a moral signal — interview with Megan Devine.",
    },
    {
      url: "https://americanstudies.yale.edu/sites/default/files/files/Lorde%20-%20The%20Uses%20of%20Anger.pdf",
      title: "The Uses of Anger — Audre Lorde (PDF)",
      desc: "Lorde's full 1981 keynote on anger as accurate information, hosted by Yale American Studies.",
    },
  ],
  dominicBarter: [
    {
      url: "https://www.restorativecircles.org/",
      title: "Restorative Circles — official site",
      desc: "Home of the Restorative Circles practice Dominic Barter developed in the favelas of Rio.",
    },
    {
      url: "https://restorativejusticeontherise.org/dominic-barter-of-restorative-circles/",
      title: "Dominic Barter of Restorative Circles — RJOR Podcast",
      desc: "Long interview with Barter on the development and practice of Restorative Circles.",
    },
    {
      url: "https://thefearlessheart.org/nonviolent-communication-for-liberation-flow-mobilization-and-emergency/",
      title: "NVC for Liberation — Miki Kashtan",
      desc: "Restorative and prefigurative NVC work in the anarchist mediation lineage.",
    },
  ],
  ofnr: [
    {
      url: "https://thefearlessheart.org/why-observations-feelings-needs-and-requests-are-both-enough-and-not/",
      title: "Why OFNR Are Both Enough and Not — Miki Kashtan",
      desc: "Kashtan on what the four moves can and can't do — when the form is enough, when it isn't.",
    },
    {
      url: "https://en.nvcwiki.com/index.php/Four_part_model",
      title: "Four-Part Model — NVCWiki",
      desc: "Community reference for the OFNR framework, with examples and variations.",
    },
  ],
  cnvc: [
    {
      url: "https://www.cnvc.org/",
      title: "Center for Nonviolent Communication",
      desc: "Official home of NVC — Marshall Rosenberg's organization.",
    },
    {
      url: "https://www.cnvc.org/about/marshall",
      title: "About Marshall Rosenberg — CNVC",
      desc: "Biographical page on the founder, with timeline and influences.",
    },
  ],
  rosenbergBook: [
    {
      url: "https://archive.org/details/nonviolent-communication-a-language-of-life-marshall-b-rosenberg-1",
      title: "Nonviolent Communication: A Language of Life — Internet Archive",
      desc: "The full book, available to borrow or read on archive.org.",
    },
    {
      url: "https://www.youtube.com/watch?v=Xov5z_GJ9Zs",
      title: "Giraffe Language and Jackal Language — Marshall Rosenberg",
      desc: "Rosenberg himself teaching the core distinction at the heart of the practice.",
    },
  ],
  eprime: [
    {
      url: "https://en.wikipedia.org/wiki/E-Prime",
      title: "E-Prime — Wikipedia",
      desc: "Primer on Bourland's 1965 proposal: English without 'is, are, was, were, be, been, being'.",
    },
    {
      url: "https://www.scribd.com/document/268865845/Toward-Understanding-E-Prime-by-Robert-Anton-Wilson",
      title: "Toward Understanding E-Prime — Robert Anton Wilson",
      desc: "RAW's own essay on E-Prime and its implications for consciousness.",
    },
  ],
  edmundoNorte: [
    {
      url: "https://www.cnvc.org/trainers/edmundo-norte",
      title: "Edmundo Norte — CNVC trainer profile",
      desc: "Biography and work of one of the founding voices of liberatory NVC practice.",
    },
    {
      url: "https://kpfa.org/episode/talk-it-out-radio-june-25-2017/",
      title: "Talk It Out Radio: NVC as a Tool to End Racism — KPFA",
      desc: "Hour-long KPFA interview with Edmundo Norte on race, power, and NVC.",
    },
  ],
};

export default function Home() {
  return (
    <div className="page-content">
      {/* ======== COVER ======== */}
      <section id="cover" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", borderBottom: "2px solid var(--ink)", padding: "4rem 0 3rem" }}>
        <div className="zine-column">
          <FadeIn>
            <div style={{ marginBottom: "0.5rem" }}>
              <span className="stamp">CC BY 4.0</span>
              <span className="stamp">2026</span>
            </div>
            <h1 className="hero-title">Small<br />Clearings</h1>
            <p className="hero-subtitle">Language That Transforms</p>
            <p className="hero-tagline">
                A Field Guide to Nonviolent Communication<br />
                for skeptics, cynics,<br />
                and the emotionally exhausted
              </p>
              <div className="cover-rule" style={{ marginTop: "2.5rem" }} />
              <div style={{ marginTop: "1.5rem", paddingTop: "1rem" }}>
              <p style={{ fontSize: "0.75rem", color: "var(--faded)", fontFamily: "IBM Plex Mono, monospace", lineHeight: 1.7 }}>
                This work is licensed under a Creative Commons Attribution 4.0 International license (CC BY 4.0).
                You are free to share, copy, redistribute, adapt, remix, transform, and build upon this material
                — for any purpose, including commercially — as long as you give appropriate credit to the original
                author and indicate if changes were made.
              </p>
              <p style={{ fontSize: "0.7rem", color: "var(--turmeric)", marginTop: "0.5rem", fontFamily: "IBM Plex Mono, monospace" }}>
                creativecommons.org/licenses/by/4.0
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ======== I. THE SETUP ======== */}
      <section id="setup" className="section-wrapper">
        <div className="zine-column" style={{ position: "relative" }}>
          <span className="chapter-ghost" aria-hidden="true">I</span>
          <FadeIn>
            <div className="chapter-bar">I — The Setup: Half of This Conversation Never Happened</div>
            <div style={{ marginTop: "2rem" }}>
              <p>
                You had a fight last week. Or what almost-was-a-fight. Someone — possibly you — said{" "}
                <em>I just don't think you respect me</em>, and the other person said{" "}
                <em>I do respect you</em>, and somehow that was the worst answer they could have given.
                The thing got bigger. Or it went quiet, which is sometimes worse. You went to bed thinking
                the fight was about respect. You woke up suspecting it wasn't, but you couldn't quite say what it was.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                Or it wasn't a fight. It was your mom on the phone, sighing in a particular way at the end
                of a sentence. Your roommate not making eye contact when you walked into the kitchen.
                Your partner texting back seven hours later with a thumbs-up emoji. Half the conversation
                never happened, and you were already losing it.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                Or it was the conversation in your own head at 3 AM. The one with the boss. Or the parent.
                Or the version of yourself from eight years ago who is still, somehow, on the witness stand.
                That one doesn't end.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                People who try to deploy{" "}
                <Annotation links={A.rosenberg}>NVC</Annotation>{" "}
                like a smart bomb sound like hostages reading a statement. The hostage knows. So does everyone
                else in the kitchen.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                The version of the practice you've probably already met was a polite cousin of the actual thing.
                Communication-class manners with a feelings vocabulary bolted on top. A budget therapy hour.
                A more articulate way to be in the same fight you were going to have anyway. Nice is the
                performance most of us run right before we lose it; the practice has nothing to say about your
                manners. Therapy has its couch and its fifty minutes; this lives in the dishes, the boss email,
                the text from your sister at 9:47 on a Tuesday that made your chest tighten before you'd read it.
                The articulate-fight version is the loudest of the three. Anyone who's been on the receiving end
                of someone using the form to score points knows what that sounds like.
              </p>
            </div>
            <div className="dingmark">⁂</div>
            <p>
              What it actually is, after long enough that the form drops away, is a way of speaking that changes
              what happens in the room. Listening too. The conversation in your skull at 3 AM, also.{" "}
              <em>You are selfish</em> puts the other person on trial for who they permanently are;{" "}
              <em>I am hurt and I am longing for partnership</em> puts the speaker back inside their own body,
              before any reply has landed. Sometimes the other person follows.{" "}
              <Annotation links={A.rosenberg}>Rosenberg</Annotation>'s own pages, more political and weirder
              than his reputation suggests, were clear that this is what the words are doing. The grammar is the work.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              At first, yes, it sounds stilted. <em>I'm feeling X and I'm needing Y and would you be willing to Z.</em>{" "}
              Awkward, the way anything new is awkward when it pokes at parts of you that haven't been poked.
              It looks like cosplay until one day it doesn't, and you can't quite say when it changed.
              People who've been at it for years don't, in conversation, sound like they're using it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ======== II. FEELINGS AND NEEDS ======== */}
      <section id="feelings" className="section-wrapper">
        <div className="zine-column" style={{ position: "relative" }}>
          <span className="chapter-ghost" aria-hidden="true">II</span>
          <FadeIn>
            <div className="chapter-bar">II — Feelings and Needs</div>
            <div style={{ marginTop: "2rem" }}>
              <div className="pull-quote">
                I feel like you don't care.
              </div>
              <p>
                Try saying it out loud. Notice that the word <em>feel</em> is doing none of the work the sentence
                pretends it is. What follows is not a feeling. It is an accusation in soft clothing — a verdict
                on another person, dressed up as an emotional disclosure.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                Most of us live inside this trap most of the time.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                <em>I feel attacked. I feel ignored. I feel manipulated. I feel dismissed. I feel like you're not
                even trying.</em> None of those are feelings. They're hypotheses about another person, smuggled
                across the border under a feeling's passport. Look at the sentences. Where is your body in any
                of them? It isn't. The other person is the entire sentence.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                A real feeling lives in the body. Tight chest. Hot face. The cold thing low in the gut. The
                shoulder creeping up toward your ear. Sad. Scared. Tired. Lit up. Restless. Tender. Furious. Numb.
                These are yours. They aren't claims about anyone else, so they can't be argued with.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                The pseudo-feeling — <em>attacked, ignored, dismissed, abandoned, used, disrespected, manipulated,
                betrayed</em> — carries a charge sheet. It invites the other person to defend rather than meet you.
                And here is the part that smarts: you reach for these constructions hardest in exactly the moments
                when something more vulnerable is going on underneath.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                The charge gets to the mouth before the actual feeling does, because it's shorter and easier to say.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                This is normal. People who've been practicing for thirty years still do it. The difference is they
                tend to catch it faster, sometimes before the words are out.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                They keep coming anyway, delivering a finding about someone else when what the body actually
                needed was a report from itself. Run the translation before you open your mouth.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div style={{ marginTop: "2.5rem" }}>
              <p style={{ fontSize: "0.75rem", color: "var(--faded)", marginBottom: "0.75rem", fontStyle: "italic" }}>
                Each row reads like a translation. Left column: the verdict you'd say out loud. Middle and right: what's
                actually happening in you, and what's hungry underneath.
              </p>
              <table className="pf-table">
                <thead>
                  <tr>
                    <th>Pseudo-feeling</th>
                    <th>What's actually in the body</th>
                    <th>Needs underneath</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Ignored", "lonely, scared, deflated", "mattering, inclusion, contact"],
                    ["Manipulated", "angry, helpless, tense", "autonomy, clarity, safety"],
                    ["Betrayed", "devastated, furious, disoriented", "trust, consistency, care"],
                    ["Disrespected", "humiliated, small, angry", "dignity, belonging, to be seen"],
                    ["Abandoned", "terrified, bereft, hollow", "connection, consistency, security"],
                    ["Attacked", "scared, tense, raw", "safety, respect, protection"],
                    ["Rejected", "crushed, ashamed, small", "belonging, acceptance, mattering"],
                    ["Used", "resentful, tired, bitter", "reciprocity, care, to be seen"],
                    ["Dismissed", "stung, frustrated, small", "to be heard, respect, mattering"],
                    ["Controlled", "furious, closed, restless", "autonomy, sovereignty, trust"],
                    ["Judged", "ashamed, defensive, small", "acceptance, safety, to be seen"],
                    ["Threatened", "scared, braced, tense", "safety, protection, sovereignty"],
                    ["Taken for granted", "resentful, invisible, tired", "acknowledgment, reciprocity, mattering"],
                    ["Violated", "disgusted, scared, raw", "respect, safety, bodily sovereignty"],
                    ["Blamed", "defensive, tight, small", "fairness, understanding, to be seen"],
                    ["Deceived", "furious, sick, disoriented", "honesty, trust, clarity"],
                    ["Excluded", "lonely, ashamed, cold", "belonging, inclusion, connection"],
                    ["Mocked", "humiliated, hot, closed", "dignity, safety, respect"],
                  ].map(([pf, body, needs]) => (
                    <tr key={pf}>
                      <td>{pf}</td>
                      <td>{body}</td>
                      <td>{needs}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <p style={{ fontSize: "0.78rem", color: "var(--faded)", marginTop: "0.75rem", fontStyle: "italic" }}>
                If the verdict is also a structural fact — the institution really did dismiss you, the boss really is
                doing what you said — the table is not asking you to translate that away. The personal grammar and the
                political work run on different tracks, and the political one is sometimes the one that has to happen first.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div style={{ marginTop: "2rem" }}>
              <p>
                The reason it matters that <em>attacked</em> is not a feeling has nothing to do with grammar.
                Saying <em>you attacked me</em> puts the entire drama inside the other person's character.
                They will defend. You will press. The conversation becomes about whether they are an attacker
                and whether you are a person who exaggerates. What was actually going on — that you are hurt,
                that something old got touched, that you wanted closeness and got distance — never makes it
                onto the table.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                Compare <em>I feel like you don't care</em> to <em>I am hurt, and I am longing to feel like
                I matter to you.</em>
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                The second sentence is harder to say, and harder to defend against. You aren't delivering a
                verdict for them to answer; you're closer to reporting. The sentence also does something to the
                speaker — quietly, in the body, before anyone has replied. The body that delivers a finding
                about someone's character sits in a different state than the body that names its own hurt out
                loud.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                Now look at that second sentence again. <em>I am longing to feel like I matter to you.</em>{" "}
                Notice what just happened. "Feel like I matter to you" is doing the same trick "feel attacked"
                was doing, one level deeper — naming a story about what the other person is or isn't doing, in
                language that sounds like a feeling. The body still isn't quite in it.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                The form gets you closer in one pass. It doesn't get you all the way. What it does is hand the
                other person something they can meet rather than something they have to defend against. That
                opens the next move.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                Imagine the partner, instead of getting defensive, picks up the small opening and asks:{" "}
                <em>okay — what would I be doing differently if you felt like you mattered to me, and what
                would that actually feel like in your body?</em> Now the dig keeps going. "Feel like I matter
                to you" might unpack into <em>I want you to ask about my day before you start telling me
                about yours</em>, or <em>I want to know I'm in your plans for the weekend before Friday
                afternoon</em>, or <em>I want you to put your phone down when I'm talking.</em> The
                body-feeling underneath might be relief, or steadiness, or a small quiet joy at being met. It
                might just be the absence of the low buzz of resentment that has been running for a year.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                Both of you are doing the practice together now. Neither one is on the stand.
              </p>
            </div>
            <div className="dingmark">∗</div>
            <p>
              Underneath the feeling is the need — one piece of jargon that earns its place here, because there's
              no clean substitute.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              In NVC, needs aren't the things you want from a particular person on a particular Tuesday. They're
              the underlying ones a person walks around with no matter who they are or what kind of week they're
              having — the ones you can't stop wanting even when you've talked yourself into not wanting them.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Mattering. Being seen. Rest. Belonging. Solitude. A say in your own life. Safety. Contact. Meaning.
              Play. Contribution. These are the things that, if you've gone without one of them for too long,
              you start seeing the absence everywhere else.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              The need is the why beneath the feeling. You feel hollow because something is hungry for connection.
              You feel taut because something is fighting for respect — for mattering, more honestly. You feel the
              low buzz of resentment because something has been quietly trading its own rest for someone else's
              comfort and the bill has come due.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              The person across from you is the occasion for these. They didn't manufacture any of them, and
              couldn't single-handedly fill them if they tried. This isn't letting anyone off the hook. The ache
              is yours; you're the only one who can actually do anything with it.
            </p>
          </FadeIn>

          <FadeIn delay={200}>
            <table className="needs-table" style={{ marginTop: "2rem" }}>
              <tbody>
                {[
                  ["CONNECTION", "belonging, inclusion, intimacy, contact, to be seen, to be heard, mattering"],
                  ["SAFETY", "security, protection, bodily sovereignty, stability, predictability"],
                  ["AUTONOMY", "choice, freedom, sovereignty, space, self-determination"],
                  ["HONESTY", "clarity, trust, transparency, authenticity"],
                  ["MEANING", "purpose, contribution, growth, understanding, making a difference"],
                  ["ACKNOWLEDGMENT", "appreciation, recognition, to be valued"],
                  ["PHYSICAL WELLBEING", "rest, food, movement, shelter, touch, health"],
                  ["PLAY", "joy, humor, lightness, spontaneity"],
                  ["PEACE", "ease, quiet, order, harmony, space to breathe"],
                  ["INTEGRATION", "to grieve, to process, to make sense of loss"],
                ].map(([cat, desc]) => (
                  <tr key={cat}>
                    <td>{cat}</td>
                    <td>{desc}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p style={{ fontSize: "0.8rem", color: "var(--faded)", fontStyle: "italic", marginTop: "0.5rem" }}>
              Go too long without one and the rest of your life starts behaving strangely.
            </p>
          </FadeIn>

          <FadeIn delay={250}>
            <div className="dingmark">∗</div>
            <p>
              How sure are you, right now, that the thing you just called a feeling actually is one? You've been
              wrong about this before. You've called resentment what turned out to be grief that hadn't been
              allowed to cry. You've called <em>fine</em> a state you decided to stop looking into.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              First: anger is a signal. Sometimes the most trustworthy signal you have. The consuming kind —
              the kind that leaves you in the bathtub unknotting your own muscles, the kind that has you screaming
              until there is nothing left — is reporting one thing: <em>harm is being done here, and it must be
              acknowledged.</em>
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              <Annotation links={A.rosenberg}>Rosenberg</Annotation> calls anger a thinking event — the body's
              response to a story you are telling about wrongness. Useful framing for some kinds of anger. Not
              the whole picture. Sometimes the anger is not downstream of a story; the alarm is going off because
              the alarm is what the situation requires.{" "}
              <Annotation links={A.anger}>Anger gives accurate information most of the time.</Annotation>{" "}
              It just usually needs translation before the people in the room can hear what it's actually saying.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              NVC doesn't ask you to abandon the anger. It asks you to put words on it — words that let the harm
              get named, the need stated, the moment real enough that another person could meet it. <em>I am furious.
              Harm has been done. I need it acknowledged.</em> The heat is in those sentences. The rage now has
              language attached.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Sometimes the anger underneath is fear — of losing the connection, or that turning soft will get
              you killed in the household you grew up in. Sometimes it's grief that hasn't been allowed to weep
              yet. Or humiliation, the body's response to being made small in public. Or a much older anger on
              loan from someone in your family who never got to feel theirs — running its old program through you,
              decades later.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              There's a coarser cut underneath all of this. Not what the anger is made of — what it's for.
              Neither of the two that follow is a moral category — they're different animals asking for different
              things from the practice.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Some anger is a tantrum. The wall-punching volatility of an adult who can't tolerate the word no,
              taking all the oxygen in the room, exhausting, repetitive, fundamentally an attempt to control the
              environment by terrifying it. Most of us have run this at least once. Many of us grew up with someone
              who ran it most days.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Some anger isn't doing that work at all. It rises when your limits are actively being dismantled —
              when you are being harmed, gaslit, or trapped — and it stops being a thinking event and becomes a
              ledger. The part of you that has been keeping an accurate accounting of harm done has finally opened
              the book.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              This kind can feel apocalyptic. It can sound like a complete inventory of every time safety was
              stolen. It is not kind. It is also not the child screaming <em>I hate you</em> because ice cream
              was denied — these are different things, and the practice has to be able to tell them apart,
              especially when you're the one doing the feeling.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Using NVC to translate this kind of rage away while you are actively being harmed is the practice
              being weaponized against the part of you trying to keep you alive.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              What this anger needs is to be heard before it has to take the wheel at volume eleven. Trying to
              exile it doesn't work, and the body won't let you for long. When the protective part trusts that
              you will listen and put its snarls into words — <em>I need the harm to stop. I need to get out.
              I need my nervous system to stop being used as a trash compactor for other people's unhealed
              parts</em> — it doesn't have to drive every conversation.
            </p>
            <div className="dingmark">❦</div>
            <p>
              The specific shapes vary: fear of losing the connection, fear of being seen and rejected, fear of
              one's own anger in households where anger had a body count, fear of becoming the parent, fear that
              is the body remembering something the mind has agreed to forget. They feel different from the
              inside because they are different. A lot of the work, quietly, is just slowing down enough to
              notice which one is actually in the room with you tonight.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Here is a sentence you are allowed to say out loud: <em>I don't know what I feel.</em>
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Saying it is itself accurate. When the honest answer is <em>I am numb</em>, or <em>I am underwater</em>,
              or <em>there is something but I cannot find it</em>, that is a feeling — sometimes called freeze,
              sometimes called{" "}
              <Annotation links={A.polyvagal}>dorsal-vagal shutdown</Annotation>, depending on whose lineage you
              read. The body has gone quiet to keep you safe.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              NVC doesn't work well in that state. Almost nothing does. Pushing for words right now won't do what
              you want it to do; what helps is the body finding its way back into the rest of you. Slow breath,
              feet on the floor, leave the room, eat something, anything that lets the feeling-finding apparatus
              turn back on.{" "}
              <Annotation links={A.kathleen}>Kathleen Macferran</Annotation>, one of the trauma-aware NVC trainers,
              puts it cleanly: <em>you cannot move the conversation faster than the ability of everyone's nervous
              system to digest, assimilate, or integrate the conversation.</em> You cannot drag a frozen body into
              a four-step. The four-step needs the body to believe it's safe before the words can do anything useful.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              When the sentence starts with <em>I feel like</em> — pause. Something else is trying to speak. Find
              it in the body before you let your mouth name it.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ======== III. SPEAKING ======== */}
      <section id="speaking" className="section-wrapper">
        <div className="zine-column" style={{ position: "relative" }}>
          <span className="chapter-ghost" aria-hidden="true">III</span>
          <FadeIn>
            <div className="chapter-bar">III — Speaking</div>
            <div style={{ marginTop: "2rem" }}>
              <p>
                There's a thing people do, once they've learned the surface shape of NVC, where they use the form
                to deliver the same complaints they were already delivering, in a tone that suggests they've done
                the reading. The complaint is the same; the vocabulary is more careful. The person on the receiving
                end still feels, somehow, like they're in trouble — just in a more articulate way than before.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                Speaking with NVC reduces, in its clinical form, to four moves (<Annotation links={A.ofnr}>OFNR</Annotation>). People who love acronyms
                tend to use them as armor, and this one is no exception. The four moves are scaffolding. The
                scaffolding is supposed to come down once the building stands up.
              </p>
              <div className="callout callout--ofnr" role="group" aria-label="OFNR — the four moves of NVC speaking">
                <span className="callout-label">The four moves</span>
                <dl>
                  <dt aria-hidden="true">O</dt>
                  <dd>
                    <span className="term">Observation</span>
                    what a camera would have recorded.
                  </dd>
                  <dt aria-hidden="true">F</dt>
                  <dd>
                    <span className="term">Feeling</span>
                    what is in your body, not what they did to you.
                  </dd>
                  <dt aria-hidden="true">N</dt>
                  <dd>
                    <span className="term">Need</span>
                    the universal hunger underneath.
                  </dd>
                  <dt aria-hidden="true">R</dt>
                  <dd>
                    <span className="term">Request</span>
                    concrete enough to say yes or no to. If they can't say no, it was a demand.
                  </dd>
                </dl>
              </div>
              <p>
                <strong>Observation.</strong> What actually happened. Not what it means. Not who it makes them.
                Most of what we say to each other is evaluation pretending to be observation.{" "}
                <em>He never helps</em> is an evaluation. <em>He left the dishes again last night</em> is closer
                to an observation. <em>She's just like her mother</em> is a story. <em>She raised her voice three
                times during the conversation about money</em> is what happened.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                The grammatical fingerprints of evaluation: <em>never, always, every time, just like, that kind
                of person, you always make this about, this is so typical of you.</em> When you hear yourself
                reach for one of these, the prosecution has already started; there's no observation left in the sentence.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                <strong>Feeling and need.</strong> <em>Feelings live in the body.</em> If the sentence has the
                other person in it, you're not yet at the feeling. <em>The need is universal.</em> Not the version
                contingent on this specific person doing this specific thing. The need beneath{" "}
                <em>I want you to text me back faster</em> is probably <em>contact</em>, <em>mattering</em>, or{" "}
                <em>care</em>. The particular person is the occasion. The hunger underneath them is older than
                they are.
              </p>
            </div>
            <div className="dingmark">∗</div>
            <p>
              <strong>Request, and the thing recovery folks already know.</strong>
            </p>
            <div className="callout callout--inline">
              <p>
                A request is something the other person can say no to. If no isn't actually available to
                them, it was a demand the whole time.
              </p>
            </div>
            <p style={{ marginTop: "1.2rem" }}>
              Most people who grew up in households where directly asking for things was dangerous have spent
              decades issuing demands disguised as requests, or hints disguised as requests, or — most painfully
              — needs swallowed before they ever reached the level of a request.{" "}
              <Annotation links={A.fawn}>People-pleasing, codependence, the carefully managed niceness of someone
              who learned early that wanting things gets you hit, ignored, mocked, or left.</Annotation>{" "}
              <em>I don't really care, whatever you want</em> means something very different when it comes from
              the partner who has shaped their entire life around accommodating yours.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              NVC, read through codependence recovery, is not asking you to become more authentic in some abstract
              spiritual sense. It is asking the body whose first lesson was <em>do not want anything out loud</em>{" "}
              to want something out loud, in front of someone who could refuse you. That is what the practice
              costs the people who need it most.
            </p>
            <div className="dingmark">∗</div>
            <p>
              <strong>What it actually looks like, when it goes at all.</strong>
            </p>
            <p style={{ marginTop: "1rem" }}>
              Your friend has been canceling on you for three months. Every time, a good reason. Every time, you
              say <em>no worries</em> and have mostly convinced yourself it's true. The slight hollow in your
              chest when she texts to reschedule is data you've been ignoring on purpose.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              What you actually feel: dropped. A little invisible. What you actually need: to know you are a real
              priority, not just an intention.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              You've never said this out loud. The version of you who learned early that wanting things has a
              cost has been editing the ask before it reaches your mouth for years.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Here is the practice, applied: find the thing in the body first. Not the argument. Not the evidence
              of how many times this has happened. The feeling — something between sad and scared — and the need
              underneath it, which is mattering, contact, something like <em>I want to be someone's plan-A at
              least occasionally.</em>
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Then the request. <em>You always cancel on me</em> is a prosecution, not a request.{" "}
              <em>Are you sure you can make it next time?</em> is pre-emptive surrender dressed as a question. A
              real request is concrete enough that she can genuinely answer it: <em>Would you be willing to put
              something in the calendar for next month and actually hold it — not maybe, not let me check, but
              hold it?</em>
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              She can say yes. She can say she genuinely doesn't have the capacity right now. Either answer is
              something you can actually plan around. Both beat another three months of <em>it's fine.</em>{" "}
              <em>Fine</em> keeps you stuck in a room with no exits, politely.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              A request doesn't guarantee a yes. That's exactly why it's a request and not a demand. You're
              handing another person real choice. For people who spent years swallowing their needs, the asking
              is the bigger risk — bigger than the managed performance of not-wanting it in the first place. It's
              also the version where anything new can happen.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="dingmark">∗</div>
            <p>
              <Annotation links={A.tonePolicing}>NVC trainings frequently become a new arena for the same
              patterning the practice is supposed to address.</Annotation>{" "}
              The over-empathic listener who never gets a need on the table. The participant who suppresses their
              own request because they don't want to create a demand. The workshop facilitator who confuses
              self-abandonment with compassion and teaches it to a room full of people who are already losing
              themselves. NVC can re-install codependence in spiritualized form, with the original cost-of-asking
              logic now gilded with the moral authority of having attended a seminar.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              The mirror version of this trap is worse than the codependent one. Most people don't notice it,
              because the language sounds correct from the outside.
            </p>
            <div className="pull-quote" style={{ marginTop: "1.5rem" }}>
              Someone is being chased around a backyard by another person who is screaming: Why don't YOU ever
              even FUCKING try to use NVC? Nothing true is ever said in anger. Why won't you just TRY.
            </div>
            <p>
              The person being chased stops. And, because they have actually read the booklet, responds:{" "}
              <em>Okay, I'll try. When you chase me around the yard, yelling and cursing at me to fucking use
              NVC, I feel a mixture of bewilderment, absurd hilarity, and anger. My only request is that your
              next actions or words be ones that allow me to go with the joke.</em>
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              It didn't land. But they laughed inwardly. That felt sane.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              <em>Nothing true is ever said in anger</em> — a paraphrase of a common workshop trope, not a sentence
              Rosenberg wrote — is the old dominator move with new vocabulary. It performs the same structural
              sleight-of-hand as the is-of-identity: <em>I am calm, therefore I am right; you are angry, therefore
              you are wrong</em> — but now with the moral authority of a nonviolent communication practice behind it.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Notice what has not actually been established: that the person doing the chasing is calm. They're
              not calm. They're screaming. They're in pursuit. <em>Calm</em> in this formula is not a description
              of an emotional state; it's a badge handed to whoever invokes NVC grammar, regardless of what their
              nervous system is actually doing. You don't have to be regulated to claim the calm position. You
              only have to be using the right vocabulary while the other person is using the wrong one.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              The person demanding NVC compliance while pursuing you is doing something more violent than someone
              who simply yells. They are enforcing a unilateral disarmament in the same sympathetic activation
              they are accusing you of. Your anger is rendered illegitimate by the grammar. Their behavior, at
              any volume, vanishes into the background as the unremarkable default.{" "}
              <Annotation links={A.tonePolicing}>Tone policing is the name for the move, when it has a name.</Annotation>{" "}
              It doesn't require conscious malice to operate. It works by shifting the entire conversation from
              what is being done to how you are reacting to it. The harm becomes invisible. Your response to the
              harm is what is now on trial. If you cooperate — soften your tone, reach for the four-step, try to
              comply — the behavior that prompted the response is retroactively vindicated by your compliance.
              Your trying is offered as proof that you were the problem.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Both traps end the same place: your interior was the problem, and here is the practice to make
              you quiet.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              What the form does well, when it's used honestly rather than weaponized, is this: when the
              codependent person tries to assemble the sentence, the structure asks <em>hang on — do you actually
              have a request, or are you hoping they'll guess?</em> When the controlling person tries to assemble
              the sentence, it asks <em>is this a request, or will you punish them when they say no?</em> Either
              question interrupts a particular kind of disappearing — the self-disappearing of the codependent,
              the consent-disappearing of the controller. Neither is fully escapable from inside the form, not
              without abandoning the form altogether, which a lot of people do, and which is its own kind of tell.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              The form doesn't fix the patterning. The patterning gets fixed by slow uneven work over years, if
              it gets fixed at all. What the form does is hold up a mirror — your particular survival strategy
              made visible, sentence by sentence, in the exact way it has been hiding itself inside your
              particular kind of articulate.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              NVC assumes a baseline: both bodies in the room have enough safety in this moment, enough sovereignty
              in this conversation, enough self remaining to speak from. The qualifier matters — this is not
              about whether your life is safe in general, or your household is safe overall, only whether right
              here, right now, your nervous system has any margin left to use the form. Remove that margin and
              the tool stops applying. The tool didn't fail; the situation changed shape.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              The harder case is when the asymmetry is structural, not momentary. Your boss calling you out in
              front of your team. A cop asking questions. A parent whose approval still shapes you at forty. These
              conversations have something in common: you cannot make a request you cannot afford to have refused.
              NVC isn't pretending otherwise. What it offers in those rooms isn't equal footing you don't have.
              It's a way of staying located inside yourself while the room runs on someone else's rules — keeping
              an accurate accounting of what happened and what you need without it detonating before you've chosen
              the moment. Sometimes that moment comes later, in a different room. Sometimes it means leaving. What
              the practice does is keep the information alive until you're in a position to use it.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              What Rosenberg actually wrote is that violence is the tragic expression of an unmet need. The person
              doing the chasing is unmet somewhere. Also true. The person being chased is also unmet, also scared,
              also possibly in danger — and their anger isn't a communication failure. It's accurate information
              about what needs to happen next.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Sometimes that information sounds like: <em>I am leaving now. This conversation is over.</em>
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              NVC isn't asking you to stay. <em>I need to leave this conversation</em> is a fully valid request.{" "}
              <em>I need some space before we talk about this</em> is a fully valid request.{" "}
              <em>I am not willing to be in this relationship on these terms</em> is a statement of need as
              legitimate as any other in the practice.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              There's a difference between <em>NVC doesn't apply here because you're being harmed</em> and{" "}
              <em>NVC applies here, and what it is telling you is to leave.</em> The second sentence is sometimes
              the answer. You used the practice, and the practice told you to go.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Once sovereignty is internalized — both kinds, the one that lets you ask cleanly and the one that
              lets you walk — a quieter grief arrives. You can't guarantee connection. Your stuff sits on your
              side, theirs sits on theirs. Soft-pedaling needs or swallowing them only increases the distance.
              Speaking them cleanly sometimes reveals the relationship was never what you imagined. Other people
              become less threatening; some of them also become sadder, viewed accurately.
            </p>
            <div className="dingmark">❯ ❯ ❯</div>
            <p>
              <strong>Lead with what you're hungry for, not what's missing.</strong>
            </p>
            <p style={{ marginTop: "1rem" }}>
              Most of us, when we finally get the feeling and need out, lead with the gap. <em>I am hurt and I am
              needing partnership.</em> True. Useful. There is a related sentence that does different work:{" "}
              <em>I am hurt — and what I am longing for is more of our days having a sense of partnership in them.</em>
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              The longing form points at what you'd be moving toward if there were more of it — the direction of
              the wanting, not just the weight of the lack. The other person gets to feel the shape of what you're
              actually after, instead of only the absence. Harder to defend against, harder to weaponize, and
              usually more honest, since most of the time the thing you want isn't the disappearance of the bad
              version; it's the presence of a better one.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              And sometimes, even with the form held lightly and the traps avoided and the language as clean as
              you can make it, the true thing still doesn't land.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              You said the real thing. Found the feeling, named the need, made the request — clearly, cleanly,
              without a verdict in it. And the other person could not meet you. Wouldn't. Or heard something
              different entirely and answered that instead. Or went quiet in a way that told you everything.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              This is where a lot of people put the practice down. It feels like a betrayal — you did the work,
              you took the risk, you were honest in a way you'd never quite managed before. And still.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Most introductory material skips the part that comes next: there's grief built into the naming,
              regardless of whether the other person meets you. You are saying out loud, to yourself first,{" "}
              <em>this is what I need, and I am not getting it.</em> Saying it makes the gap real in a way that
              swallowing it never did. Swallowing kept the door open to a world where maybe you could still get
              it, if you found the right moment, the right words. Naming closes that door. Sometimes a different
              one opens. Sometimes it doesn't.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              The grief that comes with naming an unmet need is part of what the form is doing. The willingness
              to feel what you actually need — even when the need isn't going to be met, especially then — is
              most of what the practice is training. The feeling runs its course. The need names itself again
              later, in a different conversation, with someone who has more capacity.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ======== IV. SELF-NVC ======== */}
      <section id="self-nvc" className="section-wrapper">
        <div className="zine-column" style={{ position: "relative" }}>
          <span className="chapter-ghost" aria-hidden="true">IV</span>
          <FadeIn>
            <div className="chapter-bar">IV — Self-NVC</div>
            <div style={{ marginTop: "2rem" }}>
              <p>
                Most of the work of NVC happens before anyone hears anything come out of your mouth.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                There is a gap. Between when your friend says <em>I just don't think you respect me</em> and the
                answer that finally leaves your face. Three seconds, usually. Sometimes the rest of the conversation.
                Sometimes the text sits on your phone for half an hour while your thumb hovers and you cycle through
                six versions of an answer. Sometimes the thing your boss said in the meeting becomes an email you
                write that night, after rewriting the second sentence four times. Most of the practice happens in
                those gaps — alone, with the version of you that gets loud when there is no one watching.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                The first move is a pause. Not a long one. Long enough to ask: <em>This is a feeling. What story
                am I telling myself about what just happened?</em>
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                One thing about the pause that's easy to miss: the inner monologue gets louder and faster when the
                body is{" "}
                <Annotation links={A.polyvagal}>dysregulated</Annotation>, not slower. The internal courtroom runs
                at full volume precisely when you are least equipped to translate anything. Self-NVC is only really
                available to a body that has decided, at least slightly, that it's safe enough to slow down. Feet
                on the floor. A few breaths. Something cold in your mouth. Walking out to the kitchen. The
                translation work happens in a body that has come back online — even partway. If the body is still
                spinning, the work is to come back online first. The words can wait.
              </p>
            </div>
            <div className="dingmark">∗</div>
            <p>
              Sometimes the feeling and the need are enough. The story underneath isn't always the homework.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Try this one. <em>I am feeling insecure tonight, and I am longing for some reassurance that you
              still find me attractive.</em>
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              That sentence doesn't require a thirty-minute investigation of where the insecurity is from — your
              mother, your last relationship, the haircut, the lighting, the third glass of wine, the article
              about hormones, or all six at once. Sometimes the feeling is the feeling and the need is the need
              and the work is to say it. The historical research can wait, or happen later, or never happen at
              all. Right now, in your kitchen, what you have is enough.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              This is, counter-intuitively, one of the harder moves to learn. Because the real trap, for many of
              us, isn't failing to find the story. The real trap is digging into the story when there was nothing
              in it that actually needed digging up.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              <strong>When the thinking is the avoidance.</strong>
            </p>
            <div>
              <p style={{ marginTop: "1rem" }}>
                Thoughtful people, the readers of this kind of booklet most of all, run their own version of this
                trap. <em>Let me figure out why I am feeling this</em> becomes the more sophisticated way of saying
                <em> let me not say what I am feeling.</em> The analysis works as a way to stay in the head and out
                of the body, out of the room, out of the request. Therapy and NVC and{" "}
                <Annotation links={A.ifs}>IFS</Annotation> and somatics and astrology and your friend's podcast
                all come pre-installed with permission to keep digging instead of speaking. The dig turns into the
                new performance.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                The check is small. <em>Could I just say the feeling and the need now, here, to this person, and
                let the conversation happen from there?</em> If yes, do that. The story can still be there
                afterward — it just doesn't have to be the first thing through the door.
              </p>
            </div>
            <div className="dingmark">∗</div>
            <p>
              <strong>Talking to yourself differently.</strong>
            </p>
            <p style={{ marginTop: "1rem" }}>
              Most people, including you, conduct an ongoing internal conversation that, if spoken aloud to a child,
              would be recognized immediately as harm. <em>You are such an idiot. Why did you say that. Of course
              she didn't text back. You always do this. Look at you. Pull yourself together.</em>
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              This is the standard internal soundtrack for a wide range of otherwise functional adults. Most of us
              can't remember a time when it wasn't running.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Self-NVC, practiced over time, slowly translates the language of that interior monologue into something
              else. The critic doesn't get silenced; it gets rendered in different grammar.
            </p>
            <div className="callout callout--translation">
              <p className="t-row">
                <em className="t-from">You are such an idiot</em>
                <span className="t-arrow">→</span>
                <em className="t-to">something in me is mortified, and I am longing for the thing not to have happened.</em>
              </p>
              <p className="t-row">
                <em className="t-from">Why did you say that</em>
                <span className="t-arrow">→</span>
                <em className="t-to">I am embarrassed, and what I needed in that moment was to feel competent, and I did not.</em>
              </p>
              <p className="t-row">
                <em className="t-from">Pull yourself together</em>
                <span className="t-arrow">→</span>
                <em className="t-to">something in me is exhausted, and I am longing for a few hours of not having to perform anything.</em>
              </p>
            </div>
            <p>
              This isn't the positive-thinking move. Positive thinking installs a sentence that's untrue for the
              sake of feeling better. The voice here tells you what's actually happening in you, in precise language,
              in the tone you would use with someone you loved.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              <Annotation links={A.sarahPeyton}>Sarah Peyton</Annotation> calls the part of you that learns to do
              this the <em>Resonating Self-Witness</em>. It is a part you are deliberately cultivating, in the same
              way one might cultivate a meditation practice or a dance form — slowly, by repetition, with no
              measurable progress on most days and a different person at the end of a year.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              What it sounds like, lived from the inside, is not the absence of harshness. The harshness still
              shows up. Another voice is in the room when it does, already listening for it. After enough
              practice, the witness picks up the shift in the body before the inner critic finishes its
              sentence — sometimes before the critic has gotten its first word out. The chest tightens.
              Something starts to move toward <em>you idiot.</em> The witness gets there first:{" "}
              <em>something just got hot. What is it.</em> The translation begins before the attack does.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              The harshness has somewhere to be received now. It doesn't run the room the way it used to.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              <strong>A word on the inner critic.</strong>
            </p>
            <p style={{ marginTop: "1rem" }}>
              The inner critic is one part of you among others. Usually a part that learned somewhere young that
              being harsh with yourself first was the only way to head off being harshly punished by someone else.
              The voice you have been mistaking for yourself is, on inspection, a frightened protector running a
              strategy that worked once. It's doing its best. It's wrong about what's currently required.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              You don't have to fight it. You don't have to silence it. You can do the same translation move on
              it that you would do on anyone else. <em>Something in me is afraid. Something in me is trying to
              keep me safe by getting there first. What does that part actually need.</em> The internal monologue
              softens because the critic stops being the only voice in the room. Other voices — calmer, more
              accurate, usually quieter at first — start having space to speak.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="dingmark">∗</div>
            <p>
              <strong>A note on{" "}
              <Annotation links={A.ifs}>Internal Family Systems</Annotation>.</strong>
            </p>
            <p style={{ marginTop: "1rem" }}>
              The two practices do different operations on the same internal moment. IFS works by helping the part
              that has been driving the bus step back from the wheel. NVC works by giving the part — once it has
              stepped back, or while it's still up there — a precise grammar to speak in. IFS asks{" "}
              <em>which part is this?</em> NVC asks <em>what does this part actually feel, and what does it need?</em>
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              The two moves tend to amplify each other in practice. Once a part is no longer the whole self, you
              can locate what it actually feels and needs without being swept under by it. Once it has the grammar,
              it can be heard inside the system — not just noticed, but understood in its own terms by the rest of
              you. Either practice can address the same internal moment, and people who use both tend to stop
              noticing where the seam is.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Tuesday night. Your sister's text has been sitting on your phone for three days. Two parts of you
              have been at war about it. One wants to call her right now and have it out — get clarity, get this
              over with, get the not-knowing out of your body. The other wants to put the phone face-down and
              walk it off — give it another week, see if it gets less weird on its own.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Step one is to ask each part to step back far enough that you're not being swept under by either.
              Step two is to ask each one — separately — what it actually feels and what it actually needs.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              The calling-now part, when it gets the floor: <em>I am furious. I need this to be over.</em>
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              The walking-it-off part, when it gets the floor: <em>I am exhausted. I need this to be over.</em>
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Same longing, two costumes. Some older part of you has been waiting a long time for things with
              your sister to stop costing this much. The fight between the two parts was a fight about strategy —
              call now vs. wait it out — and the strategy fight had been running so loud that the actual want,
              which is just rest, never made it onto the table. Once it does, neither strategy has to win.
              Whoever writes back tomorrow is quieter than either of them.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              You don't have to commit to either lineage to use the move. The small portable grammar of feelings
              and needs is most useful as a hinge between bigger traditions, not as a religion in its own right.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Feelings run their course; the interpretation shifts after. Often you don't need to know why. The
              feeling passes. The need, named, gets met or it doesn't. You move on.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Most often, when the pause has done its work and the feeling has been found, what's left is the
              need. <em>Connection. Rest. A say in your own life. Mattering. To be seen. Solitude. Care.</em>
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Speak from there. Or don't speak yet, because the speaking can come later, and right now what's
              needed is a breath, a walk, a bowl of soup, the second hour of sleep you had been refusing yourself.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Most of the practice never reaches anyone else's ears.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ======== V. LISTENING ======== */}
      <section id="listening" className="section-wrapper">
        <div className="zine-column" style={{ position: "relative" }}>
          <span className="chapter-ghost" aria-hidden="true">V</span>
          <FadeIn>
            <div className="chapter-bar">V — Listening</div>
            <div style={{ marginTop: "2rem" }}>
              <p>
                A friend tells you something hard. Their dog died, or their boss humiliated them, or the thing
                they've been afraid of for six months turned out to be true. You open your mouth. What comes out,
                in most rooms, isn't actually a response to what was said.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                Watch yourself for the move where you start delivering a small theory of why this happened —
                <em> well, what probably happened is…</em> — complete with reasonable people on both sides. The
                friend didn't need a theory. The friend needed somebody to be in the room with them.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                There's a related move where you grab the microphone, often without noticing — <em>oh my god,
                that reminds me of when my boss did exactly the same thing to me last year, it was so awful…</em>{" "}
                You meant well. You were saying <em>me too.</em> What you said, in effect, was <em>let me have
                the floor for a minute.</em>
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                And then there's the fix-it move — <em>have you tried…</em> — which treats whatever's on the
                table as a problem-solving question. Sometimes it is. Often it isn't. What the friend was asking
                for, in most of these moments, was to feel less alone for two minutes. The fix-it response says,
                regardless of intent: <em>I cannot stay in this with you. Let me hand you something to do so I
                can leave.</em>
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                None of these is malice. They are mostly the listener's own discomfort, looking for somewhere
                to put itself.
              </p>
            </div>
            <div className="dingmark">∗</div>
            <p>
              <strong>A working definition.</strong>
            </p>
            <p style={{ marginTop: "1rem" }}>
              Empathy, in NVC's sense, is an orientation toward the other person's feelings and needs — the
              willingness to stay there without needing to solve, redirect, fix, or take the conversation back
              to yourself. It may involve speech. It may not. The orientation is the thing; the words follow it.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              What it sounds like in words, when there are words, is often a question.{" "}
              <em>Are you hurt? Are you scared? Are you exhausted? Do you need to feel like this matters to
              someone right now?</em> You are asking precisely because you cannot know — they may not even
              know themselves yet — and the question is the room being made for the feeling to arrive. Even
              when you think you know, even when you absolutely do, the asking is how you tell them you want
              them to feel what they are feeling, and want them to know you are there for it.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              <Annotation links={A.sarahPeyton}>Sarah Peyton</Annotation> has been making this point for years
              in trauma-informed NVC training: <em>warm misreading does more for the body than the right word
              delivered without warmth.</em> The body responds to the warmth aimed at the rough vicinity of the
              feeling. It doesn't respond to a precise word with cool eyes.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              So you are allowed to guess wrong. You are supposed to guess wrong sometimes. The friend corrects
              you — <em>no, not exhausted, more like furious</em> — and now you are both closer to the actual
              thing than you were a minute ago. The wrong guess made room for the right one.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="dingmark">∗</div>
            <p>
              <strong>What the body does for the body.</strong>
            </p>
            <p style={{ marginTop: "1rem" }}>
              Empathic listening does something more specific than being supportive. A body in distress is a body
              running its threat response — wired hot, or gone numb, neither a state in which words come easily.
              Another body, regulated and present, offers something the distressed body cannot manufacture alone:
              cues of safety. Slow voice. Soft eyes. Steady breath. Unhurried timing. The presence of someone
              whose nervous system is saying, without words,{" "}
              <Annotation links={A.polyvagal}><em>we are not in danger right now.</em></Annotation>
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              This is also why an empathic listener whose own body is dysregulated — anxious, judgmental, in a
              hurry, performing helpfulness — won't produce the effect, no matter how technically correct their
              sentences are. The dead-eyed therapist demo voice you can hear in any badly trained role-play is
              what happens when the technique is in place without the body underneath it.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              <strong>Asymmetric use.</strong> You don't need the other person to be doing NVC for you to listen
              with it. The practice doesn't require their cooperation.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Your stepfather, in full sympathetic activation, telling you for the seventh year running that your
              generation has ruined this country: he is, by inspection, not using NVC. You are not required to
              fix that. You can listen with NVC anyway. From the inside, what that looks like is tracking the
              feeling underneath the rant — probably some mixture of fear, helplessness, grief about a world
              that no longer makes sense to him, pride that has been bruised — and the need underneath the
              feeling, probably to matter, to be seen as having lived a life that meant something, to feel like
              the things he believed in still exist somewhere. You don't have to agree with any of it. You
              don't have to say any of it out loud. You can. You can also just be present and not bait the
              trap. The asymmetric move is internal — what you're doing inside yourself while he is talking.
              Refusing to get recruited. Keeping your own interior alive while his runs hot. Not escalating,
              not baiting, not collapsing into the performance of agreement. That's not passivity — that's a
              specific choice about what to do with your nervous system in a room where nobody asked for your
              cooperation. And it does, weirdly, change the room. Sometimes.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              You can do this with people who don't deserve it by their behavior, or whose worldview you find
              repugnant — the practice doesn't require their cooperation. Whether to spend yourself this way
              on a particular night is your call. Protecting your own nervous system is a real concern,
              especially across asymmetric power dynamics, and the answer is sometimes <em>no, not tonight,
              not this person, not in this body.</em>
            </p>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="dingmark">∗</div>
            <p>
              <strong>The friend who has gone numb.</strong>
            </p>
            <p style={{ marginTop: "1rem" }}>
              Most NVC pedagogy assumes the speaker can locate a feeling. Trauma-informed NVC has decent material
              for someone in sympathetic activation; it has less for someone in{" "}
              <Annotation links={A.polyvagal}>dorsal-vagal shutdown</Annotation> — the friend who has gone numb,
              or underwater, or who is functionally underneath the conversation.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              When this is what's in the room, words are the wrong target. Be present, without demand. Don't try
              to draw out a feeling you can then empathically reflect. What that looks like varies: sitting with
              them, making tea, taking a walk without talking. Whatever gives the body in the room something to
              do other than answer a question.{" "}
              <Annotation links={A.resmaa}>Resmaa Menakem</Annotation> and the somatic trauma writers will tell
              you, in stronger language than this booklet has space for, that words applied to a body that hasn't
              yet decided it is safe can retraumatize.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Recognition first: shutdown is not the same as quiet. A regulated quiet has eye contact,
              present-time tracking, the small movements of a face still receiving the room. Shutdown looks
              blanker — eyes that have gone slightly past you, breathing slowed below what the conversation
              calls for, a body sitting too still. <em>I'm fine</em> in the wrong key.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              What you do then is not what your urge says. The urge says: ask another question, redirect, make
              a joke, fix it. Don't. Lower your own volume. Slow your breath visibly. Soften your face. If you
              can be making tea or walking, be doing that — it gives the body in the room something to track
              that isn't a question. And track your own activation: their offline often spikes yours, and the
              work is not to become two dysregulated bodies. Your staying steady is most of what you have to
              offer. Sometimes the visit is that. They go home a little safer than they came in. Enough.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Trauma-informed NVC, by now, is its own sub-tradition — with its own teachers and its own corrections
              to the original packaging.{" "}
              <Annotation links={A.sarahPeyton}>Sarah Peyton</Annotation>'s work on the Resonating Self-Witness
              and the brain's response to warm misreading.{" "}
              <Annotation links={A.kathleen}>Kathleen Macferran</Annotation> on the load-bearing constraint that
              a conversation moves at the pace of nervous-system digestion, not the pace of the most articulate
              person in the room.{" "}
              <Annotation links={A.resmaa}>Resmaa Menakem</Annotation> on what bodies inherit and what gets stuck
              in them.{" "}
              <Annotation links={A.roxy}>Roxy Manning</Annotation>,{" "}
              <Annotation links={A.edmundoNorte}>Edmundo Norte</Annotation>, and <Annotation links={A.meenadchi}>Meenadchi</Annotation> on the practice's blind
              spots about race, power, and which bodies the standard packaging assumes.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              NVC as packaged often assumes a body that hasn't been racialized into chronic survival mode. A
              feelings-and-needs script in that context can ask someone to perform emotional disclosure in a
              format shaped by white middle-class norms — in the same moment their anger or numbness is the most
              accurate information in the room.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              The four-step assumes a body that can find a feeling and ask for a need. When the body is frozen,
              exhausted, in sympathetic survival, or being asked to translate itself into a vocabulary not its
              own, the work is upstream of language. The trauma-informed lineage is the part of the field that
              has been pointing this out, refining the practice for it, and refusing to let <em>technique</em>{" "}
              stand in for <em>enough safety to use the technique.</em> That's where to go next.
            </p>
            <div className="pull-quote" style={{ marginTop: "2rem" }}>
              Most of what you have to do is not leave.
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ======== VI. PHILOSOPHY ======== */}
      <section id="philosophy" className="section-wrapper">
        <div className="zine-column" style={{ position: "relative" }}>
          <span className="chapter-ghost" aria-hidden="true">VI</span>
          <FadeIn>
            <div className="chapter-bar">VI — Philosophy</div>
            <div style={{ marginTop: "2rem" }}>
              <p>
                What NVC is doing, when it's doing the thing, sits closer to magic than to communication training.
                Magic in the older operative sense — working magic, not woo magic. What{" "}
                <Annotation links={A.moore}>Alan Moore</Annotation> is doing when he points out that{" "}
                <em>to cast a spell is simply to spell, to manipulate words, to change people's consciousness,
                and a grimoire is just a grammar.</em> What{" "}
                D. David Bourland Jr. and E.W. Kellogg III were diagnosing when they called the verb{" "}
                <em>to be</em> a <em>deity mode of speech</em> — a verb that, in their phrase, lets{" "}
                <em>even the most ignorant transform their opinions magically into god-like pronouncements on
                the nature of things.</em>{" "}
                <Annotation links={A.raw}>Robert Anton Wilson</Annotation> popularized the line later in coarser
                form. Some sentences don't describe the world; they enact something in it. They marry. They
                convict. They bless. They curse. <em>I now pronounce you</em> is not a description of the event.
                It is the event happening.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                (If the word <em>magic</em> makes you flinch — fair enough. Substitute <em>performative speech
                act</em> and the passage works the same way. The grammar analysis below doesn't require the
                metaphor.)
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                The pull toward the is-of-identity is mostly that fixing someone in place — even as an enemy —
                takes less ongoing work than tracking who they're actually being from minute to minute. The cheaper
                version is the one the body keeps reaching for.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                <em>You are selfish</em> renders Elizabeth permanently. It uses the deity mode of speech: it places
                a permanent quality onto a person, in a moment, by an authority — yours — and the only response
                available is contestation.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                <em>You didn't text me back for two days, and I am hurt, and I am longing for partnership</em>{" "}
                doesn't render Elizabeth at all. It reports an event that happened in a body, in a moment, for a
                reason. There's no permanence claim. There's no verdict.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                The same grammar holds when you're the one who's been harmed. <em>She is an abuser</em> is the
                is-of-identity aimed in a direction that feels righteous — it might even feel accurate — but it
                works by the same mechanism. It renders a person permanent by their worst behavior. Harm describes
                behavior. Behavior can be named, accounted for, sometimes changed. The person isn't the act, even
                when the act has been serious and the pattern long. Knowing that harm describes behavior rather
                than freezing a person into a permanent role is precision, not minimization. One person's
                behavior can be far more harmful. One person can go far deeper into denial, reversal, and
                coercion. The grammar still matters: we name the pattern without rendering anyone ontologically
                evil. This leaves room for real accountability instead of permanent verdicts.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                This is a discipline of interior clarity — not a rule for how survivors must speak. <em>She is an
                abuser</em>, said as a warning to whoever's next, said as the sentence that finally stopped you
                gaslighting yourself, said because the politics of safety require naming what happened — that
                sentence is doing work this passage has nothing to say about. The politics of warning and the
                grammar of your own interior run on different rules.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                Including, sometimes, yourself — the version of you who did something you can't forgive, who
                you've been rendering permanent ever since.
              </p>
            </div>
            <div className="dingmark">∗</div>
            <p>
              That's the working magic. It's structurally adjacent to the move Bourland later coded as{" "}
              <Annotation links={A.eprime}>E-Prime</Annotation> — English written without{" "}
              <em>is, are, was, were, be, been, being</em> at all, on the theory that purging the verb forces
              the speaker to mark which claims are observation and which are inference.{" "}
              <Annotation links={A.korzybski}>Alfred Korzybski</Annotation> had pointed at the larger problem
              since 1933, calling it the <em>is of identity</em> and arguing it ran from interpersonal conflict
              to nation-state war. His version was <em>the map is not the territory</em> — the label is not the
              thing, the story is not the person. Korzybski also named what happens in the gap before language
              closes around an experience — the <em>neurological delay</em> — and treated cultivating that
              pre-verbal awareness as the central aim of his training. NVC's pause is the same gap, arrived at
              from the other direction.{" "}
              <Annotation links={A.rosenberg}>Marshall Rosenberg</Annotation> probably didn't read Korzybski
              directly, and the independence makes the convergence more interesting — Rosenberg arrived at the
              small, lived version through clinical work, civil-rights organizing, and the practice of mediating
              actual fights between actual people. Someone, eventually, should write the comparative essay.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              The reason this matters is that the language isn't just describing the speaker's interior. It's
              changing it. Saying <em>you are selfish</em> installs a particular state in your nervous system:
              prosecutorial, certain, slightly armored, ready to fight. Saying <em>I am hurt and I am longing
              for partnership</em> installs a different state: vulnerable, located in the body, no longer at war.
              Even the sentence you don't say does construction work — same body, quieter materials.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              If that sounds like a strong claim, it is. It's also the claim Marshall Rosenberg himself was
              making, and he was making it more sharply than his reputation would suggest.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="dingmark">✠</div>
            <div className="pull-quote">
              Life-alienating communication both stems from and supports hierarchical or domination societies,
              where large populations are controlled by a small number of individuals to those individuals' own
              benefit… When we are in contact with our feelings and needs, we humans no longer make good slaves
              and underlings.
              <div style={{ fontSize: "0.75rem", marginTop: "0.75rem", opacity: 0.7, fontStyle: "normal" }}>
                — Marshall Rosenberg, <em><Annotation links={A.rosenbergBook}>Nonviolent Communication: A Language of Life</Annotation></em>
              </div>
            </div>
            <p>
              Underneath the therapeutic register, that's a political sentence. It identifies the language of
              moral judgment as the linguistic substrate of obedience, and the practice of locating one's own
              feelings and needs as the refusal of that obedience.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              What NVC actually commits to, beneath the technique, is a particular kind of sovereignty — yours
              and everyone else's at the same time. <em>Connection over control</em> is the slogan. The claim
              doing the load-bearing work, underneath the slogan, is that no one — including you — has the
              authority to render anyone else permanent. Stories about people are stories. The person is still
              the person. They are allowed to surprise you. They are allowed, even, to surprise themselves. The
              same goes for you. The story you have been telling yourself about yourself for the past twenty
              years is also a story.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              This is why NVC sits next to the anarchist mediation lineages, and why those lineages have been
              doing some of the most interesting NVC work in the world.{" "}
              <Annotation links={A.dominicBarter}>Dominic Barter's Restorative Circles</Annotation>, developed
              in the favelas of Rio, are NVC-rooted and structurally non-state.{" "}
              <Annotation links={A.miki}>Miki Kashtan</Annotation>'s consensus work runs on lines prefigurative
              organizers would recognize on sight.{" "}
              <Annotation links={A.roxy}>Roxy Manning</Annotation>,{" "}
              <Annotation links={A.edmundoNorte}>Edmundo Norte</Annotation>, and <Annotation links={A.meenadchi}>Meenadchi</Annotation> have spent years pointing
              out that NVC's standard packaging often re-installs the dominator culture it was meant to refuse —
              and that the practice has to be retooled to do its actual work in bodies it wasn't originally
              designed for. None of these are fringe; they're the part of NVC the workshop pamphlets tend to
              soften.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              All of these approaches share the same refusal of a single, fixed, judging self.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              It's also why the{" "}
              <Annotation links={A.ifs}>IFS people</Annotation> and the{" "}
              <Annotation links={A.resmaa}>somatic trauma people</Annotation> have all, independently, found
              their way into NVC's adjacent territory. Because the underlying claim of the practice — that the
              self isn't a unitary thing pronouncing on the world from a fixed throne, but a moving collection
              of feelings, needs, parts, and bodies, all of which deserve precise language — is a claim{" "}
              <Annotation links={A.ifs}>Internal Family Systems</Annotation> makes from one direction, that{" "}
              <Annotation links={A.polyvagal}>polyvagal-informed somatic work</Annotation> makes from another,
              that{" "}
              <Annotation links={A.buddhismIFS}>Buddhist parts-work</Annotation> — what the tradition calls{" "}
              <em>anatta</em>, no-self — makes from a third. NVC translates between them with a small, portable
              grammar.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Treat NVC less as a tradition of its own and more as a passage between rooms — between IFS and
              codependence recovery, between somatic trauma work and anarchist mediation, between{" "}
              <Annotation links={A.korzybski}>Korzybski's general semantics</Annotation> and the dharma
              traditions that have been pointing at the same thing for two and a half thousand years. Most of
              its actual value, lived inside, is in this translator role. The bigger lineages give you the
              territory — parts and exiles in IFS, activation and shutdown in somatics, restorative process in
              anarchist mediation — without necessarily giving you the actual sentence to say to the person
              across the table when you're standing in any of that territory. NVC supplies the sentence. The
              people who have hardened it into a primary identity have mostly missed what it is for; the ones
              who hold it lightly inside a larger life tend to do better with it.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              For the reader arriving with no other tradition in hand — just a skeptical mind and a body that's
              been through some things — the hinge can be enough. The grammar is substantive enough on its own
              to do real work, even if NVC ends up being the only thing in your toolkit. If you do come across
              the other practices later, this connects to them.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Treat NVC as one tool among several. The people who become insufferable with it are usually the
              ones who have decided it is the only tool they own. The four-step gives way, eventually, to
              something closer to fluid speech — but only because by then you're pulling from somatic work, from
              grief, from the parts of you that aren't on speaking terms with the parts that learned NVC at the
              workshop. It doesn't replace boundaries, doesn't replace trauma therapy, doesn't replace the
              radical move of walking away from someone who is actively harming you. Use it where it works.
            </p>
            <div className="dingmark">∗</div>
            <p>
              <strong>A note on practice and time.</strong>
            </p>
            <p style={{ marginTop: "1rem" }}>
              NVC at first sounds stilted. <em>I'm feeling X and I'm needing Y.</em> Yes. Yes it does.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              The scaffolding falls away. People who've been doing this for a long time don't, in conversation,
              sound like they're using NVC. They sound like themselves — more so, if anything, because the
              to-be verbs and the moralistic judgments and the demands disguised as requests have been quietly
              evicted from their sentences over time. They don't require their feelings to be agreed with. They
              don't require their stories to be the official record. They don't press their version of you onto
              you. They're, in a small and durable way, more sovereign in conversation than most people are.
              And so are the people they're talking to, because the form of speech offers that sovereignty as a
              side-effect, whether or not the other person ever picks up the practice themselves.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              What the practice does, given enough time, is not what the marketing claims. The first effect is
              clarity — to yourself, and then to whoever is in the room with you. The second is a kind of
              accurate location: you can tell, increasingly, where you actually are in your own body and your
              own life. Calm doesn't really enter into it. The fury, when fury is what's in the room, is still
              in the sentence. The fury is just no longer pretending to be a description of somebody else.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              <Annotation links={A.contactImprov}>Contact improv</Annotation>, for the people who have practiced
              it long enough, becomes a spiritual relationship practice — a discipline of paying attention to
              weight and contact and movement, which opens over years into something larger than the technique
              itself. NVC, practiced long enough, becomes something similar. A way of speaking and listening from
              the present moment, in the body, with the other person's interior treated as real and legitimate,
              and one's own certainty held more lightly than your nervous system would prefer.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ======== VII. CONCLUSION ======== */}
      <section id="conclusion" className="section-wrapper">
        <div className="zine-column" style={{ position: "relative" }}>
          <span className="chapter-ghost" aria-hidden="true">VII</span>
          <FadeIn>
            <div className="chapter-bar">VII — Conclusion</div>
            <div style={{ marginTop: "2rem" }}>
              <p>
                This is the kind of thing you take up, rather than master. You do it badly, over and over, in
                actual conversations with actual people — including the conversations you have with yourself.
                The body learns the shape. The grammar starts to drift in the right direction without your having
                to think about it. The interior monologue softens, slowly, because the part of you that has been
                using the language of court has gradually been given other language to use. None of this happens
                fast. The time scale is closer to learning an instrument than reading a book. The thing changes
                you, eventually, because the language changes you, but the <em>eventually</em> is the real word
                in that sentence.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                You will do it badly tomorrow. You will do it badly six months from now, on a phone call you knew
                was going to be hard, and then you will go home and brood about how badly you did it, and the
                brooding will also be part of the practice, and that is fine.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                The noticing afterward, and the willingness to come back the next day, is most of what counts.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                There is no compliance score. There is no NVC police. What matters is whether you stayed in the room.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                If you came in distrustful of communication training — earned in workshops, HR rooms, households
                where the calmer person was the more dangerous one — the suspicion isn't a problem the practice
                has to fix. It's how you'll catch the moment the form gets weaponized. Including by you, on a
                bad day, against someone you love.
              </p>
            </div>
            <div className="dingmark">∗</div>
            <p>
              For the readers who recognized themselves in the codependent version of the trap — the over-listener,
              the swallower of needs in the room, the seminar-trained adult who has been given a beautiful new
              vocabulary in which to keep not-wanting things — the work is probably less in the listening and more
              in the asking. Give yourself permission to make demands the practice would technically prefer you
              frame as requests. Sometimes the request can wait. The asking cannot.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              The point is connection. Not compliance. Not the right sentences. Not getting your partner to come
              around. Sometimes the fight just loses its grip in the middle — because you've noticed the person
              across from you isn't actually something for you to render permanent. They are a whole person. So
              are you. The courtroom you'd been running doesn't have a case anymore.
            </p>
            <div className="dingmark">∗</div>
            <p>
              The fight from the first page. The one where someone said <em>I just don't think you respect me</em>{" "}
              and the other said <em>I do respect you</em> and somehow that was the worst answer they could have
              given. The thing got bigger. Or went quiet.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Hours later, alone in the kitchen, after the heat has passed.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              What you said — <em>you don't respect me</em> — was a verdict. It put the other person on trial for
              a permanent quality of their character. They defended; the defense made it worse. The sentence made
              the fight unavoidable before anyone had chosen to fight.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              What was actually in the room was hurt. And underneath the hurt, something more specific — longing
              to feel like you mattered to that person, on that particular Tuesday.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              The sentence that was true — <em>I am hurt, and I am longing to feel like I matter to you</em> — was
              available. It is still available now, if the conversation can be reopened. It might land. It might not.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              You won't say it perfectly under pressure. Nobody does, not consistently, not at first. What actually
              shifts over years is whether the grammar is becoming more available — whether the hurt is getting
              faster at finding its words before the verdict gets to the door.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              That's all the shift is. The hurt getting faster at finding its words.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              The fights don't disappear. What changes is what they're about.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              What earns the practice its keep, beyond the operative fact that it works, is what kind of stance
              toward another person it requires. NVC is one of the few practices currently available to ordinary
              humans that takes seriously the idea that the person across from you has an interior that is real,
              that is theirs, and that isn't yours to manage or correct. The same goes for your interior. You're
              allowed to be in there — in the body, in the present, with your actual needs — and you're allowed,
              if it comes to that, to want things out loud.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="practice-box">
              <span className="practice-title">Smallest Possible Practice</span>
              <p>
                Next time you notice the sentence <em>I feel like you…</em> leaving your mouth or your mind, stop.
                Place one hand on your sternum. Ask: <em>What is actually in my body right now?</em> Name one real
                feeling and one need out loud to yourself before you speak to the other person. That stop is most
                of the work.
              </p>
              <p className="practice-emphasis" style={{ marginTop: "1rem", fontFamily: "IBM Plex Mono, monospace", textTransform: "uppercase", letterSpacing: "0.08em", fontSize: "0.85rem", color: "var(--turmeric)" }}>
                The Pause Is The Practice
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ======== APPENDIX ======== */}
      <section id="appendix" className="section-wrapper">
        <div className="zine-column">
          <FadeIn>
            <div className="chapter-bar">Appendix — Feelings &amp; Needs Vocabulary</div>
            <p style={{ marginTop: "1.5rem", fontSize: "0.8rem", color: "var(--faded)", fontStyle: "italic" }}>
              From Marshall Rosenberg and the <Annotation links={A.cnvc}>Center for Nonviolent Communication</Annotation>. Two columns: what moves through
              you when your needs are met, and when they aren't.
            </p>
            <div className="vocab-grid" style={{ marginTop: "1.5rem" }}>
              <div className="vocab-card">
                <h4>When Needs Are Met</h4>
                <p>
                  Affectionate: compassionate, friendly, loving, open-hearted, tender, warm<br />
                  Engaged: absorbed, alert, curious, enthusiastic, fascinated, interested, stimulated<br />
                  Hopeful: encouraged, expectant, optimistic<br />
                  Confident: empowered, open, proud, safe, secure<br />
                  Grateful: appreciative, moved, thankful, touched<br />
                  Inspired: amazed, awed, wonder<br />
                  Joyful: amused, delighted, glad, happy, pleased, tickled<br />
                  Exhilarated: blissful, ecstatic, elated, radiant, thrilled<br />
                  Peaceful: calm, centered, comfortable, content, fulfilled, quiet, relaxed, relieved, satisfied, serene, still, trusting<br />
                  Refreshed: enlivened, rejuvenated, renewed, rested, restored, revived
                </p>
              </div>
              <div className="vocab-card">
                <h4>When Needs Are Not Met</h4>
                <p>
                  Afraid: apprehensive, dread, frightened, panicked, scared, terrified, wary, worried<br />
                  Angry: enraged, furious, incensed, indignant, irate, livid, outraged, resentful<br />
                  Annoyed: aggravated, disgruntled, exasperated, frustrated, impatient, irritated<br />
                  Aversion: appalled, contempt, disgusted, horrified, hostile, repulsed<br />
                  Confused: ambivalent, baffled, bewildered, hesitant, lost, perplexed, torn<br />
                  Disconnected: alienated, apathetic, bored, detached, indifferent, numb, withdrawn<br />
                  Disquiet: agitated, alarmed, disturbed, rattled, restless, troubled, uneasy, unsettled<br />
                  Embarrassed: ashamed, chagrined, guilty, mortified, self-conscious<br />
                  Fatigue: burnt out, depleted, exhausted, lethargic, tired, weary<br />
                  Pain: anguished, bereaved, devastated, grief, heartbroken, hurt, lonely, miserable<br />
                  Sad: dejected, despondent, disappointed, discouraged, disheartened, forlorn, hopeless, melancholy, unhappy<br />
                  Tense: anxious, cranky, distressed, edgy, frazzled, nervous, overwhelmed, stressed<br />
                  Vulnerable: fragile, guarded, helpless, insecure, sensitive, shaky<br />
                  Yearning: envious, longing, nostalgic, pining, wistful
                </p>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div style={{ marginTop: "2rem" }}>
              <p style={{ fontSize: "0.8rem", color: "var(--faded)", fontStyle: "italic" }}>
                From Marshall Rosenberg and the <Annotation links={A.cnvc}>Center for Nonviolent Communication</Annotation>. These aren't preferences or
                personality traits. They're the shared infrastructure — what every human is running on, all the
                time, whether or not they have language for it.
              </p>
              <div className="vocab-grid" style={{ marginTop: "1rem" }}>
                {[
                  ["CONNECTION", "acceptance, affection, appreciation, belonging, care, closeness, communication, community, companionship, compassion, consideration, consistency, cooperation, empathy, inclusion, intimacy, love, mutuality, nurturing, respect, safety, security, stability, support, to be heard, to be seen, to be known, trust, warmth"],
                  ["PHYSICAL WELLBEING", "air, food, movement, rest, safety, shelter, sexual expression, touch, water"],
                  ["INTEGRATION", "to grieve, to make sense of loss, to process, to mourn what cannot be changed"],
                  ["AUTONOMY", "choice, freedom, independence, self-expression, space, spontaneity"],
                  ["HONESTY", "authenticity, clarity, integrity, presence, transparency"],
                  ["MEANING", "awareness, challenge, competence, contribution, creativity, discovery, effectiveness, growth, hope, learning, mourning, participation, purpose, self-expression, stimulation, to matter, understanding"],
                  ["ACKNOWLEDGMENT", "appreciation, celebration, gratitude, recognition, to be seen, to be valued"],
                  ["PLAY", "humor, joy, lightness, spontaneity"],
                  ["PEACE", "beauty, communion, ease, equanimity, harmony, inspiration, order, space"],
                ].map(([cat, desc]) => (
                  <div key={cat} className="vocab-card">
                    <h4>{cat}</h4>
                    <p>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="callout callout--margin" style={{ marginTop: "2rem" }}>
              <p>
                <strong>A note.</strong> This is the standard CNVC inventory, and it has been critiqued — most
                forcefully by{" "}
                <Annotation links={A.roxy}>Roxy Manning</Annotation> and the liberatory NVC lineages — for what
                it leaves out. Justice. Accountability. Fairness. Reparations. Solidarity. Collective power. The
                need for harm to be named and stopped, not metabolized into someone else's growth process. If you
                are reading this in a body that has been on the wrong end of structural violence, the standard
                list can pull toward depoliticized humanism in a way the prose of this booklet has tried to refuse.
                Add what's missing. The list is a starting point, not a creed.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={200}>
            <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--border)", fontSize: "0.72rem", color: "var(--faded)", lineHeight: 1.8 }}>
              <p>
                <strong style={{ color: "var(--turmeric)" }}>Further reading — annotated links throughout this text</strong>
              </p>
              <p style={{ marginTop: "0.5rem" }}>
                Hover over any underlined term to reveal contextual links: interviews, podcasts, essays, and deep
                dives curated to extend the ideas in each passage. Links open in a new tab.
              </p>
              <p style={{ marginTop: "0.75rem" }}>
                Source &amp; printable PDF:{" "}
                <a
                  href="https://github.com/estiens/small_clearings_nvc_guide"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "var(--turmeric)" }}
                >
                  github.com/estiens/small_clearings_nvc_guide
                </a>
              </p>
              <p style={{ marginTop: "0.5rem" }}>
                CC BY 4.0 · creativecommons.org/licenses/by/4.0
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <StickyFooter />
    </div>
  );
}
