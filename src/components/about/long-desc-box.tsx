'use client';

import { boxClasses } from '@/lib/consts';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export default function LongDescBox() {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.6 }}
      className={cn('lg:col-start-1 lg:col-end-8', boxClasses)}
    >
      <p className='text-justify text-base lg:text-xl [&_span]:text-primary'>
        I build primarily with <span>React</span>, <span>Next.js</span>, and{' '}
        <span>TailwindCSS</span>. I build reactive, progressive, responsive, and
        most importantly cool websites (also mobile apps using{' '}
        <span>React Native</span> 🤫)
      </p>
    </motion.div>
  );
}
