'use client';
import { boxClasses } from '@/lib/consts';
import { cn } from '@/lib/utils';
import { IconDownload } from '@tabler/icons-react';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutMeBox() {
  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
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
        Name’s Zulfa Fatah Akbar Ahmad. You can call me Abam. I have 2+ years of
        experience as a Frontend Developer.
      </p>
      <a
        className='mt-auto flex items-center gap-1 text-sm text-primary lg:text-base'
        href=''
        download
      >
        <IconDownload className='h-5 w-5 lg:h-6 lg:w-6' /> Download CV
      </a>
    </motion.div>
  );
}
