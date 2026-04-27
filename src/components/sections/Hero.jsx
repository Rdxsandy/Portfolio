import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data/dummyData';
import { FileText, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const { name, role, valueStatement } = PORTFOLIO_DATA.hero;

  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-8 rounded-full overflow-hidden border-4 border-card shadow-lg relative group"
        >
          <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img src="/profile.jpg" alt={name} className="w-full h-full object-cover" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
            Hi, I'm <span className="text-accent">{name}</span>
          </h1>
          <h2 className="text-2xl md:text-3xl text-muted font-medium mb-6">
            {role}
          </h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 text-balance">
            {valueStatement}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a href="#projects" className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full font-medium hover:bg-foreground/90 transition-colors">
            View Projects <ArrowRight size={18} />
          </a>
          <a href="https://drive.google.com/file/d/1yYkJZk7eyTBycPeON3k9VEIHOf-e5jZw/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-transparent border border-border/20 px-6 py-3 rounded-full font-medium hover:bg-foreground/5 transition-colors">
            <FileText size={18} /> Resume
          </a>
          <div className="flex gap-4 ml-0 sm:ml-4">
            <a href={PORTFOLIO_DATA.contact.github} className="p-3 bg-card border border-border/10 rounded-full hover:border-accent/50 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
              <FaGithub size={20} />
            </a>
            <a href={PORTFOLIO_DATA.contact.linkedin} className="p-3 bg-card border border-border/10 rounded-full hover:border-accent/50 hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={20} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
