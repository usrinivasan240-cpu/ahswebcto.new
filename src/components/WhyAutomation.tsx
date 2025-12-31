"use client";

import SectionHeading from "./SectionHeading";
import { Clock, Zap, DollarSign, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  {
    title: "24/7 Instant Replies",
    description: "Never keep a customer waiting. AI responds instantly at any time of day or night.",
    icon: Clock,
  },
  {
    title: "Reduce Manual Workload",
    description: "Automate repetitive tasks so your team can focus on high-value strategy.",
    icon: Zap,
  },
  {
    title: "Save Time & Cost",
    description: "Drastically reduce operational costs and response times with efficient workflows.",
    icon: DollarSign,
  },
  {
    title: "Scalable & Reliable",
    description: "As your business grows, your automation scales with you without missing a beat.",
    icon: TrendingUp,
  },
];

const WhyAutomation = () => {
  return (
    <section className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Why Automation?" 
          subtitle="Stay ahead of the competition with smart, scalable AI solutions."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start space-x-6"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0 border border-accent/20">
                  <benefit.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 font-display">{benefit.title}</h3>
                  <p className="text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-accent/10 blur-[100px] -z-10 rounded-full" />
            <div className="glass rounded-3xl p-1 border border-white/10 overflow-hidden aspect-square flex items-center justify-center">
                <div className="text-center p-8">
                    <div className="text-6xl font-bold text-accent mb-4 glow-text">99%</div>
                    <p className="text-xl font-semibold mb-2">Efficiency Increase</p>
                    <p className="text-gray-400">Average improvement seen by our clients after implementing AI workflows.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAutomation;
