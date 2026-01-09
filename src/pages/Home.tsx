import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronDown, Shield, Rocket, Leaf, CheckCircle } from "lucide-react";
import logo from "@/assets/ConsenTerra_Logo.png";

import RotatingHeadlinePhrase from "@/components/RotatingHeadlinePhrase";

const solutions = [
  {
    id: "prixplainer",
    name: "PriXplainer",
    tagline: "Understand before you consent.",
    description: "PriXplainer decodes privacy policies and terms of service using AI-driven analysis, risk indicators, and human-readable summaries—making invisible data practices visible.",
    capabilities: [
      "AI-generated policy summaries",
      "Risk and severity indicators",
      "Ontology-based clause classification",
      "User-centric explanations (no legal jargon)"
    ],
    icon: Shield,
    href: "/solutions/prixplainer",
    color: "text-primary"
  },
  {
    id: "foundrfate",
    name: "FoundrFATE",
    tagline: "Founder success shouldn't feel like luck.",
    description: "FoundrFATE helps early-stage founders understand the forces shaping their journey—before those forces decide for them.",
    capabilities: [
      "Funding readiness assessment",
      "Investor education & outreach guidance",
      "Plain-language fundraising explanations",
      "Founder-first, bias-aware design"
    ],
    icon: Rocket,
    href: "/solutions/foundrfate",
    color: "text-ocean"
  },
  {
    id: "trustearthy",
    name: "TrustEarthy",
    tagline: "Small swaps. Real impact.",
    description: "TrustEarthy helps users make sustainable consumption choices through trusted comparisons, impact snapshots, and habit-friendly recommendations.",
    capabilities: [
      "Sustainable product comparisons",
      "Impact snapshots",
      "Practical, low-overwhelm education",
      "Habit-based nudges"
    ],
    icon: Leaf,
    href: "/solutions/trustearthy",
    color: "text-forest"
  }
];

export default function Home() {
  const [showSolutions, setShowSolutions] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[90vh] relative overflow-hidden">
        <div className="section-container h-full py-8 lg:py-12">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh] animate-fade-in-up">
            {/* Left Side - Large Logo */}
            <div className="flex justify-center lg:justify-center items-center">
              <img
                src={logo}
                alt="ConsenTerra"
                className="w-80 h-80 sm:w-[400px] sm:h-[400px] lg:w-[550px] lg:h-[550px] xl:w-[650px] xl:h-[650px] object-contain"
              />
            </div>

            {/* Right Side - Content */}
            <div className="text-center lg:text-left flex flex-col">
              {/* Eyebrow Text */}
              <p className="text-xs tracking-[0.2em] text-muted-foreground mb-6 uppercase">
                CLARITY FOR EVERYDAY DECISIONS.
              </p>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-[1.1] mb-6">
                ConsenTerra builds simple AI tools<br />
                for clarity in <RotatingHeadlinePhrase />
              </h1>

              {/* Subheading */}
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-3 leading-relaxed">
                Privacy, early-stage entrepreneurship, and sustainable living,<br className="hidden sm:block" />
                explained without the noise.
              </p>

              {/* Micro-copy */}
              <p className="text-sm text-muted-foreground/70 mb-8">
                Less guesswork. More clear choices.
              </p>

              {/* Solutions Button */}
              <div className="inline-block">
                <Button 
                  size="lg" 
                  className="rounded-full px-8 text-base"
                  onClick={() => setShowSolutions(!showSolutions)}
                >
                  Explore our tools
                  <ChevronDown className={`ml-2 h-4 w-4 transition-transform duration-200 ${showSolutions ? 'rotate-180' : ''}`} />
                </Button>

              </div>

              {/* Solutions Dropdown - Positioned below button */}
              {showSolutions && (
                <div className="mt-6 w-full max-w-4xl mx-auto lg:mx-0 bg-white/95 backdrop-blur-sm border border-border rounded-2xl shadow-2xl p-6 animate-fade-in relative z-50">
                  <div className="grid md:grid-cols-3 gap-6">
                    {solutions.map((solution) => {
                      const Icon = solution.icon;
                      return (
                        <Link
                          key={solution.id}
                          to={solution.href}
                          className="group p-5 bg-background/80 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-md text-left"
                        >
                          <div className={`inline-flex p-2 rounded-lg bg-primary/10 mb-3 ${solution.color}`}>
                            <Icon className="h-5 w-5" />
                          </div>
                          <h3 className="text-lg font-semibold text-foreground mb-1">{solution.name}</h3>
                          <p className="text-sm text-accent italic mb-3">{solution.tagline}</p>
                          <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{solution.description}</p>
                          <ul className="space-y-1.5">
                            {solution.capabilities.map((cap) => (
                              <li key={cap} className="flex items-start gap-2 text-xs text-muted-foreground">
                                <CheckCircle className="h-3.5 w-3.5 text-primary flex-shrink-0 mt-0.5" />
                                {cap}
                              </li>
                            ))}
                          </ul>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Click outside to close */}
      {showSolutions && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowSolutions(false)}
        />
      )}

      {/* Welcome Section */}
      <section className="py-20 lg:py-28">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-10">
              Welcome to ConsenTerra
            </h2>

            <div className="prose-editorial text-base sm:text-lg">
              <p>
                ConsenTerra builds thoughtful AI tools that help people understand complex 
                information and make better choices in their daily lives. We focus on areas 
                where decisions often feel confusing, rushed, or unclear, such as digital 
                privacy, early-stage entrepreneurship, and sustainable living.
              </p>

              <p>
                Our goal is not to overwhelm users with technical detail or marketing language. 
                Instead, we aim to explain things clearly, highlight what matters most, and 
                support informed decision-making. Each product we build is designed to be 
                practical, transparent, and easy to use, so people can move forward with 
                confidence rather than uncertainty.
              </p>

              <p className="mb-0">
                At ConsenTerra, we believe clarity builds trust. By turning complexity into 
                understanding, we help individuals and organizations make choices that align 
                with their values, responsibilities, and long-term goals.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
