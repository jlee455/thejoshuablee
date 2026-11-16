import { useEffect, useRef, useState } from 'react'
import type { FormEvent } from 'react'
export default function SpeakerPlanner() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const feedback = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (status === 'sent' || status === 'error') feedback.current?.focus()
  }, [status])
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    if (status === 'sending') return
    setStatus('sending')
    const data = new FormData(event.currentTarget)
    const body = new URLSearchParams()
    data.forEach((value, key) => body.append(key, String(value)))
    const controller = new AbortController()
    const timeout = window.setTimeout(() => controller.abort(), 20000)
    try {
      const response = await fetch('/__forms.html', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString(), signal: controller.signal })
      if (!response.ok) throw new Error('Submission failed')
      setStatus('sent')
    } catch { setStatus('error') }
    finally { window.clearTimeout(timeout) }
  }
  return <section className="ed-section ed-planner" id="planner" aria-labelledby="planner-title"><div className="ed-wrap ed-split"><div className="ed-planner-intro">
    <p className="ed-kicker">For event organizers</p><h2 className="ed-heading" id="planner-title">Let’s talk about<br/><em>your event.</em></h2>
    <p className="ed-lead">Jennifer coordinates every speaking booking. Share a few details about your event, and she’ll help you explore the fit.</p>
    <a className="ed-planner-contact" href="mailto:assistant@standoutauthority.com"><span>Prefer email? Contact Jennifer</span><strong>assistant@standoutauthority.com ↗</strong></a>
    <p className="ed-small">Still planning? Dates, format, audience size, and budget can be added when you know them.</p>
  </div>{status === 'sent' ? <div className="ed-form-status ed-form-success" role="status" ref={feedback} tabIndex={-1}><p className="ed-kicker">Inquiry submitted</p><h3>Thank you for the introduction.</h3><p>Jennifer will review your event details to discuss availability and fit. A date is only reserved once confirmed with Jennifer.</p><p>For time-sensitive requests, email <a href="mailto:assistant@standoutauthority.com">assistant@standoutauthority.com</a>.</p><a className="ed-link" href="/joshua-b-lee-speaker-kit.pdf" download>Download the speaker kit ↓</a></div> :
  <form className="ed-form" name="speaking-inquiry" method="POST" action="/speaking/thanks/" data-netlify="true" data-netlify-honeypot="bot-field" onSubmit={submit} aria-busy={status === 'sending'} aria-describedby="planner-required">
    <input type="hidden" name="form-name" value="speaking-inquiry"/><input type="hidden" name="subject" value="New speaking inquiry — Joshua B. Lee"/>
    <p hidden><label>Leave this blank<input name="bot-field" tabIndex={-1} autoComplete="off"/></label></p>
    <p id="planner-required" className="ed-small full">Start with the five fields below. Additional event details are optional.</p>
    <label>Your name<input name="name" autoComplete="name" maxLength={150} required/></label>
    <label>Work email<input name="email" type="email" autoComplete="email" autoCapitalize="none" spellCheck={false} maxLength={254} required/></label>
    <label>Event or organization<input name="event" autoComplete="organization" maxLength={250} required/></label>
    <label>City & country, or virtual<input name="location" maxLength={250} placeholder="Austin, US · London, UK · Virtual" required/></label>
    <label className="full">What should your audience leave with?<textarea name="goals" rows={3} maxLength={4000} placeholder="Tell Jennifer who’s in the room and what matters to them." required/></label>
    <details className="ed-form-extra full"><summary>Add event details <span>Optional</span></summary><div className="ed-form-extra-grid">
      <label>Event date<input type="date" name="date"/></label>
      <label>Audience size<input name="audience" inputMode="numeric" maxLength={50}/></label>
      <label>Format<select name="format" defaultValue="Let’s discuss"><option>Let’s discuss</option><option>Keynote</option><option>Team session or workshop</option><option>Panel or interview</option><option>Virtual session</option></select></label>
      <label>Budget range & currency<input name="budget" maxLength={150}/></label>
    </div></details>
    <button className="ed-button full" disabled={status === 'sending'} type="submit">{status === 'sending' ? 'Sending your inquiry…' : 'Send inquiry to Jennifer ↗'}</button>
    <p className="ed-small full">We use these details to respond to your event inquiry. Submitting an inquiry does not reserve a date.</p>
    {status === 'error' && <div className="ed-form-status full" role="alert" ref={feedback} tabIndex={-1}>We couldn’t submit your inquiry. Your details are still here; please try again or email Jennifer at <a href="mailto:assistant@standoutauthority.com">assistant@standoutauthority.com</a>.</div>}
  </form>}</div></section>
}
