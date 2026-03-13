import { Link, useLocation } from 'react-router-dom'
import { Heart, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)
  const isLanding = location.pathname === '/'

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" fill="white" />
            </div>
            <span className="text-xl font-bold text-slate-900">mykro</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className={`text-sm font-medium no-underline ${isLanding ? 'text-emerald-600' : 'text-slate-600 hover:text-slate-900'}`}>
              Home
            </Link>
            <Link to="/dashboard" className="text-sm font-medium text-slate-600 hover:text-slate-900 no-underline">
              Dashboard
            </Link>
            <Link to="/developers" className="text-sm font-medium text-slate-600 hover:text-slate-900 no-underline">
              Developers
            </Link>
            <Link
              to="/dashboard"
              className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors no-underline"
            >
              Get Started
            </Link>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 px-4 py-4 space-y-3">
          <Link to="/" className="block text-sm font-medium text-slate-600 no-underline" onClick={() => setMobileOpen(false)}>Home</Link>
          <Link to="/dashboard" className="block text-sm font-medium text-slate-600 no-underline" onClick={() => setMobileOpen(false)}>Dashboard</Link>
          <Link to="/developers" className="block text-sm font-medium text-slate-600 no-underline" onClick={() => setMobileOpen(false)}>Developers</Link>
        </div>
      )}
    </nav>
  )
}
