import { motion } from 'framer-motion';
import { PORTFOLIO_DATA } from '../../data/dummyData';
import { Trophy, Code2 } from 'lucide-react';

const CPProfile = () => {
  const { title, platforms } = PORTFOLIO_DATA.cpProfile;

  return (
    <section id="cp" className="py-24 px-6 bg-card/30">
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

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {platforms.map((platform, idx) => (
              <motion.a 
                href={platform.url || "#"}
                target={platform.url ? "_blank" : "_self"}
                rel="noopener noreferrer"
                key={platform.name}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-card border border-border/5 rounded-2xl p-8 text-center block hover:border-accent/30 transition-colors cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto bg-background rounded-full flex items-center justify-center mb-6 border border-border/10 text-accent group-hover:bg-accent/10 transition-colors">
                  {idx === 0 ? <Trophy size={28} /> : <Code2 size={28} />}
                </div>
                <h3 className="text-xl font-bold mb-2">{platform.name}</h3>
                <p className="text-accent font-semibold text-lg mb-1">{platform.rating}</p>
                <p className="text-muted text-sm">
                  {isNaN(platform.solved) ? `${platform.solved} Problems` : `${platform.solved}+ Problems Solved`}
                </p>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CPProfile;
