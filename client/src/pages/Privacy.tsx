export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary via-purple-900 to-secondary py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Privacy Policy</h1>
          <p className="text-gray-200 mt-2">Last Updated: January 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-xl p-8 shadow-lg space-y-8">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-4">
                Health Mitan Private Limited ("we", "us", "our", or "Company") operates the Health Mitan social casino platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services. Please read this policy carefully. If you do not agree with our policies and practices, please do not use our services.
              </p>
              <p className="text-muted-foreground">
                We are committed to protecting your privacy and ensuring you have a positive experience on our platform. This Privacy Policy applies to all information collected through our website, mobile application, and related services.
              </p>
            </div>

            {/* Information We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Information We Collect</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">Personal Information</h3>
                  <p className="text-muted-foreground mb-3">We collect information you provide directly to us, including:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                    <li>Full name and email address</li>
                    <li>Date of birth (to verify age eligibility)</li>
                    <li>Username and password</li>
                    <li>Profile information and preferences</li>
                    <li>Contact information for customer support</li>
                    <li>Payment information (processed securely through third-party providers)</li>
                    <li>Communication preferences</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">Automatically Collected Information</h3>
                  <p className="text-muted-foreground mb-3">When you access our platform, we automatically collect:</p>
                  <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                    <li>IP address and device identifiers</li>
                    <li>Browser type and version</li>
                    <li>Operating system</li>
                    <li>Pages visited and time spent on each page</li>
                    <li>Referral source</li>
                    <li>Game play data and statistics</li>
                    <li>Cookies and similar tracking technologies</li>
                    <li>Location data (if permitted)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">Third-Party Information</h3>
                  <p className="text-muted-foreground">
                    We may receive information about you from third parties, including analytics providers, social media platforms, and payment processors.
                  </p>
                </div>
              </div>
            </div>

            {/* How We Use Your Information */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">How We Use Your Information</h2>
              <p className="text-muted-foreground mb-4">We use the information we collect for various purposes:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>To provide, maintain, and improve our services</li>
                <li>To process transactions and send related information</li>
                <li>To verify your identity and prevent fraud</li>
                <li>To comply with legal obligations and age verification requirements</li>
                <li>To send promotional emails and marketing communications (with your consent)</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To analyze usage patterns and improve user experience</li>
                <li>To personalize your gaming experience</li>
                <li>To conduct research and analytics</li>
                <li>To enforce our Terms of Service and other agreements</li>
              </ul>
            </div>

            {/* Information Sharing */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Information Sharing and Disclosure</h2>
              <p className="text-muted-foreground mb-4">We may share your information in the following circumstances:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li><strong>Service Providers:</strong> With vendors who assist in our operations (payment processors, hosting providers, analytics services)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our legal rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Your Consent:</strong> When you explicitly authorize us to share your information</li>
                <li><strong>Aggregated Data:</strong> We may share anonymized, aggregated data with third parties</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                We do NOT sell your personal information to third parties for marketing purposes.
              </p>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground mb-4">
                We implement comprehensive security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. Our security measures include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>SSL/TLS encryption for data in transit</li>
                <li>Secure password hashing and storage</li>
                <li>Regular security audits and vulnerability assessments</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Firewalls and intrusion detection systems</li>
                <li>Employee training on data protection</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                However, no method of transmission over the internet is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </div>

            {/* Cookies and Tracking */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Cookies and Tracking Technologies</h2>
              <p className="text-muted-foreground mb-4">
                We use cookies and similar tracking technologies to enhance your experience and analyze usage patterns. These include:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li><strong>Session Cookies:</strong> Temporary cookies that expire when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Cookies that remain on your device for a specified period</li>
                <li><strong>Analytics Cookies:</strong> To understand how users interact with our platform</li>
                <li><strong>Preference Cookies:</strong> To remember your settings and preferences</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                You can control cookies through your browser settings. However, disabling cookies may affect the functionality of our services.
              </p>
            </div>

            {/* Your Rights */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Your Privacy Rights</h2>
              <p className="text-muted-foreground mb-4">Depending on your location, you may have the following rights:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li><strong>Access:</strong> The right to access your personal information</li>
                <li><strong>Correction:</strong> The right to correct inaccurate information</li>
                <li><strong>Deletion:</strong> The right to request deletion of your information</li>
                <li><strong>Opt-Out:</strong> The right to opt out of marketing communications</li>
                <li><strong>Data Portability:</strong> The right to receive your data in a portable format</li>
              </ul>
              <p className="text-muted-foreground mt-4">
                To exercise any of these rights, please contact us at privacy@healthmitan.com.
              </p>
            </div>

            {/* Children's Privacy */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Children's Privacy</h2>
              <p className="text-muted-foreground">
                Our services are intended for users 21 years of age and older. We do not knowingly collect personal information from children under 21. If we become aware that we have collected information from a child under 21, we will take steps to delete such information promptly. If you believe we have collected information from a child under 21, please contact us immediately.
              </p>
            </div>

            {/* Third-Party Links */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Third-Party Links</h2>
              <p className="text-muted-foreground">
                Our platform may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.
              </p>
            </div>

            {/* Policy Updates */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. Your continued use of our services following the posting of changes constitutes your acceptance of those changes.
              </p>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have questions about this Privacy Policy or our privacy practices, please contact us:
              </p>
              <div className="bg-muted p-6 rounded-lg space-y-2">
                <p className="text-muted-foreground"><strong>Email:</strong> privacy@healthmitan.com</p>
                <p className="text-muted-foreground"><strong>Company:</strong> Health Mitan Private Limited</p>
                <p className="text-muted-foreground"><strong>Address:</strong> C/O Murit Lal Karsh, Vill Kot, Kasdol, Raipur-493335, Chhattisgarh, India</p>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">
                By using our services, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
