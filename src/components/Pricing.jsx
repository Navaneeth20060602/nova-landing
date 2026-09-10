import { useState } from 'react';
import './Pricing.css';

const PLANS = [
  {
    name: 'Starter',
    monthly: 0,
    annual: 0,
    desc: 'For small teams trying NOVA out.',
    features: ['Up to 5 members', '3 active projects', 'Basic task board', 'Email support'],
  },
  {
    name: 'Team',
    monthly: 12,
    annual: 9,
    desc: 'For teams shipping every week.',
    features: ['Up to 25 members', 'Unlimited projects', 'AI risk detection', 'Slack & GitHub integrations', 'Priority support'],
    highlighted: true,
  },
  {
    name: 'Scale',
    monthly: 24,
    annual: 19,
    desc: 'For growing orgs with multiple teams.',
    features: ['Unlimited members', 'Advanced permissions', 'Custom workflows', 'Dedicated onboarding', 'SSO & audit logs'],
  },
];

function Pricing() {
  const [annual, setAnnual] = useState(true);

  return (
    <section className="section" id="pricing">
      <div className="container">
        <div className="section-head">
          <h2>Simple pricing that scales with your team</h2>
          <p>Start free. Upgrade when your team outgrows it — no sales call required.</p>
        </div>

        <div className="pricing-toggle" role="group" aria-label="Billing period">
          <button
            type="button"
            className={!annual ? 'pricing-toggle-active' : ''}
            onClick={() => setAnnual(false)}
            aria-pressed={!annual}
          >
            Monthly
          </button>
          <button
            type="button"
            className={annual ? 'pricing-toggle-active' : ''}
            onClick={() => setAnnual(true)}
            aria-pressed={annual}
          >
            Annual <span className="pricing-toggle-save">Save 25%</span>
          </button>
        </div>

        <div className="pricing-grid">
          {PLANS.map((plan) => {
            const price = annual ? plan.annual : plan.monthly;
            return (
              <div className={`pricing-card ${plan.highlighted ? 'pricing-card-highlighted' : ''}`} key={plan.name}>
                {plan.highlighted && <span className="pricing-badge">Most popular</span>}
                <h3>{plan.name}</h3>
                <p className="pricing-desc">{plan.desc}</p>
                <p className="pricing-price">
                  <span className="pricing-amount">${price}</span>
                  <span className="pricing-period">/ user / mo</span>
                </p>
                <ul className="pricing-features">
                  {plan.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
                <a
                  href="#top"
                  className={`btn ${plan.highlighted ? 'btn-accent' : 'btn-ghost'} pricing-cta`}
                >
                  {price === 0 ? 'Start free' : 'Start free trial'}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
