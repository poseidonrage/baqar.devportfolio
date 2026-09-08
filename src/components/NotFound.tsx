import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <section
      className="container"
      style={{
        minHeight: '70vh',
        display: 'grid',
        placeItems: 'center',
        textAlign: 'center',
        paddingTop: '8rem',
        paddingBottom: '6rem'
      }}
    >
      <div>
        <p className="font-mono" style={{ opacity: 0.7 }}>404 // route_not_found</p>
        <h1>Page not found</h1>
        <p>The page you requested does not exist or may have moved.</p>
        <p style={{ marginTop: '1.5rem' }}>
          <Link to="/">Return to baqar.dev</Link>
        </p>
      </div>
    </section>
  );
}
