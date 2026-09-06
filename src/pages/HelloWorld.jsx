import { Link } from 'react-router-dom'
import PageShell, { MutedCard, PageIntro, SurfaceCard } from '../components/PageShell'
import { shellStyles, tokens } from '../components/designSystem'

const helloHighlights = [
  {
    title: 'Shared public shell',
    description: 'This supporting page now uses the same card hierarchy, spacing rhythm, and responsive layout approach as the rest of the candidate-facing journey.',
  },
  {
    title: 'Clear business purpose',
    description: 'Instead of placeholder-heavy content, the page explains how the public experience supports recruitment discovery and candidate communication.',
  },
  {
    title: 'Aligned messaging',
    description: 'The tone, structure, and calls to action now match the updated home, partners, and contact pages.',
  },
]

const aiGuidance = [
  'AI assistance can help prepare summaries or draft support content for recruiters.',
  'AI assistance should always be reviewed by people before it is shared with candidates.',
  'AI assistance does not replace recruiter judgment, candidate conversations, or final hiring decisions.',
]

function HelloWorld() {
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
          eyebrow="Hello"
          title="A simple supporting page, aligned to the redesigned recruitment journey."
          description="This route now acts as a lightweight orientation page inside the same public shell, reinforcing the updated information architecture and candidate-friendly messaging used across the landing experience."
        />

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <Link to="/" style={shellStyles.primaryButton}>
            Return home
          </Link>
          <Link to="/contact-us" style={shellStyles.secondaryButton}>
            Contact support
          </Link>
        </div>
      </SurfaceCard>

      <SurfaceCard>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
          <h2 style={{ margin: 0, fontSize: '1.8rem', color: tokens.colors.text }}>
            What this page now communicates
          </h2>
          <p style={{ margin: 0, color: tokens.colors.textMuted, lineHeight: 1.7, maxWidth: '760px' }}>
            Supporting pages should still help candidates understand the platform, even when they are not the primary conversion destination.
          </p>
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '16px',
          }}
        >
          {helloHighlights.map((item) => (
            <MutedCard key={item.title}>
              <h3 style={{ margin: 0, fontSize: '1.15rem', color: tokens.colors.text }}>{item.title}</h3>
              <p style={{ margin: '8px 0 0', color: tokens.colors.textMuted, lineHeight: 1.7 }}>{item.description}</p>
            </MutedCard>
          ))}
        </div>
      </SurfaceCard>

      <SurfaceCard
        style={{
          background:
            'linear-gradient(180deg, rgba(239, 246, 255, 0.95) 0%, rgba(255, 255, 255, 1) 100%)',
          display: 'flex',
          flexDirection: 'column',
          gap: '18px',
        }}
      >
        <span style={{ color: tokens.colors.primary, fontWeight: 700 }}>AI assistance framing</span>
        <h2 style={{ margin: 0, fontSize: '1.8rem', color: tokens.colors.text }}>
          Any AI mention on public pages should stay clearly framed as assistance.
        </h2>
        <p style={{ margin: 0, color: tokens.colors.textMuted, lineHeight: 1.7, maxWidth: '820px' }}>
          This page mirrors the same guidance used elsewhere in the public journey so candidates receive consistent expectations wherever AI support is mentioned.
        </p>
        <div
          style={{
            margin: 0,
            color: tokens.colors.warningText,
            backgroundColor: tokens.colors.warningSurface,
            border: `1px solid ${tokens.colors.warningBorder}`,
            borderRadius: tokens.radii.sm,
            padding: '14px 16px',
            lineHeight: 1.6,
          }}
        >
          AI assistance may support drafting and organization, but it is limited. It does not replace human review, direct recruiter communication, or final hiring decisions.
        </div>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
          }}
        >
          {aiGuidance.map((item) => (
            <MutedCard key={item}>
              <p style={{ margin: 0, color: tokens.colors.textMuted, lineHeight: 1.7 }}>{item}</p>
            </MutedCard>
          ))}
        </div>
      </SurfaceCard>
    </PageShell>
  )
}

export default HelloWorld
