// import { useEffect } from 'react';
'use client';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { AiOutlineArrowRight } from 'react-icons/ai';
import Link from 'next/link';
import Section from './section';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { IconDownload } from '@tabler/icons-react';

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
    { name: 'HTML', id: 1 },
    { name: 'React', id: 2 },
    { name: 'Next.js', id: 3 },
    { name: 'Next.js', id: 4 },
    { name: 'Next.js', id: 5 },
    { name: 'Next.js', id: 6 },
  ];

  return (
    <Section id='about' className='grid w-full grid-cols-12 gap-6 text-fg'>
      <div className={cn('col-start-1 col-end-5', boxClasses)}>
        <div className='mx-auto flex aspect-square w-[250px] flex-col items-center justify-center'>
          <h6 className='text-2xl font-medium'>My Tech Stack</h6>
          <p>I constantly try to improve</p>
        </div>
      </div>
      <div
        className={cn('col-start-5 col-end-10 flex flex-col gap-3', boxClasses)}
      >
        <div className='aspect-square w-20 rounded-full bg-gray-400'>
          {/* <Image
            src='https://i.ibb.co/R4pTgPX/abam-rounded.png'
            alt='abam'
            fill
          /> */}
        </div>
        <p className='text-justify text-base lg:text-xl'>
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
      <div
        className={cn(
          'col-start-10 col-end-13 rounded-2xl bg-secondary bg-opacity-30 p-5',
        )}
      >
        a
      </div>
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
