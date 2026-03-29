import { Link } from 'react-router-dom'

const SIGNUP_URL = 'https://www.getloopwise.com/signup'

const steps = [
  {
    num: '1',
    title: 'Sign up and answer 10 questions',
    desc: 'Create your free account and tell us about your business. What industry are you in? What tone fits your brand? What do you want customers to do? It takes about 3 minutes.',
    details: [
      'Business name and industry',
      'Your typical customer profile',
      'Goals for your campaign (appointments, purchases, visits)',
      'Preferred tone (friendly, professional, casual)',
      'How often you want to reach out',
    ],
  },
  {
    num: '2',
    title: 'AI generates your campaigns',
    desc: 'Based on your answers, LoopWise\'s AI creates 5 complete campaign sequences. Each sequence includes email copy, SMS messages, and voicemail scripts — all customized to your business and your customers.',
    details: [
      'Win-back campaign for lapsed customers',
      'Loyalty campaign for your best regulars',
      'Seasonal promotion sequence',
      'New service announcement',
      'Review and referral request',
    ],
  },
  {
    num: '3',
    title: 'Review and approve in your dashboard',
    desc: 'Every message is ready to send, but you\'re always in control. Read through the AI-generated content, make any edits you want, and approve campaigns when you\'re satisfied.',
    details: [
      'Edit any message before it sends',
      'Preview exactly what customers will see',
      'Set send schedules and frequency',
      'Choose which contacts receive which campaigns',
    ],
  },
  {
    num: '4',
    title: 'Campaigns send automatically',
    desc: 'Once approved, your campaigns run on autopilot. Emails, texts, and voicemails go out on the schedule you set. LoopWise handles opt-outs, delivery, and retries automatically.',
    details: [
      'Smart send timing for best open rates',
      'Automatic opt-out handling',
      'Delivery monitoring and retry logic',
      'Pause or stop any campaign instantly',
    ],
  },
  {
    num: '5',
    title: 'Watch results in your dashboard',
    desc: 'See exactly how your campaigns are performing. Track email opens, text responses, voicemail callbacks, and which customers took action.',
    details: [
      'Real-time delivery and open tracking',
      'Response and callback monitoring',
      'Revenue attribution (coming soon)',
      'Campaign comparison analytics',
    ],
  },
]

export default function HowItWorks() {
  return (
    <>
      <section className="bg-light-blue py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-dark">
            From signup to sending in under 15 minutes
          </h1>
          <p className="text-gray-500 mt-4 text-lg">
            No marketing degree required. No copywriting skills needed. Just answer a few questions and let AI do the heavy lifting.
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto space-y-16">
          {steps.map((s, i) => (
            <div key={s.num} className={`flex flex-col md:flex-row gap-8 items-start ${i % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
              <div className="flex-1">
                <div className="w-14 h-14 bg-accent text-white rounded-full flex items-center justify-center text-2xl font-bold">
                  {s.num}
                </div>
                <h2 className="text-2xl font-bold text-dark mt-4">{s.title}</h2>
                <p className="text-gray-500 mt-3 leading-relaxed">{s.desc}</p>
                <ul className="mt-4 space-y-2">
                  {s.details.map(d => (
                    <li key={d} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-accent mt-0.5">✓</span> {d}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex-1 bg-light-blue rounded-xl h-48 md:h-64 flex items-center justify-center">
                <span className="text-gray-400 text-sm">[Step {s.num} illustration]</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* RVM Explainer */}
      <section className="bg-light-blue py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-dark text-center">
            What is ringless voicemail — and why does it work so well?
          </h2>

          <div className="mt-12 grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-dark mb-3">How it works</h3>
              <p className="text-gray-500 leading-relaxed">
                Ringless voicemail (RVM) delivers a voicemail directly to your customer's voicemail inbox — without their phone ever ringing. They see a missed voicemail notification, listen to your message, and call back when it's convenient for them.
              </p>
              <p className="text-gray-500 leading-relaxed mt-4">
                It's the closest thing to a personal phone call without actually calling. Customers feel like you reached out individually, which drives response rates far higher than email or text alone.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-dark mb-3">Your voice or AI voice — your choice</h3>
              <p className="text-gray-500 leading-relaxed">
                Record your own voicemail directly in the LoopWise app. Your customers will hear <em>your</em> voice and think you personally called them. This is the most effective option for businesses where customers know the owner.
              </p>
              <p className="text-gray-500 leading-relaxed mt-4">
                Prefer not to record? LoopWise offers AI text-to-speech that generates a natural-sounding voicemail from your script. Scale plan members get access to ElevenLabs premium voices for the most realistic AI voice experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-dark">Compliance, handled</h2>
          <p className="text-gray-500 mt-4 leading-relaxed">
            LoopWise automatically manages compliance across all three channels. Every email includes an unsubscribe link. Every SMS supports STOP replies. Voicemail campaigns follow TCPA guidelines. Opt-outs are processed instantly and contacts are suppressed across all channels. You stay compliant without thinking about it.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">See it for yourself</h2>
          <p className="text-blue-200 mt-3">
            Your first 5 campaigns are ready in minutes. Free 14-day trial includes 10 voicemail drops.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SIGNUP_URL}
              className="bg-white text-primary font-semibold px-8 py-4 rounded-lg text-lg no-underline hover:bg-gray-100 transition-colors"
            >
              Start Free Trial — No Credit Card Required
            </a>
            <Link
              to="/pricing"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-lg text-lg no-underline hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
