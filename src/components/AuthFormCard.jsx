import { Link } from 'react-router-dom'
import PageShell, { MutedCard, SurfaceCard } from './PageShell'
import { shellStyles, tokens } from './designSystem'

const authCardStyles = {
  layout: {
    display: 'grid',
    gap: '20px',
  },
  heroCard: {
    display: 'grid',
    gap: '24px',
    padding: 'clamp(24px, 4vw, 36px)',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    textAlign: 'center',
  },
  badge: {
    alignSelf: 'center',
    backgroundColor: tokens.colors.primarySoft,
    color: tokens.colors.primaryStrong,
    borderRadius: tokens.radii.pill,
    padding: '8px 14px',
    fontSize: '0.85rem',
    fontWeight: 700,
    letterSpacing: '0.02em',
  },
  title: {
    margin: 0,
    color: tokens.colors.text,
    fontSize: 'clamp(2rem, 5vw, 2.8rem)',
    lineHeight: 1.05,
  },
  description: {
    margin: 0,
    color: tokens.colors.textMuted,
    lineHeight: 1.7,
  },
  nav: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap',
  },
  navLink: {
    padding: '8px 14px',
    borderRadius: tokens.radii.pill,
    textDecoration: 'none',
    fontWeight: 700,
    color: tokens.colors.textSubtle,
    backgroundColor: tokens.colors.surfaceMuted,
    border: `1px solid ${tokens.colors.border}`,
  },
  activeNavLink: {
    color: tokens.colors.primaryStrong,
    backgroundColor: tokens.colors.primarySoft,
    border: `1px solid ${tokens.colors.borderStrong}`,
  },
  highlights: {
    display: 'grid',
    gap: '12px',
    gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
  },
  highlightCard: {
    padding: '16px',
    borderRadius: tokens.radii.sm,
    backgroundColor: tokens.colors.surfaceMuted,
    border: `1px solid ${tokens.colors.border}`,
    textAlign: 'left',
  },
  highlightTitle: {
    margin: '0 0 6px',
    color: tokens.colors.text,
    fontSize: '0.95rem',
  },
  highlightText: {
    margin: 0,
    color: tokens.colors.textMuted,
    lineHeight: 1.6,
    fontSize: '0.92rem',
  },
  formCard: {
    padding: 'clamp(24px, 4vw, 32px)',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formHeader: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    textAlign: 'left',
  },
  formTitle: {
    margin: 0,
    color: tokens.colors.text,
    fontSize: '1.25rem',
  },
  formDescription: {
    margin: 0,
    color: tokens.colors.textMuted,
    lineHeight: 1.6,
    fontSize: '0.95rem',
  },
  supportCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
  },
  supportTitle: {
    margin: 0,
    color: tokens.colors.text,
    fontSize: '1rem',
  },
  supportText: {
    margin: 0,
    color: tokens.colors.textMuted,
    lineHeight: 1.6,
    fontSize: '0.95rem',
  },
  supportLink: {
    ...shellStyles.secondaryButton,
    minHeight: '40px',
    alignSelf: 'flex-start',
    color: tokens.colors.primaryStrong,
    backgroundColor: tokens.colors.surface,
  },
}

/**
 * Shared auth form wrapper that keeps login and signup aligned with the recruitment shell.
 */
function AuthFormCard({
  title,
  description,
  children,
  currentView,
  formTitle,
  formDescription,
  highlights = [],
}) {
  return (
    <PageShell narrow centered>
      <div style={authCardStyles.layout}>
        <SurfaceCard style={authCardStyles.heroCard}>
          <header style={authCardStyles.header}>
            <span style={authCardStyles.badge}>Candidate account access</span>
            <h1 style={authCardStyles.title}>{title}</h1>
            <p style={authCardStyles.description}>{description}</p>
            <nav aria-label="Authentication pages" style={authCardStyles.nav}>
              <Link
                to="/login"
                style={{
                  ...authCardStyles.navLink,
                  ...(currentView === 'login' ? authCardStyles.activeNavLink : null),
                }}
              >
                Log in
              </Link>
              <Link
                to="/signup"
                style={{
                  ...authCardStyles.navLink,
                  ...(currentView === 'signup' ? authCardStyles.activeNavLink : null),
                }}
              >
                Create profile
              </Link>
            </nav>
          </header>

          {highlights.length > 0 ? (
            <div style={authCardStyles.highlights}>
              {highlights.map((highlight) => (
                <div key={highlight.title} style={authCardStyles.highlightCard}>
                  <h2 style={authCardStyles.highlightTitle}>{highlight.title}</h2>
                  <p style={authCardStyles.highlightText}>{highlight.description}</p>
                </div>
              ))}
            </div>
          ) : null}
        </SurfaceCard>

        <SurfaceCard style={authCardStyles.formCard}>
          {(formTitle || formDescription) && (
            <div style={authCardStyles.formHeader}>
              {formTitle ? <h2 style={authCardStyles.formTitle}>{formTitle}</h2> : null}
              {formDescription ? <p style={authCardStyles.formDescription}>{formDescription}</p> : null}
            </div>
          )}
          {children}
        </SurfaceCard>

        <MutedCard style={authCardStyles.supportCard}>
          <h2 style={authCardStyles.supportTitle}>Optional guided help</h2>
          <p style={authCardStyles.supportText}>
            You can use the guided help experience to clarify next steps or form expectations. It offers
            general guidance only and does not create accounts, review credentials, or influence hiring
            decisions.
          </p>
          <Link to="/" style={authCardStyles.supportLink}>
            Return to dashboard
          </Link>
        </MutedCard>
      </div>
    </PageShell>
  )
}

export default AuthFormCard
