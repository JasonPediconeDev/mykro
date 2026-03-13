import { Routes, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Onboarding from './pages/Onboarding'
import Dashboard from './pages/Dashboard'
import Developers from './pages/Developers'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/get-started" element={<Onboarding />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/developers" element={<Developers />} />
    </Routes>
  )
}

export default App
