import Link from 'next/link';
import Section from './section';
import { IconArrowRight } from '@tabler/icons-react';

import ProjectCard, { ProjectCardProps } from './ui/project-card';

const projects: ProjectCardProps[] = [
  {
    image: '',
    title: 'Sunnyside',
    desc: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    techStack: [
      {
        id: 1,
        name: 'React',
      },
    ],
    githubUrl: '',
    liveUrl: '',
  },
  {
    image: '',
    title: 'Sunnyside 2',
    desc: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    techStack: [
      {
        id: 1,
        name: 'React',
      },
    ],
    githubUrl: '',
    liveUrl: '',
  },
  {
    image: '',
    title: 'Sunnyside 3',
    desc: 'Lorem ipsum lorem ipsum lorem ipsum lorem ipsum Lorem ipsum lorem ipsum lorem ipsum lorem ipsum',
    techStack: [
      {
        id: 1,
        name: 'React',
      },
    ],
    githubUrl: '',
    liveUrl: '',
  },
];

export default function FeaturedProjects() {
  return (
    <Section id='featured-projects' className='space-y-11'>
      <div className='flex w-full items-center justify-between text-fg'>
        <div className='w-fit space-y-2'>
          <h2 className='text-5xl font-medium'>Featured Projects ⚙️</h2>
          <div className='h-1 w-full bg-accent shadow-[4px_4px_8px_1px_#76C1FF]'></div>
        </div>
        <Link href='/projects' className='flex items-center gap-1 underline'>
          All projects <IconArrowRight />
        </Link>
      </div>
      <div className='grid grid-cols-3 gap-6'>
        {projects.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </Section>
  );
}
