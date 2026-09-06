import { Link } from 'react-router-dom'
import PageShell, { MutedCard, PageIntro, SurfaceCard } from '../components/PageShell'
import { shellStyles, tokens } from '../components/designSystem'

const priorityActions = [
  {
    title: 'Create your candidate profile',
    description: 'Start with the existing sign-up flow so recruiters can review your background and preferences.',
    ctaLabel: 'Create profile',
    to: '/signup',
    primary: true,
  },
  {
    title: 'Browse hiring partners',
    description: 'See the kinds of teams and working models represented across the recruitment journey.',
    ctaLabel: 'View partners',
    to: '/partners',
  },
  {
    title: 'Ask the recruitment team',
    description: 'Use the contact page for support, timelines, or guidance before you apply.',
    ctaLabel: 'Get support',
    to: '/contact-us',
  },
]

const journeySteps = [
  {
    title: 'Discover the opportunity',
    description: 'Review the hiring focus, partner context, and support options before committing time to an application.',
  },
  {
    title: 'Share your profile',
    description: 'Complete the current sign-up flow so the recruitment team can understand your experience and interests.',
  },
  {
    title: 'Receive guided follow-up',
    description: 'Recruiters can use the platform to coordinate next steps, answer questions, and keep communication clear.',
  },
]

const hiringFocusAreas = [
  {
    title: 'Operations and service delivery',
    description: 'Roles designed for dependable execution, customer support, and structured team environments.',
  },
  {
    title: 'Digital, product, and data',
    description: 'Opportunities suited to analytical thinking, technical collaboration, and transformation work.',
  },
  {
    title: 'Leadership and enablement',
    description: 'Pathways for coaching, workforce planning, onboarding, and team performance support.',
  },
]

const supportSignals = [
  {
    value: 'Fast next steps',
    label: 'The home page now puts application, partner discovery, and support actions before secondary content.',
  },
  {
    value: 'Clearer expectations',
    label: 'Candidates can understand what the platform is for, who it serves, and how to continue.',
  },
  {
    value: 'Shared public shell',
    label: 'Supporting pages follow the same spacing, card hierarchy, and responsive layout system.',
  },
]

const aiAssistancePoints = [
  {
    title: 'Assistance with preparation',
    description: 'AI assistance can help draft recruiter notes, summarize common questions, and organize intake details for faster human follow-up.',
  },
  {
    title: 'Assistance with consistency',
    description: 'Teams may use AI assistance to keep status updates and support messaging aligned across the candidate journey.',
  },
  {
    title: 'Human review remains essential',
    description: 'AI assistance does not make hiring decisions, verify candidate claims, or replace recruiter judgment and direct communication.',
  },
]

