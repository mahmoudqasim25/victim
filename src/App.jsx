import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Privacy from './pages/Privacy'
import Home from './pages/Home'
import HelloWorld from './pages/HelloWorld'
import Terms from './pages/Terms'
import Contact from './pages/Contact'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
}

const contentStyle = {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

function App() {
  return (
    <Router>
      <div style={containerStyle}>
        <Navbar />
        <main style={contentStyle}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hello" element={<HelloWorld />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
