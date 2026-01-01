import { Code, Server, Cloud, Cpu, Database, Wrench } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Mapping of skills to their sources (job/education) - from resume
const skillSources: Record<string, string[]> = {
  // Languages
  "C": ["iTrace Technologies - Systems-level libraries", "UC Davis - Computer Science"],
  "C++": ["iTrace Technologies - Systems-level libraries, refactoring legacy code", "Integer Systems - Systems-level engineering"],
  "Python": ["UC Davis - Computer Science coursework"],
  "Java": ["UC Davis - Object Oriented Programming"],
  "JavaScript": ["UC Davis - Computer Science"],
  "Go": ["UC Davis - Parallel Programming", "Integer Systems - Backend infrastructure"],
  "Matlab": ["UC Davis - Computer Science"],
  
  // Systems & Tools
  "Linux": ["iTrace Technologies - Linux-native execution, backend services", "Integer Systems - Infrastructure consulting"],
  "Git": ["iTrace Technologies", "Integer Systems", "UC Davis"],
  "Bash": ["iTrace Technologies - Shell scripts for deployment"],
  "make/ninja": ["iTrace Technologies - Automated deployment pipelines"],
  "Valgrind": ["iTrace Technologies - Memory leak detection"],
  "GDB": ["iTrace Technologies - Debugging"],
  "GitLab CI/CD": ["Integer Systems - CI/CD workflows across client stacks"],
  "Docker": ["iTrace Technologies - Automated deployment pipelines"],
  
  // Parallel & HPC
  "Parallel Programming": ["UC Davis - Parallel Programming course"],
  "OpenMP": ["UC Davis - Parallel Programming course"],
  "CUDA": ["UC Davis - Parallel Programming course"],
  
  // Image & Compute
  "OpenCV": ["iTrace Technologies - Neural network for visual copy detection"],
  "Image Processing": ["iTrace Technologies - Image processing algorithm optimization"],
  "Neural Networks": ["iTrace Technologies - OpenCV-based neural network", "UC Davis - Computer Vision & AI"],
  
  // Backend & Frameworks
  "PHP": ["iTrace Technologies - Linux backend services, AWS data access", "Integer Systems - Backend infrastructure"],
  ".NET": ["iTrace Technologies - C# APIs and UIs"],
  "C#": ["iTrace Technologies - C# APIs, Windows desktop UI, license manager"],
  "MySQL": ["iTrace Technologies - Database integration"],
  "PostgreSQL": ["iTrace Technologies - Relational data systems"],
  
  // Cloud & Security
  "AWS EC2": ["iTrace Technologies - AWS-hosted relational data"],
  "Linux Debugging": ["iTrace Technologies - System debugging and optimization"],
  "System Provisioning": ["Integer Systems - Architecture and deployment processes"],
  "Networking": ["Tel Aviv University - Cyber & Networking Technologies course"],
};

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: ["C", "C++", "Python", "Java", "JavaScript", "Go", "Matlab"]
  },
  {
    title: "Systems & Tools",
    icon: Wrench,
    skills: ["Linux", "Git", "Bash", "make/ninja", "Valgrind", "GDB", "GitLab CI/CD", "Docker"]
  },
  {
    title: "Parallel & HPC",
    icon: Cpu,
    skills: ["Parallel Programming", "OpenMP", "CUDA"]
  },
  {
    title: "Image & Compute",
    icon: Server,
    skills: ["OpenCV", "Image Processing", "Neural Networks"]
  },
  {
    title: "Backend & Frameworks",
    icon: Database,
    skills: ["PHP", ".NET", "C#", "MySQL", "PostgreSQL"]
  },
  {
    title: "Cloud & Security",
    icon: Cloud,
    skills: ["AWS EC2", "Linux Debugging", "System Provisioning", "Networking"]
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 relative bg-card/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,hsl(175_70%_45%/0.05),transparent_50%)]" />
      
      <div className="relative container max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-heading">Expertise</span>
          <h2 className="text-3xl md:text-4xl font-bold">Technical Skills</h2>
        </div>
        
        <TooltipProvider delayDuration={200}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl bg-background/50 border border-border/50 hover:border-primary/30 transition-all duration-300 card-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <category.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Tooltip key={i}>
                      <TooltipTrigger asChild>
                        <span
                          className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-pointer"
                        >
                          {skill}
                        </span>
                      </TooltipTrigger>
                      <TooltipContent className="max-w-xs">
                        <div className="space-y-1">
                          <p className="font-semibold text-primary">{skill}</p>
                          <ul className="text-xs space-y-0.5">
                            {skillSources[skill]?.map((source, idx) => (
                              <li key={idx} className="text-muted-foreground">• {source}</li>
                            ))}
                          </ul>
                        </div>
                      </TooltipContent>
                    </Tooltip>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </TooltipProvider>
      </div>
    </section>
  );
};

export default SkillsSection;
