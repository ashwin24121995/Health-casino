export default function Legal() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-primary via-purple-900 to-secondary py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Legal Information</h1>
          <p className="text-gray-200 mt-2">Company Details & Regulatory Information</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-card rounded-xl p-8 shadow-lg space-y-8">
            {/* Company Information */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Company Information</h2>
              <div className="bg-muted p-6 rounded-lg space-y-3">
                <p className="text-muted-foreground"><strong>Legal Name:</strong> Health Mitan Private Limited</p>
                <p className="text-muted-foreground"><strong>CIN:</strong> U86909CT2023PTC014998</p>
                <p className="text-muted-foreground"><strong>PAN:</strong> AWRPH8122K</p>
                <p className="text-muted-foreground"><strong>GST:</strong> 22AAGCH9149C1ZR</p>
                <p className="text-muted-foreground"><strong>Domain:</strong> <a href="https://healthmitan.com/" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">https://healthmitan.com/</a></p>
              </div>
            </div>

            {/* Registered Address */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Registered Address</h2>
              <div className="bg-muted p-6 rounded-lg">
                <p className="text-muted-foreground">
                  Health Mitan Private Limited<br />
                  C/O Murit Lal Karsh<br />
                  Vill Kot, Kasdol<br />
                  Raipur - 493335<br />
                  Chhattisgarh, India
                </p>
              </div>
            </div>

            {/* Social Casino Disclaimer */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Social Casino Gaming Disclaimer</h2>
              <p className="text-muted-foreground mb-4">
                Lucky Lotus is a SOCIAL CASINO platform designed for entertainment purposes only. This platform does NOT offer real money gambling and does NOT provide an opportunity to win real money or real prizes.
              </p>
              <p className="text-muted-foreground">
                All gameplay is conducted using virtual coins and credits that have no real-world monetary value. Users play for entertainment and enjoyment only.
              </p>
            </div>

            {/* Regulatory Compliance */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Regulatory Compliance</h2>
              <p className="text-muted-foreground mb-4">
                Health Mitan Private Limited operates in compliance with applicable laws and regulations in India. Our social casino platform adheres to the following principles:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>No real money gambling or wagering</li>
                <li>Age restriction: 21 years and older only</li>
                <li>Responsible gaming practices</li>
                <li>Data protection and privacy compliance</li>
                <li>Fair and transparent game mechanics</li>
                <li>Consumer protection measures</li>
              </ul>
            </div>

            {/* Intellectual Property */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Intellectual Property Rights</h2>
              <p className="text-muted-foreground mb-4">
                All content on Lucky Lotus, including but not limited to text, graphics, logos, images, audio clips, digital downloads, data compilations, and software, is the property of Health Mitan Private Limited or its content suppliers and is protected by international copyright laws.
              </p>
              <p className="text-muted-foreground">
                Reproduction, redistribution, transmission, or publication of any content without prior written permission is strictly prohibited.
              </p>
            </div>

            {/* Limitation of Liability */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                To the fullest extent permitted by law, Health Mitan Private Limited shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2 ml-2">
                <li>Your use of or inability to use the platform</li>
                <li>Unauthorized access to or alteration of your data</li>
                <li>Loss of profits, data, or business interruption</li>
                <li>Any other matter relating to the service</li>
              </ul>
            </div>

            {/* Changes to Legal Terms */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Changes to Legal Information</h2>
              <p className="text-muted-foreground">
                Health Mitan Private Limited reserves the right to modify this legal information at any time. Changes will be posted on this page with an updated date. Your continued use of the platform following the posting of changes constitutes your acceptance of those changes.
              </p>
            </div>

            {/* Contact for Legal Matters */}
            <div>
              <h2 className="text-2xl font-bold text-card-foreground mb-4">Legal Contact</h2>
              <p className="text-muted-foreground mb-4">
                For legal inquiries or concerns, please contact us:
              </p>
              <div className="bg-muted p-6 rounded-lg space-y-2">
                <p className="text-muted-foreground"><strong>Email:</strong> legal@healthmitan.com</p>
                <p className="text-muted-foreground"><strong>Company:</strong> Health Mitan Private Limited</p>
                <p className="text-muted-foreground"><strong>Address:</strong> C/O Murit Lal Karsh, Vill Kot, Kasdol, Raipur-493335, Chhattisgarh, India</p>
              </div>
            </div>

            {/* Acknowledgment */}
            <div className="border-t border-border pt-6">
              <p className="text-sm text-muted-foreground">
                Last Updated: January 2026<br />
                By using Lucky Lotus, you acknowledge that you have read and understood this Legal Information and agree to its terms.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
