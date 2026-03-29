import { Link } from 'react-router-dom'

const SIGNUP_URL = 'https://www.getloopwise.com/signup'

function HeroSection() {
  return (
    <section className="bg-light-blue py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-dark leading-tight">
          Your past customers are your{' '}
          <span className="text-accent">best customers.</span>
          <br />
          Bring them back automatically.
        </h1>
        <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
          LoopWise sends personalized emails, texts, and voicemails to your existing customer list — all built by AI, all on autopilot.
        </p>

        {/* Channel icons */}
        <div className="flex justify-center gap-8 mt-8">
          {[
            { icon: '✉️', label: 'Email' },
            { icon: '💬', label: 'SMS' },
            { icon: '🎙️', label: 'Voicemail' },
          ].map(ch => (
            <div key={ch.label} className="flex flex-col items-center gap-1">
              <span className="text-3xl">{ch.icon}</span>
              <span className="text-sm font-medium text-gray-500">{ch.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={SIGNUP_URL}
            className="bg-accent hover:bg-accent/90 text-white font-semibold px-8 py-4 rounded-lg text-lg no-underline transition-colors"
          >
            Start Free Trial — No Credit Card Required
          </a>
          <Link
            to="/how-it-works"
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-semibold px-8 py-4 rounded-lg text-lg no-underline transition-colors"
          >
            See How It Works
          </Link>
        </div>
      </div>
    </section>
  )
}

function SocialProof() {
  return (
    <section className="py-6 bg-white border-b border-gray-100">
      <p className="text-center text-gray-500 font-medium text-sm">
        Join <span className="text-dark font-bold">2,400+</span> small businesses already using LoopWise to bring customers back
      </p>
    </section>
  )
}

function ChannelComparison() {
  const platforms = [
    { name: 'Mailchimp', email: true, sms: false, rvm: false },
    { name: 'SimpleTexting', email: false, sms: true, rvm: false },
    { name: 'Slybroadcast', email: false, sms: false, rvm: true },
    { name: 'LoopWise', email: true, sms: true, rvm: true, highlight: true },
  ]

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-dark">
          Three channels. One platform. Zero guesswork.
        </h2>
        <p className="text-center text-gray-500 mt-4 max-w-xl mx-auto">
          Most tools give you one channel. LoopWise gives you all three — and AI writes every message for you.
        </p>

        <div className="mt-12 overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="text-sm text-gray-500 uppercase tracking-wide">
                <th className="py-3 px-4 font-medium">Platform</th>
                <th className="py-3 px-4 font-medium text-center">Email</th>
                <th className="py-3 px-4 font-medium text-center">SMS</th>
                <th className="py-3 px-4 font-medium text-center">Ringless Voicemail</th>
              </tr>
            </thead>
            <tbody>
              {platforms.map(p => (
                <tr
                  key={p.name}
                  className={`border-t ${p.highlight ? 'bg-light-blue font-semibold' : ''}`}
                >
                  <td className="py-4 px-4 text-dark">
                    {p.name}
                    {p.highlight && <span className="ml-2 text-xs bg-accent text-white px-2 py-0.5 rounded-full">All-in-one</span>}
                  </td>
                  <td className="py-4 px-4 text-center text-lg">{p.email ? '✅' : '—'}</td>
                  <td className="py-4 px-4 text-center text-lg">{p.sms ? '✅' : '—'}</td>
                  <td className="py-4 px-4 text-center text-lg">{p.rvm ? '✅' : '—'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

function HowItWorksPreview() {
  const steps = [
    {
      num: '1',
      title: 'Answer 10 questions about your business',
      desc: 'Tell us your industry, tone, goals, and who your customers are. Takes about 3 minutes.',
    },
    {
      num: '2',
      title: 'AI builds your campaigns',
      desc: 'LoopWise generates 5 complete campaign sequences — emails, texts, and voicemail scripts — customized to your business.',
    },
    {
      num: '3',
      title: 'Watch customers come back',
      desc: 'Approve your campaigns and they start sending automatically. Track opens, clicks, and responses in real time.',
    },
  ]

  return (
    <section className="bg-light-blue py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-dark">
          Up and running in under 15 minutes
        </h2>
        <p className="text-center text-gray-500 mt-4">No marketing experience needed. Seriously.</p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {steps.map(s => (
            <div key={s.num} className="bg-white rounded-xl p-8 shadow-sm">
              <div className="w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center text-xl font-bold mb-4">
                {s.num}
              </div>
              <h3 className="text-lg font-bold text-dark mb-2">{s.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BusinessTypes() {
  const verticals = [
    { icon: '🔧', name: 'HVAC' },
    { icon: '🍽️', name: 'Restaurants' },
    { icon: '💇', name: 'Salons & Spas' },
    { icon: '🚗', name: 'Auto Repair' },
    { icon: '🏋️', name: 'Gyms & Fitness' },
    { icon: '🦷', name: 'Dental Offices' },
    { icon: '🐾', name: 'Pet Services' },
    { icon: '🧹', name: 'Cleaning Services' },
    { icon: '🌿', name: 'Landscaping' },
    { icon: '🏠', name: 'Roofing' },
    { icon: '💼', name: 'Professional Services' },
    { icon: '🛍️', name: 'Retail' },
  ]

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-dark">
          Built for businesses like yours
        </h2>
        <p className="text-center text-gray-500 mt-4 max-w-xl mx-auto">
          LoopWise works for any small business with an existing customer list.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-12">
          {verticals.map(v => (
            <div
              key={v.name}
              className="bg-light-blue rounded-xl p-5 text-center hover:shadow-md transition-shadow"
            >
              <span className="text-3xl">{v.icon}</span>
              <p className="mt-2 text-sm font-semibold text-dark">{v.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  const testimonials = [
    {
      quote: "We sent our first ringless voicemail campaign on a Monday. By Friday, we had 14 appointments booked from customers we hadn't heard from in over a year.",
      name: 'Maria Delgado',
      biz: 'Owner, Bella Spa & Salon',
    },
    {
      quote: "I'm not a marketing person. I answered the questions, LoopWise built the campaigns, and my regulars started showing up again. Easiest thing I've done for my business.",
      name: 'James Whitfield',
      biz: 'Owner, Whitfield Auto Repair',
    },
    {
      quote: "The voicemail feature is a game-changer. Customers hear my actual voice and call back thinking I personally reached out. We've added $8K in monthly revenue.",
      name: 'Rachel Nguyen',
      biz: 'Owner, Fresh Bites Kitchen',
    },
  ]

  return (
    <section className="bg-light-blue py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-dark">
          Real results from real business owners
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {testimonials.map(t => (
            <div key={t.name} className="bg-white rounded-xl p-8 shadow-sm">
              <p className="text-gray-600 text-sm leading-relaxed italic">"{t.quote}"</p>
              <div className="mt-6">
                <p className="font-bold text-dark text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.biz}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function PricingPreview() {
  const tiers = [
    {
      name: 'Starter',
      price: '$49',
      desc: 'Email + SMS',
      features: ['500 contacts', 'Email campaigns', 'SMS campaigns', 'AI-generated content'],
    },
    {
      name: 'Core',
      price: '$97',
      desc: 'Email + SMS + Voicemail',
      features: ['2,500 contacts', 'Email + SMS campaigns', '250 RVM drops/month', 'Record your own voice', 'AI-generated content'],
      recommended: true,
    },
    {
      name: 'Scale',
      price: '$397',
      desc: 'Everything, unlimited',
      features: ['Unlimited contacts', 'Email + SMS + RVM', 'ElevenLabs premium voices', 'Priority support'],
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-dark">
          Simple pricing. No surprises.
        </h2>
        <p className="text-center text-gray-500 mt-4">
          Start free for 14 days. No credit card required.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {tiers.map(t => (
            <div
              key={t.name}
              className={`rounded-xl p-8 ${
                t.recommended
                  ? 'bg-primary text-white ring-4 ring-accent/30 scale-105'
                  : 'bg-white border border-gray-200'
              }`}
            >
              {t.recommended && (
                <span className="text-xs font-bold uppercase bg-accent text-white px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className={`text-xl font-bold mt-4 ${t.recommended ? 'text-white' : 'text-dark'}`}>
                {t.name}
              </h3>
              <p className={`text-sm mt-1 ${t.recommended ? 'text-blue-200' : 'text-gray-500'}`}>
                {t.desc}
              </p>
              <p className="mt-4">
                <span className="text-4xl font-extrabold">{t.price}</span>
                <span className={`text-sm ${t.recommended ? 'text-blue-200' : 'text-gray-400'}`}>/month</span>
              </p>
              <ul className="mt-6 space-y-3">
                {t.features.map(f => (
                  <li key={f} className={`text-sm flex items-start gap-2 ${t.recommended ? 'text-blue-100' : 'text-gray-600'}`}>
                    <span className="mt-0.5">✓</span> {f}
                  </li>
                ))}
              </ul>
              <a
                href={SIGNUP_URL}
                className={`block mt-8 text-center font-semibold py-3 rounded-lg no-underline transition-colors ${
                  t.recommended
                    ? 'bg-white text-primary hover:bg-gray-100'
                    : 'bg-accent text-white hover:bg-accent/90'
                }`}
              >
                Start Free Trial
              </a>
            </div>
          ))}
        </div>

        <p className="text-center mt-8">
          <Link to="/pricing" className="text-accent font-medium no-underline hover:underline">
            See all plans and compare features →
          </Link>
        </p>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="bg-primary py-20 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          Your first campaigns are ready in 10 minutes
        </h2>
        <p className="text-blue-200 mt-4 text-lg">
          Answer 10 questions. Get 5 complete campaigns. Start bringing customers back today.
        </p>
        <a
          href={SIGNUP_URL}
          className="inline-block mt-8 bg-white text-primary font-semibold px-8 py-4 rounded-lg text-lg no-underline hover:bg-gray-100 transition-colors"
        >
          Start Free Trial — No Credit Card Required
        </a>
        <p className="text-blue-300 text-sm mt-4">Free 14-day trial includes 10 free voicemail drops</p>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProof />
      <ChannelComparison />
      <HowItWorksPreview />
      <BusinessTypes />
      <Testimonials />
      <PricingPreview />
      <FinalCTA />
    </>
  )
}
