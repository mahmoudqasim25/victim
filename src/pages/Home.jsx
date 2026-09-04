import { Link } from 'react-router-dom';

const heroHighlights = [
  'Sample-only recruitment messaging that can be replaced with live campaign copy later.',
  'A guided candidate journey from discovery to sign-up and follow-up.',
  'Modular sections designed for quick updates by hiring, marketing, or operations teams.',
];

const sampleStats = [
  {
    value: '24 roles',
    label: 'Demo openings across operations, technology, and support functions.',
  },
  {
    value: '3 steps',
    label: 'Example application journey from profile creation to recruiter follow-up.',
  },
  {
    value: '48 hrs',
    label: 'Placeholder response target shown for layout demonstration only.',
  },
];

const processSteps = [
  {
    title: 'Create your profile',
    description:
      'Start the recruitment journey by sharing your experience, interests, and preferred work style through the existing sign-up flow.',
  },
  {
    title: 'Explore sample pathways',
    description:
      'Review placeholder role themes and hiring priorities that show how future campaigns can be organized without implying live vacancies.',
  },
  {
    title: 'Meet our hiring partners',
    description:
      'Browse the partner showcase to understand the employers, teams, and collaboration models featured in the recruitment experience.',
  },
  {
    title: 'Stay connected',
    description:
      'Use the contact route for questions, updates, or recruiting conversations while the platform evolves.',
  },
];

const featuredTracks = [
  {
    title: 'Customer operations',
    description:
      'Demo content for high-volume hiring campaigns, onboarding support, and service delivery teams.',
  },
  {
    title: 'Digital and data',
    description:
      'Placeholder messaging for analysts, engineers, and transformation specialists in future-ready programs.',
  },
  {
    title: 'Leadership and enablement',
    description:
      'Sample positioning for team leads, trainers, and workforce planning roles that support growth.',
  },
];

const sectionStyle = {
  backgroundColor: '#ffffff',
  border: '1px solid #dbe4f0',
  borderRadius: '24px',
  boxShadow: '0 18px 40px rgba(15, 23, 42, 0.08)',
  padding: '32px',
};

const cardStyle = {
  backgroundColor: '#f8fbff',
  border: '1px solid #dbe4f0',
  borderRadius: '20px',
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
};

