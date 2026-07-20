import { useState } from 'react'

type Exercise = { icon: string; title: string; description: string; duration: string; category: string; tone: string }

const exercises: Exercise[] = [
  { icon: '□', title: 'Box breathing', description: 'Follow a steady rhythm to settle your nervous system.', duration: '2 min', category: 'Breathing', tone: 'coral' },
  { icon: '◎', title: '5–4–3–2–1 grounding', description: 'Reconnect with the room around you through your senses.', duration: '3 min', category: 'Grounding', tone: 'yellow' },
  { icon: '⌁', title: 'Quiet body scan', description: 'Release tension gently, from your forehead to your toes.', duration: '5 min', category: 'Audio', tone: 'mint' },
]

function Arrow() { return <span aria-hidden="true">→</span> }

export default function App() {
  const [mood, setMood] = useState('Okay')
  const [menuOpen, setMenuOpen] = useState(false)
  const [message, setMessage] = useState('')

  const beginCheckIn = () => document.querySelector('#check-in')?.scrollIntoView({ behavior: 'smooth' })
  const continueCheckIn = () => setMessage(`Thanks for checking in. Feeling ${mood.toLowerCase()} is welcome here.`)

  return <div className="page">
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Mindful Haven home"><span className="brand-mark" aria-hidden="true">✦</span> Mindful Haven</a>
      <button className="menu-button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen(!menuOpen)}>Menu</button>
      <nav id="site-nav" className={menuOpen ? 'open' : ''} aria-label="Primary navigation">
        <a href="#check-in">Check in</a><a href="#exercises">Exercises</a><a href="#community">Community</a><a href="#resources">Resources</a>
        <a href="#sign-in">Sign in</a><button className="nav-cta" onClick={beginCheckIn}>Start check-in</button>
      </nav>
    </header>

    <main id="top">
      <section className="hero shell" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">A gentler moment starts here</p>
          <h1 id="hero-title">You don’t have to carry it all today.</h1>
          <p className="intro">Take one small step toward feeling steadier. Check in with yourself, try a calming exercise, or simply stay awhile.</p>
          <div className="hero-actions"><button className="button primary" onClick={beginCheckIn}>Check in with yourself <Arrow /></button><a className="text-link" href="#exercises">Try a 2-min reset <Arrow /></a></div>
          <p className="privacy"><span aria-hidden="true">⌾</span><span><strong>Private by default</strong><br />Your check-ins stay yours.</span></p>
        </div>
        <div className="breathing-art" aria-label="Decorative illustration of a calm landscape" role="img">
          <span className="sun" /><span className="cloud cloud-one" /><span className="cloud cloud-two" /><span className="hill hill-back" /><span className="hill hill-front" /><span className="flower flower-one">✦</span><span className="flower flower-two">✦</span>
          <p>Breathe in <i>·</i> Breathe out</p>
        </div>
      </section>

      <section className="check-in" id="check-in" aria-labelledby="check-title"><div className="shell check-content">
        <p className="eyebrow">Today’s check-in</p><h2 id="check-title">How are you feeling right now?</h2><p>No need to explain. Just choose what feels closest.</p>
        <div className="mood-options" role="radiogroup" aria-label="Choose your current mood">
          {['Very low', 'Low', 'Okay', 'Good', 'Bright'].map((option, index) => <button key={option} role="radio" aria-checked={mood === option} className={`mood mood-${index} ${mood === option ? 'selected' : ''}`} onClick={() => setMood(option)}><span aria-hidden="true">{['☁', '◒', '●', '☼', '✦'][index]}</span>{option}</button>)}
        </div>
        <button className="button primary continue" onClick={continueCheckIn}>Continue <Arrow /></button><p className="small-note">Takes about 30 seconds</p>{message && <p className="status" role="status">{message}</p>}
      </div></section>

      <section className="section shell" id="exercises" aria-labelledby="exercise-title"><div className="section-heading"><div><p className="eyebrow">Small tools for hard moments</p><h2 id="exercise-title">Find a little room to breathe.</h2><p>Choose what your mind and body need. Each practice is short, guided, and easy to leave at any time.</p></div><a className="text-link" href="#all-exercises">View all exercises <Arrow /></a></div>
        <div className="exercise-grid">{exercises.map(({ icon, title, description, duration, category, tone }) => <article className={`exercise-card ${tone}`} key={title}><div className="exercise-icon" aria-hidden="true">{icon}</div><h3>{title}</h3><p>{description}</p><div className="card-footer"><span>{duration} <i>·</i> {category}</span><button aria-label={`Begin ${title}`}>Begin <Arrow /></button></div></article>)}</div>
      </section>

      <section className="community" id="community" aria-labelledby="community-title"><div className="shell community-grid"><div><p className="eyebrow">You are not alone</p><h2 id="community-title">Some days are heavy. We can hold hope together.</h2><p>Read small notes from people who understand, or leave a kind word for someone who may need it today.</p><a className="button light" href="#community-notes">Visit the community <Arrow /></a></div><figure className="quote-card"><span className="quote-mark" aria-hidden="true">“</span><blockquote>I didn’t fix everything today. I drank water, opened the curtains, and answered one message. That was enough.</blockquote><figcaption><span>Shared anonymously</span><span>♡ 184 people felt this</span></figcaption></figure></div></section>

      <section className="support shell" id="resources" aria-labelledby="support-title"><div><h2 id="support-title">Need more support right now?</h2><p>You deserve real care. Find crisis resources and professional support in your area.</p></div><a className="button support-button" href="#support-resources">View support resources <Arrow /></a></section>
    </main>

    <footer><div className="shell footer-grid"><div><a className="brand" href="#top"><span className="brand-mark" aria-hidden="true">✦</span> Mindful Haven</a><p>A quiet place to check in, breathe, and feel less alone.</p></div><nav aria-label="Footer navigation"><a href="#privacy">Privacy</a><a href="#accessibility">Accessibility</a><a href="#community-care">Community care</a><a href="#contact">Contact</a></nav></div><div className="shell footer-bottom">© 2026 Mindful Haven. This space is not a substitute for professional care.</div></footer>
  </div>
}
