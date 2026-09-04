import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import HelloWorld from './pages/HelloWorld'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ContactUs from './pages/ContactUs'

const appShellStyle = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#f8fafc'
}

const fullWidthContentStyle = {
  flex: 1,
  width: '100%'
}

const centeredContentStyle = {
  flex: 1,
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

function AppLayout() {
  const location = useLocation()
  const isHomeRoute = location.pathname === '/'

  return (
    <div style={appShellStyle}>
      <Navbar />
      <main style={isHomeRoute ? fullWidthContentStyle : centeredContentStyle}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact-us" element={<ContactUs />} />
        </Routes>
      </main>
    </div>
  )
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  )
}

export default App
