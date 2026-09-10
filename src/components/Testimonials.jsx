import { useState } from 'react';
import './Testimonials.css';

const TESTIMONIALS = [
  {
    quote: "We cut our Monday status meeting entirely. NOVA's digest tells us more than that meeting ever did, and it's ready before anyone's even at their desk.",
    name: 'Ritu Sharma',
    role: 'Head of Product, Fernhill',
  },
  {
    quote: 'The risk alerts caught a slipping task four days before our old process would have noticed. That alone paid for a year of the subscription.',
    name: 'Marcus Webb',
    role: 'Engineering Manager, Northwind',
  },
  {
    quote: 'Every client now has a board that actually reflects reality, instead of a spreadsheet three people forgot to update.',
    name: 'Aiko Tanaka',
    role: 'Studio Director, Lumen & Co',
  },
  {
    quote: 'Onboarding took an afternoon. Two weeks later nobody on the team remembered how we managed projects before this.',
    name: 'Daniel Osei',
    role: 'COO, Verity Labs',
  },
];

function Testimonials() {
  const [index, setIndex] = useState(0);

  const go = (dir) => {
    setIndex((prev) => (prev + dir + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const active = TESTIMONIALS[index];

  return (
    <section className="section testimonials" aria-roledescription="carousel" aria-label="Customer testimonials">
      <div className="container">
        <div className="section-head">
          <h2>Teams that stopped managing their tools and started managing their work</h2>
        </div>

        <div className="testimonial-card" aria-live="polite" aria-atomic="true">
          <p className="testimonial-quote">&ldquo;{active.quote}&rdquo;</p>
          <div className="testimonial-author">
            <div className="testimonial-avatar" aria-hidden="true">{active.name.charAt(0)}</div>
            <div>
              <p className="testimonial-name">{active.name}</p>
              <p className="testimonial-role">{active.role}</p>
            </div>
          </div>
        </div>

        <div className="testimonial-controls">
          <button type="button" onClick={() => go(-1)} aria-label="Previous testimonial" className="testimonial-arrow">‹</button>
          <div className="testimonial-dots">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.name}
                type="button"
                className={`testimonial-dot ${i === index ? 'testimonial-dot-active' : ''}`}
                aria-label={`Show testimonial from ${t.name}`}
                aria-current={i === index}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <button type="button" onClick={() => go(1)} aria-label="Next testimonial" className="testimonial-arrow">›</button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
