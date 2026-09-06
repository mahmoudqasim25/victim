import { Link } from 'react-router-dom'
import PageShell, { MutedCard, PageIntro, SurfaceCard } from '../components/PageShell'
import { shellStyles, tokens } from '../components/designSystem'

const heroHighlights = [
  'Sample-only recruitment messaging that can be replaced with live campaign copy later.',
  'A guided candidate journey from discovery to sign-up and follow-up.',
  'Modular sections designed for quick updates by hiring, marketing, or operations teams.',
]

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
]

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
]

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
]

const aiManagedServiceIntro = {
  eyebrow: 'Illustrative service model',
  title: 'How AI managed our service',
  description:
    'This sample section shows how AI can support a recruitment service by organizing intake details, surfacing recruiter prompts, and keeping candidate communications consistent. It is illustrative content only and does not describe live automation, verified client outcomes, or autonomous hiring decisions.',
  disclaimer:
    'Illustrative example only: the workflow below is a reusable content layout for future service messaging and should not be read as a live product claim.',
  callout:
    'Why AI was used: to help recruiters prepare faster, keep service updates consistent, and give teams a clearer view of candidate support tasks while people remain in control of decisions.',
}

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
]

const aiManagedServiceBenefits = [
  'Supports recruiters with faster preparation for candidate conversations.',
  'Helps operations teams keep service steps documented and easier to review.',
  'Creates a repeatable layout for future recruitment copy updates without redesigning the page.',
]

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
]

