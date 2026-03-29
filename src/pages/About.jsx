const SIGNUP_URL = 'https://www.getloopwise.com/signup'

export default function About() {
  return (
    <>
      <section className="bg-light-blue py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-dark">
            Built for business owners, not marketers
          </h1>
          <p className="text-gray-500 mt-4 text-lg">
            LoopWise exists because small business owners shouldn't need a marketing team to stay connected with their customers.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-dark">Our story</h2>
          <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
            <p>
              Every small business owner knows the feeling: a customer comes in, has a great experience, and then you never see them again. Not because they were unhappy — but because life got busy and they forgot about you.
            </p>
            <p>
              The big brands solve this with massive marketing teams and expensive software. They send emails, texts, and follow-ups automatically. But for a local salon, a neighborhood restaurant, or a family-owned repair shop? Those tools are either too expensive, too complicated, or simply don't exist.
            </p>
            <p>
              LoopWise was built to change that. We combined email, SMS, and ringless voicemail into one platform — then added AI to write all the content for you. Answer 10 questions about your business, and you'll have 5 complete campaigns ready to send in minutes.
            </p>
            <p>
              No marketing jargon. No complicated dashboards. No writing copy at midnight. Just a simple system that brings your customers back.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-light-blue py-20 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-dark text-center mb-12">What LoopWise stands for</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Simplicity first',
                desc: 'If it takes more than 15 minutes to set up, we failed. Every feature we build is measured by how easy it is for a non-technical business owner to use.',
              },
              {
                title: 'Results over features',
                desc: 'We don\'t build things to check boxes. We build things that bring your customers back through the door — and we measure ourselves by that outcome.',
              },
              {
                title: 'Honest pricing',
                desc: 'No hidden fees. No contracts. No surprise charges. You see exactly what you get at every tier, and you can change or cancel anytime.',
              },
            ].map(v => (
              <div key={v.title} className="bg-white rounded-xl p-8 shadow-sm">
                <h3 className="text-lg font-bold text-dark">{v.title}</h3>
                <p className="text-gray-500 text-sm mt-3 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-20 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold text-dark text-center">Get in touch</h2>
          <p className="text-gray-500 text-center mt-2">
            Questions? Ideas? Just want to say hello? We'd love to hear from you.
          </p>

          <form className="mt-10 space-y-5" onSubmit={e => e.preventDefault()}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-dark mb-1">Name</label>
              <input
                id="name"
                type="text"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-dark mb-1">Email</label>
              <input
                id="email"
                type="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-dark mb-1">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-vertical"
                placeholder="How can we help?"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent/90 text-white font-semibold py-3 rounded-lg transition-colors border-none cursor-pointer text-sm"
            >
              Send Message
            </button>
          </form>

          <div className="mt-10 text-center text-sm text-gray-500">
            <p>Or email us directly at <a href="mailto:getloopwise@gmail.com" className="text-accent no-underline hover:underline">getloopwise@gmail.com</a></p>
            <p className="mt-1">Missouri, USA</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white">Ready to get started?</h2>
          <p className="text-blue-200 mt-3">Free 14-day trial. No credit card required.</p>
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
