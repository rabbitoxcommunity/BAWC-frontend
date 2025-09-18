import React from 'react'

export default function Privacy(
    {
        siteName = "BAWC",
        domain = "https://baitalwahda.com/",
        contactEmail = "info@baitalwahda.com",
        lastUpdated = "16/09/2025",
}
) {
  return (
    <div className="container my-5">
<header className="mb-4">
<h1 className="h3 fw-bold">Privacy Policy</h1>
<p className="text-muted">Last updated: {lastUpdated}</p>
<p className="mt-3">{siteName} ("we," "our," or "us") respects your privacy. This Privacy Policy explains how we collect, use, and protect your information when you visit our website ({domain}).</p>
</header>


<div className="mb-4">
<h2 className="h5 fw-semibold">1. Information We Collect</h2>
<p><strong>Personal Information:</strong> Name, email address, phone number, or other details you provide when you contact us or submit an inquiry.</p>
<p><strong>Non-Personal Information:</strong> Browser type, device information, IP address, and cookies for analytics and site performance.</p>
</div>


<div className="mb-4">
<h2 className="h5 fw-semibold">2. How We Use Your Information</h2>
<ul>
<li>To respond to your inquiries or requests.</li>
<li>To send updates about products or promotions (only if you opt in).</li>
<li>To improve our website and user experience.</li>
</ul>
</div>


<div className="mb-4">
<h2 className="h5 fw-semibold">3. Cookies</h2>
<p>We may use cookies to enhance site functionality and understand visitor behavior. You can disable cookies in your browser settings, but some features may not work properly if you do.</p>
</div>


<div className="mb-4">
<h2 className="h5 fw-semibold">4. Data Sharing</h2>
<p>We do not sell or rent your personal information. We may share data only with trusted service providers who help us operate the Site (e.g., hosting, analytics) or when required by law.</p>
</div>


<div className="mb-4">
<h2 className="h5 fw-semibold">5. Data Security</h2>
<p>We use reasonable administrative and technical safeguards to protect your data. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.</p>
</div>


<div className="mb-4">
<h2 className="h5 fw-semibold">6. Your Rights</h2>
<p>You can request to access, update, or delete your personal data by contacting us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>. You may also opt out of marketing communications at any time.</p>
</div>


<div className="mb-4">
<h2 className="h5 fw-semibold">7. Third-Party Links</h2>
<p>Our Site may contain links to other websites. We are not responsible for the privacy practices or content of those websites.</p>
</div>


<div className="mb-4">
<h2 className="h5 fw-semibold">8. Updates to This Policy</h2>
<p>We may update this Privacy Policy from time to time. Updates will be posted on this page with a new "Last updated" date. Continued use of the Site means you accept the updated Policy.</p>
</div>


<div className="mb-4">
<h2 className="h5 fw-semibold">9. Contact Us</h2>
<p>If you have any questions about this Privacy Policy or your data, please email us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
</div>


<footer className="mt-4 text-muted small">Thank you for trusting {siteName} with your information.</footer>
</div>
  )
}
