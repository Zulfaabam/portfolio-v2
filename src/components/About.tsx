import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from 'react-router-dom';
import { AiOutlineArrowRight } from 'react-icons/ai';

export default function About() {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });
  const animationLeft = useAnimation();
  const animationRight = useAnimation();

  useEffect(() => {
    if (inView) {
      animationLeft.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1.5,
          bounce: 0.3,
        },
      });
      animationRight.start({
        x: 0,
        transition: {
          type: 'spring',
          duration: 1.5,
          bounce: 0.3,
        },
      });
    } else if (!inView) {
      animationLeft.start({
        x: '-100vw',
      });
      animationRight.start({
        x: '100vw',
      });
    }
  }, [inView, animationLeft, animationRight]);

  return (
    <div
      className='about bg-white dark:bg-dark w-full py-6 text-center overflow-hidden'
      id='about'
    >
      <h2 className='subtitle'>About Me</h2>
      <div
        ref={ref}
        className='about-wrapper w-full flex md:justify-center md:items-center md:text-left'
      >
        <motion.div
          className='illustration hidden md:block'
          animate={animationLeft}
        >
          <img
            src='https://i.ibb.co/XSrjqCb/Web-Developer-Flatline.png'
            alt='Developer illustration'
            className='w-96 lg:w-[400px] xl:w-[450px]'
          />
        </motion.div>
        <motion.div
          className='about-details-wrapper flex flex-col justify-center items-center md:items-start mt-12 md:mt-0 p-7 max-w-md mx-auto md:mx-0'
          animate={animationRight}
        >
          <img
            src='https://i.ibb.co/M7yRxfv/mdi-hand-wave-outline.png'
            alt='waving icon'
            className='animate-wave origin-[10%_70%]'
          />
          <p className='text-dark dark:text-white text-sm font-medium my-2 lg:text-lg'>
            My name is Zulfa Fatah Akbar Ahmad, you can call me Abam. I am 21
            years old and a final-year student of Computer Engineering at
            Diponegoro University, Indonesia. Currently working as a part-time
            Front-end Developer at{' '}
            <a
              href='https://www.bukitvista.com/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-orange-600 dark:text-orange-400 transition-all hover:text-blue dark:hover:text-blue-light underline'
            >
              Bukit Vista
            </a>{' '}
            specialize in React JS and Redux.
          </p>
          <div className='links mt-12'>
            <Link
              to='/full-profile'
              className='text-dark dark:text-white flex justify-center items-center gap-1 transition-all hover:text-blue dark:hover:text-blue-light underline'
            >
              Read More <AiOutlineArrowRight />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
