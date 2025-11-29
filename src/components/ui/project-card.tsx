'use client';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import Chip from './chip';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { TechStack } from '../about/tech-stack-box';

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tech_stack?: TechStack[];
  github_url: string;
  live_url: string;
  idx: number;
}

export default function ProjectCard({
  image,
  title,
  description,
  tech_stack,
  github_url,
  live_url,
  idx,
}: ProjectCardProps) {
  const pathname = usePathname();

  const isProjectsPage = pathname === '/projects';

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: isProjectsPage ? 0 : idx * 0.2,
        duration: isProjectsPage ? 0.75 : 0.5,
      }}
      viewport={{
        once: true,
        amount:
          typeof window !== 'undefined' && window.innerWidth < 1024
            ? 0.1
            : isProjectsPage
              ? 0.2
              : 0.65,
      }}
      className='bg-fg min-w-[285px] rounded-2xl p-3 shadow-[0_0_5px_1.5px_rgba(234,240,245,1)] lg:w-full lg:p-4'
    >
      <div className='space-y-1 lg:space-y-2'>
        <motion.div
          whileHover={{
            scale: 1.5,
            zIndex: 10,
            translateY: 60,
            skewY: idx % 2 === 0 ? 2 : -2,
          }}
          className='relative aspect-video w-full cursor-zoom-in rounded-lg hover:shadow-md hover:shadow-neutral-700'
        >
          <Image
            src={image ? image : '/no-image.svg'}
            alt={title}
            fill
            className='rounded-lg object-cover'
          />
        </motion.div>
        <h6 className='text-dark text-lg font-medium lg:text-xl'>{title}</h6>
        <p className='text-dark/80 line-clamp-3 h-[60px] text-xs lg:text-sm'>
          {description}
        </p>
      </div>
      <div className='mt-8 flex w-full justify-between gap-2 lg:mt-12 lg:items-center'>
        <div className='flex items-center gap-[2px] lg:gap-1'>
          {tech_stack?.map((tech) => (
            <Chip
              key={tech.id}
              label={tech.name}
              className='from-dark/70 to-dark text-fg bg-linear-to-br text-[10px]'
            />
          ))}
        </div>
        <div className='flex items-center gap-1 lg:gap-2'>
          {!github_url && !live_url && (
            <p className='mt-auto h-8 text-sm leading-8'>Privated</p>
          )}
          {github_url && (
            <motion.a
              whileHover={{ translateY: -3, translateX: 3 }}
              href={github_url}
              className='bg-dark text-fg flex h-7 w-7 cursor-pointer items-center justify-center rounded-full lg:h-8 lg:w-8'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IconBrandGithub className='h-5 w-5' />
            </motion.a>
          )}
          {live_url && (
            <motion.a
              whileHover={{ translateY: -3, translateX: 3 }}
              href={live_url}
              className='bg-dark text-fg flex h-7 w-7 cursor-pointer items-center justify-center rounded-full lg:h-8 lg:w-8'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IconExternalLink className='h-5 w-5' />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
