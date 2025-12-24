import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "iTrace Technologies",
    role: "Software Engineer",
    location: "Redwood City, CA",
    period: "Sep 2023 - Present",
    type: "Full-time",
    highlights: [
      "Developed and refactored C++ systems-level libraries, improving maintainability and runtime performance",
      "Reverse-engineered legacy code, cutting size by 80% and boosting Linux-native execution speed",
      "Resolved memory leaks and optimized image processing algorithms",
      "Built C# APIs and UIs in .NET; integrated Linux backend services via PHP",
      "Created automated deployment pipelines using Makefiles, shell scripts, and Docker"
    ]
  },
  {
    company: "Integer Systems",
    role: "Systems & Infrastructure Consultant",
    location: "Remote/Redwood City, CA",
    period: "Sep 2023 - Present",
    type: "Consulting",
    highlights: [
      "Provided consulting in systems-level engineering and backend infrastructure (C++, Go, PHP)",
      "Designed long-term architecture and deployment processes for multiple clients",
      "Created internal tooling to improve CI/CD workflows, reducing build and deployment times",
      "Supported business development during Integer Systems' expansion phase"
    ]
  },
  {
    company: "Blavatnik ICRC",
    role: "Project Manager",
    location: "Tel Aviv, Israel",
    period: "Oct 2025 - Present",
    type: "Current",
    highlights: [
      "Managed technology operations for Cyber Week, DefenseTech Week, and AI Week",
      "Coordinated with vendor teams, government partners, and international sponsors",
      "Troubleshot WordPress infrastructure for 5,000+ attendee events"
    ]
  },
  {
    company: "iTrace Technologies",
    role: "Software Engineering Intern",
    location: "Redwood City, CA",
    period: "Dec 2022 - Sep 2023",
    type: "Internship",
    highlights: [
      "Enhanced OpenCV-based neural network for visual copy detection",
      "Developed PHP class for AWS-hosted relational data access",
      "Built cross-platform license manager with POSIX-compliant C++ backend"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-heading">Career</span>
          <h2 className="text-3xl md:text-4xl font-bold">Work Experience</h2>
        </div>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent md:-translate-x-px" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-3 h-3 rounded-full bg-primary border-4 border-background -translate-x-1 md:-translate-x-1.5 mt-6 glow" />
                
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                  <div className="group p-6 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 card-shadow hover:glow">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                          {exp.role}
                        </h3>
                        <p className="text-primary font-medium">{exp.company}</p>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono">
                        {exp.type}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="text-sm text-muted-foreground flex gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Spacer for alternating layout */}
                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
