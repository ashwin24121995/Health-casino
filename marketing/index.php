<php>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="CC INNOVATIONS - Premium Social Casino Gaming. Free to play, ages 18+, for entertainment only.">
    <meta name="keywords" content="social casino, gaming, free to play, entertainment">
    <title>CC INNOVATIONS - Premium Social Casino Gaming</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: #f8f9fa;
        }

        /* Header */
        header {
            background: linear-gradient(135deg, #1a0033 0%, #2d0052 50%, #1a0033 100%);
            color: white;
            padding: 20px 0;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
            position: sticky;
            top: 0;
            z-index: 100;
        }

        .header-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .logo-section {
            display: flex;
            align-items: center;
            gap: 15px;
        }

        .logo-section img {
            height: 50px;
            width: auto;
        }

        .logo-text h1 {
            font-size: 24px;
            font-weight: 700;
            color: #ffd700;
            margin: 0;
        }

        .cta-button {
            background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%);
            color: #1a0033;
            border: none;
            padding: 12px 30px;
            font-size: 16px;
            font-weight: 700;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }

        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 212, 255, 0.4);
        }

        .cta-button:active {
            transform: translateY(0);
        }

        /* Hero Section */
        .hero {
            background: linear-gradient(135deg, #1a0033 0%, #2d0052 50%, #1a0033 100%);
            color: white;
            padding: 60px 20px;
            text-align: center;
        }

        .hero-container {
            max-width: 1200px;
            margin: 0 auto;
        }

        .hero-image {
            width: 100%;
            max-width: 600px;
            height: auto;
            margin: 30px auto;
            display: block;
            border-radius: 10px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
        }

        .hero h2 {
            font-size: 48px;
            margin-bottom: 20px;
            color: #ffd700;
            font-weight: 700;
        }

        .hero p {
            font-size: 20px;
            margin-bottom: 30px;
            color: #e0e0e0;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .hero-features {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
            margin: 40px 0;
        }

        .feature-box {
            background: rgba(255, 255, 255, 0.1);
            padding: 20px;
            border-radius: 8px;
            border: 1px solid rgba(255, 215, 0, 0.3);
        }

        .feature-box h3 {
            color: #ffd700;
            margin-bottom: 10px;
            font-size: 18px;
        }

        .feature-box p {
            font-size: 14px;
            color: #d0d0d0;
        }

        /* CTA Section */
        .cta-section {
            background: linear-gradient(135deg, #00d4ff 0%, #0099cc 100%);
            color: #1a0033;
            padding: 50px 20px;
            text-align: center;
        }

        .cta-section h2 {
            font-size: 36px;
            margin-bottom: 20px;
            font-weight: 700;
        }

        .cta-section p {
            font-size: 18px;
            margin-bottom: 30px;
            max-width: 600px;
            margin-left: auto;
            margin-right: auto;
        }

        .cta-button-large {
            background: #1a0033;
            color: #ffd700;
            border: 2px solid #ffd700;
            padding: 18px 50px;
            font-size: 18px;
            font-weight: 700;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
        }

        .cta-button-large:hover {
            background: #2d0052;
            color: #00d4ff;
            border-color: #00d4ff;
            transform: translateY(-2px);
        }

        /* Disclaimer Section */
        .disclaimer-section {
            background: #f8f9fa;
            padding: 40px 20px;
            border-top: 3px solid #ffd700;
        }

        .disclaimer-container {
            max-width: 1000px;
            margin: 0 auto;
        }

        .disclaimer-section h3 {
            color: #1a0033;
            font-size: 22px;
            margin-bottom: 20px;
            font-weight: 700;
        }

        .disclaimer-content {
            background: white;
            padding: 25px;
            border-radius: 8px;
            border-left: 4px solid #ffd700;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }

        .disclaimer-content h4 {
            color: #1a0033;
            font-size: 16px;
            margin-top: 15px;
            margin-bottom: 8px;
            font-weight: 600;
        }

        .disclaimer-content p {
            font-size: 14px;
            color: #555;
            margin-bottom: 12px;
            line-height: 1.7;
        }

        .disclaimer-content ul {
            margin-left: 20px;
            margin-bottom: 12px;
        }

        .disclaimer-content li {
            font-size: 14px;
            color: #555;
            margin-bottom: 8px;
            line-height: 1.6;
        }

        /* Age Verification */
        .age-verification {
            background: #fff3cd;
            border: 2px solid #ffc107;
            padding: 20px;
            border-radius: 8px;
            margin: 20px 0;
        }

        .age-verification h4 {
            color: #856404;
            font-size: 16px;
            margin-bottom: 10px;
            font-weight: 700;
        }

        .age-verification p {
            color: #856404;
            font-size: 14px;
            margin: 0;
        }

        /* Footer */
        footer {
            background: #1a0033;
            color: white;
            padding: 30px 20px;
            text-align: center;
            border-top: 3px solid #ffd700;
        }

        .footer-content {
            max-width: 1000px;
            margin: 0 auto;
        }

        .footer-content p {
            font-size: 13px;
            margin-bottom: 10px;
            line-height: 1.6;
        }

        .company-info {
            background: rgba(255, 215, 0, 0.1);
            padding: 15px;
            border-radius: 5px;
            margin: 15px 0;
            font-size: 12px;
        }

        .company-info strong {
            color: #ffd700;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .header-container {
                flex-direction: column;
                gap: 15px;
            }

            .hero h2 {
                font-size: 32px;
            }

            .hero p {
                font-size: 16px;
            }

            .cta-section h2 {
                font-size: 28px;
            }

            .hero-features {
                grid-template-columns: 1fr;
            }

            .cta-button {
                padding: 10px 25px;
                font-size: 14px;
            }

            .cta-button-large {
                padding: 14px 40px;
                font-size: 16px;
            }
        }

        @media (max-width: 480px) {
            header {
                padding: 15px 0;
            }

            .logo-section img {
                height: 40px;
            }

            .logo-text h1 {
                font-size: 18px;
            }

            .hero {
                padding: 40px 15px;
            }

            .hero h2 {
                font-size: 24px;
                margin-bottom: 15px;
            }

            .hero p {
                font-size: 14px;
                margin-bottom: 20px;
            }

            .cta-section {
                padding: 35px 15px;
            }

            .cta-section h2 {
                font-size: 22px;
            }

            .cta-section p {
                font-size: 14px;
            }

            .disclaimer-section {
                padding: 25px 15px;
            }

            .disclaimer-content {
                padding: 15px;
            }

            .disclaimer-content h4 {
                font-size: 14px;
            }

            .disclaimer-content p,
            .disclaimer-content li {
                font-size: 12px;
            }

            .cta-button-large {
                padding: 12px 30px;
                font-size: 14px;
            }

            footer {
                padding: 20px 15px;
            }

            .footer-content p {
                font-size: 11px;
            }

            .company-info {
                font-size: 11px;
                padding: 12px;
            }
        }

        /* Print Styles */
        @media print {
            header, .cta-button, footer {
                display: none;
            }
        }
    </style>
</head>
<body>
    <!-- Header with Logo and CTA -->
    <header>
        <div class="header-container">
            <div class="logo-section">
                <div class="logo-text">
                    <h1>CC INNOVATIONS</h1>
                </div>
            </div>
            <a href="https://pureplayfantasy.com/" class="cta-button" target="_blank" rel="noopener noreferrer">Visit Our Homepage</a>
        </div>
    </header>

    <!-- Hero Section -->
    <section class="hero">
        <div class="hero-container">
            <h2>Premium Social Casino Gaming</h2>
            <p>Experience the thrill of premium social casino games. Completely free to play, for entertainment only.</p>
            
            <!-- Responsive Hero Image -->
            <picture>
                <source media="(max-width: 480px)" srcset="hero-mobile.webp">
                <source media="(max-width: 768px)" srcset="hero-tablet.webp">
                <img src="hero-desktop.webp" alt="CC INNOVATIONS Premium Social Casino Gaming" class="hero-image">
            </picture>

            <div class="hero-features">
                <div class="feature-box">
                    <h3>✓ Free to Play</h3>
                    <p>No deposits required. Enjoy all games completely free.</p>
                </div>
                <div class="feature-box">
                    <h3>✓ Ages 18+</h3>
                    <p>Safe gaming environment for adults only.</p>
                </div>
                <div class="feature-box">
                    <h3>✓ Entertainment Only</h3>
                    <p>No real money involved. Pure entertainment.</p>
                </div>
                <div class="feature-box">
                    <h3>✓ Secure Platform</h3>
                    <p>Your data and privacy are protected.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section">
        <div class="cta-section">
            <h2>Ready to Play?</h2>
            <p>Join thousands of players enjoying premium social casino gaming. Visit our homepage to get started!</p>
            <a href="https://pureplayfantasy.com/" class="cta-button-large" target="_blank" rel="noopener noreferrer">Visit Our Homepage Now</a>
        </div>
    </section>

    <!-- Disclaimer Section -->
    <section class="disclaimer-section">
        <div class="disclaimer-container">
            <h3>⚠️ Important Disclaimers & Legal Information</h3>
            
            <div class="disclaimer-content">
                <div class="age-verification">
                    <h4>🔞 Age Verification - 18+ Only</h4>
                    <p><strong>This platform is strictly for users aged 18 years or older.</strong> By accessing this site, you confirm that you are at least 18 years of age. Users under 18 are strictly prohibited from using this platform.</p>
                </div>

                <h4>Entertainment Only - No Real Money</h4>
                <p>CC INNOVATIONS is a <strong>social gaming platform for entertainment purposes only</strong>. This is NOT real money gambling. No actual money is wagered, won, or lost. All games use virtual currency only.</p>

                <h4>No Real Money Gambling</h4>
                <p>This platform does NOT offer real money gambling or opportunities to win real money or prizes. Practice or success at social gaming does not imply future success at real money gambling. All games are for entertainment and amusement only.</p>

                <h4>Free-to-Play Model</h4>
                <ul>
                    <li>All games are completely free to play</li>
                    <li>No deposits or payments required</li>
                    <li>No real money transactions</li>
                    <li>Virtual currency only - no real value</li>
                </ul>

                <h4>Responsible Gaming</h4>
                <p>We are committed to responsible gaming practices. If you or someone you know is struggling with gaming habits, please seek help:</p>
                <ul>
                    <li>Contact our support team: Support@pureplayfantasy.com</li>
                    <li>Set time limits for your gaming sessions</li>
                    <li>Take regular breaks</li>
                    <li>Never share your account with others</li>
                </ul>

                <h4>No Affiliation with Real Money Gambling</h4>
                <p>CC INNOVATIONS is an independent platform operated entirely by CC INNOVATIONS (OPC) PRIVATE LIMITED. This business does not affiliate with, endorse, or have any partnership with any real money gambling operators, casinos, or betting services.</p>

                <h4>Compliance with Regulations</h4>
                <p>This platform operates in full compliance with applicable laws and regulations. All content is designed to be transparent and truthful. We do not engage in any misleading practices or false advertising.</p>

                <h4>Company Information</h4>
                <p><strong>Legal Name:</strong> CC INNOVATIONS (OPC) PRIVATE LIMITED</p>
                <p><strong>CIN:</strong> U78100JH2023OPC021360</p>
                <p><strong>PAN:</strong> AALCC3673P</p>
                <p><strong>Email:</strong> Support@pureplayfantasy.com</p>
                <p><strong>Address:</strong> C/O N K SHARMA SEC 9 TYPE, BT QR NO 463. HEC, Dhurwa, Ranchi, Ranchi, Jharkhand 834004, India</p>

                <h4>Google Ads Policy Compliance</h4>
                <p>This landing page fully complies with Google Ads policies. We maintain transparency about our services, do not engage in misleading practices, and clearly communicate that this is entertainment-only social gaming with no real money involved.</p>

                <h4>Data Privacy & Security</h4>
                <p>Your privacy is important to us. We use industry-standard security measures to protect your personal information. For more details, please visit our Privacy Policy on our homepage.</p>

                <h4>Disclaimer of Liability</h4>
                <p>CC INNOVATIONS provides this platform "as is" without any warranties. We are not responsible for any technical issues, interruptions, or losses that may occur. Users assume all risks associated with using this platform.</p>

                <h4>Last Updated</h4>
                <p>This disclaimer was last updated on February 4, 2026. We reserve the right to update these terms at any time.</p>
            </div>
        </div>
    </section>

    <!-- Footer -->
    <footer>
        <div class="footer-content">
            <p><strong>CC INNOVATIONS - Premium Social Casino Gaming</strong></p>
            <p>For Entertainment Only • Ages 18+ • No Real Money • Free to Play</p>
            
            <div class="company-info">
                <strong>CC INNOVATIONS (OPC) PRIVATE LIMITED</strong><br>
                CIN: U78100JH2023OPC021360 | PAN: AALCC3673P<br>
                Email: Support@pureplayfantasy.com<br>
                Address: C/O N K SHARMA SEC 9 TYPE, BT QR NO 463. HEC, Dhurwa, Ranchi, Ranchi, Jharkhand 834004, India
            </div>

            <p>&copy; 2026 CC INNOVATIONS (OPC) PRIVATE LIMITED. All rights reserved.</p>
            <p>This is a social gaming platform for entertainment purposes only. No real money gambling is offered.</p>
            <p style="font-size: 11px; margin-top: 15px; color: #ccc;">This landing page complies with Google Ads policies and industry standards for responsible gaming advertising.</p>
        </div>
    </footer>

</body>
</html>

</php>

