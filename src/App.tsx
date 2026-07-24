type ItineraryItem = {
  day: string;
  title: string;
  detail: string;
  art: 'mountain' | 'lake' | 'meadow';
};

const itinerary: ItineraryItem[] = [
  { day: 'Day 01 · Urumqi → Tian Shan', title: 'Mountains, markets & a slow arrival', detail: 'Arrival · 2 stops', art: 'mountain' },
  { day: 'Day 02 · Sayram Lake', title: 'The blue hour at Sayram', detail: 'Scenic drive · 3 stops', art: 'lake' },
  { day: 'Day 03 · Ili Valley', title: 'Meadows made for wandering', detail: 'Hike · Local lunch', art: 'meadow' },
];

function Arrow() {
  return <span aria-hidden="true">→</span>;
}

function Brand() {
  return <a className="brand" href="#top" aria-label="Yunyou home"><span className="brand-mark" aria-hidden="true">⌁</span>云游</a>;
}

function Header() {
  return <header className="header">
    <Brand />
    <nav className="nav" aria-label="Main navigation">
      <a href="#how-it-works">How it works</a>
      <a href="#itinerary">Itinerary</a>
    </nav>
    <a className="button button-small" href="#start">Start Planning</a>
  </header>;
}

function ChatPreview() {
  return <div className="chat-preview" aria-label="Example Teams trip planning conversation">
    <div className="chat-header"><span className="teams-icon">T</span><span>Teams · Trip planning</span><span className="chat-more">•••</span></div>
    <div className="message-row"><span className="avatar">J</span><div className="message">Team, can we plan a 7-day Xinjiang escape in October?</div></div>
    <div className="message-row assistant-row"><span className="bot-avatar">⌁</span><div className="draft"><span className="pulse" />Drafting your itinerary…</div></div>
    <div className="trip-card"><div className="trip-card-top"><span>Xinjiang, China <em>新疆 · 中国</em></span><span className="sparkle">✦</span></div><span>7 days · Oct 12–18</span></div>
  </div>;
}

function HeroArt() {
  return <div className="hero-art" aria-hidden="true"><span className="sun" /><span className="cloud cloud-one" /><span className="cloud cloud-two" /><div className="far-mountain" /><div className="near-mountain" /><div className="gold-ridge" /><div className="lake" /><span className="art-label">XINJIANG<br />新疆</span></div>;
}

function ItineraryArt({ type }: { type: ItineraryItem['art'] }) {
  return <div className={`card-art ${type}`} aria-hidden="true"><span className="art-sun" /><span className="art-cloud" /><div className="art-backdrop" /><div className="art-foreground" /><div className="art-water" /></div>;
}

function ItineraryCard({ item }: { item: ItineraryItem }) {
  return <article className="itinerary-card"><ItineraryArt type={item.art} /><div className="card-content"><p className="day-label">{item.day}</p><h3>{item.title}</h3><div className="card-footer"><span>{item.detail}</span><button aria-label={`View details for ${item.day}`}><Arrow /></button></div></div></article>;
}

function ClosingBanner() {
  return <section className="closing" id="start"><div><p className="eyebrow">READY WHEN YOU ARE</p><h2>Your next trip starts with a message.</h2><p>Bring the conversation. 云游 will shape the journey.</p></div><a className="button button-light" href="mailto:hello@example.com?subject=Start%20planning">Start Planning <Arrow /></a></section>;
}

export default function App() {
  return <main id="top"><div className="page"><Header /><section className="hero" id="how-it-works"><div className="hero-copy"><p className="eyebrow">AI TRIP PLANNING, WHERE WORK HAPPENS</p><h1>Plan remarkable trips,<br />right from the conversation.</h1><p className="hero-body">Turn a simple team message into a thoughtful itinerary—routes, stays, local moments, and every detail kept in one place.</p><a className="text-link" href="#itinerary">See how it works <Arrow /></a><ChatPreview /></div><HeroArt /></section><section className="itinerary-section" id="itinerary"><div className="section-heading"><h2>One conversation. A complete journey.</h2><a className="text-link" href="#start">View full itinerary <Arrow /></a></div><div className="itinerary-grid">{itinerary.map((item) => <ItineraryCard item={item} key={item.day} />)}</div></section><ClosingBanner /></div></main>;
}
