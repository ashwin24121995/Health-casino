import { Heart, AlertTriangle, Users, HelpCircle } from 'lucide-react';

export default function ResponsibleGaming() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Heart className="w-12 h-12 text-red-600" />
            <h1 className="text-4xl font-bold text-slate-900">Responsible Gaming</h1>
          </div>
          <p className="text-xl text-slate-600">
            Your well-being is our priority. Play responsibly and enjoy the experience.
          </p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">What is Responsible Gaming?</h2>
            <p className="text-slate-700 leading-relaxed">
              Responsible gaming means playing for entertainment while maintaining control over your gaming habits. 
              At Lucky Lotus Casino, we are committed to promoting a safe and enjoyable gaming environment. 
              Our games are designed for fun and entertainment purposes only, with no real money involved.
            </p>
          </section>

          {/* Key Principles */}
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Key Principles of Responsible Gaming</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-bold text-slate-900 mb-3">🎮 Play for Fun</h4>
                <p className="text-slate-700 text-sm">
                  Games should be enjoyed as entertainment. Never view gaming as a way to make money or solve financial problems.
                </p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h4 className="font-bold text-slate-900 mb-3">⏰ Set Time Limits</h4>
                <p className="text-slate-700 text-sm">
                  Decide how much time you'll spend gaming before you start. Take regular breaks and don't let gaming interfere with daily responsibilities.
                </p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-bold text-slate-900 mb-3">💰 Manage Your Credits</h4>
                <p className="text-slate-700 text-sm">
                  Treat virtual credits as entertainment budget. Never spend more than you can afford to lose, even though no real money is involved.
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-bold text-slate-900 mb-3">🚫 Know When to Stop</h4>
                <p className="text-slate-700 text-sm">
                  If gaming is no longer fun or is affecting your mood, relationships, or responsibilities, it's time to take a break.
                </p>
              </div>
            </div>
          </section>

          {/* Warning Signs */}
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6 text-red-600" />
              Warning Signs of Problem Gaming
            </h3>
            <p className="text-slate-700 mb-4">
              If you experience any of the following, consider taking a break or seeking help:
            </p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>Spending more time gaming than intended</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>Feeling anxious or irritable when not gaming</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>Neglecting work, school, or family responsibilities</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>Gaming to escape problems or negative emotions</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>Lying to friends or family about gaming habits</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>Experiencing financial difficulties due to gaming</span>
              </li>
              <li className="flex gap-3">
                <span className="text-red-600 font-bold">•</span>
                <span>Needing to spend more time/credits to feel satisfied</span>
              </li>
            </ul>
          </section>

          {/* Tips for Responsible Gaming */}
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Tips for Responsible Gaming</h3>
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded border-l-4 border-primary">
                <h4 className="font-bold text-slate-900 mb-2">1. Set a Budget</h4>
                <p className="text-slate-700 text-sm">
                  Decide in advance how much time and virtual credits you're willing to spend. Stick to your limits.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded border-l-4 border-primary">
                <h4 className="font-bold text-slate-900 mb-2">2. Take Regular Breaks</h4>
                <p className="text-slate-700 text-sm">
                  Step away from the games regularly. Use breaks to reflect on your gaming and ensure it remains fun.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded border-l-4 border-primary">
                <h4 className="font-bold text-slate-900 mb-2">3. Never Chase Losses</h4>
                <p className="text-slate-700 text-sm">
                  If you're losing, stop playing. Don't try to win back losses by playing more or betting higher amounts.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded border-l-4 border-primary">
                <h4 className="font-bold text-slate-900 mb-2">4. Don't Use Gaming to Cope</h4>
                <p className="text-slate-700 text-sm">
                  Never use gaming as a way to escape problems, stress, or negative emotions. Seek healthy alternatives.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded border-l-4 border-primary">
                <h4 className="font-bold text-slate-900 mb-2">5. Keep Gaming Separate</h4>
                <p className="text-slate-700 text-sm">
                  Don't let gaming interfere with work, school, relationships, or other important activities.
                </p>
              </div>
              <div className="bg-slate-50 p-4 rounded border-l-4 border-primary">
                <h4 className="font-bold text-slate-900 mb-2">6. Talk to Someone</h4>
                <p className="text-slate-700 text-sm">
                  If you're concerned about your gaming habits, talk to a trusted friend, family member, or counselor.
                </p>
              </div>
            </div>
          </section>

          {/* Support Resources */}
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <Users className="w-6 h-6 text-blue-600" />
              Support Resources
            </h3>
            <p className="text-slate-700 mb-4">
              If you need help with gaming habits, these organizations provide free support and resources:
            </p>
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">National Problem Gambling Helpline</h4>
                <p className="text-slate-700 text-sm mb-2">Free, confidential support available 24/7</p>
                <p className="text-primary font-bold">1-800-GAMBLER (1-800-426-2537)</p>
              </div>
              <div className="bg-slate-50 p-4 rounded border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">Gamblers Anonymous</h4>
                <p className="text-slate-700 text-sm mb-2">Support groups and meetings worldwide</p>
                <p className="text-primary font-bold">www.gamblersanonymous.org</p>
              </div>
              <div className="bg-slate-50 p-4 rounded border border-slate-200">
                <h4 className="font-bold text-slate-900 mb-2">Council on Compulsive Gambling</h4>
                <p className="text-slate-700 text-sm mb-2">Education and treatment referrals</p>
                <p className="text-primary font-bold">www.ccgonline.org</p>
              </div>
            </div>
          </section>

          {/* Age Verification */}
          <section className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <HelpCircle className="w-6 h-6 text-yellow-600" />
              Age Requirements
            </h3>
            <p className="text-slate-700">
              Lucky Lotus Casino is intended for adults 21 years and older only. We do not permit minors to access our games. 
              By using our platform, you confirm that you are at least 21 years of age and comply with all applicable laws and regulations.
            </p>
          </section>

          {/* Contact Support */}
          <section>
            <h3 className="text-xl font-bold text-slate-900 mb-4">Need Help?</h3>
            <p className="text-slate-700 mb-4">
              Our support team is here to help if you have questions about responsible gaming or need assistance:
            </p>
            <div className="bg-slate-100 p-4 rounded">
              <p className="text-slate-700"><strong>Email:</strong> support@luckylotus.com</p>
              <p className="text-slate-700"><strong>Response Time:</strong> Within 24 hours</p>
              <p className="text-slate-700 mt-2"><strong>Available:</strong> 24/7</p>
            </div>
          </section>

          {/* Last Updated */}
          <div className="text-center text-sm text-slate-500 pt-8 border-t border-slate-200">
            <p>Last updated: January 2026</p>
            <p>Remember: Gaming should be fun. If it's not, take a break.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
