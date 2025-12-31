"use client";

import SectionHeading from "./SectionHeading";
import { Check, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Demo Setup",
    price: "₹500",
    description: "Perfect for testing the waters",
    features: [
      "Basic chatbot flow",
      "Standard responses",
      "1-day support",
      "Limited enquiries",
    ],
    cta: "Try Now",
    popular: false,
  },
  {
    name: "Basic Plan",
    price: "₹2,500",
    description: "Essential automation for small business",
    features: [
      "Custom WhatsApp Bot",
      "Basic Workflows",
      "Email Notifications",
      "Standard Analytics",
      "24/7 Automated Replies",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Standard Plan",
    price: "₹5,000",
    description: "Most popular for growing teams",
    features: [
      "Advanced AI Chatbot",
      "Complex Workflows",
      "WhatsApp API Integration",
      "CRM Connectivity",
      "Priority Support",
      "Detailed Performance Reports",
    ],
    cta: "Go Standard",
    popular: true,
  },
  {
    name: "Premium / Custom Plan",
    price: "Custom",
    description: "Depends on requirements",
    features: [
      "Full Business Automation",
      "Custom AI Model Training",
      "Multi-platform Integration",
      "Dedicated Account Manager",
      "SLA Guarantee",
      "On-site Training",
    ],
    cta: "Contact Us",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Simple, Transparent Pricing" 
          subtitle="Choose the plan that fits your business needs. All plans include our core AI engine."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col p-8 rounded-2xl ${
                plan.popular 
                ? "bg-accent/10 border-2 border-accent shadow-[0_0_30px_rgba(47,107,255,0.2)]" 
                : "glass border border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2 font-display">{plan.name}</h3>
                <p className="text-gray-400 text-sm">{plan.description}</p>
              </div>

              <div className="mb-8">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-500 text-sm ml-1">/ one-time</span>}
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start space-x-3 text-sm text-gray-300">
                    <Check className="w-5 h-5 text-accent shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/setup"
                className={`w-full py-3 rounded-xl font-bold text-center transition-all ${
                  plan.popular 
                  ? "neon-button" 
                  : "bg-white/5 hover:bg-white/10 border border-white/10"
                }`}
              >
                {plan.cta}
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 p-6 glass border border-accent/20 rounded-2xl text-center">
          <p className="text-gray-400 text-sm">
            <span className="text-accent font-bold">Note:</span> We follow a <span className="text-white font-semibold">No Refund Policy</span>. Please ensure you review your requirements before making a payment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
