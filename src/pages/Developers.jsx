import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Code, Terminal, Package, Webhook, Key, BookOpen,
  Copy, Check, ArrowRight, Zap, Shield, Globe
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const codeExamples = {
  react: {
    label: 'React',
    install: 'npm install @mykro/react',
    code: `import { MykroWidget, MykroProvider } from '@mykro/react'

function App() {
  return (
    <MykroProvider apiKey="mk_live_...">
      <WinningsPage />
    </MykroProvider>
  )
}

function WinningsPage({ payout }) {
  return (
    <MykroWidget
      amount={payout.amount}
      userId={payout.userId}
      onDonate={({ charityId, amount }) => {
        console.log(\`Donated $\${amount}\`)
      }}
      theme={{
        primary: '#10b981',
        radius: '12px',
      }}
    />
  )
}`,
  },
  rest: {
    label: 'REST API',
    install: 'curl https://api.mykro.co/v1',
    code: `# Create a donation from a winning event
curl -X POST https://api.mykro.co/v1/donations \\
  -H "Authorization: Bearer mk_live_..." \\
  -H "Content-Type: application/json" \\
  -d '{
    "user_id": "usr_abc123",
    "winning_amount": 250.00,
    "platform": "your-platform",
    "donation_percentage": 5,
    "charities": [
      { "id": "chr_stjude", "split": 60 },
      { "id": "chr_redcross", "split": 40 }
    ]
  }'

# Response
{
  "id": "don_xyz789",
  "amount": 12.50,
  "status": "completed",
  "charities": [
    { "name": "St. Jude", "amount": 7.50 },
    { "name": "Red Cross", "amount": 5.00 }
  ],
  "tax_receipt_url": "https://mykro.co/receipts/don_xyz789"
}`,
  },
  webhook: {
    label: 'Webhooks',
    install: '# Configure in your Mykro dashboard',
    code: `// Webhook event: donation.completed
{
  "event": "donation.completed",
  "data": {
    "donation_id": "don_xyz789",
    "user_id": "usr_abc123",
    "amount": 12.50,
    "winning_amount": 250.00,
    "charities": [
      {
        "id": "chr_stjude",
        "name": "St. Jude Children's Research Hospital",
        "amount": 7.50
      }
    ],
    "platform": "your-platform",
    "created_at": "2026-03-13T10:30:00Z"
  }
}

// Other webhook events:
// - donation.pending
// - donation.failed
// - user.connected
// - user.settings_updated
// - payout.completed`,
  },
  sdk: {
    label: 'Node SDK',
    install: 'npm install @mykro/node',
    code: `import Mykro from '@mykro/node'

const mykro = new Mykro('mk_live_...')

// Report a winning event
const donation = await mykro.donations.create({
  userId: 'usr_abc123',
  winningAmount: 250.00,
  metadata: {
    gameType: 'sports_bet',
    eventId: 'evt_nba_20260313',
  },
})

console.log(donation.amount)     // 12.50
console.log(donation.charities)  // [{ name: 'St. Jude', ... }]

// List user's donations
const history = await mykro.donations.list({
  userId: 'usr_abc123',
  limit: 20,
})

// Get tax summary
const taxSummary = await mykro.tax.getSummary({
  userId: 'usr_abc123',
  year: 2026,
})`,
  },
}

