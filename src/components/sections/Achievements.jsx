import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data/dummyData';
import { Award } from 'lucide-react';

const Achievements = () => {
  const { achievements } = PORTFOLIO_DATA;

  return (
    <section id="achievements" className="py-24 px-6 bg-card/30">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 flex items-center">
            <span className="w-8 h-[2px] bg-accent mr-4"></span>
            Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-card border border-border/5 rounded-2xl p-6 flex gap-4"
              >
                <div className="text-accent shrink-0">
                  <Award size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{achievement.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
