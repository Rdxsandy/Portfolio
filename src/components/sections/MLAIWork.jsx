import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data/dummyData';
import { Database } from 'lucide-react';

const MLAIWork = () => {
  const { title, items } = PORTFOLIO_DATA.mlWork;

  return (
    <section id="ml-ai" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
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

          <div className="space-y-8">
            {items.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-card border border-border/5 rounded-2xl p-8 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Database size={120} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 relative z-10">{item.model}</h3>
                
                <div className="space-y-4 relative z-10 text-foreground/80">
                  <p><strong className="text-accent">Dataset:</strong> {item.dataset}</p>
                  <p><strong className="text-accent">Results:</strong> {item.results}</p>
                  <p className="mt-4 pt-4 border-t border-border/10 text-balance">
                    {item.explanation}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MLAIWork;
