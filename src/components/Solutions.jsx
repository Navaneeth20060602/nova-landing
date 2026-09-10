import './Solutions.css';

const SOLUTIONS = [
  {
    title: 'Product & engineering',
    text: 'Turn a roadmap into sprints automatically, and catch scope creep before it slips a release.',
  },
  {
    title: 'Marketing teams',
    text: 'Coordinate campaigns across channels with shared timelines and one approval flow.',
  },
  {
    title: 'Agencies',
    text: 'Run every client project on its own board while keeping capacity visible across the whole studio.',
  },
  {
    title: 'Operations',
    text: 'Standardize recurring processes into templates so nothing depends on one person remembering.',
  },
];

function Solutions() {
  return (
    <section className="section" id="solutions">
      <div className="container">
        <div className="section-head">
          <h2>Built for how different teams actually work</h2>
          <p>The board adapts to the team, not the other way around.</p>
        </div>

        <div className="solutions-grid">
          {SOLUTIONS.map((s) => (
            <div className="solution-card" key={s.title}>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
              <a href="#pricing" className="solution-link">See how it fits</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Solutions;
