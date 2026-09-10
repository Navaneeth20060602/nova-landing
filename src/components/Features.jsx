import './Features.css';

const FEATURES = [
  {
    title: 'Smart task routing',
    text: 'NOVA reads workload, skills and deadlines to suggest who should pick up the next task — you approve with one click.',
  },
  {
    title: 'Automatic status rollups',
    text: 'Every board updates a weekly summary on its own, so nobody has to write a status report by hand again.',
  },
  {
    title: 'Meeting-free standups',
    text: 'Team members post async updates that NOVA turns into a single digest, delivered before your first meeting.',
  },
  {
    title: 'Risk detection',
    text: 'NOVA flags tasks that are falling behind pace days before the deadline, with a reason and a suggested fix.',
  },
  {
    title: 'Cross-team dependencies',
    text: 'See exactly which tasks are blocking which teams, and get notified the moment a blocker clears.',
  },
  {
    title: 'One-click integrations',
    text: 'Connect Slack, GitHub, Figma and your calendar in minutes — no engineering time required.',
  },
];

function Features() {
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section-head">
          <h2>Everything a team needs, minus the busywork</h2>
          <p>NOVA doesn't just track work — it actively moves it forward, so your team spends time building instead of updating tickets.</p>
        </div>

        <div className="feature-grid">
          {FEATURES.map((f) => (
            <div className="feature-card" key={f.title}>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
