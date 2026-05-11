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
  ],
  kathleen: [
    {
      url: "https://www.youtube.com/watch?v=cXRneCHrbT8",
      title: "The Art of Listening | Kathleen Macferran | TEDxRainier",
      desc: "Macferran on the transformative power of deep, empathetic listening.",
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
  ],
  dominicBarter: [
    {
      url: "https://thefearlessheart.org/nonviolent-communication-for-liberation-flow-mobilization-and-emergency/",
      title: "NVC for Liberation — Miki Kashtan",
      desc: "Restorative and prefigurative NVC work in the anarchist mediation lineage.",
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
                for skeptics, cynics, freaks,<br />
                and curious newcomers
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
                That one doesn't end. It just goes underground for a while.
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
                    <th>What's in the body</th>
                    <th>Needs underneath</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Ignored", "lonely, scared, deflated", "mattering, contact"],
                    ["Manipulated", "angry, helpless, tense", "autonomy, clarity, safety"],
                    ["Betrayed", "devastated, furious, disoriented", "trust, consistency, care"],
                    ["Disrespected", "humiliated, small, angry", "dignity, belonging, to be seen"],
                    ["Abandoned", "terrified, bereft, hollow", "connection, consistency, security"],
                    ["Attacked", "scared, tense, raw", "safety, respect, protection"],
                    ["Rejected", "crushed, ashamed, small", "belonging, mattering"],
                    ["Used", "resentful, tired, bitter", "reciprocity, care, to be seen"],
                    ["Dismissed", "stung, frustrated, small", "to be heard, respect, mattering"],
                    ["Controlled", "furious, closed, restless", "autonomy, trust"],
                    ["Judged", "ashamed, small", "acceptance, safety, to be seen"],
                    ["Threatened", "scared, braced, tense", "safety, protection, sovereignty"],
                    ["Taken for granted", "resentful, invisible, tired", "acknowledgment, reciprocity, mattering"],
                    ["Violated", "disgusted, scared, raw", "respect, safety, bodily sovereignty"],
                    ["Blamed", "defensive, tight, small", "fairness, understanding, to be seen"],
                    ["Deceived", "furious, sick, disoriented", "honesty, trust, clarity"],
                    ["Excluded", "lonely, ashamed, cold", "belonging, connection, inclusion"],
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
                The accurate sentence is harder to say. It's also the one the other person can't easily defend
                against; you aren't delivering a verdict for them to answer, you're just reporting. Whether they
                meet the longing or not is a separate question. The bigger thing the sentence does isn't to them
                at all — it's to the speaker. The body that delivers a finding about someone's character sits in
                a different state than the body that names its own hurt out loud.
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
                  ["WELLBEING", "rest, food, movement, shelter, touch, health"],
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
              Using NVC to translate this kind of rage away while you are actively being harmed is the practice
              being weaponized against the part of you trying to keep you alive.
            </p>
            <div className="dingmark">❦</div>
            <p>
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
                Speaking with NVC reduces, in its clinical form, to four moves (OFNR). People who love acronyms
                tend to use them as armor, and this one is no exception. The four moves are scaffolding. The
                scaffolding is supposed to come down once the building stands up.
              </p>
              <div style={{ margin: "2rem 0", padding: "1.25rem", border: "1.5px solid var(--ink)", background: "oklch(0.93 0.012 80)" }}>
                <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "0.8rem", lineHeight: 2 }}>
                  <strong style={{ color: "var(--turmeric)" }}>O</strong>bservation — what a camera would have recorded.<br />
                  <strong style={{ color: "var(--turmeric)" }}>F</strong>eeling — what is in your body, not what they did to you.<br />
                  <strong style={{ color: "var(--turmeric)" }}>N</strong>eed — the universal hunger underneath.<br />
                  <strong style={{ color: "var(--turmeric)" }}>R</strong>equest — concrete enough to say yes or no to. If they can't say no, it was a demand.
                </p>
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
                <strong>Feeling and need.</strong> Feelings live in the body. If the sentence has the other person
                in it, you're not yet at the feeling. The need is universal. Not the version contingent on this
                specific person doing this specific thing. The need beneath <em>I want you to text me back faster</em>{" "}
                is probably contact, mattering, or care. The particular person is the occasion. The hunger
                underneath them is older than they are.
              </p>
            </div>
            <div className="dingmark">∗</div>
            <p>
              <strong>Request, and the thing recovery folks already know.</strong>
            </p>
            <p style={{ marginTop: "1rem" }}>
              A request is something the other person can say no to. If no isn't actually available to them,
              it was a demand the whole time.
            </p>
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
              <em>Nothing true is ever said in anger</em> — a paraphrase of a common workshop trope, not a sentence
              Rosenberg wrote — is the old dominator move with new vocabulary. It performs the same structural
              sleight-of-hand as the is-of-identity: <em>I am calm, therefore I am right; you are angry, therefore
              you are wrong</em> — but now with the moral authority of a nonviolent communication practice behind it.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              <Annotation links={A.tonePolicing}>Tone policing is the name for the move, when it has a name.</Annotation>{" "}
              It doesn't require conscious malice to operate. It works by shifting the entire conversation from
              what is being done to how you are reacting to it. The harm becomes invisible. Your response to the
              harm is what is now on trial.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              NVC assumes a baseline: both bodies in the room have enough safety in this moment, enough sovereignty
              in this conversation, enough self remaining to speak from. Remove that margin and the tool stops
              applying. The tool didn't fail; the situation changed shape.
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
              NVC isn't asking you to stay. <em>I need to leave this conversation</em> is a fully valid request.
              <em> I am not willing to be in this relationship on these terms</em> is a statement of need as
              legitimate as any other in the practice.
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
                six versions of an answer. Most of the practice happens in those gaps — alone, with the version of
                you that gets loud when there is no one watching.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                One thing about the pause that's easy to miss: the inner monologue gets louder and faster when the
                body is{" "}
                <Annotation links={A.polyvagal}>dysregulated</Annotation>, not slower. The internal courtroom runs
                at full volume precisely when you are least equipped to translate anything. Self-NVC is only really
                available to a body that has decided, at least slightly, that it's safe enough to slow down.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                Thoughtful people, the readers of this kind of booklet most of all, run their own version of this
                trap. <em>Let me figure out why I am feeling this</em> becomes the more sophisticated way of saying
                <em> let me not say what I am feeling.</em> The analysis works as a way to stay in the head and out
                of the body, out of the room, out of the request. Therapy and NVC and{" "}
                <Annotation links={A.ifs}>IFS</Annotation> and somatics and astrology and your friend's podcast
                all come pre-installed with permission to keep digging instead of speaking. The dig turns into the
                new performance.
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
            <div style={{ margin: "1.5rem 0", padding: "1rem 1.25rem", borderLeft: "3px solid var(--ink)", background: "oklch(0.93 0.012 80)" }}>
              <p style={{ fontSize: "0.85rem", lineHeight: 2 }}>
                <em style={{ color: "var(--vermillion)" }}>You are such an idiot</em> becomes{" "}
                <em>something in me is mortified, and I am longing for the thing not to have happened.</em><br />
                <em style={{ color: "var(--vermillion)" }}>Why did you say that</em> becomes{" "}
                <em>I am embarrassed, and what I needed in that moment was to feel competent, and I did not.</em><br />
                <em style={{ color: "var(--vermillion)" }}>Pull yourself together</em> becomes{" "}
                <em>something in me is exhausted, and I am longing for a few hours of not having to perform anything.</em>
              </p>
            </div>
            <p>
              This isn't the positive-thinking move. Positive thinking installs a sentence that's untrue for the
              sake of feeling better. The voice here tells you what's actually happening in you, in precise language,
              in the tone you would use with someone you loved.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              <Annotation links={A.sarahPeyton}>Sarah Peyton</Annotation> calls the part of you that learns to do
              this the <em>Resonating Self-Witness.</em> It is a part you are deliberately cultivating, in the same
              way one might cultivate a meditation practice or a dance form — slowly, by repetition, with no
              measurable progress on most days and a different person at the end of a year.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              The inner critic is one part of you among others. Usually a part that learned somewhere young that
              being harsh with yourself first was the only way to head off being harshly punished by someone else.
              The voice you have been mistaking for yourself is, on inspection, a frightened protector running a
              strategy that worked once. It's doing its best. It's wrong about what's currently required.
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
              it can be heard inside the system — not just noticed, but understood in its own terms by the rest of you.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              You don't have to commit to either lineage to use the move. The small portable grammar of feelings
              and needs is most useful as a hinge between bigger traditions, not as a religion in its own right.
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
              sentences are. The dead-eyed therapist demo voice you can hear in any badly-trained role-play is
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
              that no longer makes sense to him, pride that has been bruised — and the need underneath the feeling,
              probably to matter, to be seen as having lived a life that meant something.
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
              Trauma-informed NVC, by now, is its own sub-tradition — with its own teachers and its own corrections
              to the original packaging.{" "}
              <Annotation links={A.sarahPeyton}>Sarah Peyton</Annotation>'s work on the resonating self-witness
              and the brain's response to warm misreading.{" "}
              <Annotation links={A.kathleen}>Kathleen Macferran</Annotation> on the load-bearing constraint that
              a conversation moves at the pace of nervous-system digestion, not the pace of the most articulate
              person in the room.{" "}
              <Annotation links={A.resmaa}>Resmaa Menakem</Annotation> on what bodies inherit and what gets stuck
              in them.{" "}
              <Annotation links={A.roxy}>Roxy Manning</Annotation>,{" "}
              <Annotation links={A.meenadchi}>Edmundo Norte, and Meenadchi</Annotation> on the practice's blind
              spots about race, power, and which bodies the standard packaging assumes.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              NVC as packaged often assumes a body that hasn't been racialized into chronic survival mode. A
              feelings-and-needs script in that context can ask someone to perform emotional disclosure in a
              format shaped by white middle-class norms — in the same moment their anger or numbness is the most
              accurate information in the room.
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
                <Annotation links={A.raw}>Robert Anton Wilson</Annotation> is doing when he calls the verb{" "}
                <em>to be</em> a deity mode of speech — the verb that smuggles in a god's-eye view of what
                something or someone permanently is. Some sentences don't describe the world; they enact something
                in it. They marry. They convict. They bless. They curse.{" "}
                <em>I now pronounce you</em> is not a description of the event. It is the event happening.
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
                than freezing a person into a permanent role is precision, not minimization.
              </p>
              <p style={{ marginTop: "1.2rem" }}>
                This is a discipline of interior clarity — not a rule for how survivors must speak. <em>She is an
                abuser</em>, said as a warning to whoever's next, said as the sentence that finally stopped you
                gaslighting yourself — that sentence is doing work this passage has nothing to say about. The
                politics of warning and the grammar of your own interior run on different rules.
              </p>
            </div>
            <div className="dingmark">∗</div>
            <p>
              That's the working magic. It's structurally adjacent to the move{" "}
              <Annotation links={A.raw}>D. David Bourland Jr.</Annotation> coded as E-Prime — English written
              without <em>is, are, was, were, be, been, being</em> at all, on the theory that purging the verb
              forces the speaker to mark which claims are observation and which are inference.{" "}
              <Annotation links={A.korzybski}>Alfred Korzybski</Annotation> had pointed at the larger problem
              since 1933, calling it the <em>is of identity</em> and arguing it ran from interpersonal conflict
              to nation-state war.{" "}
              <Annotation links={A.rosenberg}>Marshall Rosenberg</Annotation> appears to have arrived at the
              small, lived version of the same problem from a different direction — clinical work, civil-rights
              organizing, the practice of mediating actual fights between actual people. The convergence is
              striking. Someone, eventually, should write the comparative essay.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              The reason this matters is that the language isn't just describing the speaker's interior. It's
              changing it. Saying <em>you are selfish</em> installs a particular state in your nervous system:
              prosecutorial, certain, slightly armored, ready to fight. Saying <em>I am hurt and I am longing
              for partnership</em> installs a different state: vulnerable, located in the body, no longer at war.
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
                — Marshall Rosenberg, <em>Nonviolent Communication: A Language of Life</em>
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
              authority to render anyone else permanent.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              This is why NVC sits next to the anarchist mediation lineages, and why those lineages have been
              doing some of the most interesting NVC work in the world.{" "}
              <Annotation links={A.dominicBarter}>Dominic Barter's Restorative Circles</Annotation>, developed
              in the favelas of Rio, are NVC-rooted and structurally non-state.{" "}
              <Annotation links={A.miki}>Miki Kashtan</Annotation>'s consensus work runs on lines prefigurative
              organizers would recognize on sight.{" "}
              <Annotation links={A.roxy}>Roxy Manning</Annotation>,{" "}
              <Annotation links={A.meenadchi}>Edmundo Norte, and Meenadchi</Annotation> have spent years pointing
              out that NVC's standard packaging often re-installs the dominator culture it was meant to refuse —
              and that the practice has to be retooled to do its actual work in bodies it wasn't originally
              designed for.
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
              <Annotation links={A.buddhismIFS}>Buddhist parts-work</Annotation> makes from a third. NVC
              translates between them with a small, portable grammar.
            </p>
            <p style={{ marginTop: "1.2rem" }}>
              Treat NVC less as a tradition of its own and more as a passage between rooms — between IFS and
              codependence recovery, between somatic trauma work and anarchist mediation, between{" "}
              <Annotation links={A.korzybski}>Korzybski's general semantics</Annotation> and the dharma
              traditions that have been pointing at the same thing for two and a half thousand years. Most of
              its actual value, lived inside, is in this translator role.
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
            </div>
            <div className="dingmark">∗</div>
            <p>
              For some of us, NVC can re-install the patterning in a more spiritualized costume. The over-listener
              who never gets a need on the table. The seminar-trained adult who confuses self-abandonment with
              compassion and starts teaching the confusion to others. The person who learned, somewhere along the
              way, that wanting things gets you punished, and now has been given a beautiful new vocabulary in
              which to keep not-wanting things. If you recognize yourself anywhere in that paragraph: the work,
              for you, is probably less in the listening and more in the asking. Give yourself permission to make
              demands the practice would technically prefer you frame as requests. Sometimes the request can wait.
              The asking cannot.
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
            <div className="pull-quote" style={{ marginTop: "2rem" }}>
              That's all the shift is. The hurt getting faster at finding its words.
            </div>
            <p>
              What earns the practice its keep, beyond the operative fact that it works, is what kind of stance
              toward another person it requires. NVC is one of the few practices currently available to ordinary
              humans that takes seriously the idea that the person across from you has an interior that is real,
              that is theirs, and that isn't yours to manage or correct. The same goes for your interior. You're
              allowed to be in there — in the body, in the present, with your actual needs — and you're allowed,
              if it comes to that, to want things out loud.
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="practice-box" style={{ marginTop: "3rem" }}>
              <p style={{ fontFamily: "IBM Plex Mono, monospace", fontSize: "0.85rem", lineHeight: 1.8 }}>
                <strong>Smallest Possible Practice</strong>
              </p>
              <p style={{ marginTop: "0.75rem", fontSize: "0.85rem", lineHeight: 1.8 }}>
                Next time you notice the sentence <em>"I feel like you…"</em> leave your mouth or your mind, stop.
                Place one hand on your sternum. Ask: <em>What is actually in my body right now?</em> Name one real
                feeling and one need out loud to yourself before you speak to the other person. That stop is most
                of the work.
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
              From Marshall Rosenberg and the Center for Nonviolent Communication. Two columns: what moves through
              you when your needs are met, and when they aren't.
            </p>
            <div className="vocab-grid" style={{ marginTop: "1.5rem" }}>
              <div className="vocab-card">
                <h4>When Needs Are Met</h4>
                <p>
                  Affectionate: compassionate, friendly, loving, open-hearted, tender, warm<br />
                  Engaged: absorbed, alert, curious, enthusiastic, fascinated, interested<br />
                  Hopeful: encouraged, expectant, optimistic<br />
                  Confident: empowered, open, proud, safe, secure<br />
                  Grateful: appreciative, moved, thankful, touched<br />
                  Inspired: amazed, awed, wonder<br />
                  Joyful: amused, delighted, glad, happy, pleased, tickled<br />
                  Exhilarated: blissful, ecstatic, elated, radiant, thrilled<br />
                  Peaceful: calm, centered, comfortable, content, fulfilled, quiet, relaxed, serene<br />
                  Refreshed: enlivened, rejuvenated, renewed, rested, restored, revived
                </p>
              </div>
              <div className="vocab-card">
                <h4>When Needs Are Not Met</h4>
                <p>
                  Afraid: apprehensive, dread, frightened, panicked, scared, terrified, wary<br />
                  Angry: enraged, furious, incensed, indignant, irate, livid, outraged, resentful<br />
                  Annoyed: aggravated, disgruntled, exasperated, frustrated, impatient, irritated<br />
                  Aversion: appalled, contempt, disgusted, horrified, hostile, repulsed<br />
                  Confused: ambivalent, baffled, bewildered, hesitant, lost, perplexed, torn<br />
                  Disconnected: alienated, apathetic, bored, detached, indifferent, numb, withdrawn<br />
                  Disquiet: agitated, alarmed, disturbed, rattled, restless, troubled, uneasy<br />
                  Embarrassed: ashamed, chagrined, guilty, mortified, self-conscious<br />
                  Fatigue: burnt out, depleted, exhausted, lethargic, tired, weary<br />
                  Pain: anguished, bereaved, devastated, grief, heartbroken, hurt, lonely, miserable<br />
                  Sad: dejected, despondent, disappointed, discouraged, disheartened, forlorn, hopeless<br />
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
                From Marshall Rosenberg and the Center for Nonviolent Communication. These aren't preferences or
                personality traits. They're the shared infrastructure — what every human is running on, all the
                time, whether or not they have language for it.
              </p>
              <div className="vocab-grid" style={{ marginTop: "1rem" }}>
                {[
                  ["CONNECTION", "acceptance, affection, appreciation, belonging, care, closeness, communication, community, compassion, consistency, cooperation, empathy, inclusion, intimacy, love, mutuality, nurturing, respect, safety, security, stability, support, to be heard, to be seen, to be known, trust, warmth"],
                  ["PHYSICAL WELLBEING", "air, food, movement, rest, safety, shelter, sexual expression, touch, water"],
                  ["INTEGRATION", "to grieve, to make sense of loss, to process, to mourn what cannot be changed"],
                  ["AUTONOMY", "choice, freedom, independence, self-expression, space, spontaneity"],
                  ["HONESTY", "authenticity, clarity, integrity, presence, transparency"],
                  ["MEANING", "awareness, challenge, competence, contribution, creativity, discovery, effectiveness, growth, hope, learning, participation, purpose, self-expression, stimulation, to matter, understanding"],
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
            <div style={{ marginTop: "2rem", padding: "1.25rem", border: "1.5px solid var(--turmeric)", background: "oklch(0.93 0.012 80)" }}>
              <p style={{ fontSize: "0.82rem", lineHeight: 1.75 }}>
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
