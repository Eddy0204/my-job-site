import { GraduationCap, Calendar, BookOpen } from "lucide-react";

const education = [
  {
    institution: "Tel Aviv University",
    degree: "M.A. in Cyber Politics & Government",
    status: "In Progress",
    period: "October 2025 - September 2026",
    coursework: [
      "Cyber-Ecosystems (Taught by Eviatar Matania, former INCD Director)",
      "Cyber & Networking Technologies",
      "The Age of Technology (Taught by Itzik Ben-Israel, former Director, Israel Space Agency)"
    ]
  },
  {
    institution: "University of California, Davis",
    degree: "B.S. in Computer Science",
    degreeSecondary: "B.A. in Political Science — International Security & Comparative Politics",
    status: "Graduated",
    period: "Graduated June 2025",
    coursework: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Computer Vision & AI",
      "Parallel Programming (OpenMP, CUDA, Go)",
      "Object Oriented Programming"
    ]
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="section-heading">Background</span>
          <h2 className="text-3xl md:text-4xl font-bold">Education</h2>
        </div>
        
        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="group p-8 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 card-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {edu.institution}
                    </h3>
                    <p className="text-foreground font-medium mt-1">{edu.degree}</p>
                    {edu.degreeSecondary && (
                      <p className="text-muted-foreground text-sm mt-1">{edu.degreeSecondary}</p>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-col items-start md:items-end gap-2">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono ${
                    edu.status === 'In Progress' 
                      ? 'bg-primary/10 text-primary' 
                      : 'bg-secondary text-secondary-foreground'
                  }`}>
                    {edu.status}
                  </span>
                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{edu.period}</span>
                  </div>
                </div>
              </div>
              
              <div className="pl-0 md:pl-16">
                <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-3">
                  <BookOpen className="w-4 h-4" />
                  <span>Relevant Coursework</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, i) => (
                    <span
                      key={i}
                      className="px-3 py-1.5 rounded-md bg-secondary/50 text-secondary-foreground text-sm"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
