'use client';
import { AnimatePresence, motion } from 'framer-motion';
import { ShootingStars } from '../ui/shooting-stars';
import { StarsBackground } from '../ui/stars-background';
import { useEffect, useState } from 'react';
import { IconArrowNarrowDownDashed } from '@tabler/icons-react';

export default function HeroSection() {
  const [wordIndex, setWordIndex] = useState<number>(0);

  const words = [
    {
      id: 1,
      content: (
        <motion.span
          animate={{
            x: [0.5, 0.25, 0, -0.25, -0.5],
            y: [-0.6, 0.6, 0, -0.6, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 0.1,
            repeatType: 'reverse',
          }}
          className='via-fg inline-block bg-linear-to-b from-white via-30% to-blue-500 bg-clip-text text-transparent'
        >
          cool<span className='text-fg'>🥶</span>
        </motion.span>
      ),
    },
    {
      id: 2,
      content: (
        <span className='via-fg inline-block bg-linear-to-b from-white via-30% to-yellow-500 bg-clip-text text-transparent'>
          good
          <motion.span
            animate={{
              y: [2, 0, 2],
              x: [-0.5, 0, -0.5],
              rotateZ: ['-10deg', 0, '10deg'],
              scaleX: [1.1, 1, 1.1],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.25,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
            className='text-fg inline-block'
          >
            👍
          </motion.span>
        </span>
      ),
    },
    {
      id: 3,
      content: (
        <motion.span
          animate={{
            x: [-0.6, -0.3, 0, 0.3, 0.6],
            y: [0, 0.6, 0, 0.6, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 1,
            repeatType: 'reverse',
          }}
          className='via-fg inline-block bg-linear-to-b from-white via-30% to-pink-600 bg-clip-text text-transparent'
        >
          cute<span className='text-fg'>😻</span>
        </motion.span>
      ),
    },
  ];

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((state) => {
        if (state >= words.length - 1) return 0;
        return state + 1;
      });
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className='bg-dark relative flex h-160 w-full items-center justify-center'>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0.1, 0.25, 0.4, 0.5, 0.75, 1] }}
        transition={{ ease: 'easeInOut' }}
        className='relative z-10 flex w-full flex-col items-center justify-center gap-3 md:gap-4'
      >
        <h3 className={`font-pacifico text-fg text-base md:text-2xl`}>
          Hi, I am Abam
        </h3>
        <h1 className='text-fg relative mx-auto max-w-5xl text-center text-3xl font-medium tracking-tight md:text-5xl md:leading-tight'>
          I make web,{' '}
          <AnimatePresence>
            <motion.span
              key={words[wordIndex].id}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0, position: 'absolute' }}
              transition={{ ease: 'easeInOut' }}
            >
              {words[wordIndex].content}
            </motion.span>
          </AnimatePresence>{' '}
          web
        </h1>
        <div className='text-fg text-opacity-80 mt-2 flex flex-col items-center'>
          <h6>Get to know me</h6>
          <IconArrowNarrowDownDashed stroke={1.5} className='h-16 w-16' />
        </div>
      </motion.div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
