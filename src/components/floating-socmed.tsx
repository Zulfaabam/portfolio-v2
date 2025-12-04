import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from '@tabler/icons-react';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function FloatingSocmed() {
  const [isClient, setIsClient] = useState(false);
  const [visible, setVisible] = useState(false); // ← stable SSR value

  const ICON_COLOR: string = '#171717';

  useEffect(() => {
    // Now we are on the client — safe to access window
    const width = window.innerWidth;

    // Determine initial visibility after hydration
    setVisible(width >= 1280);
    setIsClient(true);
  }, []);

  const width = isClient ? window.innerWidth : undefined;

  return (
    <motion.div
      // initial={{ x: -24 }}
      // animate={{ x: width && width > 1280 ? 0 : -20 }}
      onPan={(_e, panInfo) => {
        if (panInfo.velocity.x < 0) {
          setVisible(false);
        } else {
          setVisible(true);
        }
      }}
      onClick={() => {
        if (width && width > 1280) return;
        setVisible(!visible);
      }}
      className={`fixed top-1/4 z-20 flex h-32 w-10 -translate-y-1/4 flex-col items-center justify-evenly rounded-r-2xl bg-fg/90 xl:h-44 xl:w-12 ${visible ? 'left-0' : '-left-7'} transition-all duration-300 xl:left-0`}
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
