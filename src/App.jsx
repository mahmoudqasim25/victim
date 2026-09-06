import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import HelloWorld from './pages/HelloWorld'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ContactUs from './pages/ContactUs'
import Partners from './pages/Partners'
import { shellStyles } from './components/designSystem'

const pageTitles = {
  '/': 'FlairsTech Recruitment Overview',
  '/hello': 'FlairsTech Recruitment Hello World Review',
  '/login': 'FlairsTech Recruitment Candidate Log In',
  '/signup': 'FlairsTech Recruitment Create Profile',
  '/contact-us': 'FlairsTech Recruitment Contact Recruitment Team',
  '/partners': 'FlairsTech Recruitment Hiring Partners Spotlight',
}

function AppLayout() {
  const location = useLocation()

  useEffect(() => {
    document.title = pageTitles[location.pathname] ?? 'FlairsTech Recruitment'
  }, [location.pathname])

  return (
    <div style={shellStyles.appShell}>
      <Navbar />
      <main style={shellStyles.shellFrame}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hello" element={<HelloWorld />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/partners" element={<Partners />} />
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
