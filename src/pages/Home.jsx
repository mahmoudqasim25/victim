import { Link } from 'react-router-dom'
import PageShell, { MutedCard, PageIntro, SectionIntro, SurfaceCard } from '../components/PageShell'
import { shellStyles, tokens } from '../components/designSystem'

const recruitmentHighlights = [
  {
    title: 'Role clarity from the first screen',
    description: 'Understand the kinds of teams, working styles, and hiring priorities before you spend time applying.',
  },
  {
    title: 'Guided support when you need it',
    description: 'Move forward independently or contact the recruitment team for timelines, fit questions, and application help.',
  },
  {
    title: 'A faster route to the right conversation',
    description: 'Create one profile that helps recruiters review your background and direct you toward the most relevant next step.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Share your profile',
    description: 'Start with sign up so recruiters can review your experience, preferences, and availability in one place.',
  },
  {
    step: '02',
    title: 'Get recruiter guidance',
    description: 'The recruitment team reviews your information, answers questions, and helps align you with suitable opportunities.',
  },
  {
    step: '03',
    title: 'Move into interviews with context',
    description: 'When there is a match, you continue with clearer expectations around the role, process, and next conversations.',
  },
]

const aiAssistancePoints = [
  {
    title: 'Optional help with preparation',
    description: 'AI assistance may help recruiters draft summaries, organize intake notes, or prepare follow-up materials more efficiently.',
  },
  {
    title: 'Optional help with consistency',
    description: 'Teams may use AI assistance to keep updates, reminders, and support information clear across the candidate journey.',
  },
  {
    title: 'People remain responsible',
    description: 'Recruiters still review applications, communicate directly with candidates, and make the decisions that shape hiring outcomes.',
  },
]

