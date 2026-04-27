import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data/dummyData';

const About = () => {
  const { title, description1, description2 } = PORTFOLIO_DATA.about;

  return (
    <section id="about" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 flex items-center">
            <span className="w-8 h-[2px] bg-accent mr-4"></span>
            {title}
          </h2>
          
          <div className="space-y-6 text-lg text-foreground/80 leading-relaxed text-balance">
            <p>{description1}</p>
            <p>{description2}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
