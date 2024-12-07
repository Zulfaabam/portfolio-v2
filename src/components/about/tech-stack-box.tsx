'use client';
import { boxClasses } from '@/lib/consts';
import { cn } from '@/lib/utils';
import Chip from '../ui/chip';
import { motion } from 'framer-motion';
import { createSwapy } from 'swapy';
import { useEffect } from 'react';

export interface TechStack {
  id: number;
  name: string;
}

export interface TechStackBoxProps {
  techStack: TechStack[];
}

export default function TechStackBox({ techStack }: TechStackBoxProps) {
  useEffect(() => {
    const container = document.querySelector('.swapy-container');

    const swapy = createSwapy(container, {
      animation: 'spring', // or spring or none
      swapMode: 'hover',
    });

    swapy.enable(true);

    swapy.onSwapEnd(({ data, hasChanged }) => {
      console.log(hasChanged);
      console.log('end', data);

      const copiedStack = structuredClone(techStack).sort((a, b) => {
        if (a.name < b.name) {
          return -1;
        }
        if (a.name > b.name) {
          return 1;
        }
        return 0;
      });

      console.log(copiedStack);

      const compareArrays = (
        arr1: (string | null)[],
        arr2: (string | null)[],
      ) =>
        arr1.length === arr2.length &&
        arr1.every((element, index) => element === arr2[index]);

      if (
        compareArrays(
          data.array.map((d) => d.itemId),
          copiedStack.map((d) => d.id.toString()),
        )
      ) {
        console.log('same');
      }
    });
  }, []);

  return (
    <motion.div
      initial={{ y: -10, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
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
          (Try sorting the stack and get surprised!)
        </p>
      </div>
      <div className='swapy-container mt-12 flex flex-wrap-reverse justify-center gap-x-1 gap-y-2 px-1 lg:mt-auto'>
        {techStack?.map((tech, idx) => (
          <div data-swapy-slot={idx + 1} key={tech.id}>
            <div data-swapy-item={tech.id}>
              <Chip
                label={tech.name}
                className='cursor-pointer bg-opacity-70 bg-gradient-to-br from-accent/70 via-[#3BDDF4]/70 to-primary/70 text-xs font-medium text-fg text-opacity-90 sm:text-sm'
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
