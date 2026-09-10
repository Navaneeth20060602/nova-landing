import { useState } from 'react';
import './FAQ.css';

const FAQS = [
  {
    q: 'Can I import tasks from Trello, Asana or Jira?',
    a: 'Yes. NOVA has a one-time importer for Trello, Asana and Jira that maps boards, tasks and members automatically. Most teams finish the import in under ten minutes.',
  },
  {
    q: 'Does NOVA work for non-technical teams?',
    a: 'Yes — marketing, ops and agency teams make up a large share of NOVA\'s customers. The AI planning features work the same way regardless of the type of work you track.',
  },
  {
    q: 'What happens to my data if I cancel?',
    a: 'Your workspace is kept for 30 days after cancellation so you can export everything. After that window, data is permanently deleted from our servers.',
  },
  {
    q: 'Is there a limit on how many projects I can create?',
    a: 'The Starter plan allows up to 3 active projects. Team and Scale plans include unlimited projects at no extra cost.',
  },
  {
    q: 'How does the AI risk detection actually work?',
    a: 'NOVA compares each task\'s current progress against its historical pace and the time remaining until the deadline. When a task falls outside that expected range, it is flagged with a plain-language reason and a suggested fix.',
  },
  {
    q: 'Can I self-host NOVA?',
    a: 'Self-hosting is available on the Scale plan for teams with strict data residency requirements. Reach out to our team to set it up.',
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex((prev) => (prev === i ? -1 : i));

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <div className="section-head">
          <h2>Questions, answered</h2>
          <p>Can't find what you're looking for? Reach out and a real person will get back to you within a day.</p>
        </div>

        <div className="faq-list">
          {FAQS.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div className={`faq-item ${isOpen ? 'faq-item-open' : ''}`} key={item.q}>
                <h3>
                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                  >
                    {item.q}
                    <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
                  </button>
                </h3>
                <div
                  id={`faq-panel-${i}`}
                  className="faq-answer"
                  role="region"
                  hidden={!isOpen}
                >
                  <p>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default FAQ;
