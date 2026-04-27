import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data/dummyData';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

const Projects = () => {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center">
            <span className="w-8 h-[2px] bg-accent mr-4"></span>
            Featured Projects
          </h2>

          <div className="space-y-16">
            {projects.map((project, idx) => (
              <motion.div 
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 items-center`}
              >
                {/* Project Image */}
                <div className="w-full md:w-1/2 aspect-video bg-card border border-border/10 rounded-2xl overflow-hidden relative group">
                  <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  {project.imageUrl ? (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-muted font-medium">{project.title}</span>
                    </div>
                  )}
                </div>

                {/* Project Info */}
                <div className="w-full md:w-1/2 space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-accent font-medium">{project.tagline}</p>
                  </div>
                  
                  <div className="bg-background border border-border/5 p-6 rounded-xl relative z-10 text-foreground/80 space-y-4">
                    <p><strong className="text-white">Problem:</strong> {project.problem}</p>
                    <p><strong className="text-white">Approach:</strong> {project.approach}</p>
                    <p><strong className="text-white">Impact:</strong> {project.impact}</p>
                  </div>

                  <div className="flex flex-wrap gap-2 text-sm font-medium text-muted">
                    {project.techStack.map(tech => (
                      <span key={tech}>{tech}</span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a href={project.githubUrl} className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
                      <FaGithub size={18} /> Code
                    </a>
                    <a href={project.liveUrl} className="flex items-center gap-2 text-sm font-medium hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={18} /> Live Demo
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
