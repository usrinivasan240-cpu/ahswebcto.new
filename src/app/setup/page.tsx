"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { db, isFirebaseConfigured } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { CheckCircle2, Loader2, MessageCircle, AlertCircle } from "lucide-react";

export default function SetupPage() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!isFirebaseConfigured) {
      setError("Form submission is currently unavailable. Please use WhatsApp for faster response.");
      setLoading(false);
      return;
    }

    const formData = new FormData(e.currentTarget);
    const data = {
      businessName: formData.get("businessName"),
      ownerName: formData.get("ownerName"),
      contactNumber: formData.get("contactNumber"),
      email: formData.get("email"),
      businessType: formData.get("businessType"),
      servicesOffered: formData.get("servicesOffered"),
      workingHours: formData.get("workingHours"),
      preferredLanguage: formData.get("preferredLanguage"),
      automationRequirements: formData.get("requirements"),
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db, "chatbot_requests"), data);
      setSubmitted(true);
    } catch (err) {
      console.error("Error adding document: ", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="py-32 max-w-7xl mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle2 className="w-20 h-20 text-accent" />
        </div>
        <h2 className="text-4xl font-bold font-display mb-4">Request Submitted!</h2>
        <p className="text-gray-400 text-lg mb-8">
          Thank you for choosing AutoHub Solutions. Our team will review your requirements and get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="neon-button px-8 py-3 rounded-full font-bold"
        >
          Back to Form
        </button>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Chatbot Setup Form"
          subtitle="Tell us about your business and automation needs to get started."
        />

        {/* Quick WhatsApp Contact */}
        <div className="mt-8 p-6 glass border border-white/10 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-green-500" />
            </div>
            <div>
              <h3 className="font-semibold">Need faster response?</h3>
              <p className="text-sm text-gray-400">Chat directly with us on WhatsApp</p>
            </div>
          </div>
          <a
            href="https://wa.me/919940918442"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-green-500 hover:bg-green-600 text-white rounded-xl font-semibold flex items-center space-x-2 transition-all"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat Now</span>
          </a>
        </div>

        <GlassCard className="mt-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Business Name</label>
                <input
                  required
                  name="businessName"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  placeholder="e.g. AutoHub Solutions"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Owner Name</label>
                <input
                  required
                  name="ownerName"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  placeholder="e.g. John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Contact Number</label>
                <input
                  required
                  name="contactNumber"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Email Address</label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Business Type</label>
                <input
                  required
                  name="businessType"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  placeholder="e.g. E-commerce, Retail, Education"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400">Preferred Language</label>
                <input
                  required
                  name="preferredLanguage"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  placeholder="e.g. English, Tamil, Hindi"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Services Offered</label>
              <input
                  required
                  name="servicesOffered"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  placeholder="Describe your main products or services"
                />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Working Hours</label>
              <input
                  required
                  name="workingHours"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                  placeholder="e.g. 9 AM - 6 PM, 24/7"
                />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400">Automation Requirements</label>
              <textarea
                required
                name="requirements"
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                placeholder="How can we help you automate your business?"
              />
            </div>

            {error && (
              <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start space-x-3">
                <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-500 text-sm">{error}</p>
                  <p className="text-gray-400 text-xs mt-2">
                    Alternatively, contact us directly via WhatsApp at +91 9940918442
                  </p>
                </div>
              </div>
            )}

            {/* No Refund Policy Notice */}
            <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex items-start space-x-3">
              <AlertCircle className="w-5 h-5 text-yellow-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-yellow-500 text-sm font-semibold">Important Notice</p>
                <p className="text-gray-400 text-xs mt-1">
                  We follow a strict No Refund Policy. Please review your requirements carefully before submitting.
                </p>
              </div>
            </div>

            <button
              disabled={loading}
              type="submit"
              className="w-full py-4 rounded-xl neon-button font-bold text-lg flex items-center justify-center space-x-2 disabled:opacity-50"
            >
              {loading ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                "Submit Requirements"
              )}
            </button>
          </form>
        </GlassCard>
      </div>
    </div>
  );
}
