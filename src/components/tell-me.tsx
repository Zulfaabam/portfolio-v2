import { fontPacifico } from '@/lib/fonts';
import Section from './section';
import { IconMail } from '@tabler/icons-react';
import { socmedList } from '@/lib/consts';

export default function TellMeSection() {
  return (
    <Section id='tell-me'>
      <div className='rounded-2xl bg-dark/90 px-6 pb-[18px] pt-9 text-fg'>
        <div className='mx-auto max-w-96 space-y-6 text-center'>
          <h2 className='text-4xl font-semibold'>
            Tell me about your Next project
          </h2>
          <div className='mx-auto flex justify-center gap-4'>
            <button className='flex h-10 w-[100px] items-center justify-center gap-1 rounded-full bg-accent text-sm font-medium text-dark'>
              <IconMail size={18} /> Email me
            </button>
            <button className='h-10 w-[100px] rounded-full bg-fg text-sm font-medium text-dark'>
              WhatsApp
            </button>
          </div>
        </div>
        <div className='mb-4 mt-20 h-[1px] w-full bg-fg/90'></div>
        <div className='flex justify-between'>
          <p>
            Portfolio by <span className={`${fontPacifico}`}>Abam</span>
          </p>
          <div className='flex items-center gap-1'>
            {socmedList.map((soc, idx) => (
              <div key={soc.title} className='flex items-center gap-1'>
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
