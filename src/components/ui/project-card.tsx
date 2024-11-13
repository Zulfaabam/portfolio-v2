'use client';
import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import Chip from './chip';
import Image from 'next/image';
import { TechStack } from '@/dto/commonDto';
import { motion } from 'framer-motion';

export interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tech_stack?: TechStack[];
  github_url: string;
  live_url: string;
}

export default function ProjectCard({
  image,
  title,
  description,
  tech_stack,
  github_url,
  live_url,
}: ProjectCardProps) {
  return (
    <div className='rounded-2xl bg-fg p-4'>
      <div className='space-y-2'>
        <motion.div
          whileHover={{
            scale: 1.75,
            zIndex: 10,
            translateY: 60,
          }}
          className='relative aspect-video w-full cursor-zoom-in rounded-lg'
        >
          <Image
            src={image ? image : '/no-image.svg'}
            alt={title}
            fill
            className='rounded-lg object-cover'
          />
        </motion.div>
        <h6 className='text-xl font-medium text-dark'>{title}</h6>
        <p className='line-clamp-3 h-[60px] text-sm text-dark/80'>
          {description}
        </p>
      </div>
      <div className='mt-12 flex w-full items-center justify-between'>
        <div className='flex items-center gap-1'>
          {tech_stack?.map((tech) => (
            <Chip
              key={tech.id}
              label={tech.name}
              className='bg-gradient-to-br from-dark/70 to-dark text-[10px] text-fg'
            />
          ))}
        </div>
        <div className='flex items-center gap-2'>
          {!github_url && !live_url && (
            <p className='mt-auto h-8 text-sm leading-8'>Privated</p>
          )}
          {github_url && (
            <motion.a
              whileHover={{ translateY: -3, translateX: 3 }}
              href={github_url}
              className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-dark text-fg'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IconBrandGithub size={20} />
            </motion.a>
          )}
          {live_url && (
            <motion.a
              whileHover={{ translateY: -3, translateX: 3 }}
              href={live_url}
              className='flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-dark text-fg'
              target='_blank'
              rel='noopener noreferrer'
            >
              <IconExternalLink size={20} />
            </motion.a>
          )}
        </div>
      </div>
    </div>
  );
}
