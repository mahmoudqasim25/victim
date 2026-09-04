const pageStyle = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  padding: '20px',
  boxSizing: 'border-box',
};

const cardStyle = {
  width: '100%',
  maxWidth: '760px',
  padding: '32px',
  border: '1px solid #d1d5db',
  borderRadius: '12px',
  backgroundColor: '#ffffff',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
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
  color: '#111827',
};

const bodyStyle = {
  margin: 0,
  color: '#4b5563',
  lineHeight: '1.7',
};

const updateItems = [
  'Sample status updates can reassure candidates that their application journey is progressing.',
  'Recruiters can swap in campaign-specific milestones, timelines, or next-step guidance later.',
  'This page intentionally uses placeholder copy so teams can validate layout before publishing live updates.',
];

function HelloWorld() {
  return (
    <div style={pageStyle}>
      <section style={cardStyle}>
        <span style={badgeStyle}>Candidate communication preview</span>
        <h1 style={headingStyle}>Candidate updates and next steps</h1>
        <p style={bodyStyle}>
          This route now previews how recruitment progress updates could be presented across the
          platform, replacing the generic starter scaffold with content that matches the landing
          experience.
        </p>
        <p style={bodyStyle}>
          All milestones, timelines, and messages on this page are sample content for review only.
          Teams should replace them with approved candidate communications before launch.
        </p>
        <div style={{ display: 'grid', gap: '12px' }}>
          {updateItems.map((item) => (
            <article
              key={item}
              style={{
                border: '1px solid #e5e7eb',
                borderRadius: '10px',
                padding: '16px',
                backgroundColor: '#f9fafb',
              }}
            >
              <p style={bodyStyle}>{item}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default HelloWorld;
