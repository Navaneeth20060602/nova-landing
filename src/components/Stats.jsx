import { useEffect, useRef, useState } from 'react';
import './Stats.css';

const STATS = [
  { value: 12000, suffix: '+', label: 'Teams planning with NOVA' },
  { value: 38, suffix: '%', label: 'Average drop in status meetings' },
  { value: 4.9, suffix: '/5', label: 'Average rating from 2,100 reviews', decimals: 1 },
  { value: 6, suffix: 'hrs', label: 'Saved per person, per week' },
];

function useCountUp(target, active, decimals = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let frame;
    const duration = 1200;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(target * eased);
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString();
}

function StatItem({ stat, active }) {
  const display = useCountUp(stat.value, active, stat.decimals);
  return (
    <div className="stat">
      <p className="stat-value">{display}{stat.suffix}</p>
      <p className="stat-label">{stat.label}</p>
    </div>
  );
}

function Stats() {
  const [active, setActive] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="stats" ref={ref}>
      <div className="container stats-grid">
        {STATS.map((stat) => (
          <StatItem stat={stat} active={active} key={stat.label} />
        ))}
      </div>
    </section>
  );
}

export default Stats;
