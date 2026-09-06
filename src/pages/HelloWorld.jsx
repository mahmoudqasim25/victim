import { Link } from 'react-router-dom'
import PageShell, { MutedCard, PageIntro, SectionIntro, SurfaceCard } from '../components/PageShell'
import { shellStyles, tokens } from '../components/designSystem'

const helloHighlights = [
  {
    title: 'Candidate orientation',
    description:
      'Use this route to explain how the recruitment experience works, what candidates can expect next, and where to go for support.',
  },
  {
    title: 'Shared public shell',
    description:
      'The page now follows the same heading scale, card hierarchy, spacing rhythm, and action styling used across the refreshed public journey.',
  },
  {
    title: 'Consistent fallback guidance',
    description:
      'If a visitor lands here without context, the page still offers clear next steps back to open roles, partner information, and support channels.',
  },
]

const candidateJourney = [
  {
    title: 'Discover opportunities',
    description: 'Review hiring partners, role categories, and the type of team environment that matches your experience.',
  },
  {
    title: 'Prepare your application',
    description: 'Gather your CV, availability, and any supporting details recruiters may need to assess fit quickly.',
  },
  {
    title: 'Stay connected',
    description: 'Use the contact route whenever you need timeline updates, accessibility support, or clarification on next steps.',
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
          eyebrow="Candidate hello"
          title="Start with a clear view of how this recruitment experience supports your next move."
          description="This route now acts as a lightweight orientation page for candidates who need context before applying, comparing partners, or reaching the recruitment team."
        />

        <div style={{ display: 'grid', gap: '14px' }}>
          <MutedCard>
            <span style={{ color: tokens.colors.primary, fontWeight: 700 }}>Why this page exists</span>
            <p style={{ margin: '10px 0 0', color: tokens.colors.textMuted, lineHeight: 1.7 }}>
              It gives visitors a simple, recruitment-focused entry point instead of placeholder content, so every public route feels intentional and connected.
            </p>
          </MutedCard>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Link to="/partners" style={shellStyles.primaryButton}>
              Explore partners
            </Link>
            <Link to="/contact-us" style={shellStyles.secondaryButton}>
              Contact recruitment
            </Link>
          </div>
        </div>
      </SurfaceCard>

      <SurfaceCard>
        <SectionIntro
          title="What candidates can do from here"
          description="The refreshed hello route now reinforces the same business purpose and visual system used across the rest of the non-auth experience."
        />
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

      <SurfaceCard>
        <SectionIntro
          title="A simple recruitment journey"
          description="Even a supporting route should help candidates understand the path from discovery to follow-up without sending them into a dead end."
        />
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '16px',
          }}
        >
          {candidateJourney.map((item) => (
            <MutedCard key={item.title} style={{ backgroundColor: tokens.colors.surface }}>
              <span style={{ color: tokens.colors.primary, fontWeight: 700 }}>{item.title}</span>
              <p style={{ margin: '10px 0 0', color: tokens.colors.textMuted, lineHeight: 1.7 }}>{item.description}</p>
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
        <SectionIntro
          title="AI assistance stays clearly framed"
          description="Any mention of AI on public routes should remain supportive, transparent, and secondary to recruiter-led decision making."
          style={{ marginBottom: 0 }}
        >
          <span style={{ color: tokens.colors.primary, fontWeight: 700 }}>AI assistance framing</span>
        </SectionIntro>
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
          AI assistance may support drafting and organization, but it does not replace human review, direct recruiter communication, or final hiring decisions.
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
