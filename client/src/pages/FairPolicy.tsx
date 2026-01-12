import { Shield, CheckCircle, AlertCircle } from 'lucide-react';

export default function FairPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Shield className="w-12 h-12 text-primary" />
            <h1 className="text-4xl font-bold text-slate-900">Fair Play Policy</h1>
          </div>
          <p className="text-xl text-slate-600">
            Transparency and fairness are at the core of Lucky Lotus Casino
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Our Commitment to Fairness</h2>
            <p className="text-slate-700 leading-relaxed">
              Lucky Lotus Casino is committed to providing a fair, transparent, and enjoyable gaming experience for all players. 
              All our games are designed with integrity and use certified random number generators (RNG) to ensure unbiased outcomes. 
              We believe in complete transparency about how our games work and the odds players face.
            </p>
          </section>

          {/* Random Number Generation */}
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              Random Number Generation (RNG)
            </h3>
            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
              <p className="text-slate-700">
                All games use certified, industry-standard Random Number Generators to ensure every outcome is completely random and unpredictable. 
                Our RNG algorithms are regularly tested and audited by independent third parties to verify their integrity.
              </p>
            </div>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Cryptographically Secure:</strong> Our RNG uses advanced cryptographic algorithms to generate truly random numbers</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Independent Testing:</strong> Regular audits by certified testing laboratories ensure compliance with industry standards</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>No Manipulation:</strong> Game outcomes cannot be influenced by player behavior, timing, or any external factors</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Seed Independence:</strong> Each game uses a unique seed to ensure outcomes are independent of previous results</span>
              </li>
            </ul>
          </section>

          {/* Game Odds */}
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              Published Game Odds
            </h3>
            <p className="text-slate-700 mb-4">
              We provide complete transparency about the odds and house edge for each game:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 p-4 rounded border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">Roulette</h4>
                <p className="text-sm text-slate-600">European Roulette with 37 numbers (0-36). House edge: 2.7%</p>
              </div>
              <div className="bg-slate-50 p-4 rounded border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">Plinko</h4>
                <p className="text-sm text-slate-600">Provably fair ball drop with configurable difficulty. House edge: 1-5%</p>
              </div>
              <div className="bg-slate-50 p-4 rounded border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">Mines</h4>
                <p className="text-sm text-slate-600">Risk/reward based game with adjustable difficulty. House edge: 2-3%</p>
              </div>
              <div className="bg-slate-50 p-4 rounded border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">Slots</h4>
                <p className="text-sm text-slate-600">Classic slot machine with multiple paylines. House edge: 2-4%</p>
              </div>
            </div>
          </section>

          {/* Provably Fair */}
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              Provably Fair Technology
            </h3>
            <p className="text-slate-700 mb-4">
              Our games use provably fair technology, allowing players to verify the fairness of each outcome:
            </p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Hash Verification:</strong> Each game result is cryptographically hashed and can be verified by players</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Transparency:</strong> Game seeds and algorithms are disclosed to allow independent verification</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Audit Trail:</strong> Complete game history is maintained and available for review</span>
              </li>
            </ul>
          </section>

          {/* Data Protection */}
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6 text-green-600" />
              Data Protection & Security
            </h3>
            <p className="text-slate-700 mb-4">
              Your data and gaming experience are protected by industry-leading security measures:
            </p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>SSL Encryption:</strong> All data transmission is encrypted using 256-bit SSL/TLS encryption</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Secure Servers:</strong> Our servers are protected by advanced firewalls and intrusion detection systems</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary font-bold">•</span>
                <span><strong>Regular Audits:</strong> Independent security audits are conducted regularly to identify and address vulnerabilities</span>
              </li>
            </ul>
          </section>

          {/* Responsible Gaming */}
          <section className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
              Important Notice
            </h3>
            <p className="text-slate-700">
              Lucky Lotus Casino is a free-to-play social casino for entertainment purposes only. No real money is involved. 
              All games use virtual credits with no monetary value. For more information about responsible gaming, please visit our 
              <a href="/responsible-gaming" className="text-primary font-bold hover:underline"> Responsible Gaming page</a>.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Questions About Fairness?</h3>
            <p className="text-slate-700 mb-4">
              If you have any questions about our fair play policy or would like to verify the fairness of a specific game result, 
              please contact our support team:
            </p>
            <div className="bg-slate-100 p-4 rounded">
              <p className="text-slate-700"><strong>Email:</strong> support@luckylotus.com</p>
              <p className="text-slate-700"><strong>Response Time:</strong> Within 24 hours</p>
            </div>
          </section>

          {/* Last Updated */}
          <div className="text-center text-sm text-slate-500 pt-8 border-t border-slate-200">
            <p>Last updated: January 2026</p>
            <p>This policy is subject to change at any time without notice</p>
          </div>
        </div>
      </div>
    </div>
  );
}
