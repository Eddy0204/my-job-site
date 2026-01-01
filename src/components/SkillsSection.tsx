import { Code, Server, Cloud, Cpu, Database, Wrench } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

// Mapping of skills to their sources (job/education)
const skillSources: Record<string, string[]> = {
  // Languages
  "C": ["Elbit Systems - Image Processing Engineer", "UC Davis - Computer Science"],
  "C++": ["Elbit Systems - Image Processing Engineer", "UC Davis - Computer Science"],
  "Python": ["Dell Technologies - Linux Systems Engineer", "Elbit Systems", "UC Davis"],
  "Java": ["UC Davis - Computer Science"],
  "JavaScript": ["UC Davis - Web Development"],
  "Go": ["Dell Technologies - Linux Systems Engineer"],
  "Matlab": ["Elbit Systems - Image Processing"],
  
  // Systems & Tools
  "Linux": ["Dell Technologies - Linux Systems Engineer", "Elbit Systems"],
  "Git": ["Dell Technologies", "Elbit Systems", "UC Davis"],
  "Bash": ["Dell Technologies - Linux Systems Engineer"],
  "make/ninja": ["Elbit Systems - Image Processing Engineer"],
  "Valgrind": ["Elbit Systems - Memory debugging"],
  "GDB": ["Elbit Systems - Systems debugging"],
  "GitLab CI/CD": ["Elbit Systems - DevOps pipelines"],
  "Docker": ["Dell Technologies - Container environments"],
  
  // Parallel & HPC
  "Parallel Programming": ["UC Davis - Computer Science"],
  "OpenMP": ["UC Davis - High Performance Computing"],
  "CUDA": ["UC Davis - GPU Programming"],
  
  // Image & Compute
  "OpenCV": ["Elbit Systems - Image Processing Engineer"],
  "Image Processing": ["Elbit Systems - Real-time video systems"],
  "Neural Networks": ["Elbit Systems - AI/ML integration"],
  
  // Backend & Frameworks
  "PHP": ["Previous web development experience"],
  ".NET": ["Previous software development"],
  "C#": ["Previous software development"],
  "MySQL": ["UC Davis - Database coursework"],
  "PostgreSQL": ["Dell Technologies - Data systems"],
  
  // Cloud & Security
  "AWS EC2": ["Dell Technologies - Cloud infrastructure"],
  "Linux Debugging": ["Dell Technologies - System diagnostics"],
  "System Provisioning": ["Dell Technologies - Infrastructure setup"],
  "Networking": ["Dell Technologies - Network configuration"],
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
