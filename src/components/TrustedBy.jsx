import './TrustedBy.css';

const COMPANIES = ['Fernhill', 'Basecamp Studio', 'Lumen & Co', 'Northwind', 'Verity Labs', 'Harbor & Co'];

function TrustedBy() {
  return (
    <section className="trusted">
      <div className="container">
        <p className="trusted-label">Trusted by product teams at</p>
        <ul className="trusted-list">
          {COMPANIES.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TrustedBy;
