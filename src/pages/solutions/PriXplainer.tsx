import { Link } from "react-router-dom";
import { Shield, CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "AI-Generated Summaries",
    description: "Get clear, concise summaries of privacy policies without legal jargon.",
  },
  {
    title: "Risk Indicators",
    description: "Visual risk and severity indicators highlight concerning practices.",
  },
  {
    title: "Ontology-Based Classification",
    description: "Advanced clause classification powered by privacy-focused ontologies.",
  },
  {
    title: "Human-Readable Insights",
    description: "User-centric explanations anyone can understand.",
  },
];

export default function PriXplainer() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-primary to-forest-light text-primary-foreground">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary-foreground/20 mb-6">
              <Shield className="h-8 w-8" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">PriXplainer</h1>
            <p className="text-xl text-primary-foreground/90 font-medium mb-4">
              Understand before you consent.
            </p>
            <p className="text-lg text-primary-foreground/70 leading-relaxed">
              PriXplainer decodes privacy policies and terms of service using AI-driven analysis, 
              risk indicators, and human-readable summaries—making invisible data practices visible.
            </p>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-16">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-start gap-4 p-6 bg-destructive/5 border border-destructive/20 rounded-xl">
              <AlertTriangle className="h-6 w-6 text-destructive flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">The Problem</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Over 90% of users accept terms without reading them. The average privacy policy 
                  takes 18 minutes to read, and a single browsing session can share your data with 
                  70+ third parties. You deserve to know what you're agreeing to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="section-container">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Key Capabilities
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="flex gap-4 p-6 bg-background rounded-xl border border-border"
              >
                <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="section-container text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Ready to understand your privacy?
          </h2>
          <p className="text-muted-foreground mb-6">
            Contact us to learn more about PriXplainer.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/solutions">View All Solutions</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
