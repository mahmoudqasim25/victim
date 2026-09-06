import { getPageShellStyles, shellStyles, tokens } from './designSystem';

/**
 * Wraps route content in the shared recruitment page shell.
 */
function PageShell({ children, narrow = false, centered = false, style }) {
  const pageShell = getPageShellStyles({ narrow, centered });

  return <section style={{ ...pageShell.page, ...style }}>{children}</section>;
}

/**
 * Renders a shared card surface for route sections and forms.
 */
export function SurfaceCard({ children, style }) {
  return <div style={{ ...shellStyles.sectionCard, ...style }}>{children}</div>;
}

/**
 * Renders a muted supporting card surface.
 */
export function MutedCard({ children, style }) {
  return <div style={{ ...shellStyles.mutedCard, ...style }}>{children}</div>;
}

/**
 * Renders a reusable page intro block with optional eyebrow text.
 */
export function PageIntro({ eyebrow, title, description, style }) {
  return (
    <header style={{ display: 'flex', flexDirection: 'column', gap: '12px', ...style }}>
      {eyebrow ? <span style={shellStyles.eyebrow}>{eyebrow}</span> : null}
      <h1
        style={{
          margin: 0,
          fontSize: tokens.typography.title,
          lineHeight: 1.05,
          color: tokens.colors.text,
        }}
      >
        {title}
      </h1>
      {description ? (
        <p
          style={{
            margin: 0,
            color: tokens.colors.textMuted,
            lineHeight: tokens.typography.bodyLineHeight,
            fontSize: '1.02rem',
            maxWidth: '760px',
          }}
        >
          {description}
        </p>
      ) : null}
    </header>
  );
}

/**
 * Renders a consistent section heading block for shared route sections.
 */
export function SectionIntro({ title, description, children, style }) {
  return (
    <div style={{ ...shellStyles.sectionHeader, ...style }}>
      <h2 style={shellStyles.sectionTitle}>{title}</h2>
      {description ? <p style={shellStyles.sectionDescription}>{description}</p> : null}
      {children}
    </div>
  );
}

export default PageShell;
