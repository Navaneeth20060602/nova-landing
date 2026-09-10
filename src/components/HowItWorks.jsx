import './HowItWorks.css';

const STEPS = [
  {
    title: 'Connect your tools',
    text: 'Link Slack, GitHub, Figma and your calendar. NOVA reads context from where your team already works.',
  },
  {
    title: 'Drop in a project brief',
    text: 'Paste a brief or a goal. NOVA breaks it into tasks, estimates effort and proposes owners.',
  },
  {
    title: 'Adjust and approve',
    text: 'Review the plan, reassign anything that does not fit, and confirm the sprint in one screen.',
  },
  {
    title: 'Let NOVA run the week',
    text: 'Standups, status rollups and risk alerts happen automatically — you step in only when it matters.',
  },
];

function HowItWorks() {
  return (
    <section className="section" id="how-it-works">
      <div className="container">
        <div className="section-head">
          <h2>From brief to shipped, in four steps</h2>
          <p>This is the actual sequence a new project follows inside NOVA — no hidden setup, no separate onboarding call.</p>
        </div>

        <ol className="steps">
          {STEPS.map((step, i) => (
            <li className="step" key={step.title}>
              <span className="step-num">{i + 1}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default HowItWorks;
