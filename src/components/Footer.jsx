import { Heart } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-700 rounded-lg flex items-center justify-center">
                <Heart className="w-4 h-4 text-white" fill="white" />
              </div>
              <span className="text-lg font-bold text-white">mykro</span>
            </div>
            <p className="text-sm">Turn your wins into impact. Micro-donate a percentage of your winnings to causes you care about.</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Product</h4>
            <ul className="space-y-2 text-sm list-none p-0">
              <li><a href="#" className="hover:text-white transition-colors no-underline text-slate-400">How It Works</a></li>
              <li><a href="#" className="hover:text-white transition-colors no-underline text-slate-400">Charities</a></li>
              <li><a href="#" className="hover:text-white transition-colors no-underline text-slate-400">Pricing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Developers</h4>
            <ul className="space-y-2 text-sm list-none p-0">
              <li><a href="#" className="hover:text-white transition-colors no-underline text-slate-400">API Docs</a></li>
              <li><a href="#" className="hover:text-white transition-colors no-underline text-slate-400">SDK</a></li>
              <li><a href="#" className="hover:text-white transition-colors no-underline text-slate-400">Webhooks</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-3 text-sm">Company</h4>
            <ul className="space-y-2 text-sm list-none p-0">
              <li><a href="#" className="hover:text-white transition-colors no-underline text-slate-400">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors no-underline text-slate-400">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors no-underline text-slate-400">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center">
          &copy; 2026 Mykro. All rights reserved. Please gamble responsibly.
        </div>
      </div>
    </footer>
  )
}
