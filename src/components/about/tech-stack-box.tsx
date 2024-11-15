'use client';
import { boxClasses } from '@/lib/consts';
import { cn } from '@/lib/utils';
import Chip from '../ui/chip';
import { TechStack } from '@/dto/commonDto';
import { motion } from 'framer-motion';

export interface TechStackBoxProps {
  techStack: TechStack[];
}

export default function TechStackBox({ techStack }: TechStackBoxProps) {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={cn(
        'flex flex-col sm:col-span-2 lg:col-start-1 lg:col-end-5',
        boxClasses,
      )}
    >
      <div className='text-center'>
        <h6 className='text-lg font-medium sm:text-2xl'>My Tech Stack</h6>
        <p className='text-xs opacity-80 sm:text-sm'>
          I constantly try to improve
        </p>
        <p className='text-[10px] opacity-60 sm:text-xs'>
          (One day, the stack will reach this sentence)
        </p>
      </div>
      <div className='mt-12 flex flex-wrap-reverse justify-center gap-x-1 gap-y-2 px-1 lg:mt-auto'>
        {techStack.map((tech) => (
          <Chip
            key={tech.id}
            label={tech.name}
            className='bg-opacity-70 bg-gradient-to-br from-accent/70 via-[#3BDDF4]/70 to-primary/70 text-xs font-medium text-fg text-opacity-90 sm:text-sm'
          />
        ))}
      </div>
    </motion.div>
  );
}
