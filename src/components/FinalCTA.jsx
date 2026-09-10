import './FinalCTA.css';

function FinalCTA() {
  return (
    <section className="final-cta">
      <div className="container final-cta-inner">
        <h2>Your team's week, planned before Monday starts.</h2>
        <p>Set up your first project in the next five minutes. No credit card, no sales call.</p>
        <div className="final-cta-actions">
          <a href="#pricing" className="btn btn-accent">Start free</a>
          <a href="#faq" className="btn btn-ghost-dark">Read the FAQ</a>
        </div>
      </div>
    </section>
  );
}

export default FinalCTA;
