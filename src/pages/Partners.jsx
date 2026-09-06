import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import PageShell, { MutedCard, PageIntro, SurfaceCard } from '../components/PageShell'
import { shellStyles, tokens } from '../components/designSystem'

const fallbackImage =
  'https://via.placeholder.com/640x360/e2e8f0/0f172a?text=Partner+Spotlight'
const fallbackName = 'Partner profile coming soon'
const fallbackDescription =
  'This partner profile is being prepared. Core recruitment details will appear here once approved.'
const fallbackJoinAt = 'Location and working model details will be shared soon.'

const partnerRecords = [
  {
    id: 'northstar-logistics',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    name: 'Northstar Logistics',
    description:
      'A delivery-focused partner with structured operations teams, dependable onboarding, and customer-centered service environments.',
    joinAt: 'Cairo operations hub or hybrid coordination teams.',
  },
  {
    id: 'blue-orbit-digital',
    image:
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    name: 'Blue Orbit Digital',
    description:
      'A digital transformation partner suited to candidates interested in product delivery, analytics, and collaborative project work.',
    joinAt: 'Alexandria delivery center with flexible project-based collaboration.',
  },
  {
    id: 'summit-care-services',
    image: '',
    name: 'Summit Care Services',
    description:
      'A people-first support partner that emphasizes training, quality standards, and long-term growth pathways.',
    joinAt: 'Regional support offices with structured onboarding pathways.',
  },
  {
    id: 'futurebridge-analytics',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    name: '',
    description: '',
    joinAt: 'Remote-first analytics squads aligned to client delivery goals.',
  },
]

const partnerSignals = [
  'Each spotlight keeps the partner summary short, readable, and candidate-friendly.',
  'Fallback names, descriptions, and location copy remain usable when source data is incomplete.',
  'If an image is missing or fails to load, the page swaps to a branded placeholder instead of breaking the layout.',
]

