import { fontPacifico } from '@/lib/fonts';
import Section from '../section';
import { IconMail } from '@tabler/icons-react';
import { socmedList } from '@/lib/consts';

export default function TellMeSection() {
  return (
    <Section id='tell-me'>
      <div className='rounded-2xl bg-dark/90 px-4 pb-4 pt-5 text-fg md:px-6 md:pb-[18px] md:pt-9'>
        <div className='mx-auto max-w-96 space-y-6 text-center'>
          <h2 className='mx-auto max-w-52 text-center text-3xl font-semibold md:max-w-full md:text-4xl'>
            Tell me about your{' '}
            <span className='relative'>
              Next{' '}
              <span className='absolute -right-12 bottom-0 flex h-4 w-16 -rotate-[30deg] items-center justify-center bg-[#F9E5CF] p-[2px] text-[8px] font-semibold text-dark md:-right-32 md:bottom-7 md:h-5 md:w-[100px] md:text-xs'>
                pun intended :D
              </span>{' '}
            </span>{' '}
            project
          </h2>
          <div className='mx-auto flex justify-center gap-2 md:gap-4'>
            <button className='flex h-9 w-[90px] items-center justify-center gap-1 rounded-full bg-accent text-xs font-medium text-dark md:h-10 md:w-[100px] md:text-sm'>
              <IconMail size={18} /> Email me
            </button>
            <button className='h-9 w-[90px] rounded-full bg-fg text-xs font-medium text-dark md:h-10 md:w-[100px] md:text-sm'>
              WhatsApp
            </button>
          </div>
        </div>
        <div className='mb-2 mt-10 h-[1px] w-full bg-fg/90 md:mb-4 md:mt-20'></div>
        <div className='flex justify-between'>
          <p className='text-xs md:text-base'>
            Portfolio by <span className={`${fontPacifico}`}>Abam</span>
          </p>
          <div className='flex items-center gap-[2px] md:gap-1'>
            {socmedList.map((soc, idx) => (
              <div
                key={soc.id}
                className='flex items-center gap-[2px] text-xs md:gap-1 md:text-base'
              >
                <a
                  href={soc.link}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='transition-all duration-300 hover:text-primary'
                >
                  {soc.title}
                </a>
                {idx !== socmedList.length - 1 ? ' / ' : ''}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
