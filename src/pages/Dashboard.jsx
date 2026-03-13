import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Heart, TrendingUp, DollarSign, Calendar, Settings,
  CreditCard, Plus, ChevronDown, Bell, Search, LogOut,
  Home, BarChart3, Gift, FileText, HelpCircle,
  CheckCircle, AlertCircle, ExternalLink
} from 'lucide-react'
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts'

const donationData = [
  { month: 'Sep', amount: 45 },
  { month: 'Oct', amount: 78 },
  { month: 'Nov', amount: 120 },
  { month: 'Dec', amount: 95 },
  { month: 'Jan', amount: 150 },
  { month: 'Feb', amount: 110 },
  { month: 'Mar', amount: 82 },
]

const recentDonations = [
  { id: 1, charity: 'St. Jude Children\'s Research Hospital', amount: 12.50, platform: 'DraftKings', date: 'Mar 13, 2026', status: 'completed' },
  { id: 2, charity: 'American Red Cross', amount: 8.75, platform: 'FanDuel', date: 'Mar 12, 2026', status: 'completed' },
  { id: 3, charity: 'Feeding America', amount: 22.00, platform: 'BetMGM', date: 'Mar 10, 2026', status: 'completed' },
  { id: 4, charity: 'Habitat for Humanity', amount: 5.25, platform: 'DraftKings', date: 'Mar 8, 2026', status: 'completed' },
  { id: 5, charity: 'ASPCA', amount: 15.00, platform: 'Bank (Plaid)', date: 'Mar 5, 2026', status: 'pending' },
]

const connectedPlatforms = [
  { name: 'DraftKings', status: 'connected', color: 'bg-green-600', donations: '$487.25' },
  { name: 'FanDuel', status: 'connected', color: 'bg-blue-600', donations: '$312.80' },
  { name: 'BetMGM', status: 'connected', color: 'bg-amber-500', donations: '$447.45' },
]

const selectedCharities = [
  { name: 'St. Jude Children\'s Research Hospital', percentage: 40 },
  { name: 'American Red Cross', percentage: 25 },
  { name: 'Feeding America', percentage: 20 },
  { name: 'ASPCA', percentage: 15 },
]

