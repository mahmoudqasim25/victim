import { useMemo, useState } from 'react';

const fallbackImage =
  'https://via.placeholder.com/640x360/e2e8f0/0f172a?text=Partner+Spotlight';
const fallbackName = 'Partner profile coming soon';
const fallbackDescription =
  'Placeholder partner summary for the recruitment experience. Final business details can be added later.';
const fallbackJoinAt = 'Join at details will be shared soon.';

const partnerRecords = [
  {
    id: 'northstar-logistics',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    name: 'Northstar Logistics',
    description:
      'A sample operations partner supporting scalable service delivery and dependable customer experiences.',
    joinAt: 'Join at Cairo operations hub or through hybrid coordination teams.',
  },
  {
    id: 'blue-orbit-digital',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    name: 'Blue Orbit Digital',
    description:
      'A placeholder digital partner focused on practical transformation programs and measurable delivery outcomes.',
    joinAt: 'Join at Alexandria delivery center with flexible project-based collaboration.',
  },
  {
    id: 'summit-care-services',
    image: '',
    name: 'Summit Care Services',
    description:
      'Business-appropriate sample copy for a partner that values quality support, training, and long-term growth.',
    joinAt: 'Join at regional support offices with structured onboarding pathways.',
  },
  {
    id: 'futurebridge-analytics',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    name: '',
    description: '',
    joinAt: 'Join at remote-first analytics squads aligned to client delivery goals.',
  },
];

const sectionStyle = {
  backgroundColor: '#ffffff',
  border: '1px solid #dbe4f0',
  borderRadius: '24px',
  boxShadow: '0 18px 40px rgba(15, 23, 42, 0.08)',
  padding: '32px',
};

const navButtonStyle = {
  border: '1px solid #cbd5e1',
  backgroundColor: '#ffffff',
  color: '#0f172a',
  borderRadius: '999px',
  padding: '12px 18px',
  fontWeight: 700,
  cursor: 'pointer',
};

function Partners() {
  const safePartners = useMemo(
    () =>
      partnerRecords.map((partner, index) => ({
        ...partner,
        image: partner.image || fallbackImage,
        name: partner.name || `${fallbackName} ${index + 1}`,
        description: partner.description || fallbackDescription,
        joinAt: partner.joinAt || fallbackJoinAt,
      })),
    []
  );

  const [activeIndex, setActiveIndex] = useState(0);
  const activePartner = safePartners[activeIndex];

  const handlePrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? safePartners.length - 1 : currentIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === safePartners.length - 1 ? 0 : currentIndex + 1
    );
  };

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
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            background:
              'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(255, 255, 255, 0.96) 55%, rgba(14, 165, 233, 0.08) 100%)',
          }}
        >
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
            Partner spotlight
          </span>
          <h1
            style={{
              margin: 0,
              fontSize: 'clamp(2.2rem, 5vw, 3.8rem)',
              lineHeight: 1.05,
              color: '#0f172a',
            }}
          >
            Explore sample partner opportunities in the FlairsTech recruitment style.
          </h1>
          <p
            style={{
              margin: 0,
              maxWidth: '760px',
              color: '#334155',
              lineHeight: 1.7,
              fontSize: '1.02rem',
            }}
          >
            This additive page presents concise placeholder partner profiles in a controlled slider.
            Each spotlight includes a visual, a short business summary, and where candidates can
            join the engagement.
          </p>
        </section>

        <section style={sectionStyle}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '24px',
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ color: '#2563eb', fontWeight: 700 }}>Controlled partner slider</span>
              <h2 style={{ margin: 0, fontSize: '1.8rem', color: '#0f172a' }}>
                Current spotlight: {activePartner.name}
              </h2>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <button type="button" onClick={handlePrevious} style={navButtonStyle}>
                Previous
              </button>
              <button
                type="button"
                onClick={handleNext}
                style={{
                  ...navButtonStyle,
                  backgroundColor: '#2563eb',
                  borderColor: '#2563eb',
                  color: '#ffffff',
                  boxShadow: '0 12px 24px rgba(37, 99, 235, 0.2)',
                }}
              >
                Next
              </button>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              alignItems: 'stretch',
            }}
          >
            <div
              style={{
                borderRadius: '24px',
                overflow: 'hidden',
                minHeight: '280px',
                backgroundColor: '#e2e8f0',
                border: '1px solid #dbe4f0',
              }}
            >
              <img
                src={activePartner.image}
                alt={activePartner.name}
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '280px',
                  objectFit: 'cover',
                  display: 'block',
                }}
                onError={(event) => {
                  event.currentTarget.src = fallbackImage;
                }}
              />
            </div>

            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '18px',
                justifyContent: 'center',
                backgroundColor: '#f8fbff',
                border: '1px solid #dbe4f0',
                borderRadius: '24px',
                padding: '28px',
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <span style={{ color: '#2563eb', fontWeight: 700 }}>
                  Partner {activeIndex + 1} of {safePartners.length}
                </span>
                <h3 style={{ margin: 0, fontSize: '1.8rem', color: '#0f172a' }}>
                  {activePartner.name}
                </h3>
                <p style={{ margin: 0, color: '#475569', lineHeight: 1.7 }}>
                  {activePartner.description}
                </p>
              </div>

              <div
                style={{
                  backgroundColor: '#ffffff',
                  border: '1px solid #dbe4f0',
                  borderRadius: '18px',
                  padding: '18px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                }}
              >
                <span style={{ color: '#0f172a', fontWeight: 700 }}>Join at</span>
                <p style={{ margin: 0, color: '#334155', lineHeight: 1.7 }}>
                  {activePartner.joinAt}
                </p>
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '12px',
              marginTop: '24px',
            }}
          >
            {safePartners.map((partner, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={partner.id}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  style={{
                    borderRadius: '18px',
                    border: isActive ? '1px solid #2563eb' : '1px solid #dbe4f0',
                    backgroundColor: isActive ? '#dbeafe' : '#ffffff',
                    color: '#0f172a',
                    padding: '14px 16px',
                    minWidth: '180px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    boxShadow: isActive ? '0 12px 24px rgba(37, 99, 235, 0.12)' : 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '6px',
                    fontWeight: 600,
                  }}
                >
                  <span>{partner.name}</span>
                  <span style={{ fontSize: '0.9rem', color: '#475569', fontWeight: 500 }}>
                    {isActive ? 'Active partner' : `View partner ${index + 1}`}
                  </span>
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </div>
  );
}

export default Partners;
