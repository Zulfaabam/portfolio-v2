import { boxClasses } from '@/lib/consts';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function LearningBox() {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.8 }}
      className={cn(
        'flex items-center justify-center lg:col-start-8 lg:col-end-13',
        boxClasses,
      )}
    >
      <p className='text-base lg:text-xl'>
        🌱 Currently learning: Vue and Angular
      </p>
    </motion.div>
  );
}
