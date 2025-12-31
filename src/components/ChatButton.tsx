"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const ChatButton = () => {
  const phoneNumber = "919940918442";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <motion.a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        {/* Glow effect */}
        <div className="absolute inset-0 bg-accent blur-xl opacity-50 group-hover:opacity-70 transition-opacity" />
        
        {/* Button */}
        <div className="relative bg-gradient-to-r from-[#2F6BFF] to-[#0B5ED7] p-4 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/20">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
        
        {/* Label */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-black px-4 py-2 rounded-full text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-lg">
          Chat with Us
        </div>
        
        {/* Pulse animation */}
        <motion.div
          className="absolute inset-0 bg-accent rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </motion.a>
  );
};

export default ChatButton;
