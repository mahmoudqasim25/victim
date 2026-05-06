import { Link } from 'react-router-dom'

const navStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '20px',
  padding: '1rem',
  background: '#f4f4f4',
  borderBottom: '1px solid #ccc'
}

function Navbar() {
  return (
    <nav style={navStyle}>
      <Link to="/">Home</Link>
      <Link to="/hello">Hello World</Link>
    </nav>
  )
}

export default Navbar
