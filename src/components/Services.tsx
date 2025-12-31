"use client";

import SectionHeading from "./SectionHeading";
import GlassCard from "./GlassCard";
import { 
  MessageCircle, 
  Bot, 
  Workflow, 
  School, 
  Headset 
} from "lucide-react";

const services = [
  {
    title: "WhatsApp Automation",
    description: "Automate your customer engagement on the world's most popular messaging app.",
    icon: MessageCircle,
  },
  {
    title: "AI Chatbot Setup",
    description: "Custom intelligent chatbots that learn from your business and serve your customers.",
    icon: Bot,
  },
  {
    title: "Business Process Automation",
    description: "Streamline repetitive tasks and focus on what really matters for your growth.",
    icon: Workflow,
  },
  {
    title: "College & Institution Automation",
    description: "Modernize educational institutions with smart enquiry and administrative bots.",
    icon: School,
  },
  {
    title: "Customer Support Automation",
    description: "Provide 24/7 instant support to your customers without increasing headcount.",
    icon: Headset,
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-primary/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="Our Services" 
          subtitle="Comprehensive AI solutions tailored to elevate your business efficiency."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <GlassCard key={index} delay={index * 0.1}>
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-4 font-display">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
