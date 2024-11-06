import { motion } from 'framer-motion';
import TopNav from './TopNav';

export default function Hero() {
  const title = `Hello, I'm Abam`;
  const desc1 = 'Computer Engineering student |';
  const desc2 = 'Front-End Web Developer';

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const sentence2 = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.5,
        staggerChildren: 0.02,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <div
      className='header bg-hero-light dark:bg-hero-dark bg-cover bg-top md:bg-left w-full h-[450px] xl:h-[750px] py-5 sm:py-10 xl:py-20 text-center sm:text-left'
      id='header'
    >
      <TopNav />
      <div className='intro-wrapper h-full flex flex-col sm:flex-row-reverse justify-center items-center sm:gap-4 md:gap-6 lg:gap-12'>
        <motion.div
          className='intro-img flex justify-center items-center'
          initial={{ x: '100vw' }}
          animate={{ x: 0 }}
          transition={{
            type: 'spring',
            duration: 1.5,
          }}
        >
          <img
            src='https://i.ibb.co/R4pTgPX/abam-rounded.png'
            alt="Abam's"
            title="It's me, Abam"
            className='w-[175px] sm:w-[200px] md:w-56 lg:w-72 xl:w-96'
          />
        </motion.div>
        <div className='intro-info p-8 sm:p-0 flex flex-col gap-2 sm:items-start'>
          <motion.h1
            className='title'
            initial='hidden'
            animate='visible'
            variants={sentence}
          >
            {title.split('').map((char, index) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </motion.h1>
          <motion.p
            className='title-span-1 text-white text-sm md:text-lg lg:text-2xl'
            initial='hidden'
            animate='visible'
            variants={sentence2}
          >
            {desc1.split('').map((char, index) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <br />
            {desc2.split('').map((char, index) => {
              return (
                <motion.span key={char + '-' + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
