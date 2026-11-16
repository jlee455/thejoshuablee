import { speakingFaqs } from '../data/speakingFaqs'
import SpeakerPlanner from '../components/SpeakerPlanner'
import { QuoteExcerpt } from '../components/Editorial'
import { keynotes, brand } from '../data/brand'
import { uniqueArticles } from '../data/reading'
export default function Speaking(){return <>
      <section className="ed-speaker-hero">
        <div className="ed-wrap ed-speaker-opening">
          <div className="ed-speaker-intro">
            <p className="ed-kicker">Joshua B. Lee / Keynote speaker</p>
            <h1 className="ed-title">Move the room.<br/><em>Make it human.</em></h1>
            <p className="ed-lead">I help audiences understand what it takes to earn trust, build authority, and lead with humanity as AI changes how we work. Every keynote connects that conversation to the people in your room and what they need to do next.</p>
            <div className="ed-actions"><a className="ed-button light" href="#planner">Check speaking availability <span aria-hidden="true">↗</span></a><a className="ed-link" href="#reel">Watch Joshua speak <span aria-hidden="true">▷</span></a></div>
            <a className="ed-link ed-speaker-kit-link" href="/joshua-b-lee-speaker-kit.pdf" download>Download the speaker kit (PDF) ↓</a>
            <p className="ed-speaker-location">Based in Austin, Texas · In-person and virtual inquiries worldwide</p>
          </div>
          <figure className="ed-speaker-hero-photo"><img src="/images/joshua-hcl-raised-hand.jpg" alt="Joshua B. Lee speaking into a microphone with his hand raised at High Capacity Leaders" width="826" height="1234" fetchPriority="high"/><figcaption>In the room at High Capacity Leaders.</figcaption></figure>
        </div>
      </section>

      <section id="reel" className="ed-section"><div className="ed-wrap"><div className="ed-section-top"><div><p className="ed-kicker">See Joshua in the room</p><h2 className="ed-heading">Watch a short clip.</h2></div><a className="ed-link" href="#planner">Discuss your event ↗</a></div><video className="ed-reel" controls playsInline preload="none" poster="/video/sizzle-poster.webp" aria-label="Joshua B. Lee speaking, short clip"><source src="/video/speaking-clip-give-it-to-ya.mp4" type="video/mp4"/></video><p className="ed-small">17 seconds of stage moments, set to my walk-up track, “Give It to Ya.” Press play for sound.</p><details className="ed-clip-description"><summary>Read a description of the clip</summary><p>A montage shows Joshua holding a microphone, addressing audiences on stage, and speaking in a seated conversation. The on-screen messages include “AI is already answering,” “Will it know to say your name?”, “Humanity earns trust,” and “Clear enough for AI to find. Credible enough for buyers to choose.” The closing card identifies Joshua as founder of StandOut Authority and co-creator of YOUmanize, with the invitation “Be the answer.”</p></details></div></section>

<section className="ed-section world-speaking-proof"><div className="ed-wrap"><p className="ed-kicker">From people in the room</p><div className="world-quote-grid"><QuoteExcerpt name="Jane Lehman" text="He gave clear steps we could implement immediately!"/><QuoteExcerpt name="Stu Weintraub" text="he shared the key aspects to follow in order to build relationships"/></div><div className="world-event-list"><span>Selected stages & communities</span><span>High Capacity Leaders</span><span>DigitalMarketer</span><span>Social Media Week Austin</span><span>Maverick1000</span></div><p className="ed-small">Explore <a href="/evidence/">linked appearances and publications</a>, <a href="/recommendations/">named recommendations</a>, and <a href="/insights/">{uniqueArticles.length} articles in the writing archive</a>.</p></div></section>
<section className="ed-section" id="topics"><div className="ed-wrap"><p className="ed-kicker">Keynote topics</p><h2 className="ed-heading">A conversation built<br/><em>for your people.</em></h2><div className="ed-offers">{keynotes.map((k,i)=><article className="ed-offer" key={k.title}><span className="ed-number">0{i+1} / KEYNOTE</span><h3>{k.title}</h3><p>{k.text}</p><p className="world-outcome"><strong>Your audience takeaway</strong><br/>{k.outcome}</p><p className="ed-small">Best for: {k.audience}</p><a className="ed-link" href="#planner">Discuss this session ↗</a></article>)}</div></div></section>
      <section className="ed-section ed-room-story" id="room">
        <div className="ed-wrap">
          <div className="ed-section-top"><div><p className="ed-kicker">The experience</p><h2 className="ed-heading">Ideas that land.<br/><em>A conversation that stays.</em></h2></div><p className="ed-copy ed-room-summary">Your audience brings real questions. I bring an entrepreneur's experience and a human perspective on how we lead, build trust, and show up for each other.</p></div>
          <figure className="ed-room-wide"><img src="/images/joshua-hcl-onstage.jpg" alt="Joshua speaking at High Capacity Leaders with event attendees behind him" width="1854" height="1232" loading="lazy"/><figcaption className="ed-caption">Joshua B. Lee at High Capacity Leaders.</figcaption></figure>
          <div className="ed-room-details">
            <figure className="ed-room-portrait"><img src="/images/joshua-hcl-conversation.jpg" alt="Joshua holding a microphone and addressing the room at High Capacity Leaders" width="824" height="1234" loading="lazy"/></figure>
            <div className="ed-room-takeaways"><p className="ed-kicker">What we can build your session around</p><h3 className="ed-heading">Something to think about.<br/><em>Something to do next.</em></h3>
              <ul><li><strong>Make expertise easier to understand.</strong><span>Connect what your people know with how they communicate it.</span></li><li><strong>Keep people at the center of AI.</strong><span>Explore what trust, judgment, and human connection mean for your team.</span></li><li><strong>Turn visibility into relationships.</strong><span>Rethink how your leaders show up on LinkedIn and in the conversations that matter.</span></li></ul>
              <a className="ed-link" href="#planner">Tell us what your audience needs ↗</a>
            </div>
          </div>
          <figure className="ed-room-wide ed-room-audience"><img src="/images/joshua-stage-digitalmarketer.webp" alt="Joshua speaking at a DigitalMarketer event" width="1852" height="1236" loading="lazy"/><figcaption className="ed-caption">In the room at DigitalMarketer.</figcaption></figure>
        </div>
      </section>


<SpeakerPlanner/>
      <section className="ed-section ed-speaker-resources" id="media-kit"><div className="ed-wrap ed-split">
        <div><p className="ed-kicker">For your event team</p><h2 className="ed-heading">The story.<br/><em>The details. The entrance.</em></h2><p className="ed-copy">Everything to start the conversation: Joshua’s bio, keynote themes, event photography, session formats, and booking details in one speaker kit. All bookings are coordinated by Jennifer at assistant@standoutauthority.com.</p><div className="ed-kit"><a className="ed-button" href="/joshua-b-lee-speaker-kit.pdf" download>Download speaker kit · PDF ↓</a><a className="ed-link" href="/images/joshua-hero.jpg" download>Download portrait ↓</a><a className="ed-link" href="/speaker-kit.txt" download>Copyable bio & topics ↓</a></div></div>
        <div className="ed-walk-up" id="walk-up"><p className="ed-kicker">The walk-up track</p><h3>Give It to Ya</h3><p className="ed-copy">Joshua’s choice for taking the stage. Press play for a preview of the entrance.</p><audio controls preload="none" aria-label="Give It to Ya, Joshua B. Lee’s walk-up track"><source src="/audio/joshua-walk-up-give-it-to-ya.mp3" type="audio/mpeg"/><a href="/audio/joshua-walk-up-give-it-to-ya.mp3">Download the walk-up track</a></audio><div className="ed-track-footer"><span>1:40 · MP3</span><a className="ed-link" href="/audio/joshua-walk-up-give-it-to-ya.mp3" download>Download track ↓</a></div><p className="ed-small">For event teams: coordinate the start cue and fade with Jennifer before the event.</p></div>
      </div></section>

<section className="ed-section"><div className="ed-wrap world-prose"><p className="ed-kicker">For introductions</p><h2 className="ed-heading">Meet <em>Joshua B. Lee.</em></h2><p>{brand.bio}</p><a className="ed-link" href="/speaker-kit.txt" download>Download copyable biography ↓</a></div></section>
      <section className="ed-section" id="planner-questions"><div className="ed-wrap"><p className="ed-kicker">Before you book</p><h2 className="ed-heading">Answers for <em>event organizers.</em></h2><div className="ed-faq">{speakingFaqs.map(f=><details key={f.question}><summary>{f.question}</summary><p>{f.answer}</p></details>)}</div></div></section>      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'VideoObject',
            '@id': 'https://joshuablee.com/speaking/#reel',
            name: 'Joshua B. Lee — Short Speaking Clip',
            description:
              'Joshua B. Lee speaking on stage. The reel opens on "AI is already answering", moves through 25+ years in digital marketing, lands on "Humanity earns trust", and closes on "Be the answer." Joshua is the founder of StandOut Authority and co-creator of YOUmanize.',
            thumbnailUrl: 'https://joshuablee.com/video/sizzle-poster.webp',
            contentUrl: 'https://joshuablee.com/video/speaking-clip-give-it-to-ya.mp4',
            uploadDate: '2026-08-02T00:00:00-05:00',
            duration: 'PT17S',
            inLanguage: 'en-US',
            isFamilyFriendly: true,
            creator: { '@type': 'Person', '@id': 'https://joshuablee.com/#person' },
            about: { '@id': 'https://joshuablee.com/#person' },
          }),
        }}
      />

</>}
