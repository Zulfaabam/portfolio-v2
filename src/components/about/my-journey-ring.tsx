'use client';
import { cn } from '@/lib/utils';
import { IconArrowRight } from '@tabler/icons-react';
import { motion } from 'framer-motion';
import { Link } from '@tanstack/react-router';
import { CSSProperties } from 'react';

export default function MyJourneyRing() {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.4 }}
      className='group relative rounded-2xl bg-secondary bg-opacity-30 p-4 lg:col-start-9 lg:col-end-13 lg:p-5 xl:col-start-10'
    >
      <Link
        to='/journey'
        className={cn(
          'relative flex h-full w-full cursor-pointer items-center justify-center',
        )}
      >
        <div className='absolute hidden animate-spin-slow sm:block'>
          <TextRing text='MY JOURNEY - MY JOURNEY - ' />
        </div>
        <h6 className='text-2xl sm:hidden'>MY JOURNEY</h6>
        <IconArrowRight
          size={72}
          className='animate-bounce-horizontal text-accent transition-all duration-300 sm:text-fg sm:group-hover:animate-bounce-horizontal sm:group-hover:text-accent'
        />
      </Link>
    </motion.div>
  );
}

export interface TextRingProps {
  text: string;
  className?: string;
}

const TextRing = ({ text, className }: TextRingProps) => {
  const CHARS = text.split('');
  const INNER_ANGLE = 360 / CHARS.length;

  // Extend CSSProperties to allow custom properties
  const style: CSSProperties & { '--total'?: number; '--radius'?: number } = {
    '--total': CHARS.length,
    '--radius': 1 / Math.sin(INNER_ANGLE / (180 / Math.PI)),
  };

  return (
    <span className={cn('text-ring', className)} style={style}>
      {CHARS.map((char, index) => (
        <span key={index} style={{ '--index': index } as CSSProperties}>
          {char}
        </span>
      ))}
    </span>
  );
};
