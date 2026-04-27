import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data/dummyData';
import { Mail, ArrowRight } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const { contact, hero } = PORTFOLIO_DATA;

  return (
    <section id="contact" className="py-32 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's build something <span className="text-accent">great.</span></h2>
          <p className="text-lg text-foreground/80 mb-12 max-w-xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <a href={`mailto:${contact.email}`} className="inline-flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-bold text-lg hover:bg-foreground/90 transition-transform hover:scale-105 active:scale-95">
            Say Hello <ArrowRight size={20} />
          </a>

          <div className="mt-16 pt-8 border-t border-border/10 flex justify-between items-center flex-col sm:flex-row gap-4">
            <p className="text-muted text-sm">© {new Date().getFullYear()} {hero.name}. All rights reserved.</p>
            <div className="flex gap-4">
              <a href={contact.github} className="text-muted hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} />
              </a>
              <a href={contact.linkedin} className="text-muted hover:text-foreground transition-colors" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
              </a>
              <a href={`mailto:${contact.email}`} className="text-muted hover:text-foreground transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
