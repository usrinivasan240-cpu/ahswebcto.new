"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MessageSquare, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-20 pb-32 md:pt-32 md:pb-48">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[30%] h-[30%] bg-glow/10 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span className="text-xs font-medium tracking-wider uppercase">Next-Gen AI Automation</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-6"
          >
            Never Miss a <br />
            <span className="text-accent glow-text">Message Again</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            AI-powered WhatsApp & chatbot automation for modern businesses. 
            Streamline your customer communication and scale your operations effortlessly.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <Link
              href="/pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-full neon-button font-bold text-lg flex items-center justify-center space-x-2 group"
            >
              <span>Get Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/setup"
              className="w-full sm:w-auto px-8 py-4 rounded-full glass font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center space-x-2"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Setup Chatbot</span>
            </Link>
          </motion.div>
        </div>

        {/* Floating elements / Visuals */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-20 relative"
        >
          <div className="absolute inset-0 bg-accent/20 blur-3xl -z-10 rounded-full" />
          <div className="glass rounded-3xl p-4 md:p-8 border border-white/20 shadow-2xl overflow-hidden">
            <div className="flex items-center space-x-2 mb-6 border-b border-white/10 pb-4">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <div className="ml-4 h-6 w-48 bg-white/5 rounded-md" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="col-span-1 md:col-span-2 space-y-4">
                <div className="h-32 bg-white/5 rounded-2xl animate-pulse" />
                <div className="h-64 bg-white/5 rounded-2xl animate-pulse" />
              </div>
              <div className="space-y-4">
                <div className="h-full bg-white/5 rounded-2xl animate-pulse" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
