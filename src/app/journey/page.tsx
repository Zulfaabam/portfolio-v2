import Section from '@/components/section';
import { Timeline } from '@/components/ui/timeline';
import Image from 'next/image';

const data = [
  {
    title: '2024',
    content: (
      <div>
        <p className='mb-8 text-xs font-normal text-fg md:text-sm'>
          Built and launched Aceternity UI and Aceternity UI Pro from scratch
        </p>
        <div className='grid grid-cols-2 gap-4'>
          <Image
            src='/no-image.svg'
            alt='startup template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
          <Image
            src='/no-image.svg'
            alt='startup template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
          <Image
            src='/no-image.svg'
            alt='startup template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
          <Image
            src='/no-image.svg'
            alt='startup template'
            width={500}
            height={500}
            className='h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60'
          />
        </div>
      </div>
    ),
  },
];

export default function JourneyPage() {
  return (
    <div className='relative min-h-screen w-full bg-dark'>
      <Section id='journey'>
        <Timeline data={data} />
      </Section>
    </div>
  );
}
