import SectionHeading from "@/components/SectionHeading";

export default function TermsOfService() {
  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Terms of Service" centered={false} />
        <p className="text-gray-400 mb-8">Effective Date: 31 December 2025</p>

        <div className="prose prose-invert max-w-none space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">1. Scope of Service</h2>
            <p>
              AutoHub Solutions provides AI-powered WhatsApp automation, chatbot setup, and business process automation services. The specific scope of your project will be defined in your chosen plan or custom proposal.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">2. Pricing & Payment</h2>
            <p>
              Prices for our services are as listed on our website or as quoted in a custom proposal. All payments are required in advance or according to the agreed-upon schedule.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">3. No Refund Policy</h2>
            <p className="font-bold text-white">
              Strictly No Refunds: Due to the nature of digital services and the manual effort involved in setting up AI automations, AutoHub Solutions follows a strict no-refund policy. Once a service is purchased or a setup is initiated, no refunds will be issued under any circumstances.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">4. Client Responsibility</h2>
            <p>
              Clients are responsible for providing accurate information, timely feedback, and necessary access to third-party accounts (like WhatsApp Business API) required for the completion of the service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">5. Service Availability</h2>
            <p>
              While we strive for 100% uptime, our services rely on third-party platforms (like WhatsApp, Botpress, and Firebase). We are not liable for any downtime caused by these third-party providers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">6. Limitation of Liability</h2>
            <p>
              AutoHub Solutions shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">7. Governing Law</h2>
            <p>
              These terms shall be governed by and construed in accordance with the laws of India, and any disputes will be subject to the exclusive jurisdiction of the courts in Trichy, Tamil Nadu.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">8. Contact Details</h2>
            <p>
              For any questions regarding these terms, please contact:
              <br />
              Email: autohubsolution777@gmail.com
              <br />
              Phone: 9940918442
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
