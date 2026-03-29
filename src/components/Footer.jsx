import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <Link to="/" className="text-2xl font-bold text-white no-underline">
              LoopWise
            </Link>
            <p className="text-gray-400 mt-2 text-sm max-w-xs">
              Email. Text. Voicemail. Automated. Done.
            </p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-4 text-sm">
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-gray-300">Product</span>
              <Link to="/how-it-works" className="text-gray-400 hover:text-white no-underline transition-colors">How It Works</Link>
              <Link to="/pricing" className="text-gray-400 hover:text-white no-underline transition-colors">Pricing</Link>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-gray-300">Company</span>
              <Link to="/about" className="text-gray-400 hover:text-white no-underline transition-colors">About</Link>
              <a href="mailto:getloopwise@gmail.com" className="text-gray-400 hover:text-white no-underline transition-colors">Contact</a>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold text-gray-300">Legal</span>
              <Link to="/terms" className="text-gray-400 hover:text-white no-underline transition-colors">Terms of Service</Link>
              <Link to="/privacy" className="text-gray-400 hover:text-white no-underline transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>&copy; 2026 LoopWise LLC. All rights reserved.</p>
          <p>Turn your customer list into a revenue machine.</p>
        </div>
      </div>
    </footer>
  )
}
