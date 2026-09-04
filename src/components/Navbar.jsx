import { Link } from 'react-router-dom'

const navStyle = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '16px',
  padding: '1rem 1.5rem',
  backgroundColor: '#ffffff',
  borderBottom: '1px solid #e5e7eb',
  flexWrap: 'wrap'
}

const brandStyle = {
  fontSize: '1.125rem',
  fontWeight: '700',
  color: '#111827',
  textDecoration: 'none'
}

const linksGroupStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  flexWrap: 'wrap'
}

const primaryLinksStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  flexWrap: 'wrap'
}

const authLinksStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
  flexWrap: 'wrap'
}

const navLinkStyle = {
  color: '#374151',
  textDecoration: 'none',
  fontWeight: '500'
}

const primaryActionStyle = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.625rem 1rem',
  borderRadius: '999px',
  backgroundColor: '#2563eb',
  color: '#ffffff',
  textDecoration: 'none',
  fontWeight: '600'
}

function Navbar() {
  return (
    <nav style={navStyle}>
      <Link to="/" style={brandStyle}>
        RecruitFlow
      </Link>

      <div style={linksGroupStyle}>
        <div style={primaryLinksStyle}>
          <Link to="/" style={navLinkStyle}>
            Recruitment Home
          </Link>
          <Link to="/partners" style={navLinkStyle}>
            Hiring Partners
          </Link>
          <Link to="/contact-us" style={navLinkStyle}>
            Recruitment Contact
          </Link>
          <Link to="/hello" style={navLinkStyle}>
            Candidate Updates
          </Link>
        </div>

        <div style={authLinksStyle}>
          <Link to="/login" style={navLinkStyle}>
            Candidate Log In
          </Link>
          <Link to="/signup" style={primaryActionStyle}>
            Create Profile
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
