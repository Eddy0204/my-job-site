import { Mail, MapPin, Phone, Send, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(175_70%_45%/0.06),transparent_60%)]" />
      
      <div className="relative container max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-heading">Let's Connect</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'm currently open to new opportunities and would love to hear from you. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a
            href="mailto:eddy0204@gmail.com"
            className="group p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 text-center card-shadow hover:glow"
          >
            <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">Email</h3>
            <p className="text-sm text-muted-foreground">eddy0204@gmail.com</p>
          </a>
          
          <a
            href="tel:+972543530992"
            className="group p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/50 transition-all duration-300 text-center card-shadow hover:glow"
          >
            <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">Phone</h3>
            <p className="text-sm text-muted-foreground">+972 54-3530992</p>
          </a>
          
          <div className="group p-6 rounded-xl bg-card/50 border border-border/50 transition-all duration-300 text-center card-shadow">
            <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary mb-4">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-semibold mb-1">Location</h3>
            <p className="text-sm text-muted-foreground">Tel Aviv, Israel</p>
          </div>
        </div>
        
        <div className="text-center">
          <Button size="lg" className="gap-2" asChild>
            <a href="mailto:eddy0204@gmail.com">
              <Send className="w-4 h-4" />
              Send me an email
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
