import { useState } from 'react'
import type { FormEvent } from 'react'
export default function SpeakerPlanner() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    const data = new FormData(event.currentTarget)
    const body = new URLSearchParams()
    data.forEach((value, key) => body.append(key, String(value)))
    try {
      const response = await fetch('/__forms.html', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() })
      if (!response.ok) throw new Error('Submission failed')
      setStatus('sent')
    } catch { setStatus('error') }
  }
  return <section className="ed-section" id="planner"><div className="ed-wrap ed-split"><div>
    <p className="ed-kicker">For event organizers</p><h2 className="ed-heading">Bring the right<br/><em>conversation to your room.</em></h2>
    <p className="ed-lead">Jennifer coordinates all speaking bookings. Tell her about your audience and event to discuss availability, fit, and what you want your audience to take away.</p>
    <div className="ed-kit"><a className="ed-link" href="/joshua-b-lee-speaker-kit.pdf" download>Download speaker kit (PDF) ↓</a><a className="ed-link" href="/speaker-kit.txt" download>Copyable bio & topics ↓</a><a className="ed-link" href="/images/joshua-hero.jpg" download>Download portrait ↓</a></div>
    <p className="ed-small">Contact Jennifer directly: <a href="mailto:assistant@standoutauthority.com">assistant@standoutauthority.com</a></p>
  </div>{status === 'sent' ? <div className="ed-form-status" role="status"><h3>Thank you for the introduction.</h3><p>Your event inquiry has been submitted. Jennifer will review your event details to discuss availability and fit. A date is only reserved once confirmed with Jennifer.</p><p>For time-sensitive requests, email <a href="mailto:assistant@standoutauthority.com">assistant@standoutauthority.com</a>.</p></div> :
  <form className="ed-form" name="speaking-inquiry" method="POST" action="/speaking/thanks/" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submit}>
    <input type="hidden" name="form-name" value="speaking-inquiry"/><input type="hidden" name="subject" value="New speaking inquiry — Joshua B. Lee"/>
    <p hidden><label>Leave this blank<input name="bot-field" tabIndex={-1} autoComplete="off"/></label></p>
    <label>Your name<input name="name" autoComplete="name" maxLength={150} required/></label>
    <label>Work email<input name="email" type="email" autoComplete="email" maxLength={254} required/></label>
    <label>Event or organization<input name="event" maxLength={250} required/></label>
    <label>Event date<input type="date" name="date"/></label>
    <label>City & country, or virtual<input name="location" maxLength={250} required/></label>
    <label>Audience size<input name="audience" inputMode="numeric" maxLength={50}/></label>
    <label>Format<select name="format"><option>Keynote</option><option>Team session or workshop</option><option>Panel or interview</option><option>Virtual session</option><option>Let’s discuss</option></select></label>
    <label>Budget range & currency (optional)<input name="budget" maxLength={150}/></label>
    <label className="full">What should your audience leave with?<textarea name="goals" rows={4} maxLength={4000} required/></label>
    <button className="ed-button full" disabled={status === 'sending'} type="submit">{status === 'sending' ? 'Sending your inquiry…' : 'Send speaking inquiry ↗'}</button>
    <p className="ed-small full">We use these details to respond to your event inquiry. Submitting an inquiry does not reserve a date.</p>
    {status === 'error' && <p className="ed-form-status full" role="alert">We couldn’t submit your inquiry. Your details are still here; please try again or email <a href="mailto:assistant@standoutauthority.com">assistant@standoutauthority.com</a>.</p>}
  </form>}</div></section>
}