function Home() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(180deg, #f4f8ff 0%, #eef4ff 35%, #ffffff 100%)',
        padding: '32px 20px 64px',
      }}
    >
      <div
        style={{
          maxWidth: '1120px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <section
          style={{
            ...sectionStyle,
            padding: '40px 32px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
            alignItems: 'center',
            background:
              'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(255, 255, 255, 0.96) 55%, rgba(14, 165, 233, 0.08) 100%)',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            <span
              style={{
                alignSelf: 'flex-start',
                backgroundColor: '#dbeafe',
                color: '#1d4ed8',
                borderRadius: '999px',
                padding: '8px 14px',
                fontSize: '0.85rem',
                fontWeight: 700,
                letterSpacing: '0.02em',
              }}
            >
              Recruitment landing page demo
            </span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <h1
                style={{
                  margin: 0,
                  fontSize: 'clamp(2.2rem, 5vw, 4rem)',
                  lineHeight: 1.05,
                  color: '#0f172a',
                }}
              >
                Help candidates discover FlairsTech and take the next step with confidence.
              </h1>
              <p
                style={{
                  margin: 0,
                  fontSize: '1.05rem',
                  lineHeight: 1.7,
                  color: '#334155',
                  maxWidth: '640px',
                }}
              >
                This sample home page introduces the recruitment platform, explains the journey in
                plain language, and guides visitors toward profile creation, hiring partner
                discovery, or recruiter contact. All copy, stats, and highlights below are
                placeholder content for demonstration.
              </p>
            </div>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '12px',
              }}
            >
              <Link
                to="/signup"
                style={{
                  textDecoration: 'none',
                  backgroundColor: '#2563eb',
                  color: '#ffffff',
                  padding: '14px 22px',
                  borderRadius: '999px',
                  fontWeight: 700,
                  boxShadow: '0 12px 24px rgba(37, 99, 235, 0.25)',
                }}
              >
                Start your application
              </Link>
              <Link
                to="/partners"
                style={{
                  textDecoration: 'none',
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  padding: '14px 22px',
                  borderRadius: '999px',
                  fontWeight: 700,
                  border: '1px solid #cbd5e1',
                }}
              >
                Explore hiring partners
              </Link>
              <Link
                to="/contact-us"
                style={{
                  textDecoration: 'none',
                  backgroundColor: '#ffffff',
                  color: '#0f172a',
                  padding: '14px 22px',
                  borderRadius: '999px',
                  fontWeight: 700,
                  border: '1px solid #cbd5e1',
                }}
              >
                Contact recruitment team
              </Link>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gap: '14px',
            }}
          >
            {heroHighlights.map((item) => (
              <div key={item} style={cardStyle}>
                <span style={{ color: '#2563eb', fontWeight: 700 }}>Why this page exists</span>
                <p style={{ margin: 0, color: '#334155', lineHeight: 1.6 }}>{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={sectionStyle}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginBottom: '24px',
            }}
          >
            <h2 style={{ margin: 0, fontSize: '1.8rem', color: '#0f172a' }}>
              Sample recruitment highlights
            </h2>
            <p style={{ margin: 0, color: '#475569', lineHeight: 1.7 }}>
              These figures are illustrative placeholders only, included to show how campaign stats
              or proof points can be presented on the landing page.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
            }}
          >
            {sampleStats.map((stat) => (
              <div key={stat.value} style={cardStyle}>
                <strong style={{ fontSize: '2rem', color: '#0f172a' }}>{stat.value}</strong>
                <p style={{ margin: 0, color: '#475569', lineHeight: 1.6 }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={sectionStyle}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
            }}
          >
            {processSteps.map((step, index) => (
              <div key={step.title} style={cardStyle}>
                <span style={{ color: '#2563eb', fontWeight: 700 }}>Step {index + 1}</span>
                <h2 style={{ margin: 0, fontSize: '1.25rem', color: '#0f172a' }}>{step.title}</h2>
                <p style={{ margin: 0, color: '#475569', lineHeight: 1.7 }}>{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section style={sectionStyle}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              marginBottom: '24px',
            }}
          >
            <h2 style={{ margin: 0, fontSize: '1.8rem', color: '#0f172a' }}>
              Featured hiring tracks
            </h2>
            <p style={{ margin: 0, color: '#475569', lineHeight: 1.7 }}>
              Modular content blocks like these make it easy to add, remove, or reorder future
              recruitment themes without redesigning the page.
            </p>
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '16px',
            }}
          >
            {featuredTracks.map((track) => (
              <div key={track.title} style={cardStyle}>
                <h3 style={{ margin: 0, fontSize: '1.2rem', color: '#0f172a' }}>{track.title}</h3>
                <p style={{ margin: 0, color: '#475569', lineHeight: 1.7 }}>{track.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section
          style={{
            ...sectionStyle,
            background:
              'linear-gradient(135deg, rgba(37, 99, 235, 0.12) 0%, rgba(255, 255, 255, 0.98) 100%)',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <span style={{ color: '#2563eb', fontWeight: 700 }}>Featured next step</span>
            <h2 style={{ margin: 0, fontSize: '1.9rem', color: '#0f172a' }}>
              Explore the hiring partners behind the recruitment journey.
            </h2>
            <p style={{ margin: 0, color: '#475569', lineHeight: 1.7, maxWidth: '640px' }}>
              Give candidates and stakeholders a direct path to the partner experience so they can
              see the organizations, brands, or teams represented in this recruitment showcase.
            </p>
          </div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'flex-start' }}>
            <Link
              to="/partners"
              style={{
                textDecoration: 'none',
                backgroundColor: '#2563eb',
                color: '#ffffff',
                padding: '14px 22px',
                borderRadius: '999px',
                fontWeight: 700,
                boxShadow: '0 12px 24px rgba(37, 99, 235, 0.2)',
              }}
            >
              View hiring partners
            </Link>
          </div>
        </section>

        <section
          style={{
            ...sectionStyle,
            backgroundColor: '#0f172a',
            color: '#ffffff',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            alignItems: 'flex-start',
          }}
        >
          <span style={{ color: '#93c5fd', fontWeight: 700 }}>Ready to continue?</span>
          <h2 style={{ margin: 0, fontSize: '1.9rem' }}>
            Move from interest to action with a clear recruitment journey.
          </h2>
          <p style={{ margin: 0, maxWidth: '720px', lineHeight: 1.7, color: '#cbd5e1' }}>
            Candidates can begin with sign-up, explore hiring partners, or use the contact page
            for follow-up. This section is intentionally simple so future teams can swap in
            campaign-specific calls to action.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Link
              to="/signup"
              style={{
                textDecoration: 'none',
                backgroundColor: '#ffffff',
                color: '#0f172a',
                padding: '14px 22px',
                borderRadius: '999px',
                fontWeight: 700,
              }}
            >
              Create candidate account
            </Link>
            <Link
              to="/partners"
              style={{
                textDecoration: 'none',
                backgroundColor: 'transparent',
                color: '#ffffff',
                padding: '14px 22px',
                borderRadius: '999px',
                fontWeight: 700,
                border: '1px solid rgba(255, 255, 255, 0.35)',
              }}
            >
              Meet hiring partners
            </Link>
            <Link
              to="/contact-us"
              style={{
                textDecoration: 'none',
                backgroundColor: 'transparent',
                color: '#ffffff',
                padding: '14px 22px',
                borderRadius: '999px',
                fontWeight: 700,
                border: '1px solid rgba(255, 255, 255, 0.35)',
              }}
            >
              Ask a recruitment question
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
