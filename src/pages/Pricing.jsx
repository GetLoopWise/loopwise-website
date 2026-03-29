import { useState } from 'react'

const SIGNUP_URL = 'https://www.getloopwise.com/signup'

const tiers = [
  {
    name: 'Free',
    monthly: 0,
    annual: 0,
    desc: 'Try it out',
    channels: 'Email only',
    features: ['100 contacts', '3 campaigns', 'Email only', 'AI-generated content'],
  },
  {
    name: 'Starter',
    monthly: 49,
    annual: 41,
    desc: 'Get started',
    channels: 'Email + SMS',
    features: ['500 contacts', 'Unlimited campaigns', 'Email + SMS', 'AI-generated content', 'Basic analytics'],
  },
  {
    name: 'Core',
    monthly: 97,
    annual: 81,
    desc: 'Most popular',
    channels: 'Email + SMS + RVM',
    features: [
      '2,500 contacts',
      'Unlimited campaigns',
      'Email + SMS + RVM',
      '250 RVM drops/month',
      'Record your own voice',
      'AI-generated content',
      'Full analytics dashboard',
    ],
    recommended: true,
  },
  {
    name: 'Pro',
    monthly: 197,
    annual: 164,
    desc: 'Growing businesses',
    channels: 'Email + SMS + RVM',
    features: [
      '10,000 contacts',
      'Unlimited campaigns',
      'Email + SMS + RVM',
      '750 RVM drops/month',
      'Record your own voice',
      'AI-generated content',
      'Priority support',
      'Advanced analytics',
    ],
  },
  {
    name: 'Scale',
    monthly: 397,
    annual: 331,
    desc: 'Full power',
    channels: 'Email + SMS + RVM + Premium',
    features: [
      'Unlimited contacts',
      'Unlimited campaigns',
      'Email + SMS + RVM',
      'Unlimited RVM drops',
      'ElevenLabs premium voices',
      'AI-generated content',
      'Dedicated support',
      'Custom integrations',
    ],
  },
]

const faqs = [
  {
    q: 'What is ringless voicemail (RVM)?',
    a: 'Ringless voicemail drops a voicemail directly into your customer\'s voicemail inbox without their phone ever ringing. It feels personal — like you called and just missed them — which is why response rates are significantly higher than email or text alone.',
  },
  {
    q: 'Do I need marketing experience?',
    a: 'Not at all. You answer 10 questions about your business — your industry, your tone, your goals — and LoopWise\'s AI writes every email, text, and voicemail script for you. You just review and approve.',
  },
  {
    q: 'Can I record my own voice for voicemails?',
    a: 'Yes. You can record your own voice directly in the app, or use AI text-to-speech to generate a natural-sounding voicemail. Many business owners use their own voice because customers recognize it and call back faster.',
  },
  {
    q: 'What happens during the free trial?',
    a: 'You get full access for 14 days with no credit card required. The free trial includes 10 free ringless voicemail drops so you can experience the full platform before choosing a plan.',
  },
  {
    q: 'Can I change plans later?',
    a: 'Absolutely. You can upgrade, downgrade, or cancel at any time. If you switch to annual billing, you save the equivalent of 2 months per year.',
  },
  {
    q: 'How does LoopWise handle opt-outs and compliance?',
    a: 'LoopWise automatically manages opt-outs for all channels. Every email includes an unsubscribe link, every SMS supports STOP replies, and voicemail campaigns follow TCPA guidelines. You stay compliant without lifting a finger.',
  },
]

export default function Pricing() {
  const [annual, setAnnual] = useState(false)
  const [openFaq, setOpenFaq] = useState(null)

  return (
    <>
      <section className="bg-light-blue py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-dark">
            Simple, transparent pricing
          </h1>
          <p className="text-gray-500 mt-4 text-lg">
            Start free. Upgrade when you're ready. No credit card required.
          </p>

          {/* Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white rounded-full p-1 shadow-sm">
            <button
              onClick={() => setAnnual(false)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors border-none cursor-pointer ${
                !annual ? 'bg-accent text-white' : 'bg-transparent text-gray-500'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-colors border-none cursor-pointer ${
                annual ? 'bg-accent text-white' : 'bg-transparent text-gray-500'
              }`}
            >
              Annual <span className="text-xs opacity-75">Save 2 months</span>
            </button>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 -mt-4">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {tiers.map(t => {
            const price = annual ? t.annual : t.monthly
            return (
              <div
                key={t.name}
                className={`rounded-xl p-6 flex flex-col ${
                  t.recommended
                    ? 'bg-primary text-white ring-4 ring-accent/30 lg:scale-105 lg:-my-2'
                    : 'bg-white border border-gray-200'
                }`}
              >
                {t.recommended && (
                  <span className="text-xs font-bold uppercase bg-accent text-white px-3 py-1 rounded-full self-start">
                    Recommended
                  </span>
                )}
                <h3 className={`text-lg font-bold mt-3 ${t.recommended ? 'text-white' : 'text-dark'}`}>
                  {t.name}
                </h3>
                <p className={`text-xs mt-1 ${t.recommended ? 'text-blue-200' : 'text-gray-400'}`}>
                  {t.channels}
                </p>
                <p className="mt-4">
                  <span className="text-3xl font-extrabold">${price}</span>
                  <span className={`text-xs ${t.recommended ? 'text-blue-200' : 'text-gray-400'}`}>/mo</span>
                </p>
                {annual && t.monthly > 0 && (
                  <p className={`text-xs mt-1 ${t.recommended ? 'text-blue-200' : 'text-gray-400'}`}>
                    billed annually (${t.annual * 12}/yr)
                  </p>
                )}
                <ul className="mt-5 space-y-2 flex-1">
                  {t.features.map(f => (
                    <li key={f} className={`text-xs flex items-start gap-2 ${t.recommended ? 'text-blue-100' : 'text-gray-600'}`}>
                      <span className="mt-0.5">✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href={SIGNUP_URL}
                  className={`block mt-6 text-center font-semibold py-2.5 rounded-lg no-underline text-sm transition-colors ${
                    t.recommended
                      ? 'bg-white text-primary hover:bg-gray-100'
                      : 'bg-accent text-white hover:bg-accent/90'
                  }`}
                >
                  {t.monthly === 0 ? 'Get Started Free' : 'Start Free Trial'}
                </a>
              </div>
            )
          })}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-light-blue py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-dark mb-12">
            Frequently asked questions
          </h2>
          <div className="space-y-4">
            {faqs.map((f, i) => (
              <div key={i} className="bg-white rounded-xl overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full text-left px-6 py-4 font-semibold text-dark flex justify-between items-center bg-transparent border-none cursor-pointer text-sm"
                >
                  {f.q}
                  <span className="text-accent text-xl ml-4">{openFaq === i ? '−' : '+'}</span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-4 text-gray-500 text-sm leading-relaxed">
                    {f.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-primary py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Ready to bring customers back?</h2>
          <p className="text-blue-200 mt-3">
            14-day free trial. 10 free voicemail drops included. No credit card required.
          </p>
          <a
            href={SIGNUP_URL}
            className="inline-block mt-6 bg-white text-primary font-semibold px-8 py-4 rounded-lg text-lg no-underline hover:bg-gray-100 transition-colors"
          >
            Start Free Trial — No Credit Card Required
          </a>
        </div>
      </section>
    </>
  )
}