const gridStyle = (minWidth) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, 1fr))`,
  gap: '16px',
})

function Home() {
  return (
    <PageShell>
      <SurfaceCard
        style={{
          padding: 'clamp(24px, 4vw, 40px)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          alignItems: 'center',
          background:
            'linear-gradient(135deg, rgba(37, 99, 235, 0.08) 0%, rgba(255, 255, 255, 0.96) 55%, rgba(14, 165, 233, 0.08) 100%)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <PageIntro
            eyebrow="Candidate recruitment journey"
            title="Find the right next step faster with a clearer path from interest to application."
            description="This landing page is structured around the actions candidates need most: create a profile, explore hiring partners, and reach recruitment support. Supporting content then explains how the journey works and where AI assistance may help recruiters behind the scenes."
          />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Link to="/signup" style={shellStyles.primaryButton}>
              Create your profile
            </Link>
            <Link to="/partners" style={shellStyles.secondaryButton}>
              Explore partners
            </Link>
            <Link to="/contact-us" style={shellStyles.secondaryButton}>
              Contact recruitment
            </Link>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '14px' }}>
          {supportSignals.map((item) => (
            <MutedCard key={item.value}>
              <strong style={{ color: tokens.colors.text, fontSize: '1.1rem' }}>{item.value}</strong>
              <p style={{ margin: '8px 0 0', color: tokens.colors.textMuted, lineHeight: 1.6 }}>{item.label}</p>
            </MutedCard>
          ))}
        </div>
      </SurfaceCard>

      <SurfaceCard>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
          <h2 style={{ margin: 0, fontSize: '1.8rem', color: tokens.colors.text }}>
            Start with the most important recruitment actions
          </h2>
          <p style={{ margin: 0, color: tokens.colors.textMuted, lineHeight: 1.7, maxWidth: '760px' }}>
            Candidates should not have to search for the next step. These actions are placed first so visitors can move directly into the recruitment journey or get help before applying.
          </p>
        </div>
        <div style={gridStyle('240px')}>
          {priorityActions.map((action) => (
            <SurfaceCard key={action.title} style={{ ...shellStyles.mutedCard, backgroundColor: tokens.colors.surface }}>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: tokens.colors.text }}>{action.title}</h3>
              <p style={{ margin: 0, color: tokens.colors.textMuted, lineHeight: 1.7 }}>{action.description}</p>
              <div>
                <Link
                  to={action.to}
                  style={action.primary ? shellStyles.primaryButton : shellStyles.secondaryButton}
                >
                  {action.ctaLabel}
                </Link>
              </div>
            </SurfaceCard>
          ))}
        </div>
      </SurfaceCard>

      <SurfaceCard>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
          <h2 style={{ margin: 0, fontSize: '1.8rem', color: tokens.colors.text }}>
            How the recruitment journey works
          </h2>
          <p style={{ margin: 0, color: tokens.colors.textMuted, lineHeight: 1.7, maxWidth: '760px' }}>
            The public experience is designed to guide candidates from discovery to action with less friction and clearer expectations.
          </p>
        </div>
        <div style={gridStyle('240px')}>
          {journeySteps.map((step, index) => (
            <MutedCard key={step.title}>
              <span style={{ color: tokens.colors.primary, fontWeight: 700 }}>Step {index + 1}</span>
              <h3 style={{ margin: '8px 0 0', fontSize: '1.2rem', color: tokens.colors.text }}>{step.title}</h3>
              <p style={{ margin: '8px 0 0', color: tokens.colors.textMuted, lineHeight: 1.7 }}>{step.description}</p>
            </MutedCard>
          ))}
        </div>
      </SurfaceCard>

      <SurfaceCard
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
          background:
            'linear-gradient(180deg, rgba(239, 246, 255, 0.95) 0%, rgba(255, 255, 255, 1) 100%)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <span style={{ color: tokens.colors.primary, fontWeight: 700 }}>Optional AI assistance framing</span>
          <h2 style={{ margin: 0, fontSize: '1.8rem', color: tokens.colors.text }}>
            AI assistance can support recruitment operations, but it does not replace recruiter decisions.
          </h2>
          <p style={{ margin: 0, color: tokens.colors.textMuted, lineHeight: 1.7, maxWidth: '860px' }}>
            Where AI is referenced on public pages, it is framed as assistance only. It may help teams prepare information and communicate more consistently, while people remain responsible for review, candidate conversations, and hiring outcomes.
          </p>
        </div>

        <p
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
          AI assistance is limited to support tasks such as drafting, summarizing, and organizing information. It should not be treated as a source of final hiring decisions, legal guidance, or verified candidate assessment.
        </p>

        <div style={gridStyle('240px')}>
          {aiAssistancePoints.map((item) => (
            <MutedCard key={item.title}>
              <h3 style={{ margin: 0, fontSize: '1.15rem', color: tokens.colors.text }}>{item.title}</h3>
              <p style={{ margin: '8px 0 0', color: tokens.colors.textMuted, lineHeight: 1.7 }}>{item.description}</p>
            </MutedCard>
          ))}
        </div>
      </SurfaceCard>

      <SurfaceCard>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
          <h2 style={{ margin: 0, fontSize: '1.8rem', color: tokens.colors.text }}>
            Hiring focus areas
          </h2>
          <p style={{ margin: 0, color: tokens.colors.textMuted, lineHeight: 1.7, maxWidth: '760px' }}>
            These content blocks help candidates understand the kinds of opportunities the recruitment experience can support without overwhelming the first screen.
          </p>
        </div>
        <div style={gridStyle('240px')}>
          {hiringFocusAreas.map((area) => (
            <MutedCard key={area.title}>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: tokens.colors.text }}>{area.title}</h3>
              <p style={{ margin: '8px 0 0', color: tokens.colors.textMuted, lineHeight: 1.7 }}>{area.description}</p>
            </MutedCard>
          ))}
        </div>
      </SurfaceCard>

      <SurfaceCard
        style={{
          backgroundColor: tokens.colors.darkSurface,
          color: '#ffffff',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          alignItems: 'flex-start',
        }}
      >
        <span style={{ color: '#93c5fd', fontWeight: 700 }}>Ready to continue?</span>
        <h2 style={{ margin: 0, fontSize: '1.9rem' }}>
          Choose the next step that matches where you are in the recruitment journey.
        </h2>
        <p style={{ margin: 0, maxWidth: '720px', lineHeight: 1.7, color: tokens.colors.darkText }}>
          Create a profile if you are ready to apply, review partners if you want more context, or contact the recruitment team if you need support before moving forward.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <Link to="/signup" style={shellStyles.primaryButton}>
            Create your profile
          </Link>
          <Link
            to="/partners"
            style={{
              ...shellStyles.secondaryButton,
              backgroundColor: 'transparent',
              color: '#ffffff',
              border: '1px solid rgba(191, 219, 254, 0.45)',
            }}
          >
            Explore partners
          </Link>
        </div>
      </SurfaceCard>
    </PageShell>
  )
}

export default Home