export default function Dashboard() {
  const [donationRate, setDonationRate] = useState(5)
  const [activeTab, setActiveTab] = useState('overview')

  const sidebarItems = [
    { icon: <Home className="w-4 h-4" />, label: 'Overview', id: 'overview' },
    { icon: <BarChart3 className="w-4 h-4" />, label: 'Analytics', id: 'analytics' },
    { icon: <Gift className="w-4 h-4" />, label: 'Charities', id: 'charities' },
    { icon: <CreditCard className="w-4 h-4" />, label: 'Platforms', id: 'platforms' },
    { icon: <FileText className="w-4 h-4" />, label: 'Tax Reports', id: 'tax' },
    { icon: <Settings className="w-4 h-4" />, label: 'Settings', id: 'settings' },
  ]

  return (
    <div className="min-h-screen bg-slate-50 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-slate-200 flex flex-col fixed h-full">
        <div className="p-4 border-b border-slate-200">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" fill="white" />
            </div>
            <span className="text-lg font-bold text-slate-900">mykro</span>
          </Link>
        </div>

        <nav className="flex-1 p-3 space-y-1">
          {sidebarItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === item.id
                  ? 'bg-emerald-50 text-emerald-700'
                  : 'text-slate-600 hover:bg-slate-50'
              }`}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>

        <div className="p-3 border-t border-slate-200">
          <div className="flex items-center gap-3 px-3 py-2">
            <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
              JP
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900 truncate">Jason P.</p>
              <p className="text-xs text-slate-500 truncate">jason@example.com</p>
            </div>
            <LogOut className="w-4 h-4 text-slate-400 cursor-pointer hover:text-slate-600" />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 ml-64">
        {/* Top Bar */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between sticky top-0 z-10">
          <div>
            <h1 className="text-xl font-bold text-slate-900">Dashboard</h1>
            <p className="text-sm text-slate-500">Welcome back, Jason</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm bg-slate-50 w-48 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
              />
            </div>
            <button className="relative p-2 hover:bg-slate-50 rounded-lg">
              <Bell className="w-5 h-5 text-slate-500" />
              <div className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
          </div>
        </header>

        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
            {[
              { label: 'Total Donated', value: '$1,247.50', change: '+$82.30', icon: <Heart className="w-5 h-5" />, color: 'text-emerald-600', bg: 'bg-emerald-50' },
              { label: 'This Month', value: '$82.30', change: '+12%', icon: <TrendingUp className="w-5 h-5" />, color: 'text-blue-600', bg: 'bg-blue-50' },
              { label: 'Winnings Tracked', value: '$24,950', change: '3 platforms', icon: <DollarSign className="w-5 h-5" />, color: 'text-violet-600', bg: 'bg-violet-50' },
              { label: 'Donations Made', value: '156', change: 'Since Sep 2025', icon: <Calendar className="w-5 h-5" />, color: 'text-amber-600', bg: 'bg-amber-50' },
            ].map((stat, i) => (
              <div key={i} className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-slate-500">{stat.label}</span>
                  <div className={`w-9 h-9 ${stat.bg} rounded-lg flex items-center justify-center ${stat.color}`}>
                    {stat.icon}
                  </div>
                </div>
                <p className="text-2xl font-bold text-slate-900">{stat.value}</p>
                <p className="text-xs text-slate-500 mt-1">{stat.change}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Chart */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-slate-900">Donation History</h3>
                <button className="text-sm text-slate-500 flex items-center gap-1">
                  Last 7 months <ChevronDown className="w-4 h-4" />
                </button>
              </div>
              <ResponsiveContainer width="100%" height={240}>
                <AreaChart data={donationData}>
                  <defs>
                    <linearGradient id="donationGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10b981" stopOpacity={0.2} />
                      <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                  <XAxis dataKey="month" tick={{ fontSize: 12, fill: '#94a3b8' }} />
                  <YAxis tick={{ fontSize: 12, fill: '#94a3b8' }} tickFormatter={(v) => `$${v}`} />
                  <Tooltip formatter={(v) => [`$${v}`, 'Donated']} />
                  <Area type="monotone" dataKey="amount" stroke="#10b981" fill="url(#donationGradient)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>

            {/* Donation Rate */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">
              <h3 className="font-semibold text-slate-900 mb-4">Donation Rate</h3>
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-emerald-50 border-4 border-emerald-500 mb-3">
                  <span className="text-3xl font-bold text-emerald-600">{donationRate}%</span>
                </div>
                <p className="text-sm text-slate-500">of net winnings</p>
              </div>
              <input
                type="range"
                min="1"
                max="25"
                value={donationRate}
                onChange={(e) => setDonationRate(parseInt(e.target.value))}
                className="w-full accent-emerald-600 mb-4"
              />
              <div className="flex justify-between text-xs text-slate-400">
                <span>1%</span>
                <span>25%</span>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <h4 className="text-sm font-medium text-slate-700 mb-3">Charity Split</h4>
                {selectedCharities.map((c, i) => (
                  <div key={i} className="flex items-center justify-between py-1.5">
                    <span className="text-xs text-slate-600 truncate max-w-[140px]">{c.name}</span>
                    <span className="text-xs font-medium text-emerald-600">{c.percentage}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Recent Donations */}
            <div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">Recent Donations</h3>
                <button className="text-sm text-emerald-600 font-medium">View All</button>
              </div>
              <div className="divide-y divide-slate-100">
                {recentDonations.map((d) => (
                  <div key={d.id} className="px-5 py-3 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center">
                        <Heart className="w-4 h-4 text-emerald-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{d.charity}</p>
                        <p className="text-xs text-slate-500">{d.platform} &middot; {d.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-slate-900">${d.amount.toFixed(2)}</span>
                      {d.status === 'completed' ? (
                        <CheckCircle className="w-4 h-4 text-emerald-500" />
                      ) : (
                        <AlertCircle className="w-4 h-4 text-amber-500" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Connected Platforms */}
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm">
              <div className="p-5 border-b border-slate-100 flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">Platforms</h3>
                <button className="w-7 h-7 bg-emerald-50 rounded-lg flex items-center justify-center text-emerald-600 hover:bg-emerald-100 transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              <div className="p-5 space-y-3">
                {connectedPlatforms.map((p, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 ${p.color} rounded-lg text-white text-xs font-bold flex items-center justify-center`}>
                        {p.name[0]}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-slate-900">{p.name}</p>
                        <p className="text-xs text-emerald-600">Connected</p>
                      </div>
                    </div>
                    <span className="text-sm text-slate-500">{p.donations}</span>
                  </div>
                ))}
                <div className="flex items-center justify-between p-3 bg-violet-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-violet-600 rounded-lg text-white text-xs font-bold flex items-center justify-center">
                      <CreditCard className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-slate-900">Bank via Plaid</p>
                      <p className="text-xs text-violet-600">Auto-detecting</p>
                    </div>
                  </div>
                  <ExternalLink className="w-4 h-4 text-slate-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