export default function Developers() {
  const [activeTab, setActiveTab] = useState('react')
  const [copied, setCopied] = useState(false)

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-emerald-500/20">
            <Terminal className="w-4 h-4" />
            Developer Platform
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-6">
            Build charitable giving into
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-emerald-300"> your platform</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            Drop-in components, a powerful REST API, and SDKs for every major platform.
            Get your users donating in under 30 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => document.getElementById('docs').scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors"
            >
              <BookOpen className="w-4 h-4" /> Read the Docs
            </button>
            <button className="inline-flex items-center justify-center gap-2 bg-slate-700 text-slate-200 px-6 py-3 rounded-xl font-semibold hover:bg-slate-600 transition-colors border border-slate-600">
              <Key className="w-4 h-4" /> Get API Keys
            </button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Package className="w-6 h-6" />, title: 'Drop-in SDK', desc: 'Pre-built React, iOS, and Android components. Customize themes to match your brand.', color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { icon: <Code className="w-6 h-6" />, title: 'REST API', desc: 'Full-featured API for custom integrations. Report winnings, manage users, pull analytics.', color: 'text-violet-600', bg: 'bg-violet-50' },
            { icon: <Webhook className="w-6 h-6" />, title: 'Webhooks', desc: 'Real-time event notifications. Get notified on donations, user connections, and payouts.', color: 'text-blue-600', bg: 'bg-blue-50' },
          ].map((f, i) => (
            <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className={`w-12 h-12 ${f.bg} rounded-xl flex items-center justify-center ${f.color} mb-4`}>
                {f.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{f.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Code Examples */}
      <section id="docs" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Quick Start</h2>
            <p className="text-lg text-slate-600">Everything you need to integrate Mykro into your platform.</p>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 bg-slate-100 rounded-lg p-1 mb-6 w-fit mx-auto">
            {Object.entries(codeExamples).map(([key, val]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === key
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-500 hover:text-slate-700'
                }`}
              >
                {val.label}
              </button>
            ))}
          </div>

          {/* Install Command */}
          <div className="bg-slate-900 rounded-t-xl px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Terminal className="w-4 h-4 text-slate-400" />
              <code className="text-sm text-slate-300 bg-transparent">{codeExamples[activeTab].install}</code>
            </div>
            <button
              onClick={() => handleCopy(codeExamples[activeTab].install)}
              className="p-1.5 hover:bg-slate-800 rounded transition-colors"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-slate-400" />}
            </button>
          </div>

          {/* Code Block */}
          <div className="bg-slate-950 rounded-b-xl p-6 overflow-x-auto">
            <pre className="text-sm leading-relaxed">
              <code className="text-slate-300 bg-transparent">{codeExamples[activeTab].code}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* API Reference Highlights */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">API Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { method: 'POST', path: '/v1/donations', desc: 'Create a donation from a winning event' },
              { method: 'GET', path: '/v1/donations', desc: 'List donations with filtering & pagination' },
              { method: 'GET', path: '/v1/donations/:id', desc: 'Retrieve a specific donation' },
              { method: 'POST', path: '/v1/users', desc: 'Register a user with Mykro' },
              { method: 'GET', path: '/v1/users/:id/settings', desc: 'Get user donation preferences' },
              { method: 'PUT', path: '/v1/users/:id/settings', desc: 'Update user donation rate & charities' },
              { method: 'GET', path: '/v1/charities', desc: 'Search & list available charities' },
              { method: 'GET', path: '/v1/tax/:userId/summary', desc: 'Get annual tax deduction summary' },
              { method: 'POST', path: '/v1/webhooks', desc: 'Register a webhook endpoint' },
              { method: 'GET', path: '/v1/analytics/platform', desc: 'Platform-wide donation analytics' },
            ].map((endpoint, i) => (
              <div key={i} className="bg-white rounded-lg border border-slate-200 px-4 py-3 flex items-center gap-3 hover:border-emerald-300 transition-colors">
                <span className={`text-xs font-bold px-2 py-0.5 rounded ${
                  endpoint.method === 'POST' ? 'bg-emerald-100 text-emerald-700' :
                  endpoint.method === 'PUT' ? 'bg-amber-100 text-amber-700' :
                  'bg-blue-100 text-blue-700'
                }`}>
                  {endpoint.method}
                </span>
                <code className="text-sm text-slate-700 font-medium bg-transparent">{endpoint.path}</code>
                <span className="text-xs text-slate-400 ml-auto hidden sm:block">{endpoint.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">Why Platforms Integrate Mykro</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Zap className="w-8 h-8" />, stat: '23%', label: 'Higher user retention for donating players', color: 'text-emerald-600' },
              { icon: <Shield className="w-8 h-8" />, stat: '100%', label: 'PCI compliant, SOC 2 Type II certified', color: 'text-violet-600' },
              { icon: <Globe className="w-8 h-8" />, stat: '<30min', label: 'Average integration time with our SDK', color: 'text-blue-600' },
            ].map((item, i) => (
              <div key={i} className="p-6">
                <div className={`${item.color} mb-4 flex justify-center`}>{item.icon}</div>
                <p className="text-4xl font-bold text-slate-900 mb-2">{item.stat}</p>
                <p className="text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Integrate?</h2>
          <p className="text-slate-400 mb-8">
            Get your API keys and start building in minutes. Free for platforms with under 1,000 active donors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-emerald-600 transition-colors">
              Get API Keys <ArrowRight className="w-4 h-4" />
            </button>
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-2 bg-slate-700 text-slate-200 px-6 py-3 rounded-xl font-semibold hover:bg-slate-600 transition-colors border border-slate-600 no-underline"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
