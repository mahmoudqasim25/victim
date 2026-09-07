import { footerContent, tokens } from './designSystem'

const footerStyles = {
  footer: {
    width: '100%',
    maxWidth: tokens.spacing.shellWidth,
    margin: '0 auto',
    padding: `0 ${tokens.spacing.pageX} ${tokens.spacing.pageY}`,
    boxSizing: 'border-box',
  },
  panel: {
    backgroundColor: tokens.colors.darkSurface,
    color: tokens.colors.darkText,
    border: `1px solid ${tokens.colors.border}`,
    borderRadius: tokens.radii.lg,
    padding: 'clamp(24px, 4vw, 32px)',
    display: 'grid',
    gap: '24px',
    boxSizing: 'border-box',
  },
  topRow: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1.4fr) repeat(3, minmax(160px, 1fr))',
    gap: '24px',
    alignItems: 'start',
  },
  companyBlock: {
    display: 'grid',
    gap: '14px',
    minWidth: 0,
  },
  eyebrow: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 'fit-content',
    padding: '8px 14px',
    borderRadius: tokens.radii.pill,
    backgroundColor: 'rgba(219, 234, 254, 0.12)',
    color: '#dbeafe',
    fontSize: '0.85rem',
    fontWeight: 700,
    letterSpacing: '0.02em',
  },
  companyName: {
    margin: 0,
    color: '#ffffff',
    fontSize: '1.35rem',
    lineHeight: 1.2,
  },
  companyDescription: {
    margin: 0,
    color: tokens.colors.darkText,
    lineHeight: 1.7,
    fontSize: '0.98rem',
    maxWidth: '38ch',
  },
  contactList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'grid',
    gap: '8px',
  },
  contactItem: {
    color: tokens.colors.darkText,
    lineHeight: 1.6,
    fontSize: '0.92rem',
  },
  section: {
    display: 'grid',
    gap: '12px',
    minWidth: 0,
  },
  sectionTitle: {
    margin: 0,
    color: '#ffffff',
    fontSize: '1rem',
    lineHeight: 1.3,
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'grid',
    gap: '10px',
  },
  link: {
    display: 'inline-flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    gap: '8px',
    color: '#e2e8f0',
    textDecoration: 'none',
    fontWeight: 600,
    lineHeight: 1.5,
  },
  placeholderTag: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '4px 8px',
    borderRadius: tokens.radii.pill,
    backgroundColor: 'rgba(219, 234, 254, 0.12)',
    color: '#bfdbfe',
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.02em',
  },
  bottomRow: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: '12px 24px',
    paddingTop: '20px',
    borderTop: '1px solid rgba(203, 213, 225, 0.18)',
  },
  legalText: {
    margin: 0,
    color: tokens.colors.darkText,
    lineHeight: 1.6,
    fontSize: '0.9rem',
  },
  copyright: {
    margin: 0,
    color: tokens.colors.darkText,
    lineHeight: 1.6,
    fontSize: '0.9rem',
  },
}

/**
 * Renders the shared recruitment footer with structured placeholder company and support content.
 */
function AppFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer style={footerStyles.footer} aria-labelledby="app-footer-title">
      <div style={footerStyles.panel}>
        <div style={footerStyles.topRow}>
          <section style={footerStyles.companyBlock} aria-labelledby="app-footer-title">
            <span style={footerStyles.eyebrow}>{footerContent.company.eyebrow}</span>
            <h2 id="app-footer-title" style={footerStyles.companyName}>
              {footerContent.company.name}
            </h2>
            <p style={footerStyles.companyDescription}>{footerContent.company.description}</p>
            <ul style={footerStyles.contactList} aria-label="Placeholder company contact details">
              {footerContent.company.contact.map((item) => (
                <li key={item} style={footerStyles.contactItem}>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {footerContent.sections.map((section) => (
            <section key={section.title} style={footerStyles.section} aria-labelledby={`footer-${section.title}`}>
              <h3 id={`footer-${section.title}`} style={footerStyles.sectionTitle}>
                {section.title}
              </h3>
              <ul style={footerStyles.linkList}>
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} style={footerStyles.link} aria-disabled={link.isPlaceholder || undefined}>
                      <span>{link.label}</span>
                      {link.isPlaceholder ? <span style={footerStyles.placeholderTag}>Placeholder</span> : null}
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        <div style={footerStyles.bottomRow}>
          <p style={footerStyles.legalText}>{footerContent.legalNotice}</p>
          <p style={footerStyles.copyright}>© {currentYear} FlairsTech Recruitment placeholder footer</p>
        </div>
      </div>
    </footer>
  )
}

export default AppFooter
