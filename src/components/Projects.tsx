import { motion } from "framer-motion";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projectItems } from "@/components/projects/project-data";

const Projects = () => {
  return (
    <section id="projects" className="section-container">
      <div className="gradient-blob left-[-10rem] top-20 h-[500px] w-[500px] bg-primary/20 animate-pulse-glow" />
      <div className="gradient-blob bottom-32 right-[-3rem] h-[420px] w-[420px] bg-cyber-teal/15 animate-pulse-glow animation-delay-400" />

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-14 max-w-3xl text-center md:mb-16"
        >
          <span className="font-mono text-sm uppercase tracking-widest text-primary">
            Featured Work
          </span>
          <h2 className="font-heading font-bold mt-4" style={{ fontSize: "clamp(2.25rem, 5vw, 3.75rem)" }}>
            Projects
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-balance text-base leading-7 text-muted-foreground md:text-lg">
            A collection of production-oriented software projects showcasing expertise in 
            full-stack development, backend engineering, and applied artificial intelligence. .
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2 xl:gap-7">
          {projectItems.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
