import { Link } from 'react-router-dom'
import {
  Heart, ArrowRight, Shield, Zap, Globe, Smartphone,
  CreditCard, BarChart3, Users, CheckCircle, ChevronRight
} from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const platforms = [
  { name: 'DraftKings', color: 'bg-green-600' },
  { name: 'FanDuel', color: 'bg-blue-600' },
  { name: 'BetMGM', color: 'bg-amber-500' },
  { name: 'Caesars', color: 'bg-red-600' },
  { name: 'PointsBet', color: 'bg-violet-600' },
  { name: 'BetRivers', color: 'bg-slate-700' },
]

const charities = [
  'St. Jude Children\'s Research Hospital',
  'American Red Cross',
  'Habitat for Humanity',
  'Feeding America',
  'ASPCA',
  'Doctors Without Borders',
]

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50 via-white to-violet-50">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-1.5 rounded-full text-sm font-medium mb-6">
            <Heart className="w-4 h-4" fill="currentColor" />
            Turn your wins into impact
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
            Micro-donate from
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-emerald-400"> your winnings</span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            Mykro automatically donates a small percentage of your online gambling winnings to
            the charities you love. Connect your platforms or your bank — we handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/dashboard"
              className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-600/25 no-underline"
            >
              Start Donating <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/developers"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-700 px-8 py-4 rounded-xl text-lg font-semibold border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all no-underline"
            >
              View API Docs <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900 rounded-2xl p-6 shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-slate-500 text-xs ml-2">mykro dashboard</span>
            </div>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-slate-400 text-xs mb-1">Total Donated</p>
                <p className="text-emerald-400 text-2xl font-bold">$1,247.50</p>
                <p className="text-emerald-500 text-xs mt-1">+$82.30 this month</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-slate-400 text-xs mb-1">Winnings Tracked</p>
                <p className="text-white text-2xl font-bold">$24,950</p>
                <p className="text-slate-500 text-xs mt-1">Across 3 platforms</p>
              </div>
              <div className="bg-slate-800 rounded-xl p-4">
                <p className="text-slate-400 text-xs mb-1">Donation Rate</p>
                <p className="text-violet-400 text-2xl font-bold">5%</p>
                <p className="text-slate-500 text-xs mt-1">Of net winnings</p>
              </div>
            </div>
            <div className="bg-slate-800 rounded-xl p-4">
              <div className="flex justify-between items-center mb-3">
                <p className="text-white text-sm font-medium">Recent Donations</p>
                <p className="text-emerald-400 text-xs">View All</p>
              </div>
              {[
                { charity: 'St. Jude', amount: '$12.50', platform: 'DraftKings', date: 'Today' },
                { charity: 'Red Cross', amount: '$8.75', platform: 'FanDuel', date: 'Yesterday' },
                { charity: 'Feeding America', amount: '$22.00', platform: 'BetMGM', date: 'Mar 10' },
              ].map((d, i) => (
                <div key={i} className="flex justify-between items-center py-2 border-t border-slate-700">
                  <div>
                    <p className="text-white text-sm">{d.charity}</p>
                    <p className="text-slate-500 text-xs">{d.platform} &middot; {d.date}</p>
                  </div>
                  <p className="text-emerald-400 font-medium text-sm">{d.amount}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">How Mykro Works</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Three simple steps to start turning your wins into meaningful change.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Smartphone className="w-6 h-6" />,
                step: '01',
                title: 'Connect Your Platforms',
                desc: 'Link your gambling accounts directly, or connect your bank via Plaid to auto-detect winnings.'
              },
              {
                icon: <Heart className="w-6 h-6" />,
                step: '02',
                title: 'Choose Your Charities',
                desc: 'Pick from hundreds of verified nonprofits, or split across multiple causes you care about.'
              },
              {
                icon: <Zap className="w-6 h-6" />,
                step: '03',
                title: 'Donate Automatically',
                desc: 'Set your percentage (1-100%) and Mykro handles the rest. Get tax receipts at year end.'
              },
            ].map((item, i) => (
              <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                  {item.icon}
                </div>
                <div className="text-emerald-600 text-sm font-bold mb-2">{item.step}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two Connection Methods */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Two Ways to Connect</h2>
            <p className="text-lg text-slate-600">Direct platform integration or bank-based detection.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Direct Integration */}
            <div className="border border-emerald-200 bg-emerald-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-white mb-4">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Direct Platform Integration</h3>
              <p className="text-slate-600 mb-6">For platforms that have integrated the Mykro SDK. Real-time donation triggers on every win.</p>
              <div className="grid grid-cols-2 gap-2">
                {platforms.map((p, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white rounded-lg px-3 py-2">
                    <div className={`w-6 h-6 ${p.color} rounded text-white text-xs font-bold flex items-center justify-center`}>
                      {p.name[0]}
                    </div>
                    <span className="text-sm text-slate-700 font-medium">{p.name}</span>
                  </div>
                ))}
              </div>
              <p className="text-emerald-600 text-sm mt-4 font-medium">+ More platforms coming soon</p>
            </div>

            {/* Plaid/Bank */}
            <div className="border border-violet-200 bg-violet-50 rounded-2xl p-8">
              <div className="w-12 h-12 bg-violet-600 rounded-xl flex items-center justify-center text-white mb-4">
                <CreditCard className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Bank Auto-Detection via Plaid</h3>
              <p className="text-slate-600 mb-6">Works with any platform. Connect your bank and Mykro identifies deposits from gambling sites.</p>
              <div className="space-y-3">
                {[
                  'Works with 12,000+ financial institutions',
                  'Automatic transaction categorization',
                  'Secure, read-only bank connection',
                  'No platform integration required',
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-violet-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 bg-white rounded-lg px-4 py-3">
                <Shield className="w-5 h-5 text-violet-600" />
                <span className="text-sm text-slate-600">Secured by <strong>Plaid</strong> &middot; Bank-level encryption</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Charities */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Support Causes You Care About</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-12">
            Choose from hundreds of verified nonprofits or suggest your own. Split donations across multiple charities.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {charities.map((name, i) => (
              <div key={i} className="bg-white rounded-xl p-6 border border-slate-200 hover:border-emerald-300 hover:shadow-md transition-all cursor-pointer">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="w-5 h-5 text-emerald-600" />
                </div>
                <p className="text-slate-900 font-medium text-sm">{name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-600">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: '$2.4M+', label: 'Donated to Charity' },
              { value: '18K+', label: 'Active Donors' },
              { value: '340+', label: 'Partner Charities' },
              { value: '6', label: 'Platform Integrations' },
            ].map((s, i) => (
              <div key={i}>
                <p className="text-3xl sm:text-4xl font-bold text-white mb-1">{s.value}</p>
                <p className="text-emerald-200 text-sm">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Platforms */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-violet-100 text-violet-700 px-4 py-1.5 rounded-full text-sm font-medium mb-4">
                For Platforms
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
                Integrate Mykro into Your Platform
              </h2>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Offer your users a seamless charitable giving experience. Our SDK and API make integration simple — boost user engagement and brand reputation.
              </p>
              <div className="space-y-4">
                {[
                  { icon: <Zap className="w-5 h-5" />, title: 'Drop-in Components', desc: 'Pre-built React, iOS, and Android widgets' },
                  { icon: <BarChart3 className="w-5 h-5" />, title: 'Analytics Dashboard', desc: 'Track donation metrics across your user base' },
                  { icon: <Users className="w-5 h-5" />, title: 'User Retention', desc: 'Players who donate show 23% higher retention' },
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-10 h-10 bg-violet-100 rounded-lg flex items-center justify-center text-violet-600 flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">{item.title}</h4>
                      <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/developers"
                className="inline-flex items-center gap-2 mt-8 bg-violet-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-violet-700 transition-colors no-underline"
              >
                View Developer Docs <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-slate-900 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-500" />
              </div>
              <pre className="text-sm text-left overflow-x-auto"><code className="text-slate-300">{`import { MykroWidget } from '@mykro/react'

function WinningsPage({ user, payout }) {
  return (
    <div>
      <h2>Congratulations!</h2>
      <p>You won \${payout.amount}!</p>

      <MykroWidget
        userId={user.id}
        amount={payout.amount}
        platform="your-platform"
        onDonate={(donation) => {
          console.log('Donated:', donation)
        }}
      />
    </div>
  )
}`}</code></pre>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-600 to-emerald-800">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Make Your Wins Count?
          </h2>
          <p className="text-emerald-100 text-lg mb-8">
            Join thousands of people who are turning their gambling wins into charitable impact.
            Set up takes less than 2 minutes.
          </p>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 bg-white text-emerald-700 px-8 py-4 rounded-xl text-lg font-semibold hover:bg-emerald-50 transition-colors shadow-lg no-underline"
          >
            Get Started Free <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  )
}
