import './Hero.css';

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-row">
        <div className="hero-copy">
          <p className="pill">Now scheduling automatically across time zones</p>
          <h1>
            Build better.<br />
            Work smarter.
          </h1>
          <p className="hero-sub">
            NOVA plans your team's week, clears the busywork off everyone's plate,
            and tells you what's actually at risk — before the deadline does.
          </p>
          <div className="hero-actions">
            <a href="#pricing" className="btn btn-accent">Start free — no card needed</a>
            <a href="#how-it-works" className="btn btn-ghost">See how it works</a>
          </div>
          <p className="hero-note">Free for teams up to 5. Cancel any time.</p>
        </div>

        <div className="hero-visual" role="img" aria-label="NOVA task board showing a sprint in progress, with an AI summary panel highlighting two tasks at risk">
          <div className="hero-card hero-card-board">
            <div className="hero-card-head">
              <span>Sprint 14 · Design system</span>
              <span className="hero-dot" />
            </div>
            <div className="hero-row-item">
              <span className="hero-check hero-check-done">✓</span>
              Component audit
            </div>
            <div className="hero-row-item">
              <span className="hero-check hero-check-done">✓</span>
              Token migration
            </div>
            <div className="hero-row-item hero-row-item-risk">
              <span className="hero-check">!</span>
              Button variants — due tomorrow
            </div>
            <div className="hero-row-item">
              <span className="hero-check">○</span>
              Docs pass
            </div>
          </div>
          <div className="hero-card hero-card-ai">
            <p className="hero-ai-label">NOVA summary</p>
            <p className="hero-ai-text">2 tasks are behind pace. Reassigning "Button variants" to Priya keeps the sprint on track.</p>
            <button type="button" className="btn btn-primary hero-ai-btn">Apply suggestion</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
