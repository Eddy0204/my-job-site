import { Mail, MapPin, Phone, Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,hsl(175_70%_45%/0.08),transparent_50%)]" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1.5s' }} />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(hsl(220_15%_15%/0.3)_1px,transparent_1px),linear-gradient(90deg,hsl(220_15%_15%/0.3)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      <div className="relative z-10 container max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fade-up" style={{ animationDelay: '0.1s' }}>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-mono mb-8">
            Available for opportunities
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up" style={{ animationDelay: '0.2s' }}>
          Edward <span className="text-gradient">Yeretnov</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-up" style={{ animationDelay: '0.3s' }}>
          Software Engineer & Systems Developer
        </p>
        
        <p className="text-base text-muted-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-up" style={{ animationDelay: '0.4s' }}>
          U.S. citizen based in Tel Aviv with C++ systems programming expertise, 
          UC Davis CS graduate pursuing cyber policy studies at Tel Aviv University. 
          Building robust, scalable systems with technical depth and cross-cultural fluency.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground mb-10 animate-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" />
            <span>Tel Aviv, Israel</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" />
            <a href="mailto:eddy0204@gmail.com" className="hover:text-primary transition-colors">
              eddy0204@gmail.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-primary" />
            <span>+972 54-3530992</span>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <Button size="lg" className="gap-2" asChild>
            <a href="#contact">
              <Mail className="w-4 h-4" />
              Get in Touch
            </a>
          </Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <a href="#experience">
              View Experience
            </a>
          </Button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-fade-in" style={{ animationDelay: '1s' }}>
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
