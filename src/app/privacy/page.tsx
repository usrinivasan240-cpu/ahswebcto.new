import SectionHeading from "@/components/SectionHeading";

export default function PrivacyPolicy() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Privacy Policy" centered={false} />
        <p className="text-gray-400 mb-8">Effective Date: 31 December 2025</p>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Introduction</h2>
            <p>
              AutoHub Solutions ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Information Collection</h2>
            <p>We collect information that you provide directly to us when you:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Fill out our contact or chatbot setup forms</li>
              <li>Communicate with us via our AI chatbot</li>
              <li>Contact us via email or phone</li>
            </ul>
            <p className="mt-4">The types of information we may collect include your name, business name, email address, phone number, and any other information you choose to provide.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. Use of Information</h2>
            <p>We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your enquiries and provide customer support</li>
              <li>Process your requests for chatbot setup and automation</li>
              <li>Send you technical notices and administrative messages</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Third-Party Tools</h2>
            <p>We use third-party tools to help us provide our services, including:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Google Forms:</strong> For data collection and intake.</li>
              <li><strong>Firebase:</strong> For hosting and database management.</li>
              <li><strong>WhatsApp API:</strong> For automation services.</li>
              <li><strong>Botpress:</strong> For our AI chatbot widget.</li>
            </ul>
            <p className="mt-4">Each of these third parties has its own privacy policy regarding how they handle your data.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Data Security</h2>
            <p>
              We implement reasonable security measures to protect the security of your information. However, please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Your Rights</h2>
            <p>
              Depending on your location, you may have certain rights regarding your personal data, including the right to access, correct, or delete the data we hold about you.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
              <br />
              Email: autohubsolution777@gmail.com
              <br />
              Location: Trichy, Tamil Nadu, India
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
