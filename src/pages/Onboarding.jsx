import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
  Heart, ArrowRight, ArrowLeft, Check, CreditCard,
  ChevronRight, Sparkles, TrendingUp, Search
} from 'lucide-react'

const allPlatforms = [
  { id: 'draftkings', name: 'DraftKings', color: 'bg-green-600', integrated: true },
  { id: 'fanduel', name: 'FanDuel', color: 'bg-blue-600', integrated: true },
  { id: 'betmgm', name: 'BetMGM', color: 'bg-amber-500', integrated: true },
  { id: 'caesars', name: 'Caesars Sportsbook', color: 'bg-red-600', integrated: true },
  { id: 'pointsbet', name: 'PointsBet', color: 'bg-violet-600', integrated: false },
  { id: 'betrivers', name: 'BetRivers', color: 'bg-slate-700', integrated: false },
  { id: 'hardrock', name: 'Hard Rock Bet', color: 'bg-orange-600', integrated: false },
  { id: 'espnbet', name: 'ESPN BET', color: 'bg-red-700', integrated: false },
  { id: 'fanatics', name: 'Fanatics Sportsbook', color: 'bg-blue-800', integrated: false },
  { id: 'bet365', name: 'bet365', color: 'bg-emerald-700', integrated: false },
]

const allCharities = [
  { id: 'stjude', name: "St. Jude Children's Research Hospital", category: 'Health' },
  { id: 'redcross', name: 'American Red Cross', category: 'Disaster Relief' },
  { id: 'habitat', name: 'Habitat for Humanity', category: 'Housing' },
  { id: 'feedingamerica', name: 'Feeding America', category: 'Hunger' },
  { id: 'aspca', name: 'ASPCA', category: 'Animals' },
  { id: 'dwb', name: 'Doctors Without Borders', category: 'Health' },
  { id: 'wwf', name: 'World Wildlife Fund', category: 'Environment' },
  { id: 'unicef', name: 'UNICEF', category: 'Children' },
  { id: 'salvationarmy', name: 'The Salvation Army', category: 'Community' },
  { id: 'goodwill', name: 'Goodwill', category: 'Employment' },
  { id: 'makeawish', name: 'Make-A-Wish Foundation', category: 'Children' },
  { id: 'woundedwarrior', name: 'Wounded Warrior Project', category: 'Veterans' },
]

const bigWinOptions = [
  { id: 'none', label: 'No thanks, keep it flat', extra: 0 },
  { id: 'moderate', label: 'Bump it up a little', extra: 2, desc: '+2% on wins over $500' },
  { id: 'generous', label: 'Go big when I win big', extra: 5, desc: '+5% on wins over $500' },
  { id: 'max', label: 'Maximum generosity', extra: 10, desc: '+10% on wins over $500' },
]

