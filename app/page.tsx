import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle, XCircle } from 'lucide-react'

export default function HairLossLandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">HairRevive Pro</h1>
          <nav>
            <Link href="#contact" className="text-blue-600 hover:text-blue-800 transition-colors">
              Contact Us
            </Link>
          </nav>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tired of Empty Promises for Hair Regrowth?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We understand your skepticism. Let&apos;s address your concerns head-on.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Common Objections</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <XCircle className="text-red-500 mr-2 flex-shrink-0 mt-1" />
                <span>&ldquo;Hair loss treatments don&apos;t work.&rdquo;</span>
              </li>
              <li className="flex items-start">
                <XCircle className="text-red-500 mr-2 flex-shrink-0 mt-1" />
                <span>&ldquo;It&apos;s too expensive and not worth it.&rdquo;</span>
              </li>
              <li className="flex items-start">
                <XCircle className="text-red-500 mr-2 flex-shrink-0 mt-1" />
                <span>&ldquo;The side effects are worse than hair loss.&rdquo;</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Responses</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Clinically proven results with 85% success rate</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Affordable plans and 100% money-back guarantee</span>
              </li>
              <li className="flex items-start">
                <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" />
                <span>Natural ingredients with minimal side effects</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
            Real Results from Real Customers
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image
                  src={`/placeholder.svg?height=200&width=300`}
                  alt={`Before and After ${i}`}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-gray-600">
                    &ldquo;I never thought I&apos;d see results like this. HairRevive Pro changed my life!&rdquo;
                  </p>
                  <p className="text-gray-800 font-semibold mt-2">- John D.</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="bg-blue-600 text-white rounded-lg p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Revive Your Hair?</h3>
          <p className="text-xl mb-6">
            Don&apos;t let another day go by watching your hairline recede. Act now!
          </p>
          <Link
            href="#"
            className="inline-flex items-center bg-white text-blue-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Your Free Consultation
            <ArrowRight className="ml-2" />
          </Link>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 HairRevive Pro. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">
            Results may vary. Consult with a healthcare professional before starting any treatment.
          </p>
        </div>
      </footer>
    </div>
  )
}