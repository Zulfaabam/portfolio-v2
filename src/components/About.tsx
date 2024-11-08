// import { useEffect } from 'react';
'use client';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';
import Section from './section';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { IconArrowRight, IconDownload } from '@tabler/icons-react';
import { CSSProperties } from 'react';
import Chip from './ui/chip';

export default function About() {
  // const { ref, inView } = useInView({
  //   threshold: 0.5,
  //   triggerOnce: true,
  // });
  // const animationLeft = useAnimation();
  // const animationRight = useAnimation();

  // useEffect(() => {
  //   if (inView) {
  //     animationLeft.start({
  //       x: 0,
  //       transition: {
  //         type: 'spring',
  //         duration: 1.5,
  //         bounce: 0.3,
  //       },
  //     });
  //     animationRight.start({
  //       x: 0,
  //       transition: {
  //         type: 'spring',
  //         duration: 1.5,
  //         bounce: 0.3,
  //       },
  //     });
  //   } else if (!inView) {
  //     animationLeft.start({
  //       x: '-100vw',
  //     });
  //     animationRight.start({
  //       x: '100vw',
  //     });
  //   }
  // }, [inView, animationLeft, animationRight]);

  const boxClasses = 'rounded-2xl bg-primary p-5 bg-opacity-10';

  const techStack = [
    { name: 'JavaScript', id: 1 },
    { name: 'HTML', id: 2 },
    { name: 'CSS', id: 3 },
    { name: 'TypeScript', id: 4 },
    { name: 'React', id: 5 },
    { name: 'React Native', id: 6 },
    { name: 'Redux', id: 7 },
    { name: 'Next.js', id: 8 },
    { name: 'TailwindCSS', id: 9 },
  ];

  return (
    <Section id='about' className='grid w-full grid-cols-12 gap-6 text-fg'>
      <div className={cn('col-start-1 col-end-5 flex flex-col', boxClasses)}>
        <div className='text-center'>
          <h6 className='text-2xl font-medium'>My Tech Stack</h6>
          <p className='text-sm opacity-80'>I constantly try to improve</p>
          <p className='text-xs opacity-60'>
            (One day, the stack will reach this sentence)
          </p>
        </div>
        <div className='mt-auto flex flex-wrap-reverse justify-center gap-x-1 gap-y-2 px-[9px]'>
          {techStack.map((tech) => (
            <Chip
              key={tech.id}
              label={tech.name}
              className='bg-opacity-70 bg-gradient-to-br from-accent/70 via-[#3BDDF4]/70 to-primary/70 text-sm font-medium text-fg text-opacity-90'
            />
          ))}
        </div>
      </div>
      <div
        className={cn('col-start-5 col-end-10 flex flex-col gap-3', boxClasses)}
      >
        <div className='relative h-20 w-20 rounded-full bg-gray-400'>
          <Image src='/no-image.svg' alt='abam' fill />
        </div>
        <p className='mb-12 text-justify text-base lg:text-xl'>
          Name’s Zulfa Fatah Akbar Ahmad. You can call me Abam. I have 2+ years
          of experience as a Frontend Developer.
        </p>
        <a
          className='mt-auto flex items-center gap-1 text-primary'
          href=''
          download
        >
          <IconDownload /> Download CV
        </a>
      </div>
      <Link
        href='/journey'
        className={cn(
          'group relative col-start-10 col-end-13 flex cursor-pointer items-center justify-center rounded-2xl bg-secondary bg-opacity-30 p-5',
        )}
      >
        <div className='absolute transition-all duration-300 group-hover:animate-spin-slow'>
          <TextRing text='MY JOURNEY - MY JOURNEY - ' />
        </div>
        <IconArrowRight
          size={72}
          className='text-fg transition-all duration-300 group-hover:animate-bounce-horizontal group-hover:text-accent'
        />
      </Link>
      <div className={cn('col-start-1 col-end-8', boxClasses)}>
        <p className='text-justify text-base lg:text-xl [&_span]:text-primary'>
          I build primarily with <span>React</span>, <span>Next.js</span>, and{' '}
          <span>TailwindCSS</span>. I build reactive, progressive, responsive,
          and most importantly cool websites (also mobile apps using{' '}
          <span>React Native</span> 🤫)
        </p>
      </div>
      <div
        className={cn(
          'col-start-8 col-end-13 flex items-center justify-center',
          boxClasses,
        )}
      >
        <p className='text-base lg:text-xl'>
          🌱 Currently learning: Vue and Angular
        </p>
      </div>
    </Section>
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
