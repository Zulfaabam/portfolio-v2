import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';

export default function FloatingSocmed() {
  const ICON_SIZE: number = 36;
  const ICON_COLOR: string = '#171717';

  return (
    <div className='fixed left-0 top-1/4 z-20 flex h-44 w-12 -translate-y-1/4 flex-col items-center justify-evenly rounded-r-2xl bg-fg/90'>
      <a
        href='https://github.com/Zulfaabam'
        target='_blank'
        rel='noopener noreferrer'
        className='transition-all duration-300 hover:translate-x-1'
      >
        <IconBrandGithub size={ICON_SIZE} color={ICON_COLOR} />
      </a>
      <a
        href='https://www.instagram.com/zfaabam/'
        target='_blank'
        rel='noopener noreferrer'
        className='transition-all duration-300 hover:translate-x-1'
      >
        <IconBrandInstagram size={ICON_SIZE} color={ICON_COLOR} />
      </a>
      <a
        href='https://www.linkedin.com/in/zulfa-fatah-akbar-ahmad/'
        target='_blank'
        rel='noopener noreferrer'
        className='transition-all duration-300 hover:translate-x-1'
      >
        <IconBrandLinkedin size={ICON_SIZE} color={ICON_COLOR} />
      </a>
    </div>
  );
}
