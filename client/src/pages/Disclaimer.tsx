export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary via-purple-900 to-secondary py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Disclaimer</h1>
          <p className="text-gray-200 mt-2">Important Legal Disclaimer</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-xl p-8 shadow-lg space-y-8">
            {/* General Disclaimer */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">General Disclaimer</h2>
              <p className="text-muted-foreground mb-4">
                This disclaimer ("Disclaimer") applies to the Health Mitan website and all related services operated by Health Mitan Private Limited. By accessing and using this platform, you acknowledge that you have read, understood, and agree to be bound by this Disclaimer.
              </p>
              <p className="text-muted-foreground">
                If you do not agree with any part of this Disclaimer, please do not use our services.
              </p>
            </div>

            {/* No Real Money Gambling */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">No Real Money Gambling</h2>
              <p className="text-muted-foreground mb-4">
                <strong>IMPORTANT:</strong> Health Mitan is a SOCIAL CASINO platform for entertainment purposes only. This platform:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>Does NOT offer real money gambling</li>
                <li>Does NOT provide an opportunity to win real money</li>
                <li>Does NOT offer real prizes or cash rewards</li>
                <li>Uses only virtual coins and credits with NO monetary value</li>
                <li>Is designed purely for entertainment and enjoyment</li>
              </ul>
            </div>

            {/* Age Restriction */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Age Restriction</h2>
              <p className="text-muted-foreground mb-4">
                Health Mitan is intended exclusively for users who are 21 years of age or older. By using this platform, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>You are at least 21 years of age</li>
                <li>You have the legal capacity to enter into this agreement</li>
                <li>You are not prohibited by law from using this service</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We reserve the right to verify your age at any time and may suspend or terminate your account if age verification fails.
              </p>
            </div>

            {/* No Warranty */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">No Warranty</h2>
              <p className="text-muted-foreground mb-4">
                Health Mitan and all materials, information, and services on this platform are provided on an "AS IS" and "AS AVAILABLE" basis. Health Mitan Private Limited makes NO WARRANTIES, EXPRESS OR IMPLIED, including:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>Warranties of merchantability or fitness for a particular purpose</li>
                <li>Warranties of non-infringement of third-party rights</li>
                <li>Warranties regarding the accuracy or completeness of content</li>
                <li>Warranties of uninterrupted or error-free service</li>
                <li>Warranties regarding security or data protection</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                TO THE FULLEST EXTENT PERMITTED BY LAW, Health Mitan Private Limited SHALL NOT BE LIABLE FOR:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>Any indirect, incidental, special, consequential, or punitive damages</li>
                <li>Loss of profits, revenue, data, or business opportunities</li>
                <li>Loss of use or functionality of the platform</li>
                <li>Any claims arising from your use or inability to use the service</li>
                <li>Unauthorized access to or alteration of your data</li>
                <li>Any third-party claims or actions</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                This limitation applies even if we have been advised of the possibility of such damages.
              </p>
            </div>

            {/* User Responsibility */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">User Responsibility</h2>
              <p className="text-muted-foreground mb-4">
                You are solely responsible for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>Your use of the platform and compliance with all applicable laws</li>
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities conducted through your account</li>
                <li>Your device's security and maintenance</li>
                <li>Your internet connection and any associated costs</li>
              </ul>
            </div>

            {/* Technical Issues */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Technical Issues and Service Interruptions</h2>
              <p className="text-muted-foreground mb-4">
                Health Mitan Private Limited does not guarantee:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>Uninterrupted access to the platform</li>
                <li>Error-free operation of games or services</li>
                <li>Compatibility with all devices or browsers</li>
                <li>Timely resolution of technical issues</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We may conduct maintenance, updates, or modifications that may temporarily interrupt service without prior notice.
              </p>
            </div>

            {/* Third-Party Content */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Third-Party Content and Links</h2>
              <p className="text-muted-foreground mb-4">
                Health Mitan may contain links to third-party websites and services. We are NOT responsible for:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>The content, accuracy, or legality of third-party sites</li>
                <li>Any transactions or interactions with third parties</li>
                <li>Any damages or losses resulting from third-party services</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                Your use of third-party sites is at your own risk and subject to their terms and conditions.
              </p>
            </div>

            {/* Responsible Gaming */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Responsible Gaming</h2>
              <p className="text-muted-foreground mb-4">
                While Health Mitan is a social gaming platform with no real money involved, we encourage responsible gaming habits:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>Play for entertainment purposes only</li>
                <li>Set time limits for gaming sessions</li>
                <li>Take regular breaks</li>
                <li>Do not use gaming as a source of income</li>
                <li>Seek help if you develop unhealthy gaming habits</li>
              </ul>
            </div>

            {/* Indemnification */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Indemnification</h2>
              <p className="text-muted-foreground">
                You agree to indemnify and hold harmless Health Mitan Private Limited, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from your use of the platform, violation of this Disclaimer, or infringement of any third-party rights.
              </p>
            </div>

            {/* Severability */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Severability</h2>
              <p className="text-muted-foreground">
                If any provision of this Disclaimer is found to be invalid or unenforceable, the remaining provisions shall continue in full force and effect.
              </p>
            </div>

            {/* Changes to Disclaimer */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Changes to This Disclaimer</h2>
              <p className="text-muted-foreground">
                Health Mitan Private Limited reserves the right to modify this Disclaimer at any time. Changes will be effective immediately upon posting to the website. Your continued use of the platform following any changes constitutes your acceptance of the modified Disclaimer.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Disclaimer, please contact us:
              </p>
              <div className="bg-muted p-6 rounded-lg space-y-2">
                <p className="text-muted-foreground"><strong>Email:</strong> support@healthmitan.com</p>
                <p className="text-muted-foreground"><strong>Company:</strong> Health Mitan Private Limited</p>
                <p className="text-muted-foreground"><strong>Address:</strong> C/O Murit Lal Karsh, Vill Kot, Kasdol, Raipur-493335, Chhattisgarh, India</p>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">
                Last Updated: January 2026<br />
                By using Health Mitan, you acknowledge that you have read, understood, and agree to this Disclaimer in its entirety.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