const gridStyle = (minWidth) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(auto-fit, minmax(${minWidth}, 1fr))`,
  gap: '16px',
})

/**
 * Renders the recruitment-first landing page for the home route.
 */
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
            'linear-gradient(135deg, rgba(37, 99, 235, 0.1) 0%, rgba(255, 255, 255, 0.98) 52%, rgba(14, 165, 233, 0.1) 100%)',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <PageIntro
            eyebrow="Recruitment-first hiring"
            title="Meet the right recruiter faster with a clearer path from interest to application."
            description="Explore how the hiring journey works, understand where you may fit, and create your profile when you are ready. This home page keeps the recruitment path first and frames AI as optional assistance to support, not replace, human recruiters."
          />

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Link to="/signup" style={shellStyles.primaryButton}>
              Create your profile
            </Link>
            <Link to="/partners" style={shellStyles.secondaryButton}>
              Explore hiring partners
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
              gap: '12px',
            }}
          >
            <MutedCard>
              <strong style={{ color: tokens.colors.text, fontSize: '1rem' }}>Candidate-first flow</strong>
              <p style={{ margin: '8px 0 0', color: tokens.colors.textMuted, lineHeight: 1.6 }}>
                Recruitment actions appear before supporting details so you can move quickly.
              </p>
            </MutedCard>
            <MutedCard>
              <strong style={{ color: tokens.colors.text, fontSize: '1rem' }}>Transparent support</strong>
              <p style={{ margin: '8px 0 0', color: tokens.colors.textMuted, lineHeight: 1.6 }}>
                Optional AI assistance is clearly described and kept separate from hiring decisions.
              </p>
            </MutedCard>
          </div>
        </div>

        <SurfaceCard
          style={{
            padding: '24px',
            backgroundColor: 'rgba(255, 255, 255, 0.92)',
            border: `1px solid ${tokens.colors.borderStrong}`,
            boxShadow: tokens.shadows.soft,
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={shellStyles.eyebrow}>What to expect</span>
            <h2 style={{ margin: 0, fontSize: '1.5rem', color: tokens.colors.text }}>
              Start here if you want a guided route into active hiring conversations.
            </h2>
            <p style={{ margin: 0, color: tokens.colors.textMuted, lineHeight: 1.7 }}>
              Build your profile, get recruiter guidance, and move into relevant opportunities with clearer expectations around fit, timing, and next steps.
            </p>
            <div style={{ display: 'grid', gap: '12px' }}>
              {[
                'Create one profile for recruiter review',
                'Understand the process before lower-priority content',
                'Reach the team directly if you need support before applying',
              ].map((item) => (
                <div
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    color: tokens.colors.textMuted,
                    lineHeight: 1.6,
                  }}
                >
                  <span style={{ color: tokens.colors.primary, fontWeight: 700 }}>•</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </SurfaceCard>
      </SurfaceCard>

      <SurfaceCard>
        <SectionIntro
          title="Why candidates start here"
          description="The home route now leads with the information most relevant to recruitment so visitors can understand value, fit, and next steps without scrolling through placeholder content."
        />
        <div style={gridStyle('240px')}>
          {recruitmentHighlights.map((item) => (
            <MutedCard key={item.title}>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: tokens.colors.text }}>{item.title}</h3>
              <p style={{ margin: '8px 0 0', color: tokens.colors.textMuted, lineHeight: 1.7 }}>{item.description}</p>
            </MutedCard>
          ))}
        </div>
      </SurfaceCard>

      <SurfaceCard>
        <SectionIntro
          title="How the recruitment process works"
          description="The process is designed to stay readable and predictable: apply once, receive recruiter guidance, and move forward with more context when there is a match."
        />
        <div style={gridStyle('240px')}>
          {processSteps.map((step) => (
            <MutedCard key={step.step}>
              <span style={{ color: tokens.colors.primary, fontWeight: 700 }}>{step.step}</span>
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
        <SectionIntro
          title="Optional AI assistance, clearly framed"
          description="AI on this page is described as optional operational support only. It may help recruiters prepare information and communicate consistently, but it does not replace human review or decision-making."
          style={{ marginBottom: 0 }}
        >
          <p
            style={{
              margin: 0,
              color: tokens.colors.warningText,
              backgroundColor: tokens.colors.warningSurface,
              border: `1px solid ${tokens.colors.warningBorder}`,
              borderRadius: tokens.radii.sm,
              padding: '14px 16px',
              lineHeight: 1.6,
              maxWidth: '860px',
            }}
          >
            Optional AI assistance may support drafting, summarizing, and organizing information. Recruiters remain responsible for candidate communication, evaluation, and hiring decisions.
          </p>
        </SectionIntro>

        <div style={gridStyle('240px')}>
          {aiAssistancePoints.map((item) => (
            <MutedCard key={item.title}>
              <h3 style={{ margin: 0, fontSize: '1.15rem', color: tokens.colors.text }}>{item.title}</h3>
              <p style={{ margin: '8px 0 0', color: tokens.colors.textMuted, lineHeight: 1.7 }}>{item.description}</p>
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
        <span style={{ color: '#93c5fd', fontWeight: 700 }}>Ready to take the next step?</span>
        <h2 style={{ margin: 0, fontSize: '1.9rem' }}>
          Create your profile and let the recruitment team guide the conversation from there.
        </h2>
        <p style={{ margin: 0, maxWidth: '720px', lineHeight: 1.7, color: tokens.colors.darkText }}>
          Sign up to enter the recruitment flow, explore hiring partners for more context, or contact the team if you want help before applying.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <Link to="/signup" style={shellStyles.primaryButton}>
            Create your profile
          </Link>
          <Link
            to="/contact-us"
            style={{
              ...shellStyles.secondaryButton,
              backgroundColor: 'transparent',
              color: '#ffffff',
              border: '1px solid rgba(191, 219, 254, 0.45)',
            }}
          >
            Contact recruitment
          </Link>
        </div>
      </SurfaceCard>
    </PageShell>
  )
}

export default Home
