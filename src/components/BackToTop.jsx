import { useEffect, useState } from 'react';
import './BackToTop.css';

function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 700);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      type="button"
      className={`back-to-top ${visible ? 'back-to-top-visible' : ''}`}
      onClick={scrollUp}
      aria-label="Back to top"
    >
      ↑
    </button>
  );
}

export default BackToTop;
