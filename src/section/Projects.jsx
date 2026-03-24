import { ArrowUpRight, GitBranchIcon } from "lucide-react";
import   Button  from '@/components/Button';

const projects = [
  {
    title: "Personal Portfolio",
    description: "My personal portfolio built with React, TailwindCSS and Vite. Includes animations, EmailJS contact form and responsive design.",
    image: "/projects/Portfolio.png",
    tags: ["React", "TailwindCSS", "Vite", "EmailJS"],
    link: "#",
  },
  {
    title: "WordPress Project",
    description: "A WordPress website designed and developed from scratch, focusing on user experience and accessibility.",
    image: "/projects/Wordpress.png",
    tags: ["WordPress", "CSS", "HTML"],
    link: "#",
  },
];
 const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white"> make an impact.</span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, built with love and attention to detail.
          </p>
        </div>

        {/* Projects List - 1 colonne */}
        <div className="flex flex-col gap-8 max-w-4xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in flex flex-col md:flex-row"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden md:w-1/2 aspect-video md:aspect-auto">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="p-8 space-y-4 md:w-1/2 flex flex-col justify-center">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <p className="text-muted-foreground text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 pt-2">
                  <a href={project.link} className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all">
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  {/* GitHub désactivé */}
                  <span className="p-3 rounded-full glass opacity-30 cursor-not-allowed">
                    <GitBranchIcon className="w-5 h-5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">
          <Button>
            View All Projects
            <ArrowUpRight className="w-5 h-5" />
         </Button>
        </div>
      </div>
    </section>
  );
};
export default Projects