const gridStyle = (minWidth) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, 1fr))`,
  gap: '16px',
})

function Partners() {
  const safePartners = useMemo(
    () =>
      partnerRecords.map((partner, index) => ({
        ...partner,
        image: partner.image || fallbackImage,
        hasImage: Boolean(partner.image),
        name: partner.name || `${fallbackName} ${index + 1}`,
        description: partner.description || fallbackDescription,
        joinAt: partner.joinAt || fallbackJoinAt,
      })),
    []
  )

  const [activeIndex, setActiveIndex] = useState(0)
  const [imageLoadError, setImageLoadError] = useState(false)
  const activePartner = safePartners[activeIndex]
  const shouldShowImageFallback = imageLoadError || !activePartner.hasImage

  const updateActiveIndex = (nextIndex) => {
    setImageLoadError(false)
    setActiveIndex(nextIndex)
  }

  const handlePrevious = () => {
    updateActiveIndex(activeIndex === 0 ? safePartners.length - 1 : activeIndex - 1)
  }

  const handleNext = () => {
    updateActiveIndex(activeIndex === safePartners.length - 1 ? 0 : activeIndex + 1)
  }

  return (
    <PageShell>
      <SurfaceCard
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          alignItems: 'center',
          background:
            'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(255, 255, 255, 0.96) 55%, rgba(14, 165, 233, 0.08) 100%)',
        }}
      >
        <PageIntro
          eyebrow="Hiring partners"
          title="Explore the organisations and team environments behind the recruitment journey."
          description="This page helps candidates understand who may be hiring, what kind of work environment to expect, and where fallback content appears when partner data is still being completed."
        />

        <div style={{ display: 'grid', gap: '14px' }}>
          {partnerSignals.map((item) => (
            <MutedCard key={item}>
              <p style={{ margin: 0, color: tokens.colors.textMuted, lineHeight: 1.7 }}>{item}</p>
            </MutedCard>
          ))}
        </div>
      </SurfaceCard>

      <SurfaceCard>
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
            <span style={{ color: tokens.colors.primary, fontWeight: 700 }}>Partner spotlight</span>
            <h2 style={{ margin: 0, fontSize: '1.8rem', color: tokens.colors.text }}>
              Current spotlight: {activePartner.name}
            </h2>
            <p style={{ margin: 0, color: tokens.colors.textMuted, lineHeight: 1.7, maxWidth: '720px' }}>
              Move through the partner list to compare environments, working models, and available context before you apply.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button type="button" onClick={handlePrevious} style={shellStyles.secondaryButton}>
              Previous
            </button>
            <button
              type="button"
              onClick={handleNext}
              style={{
                ...shellStyles.primaryButton,
                cursor: 'pointer',
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
              borderRadius: tokens.radii.lg,
              overflow: 'hidden',
              minHeight: '320px',
              backgroundColor: '#e2e8f0',
              border: `1px solid ${tokens.colors.border}`,
              position: 'relative',
            }}
          >
            {shouldShowImageFallback ? (
              <div
                style={{
                  minHeight: '320px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'flex-start',
                  gap: '10px',
                  padding: '28px',
                  background: 'linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)',
                  color: tokens.colors.text,
                  boxSizing: 'border-box',
                }}
              >
                <span style={{ color: tokens.colors.primary, fontWeight: 700 }}>Image unavailable</span>
                <strong style={{ fontSize: '1.4rem' }}>{activePartner.name}</strong>
                <p style={{ margin: 0, color: tokens.colors.textMuted, lineHeight: 1.7 }}>
                  A fallback visual is shown so the partner spotlight stays readable even when artwork is missing or fails to load.
                </p>
              </div>
            ) : (
              <img
                src={activePartner.image}
                alt={activePartner.name}
                style={{
                  width: '100%',
                  height: '100%',
                  minHeight: '320px',
                  objectFit: 'cover',
                  display: 'block',
                }}
                onError={() => {
                  setImageLoadError(true)
                }}
              />
            )}
          </div>

          <div style={{ display: 'grid', gap: '16px' }}>
            <MutedCard style={{ backgroundColor: tokens.colors.surface }}>
              <span style={{ color: tokens.colors.primary, fontWeight: 700 }}>
                Partner {activeIndex + 1} of {safePartners.length}
              </span>
              <h3 style={{ margin: '8px 0 0', fontSize: '1.8rem', color: tokens.colors.text }}>
                {activePartner.name}
              </h3>
              <p style={{ margin: '10px 0 0', color: tokens.colors.textMuted, lineHeight: 1.7 }}>
                {activePartner.description}
              </p>
            </MutedCard>

            <MutedCard style={{ backgroundColor: tokens.colors.surface }}>
              <span style={{ color: tokens.colors.text, fontWeight: 700 }}>Where you may join</span>
              <p style={{ margin: '10px 0 0', color: tokens.colors.textMuted, lineHeight: 1.7 }}>
                {activePartner.joinAt}
              </p>
            </MutedCard>

            <MutedCard>
              <span style={{ color: tokens.colors.primary, fontWeight: 700 }}>Fallback behavior</span>
              <p style={{ margin: '10px 0 0', color: tokens.colors.textMuted, lineHeight: 1.7 }}>
                Missing partner names, descriptions, locations, or images are replaced with safe defaults so the page remains useful while content is still being finalized.
              </p>
            </MutedCard>
          </div>
        </div>

        <div style={{ marginTop: '24px', ...gridStyle('180px') }}>
          {safePartners.map((partner, index) => {
            const isActive = index === activeIndex

            return (
              <button
                key={partner.id}
                type="button"
                onClick={() => updateActiveIndex(index)}
                style={{
                  borderRadius: tokens.radii.sm,
                  border: `1px solid ${isActive ? tokens.colors.borderStrong : tokens.colors.border}`,
                  backgroundColor: isActive ? tokens.colors.primarySoft : tokens.colors.surface,
                  color: tokens.colors.text,
                  padding: '14px 16px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  boxShadow: isActive ? tokens.shadows.soft : 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px',
                  fontWeight: 600,
                }}
              >
                <span>{partner.name}</span>
                <span style={{ fontSize: '0.9rem', color: tokens.colors.textMuted, fontWeight: 500 }}>
                  {isActive ? 'Active spotlight' : `View partner ${index + 1}`}
                </span>
              </button>
            )
          })}
        </div>
      </SurfaceCard>

      <SurfaceCard
        style={{
          background:
            'linear-gradient(135deg, rgba(37, 99, 235, 0.12) 0%, rgba(255, 255, 255, 0.98) 100%)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '20px',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <span style={{ color: tokens.colors.primary, fontWeight: 700 }}>Need more context?</span>
          <h2 style={{ margin: 0, fontSize: '1.9rem', color: tokens.colors.text }}>
            Contact recruitment support before you apply.
          </h2>
          <p style={{ margin: 0, color: tokens.colors.textMuted, lineHeight: 1.7, maxWidth: '640px' }}>
            Candidates can use the contact page for questions about timelines, support channels, or the best next step in the journey.
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <Link to="/contact-us" style={shellStyles.primaryButton}>
            Contact recruitment
          </Link>
        </div>
      </SurfaceCard>
    </PageShell>
  )
}

export default Partners
