import React from 'react'

export default function Terms(
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
                <h1 className="h3 fw-bold">Terms &amp; Conditions</h1>
                <p className="text-muted">Last updated: {lastUpdated}</p>
                <p className="mt-3">Welcome to {siteName}. By accessing or using our website ({domain}) you agree to the following terms. Please read them carefully.</p>
            </header>


            <div className="mb-4">
                <h2 className="h5 fw-semibold">1. Acceptance of Terms</h2>
                <p>By accessing or using the {siteName} website you accept and agree to be bound by these Terms &amp; Conditions and our Privacy Policy. If you do not agree, please do not use the Site.</p>
            </div>


            <div className="mb-4">
                <h2 className="h5 fw-semibold">2. Eligibility</h2>
                <p>You must be at least 18 years old to use this Site, or access it under the supervision of a parent/guardian. By using the Site you represent that you meet this eligibility requirement.</p>
            </div>


            <div className="mb-4">
                <h2 className="h5 fw-semibold">3. Products &amp; Information</h2>
                <p>{siteName} lists products for browsing and inquiry. Product images, descriptions, prices, and availability are provided for informational purposes and are subject to change without notice. We try to ensure the information is accurate but do not guarantee completeness or suitability for any purpose.</p>
            </div>


            <div className="mb-4">
                <h2 className="h5 fw-semibold">4. Orders, Inquiries &amp; Payments</h2>
                <p>At present, {siteName} does not accept online payments through a payment gateway. Customers who wish to purchase items should contact us directly using the contact details on the Site (phone, email or WhatsApp). An order is considered confirmed only after direct communication between the customer and {siteName}, agreement on price, delivery terms and payment method.</p>
                <p>Any offline payment (cash, bank transfer, UPI, etc.) will be handled according to the terms agreed during the ordering process. We recommend confirming the payment method and delivery details before making any payment.</p>
            </div>


            <div className="mb-4">
                <h2 className="h5 fw-semibold">5. Pricing &amp; Availability</h2>
                <p>All prices shown on the Site are in the currency specified on the Site and may change without notice. Availability is subject to stock. We will inform you of any changes to price or availability during the order confirmation process.</p>
            </div>


            <div className="mb-4">
                <h2 className="h5 fw-semibold">6. Shipping &amp; Delivery</h2>
                <p>Delivery options, costs, and estimated delivery times will be communicated during order confirmation. {siteName} is not responsible for delays caused by third-party carriers, customs clearance, or events outside our control.</p>
            </div>


            <div className="mb-4">
                <h2 className="h5 fw-semibold">7. Returns &amp; Refunds</h2>
                <p>If you receive a damaged or defective item, please contact us within the timeframe stated on the Site or during order confirmation. Because payments are processed offline, returns and refunds will be handled per the agreement made at the time of purchase. We may require photographic evidence or the return of the product to assess the issue.</p>
            </div>


            <div className="mb-4">
                <h2 className="h5 fw-semibold">8. Intellectual Property</h2>
                <p>All content on the Site, including text, images, logos, and designs, is owned by {siteName} or licensed to us. You may not copy, reproduce, distribute or create derivative works without our prior written permission.</p>
            </div>


            <div className="mb-4">
                <h2 className="h5 fw-semibold">9. User Conduct</h2>
                <p>You agree not to use the Site for unlawful activities, to post false information, to infringe third-party rights, or to attempt to interfere with the Site's security or functionality.</p>
            </div>


            <div className="mb-4">
                <h2 className="h5 fw-semibold">10. Disclaimers &amp; Limitation of Liability</h2>
                <p>The Site is provided "as is" without warranties of any kind. {siteName} disclaims all implied warranties to the fullest extent permitted by law. In no event will {siteName} be liable for indirect, incidental, special, or consequential damages arising out of or in connection with the Site or products.</p>
            </div>


            <div className="mb-4">
                <h2 className="h5 fw-semibold">11. Third-Party Links</h2>
                <p>The Site may contain links to third-party websites for convenience. We are not responsible for the content, privacy practices, or accuracy of those sites.</p>
            </div>


            <div className="mb-4">
                <h2 className="h5 fw-semibold">12. Privacy</h2>
                <p>Our Privacy Policy explains how we collect and use personal information. By using the Site you consent to our collection and use of information as described in the Privacy Policy.</p>
            </div>


            <div className="mb-4">
                <h2 className="h5 fw-semibold">13. Changes to Terms</h2>
                <p>We may update these Terms from time to time. Updated terms will be posted on this page with a revised "Last updated" date. Continued use of the Site after updates constitutes acceptance of the revised Terms.</p>
            </div>


            <div className="mb-4">
                <h2 className="h5 fw-semibold">14. Governing Law</h2>
                <p>These Terms are governed by the laws of the jurisdiction in which {siteName} operates. Any disputes arising out of or in connection with these Terms will be subject to the exclusive jurisdiction of the competent courts in that jurisdiction.</p>
            </div>


            <div className="mb-4">
                <h2 className="h5 fw-semibold">15. Contact Information</h2>
                <p>If you have questions about these Terms, please contact us at <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.</p>
            </div>


            <footer className="mt-4 text-muted small">Thank you for visiting {siteName}.</footer>
        </div>
    )
}
