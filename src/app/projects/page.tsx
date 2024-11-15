import Section from '@/components/section';
import ProjectCard from '@/components/ui/project-card';
import { createClient } from '@/lib/supabase/server';

export default async function ProjectsPage() {
  const supabase = await createClient();

  const { data, error } = await supabase
    .from('projects')
    .select(
      `*, tech_stack:project_tech_stack(id:tech_stack_id, tech_stack(name))`,
    );

  if (error) {
    return (
      <div className='relative min-h-screen w-full bg-dark'>
        <Section id='projects'>
          <p className='text-red-500'>{error.message}</p>
        </Section>
      </div>
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
    <div className='relative min-h-screen w-full bg-dark'>
      <Section id='projects'>
        <div className='px-4 py-10 md:px-8 lg:px-10 lg:py-20'>
          <h2 className='mb-4 max-w-4xl text-2xl text-fg md:text-4xl'>
            My Projects
          </h2>
          <p className='max-w-sm text-sm text-fg md:text-base'>
            Various projects I built, from day one I learn Frontend Development
            until now. Some I built it solo, some collaborated with other devs
            during my office work. Please take a look.
          </p>
        </div>
        <div className='grid grid-cols-1 gap-3 px-4 sm:grid-cols-2 md:gap-6 md:px-8 lg:px-10'>
          {projects.map((p) => (
            <ProjectCard key={p.id} {...p} />
          ))}
        </div>
      </Section>
    </div>
  );
}
