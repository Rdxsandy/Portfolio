import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data/dummyData';

const Skills = () => {
  const { title, categories } = PORTFOLIO_DATA.skills;

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center">
            <span className="w-8 h-[2px] bg-accent mr-4"></span>
            {title}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, idx) => (
              <motion.div 
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card border border-border/5 rounded-2xl p-6"
              >
                <h3 className="text-xl font-semibold mb-6 text-accent">{category.name}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map(skill => (
                    <span key={skill} className="bg-background border border-border/10 px-3 py-1.5 rounded-lg text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
