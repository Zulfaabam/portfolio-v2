'use client';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import useScreenSize from 'hooks/useScreenSize';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function FloatingSocmed() {
  const [visible, setVisible] = useState(true);
  const { width } = useScreenSize();

  const ICON_COLOR: string = '#171717';

  useEffect(() => {
    if (width < 1280) {
      setVisible(false);
    } else {
      setVisible(true);
    }
  }, [width]);

  return (
    <motion.div
      initial={{ x: width < 1280 ? -30 : 0 }}
      animate={{ x: visible ? 0 : -30 }}
      onPan={(e, panInfo) => {
        if (panInfo.velocity.x < 0) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      }}
      onClick={() => {
        if (width > 1280) return;

        setVisible(!visible);
      }}
      className='fixed left-0 top-1/4 z-20 flex h-32 w-9 -translate-y-1/4 flex-col items-center justify-evenly rounded-r-2xl bg-fg/90 xl:h-44 xl:w-12'
    >
      <a
        href='https://github.com/Zulfaabam'
        target='_blank'
        rel='noopener noreferrer'
        className='transition-all duration-300 hover:translate-x-1'
      >
        <IconBrandGithub color={ICON_COLOR} className='xl:h-9 xl:w-9' />
      </a>
      <a
        href='https://www.instagram.com/zfaabam/'
        target='_blank'
        rel='noopener noreferrer'
        className='transition-all duration-300 hover:translate-x-1'
      >
        <IconBrandInstagram color={ICON_COLOR} className='xl:h-9 xl:w-9' />
      </a>
      <a
        href='https://www.linkedin.com/in/zulfa-fatah-akbar-ahmad/'
        target='_blank'
        rel='noopener noreferrer'
        className='transition-all duration-300 hover:translate-x-1'
      >
        <IconBrandLinkedin color={ICON_COLOR} className='xl:h-9 xl:w-9' />
      </a>
    </motion.div>
  );
}
