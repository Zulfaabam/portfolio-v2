import { IconBrandGithub, IconExternalLink } from '@tabler/icons-react';
import Chip from './chip';
import Image from 'next/image';
import { TechStack } from '@/dto/commonDto';

export interface ProjectCardProps {
  image: string;
  title: string;
  desc: string;
  techStack: TechStack[];
  githubUrl: string;
  liveUrl: string;
}

export default function ProjectCard({
  image,
  title,
  desc,
  techStack,
  githubUrl,
  liveUrl,
}: ProjectCardProps) {
  return (
    <div className='rounded-2xl bg-fg p-4'>
      <div className='space-y-2'>
        <div className='relative aspect-video h-[184px] w-full rounded-lg'>
          <Image
            src={image ? image : '/no-image.svg'}
            alt={title}
            fill
            className='rounded-lg object-cover'
          />
        </div>
        <h6 className='text-xl font-medium text-dark'>{title}</h6>
        <p className='text-sm text-dark/80'>{desc}</p>
      </div>
      <div className='mt-12 flex w-full items-center justify-between'>
        <div className='flex items-center gap-1'>
          {techStack.map((tech) => (
            <Chip
              key={tech.id}
              label={tech.name}
              className='bg-gradient-to-br from-dark/70 to-dark text-[10px] text-fg'
            />
          ))}
        </div>
        <div className='flex gap-2'>
          <a
            href={githubUrl}
            className='flex h-8 w-8 items-center justify-center rounded-full bg-dark text-fg'
          >
            <IconBrandGithub size={20} />
          </a>
          <a
            href={liveUrl}
            className='flex h-8 w-8 items-center justify-center rounded-full bg-dark text-fg'
          >
            <IconExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
