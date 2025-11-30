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
  const sortedStackId = structuredClone(techStack)
    .sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
    .map((d) => d.id.toString());

  useEffect(() => {
    const container = document.querySelector('.swapy-container');

    const swapy = createSwapy(container, {
      swapMode: 'hover',
    });

    swapy.onSwapEnd(({ data }) => {
      const checkRightAnswer = (arr2: (string | null)[]) =>
        data.array.map((d) => d.itemId).length === arr2.length &&
        data.array
          .map((d) => d.itemId)
          .every((element, index) => element === arr2[index]);

      if (checkRightAnswer(sortedStackId)) {
        console.log('same');
      }
    });

    return () => {
      swapy.destroy();
    };
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
          (Try sorting the stack from the bottom left!)
        </p>
      </div>
      <div className='swapy-container mt-12 flex flex-wrap-reverse justify-center gap-x-1 gap-y-2 px-1 lg:mt-auto'>
        {techStack?.map((tech, idx) => (
          <div data-swapy-slot={idx + 1} key={tech.id}>
            <div data-swapy-item={tech.id}>
              <Chip
                label={tech.name}
                className='bg-linear-to-br cursor-pointer bg-opacity-70 from-accent/70 via-[#3BDDF4]/70 to-primary/70 text-xs font-medium text-fg text-opacity-90 sm:text-sm'
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
