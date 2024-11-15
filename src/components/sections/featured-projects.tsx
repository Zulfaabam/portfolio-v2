import Link from 'next/link';
import Section from '../section';
import { IconArrowRight } from '@tabler/icons-react';
import ProjectCard from '../ui/project-card';
import { createClient } from '@/lib/supabase/server';

export default async function FeaturedProjects() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('projects')
    .select(
      `*, tech_stack:project_tech_stack(id:tech_stack_id, tech_stack(name))`,
    )
    .eq('is_featured', true);

  if (error) {
    return (
      <Section id='featured-projects'>
        <p className='text-red-500'>{error.message}</p>
      </Section>
    );
  }

  const projects = data.map((d) => ({
    ...d,
    tech_stack: d.tech_stack.map(
      (stack: { id: number; tech_stack: { name: string } }) => ({
        id: stack.id,
        name: stack.tech_stack.name,
      }),
    ),
  }));

  return (
    <Section id='featured-projects' className='space-y-6 lg:space-y-11'>
      <div className='flex w-full items-center justify-between text-fg'>
        <div className='w-fit space-y-1 lg:space-y-2'>
          <h2 className='text-xl font-medium md:text-4xl'>
            Featured Projects ⚙️
          </h2>
          <div className='h-1 w-full bg-accent shadow-[4px_4px_8px_1px_#76C1FF]'></div>
        </div>
        <Link
          href='/projects'
          className='flex items-center gap-1 text-xs underline md:text-base'
        >
          All projects <IconArrowRight className='h-4 w-4 md:h-6 md:w-6' />
        </Link>
      </div>
      <div className='flex snap-x snap-mandatory gap-3 overflow-x-scroll px-1 py-2 scrollbar-hide *:snap-center lg:grid lg:grid-cols-3 lg:gap-6 lg:overflow-visible lg:px-0 lg:py-0'>
        {projects.map((p, idx) => (
          <ProjectCard key={p.id} idx={idx + 1} {...p} />
        ))}
      </div>
    </Section>
  );
}
