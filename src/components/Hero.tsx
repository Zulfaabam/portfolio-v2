'use client';
import { motion } from 'framer-motion';
import { ShootingStars } from './ui/shooting-stars';
import { StarsBackground } from './ui/stars-background';
import { fontPacifico } from '@/lib/fonts';
import BorderMagicBtn from './ui/border-magic-btn';

export default function Hero() {
  return (
    <div className='relative flex h-[40rem] w-full items-center justify-center bg-dark'>
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        className='relative z-10 flex w-full flex-col items-center justify-center gap-3 md:gap-4'
      >
        <h3 className={`${fontPacifico} text-base text-fg md:text-2xl`}>
          Hi, I am Abam
        </h3>
        <h2 className='relative mx-auto max-w-5xl bg-gradient-to-b from-neutral-800 via-white to-white bg-clip-text text-center text-3xl font-medium tracking-tight text-transparent md:text-5xl md:leading-tight'>
          <span>I make web, good web</span>
          <span className='text-yellow-300'>👍</span>
        </h2>
        <div className='mt-2'>
          <BorderMagicBtn
            onClick={() => console.log('hire me')}
            text='Hire me'
          />
        </div>
      </motion.div>
      <ShootingStars />
      <StarsBackground />
    </div>
  );
}
