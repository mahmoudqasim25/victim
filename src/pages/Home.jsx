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
    title: 'Explore hiring partners',
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

const aiManagedServiceIntro = {
  eyebrow: 'Illustrative service model',
  title: 'How AI managed our service',
  description:
    'This sample section shows how AI can support a recruitment service by organizing intake details, surfacing recruiter prompts, and keeping candidate communications consistent. It is illustrative content only and does not describe live automation, verified client outcomes, or autonomous hiring decisions.',
  disclaimer:
    'Illustrative example only: the workflow below is a reusable content layout for future service messaging and should not be read as a live product claim.',
};

const aiManagedServiceHighlights = [
  {
    title: 'Structured intake support',
    description:
      'AI can help summarize role requirements and candidate preferences so recruitment teams start each search with a clearer brief.',
  },
  {
    title: 'Recruiter-ready recommendations',
    description:
      'Illustrative prompts can help recruiters prepare outreach ideas, follow-up reminders, and interview coordination notes before they respond.',
  },
  {
    title: 'Consistent service updates',
    description:
      'Sample workflows show how AI-assisted drafts may keep status updates, FAQs, and next-step messages aligned across the recruitment journey.',
  },
  {
    title: 'Priority visibility for teams',
    description:
      'Business users can review example dashboards that group open actions, candidate questions, and service handoffs in one place.',
  },
];

const aiManagedServiceBenefits = [
  'Supports recruiters with faster preparation for candidate conversations.',
  'Helps operations teams keep service steps documented and easier to review.',
  'Creates a repeatable layout for future recruitment copy updates without redesigning the page.',
];

const aiManagedServiceOutcomes = [
  {
    value: 'Sample: 1 shared queue',
    label: 'Illustrative service view where recruiter tasks, candidate questions, and follow-ups appear together.',
  },
  {
    value: 'Illustrative: 3 support moments',
    label: 'Example touchpoints covering intake preparation, communication drafting, and recruiter handoff support.',
  },
  {
    value: 'Sample: weekly summary',
    label: 'Placeholder reporting format that could help business stakeholders review service activity without implying live metrics.',
  },
];

const aiManagedServiceSummary =
  'In this illustrative model, AI acts as a support layer within the recruitment service, helping teams organize information and prepare next steps while people remain responsible for communication, review, and hiring decisions.';

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

        <section
          style={{
            ...sectionStyle,
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ color: '#2563eb', fontWeight: 700 }}>{aiManagedServiceIntro.eyebrow}</span>
            <h2 style={{ margin: 0, fontSize: '1.8rem', color: '#0f172a' }}>
              {aiManagedServiceIntro.title}
            </h2>
            <p style={{ margin: 0, color: '#475569', lineHeight: 1.7, maxWidth: '860px' }}>
              {aiManagedServiceIntro.description}
            </p>
            <p
              style={{
                margin: 0,
                color: '#92400e',
                backgroundColor: '#fff7ed',
                border: '1px solid #fed7aa',
                borderRadius: '16px',
                padding: '14px 16px',
                lineHeight: 1.6,
              }}
            >
              {aiManagedServiceIntro.disclaimer}
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '16px',
            }}
          >
            {aiManagedServiceHighlights.map((item) => (
              <div key={item.title} style={cardStyle}>
                <span style={{ color: '#2563eb', fontWeight: 700 }}>Service highlight</span>
                <h3 style={{ margin: 0, fontSize: '1.15rem', color: '#0f172a' }}>{item.title}</h3>
                <p style={{ margin: 0, color: '#475569', lineHeight: 1.7 }}>{item.description}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '16px',
            }}
          >
            <div style={cardStyle}>
              <span style={{ color: '#2563eb', fontWeight: 700 }}>Business-friendly benefits</span>
              <ul style={{ margin: 0, paddingLeft: '20px', color: '#475569', lineHeight: 1.8 }}>
                {aiManagedServiceBenefits.map((benefit) => (
                  <li key={benefit}>{benefit}</li>
                ))}
              </ul>
            </div>

            <div style={{ ...cardStyle, gap: '16px' }}>
              <span style={{ color: '#2563eb', fontWeight: 700 }}>Sample outcomes</span>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
                  gap: '12px',
                }}
              >
                {aiManagedServiceOutcomes.map((outcome) => (
                  <div
                    key={outcome.value}
                    style={{
                      backgroundColor: '#ffffff',
                      border: '1px solid #dbe4f0',
                      borderRadius: '16px',
                      padding: '16px',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                    }}
                  >
                    <strong style={{ color: '#0f172a' }}>{outcome.value}</strong>
                    <p style={{ margin: 0, color: '#475569', lineHeight: 1.6 }}>{outcome.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div
            style={{
              backgroundColor: '#eff6ff',
              border: '1px solid #bfdbfe',
              borderRadius: '20px',
              padding: '20px 24px',
            }}
          >
            <span style={{ color: '#1d4ed8', fontWeight: 700 }}>Closing summary</span>
            <p style={{ margin: '10px 0 0', color: '#1e293b', lineHeight: 1.7, maxWidth: '900px' }}>
              {aiManagedServiceSummary}
            </p>
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
              Explore hiring partners
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
              Explore hiring partners
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
