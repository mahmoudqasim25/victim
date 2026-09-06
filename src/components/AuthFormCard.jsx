import PageShell, { SurfaceCard } from './PageShell'
import { tokens } from './designSystem'

/**
 * Shared auth form wrapper that keeps login and signup aligned with the recruitment shell.
 */
function AuthFormCard({ title, description, children }) {
  return (
    <PageShell narrow centered>
      <SurfaceCard
        style={{
          padding: 'clamp(24px, 4vw, 36px)',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <header style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'center' }}>
          <span
            style={{
              alignSelf: 'center',
              backgroundColor: tokens.colors.primarySoft,
              color: tokens.colors.primaryStrong,
              borderRadius: tokens.radii.pill,
              padding: '8px 14px',
              fontSize: '0.85rem',
              fontWeight: 700,
              letterSpacing: '0.02em',
            }}
          >
            Candidate account access
          </span>
          <h1 style={{ margin: 0, color: tokens.colors.text, fontSize: 'clamp(2rem, 5vw, 2.8rem)' }}>
            {title}
          </h1>
          <p style={{ margin: 0, color: tokens.colors.textMuted, lineHeight: 1.7 }}>{description}</p>
        </header>
        {children}
      </SurfaceCard>
    </PageShell>
  )
}

export default AuthFormCard
