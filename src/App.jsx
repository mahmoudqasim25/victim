import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import HelloWorld from './pages/HelloWorld'

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
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