const aiManagedServiceSummary =
  'In this illustrative model, AI acts as a support layer within the recruitment service, helping teams organize information and prepare next steps while people remain responsible for communication, review, and hiring decisions.'

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
            eyebrow="Recruitment landing page demo"
            title="Help candidates discover FlairsTech and take the next step with confidence."
            description="This sample home page introduces the recruitment platform, explains the journey in plain language, and guides visitors toward profile creation, hiring partner discovery, or recruiter contact. All copy, stats, and highlights below are placeholder content for demonstration."
          />
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <Link to="/signup" style={shellStyles.primaryButton}>
              Start your application
            </Link>
            <Link to="/partners" style={shellStyles.secondaryButton}>
              Explore hiring partners
            </Link>
            <Link to="/contact-us" style={shellStyles.secondaryButton}>
              Contact recruitment team
            </Link>
          </div>
        </div>

        <div style={{ display: 'grid', gap: '14px' }}>
          {heroHighlights.map((item) => (
            <MutedCard key={item}>
              <span style={{ color: tokens.colors.primary, fontWeight: 700 }}>Why this page exists</span>
              <p style={{ margin: 0, color: tokens.colors.textMuted, lineHeight: 1.6 }}>{item}</p>
            </MutedCard>
          ))}
        </div>
      </SurfaceCard>

      <SurfaceCard>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
          <h2 style={{ margin: 0, fontSize: '1.8rem', color: tokens.colors.text }}>
            Sample recruitment highlights
          </h2>
          <p style={{ margin: 0, color: tokens.colors.textMuted, lineHeight: 1.7 }}>
            These figures are illustrative placeholders only, included to show how campaign stats or
            proof points can be presented on the landing page.
          </p>
        </div>
        <div style={gridStyle('200px')}>
          {sampleStats.map((stat) => (
            <MutedCard key={stat.value}>
              <strong style={{ fontSize: '2rem', color: tokens.colors.text }}>{stat.value}</strong>
              <p style={{ margin: 0, color: tokens.colors.textMuted, lineHeight: 1.6 }}>{stat.label}</p>
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
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
            alignItems: 'start',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <span style={{ color: tokens.colors.primary, fontWeight: 700 }}>
              {aiManagedServiceIntro.eyebrow}
            </span>
            <h2 style={{ margin: 0, fontSize: '1.8rem', color: tokens.colors.text }}>
              {aiManagedServiceIntro.title}
            </h2>
            <p style={{ margin: 0, color: tokens.colors.textMuted, lineHeight: 1.7, maxWidth: '860px' }}>
              {aiManagedServiceIntro.description}
            </p>
          </div>

          <aside
            aria-label="Why AI was used"
            style={{
              backgroundColor: tokens.colors.surfaceAccent,
              border: `1px solid ${tokens.colors.borderStrong}`,
              borderRadius: tokens.radii.md,
              padding: '20px 22px',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              boxShadow: tokens.shadows.soft,
            }}
          >
            <span style={{ color: tokens.colors.primaryStrong, fontWeight: 700 }}>Why AI was used</span>
            <p style={{ margin: 0, color: '#1e3a8a', lineHeight: 1.7 }}>{aiManagedServiceIntro.callout}</p>
          </aside>
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
          {aiManagedServiceIntro.disclaimer}
        </p>

        <div style={gridStyle('240px')}>
          {aiManagedServiceHighlights.map((item, index) => (
            <SurfaceCard key={item.title} style={{ ...shellStyles.mutedCard, backgroundColor: tokens.colors.surface }}>
              <span style={{ color: tokens.colors.primary, fontWeight: 700 }}>Service highlight {index + 1}</span>
              <h3 style={{ margin: 0, fontSize: '1.15rem', color: tokens.colors.text }}>{item.title}</h3>
              <p style={{ margin: 0, color: tokens.colors.textMuted, lineHeight: 1.7 }}>{item.description}</p>
            </SurfaceCard>
          ))}
        </div>

        <div style={gridStyle('260px')}>
          <SurfaceCard style={{ ...shellStyles.mutedCard, backgroundColor: tokens.colors.surface }}>
            <span style={{ color: tokens.colors.primary, fontWeight: 700 }}>Business-friendly benefits</span>
            <ul style={{ margin: 0, paddingLeft: '20px', color: tokens.colors.textMuted, lineHeight: 1.8 }}>
              {aiManagedServiceBenefits.map((benefit) => (
                <li key={benefit}>{benefit}</li>
              ))}
            </ul>
          </SurfaceCard>

          <SurfaceCard
            style={{
              ...shellStyles.mutedCard,
              gap: '16px',
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: tokens.colors.surface,
            }}
          >
            <span style={{ color: tokens.colors.primary, fontWeight: 700 }}>Sample outcomes</span>
            <div style={gridStyle('180px')}>
              {aiManagedServiceOutcomes.map((outcome) => (
                <MutedCard key={outcome.value} style={{ padding: '16px' }}>
                  <strong style={{ color: tokens.colors.text }}>{outcome.value}</strong>
                  <p style={{ margin: 0, color: tokens.colors.textMuted, lineHeight: 1.6 }}>
                    {outcome.label}
                  </p>
                </MutedCard>
              ))}
            </div>
          </SurfaceCard>
        </div>

        <div
          style={{
            backgroundColor: tokens.colors.surfaceAccent,
            border: `1px solid ${tokens.colors.borderStrong}`,
            borderRadius: tokens.radii.md,
            padding: '20px 24px',
          }}
        >
          <h3 style={{ margin: 0, color: tokens.colors.primaryStrong, fontSize: '1rem' }}>
            Closing summary
          </h3>
          <p style={{ margin: '10px 0 0', color: '#1e293b', lineHeight: 1.7, maxWidth: '900px' }}>
            {aiManagedServiceSummary}
          </p>
        </div>
      </SurfaceCard>

      <SurfaceCard>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
          <h2 style={{ margin: 0, fontSize: '1.8rem', color: tokens.colors.text }}>
            Candidate journey at a glance
          </h2>
          <p style={{ margin: 0, color: tokens.colors.textMuted, lineHeight: 1.7 }}>
            This simple process layout keeps the recruitment path readable while preserving the
            primary calls to action above and below.
          </p>
        </div>
        <div style={gridStyle('240px')}>
          {processSteps.map((step, index) => (
            <MutedCard key={step.title}>
              <span style={{ color: tokens.colors.primary, fontWeight: 700 }}>Step {index + 1}</span>
              <h3 style={{ margin: 0, fontSize: '1.25rem', color: tokens.colors.text }}>{step.title}</h3>
              <p style={{ margin: 0, color: tokens.colors.textMuted, lineHeight: 1.7 }}>{step.description}</p>
            </MutedCard>
          ))}
        </div>
      </SurfaceCard>

      <SurfaceCard>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
          <h2 style={{ margin: 0, fontSize: '1.8rem', color: tokens.colors.text }}>
            Featured hiring tracks
          </h2>
          <p style={{ margin: 0, color: tokens.colors.textMuted, lineHeight: 1.7 }}>
            Modular content blocks like these make it easy to add, remove, or reorder future
            recruitment themes without redesigning the page.
          </p>
        </div>
        <div style={gridStyle('240px')}>
          {featuredTracks.map((track) => (
            <MutedCard key={track.title}>
              <h3 style={{ margin: 0, fontSize: '1.2rem', color: tokens.colors.text }}>{track.title}</h3>
              <p style={{ margin: 0, color: tokens.colors.textMuted, lineHeight: 1.7 }}>{track.description}</p>
            </MutedCard>
          ))}
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
          <span style={{ color: tokens.colors.primary, fontWeight: 700 }}>Featured next step</span>
          <h2 style={{ margin: 0, fontSize: '1.9rem', color: tokens.colors.text }}>
            Explore the hiring partners behind the recruitment journey.
          </h2>
          <p style={{ margin: 0, color: tokens.colors.textMuted, lineHeight: 1.7, maxWidth: '640px' }}>
            Give candidates and stakeholders a direct path to the partner experience so they can
            see the organizations, brands, or teams represented in this recruitment showcase.
          </p>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', justifyContent: 'flex-start' }}>
          <Link to="/partners" style={shellStyles.primaryButton}>
            Explore hiring partners
          </Link>
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
          Move from interest to action with a clear recruitment journey.
        </h2>
        <p style={{ margin: 0, maxWidth: '720px', lineHeight: 1.7, color: tokens.colors.darkText }}>
          Candidates can begin with sign-up, explore hiring partners, or use the contact page for
          follow-up. This section is intentionally simple so future teams can swap in
          campaign-specific calls to action.
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
          <Link
            to="/signup"
            style={{
              ...shellStyles.primaryButton,
              backgroundColor: '#ffffff',
              color: tokens.colors.text,
              borderColor: '#ffffff',
              boxShadow: 'none',
            }}
          >
            Create candidate account
          </Link>
          <Link
            to="/partners"
            style={{
              ...shellStyles.secondaryButton,
              backgroundColor: 'transparent',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.35)',
            }}
          >
            Explore hiring partners
          </Link>
          <Link
            to="/contact-us"
            style={{
              ...shellStyles.secondaryButton,
              backgroundColor: 'transparent',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.35)',
            }}
          >
            Ask a recruitment question
          </Link>
        </div>
      </SurfaceCard>
    </PageShell>
  )
}

export default Home
