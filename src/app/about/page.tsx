import SectionHeading from "@/components/SectionHeading";
import GlassCard from "@/components/GlassCard";
import { User, MapPin, Clock, Target, Calendar } from "lucide-react";

export default function About() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About AutoHub Solutions"
          subtitle="Learn more about our mission and the team behind the automation."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
          <GlassCard>
            <div className="flex items-center space-x-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-xl">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold font-display">Our Mission</h3>
            </div>
            <p className="text-gray-400 leading-relaxed text-lg mb-6">
              At AutoHub Solutions, we are dedicated to automating customer communication using AI, WhatsApp bots, and smart workflows. We help businesses save time, reduce costs, and provide superior service around the clock.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Our vision is to become the leading automation partner for businesses across India, starting from our roots in Trichy, Tamil Nadu. We believe in leveraging cutting-edge technology to solve real-world business challenges.
            </p>
          </GlassCard>

          <div className="space-y-6">
            <GlassCard className="flex items-center space-x-6">
              <div className="p-3 bg-accent/10 rounded-xl">
                <User className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Founder</p>
                <p className="text-xl font-bold">Srinivasan</p>
              </div>
            </GlassCard>

            <GlassCard className="flex items-center space-x-6">
              <div className="p-3 bg-accent/10 rounded-xl">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Location</p>
                <p className="text-xl font-bold">Trichy, Tamil Nadu, India</p>
              </div>
            </GlassCard>

            <GlassCard className="flex items-center space-x-6">
              <div className="p-3 bg-accent/10 rounded-xl">
                <Calendar className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Established</p>
                <p className="text-xl font-bold">2026</p>
              </div>
            </GlassCard>

            <GlassCard className="flex items-center space-x-6">
              <div className="p-3 bg-accent/10 rounded-xl">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-sm text-gray-500 uppercase tracking-widest">Working Hours</p>
                <p className="text-xl font-bold">Everyday – 6:00 PM to 12:00 AM</p>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </div>
  );
}
