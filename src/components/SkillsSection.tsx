import { Code, Server, Cloud, Cpu, Database, Wrench } from "lucide-react";

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
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-md bg-secondary text-secondary-foreground text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
