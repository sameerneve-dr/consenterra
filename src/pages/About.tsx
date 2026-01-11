import { motion } from "framer-motion";
import { Linkedin, Users, Target, Eye } from "lucide-react";
import SameerPhoto from "@/assets/Sameer_Neve.png";
import ShikhaPhoto from "@/assets/Shikha_Soneji.jpg";
import AuroraBackground from "@/components/AuroraBackground";
import AnimatedSection from "@/components/AnimatedSection";
import GlowCard from "@/components/GlowCard";

const team = [
  {
    name: "Shikha Soneji, Ph.D. (C)",
    role: "CEO & President",
    linkedin: "https://www.linkedin.com/in/shikha-soneji-22620b111/",
    bio: "I'm a Data Scientist and a Ph.D. candidate in Informatics (ABD) with a passion for human-centered AI, digital privacy, and ethical automation.",
    photo: ShikhaPhoto,
  },
  {
    name: "Sameer Neve, Ph.D.",
    role: "Secretary & Chief Sustainability Officer",
    linkedin: "https://www.linkedin.com/in/nevesameer/",
    bio: "Innovative Environmental Engineer & Sustainability Strategist with a Ph.D. and 7+ years of experience bridging engineering, climate resilience, and policy.",
    photo: SameerPhoto,
  },
  {
    name: "Neelam Mulchandani, Ph.D.",
    role: "Financial Advisor",
    linkedin: null,
    bio: "Professor of English at R.K.T. College (University of Mumbai), PG-recognized educator, and published scholar.",
    photo: null,
  },
];

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <AuroraBackground showParticles={false} />
        <div className="section-container text-center relative z-10">
          <motion.h1
            className="text-4xl sm:text-5xl font-bold text-gradient mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            About ConsenTerra
          </motion.h1>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            We believe everyone deserves to understand what they invest their time, money, data, and trust in.
          </motion.p>
        </div>
      </section>

      {/* Golden Circle */}
      <section className="py-20">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Start With <span className="text-gradient">Why</span></h2>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: "Why", desc: "In today's world, understanding is power. We believe everyone deserves to understand what they invest their time, money, data, and trust in.", primary: true },
              { title: "How", desc: "Our solutions translate dense information into insight, context, and confidence." },
              { title: "What", desc: "We create AI-powered solutions to solve everyday problems." },
            ].map((item, i) => (
              <GlowCard key={item.title} delay={i * 0.15} className={`p-6 ${item.primary ? "border-primary/50" : ""}`}>
                <h3 className={`text-xl font-bold mb-3 ${item.primary ? "text-primary" : "text-foreground"}`}>{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Target, title: "Our Mission", desc: "To empower individuals and organizations with AI-driven clarity, helping them make informed, ethical, and confident decisions." },
              { icon: Eye, title: "Our Vision", desc: "ConsenTerra aims to become a trusted AI solutions provider by transforming complexity into clarity across privacy, sustainability, and strategic decision-making." },
            ].map((item, i) => (
              <GlowCard key={item.title} delay={i * 0.15} className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{item.title}</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="section-container">
          <AnimatedSection className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Users className="h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold text-foreground">Our Team</h2>
            </div>
          </AnimatedSection>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {team.map((member, i) => (
              <GlowCard key={member.name} delay={i * 0.15} className="p-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-2xl font-bold text-primary">{member.name.split(" ").map(n => n[0]).slice(0, 2).join("")}</span>
                  )}
                </div>
                <div className="text-center">
                  <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                  {member.linkedin && (
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-4">
                      <Linkedin className="h-4 w-4" /> LinkedIn
                    </a>
                  )}
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}