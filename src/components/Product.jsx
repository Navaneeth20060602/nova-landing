import './Product.css';

function Product() {
  return (
    <section className="section product" id="product">
      <div className="container product-row">
        <div className="product-copy">
          <h2>One workspace, not six tabs</h2>
          <p className="product-lead">
            Most teams lose their week switching between a task tracker, a chat app,
            a calendar and a spreadsheet nobody remembers to update. NOVA replaces
            that shuffle with a single board that updates itself.
          </p>
          <ul className="product-list">
            <li>
              <strong>Plan</strong> — turn a rough brief into a scoped project with
              owners and dates in minutes, not a planning meeting.
            </li>
            <li>
              <strong>Collaborate</strong> — comments, files and decisions live next
              to the task they belong to, not buried in a chat thread.
            </li>
            <li>
              <strong>Deliver</strong> — NOVA tracks pace against the deadline and
              tells you exactly where to intervene.
            </li>
          </ul>
        </div>
        <div className="product-visual" role="img" aria-label="NOVA project timeline showing three phases of a product launch with progress bars">
          <div className="product-panel">
            <div className="product-panel-row">
              <span>Discovery</span>
              <div className="product-bar"><div className="product-bar-fill" style={{ width: '100%' }} /></div>
            </div>
            <div className="product-panel-row">
              <span>Build</span>
              <div className="product-bar"><div className="product-bar-fill" style={{ width: '68%' }} /></div>
            </div>
            <div className="product-panel-row">
              <span>Launch</span>
              <div className="product-bar"><div className="product-bar-fill product-bar-fill-muted" style={{ width: '18%' }} /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
