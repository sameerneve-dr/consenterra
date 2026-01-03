import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-24 lg:py-32">
        <div className="section-container">
          <div className="max-w-3xl animate-fade-in-up">
            {/* Eyebrow Text */}
            <p className="text-xs tracking-[0.2em] text-muted-foreground mb-8 uppercase">
              CLARITY FOR EVERYDAY DECISIONS.
            </p>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8">
              ConsenTerra builds simple AI tools<br />
              for clarity in{" "}
              <span className="text-gold-highlight">everyday decisions.</span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed">
              Privacy, early-stage entrepreneurship, and sustainable living,<br />
              explained without the noise.
            </p>

            {/* Micro-copy */}
            <p className="text-sm text-muted-foreground/70 mb-10">
              Less guesswork. More clear choices.
            </p>

            {/* CTA Button */}
            <Button asChild size="lg" className="rounded-full px-8 text-base">
              <Link to="/solutions">
                Explore our tools
              </Link>
            </Button>
          </div>
        </div>
      </section>

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