export default function Onboarding() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [selectedPlatforms, setSelectedPlatforms] = useState([])
  const [selectedCharities, setSelectedCharities] = useState([])
  const [percentage, setPercentage] = useState(5)
  const [bigWinMode, setBigWinMode] = useState('none')
  const [charitySearch, setCharitySearch] = useState('')

  const totalSteps = 4

  const togglePlatform = (id) => {
    setSelectedPlatforms(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    )
  }

  const toggleCharity = (id) => {
    setSelectedCharities(prev =>
      prev.includes(id) ? prev.filter(c => c !== id) : [...prev, id]
    )
  }

  const selectedPlatformData = allPlatforms.filter(p => selectedPlatforms.includes(p.id))
  const hasIntegrated = selectedPlatformData.some(p => p.integrated)
  const hasNonIntegrated = selectedPlatformData.some(p => !p.integrated)
  const integratedPlatforms = selectedPlatformData.filter(p => p.integrated)
  const nonIntegratedPlatforms = selectedPlatformData.filter(p => !p.integrated)

  const filteredCharities = allCharities.filter(c =>
    c.name.toLowerCase().includes(charitySearch.toLowerCase()) ||
    c.category.toLowerCase().includes(charitySearch.toLowerCase())
  )

  const canProceed = () => {
    if (step === 1) return selectedPlatforms.length > 0
    if (step === 2) return selectedCharities.length > 0
    if (step === 3) return percentage >= 1
    return true
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center">
              <Heart className="w-4 h-4 text-white" fill="white" />
            </div>
            <span className="text-lg font-bold text-slate-900">mykro</span>
          </Link>
          <span className="text-sm text-slate-400">Step {step} of {totalSteps}</span>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-2xl mx-auto">
          <div className="h-1 bg-slate-100">
            <div
              className="h-1 bg-emerald-500 transition-all duration-500"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-start justify-center px-4 py-10">
        <div className="w-full max-w-2xl">

          {/* Step 1: Where do you gamble? */}
          {step === 1 && (
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Where do you gamble?</h1>
              <p className="text-slate-500 mb-8">Select all the platforms you use. We'll figure out the best way to track your winnings.</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {allPlatforms.map((platform) => {
                  const selected = selectedPlatforms.includes(platform.id)
                  return (
                    <button
                      key={platform.id}
                      onClick={() => togglePlatform(platform.id)}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left ${
                        selected
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className={`w-10 h-10 ${platform.color} rounded-lg text-white text-sm font-bold flex items-center justify-center flex-shrink-0`}>
                        {platform.name[0]}
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-slate-900">{platform.name}</p>
                        {platform.integrated && (
                          <p className="text-xs text-emerald-600 font-medium">Direct integration available</p>
                        )}
                      </div>
                      {selected && (
                        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Step 2: Where do you want to give? */}
          {step === 2 && (
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Where do you want to give?</h1>
              <p className="text-slate-500 mb-6">Choose one or more charities. Your donations will be split evenly across your selections.</p>

              <div className="relative mb-6">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search charities..."
                  value={charitySearch}
                  onChange={(e) => setCharitySearch(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl text-sm bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {filteredCharities.map((charity) => {
                  const selected = selectedCharities.includes(charity.id)
                  return (
                    <button
                      key={charity.id}
                      onClick={() => toggleCharity(charity.id)}
                      className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left ${
                        selected
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart className={`w-4 h-4 ${selected ? 'text-emerald-600' : 'text-emerald-400'}`} fill={selected ? 'currentColor' : 'none'} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-slate-900 text-sm">{charity.name}</p>
                        <p className="text-xs text-slate-400">{charity.category}</p>
                      </div>
                      {selected && (
                        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                      )}
                    </button>
                  )
                })}
              </div>

              {selectedCharities.length > 0 && (
                <div className="mt-6 p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                  <p className="text-sm text-emerald-800">
                    <strong>{selectedCharities.length} {selectedCharities.length === 1 ? 'charity' : 'charities'}</strong> selected — donations will be split evenly ({Math.round(100 / selectedCharities.length)}% each)
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Step 3: How much do you want to give? */}
          {step === 3 && (
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">How much do you want to give?</h1>
              <p className="text-slate-500 mb-8">Set a percentage of your net winnings to donate. You can change this anytime.</p>

              {/* Percentage Selector */}
              <div className="bg-white rounded-2xl border border-slate-200 p-8 mb-6">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center justify-center w-28 h-28 rounded-full bg-emerald-50 border-4 border-emerald-500 mb-3">
                    <span className="text-4xl font-bold text-emerald-600">{percentage}%</span>
                  </div>
                  <p className="text-slate-500">of your net winnings</p>
                </div>

                <input
                  type="range"
                  min="1"
                  max="25"
                  value={percentage}
                  onChange={(e) => setPercentage(parseInt(e.target.value))}
                  className="w-full accent-emerald-600 mb-2"
                />
                <div className="flex justify-between text-xs text-slate-400 mb-6">
                  <span>1%</span>
                  <span>5%</span>
                  <span>10%</span>
                  <span>15%</span>
                  <span>20%</span>
                  <span>25%</span>
                </div>

                <div className="bg-slate-50 rounded-xl p-4">
                  <p className="text-sm text-slate-600">
                    <strong>Example:</strong> If you win <strong>$200</strong>, you'd donate <strong>${(200 * percentage / 100).toFixed(2)}</strong> and keep <strong>${(200 - 200 * percentage / 100).toFixed(2)}</strong>.
                  </p>
                </div>
              </div>

              {/* Big Win Mode */}
              <div className="bg-white rounded-2xl border border-slate-200 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <TrendingUp className="w-5 h-5 text-emerald-600" />
                  <h3 className="font-semibold text-slate-900">Give more when you win big?</h3>
                </div>
                <p className="text-sm text-slate-500 mb-4">Optionally increase your donation rate on wins over $500.</p>

                <div className="space-y-2">
                  {bigWinOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setBigWinMode(option.id)}
                      className={`w-full flex items-center justify-between p-4 rounded-xl border-2 transition-all text-left ${
                        bigWinMode === option.id
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-slate-200 bg-white hover:border-slate-300'
                      }`}
                    >
                      <div>
                        <p className="font-medium text-slate-900">{option.label}</p>
                        {option.desc && <p className="text-xs text-slate-500 mt-0.5">{option.desc}</p>}
                      </div>
                      {bigWinMode === option.id && (
                        <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
                          <Check className="w-3.5 h-3.5 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Connection */}
          {step === 4 && (
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">You're all set!</h1>
              <p className="text-slate-500 mb-8">Here's how we'll track your winnings based on the platforms you selected.</p>

              {hasIntegrated && (
                <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-6 mb-4">
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-emerald-600" />
                    <h3 className="font-semibold text-emerald-900">Direct Integration</h3>
                  </div>
                  <p className="text-sm text-emerald-800 mb-4">
                    Great news! We're already integrated with {integratedPlatforms.length === 1 ? 'this platform' : 'these platforms'}. Your donations will process automatically on every win.
                  </p>
                  <div className="space-y-2">
                    {integratedPlatforms.map((p) => (
                      <div key={p.id} className="flex items-center gap-3 bg-white rounded-lg p-3">
                        <div className={`w-8 h-8 ${p.color} rounded-lg text-white text-xs font-bold flex items-center justify-center`}>
                          {p.name[0]}
                        </div>
                        <span className="font-medium text-slate-900">{p.name}</span>
                        <span className="ml-auto text-xs font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded-full">Connected</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {hasNonIntegrated && (
                <div className="bg-violet-50 border-2 border-violet-200 rounded-2xl p-6 mb-4">
                  <div className="flex items-center gap-2 mb-4">
                    <CreditCard className="w-5 h-5 text-violet-600" />
                    <h3 className="font-semibold text-violet-900">Bank Connection Needed</h3>
                  </div>
                  <p className="text-sm text-violet-800 mb-4">
                    We're not yet integrated with {nonIntegratedPlatforms.length === 1 ? 'this platform' : 'these platforms'}. Connect your bank account so we can detect your winnings and process donations automatically.
                  </p>
                  <div className="space-y-2 mb-5">
                    {nonIntegratedPlatforms.map((p) => (
                      <div key={p.id} className="flex items-center gap-3 bg-white rounded-lg p-3">
                        <div className={`w-8 h-8 ${p.color} rounded-lg text-white text-xs font-bold flex items-center justify-center`}>
                          {p.name[0]}
                        </div>
                        <span className="font-medium text-slate-900">{p.name}</span>
                        <span className="ml-auto text-xs font-medium text-violet-600 bg-violet-100 px-2 py-1 rounded-full">Via bank</span>
                      </div>
                    ))}
                  </div>
                  <button className="w-full flex items-center justify-center gap-2 bg-violet-600 text-white py-3 rounded-xl font-semibold hover:bg-violet-700 transition-colors">
                    <CreditCard className="w-4 h-4" />
                    Connect Your Bank via Plaid
                  </button>
                </div>
              )}

              {/* Summary */}
              <div className="bg-white border border-slate-200 rounded-2xl p-6">
                <h3 className="font-semibold text-slate-900 mb-4">Your Donation Settings</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-500">Donation rate</span>
                    <span className="font-medium text-slate-900">{percentage}% of net winnings</span>
                  </div>
                  {bigWinMode !== 'none' && (
                    <div className="flex justify-between py-2 border-b border-slate-100">
                      <span className="text-slate-500">Big win bonus</span>
                      <span className="font-medium text-slate-900">
                        {bigWinOptions.find(o => o.id === bigWinMode)?.desc}
                      </span>
                    </div>
                  )}
                  <div className="flex justify-between py-2 border-b border-slate-100">
                    <span className="text-slate-500">Charities</span>
                    <span className="font-medium text-slate-900">
                      {selectedCharities.length} selected ({Math.round(100 / selectedCharities.length)}% each)
                    </span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-slate-500">Platforms</span>
                    <span className="font-medium text-slate-900">{selectedPlatforms.length} connected</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="sticky bottom-0 bg-white border-t border-slate-200 px-4 py-4">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          {step > 1 ? (
            <button
              onClick={() => setStep(step - 1)}
              className="flex items-center gap-2 text-slate-600 font-medium hover:text-slate-900 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          ) : (
            <Link to="/" className="flex items-center gap-2 text-slate-600 font-medium hover:text-slate-900 transition-colors no-underline">
              <ArrowLeft className="w-4 h-4" /> Home
            </Link>
          )}

          {step < totalSteps ? (
            <button
              onClick={() => setStep(step + 1)}
              disabled={!canProceed()}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                canProceed()
                  ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                  : 'bg-slate-200 text-slate-400 cursor-not-allowed'
              }`}
            >
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-all"
            >
              Go to Dashboard <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
