import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';

export default function FloatingSocmed() {
  return (
    <div className='fixed left-0 top-1/4 z-20 flex h-48 w-14 -translate-y-1/4 flex-col items-center justify-evenly rounded-r-2xl bg-fg/90'>
      <a
        href='https://github.com/Zulfaabam'
        target='_blank'
        rel='noopener noreferrer'
        className='transition-all duration-300 hover:translate-x-1'
      >
        <IconBrandGithub size={40} color='#171717' />
      </a>
      <a
        href='https://www.instagram.com/zfaabam/'
        target='_blank'
        rel='noopener noreferrer'
        className='transition-all duration-300 hover:translate-x-1'
      >
        <IconBrandInstagram size={40} color='#171717' />
      </a>
      <a
        href='https://www.linkedin.com/in/zulfa-fatah-akbar-ahmad/'
        target='_blank'
        rel='noopener noreferrer'
        className='transition-all duration-300 hover:translate-x-1'
      >
        <IconBrandLinkedin size={40} color='#171717' />
      </a>
    </div>
  );
}
