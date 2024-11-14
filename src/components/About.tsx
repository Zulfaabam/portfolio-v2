import Link from 'next/link';
import Section from './section';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { IconArrowRight, IconDownload } from '@tabler/icons-react';
import { CSSProperties } from 'react';
import Chip from './ui/chip';
import { techStack as techStackBackup } from '@/lib/consts';
import { createClient } from '@/lib/supabase/server';

export default async function About() {
  const boxClasses = 'rounded-2xl bg-primary p-4 lg:p-5 bg-opacity-10';

  const supabase = await createClient();

  const { data, error: techStackError } = await supabase
    .from('tech_stack')
    .select('*');

  const techStack = techStackError ? techStackBackup : data;

  return (
    <Section
      id='about'
      className='grid w-full grid-cols-1 gap-2 text-fg sm:grid-cols-2 lg:grid-cols-12 xl:gap-6'
    >
      <div
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
      </div>
      <div
        className={cn(
          'flex flex-col gap-3 lg:col-start-5 lg:col-end-9 xl:col-end-10',
          boxClasses,
        )}
      >
        <div className='relative aspect-square w-[60px] rounded-full md:w-20'>
          <Image
            src='/abam.jpg'
            alt='abam'
            fill
            priority
            className='rounded-full'
          />
        </div>
        <p className='mb-6 text-justify text-base lg:mb-12 lg:text-xl'>
          Name’s Zulfa Fatah Akbar Ahmad. You can call me Abam. I have 2+ years
          of experience as a Frontend Developer.
        </p>
        <a
          className='mt-auto flex items-center gap-1 text-sm text-primary lg:text-base'
          href=''
          download
        >
          <IconDownload className='h-5 w-5 lg:h-6 lg:w-6' /> Download CV
        </a>
      </div>
      <Link
        href='/journey'
        className={cn(
          'group relative flex cursor-pointer items-center justify-center rounded-2xl bg-secondary bg-opacity-30 p-4 lg:col-start-9 lg:col-end-13 lg:p-5 xl:col-start-10',
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
      <div className={cn('lg:col-start-1 lg:col-end-8', boxClasses)}>
        <p className='text-justify text-base lg:text-xl [&_span]:text-primary'>
          I build primarily with <span>React</span>, <span>Next.js</span>, and{' '}
          <span>TailwindCSS</span>. I build reactive, progressive, responsive,
          and most importantly cool websites (also mobile apps using{' '}
          <span>React Native</span> 🤫)
        </p>
      </div>
      <div
        className={cn(
          'flex items-center justify-center lg:col-start-8 lg:col-end-13',
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
