"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { db, isFirebaseConfigured } from "@/lib/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle2, MessageCircle, AlertCircle } from "lucide-react";

function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!isFirebaseConfigured) {
      setError("Contact form is currently unavailable. Please use WhatsApp for faster response.");
      setLoading(false);
      return;
    }

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      createdAt: serverTimestamp(),
    };

    try {
      await addDoc(collection(db!, "contacts"), data);
      setSubmitted(true);
    } catch (err) {
      console.error("Error adding document: ", err);
      setError("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Get In Touch"
          subtitle="Have questions? We're here to help you on your automation journey."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mt-16">
          <div className="lg:col-span-1 space-y-8">
            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Email</h3>
                <p className="text-gray-400">autohubsolution777@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Phone</h3>
                <p className="text-gray-400">+91 9940918442</p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-1">Location</h3>
                <p className="text-gray-400">Trichy, Tamil Nadu, India</p>
              </div>
            </div>

            <div className="pt-8 border-t border-white/10">
              <h3 className="text-lg font-bold mb-4">Business Hours</h3>
              <p className="text-gray-400">Everyday: 6:00 PM – 12:00 AM IST</p>
            </div>

            <a
              href="https://wa.me/919940918442"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-green-500 hover:bg-green-600 text-white px-6 py-4 rounded-xl font-bold transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

          <div className="lg:col-span-2">
            <GlassCard>
              {submitted ? (
                <div className="py-12 text-center">
                  <CheckCircle2 className="w-16 h-16 text-accent mx-auto mb-6" />
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-gray-400 mb-8">We've received your message and will get back to you soon.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-accent font-bold hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-400">Full Name</label>
                      <input
                        required
                        name="name"
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                        placeholder="John Doe"
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
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Subject</label>
                    <input
                      required
                      name="subject"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors"
                      placeholder="How can we help?"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400">Message</label>
                    <textarea
                      required
                      name="message"
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-accent transition-colors resize-none"
                      placeholder="Your message..."
                    />
                  </div>

                  {error && <p className="text-red-500 text-sm">{error}</p>}

                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full py-4 rounded-xl neon-button font-bold text-lg flex items-center justify-center space-x-2"
                  >
                    {loading ? (
                      <Loader2 className="w-6 h-6 animate-spin" />
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="w-5 h-5" />
                      </>
                    )}
                  </button>

                  <p className="text-gray-500 text-xs text-center">
                    Or contact us directly via WhatsApp for faster response
                  </p>
                </form>
              )}
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return <ContactForm />;
}
