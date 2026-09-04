const pageStyle = {
  width: '100%',
  minHeight: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: '24px 16px',
  boxSizing: 'border-box',
  background: 'linear-gradient(180deg, #eff6ff 0%, #ffffff 100%)',
};

const cardStyle = {
  width: '100%',
  maxWidth: '760px',
  padding: 'clamp(24px, 4vw, 40px)',
  border: '1px solid #bfdbfe',
  borderRadius: '20px',
  backgroundColor: '#ffffff',
  boxShadow: '0 18px 40px rgba(29, 78, 216, 0.12)',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
};

const badgeStyle = {
  alignSelf: 'flex-start',
  backgroundColor: '#dbeafe',
  color: '#1d4ed8',
  borderRadius: '999px',
  padding: '8px 14px',
  fontSize: '0.85rem',
  fontWeight: 700,
  letterSpacing: '0.02em',
};

const headingStyle = {
  margin: 0,
  color: '#0f172a',
  fontSize: 'clamp(2rem, 5vw, 3.25rem)',
  lineHeight: 1.1,
};

const bodyStyle = {
  margin: 0,
  color: '#475569',
  lineHeight: '1.7',
  fontSize: '1rem',
};

const featureGridStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  gap: '12px',
};

const featureCardStyle = {
  border: '1px solid #dbeafe',
  borderRadius: '14px',
  padding: '16px',
  backgroundColor: '#f8fbff',
};

const featureTitleStyle = {
  margin: '0 0 8px',
  color: '#1e3a8a',
  fontSize: '1rem',
};

const ctaStyle = {
  alignSelf: 'flex-start',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '44px',
  padding: '10px 18px',
  borderRadius: '999px',
  backgroundColor: '#1d4ed8',
  color: '#ffffff',
  fontWeight: 600,
  textDecoration: 'none',
};

const featureItems = [
  {
    title: 'Clear greeting',
    description: 'A simple, polished message keeps the page easy to review at a glance.',
  },
  {
    title: 'Responsive layout',
    description: 'The card scales comfortably from narrow mobile screens to wider desktop views.',
  },
  {
    title: 'No backend required',
    description: 'Everything on this route is static, so it renders without fetching any data.',
  },
];

/**
 * Renders a standalone Hello World review page using the app's existing recruitment styling cues.
 */
function HelloWorld() {
  return (
    <main style={pageStyle}>
      <section style={cardStyle} aria-labelledby="hello-world-heading">
        <span style={badgeStyle}>Recruitment experience preview</span>
        <header style={{ display: 'grid', gap: '12px' }}>
          <h1 id="hello-world-heading" style={headingStyle}>
            Hello World
          </h1>
          <p style={bodyStyle}>
            Welcome to a focused review page that highlights a clean, accessible Hello World
            experience with the app&apos;s familiar blue-and-white recruitment styling.
          </p>
        </header>

        <div style={featureGridStyle}>
          {featureItems.map((item) => (
            <article key={item.title} style={featureCardStyle}>
              <h2 style={featureTitleStyle}>{item.title}</h2>
              <p style={bodyStyle}>{item.description}</p>
            </article>
          ))}
        </div>

        <p style={bodyStyle}>
          This page is intentionally lightweight and self-contained, making it easy to review the
          route without depending on authentication flows, live services, or placeholder workflow
          content.
        </p>

        <a href="/" style={ctaStyle} aria-label="Return to the home page">
          Return home
        </a>
      </section>
    </main>
  );
}

export default HelloWorld;
