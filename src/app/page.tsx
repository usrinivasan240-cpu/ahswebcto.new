import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyAutomation from "@/components/WhyAutomation";
import Pricing from "@/components/Pricing";
import HolographicUI from "@/components/HolographicUI";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyAutomation />
      <Pricing />
      
      {/* Holographic UI Section */}
      <HolographicUI />
      
      {/* Final CTA */}
      <section className="py-24 bg-accent relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-8">
            Ready to Automate Your Success?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Join modern businesses scaling with AutoHub Solutions. 
            Get started with your custom chatbot today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="/setup" 
              className="bg-white text-accent px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all"
            >
              Setup Your Chatbot
            </a>
            <a 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
            >
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
