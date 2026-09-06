import { Link, useLocation } from 'react-router-dom'
import { shellStyles, tokens } from './designSystem'

const primaryNavItems = [
  { to: '/', label: 'Overview' },
  { to: '/hello', label: 'Hello World Review' },
  { to: '/partners', label: 'Hiring Partners' },
  { to: '/contact-us', label: 'Contact' },
]

const secondaryNavItems = [{ to: '/login', label: 'Candidate Log In' }]

const navStyle = {
  position: 'sticky',
  top: 0,
  zIndex: 10,
  backdropFilter: 'blur(18px)',
  backgroundColor: tokens.colors.shellBackground,
  borderBottom: `1px solid ${tokens.colors.border}`,
}

const navInnerStyle = {
  width: '100%',
  maxWidth: tokens.spacing.shellWidth,
  margin: '0 auto',
  padding: '16px 20px',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
  flexWrap: 'wrap',
}

const brandBlockStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '4px',
  textDecoration: 'none',
}

const navGroupsStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '12px',
  flexWrap: 'wrap',
  flex: 1,
}

const primaryLinksStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  flexWrap: 'wrap',
}

const secondaryLinksStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  flexWrap: 'wrap',
}

function getNavLinkStyle(isActive) {
  return {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '40px',
    padding: '10px 14px',
    borderRadius: tokens.radii.pill,
    textDecoration: 'none',
    fontWeight: 600,
    color: isActive ? tokens.colors.primaryStrong : tokens.colors.textMuted,
    backgroundColor: isActive ? tokens.colors.primarySoft : 'transparent',
    border: `1px solid ${isActive ? tokens.colors.borderStrong : 'transparent'}`,
    boxSizing: 'border-box',
    outlineOffset: '3px',
    transition: 'background-color 160ms ease, color 160ms ease, border-color 160ms ease, box-shadow 160ms ease',
  }
}

function Navbar() {
  const location = useLocation()

  return (
    <nav style={navStyle} aria-label="Primary site navigation">
      <div style={navInnerStyle}>
        <Link
          to="/"
          aria-label="FlairsTech Recruitment home"
          style={{ ...brandBlockStyle, outlineOffset: '4px' }}
        >
          <span style={{ color: tokens.colors.text, fontSize: '1.1rem', fontWeight: 800 }}>
            FlairsTech Recruitment
          </span>
          <span style={{ color: tokens.colors.textSubtle, fontSize: '0.9rem' }}>
            Shared candidate experience shell
          </span>
        </Link>

        <div style={navGroupsStyle}>
          <div style={primaryLinksStyle} aria-label="Primary navigation">
            {primaryNavItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                style={getNavLinkStyle(location.pathname === item.to)}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div style={secondaryLinksStyle} aria-label="Candidate account actions">
            {secondaryNavItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                style={getNavLinkStyle(location.pathname === item.to)}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/signup" style={shellStyles.primaryButton}>
              Create Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
